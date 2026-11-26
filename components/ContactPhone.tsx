import React, { useMemo, useRef, useState } from "react";
import {
  getCountries,
  getCountryCallingCode,
  getExampleNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js/min";
import type { CountryCode } from "libphonenumber-js";
import examples from "libphonenumber-js/examples.mobile.json";
import type { Lang } from "../i18n";

const countries = getCountries().filter((country) => country !== "PS");

const messages = {
  he: {
    country: "מדינה וקידומת חיוג",
    search: "חיפוש מדינה או קידומת",
    invalid: "יש להזין מספר טלפון שמתאים למדינה ולקידומת שנבחרו.",
  },
  en: {
    country: "Country and calling code",
    search: "Search country or calling code",
    invalid: "Enter a phone number that matches the selected country and calling code.",
  },
  ja: {
    country: "国・地域と国番号",
    search: "国・地域または国番号を検索",
    invalid: "選択した国・地域と国番号に合う電話番号を入力してください。",
  },
};

export function normalizeContactPhone(value: string, country: CountryCode): string | null {
  const input = value.trim();
  if (!input) return "";

  const phone = parsePhoneNumberFromString(input, { defaultCountry: country, extract: false });
  if (
    !phone?.isPossible() ||
    phone.countryCallingCode !== getCountryCallingCode(country) ||
    (phone.country && phone.country !== country) ||
    phone.ext
  ) {
    return null;
  }

  return phone.number;
}

function CountryFlag({ country, lazy }: { country: CountryCode; lazy?: boolean }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${country.toLowerCase()}.png`}
      alt=""
      width={20}
      loading={lazy ? "lazy" : undefined}
      referrerPolicy="no-referrer"
      className="w-5 flex-none rounded-sm"
    />
  );
}

interface ContactPhoneProps {
  label: string;
  language: Lang;
  country: CountryCode;
  value: string;
  invalid: boolean;
  onCountryChange: (country: CountryCode) => void;
  onChange: (value: string) => void;
}

export default function ContactPhone({
  label, language, country, value, invalid, onCountryChange, onChange,
}: ContactPhoneProps) {
  const copy = messages[language];
  const [query, setQuery] = useState("");
  const menu = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const choices = useMemo(() => {
    const names = typeof Intl.DisplayNames === "function"
      ? new Intl.DisplayNames([language], { type: "region" })
      : undefined;
    const collator = new Intl.Collator(language);
    return countries.map((code) => ({
      code,
      name: names?.of(code) ?? code,
      prefix: getCountryCallingCode(code),
    })).sort((a, b) => collator.compare(a.name, b.name));
  }, [language]);
  const selected = choices.find((choice) => choice.code === country);
  const search = query.trim().toLocaleLowerCase(language);
  const matches = choices.filter(({ name, prefix }) => (
    name.toLocaleLowerCase(language).includes(search) || `+${prefix}`.includes(search)
  ));
  const example = getExampleNumber(country, examples)?.formatNational();
  const control = "rounded-2xl border focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none bg-slate-50/50";

  return (
    <div className="min-w-0 space-y-2">
      <label htmlFor="contact-phone" className="block text-sm font-bold text-slate-700">
        {label}
      </label>
      <div className="relative grid grid-cols-[auto,minmax(0,1fr)] gap-2" dir="ltr">
        <button
          ref={trigger}
          type="button"
          popoverTarget="contact-phone-countries"
          aria-label={`${copy.country}: ${selected?.name} +${selected?.prefix}`}
          onClick={() => setQuery("")}
          className={`${control} inline-flex items-center justify-center gap-2 border-slate-200 px-3 text-sm font-medium text-slate-700`}
        >
          <CountryFlag country={country} />
          <span>+{selected?.prefix}</span>
          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <div
          ref={menu}
          id="contact-phone-countries"
          popover="auto"
          aria-label={copy.country}
          role="region"
          className="m-auto max-h-[70vh] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 text-slate-800 shadow-xl"
          dir={language === "he" ? "rtl" : "ltr"}
          style={{ inset: 0, width: "min(24rem, calc(100% - 2rem))" }}
        >
          <input
            autoFocus
            type="search"
            aria-label={copy.search}
            placeholder={copy.search}
            value={query}
            onChange={(event) => setQuery(event.currentTarget.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") event.preventDefault();
            }}
            className="mb-2 w-full rounded-xl border border-slate-200 px-3 py-2"
          />
          <ul className="max-h-[50vh] overflow-auto">
            {matches.map(({ code, name, prefix }) => (
              <li key={code}>
                <button
                  type="button"
                  aria-pressed={code === country}
                  onClick={() => {
                    onCountryChange(code);
                    menu.current?.hidePopover();
                    trigger.current?.focus();
                  }}
                  className={`grid w-full grid-cols-[auto,1fr,auto] items-center gap-3 rounded-lg px-3 py-2 text-start hover:bg-blue-50 focus-visible:bg-blue-50 ${code === country ? "bg-blue-50 font-semibold" : ""}`}
                >
                  <CountryFlag country={code} lazy />
                  <span>{name}</span>
                  <bdi dir="ltr">+{prefix}</bdi>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <input
          id="contact-phone"
          type="tel"
          autoComplete="tel-national"
          aria-invalid={invalid || undefined}
          aria-describedby={invalid ? "contact-phone-error" : undefined}
          maxLength={40}
          value={value}
          onChange={(event) => onChange(event.currentTarget.value)}
          className={`${control} min-w-0 w-full px-3 py-4 ${invalid ? "border-red-500" : "border-slate-200"}`}
          placeholder={example}
        />
      </div>
      {invalid && <p id="contact-phone-error" role="alert" className="text-sm text-red-600">{copy.invalid}</p>}
    </div>
  );
}
