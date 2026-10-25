DASH N DINE SITE REFRESH

Files included:
- styles.css: shared layout, sidebar, colors, responsive styles, and image sizing
- index.html: Overview
- about.html: About the Project
- engineering.html: Engineering
- gallery.html: Gallery
- feedback.html: Player Feedback
- feedback.js: local preview behavior for the demo feedback form
- links.html: Project Links

INSTALL:
1. Back up the current files in your GitHub repository.
2. Upload/replace these files in the same folder as your current HTML pages.
3. Keep your existing images folder unchanged. The pages expect:
   images/gameplay.png.png
   images/city.png.png
   images/code.png.png
4. Commit the changes and refresh the deployed site with Ctrl+F5.

NOTES:
- Every page now uses styles.css for a matching sidebar and layout.
- Images use natural height and object-fit: contain; no forced crop/zoom.
- The web game is not linked as playable because the current browser export has issues.
- Add your actual repository URL to links.html when ready.
- The feedback form only previews content in the browser; it does not submit or save it.
