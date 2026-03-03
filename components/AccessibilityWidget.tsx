import React, { useEffect, useState } from "react";

type ContrastMode = "normal" | "high";

const FONT_KEY = "a11y_font_scale";
const CONTRAST_KEY = "a11y_contrast";

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

const AccessibilityWidget: React.FC = () => {
  const [open, setOpen] = useState(false);

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

  const reset = () => {
    setFontScale(1);
    setContrast("normal");
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999]">
      
      {/* כפתור נגישות */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition-all duration-300 flex items-center justify-center hover:scale-110"
        aria-label="Accessibility"
      >
        <span className="text-2xl">♿</span>
      </button>

      {/* פאנל נפתח */}
      <div
        className={`absolute bottom-16 left-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="font-bold text-slate-800 mb-4 text-lg">
          נגישות
        </div>

        {/* גודל טקסט */}
        <div className="mb-4">
          <div className="text-sm font-semibold mb-2">גודל טקסט</div>

          <div className="flex gap-2">
            <button
              onClick={() => setFontScale((s) => clamp(s - 0.05, 0.9, 1.25))}
              className="flex-1 border border-slate-200 rounded-lg py-2 hover:bg-slate-50"
            >
              A-
            </button>

            <button
              onClick={() => setFontScale((s) => clamp(s + 0.05, 0.9, 1.25))}
              className="flex-1 border border-slate-200 rounded-lg py-2 hover:bg-slate-50"
            >
              A+
            </button>
          </div>
        </div>

        {/* ניגודיות */}
        <div className="mb-4">
          <button
            onClick={() =>
              setContrast((c) => (c === "high" ? "normal" : "high"))
            }
            className="w-full border border-slate-200 rounded-lg py-2 hover:bg-slate-50 flex justify-between px-3"
          >
            <span>ניגודיות גבוהה</span>
            <span>{contrast === "high" ? "ON" : "OFF"}</span>
          </button>
        </div>

        {/* Reset */}
        <button
          onClick={reset}
          className="w-full bg-slate-900 text-white rounded-lg py-2 hover:bg-slate-800"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default AccessibilityWidget;
