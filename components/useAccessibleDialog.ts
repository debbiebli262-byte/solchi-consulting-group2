import { useEffect, useRef } from "react";

/** Keeps keyboard focus inside an open dialog and returns it to its trigger on close. */
export function useAccessibleDialog(open: boolean, onClose: () => void) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!open) return;
    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;

    const dialog = dialogRef.current;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const first = dialog?.querySelector<HTMLElement>(focusableSelector);
    (first ?? dialog)?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeRef.current();
      }
      if (event.key !== "Tab" || !dialog) return;
      const focusable = (Array.from(dialog.querySelectorAll(focusableSelector)) as HTMLElement[])
        .filter(element => element.getClientRects().length > 0 && !element.hasAttribute("aria-hidden"));
      if (focusable.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }
      const firstFocusable = focusable[0];
      const lastFocusable = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === firstFocusable || !dialog.contains(document.activeElement))) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && (document.activeElement === lastFocusable || !dialog.contains(document.activeElement))) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocusedRef.current?.focus();
    };
  }, [open]);

  return dialogRef;
}
