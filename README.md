# SSMV Consultant And Land Surveyors website

A responsive bilingual (English/Kannada) React + TypeScript + Vite website for SSMV Consultant And Land Surveyors. The contact form prepares a WhatsApp message; this version intentionally has no database, no admin login, and does not store enquiry data.

## Requirements
- Node.js 20.19+ or 22.12+ (Node 22 LTS recommended)
- npm (included with Node.js)

## Run on your computer
1. Install Node.js from https://nodejs.org/ if you do not already have it.
2. Extract this ZIP to a folder.
3. Open a terminal/command prompt in the `ssmv-website` folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL printed in the terminal (usually http://localhost:5173).
7. To stop the local server, return to the terminal and press Ctrl+C.

## Production build
Run `npm run build`. The production website is generated in `dist/`. To preview it locally, run `npm run preview`.

## Free deployment with Cloudflare Pages
1. Create/sign in to GitHub and create a new repository named `ssmv-website`.
2. Upload the extracted project files to that repository (not the ZIP file itself).
3. Sign in to Cloudflare and open Workers & Pages.
4. Create an application and choose Pages / connect to Git.
5. Select the GitHub repository.
6. Set build command to `npm run build` and build output directory to `dist`.
7. Deploy. Cloudflare will assign a `*.pages.dev` address if deployment succeeds.
8. After future edits are pushed to the connected repository, Cloudflare can rebuild and publish them automatically.

Official guides:
- Vite: https://vite.dev/guide/
- Cloudflare Pages + Vite: https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/

## Business details
Business name: SSMV Consultant And Land Surveyors
Phone/WhatsApp: +91 9480112556
Address: SRK Nagar-1, Talur Road, opposite Balabharathi Kendria Vidyalaya, Ballari, Karnataka 583103, India

Edit `src/App.tsx` for text and business details. Contact values are centralized at the top of that file. Edit `src/styles.css` to change design colours and layout. Replace illustrative images with genuine business images when available.

## Before launch
- Review Kannada translations with a fluent Kannada reviewer.
- Verify all images and replace illustrative photos with genuine business photographs where available.
- Test the WhatsApp flow on a phone with WhatsApp installed.
- Confirm the address and Google Maps directions open the correct place.
- Add the final public website URL to the existing Google Business Profile yourself; this project does not change your Google listing.
- Choose a final domain after checking availability. A free `pages.dev` subdomain is not the same as owning a custom `.com` or `.in` domain.

## Important limitations
- The form does not store or transmit information to a website database. It opens a WhatsApp draft for the visitor to review and send.
- No email, office hours, credentials, testimonials, ratings or project history have been invented.
- DGPS accuracy depends on the equipment, method, correction services and field conditions; no universal accuracy is promised.
- External fonts and images require internet access and may be subject to their respective providers' availability and terms.
