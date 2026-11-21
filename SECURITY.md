# SOLCHI test website — security notes

This repository contains a **public client-side website**. Public GitHub source and shipped JavaScript cannot be hidden from visitors. Do not put passwords, private API tokens, service-account keys, or internal-only logic in client-side code, `public/`, or any `VITE_*` environment variable.

## Security changes and checks
- `vercel.json` defines baseline security headers including frame protection, MIME sniffing protection, restrictive permissions and a limited Content Security Policy. Verify these headers on the actual deployment.
- `.github/workflows/security-checks.yml` runs `npm ci`, TypeScript checks, production build, and production dependency audit. Confirm the workflow succeeds; its creation does not prove the code is clean.
- The contact form has required fields, input length limits, basic sanitization, a hidden honeypot, and disables duplicate submission while a request is pending. **All of these are client-side controls that attackers can bypass.**

## Actions required from site owner / administrators
1. **GitHub privacy:** If the source must not be publicly browsable on GitHub, change repository visibility to private in repository Settings → General → Danger Zone. Ensure Vercel integration retains access. The built frontend will remain viewable in browsers.
2. **Environment variables:** The tracked `.env` contains EmailJS service/template IDs and a public EmailJS key (not a Gmail password). Configure the three `VITE_EMAILJS_*` variables in the Vercel project's Environment Variables before removing the tracked file. Rotate keys or credentials if any secret was ever committed. Deleting a tracked file does not erase Git history.
3. **EmailJS:** In the EmailJS dashboard, restrict allowed origins/domains to the correct production/test sites, enforce account quotas and anti-abuse settings, and use an allowlisted fixed destination or separate templates for the two divisions. A browser-controlled `to_email` parameter is not trustworthy as a security boundary.
4. **Authentication:** Enable two-factor authentication/passkeys for GitHub, Vercel, the domain registrar and EmailJS. Review organization/team access, remove unused accounts and tokens, and enable branch protection where supported.
5. **Vercel:** Restrict preview deployments if they must be private. Verify security response headers and set up deployment monitoring.
6. **Privacy:** Do not log customer messages or email addresses unnecessarily. Review retention, privacy notice and consent requirements.
7. **Supply chain:** Monitor dependency alerts and GitHub Actions checks; review any failures before deploying. Consider pinning Actions to immutable commit SHAs for stricter supply-chain protection.
8. **Test:** Run authorized functional and security testing on a staging deployment. Do not claim immunity to compromise.

No live EmailJS settings, Vercel access controls, GitHub visibility or credential rotation can be changed from repository code alone.
