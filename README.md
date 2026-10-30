<p align="center">
  <img src="assets/bantr-presentation-mark.svg" alt="Two speech bubbles with a voice waveform" width="112" />
</p>

<h1 align="center">Bantr: Research Presentation</h1>

<p align="center">An interactive 11-slide React presentation about the design of an AI-assisted voice debate platform.</p>

<p align="center">
  <a href="#scope">Scope</a> ·
  <a href="#slides">Slides</a> ·
  <a href="#run-locally">Run locally</a> ·
  <a href="#controls">Controls</a>
</p>

## Scope

This repository contains the presentation app. It does not contain the platform backend, AI models, or cloud services shown in the slides. Performance figures and platform details in the deck are presentation content. This repository does not validate them against a running platform.

## Slides

| Slide | Topic |
|---|---|
| 1 | Research project cover |
| 2–3 | System summary and proposed capabilities |
| 4 | Application domains |
| 5–7 | Machine learning, deep learning, and language processing |
| 8 | Retrieval and memory |
| 9–10 | Software and infrastructure |
| 11 | References |

## Run locally

**Requirements:** Node.js and npm.

```bash
git clone https://github.com/AbhiramVSA/bantr-presentation.git
cd bantr-presentation
npm ci
npm run dev
```

Open the local address that Vite prints in the terminal. To create a static build, run:

```bash
npm run build
```

## Controls

- Right arrow, down arrow, or space: next slide.
- Left arrow or up arrow: previous slide.
- `F`: enter or exit fullscreen.
- `Escape`: exit fullscreen.

## Presentation stack

React 19, TypeScript, Vite, Tailwind CSS 4, HLS.js, and Lucide React.

## Team

- Abhiram
- Ishita
- Pavan

## License

This academic presentation is not licensed for commercial use. The repository does not include a separate `LICENSE` file.
