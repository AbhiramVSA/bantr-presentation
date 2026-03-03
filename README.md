# Bantr — AI-Powered Real-Time Voice Debate Platform

An interactive research presentation exploring the architecture, AI pipeline, and infrastructure behind **Bantr**, a platform that enables real-time voice debates between humans and configurable AI agents.

Built as an academic showcase for **Applications of Artificial Intelligence**, covering NLP, deep learning, speech processing, RAG systems, and production-grade deployment.

## Overview

Bantr pairs users with AI debate opponents that have distinct personalities and argumentation styles. The core pipeline — Speech-to-Text → LLM Reasoning → Text-to-Speech — achieves sub-2 second end-to-end latency. Post-debate analysis includes fallacy detection, argument scoring, sentiment tracking, and mood-based image generation.

This presentation walks through the full system across **11 interactive slides**, each backed by looping HLS video and a glassmorphic UI.

## Presentation Topics

| Slide | Content |
|-------|---------|
| Cover | Project title, team, animated background |
| Abstract | System overview, real-time voice pipeline, post-debate intelligence |
| Area & Domain | Five interdisciplinary AI domains explored |
| ML Concepts | STT → LLM → TTS pipeline breakdown |
| Deep Learning | Transformer architecture (DeBERTa-v3), generative models (DALL·E 3), neural TTS |
| NLP | Speech recognition, language generation, sentiment analysis |
| RAG & Memory | Chunking, vector embeddings, Pinecone retrieval, cross-session persistence |
| Software & Platforms | Frontend, backend, AI services, DevOps stack |
| Hardware & Infrastructure | GPU compute, cloud services, CDN, monitoring |
| References | Academic papers across LLMs, speech, RAG, NLP, and image generation |

## Tech Stack

**Presentation**
- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- HLS.js for video streaming
- Lucide React for icons

**Bantr Platform (Presented)**
- **Speech**: Deepgram Nova-2 (STT), ElevenLabs Turbo v2 (TTS)
- **Reasoning**: GPT-4 Turbo, Claude 3.5 Sonnet
- **Classification**: Fine-tuned DeBERTa-v3 (14 fallacy types, 89% F1)
- **Retrieval**: OpenAI embeddings + Pinecone vector DB
- **Generation**: DALL·E 3 for mood-based imagery
- **Backend**: Node.js/Express, Python FastAPI, WebSocket, WebRTC
- **Data**: PostgreSQL + Prisma, Redis
- **Infra**: Vercel, Railway, AWS (S3, CloudFront, g5.xlarge GPU), GitHub Actions

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Navigation

- **Arrow keys** or **Spacebar** — navigate between slides
- **F** — toggle fullscreen
- **Mouse** — bottom controls with progress indicator

## Team

- Abhiram
- Ishita
- Pavan

## License

This project is part of an academic research presentation and is not licensed for commercial use.
