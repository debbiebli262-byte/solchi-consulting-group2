# SOLCHI accessibility verification — test copy (20 November 2026)

This file documents development changes, **not** a certification of compliance with Israeli Standard 5568 / AA.

## Rollback
The original test site's code is preserved on branch:
`backup-before-accessibility-2026-11-20`.
Review changes since this branch before reverting; preserve any subsequent approved edits. The production website was not modified by these changes.

## Keyboard checks — Hebrew, English, Japanese
- Press Tab on every page; confirm visible focus and logical order.
- Activate the skip-to-content link with Enter; ensure it focuses the main landmark without changing the HashRouter URL.
- Open and close language and mobile navigation menus without a mouse.
- Open all three Information Systems dialogs and the three Electricity dialogs. Focus should enter, stay inside on Tab/Shift+Tab, Escape should close, and focus should return to the triggering button.
- Navigate through the 5 high-energy images and 4 GIS images with keyboard-only controls.
- Fill out Contact, test invalid and successful submissions, and ensure error messages are announced.
- Verify links and buttons remain operable at 200% browser zoom and in 320px-wide viewports.

## Screen-reader checks
- Test Hebrew using a Hebrew-capable screen-reader voice and browser; also test English and Japanese.
- Check meaningful headings and landmarks; check dialog names and descriptions, reading order, form field labels, errors, and image alternatives.
- Test NVDA with Firefox or Chrome and VoiceOver with Safari where possible.
- Verify titles and focus context after changing SPA routes.

## Visual and sensory checks
- Measure contrast on buttons, links, form states, headings, text on images, and accessibility controls.
- Review both dark-mode popups and the high-contrast option.
- Confirm all controls and text remain visible at zoom 200%, text spacing overrides, and mobile sizes.
- Check prefers-reduced-motion support.
- If audio or video is added, provide captions and appropriate text alternatives/transcripts, with sign-language needs assessed where applicable.

## Legal/organizational steps
- Determine whether legal duties and exemptions apply to this business; consult a qualified Israeli accessibility professional.
- Complete a formal audit against the applicable edition of Israeli Standard 5568 at AA.
- Verify physical premises accessibility details with management.
- Confirm an appropriate accessibility contact person, reporting mechanism, and accessibility statement for the **production** site.
- Publish/update the production accessibility statement only with verified facts.

Developer code changes alone do not guarantee legal compliance; manual testing and owner-provided information are required.
