# DocuCraft — Complete GitHub Pages Build

## What is included
Working client-side tools:
- JPG to PDF
- Merge PDF
- Split PDF / extract selected pages
- Rotate PDF
- Optimize PDF
- Organize PDF
- Watermark PDF
- Page Numbers
- PDF to JPG
- OCR PDF (Tesseract.js)
- Collage Maker with live preview
- Multi-page collage PDF export
- Collage JPEG/PNG export
- Image compression
- Image resizing
- Image conversion (JPG/PNG/WebP)
- Image crop
- Image rotation

The site also includes transparent pages for advanced functions that require a real document-conversion/backend engine. They do not claim to perform unreliable conversions.

## GitHub Pages
Upload the contents of this folder to the root of your GitHub repository, preserving the `js` and `tools` folders.

Then:
Settings → Pages → Deploy from branch → select `main` and `/ (root)` → Save.

## Google AdSense
The visible ADVERTISEMENT boxes are placeholders. Replace them with your approved AdSense code only after your AdSense account/site is approved.

Do not intentionally delay a real file operation to manufacture ad impressions or clicks.

## Privacy
The implemented processing happens in the browser. External CDN libraries are loaded for PDF/OCR functionality. No DocuCraft application server is included.

## Important limitations
GitHub Pages is static hosting. It cannot safely provide:
- user accounts
- subscription billing
- private API keys
- server-side document conversion
- true PDF password encryption using the included libraries

For a commercial premium tier, add a backend/auth/payment service separately.
