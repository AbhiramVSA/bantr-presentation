import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Mic,
  Settings,
  FileText,
  Upload,
  Database,
  BarChart3,
  ListTree,
  Image,
  Volume2,
  Brain,
} from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import LiquidGlassCard from '../components/LiquidGlassCard';
import type { LucideIcon } from 'lucide-react';

interface IOItem {
  icon: LucideIcon;
  text: string;
}

const inputs: IOItem[] = [
  { icon: Mic, text: 'User voice audio (WebRTC stream, 16kHz PCM)' },
  { icon: Settings, text: 'Agent configuration (personality, debate style, tone, constraints)' },
  { icon: FileText, text: 'Debate topic / proposition statement' },
  { icon: Upload, text: 'Knowledge documents (PDF/TXT for RAG ingestion)' },
  { icon: Database, text: 'Historical debate memory (vector embeddings from prior sessions)' },
];

const outputs: IOItem[] = [
  { icon: FileText, text: 'Full debate transcript (timestamped, speaker-tagged)' },
  { icon: BarChart3, text: 'Performance report (scores, argument strength, fallacy count)' },
  { icon: ListTree, text: 'Structured summary (key arguments, rebuttals, conclusions)' },
  { icon: Image, text: 'AI-generated mood image (DALL·E, sentiment-based)' },
  { icon: Volume2, text: 'Real-time AI voice responses (ElevenLabs TTS stream)' },
  { icon: Brain, text: 'Updated agent memory (new embeddings stored in Pinecone)' },
];

function IOList({ items }: { items: IOItem[] }) {
  return (
    <ul
      className="list-none"
      style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 1vw, 18px)' }}
    >
      {items.map((item) => (
        <li
          key={item.text}
          className="flex items-center"
          style={{ gap: 'clamp(10px, 0.9vw, 16px)' }}
        >
          <item.icon
            style={{
              width: 'clamp(18px, 1.4vw, 24px)',
              height: 'clamp(18px, 1.4vw, 24px)',
              opacity: 0.7,
              flexShrink: 0,
            }}
            strokeWidth={1.5}
          />
          <span
            style={{
              fontSize: 'clamp(12px, 0.95vw, 17px)',
              opacity: 0.9,
              lineHeight: 1.5,
            }}
          >
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function IOSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>Bantr</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
            Applications of AI
          </span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>
            06
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 'clamp(28px, 3.5vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginTop: '2%',
          }}
        >
          Input / Output
        </h1>

        {/* Two-column layout */}
        <div className="flex flex-1" style={{ marginTop: '3%', gap: '5%' }}>
          {/* Inputs */}
          <div style={{ flex: '0 0 45%' }}>
            <LiquidGlassCard
              className="h-full flex flex-col"
              style={{ padding: 'clamp(20px, 2.2vw, 40px)' }}
            >
              <div
                className="flex items-center"
                style={{ gap: 'clamp(8px, 0.7vw, 14px)', marginBottom: 'clamp(16px, 1.5vw, 28px)' }}
              >
                <ArrowDownToLine
                  style={{
                    width: 'clamp(22px, 1.8vw, 32px)',
                    height: 'clamp(22px, 1.8vw, 32px)',
                    opacity: 0.8,
                  }}
                  strokeWidth={1.5}
                />
                <h3 style={{ fontSize: 'clamp(16px, 1.3vw, 26px)', fontWeight: 700 }}>Inputs</h3>
              </div>
              <IOList items={inputs} />
            </LiquidGlassCard>
          </div>

          {/* Outputs */}
          <div style={{ flex: '0 0 45%' }}>
            <LiquidGlassCard
              className="h-full flex flex-col"
              style={{ padding: 'clamp(20px, 2.2vw, 40px)' }}
            >
              <div
                className="flex items-center"
                style={{ gap: 'clamp(8px, 0.7vw, 14px)', marginBottom: 'clamp(16px, 1.5vw, 28px)' }}
              >
                <ArrowUpFromLine
                  style={{
                    width: 'clamp(22px, 1.8vw, 32px)',
                    height: 'clamp(22px, 1.8vw, 32px)',
                    opacity: 0.8,
                  }}
                  strokeWidth={1.5}
                />
                <h3 style={{ fontSize: 'clamp(16px, 1.3vw, 26px)', fontWeight: 700 }}>Outputs</h3>
              </div>
              <IOList items={outputs} />
            </LiquidGlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
