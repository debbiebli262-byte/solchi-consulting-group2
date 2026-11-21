# SOLCHI security review — 20 November 2026

Scope: **test copy** repository `debbiebli262-byte/solchi-website-copy`. No change has been made to the production website. This is a code/configuration review and CI check, not a penetration test or guarantee that compromise is impossible.

## Completed technical changes

- Removed obsolete `process.env.VITE_GEMINI_API_KEY` / `process.env.GEMINI_API_KEY` replacements that could embed an API credential in client JavaScript. No Gemini API is required by this website.
- Disabled production source-map emission and limited the Vite development server's default host to localhost. Compiled browser JavaScript remains inspectable by design.
- Added `vercel.json` headers: clickjacking protection, MIME sniffing protection, referrer policy, restrictive browser feature permissions, and a **conservative** Content Security Policy that blocks framing, plugins and unauthorized base URLs. A strict script/style CSP requires a later migration from runtime Tailwind CDN to compiled CSS.
- Added input length restrictions, control-character normalization and a hidden spam honeypot in the contact form. **Client-side honeypots cannot prevent malicious API requests**; server/provider rate limits and trusted recipient configuration remain necessary.
- Removed the obsolete production HTML import map that pointed to different third-party React and EmailJS versions than the npm dependency lock.
- Added Vite TypeScript ambient types and fixed dialog focus handling types.
- Added GitHub Actions checks for `npm ci`, TypeScript, Vite build, and `npm audit --audit-level=high`; repaired and committed the dependency lock, passing those checks on GitHub.
- Enabled Dependabot to propose weekly npm updates and monthly GitHub Actions updates.
- Backed up the pre-change commit in `backup-before-security-2026-11-20`.

## Required action: repository code visibility

**Current repository visibility: PUBLIC.** Anyone can browse/clone source and previous commits. An authorized GitHub repository administrator should:
1. Open `https://github.com/debbiebli262-byte/solchi-website-copy/settings`.
2. Select General → Danger Zone → Change repository visibility → **Make private**.
3. Verify that the Vercel project still has access to deploy the repository, reauthorize the GitHub integration if required, and restrict collaborator access to known maintainers.
4. Enable GitHub account two-factor authentication, preferably passkeys, and review existing personal access tokens and connected apps.

**Making the repository private does not make compiled frontend JS invisible to site visitors.** If older commits contain actual private credentials, rotate/revoke them; deleting files or making the repo private does not retroactively guarantee the secrets were not copied.

## Required action: environment variables and EmailJS

A committed `.env` exists in repository history and the current tree. It contains EmailJS service/template identifiers and a public browser key—not, from inspection, a server-side Gmail password or private Gemini token. The file is ignored by `.gitignore` but Git keeps tracking previously committed files.

To avoid breaking the existing contact form, **do not remove the tracked file until the Vercel environment is configured and verified**:
1. In Vercel → Project Settings → Environment Variables, add the three `VITE_EMAILJS_*` variables for Preview/Production as appropriate.
2. Deploy and verify successful messages reach the intended recipients.
3. Then untrack `.env` with `git rm --cached .env`, commit the removal and deploy again. This will not erase values already in Git history.
4. In EmailJS dashboard, configure **allowed origins** (only approved test and production domains), IP-based limits and CAPTCHA, and confirm template recipient address(es) are **not freely controllable by the request body**. The frontend currently sends a dynamic `to_email` value; malicious clients can alter frontend requests unless EmailJS templates independently enforce approved recipients.
5. Test both divisions' routing and failed/submitted states. **No real email was sent during this review.**

## Live deployment checks completed

Using a temporary read-only GitHub Actions runner against `https://solchi-website-copy.vercel.app/`:
- The root site returned **HTTP 200**.
- Response headers confirmed: CSP (`frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self'`), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, and Vercel HTTPS `Strict-Transport-Security`.
- Direct requests returned **HTTP 404** for `/.env`, `/.git/config`, `/package.json`, `/vite.config.ts`, and `/Pages/Contact.tsx`.
- A direct `.map` URL for the JavaScript bundle found in the live HTML returned **404**.
- These are scoped spot checks, **not** evidence of a complete penetration test. JavaScript sent to the browser remains readable by site visitors.

## Remaining security verification

- Confirm the Vercel deployment actually serves configured security headers with an HTTP response check after redeployment.
- Migrate the runtime Tailwind CDN into the build pipeline before enforcing a stricter script/style Content Security Policy; perform visual regression testing.
- Review Vercel organization/project member permissions, deployment protection for previews, 2FA, DNS, and domain settings.
- Verify EmailJS account limits, template security, spam protection and any service-side logs.
- Test the live application in a browser, including navigation, contact form and device compatibility, following deployment.
- Run periodic dependency checks and review Dependabot PRs rather than enabling unreviewed automatic upgrades.
- Perform an independent penetration test if formal assurance is required. Even after hardening, absolute protection against intrusion is not possible.
