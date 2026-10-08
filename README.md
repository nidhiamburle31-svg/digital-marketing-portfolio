# Digital Marketing & AI Portfolio

A responsive, dark neon portfolio for a fresher who has completed Digital Marketing with AI training. Built with semantic HTML5, CSS3 and vanilla JavaScript. No build process, packages, API keys, paid services or backend.

## Files

- `index.html`: all portfolio content, navigation, project summaries, education and contact placeholders.
- `style.css`: theme variables, page layouts, responsive breakpoints, focus styles and reduced-motion support.
- `script.js`: mobile menu, section navigation, scroll reveals, contact configuration and optional media checks.
- `assets/images/`: original lightweight SVG illustrations. These are explicitly labeled placeholders, not a portrait, project screenshots or completed ad work.
- `assets/videos/`: place real AI concept videos here.
- `assets/documents/`: place your actual resume and certificate here.

## Preview in Codex Cloud

The files in this cloud workspace are not automatically on your laptop or saved to GitHub. Your laptop's `http://localhost:8000` addresses your laptop, not this cloud environment. The previous verification server was temporary and is no longer running.

This session does not expose a user-facing cloud preview or port-forwarding tool. A cloud server alone cannot produce a usable browser link. If your Codex interface offers a documented Preview/Ports feature, run the command below in its cloud terminal and use that feature's forwarded URL, keeping the server running:

```sh
cd /workspace/digital-marketing-portfolio
python3 -m http.server 8000 --bind 0.0.0.0
```

Do not enter `0.0.0.0` or the cloud localhost address in your laptop browser. Use only the actual forwarded HTTPS URL provided by your interface. If your interface has no preview/forwarding feature, use GitHub Pages for a live browser URL after saving the files, or download the website archive and open its `index.html` locally for a static preview.

## Preview on your own computer without a build

After downloading and extracting the completed website, open `index.html` directly to see the page. For optional file detection, preview over HTTP (browsers restrict fetch on `file://`):

```sh
cd digital-marketing-portfolio
python3 -m http.server 8000
```

Visit `http://localhost:8000`. Stop the server with Ctrl+C. No installation is needed if Python is available. Any static HTTP server also works. No external fonts or libraries are requested.

## Personalize the content

1. Replace `Your Name` / `YOUR NAME` in `index.html`, including the title, hero, portrait card and footer. Update the meta description as needed.
2. Review every skill and project description. Retain only work you actually performed. The default descriptions are clearly editable training summaries, not assertions of paid work or measurable results.
3. Add your true institute, qualification and completion dates in the education section. No certification, client, employment, internship, testimonial or campaign performance is fabricated.
4. Update `CONTACT` at the top of `script.js` with your real email, HTTPS LinkedIn profile and HTTPS GitHub profile. Empty or invalid values remain inactive. A valid email becomes a `mailto:` link. There is no contact form or fake message submission.
5. Edit colors in the `:root` variables in `style.css`. The core palette is `#0F0F1A`, `#7C3AED`, `#EC4899`, and `#F8FAFC`; lighter accent text improves readability.

## Add real media

### Portrait and project screenshots

Place optimized WebP, JPG or PNG images in `assets/images/`. Change the relevant image `src` in `index.html` to the relative path, such as `assets/images/portrait.webp`. Update the alt text, dimensions and object positioning to describe your real photo. Remove “YOUR PORTRAIT HERE” by replacing the portrait SVG. Project illustrations use `seo.svg`, `audit.svg`, `travel.svg`, `strategy.svg` and `content.svg`; replace their paths and remove the illustrated-placeholder label only after supplying real screenshots. Prefer images under 200–300 KB, with meaningful alt text. Project screenshots are lazy loaded.

The “Project notes” disclosure in each card is keyboard-accessible and editable. Add objectives, actual tasks, tools and supporting evidence. To link a real project or repository, add an anchor with its authentic URL inside the disclosure. No fake demo links are included.

### AI concept videos

Supply these actual files (do not create empty MP4 files):

| Card | Video path | Current poster |
| --- | --- | --- |
| Coffee | `assets/videos/coffee.mp4` | `assets/images/coffee.svg` |
| Burger | `assets/videos/burger.mp4` | `assets/images/burger.svg` |
| Lipstick | `assets/videos/lipstick.mp4` | `assets/images/lipstick.svg` |
| Pepsi | `assets/videos/pepsi.mp4` | `assets/images/pepsi.svg` |
| Skincare | `assets/videos/skincare.mp4` | `assets/images/skincare.svg` |

Use MP4 with H.264 video and AAC audio for broad browser support. Compress videos; short clips under roughly 5–10 MB are preferable. Export a real poster frame and replace the `poster` path. Add captions using a `<track kind="captions" src="assets/videos/coffee.vtt" srclang="en" label="English">` when there is speech; provide a text description/transcript if needed. Preserve controls, `playsinline` and `preload="none"`. Videos never autoplay. The script checks file availability over HTTP when cards approach the viewport, then assigns the local path; absent files leave the poster and “coming soon” text in place. Expected absent-file HEAD requests may show 404s in development tools; no broken media sources are attached. Correct video MIME types are required.

Add another card by copying an existing `<article class="video-card">`, then updating its label, poster, accessible label and `data-video` path. Keep the AI-generated concept label and independent / not-sponsored disclosure. Brand references do not imply sponsorship or a client relationship. Ensure you can share the assets you upload.

### Resume

Add a valid, nonempty PDF at `assets/documents/resume.pdf`. The button starts without an `href` and remains inactive until an HTTP check confirms a PDF response. GitHub Pages serves PDFs with the required MIME type. Direct `file://` preview keeps it inactive; use the HTTP preview above. If you prefer a different filename, update `data-file` on `#resume-link`. Check the downloaded PDF yourself before publishing. File detection verifies availability and type, not the truth or integrity of the document.

### Certificate

Add your authentic certificate PDF or image to `assets/documents/`. Replace the “Certificate not added yet” note with a link to that real file, for example:

```html
<a href="assets/documents/course-certificate.pdf" target="_blank" rel="noopener">View course certificate (PDF)</a>
```

Do not imply that an absent certificate has been verified.

## Deploy to free GitHub Pages

Deployment has not been performed.

1. Save the completed changes to GitHub first. The current cloud checkout is on `work` and originally contained uncommitted changes. Review the diff, then use Codex's **Create PR** action if available. Review the pull request on GitHub and merge it into `main`. The cloud workspace alone does not save the changes to your repository.
2. Alternatively, download and extract the website archive. On GitHub open your repository, select `main`, then **Add file → Upload files**. Drag the extracted `index.html`, `style.css`, `script.js`, `README.md` and the complete `assets/` folder into the upload area. Upload the contents, not a containing `digital-marketing-portfolio/` folder and not the ZIP itself. Commit the upload. If you create a branch instead, open and merge a pull request before configuring Pages.
3. Preview and replace the personal details and media you want to share.
4. Commit `index.html`, `style.css`, `script.js`, `README.md` and `assets/` to your repository and push to your chosen branch.
5. In GitHub, open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Choose the branch (usually `main`) and **/ (root)**, then save.
8. Wait for the Pages deployment to succeed and open the URL GitHub shows, typically `https://USERNAME.github.io/digital-marketing-portfolio/`.
9. Check navigation, videos, the CV download and real social links on the deployed URL.

All local paths are relative, so repository subpaths work. No build workflow is required. If your account or repository visibility imposes Pages restrictions, use a public repository eligible for free Pages.

## Accessibility and maintenance

- Semantic headings and sections, skip link, visible keyboard focus, accessible mobile menu, Escape-to-close and native video controls.
- No essential content requires animation. Reduced-motion preferences disable smooth scrolling, reveal transitions and decorative animation. Content remains visible without JavaScript.
- Native project disclosures work without JavaScript. Contact activation and optional file checks require JavaScript; instructions above explain configuration.
- Test at mobile, tablet and desktop widths. Tab through navigation, project notes and media controls. Check at 200% zoom and with reduced motion.
- Keep placeholders clearly labeled until replaced. Never add unsupported percentages, invented results or fabricated experience.

## Verification performed

- JavaScript syntax checked with `node --check script.js`.
- HTML section IDs and internal anchors checked; required local asset references exist.
- Chromium HTTP preview tested at 1440, 768, 390 and 320 pixels, with no horizontal page overflow.
- Project disclosures, mobile menu and Escape-to-close checked.
- Empty contact details and missing resume remain inactive; reduced-motion content remains visible.
- No JavaScript runtime errors detected during these checks.
- `git diff --check` passed. Deployment and playback of your future real media have not been tested because those files have not been supplied.
