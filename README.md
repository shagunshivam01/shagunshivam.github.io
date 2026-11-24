# Shagun Shivam — Portfolio

A React + TypeScript + Vite portfolio using the visual direction **The Ashen Automaton**: restrained dark-fantasy atmosphere, mechanical elegance, and recruiter-friendly navigation.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

This repository is intended for `https://shagunshivam01.github.io/`.

1. Push the project to the `main` branch of `shagunshivam01/shagunshivam.github.io`.
2. In GitHub, open **Settings → Pages**.
3. Set the source to **GitHub Actions**.
4. Add the workflow below as `.github/workflows/deploy.yml` (or enable the supplied workflow if included in your branch).

Vite's `base` is `/`, appropriate for a username GitHub Pages repository.

## Personal assets to add

- `public/assets/images/profile.jpg` — profile photo.
- `public/assets/images/intro-poster.jpg` — optional video poster.
- `public/assets/video/intro.mp4` — introduction video.
- `public/assets/resumes/product-management.pdf`
- `public/assets/resumes/fde-solutions.pdf`
- `public/assets/resumes/ai-ml-engineer.pdf`
- `public/assets/resumes/software-engineer.pdf`

The site includes graceful visual placeholders until the profile image and video are added. Resume links become active when the matching PDF files are uploaded.

## Content accuracy notes

- AutoIntel is presented as B2B connected-vehicle data infrastructure, not a consumer application.
- The current implementation and planned extensions are separated in the architecture explorer.
- No company source code, confidential screenshots, customer claims, or unverified performance metrics are included.
- AgentForge and ML Starter Pack link to the supplied public repositories. A live AgentForge demo would require a separately hosted backend; GitHub Pages serves the static portfolio only.
