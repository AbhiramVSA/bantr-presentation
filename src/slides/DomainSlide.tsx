import { Brain, MessageSquare, Mic, Database, BarChart3 } from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import LiquidGlassCard from '../components/LiquidGlassCard';
import type { LucideIcon } from 'lucide-react';

interface DomainItem {
  icon: LucideIcon;
  label: string;
  desc: string;
}

const domains: DomainItem[] = [
  {
    icon: Brain,
    label: 'Artificial Intelligence',
    desc: 'Autonomous AI agents with configurable debate personas, adversarial reasoning, and real-time decision-making during multi-turn arguments.',
  },
  {
    icon: MessageSquare,
    label: 'Natural Language Processing',
    desc: 'Real-time speech-to-text, argument generation via LLMs, prompt engineering for structured rebuttals, sentiment analysis, and text-to-speech synthesis.',
  },
  {
    icon: Mic,
    label: 'Speech & Audio Processing',
    desc: 'Streaming voice input (WebRTC, 16kHz PCM), speaker diarization (PyAnnote), real-time transcription (Deepgram), and expressive TTS output (ElevenLabs).',
  },
  {
    icon: Database,
    label: 'Information Retrieval / RAG',
    desc: 'Vector embeddings (text-embedding-3), semantic chunking, Pinecone vector store, top-k retrieval for persistent agent memory across debate sessions.',
  },
  {
    icon: BarChart3,
    label: 'Deep Learning & Classification',
    desc: 'Fine-tuned DeBERTa-v3 for fallacy detection (14 types), custom regression models for argument scoring, DALL·E 3 for mood-based image generation.',
  },
];

export default function DomainSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>Bantr</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Applications of AI</span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>04</span>
        </div>

        {/* Title */}
        <div style={{ marginTop: '2%' }}>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Area & Domain
          </h1>
          <p style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', opacity: 0.7, marginTop: '0.5%' }}>
            Interdisciplinary AI domains leveraged in Bantr
          </p>
        </div>

        {/* Domain cards */}
        <div
          className="flex-1 flex flex-col justify-center"
          style={{ marginTop: '1.5%', gap: 'clamp(10px, 1vw, 18px)' }}
        >
          {domains.map((d) => (
            <LiquidGlassCard
              key={d.label}
              style={{ padding: 'clamp(14px, 1.4vw, 26px) clamp(18px, 1.8vw, 32px)' }}
            >
              <div className="flex items-start" style={{ gap: 'clamp(14px, 1.2vw, 24px)' }}>
                <d.icon
                  style={{
                    width: 'clamp(26px, 2vw, 38px)',
                    height: 'clamp(26px, 2vw, 38px)',
                    opacity: 0.8,
                    flexShrink: 0,
                    marginTop: 'clamp(2px, 0.2vw, 4px)',
                  }}
                  strokeWidth={1.5}
                />
                <div>
                  <h3 style={{ fontSize: 'clamp(14px, 1.15vw, 22px)', fontWeight: 700 }}>
                    {d.label}
                  </h3>
                  <p style={{ fontSize: 'clamp(12px, 0.9vw, 17px)', opacity: 0.8, lineHeight: 1.55, marginTop: 'clamp(3px, 0.25vw, 6px)' }}>
                    {d.desc}
                  </p>
                </div>
              </div>
            </LiquidGlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
