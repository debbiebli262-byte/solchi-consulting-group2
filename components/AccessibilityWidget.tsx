import React, { useEffect, useMemo, useState } from "react";

type ContrastMode = "normal" | "high";

const FONT_KEY = "a11y_font_scale";
const CONTRAST_KEY = "a11y_contrast";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);

  // scale: 1.0 = רגיל, 1.1/1.2... גדל
  const [fontScale, setFontScale] = useState<number>(() => {
    const saved = Number(localStorage.getItem(FONT_KEY));
    return Number.isFinite(saved) && saved > 0 ? saved : 1;
  });

  const [contrast, setContrast] = useState<ContrastMode>(() => {
    const saved = localStorage.getItem(CONTRAST_KEY) as ContrastMode | null;
    return saved === "high" ? "high" : "normal";
  });

  const rootStyle = useMemo(() => {
    // אפשר לשחק עם זה: 1.25 max נוח לרוב
    const s = clamp(fontScale, 0.9, 1.25);
    return { fontSize: `${s * 100}%` };
  }, [fontScale]);

  useEffect(() => {
    // פונט — על כל האתר
    document.documentElement.style.fontSize = rootStyle.fontSize;
    localStorage.setItem(FONT_KEY, String(fontScale));
  }, [fontScale, rootStyle.fontSize]);

  useEffect(() => {
    // ניגודיות — אפשר כ-class על ה-body
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

  const reset = () => {
    setFontScale(1);
    setContrast("normal");
    setOpen(false);
    localStorage.removeItem(FONT_KEY);
    localStorage.removeItem(CONTRAST_KEY);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999]">
      {/* כפתור נגישות */}
      <button
        type="button"
        aria-label="נגישות"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-12 h-12 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center justify-center"
      >
        {/* אייקון נגישות פשוט (אפשר להחליף ל-lucide אם יש לך) */}
        <span className="text-xl leading-none">♿</span>
      </button>

      {/* פאנל נפתח */}
      {open && (
        <div
          role="dialog"
          aria-label="אפשרויות נגישות"
          className="mt-3 w-64 rounded-2xl bg-white border border-slate-200 shadow-2xl p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="font-bold text-slate-800">נגישות</div>
            <button
              type="button"
              aria-label="סגור"
              onClick={() => setOpen(false)}
              className="text-slate-500 hover:text-slate-800"
            >
              ✕
            </button>
          </div>

          {/* גודל טקסט */}
          <div className="mb-4">
            <div className="text-sm font-semibold text-slate-700 mb-2">
              גודל טקסט
            </div>
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
            <div className="mt-2 text-xs text-slate-500">
              {Math.round(clamp(fontScale, 0.9, 1.25) * 100)}%
            </div>
          </div>

          {/* ניגודיות */}
          <div className="mb-4">
            <div className="text-sm font-semibold text-slate-700 mb-2">
              ניגודיות
            </div>
            <button
              type="button"
              onClick={() => setContrast((c) => (c === "high" ? "normal" : "high"))}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>{contrast === "high" ? "ניגודיות גבוהה: פעיל" : "ניגודיות גבוהה: כבוי"}</span>
              <span className="text-slate-500">{contrast === "high" ? "ON" : "OFF"}</span>
            </button>
          </div>

          {/* Reset */}
          <button
            type="button"
            onClick={reset}
            className="w-full rounded-xl bg-slate-900 text-white px-3 py-2 hover:bg-slate-800 transition-colors"
          >
            איפוס (Reset)
          </button>
        </div>
      )}
    </div>
  );
}
