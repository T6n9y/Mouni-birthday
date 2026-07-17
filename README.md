# 30 Years of You — Birthday Website

A scroll-based interactive birthday timeline built with HTML5, CSS3 (glassmorphism),
JavaScript, and GSAP ScrollTrigger.

## How to edit content

All the personal content lives in **memories.js**. You do not need to touch
index.html, style.css, or app.js to add your photos, videos, or text.

For each age (1 to 30) you'll find an object like this:

```js
{
  age: 5,
  title: "Chapter 5",
  preview: "A tiny piece of your story",
  text: "Replace this with a personal note...",
  secret: "Replace this with an inside joke...",
  mediaType: "none",
  mediaSrc: "assets/photos/age-05.jpg"
}
```

### Adding a photo
1. Drop your image file into `assets/photos/` (e.g. `age-05.jpg`).
2. In memories.js, set `mediaType: "image"`.
3. Make sure `mediaSrc` points to the correct file path.

### Adding a video
1. Drop your video file into `assets/videos/` (e.g. `age-05.mp4`). Keep clips short
   and compressed (under ~15MB) so the page loads fast.
2. Set `mediaType: "video"`.
3. Set `mediaSrc: "assets/videos/age-05.mp4"`.

### No media yet
Leave `mediaType: "none"` — the chapter card will show a friendly placeholder
instead of a broken image.

### Editing the hero and letter sections
Open **index.html** and edit the text inside:
- `.hero` section — her name and intro line
- `.finale` and `#letterModal` — your closing birthday letter

### Changing the music
Drop an audio file into `assets/audio/` and reference it if you add an
`<audio>` element (not included by default to keep the first load light).

## Folder structure

```
birthday-site/
├── index.html
├── style.css
├── app.js
├── memories.js      <- edit this file for content
├── README.md
└── assets/
    ├── photos/
    ├── videos/
    └── audio/
```

## Deploying for free

### Option A: Vercel (recommended)
1. Push this folder to a new GitHub repository.
2. Go to vercel.com, click "Add New Project," and import that repository.
3. Leave build settings blank (it's a static site) and click Deploy.
4. You'll get a live HTTPS link like `your-project.vercel.app` you can share privately.
5. Any time you edit memories.js and push to GitHub, Vercel redeploys automatically.

### Option B: GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to Settings > Pages in that repo.
3. Under "Source," choose the main branch and root folder, then save.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Tips
- Keep images under ~1–2MB each (compress with squoosh.app or TinyPNG) so the
  timeline loads quickly.
- Keep videos short (10–30 seconds) and compressed — large files will slow the page.
- Test locally first by opening index.html in a browser, or run a simple local
  server (e.g. `npx serve`) so video/audio paths load correctly.
- Since this will be hosted on a public URL, avoid uploading anything too
  personal unless you're comfortable with that, or password-protect it later.
