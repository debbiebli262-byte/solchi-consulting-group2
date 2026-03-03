import React, { useEffect, useState } from "react";

type ContrastMode = "normal" | "high";

const FONT_KEY = "a11y_font_scale";
const CONTRAST_KEY = "a11y_contrast";
const HIDE_KEY = "a11y_widget_hidden";

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

const AccessibilityWidget: React.FC = () => {
  const [open, setOpen] = useState(false);

  // מאפשר למשתמש "להסתיר" את הווידג'ט
  const [hidden, setHidden] = useState<boolean>(() => {
    const saved = localStorage.getItem(HIDE_KEY);
    return saved === "1";
  });

  const [fontScale, setFontScale] = useState<number>(() => {
    const saved = Number(localStorage.getItem(FONT_KEY));
    return Number.isFinite(saved) ? saved : 1;
  });

  const [contrast, setContrast] = useState<ContrastMode>(() => {
    const saved = localStorage.getItem(CONTRAST_KEY);
    return saved === "high" ? "high" : "normal";
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${clamp(fontScale, 0.9, 1.25) * 100}%`;
    localStorage.setItem(FONT_KEY, String(fontScale));
  }, [fontScale]);

  useEffect(() => {
    document.body.classList.toggle("a11y-high-contrast", contrast === "high");
    localStorage.setItem(CONTRAST_KEY, contrast);
  }, [contrast]);

  useEffect(() => {
    // ESC סוגר את הפאנל
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    localStorage.setItem(HIDE_KEY, hidden ? "1" : "0");
    if (hidden) setOpen(false);
  }, [hidden]);

  const reset = () => {
    setFontScale(1);
    setContrast("normal");
    setHidden(false);
    localStorage.removeItem(FONT_KEY);
    localStorage.removeItem(CONTRAST_KEY);
    localStorage.removeItem(HIDE_KEY);
  };

  if (hidden) return null;

  return (
    <>
      {/* כפתור נגישות - נשאר תמיד fixed */}
      <div className="fixed bottom-6 left-6 z-[9999]">
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center hover:scale-105"
            aria-label="נגישות"
            aria-expanded={open}
          >
            <AccessibilityIcon className="w-7 h-7" />
          </button>

          {/* X קטן לסגירה/הסתרה */}
          <button
            type="button"
            onClick={() => setHidden(true)}
            aria-label="הסתר נגישות"
            title="הסתר"
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-slate-200 text-slate-700 shadow hover:bg-slate-50 flex items-center justify-center"
          >
            <XIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* פאנל נגישות - גם fixed, כדי שלא “יזוז” */}
      <div
        className={`fixed bottom-24 left-6 z-[9998] w-72 rounded-2xl bg-white border border-slate-200 shadow-2xl p-4 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
        role="dialog"
        aria-label="אפשרויות נגישות"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="font-bold text-slate-800 text-lg">נגישות</div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="סגור"
            className="text-slate-500 hover:text-slate-800"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* גודל טקסט */}
        <div className="mb-4">
          <div className="text-sm font-semibold text-slate-700 mb-2">גודל טקסט</div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setFontScale((s) => clamp(Number((s - 0.05).toFixed(2)), 0.9, 1.25))}
              className="flex-1 rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-50"
            >
              A-
            </button>
            <button
              type="button"
              onClick={() => setFontScale((s) => clamp(Number((s + 0.05).toFixed(2)), 0.9, 1.25))}
              className="flex-1 rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-50"
            >
              A+
            </button>
          </div>
        </div>

        {/* ניגודיות */}
        <div className="mb-4">
          <button
            type="button"
            onClick={() => setContrast((c) => (c === "high" ? "normal" : "high"))}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-50 flex items-center justify-between"
            aria-pressed={contrast === "high"}
          >
            <span className="text-slate-800">ניגודיות גבוהה</span>
            <span className="text-slate-500">{contrast === "high" ? "ON" : "OFF"}</span>
          </button>
        </div>

        {/* Reset */}
        <button
          type="button"
          onClick={reset}
          className="w-full rounded-xl bg-slate-900 text-white px-3 py-2 hover:bg-slate-800 transition-colors"
        >
          Reset
        </button>

        {/* החזרה אחרי הסתרה: המשתמש יכול תמיד לעשות Reset */}
        <div className="mt-3 text-xs text-slate-500 leading-relaxed">
          ניתן להסתיר את הכפתור עם ה-X. כדי להחזיר אותו — לחצי Reset.
        </div>
      </div>
    </>
  );
};

export default AccessibilityWidget;

/* ---------- Icons (SVG) ---------- */

const AccessibilityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    {/* head */}
    <circle cx="12" cy="4.5" r="1.6" />
    {/* body */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v4" />
    {/* arms */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9.5c3 1.6 9 1.6 12 0" />
    {/* legs */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.2 21l1.8-6 1.8 6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 15h5" />
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
  </svg>
);
