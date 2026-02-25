import { Mic, Brain, Volume2, FileText, Database, Image, ChevronRight } from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import LiquidGlassCard from '../components/LiquidGlassCard';
import type { LucideIcon } from 'lucide-react';

interface PipelineStep {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const steps: PipelineStep[] = [
  {
    icon: Mic,
    title: 'Voice Input',
    desc: 'User speaks via WebRTC. Audio streamed to Deepgram STT for real-time transcription.',
  },
  {
    icon: Brain,
    title: 'LLM Reasoning',
    desc: 'Transcript fed to GPT-4/Claude with debate persona prompt. Generates structured counter-arguments and rebuttals.',
  },
  {
    icon: Volume2,
    title: 'Voice Output',
    desc: 'LLM response converted to speech via ElevenLabs TTS. Sub-2s latency end-to-end pipeline.',
  },
  {
    icon: FileText,
    title: 'Post-Analysis',
    desc: 'Full transcript parsed into argument trees. Fallacy detection via fine-tuned classifier. Performance scoring algorithm.',
  },
  {
    icon: Database,
    title: 'Memory (RAG)',
    desc: 'Transcript chunked, embedded (text-embedding-3), stored in Pinecone. Enables persistent agent memory across sessions.',
  },
  {
    icon: Image,
    title: 'Mood Generation',
    desc: 'Debate sentiment analyzed. DALL·E generates abstract image representing the emotional arc of the debate.',
  },
];

export default function ProposedSystemSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>Bantr</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
            Applications of AI
          </span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>
            04
          </span>
        </div>

        {/* Title */}
        <div style={{ marginTop: '2%' }}>
          <h1
            style={{
              fontSize: 'clamp(28px, 3.5vw, 64px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Proposed System — Bantr
          </h1>
          <p style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', opacity: 0.8, marginTop: '1%' }}>
            End-to-end AI voice debate platform with structured post-debate intelligence
          </p>
        </div>

        {/* Pipeline */}
        <div
          className="flex items-stretch"
          style={{ marginTop: '3%', gap: 'clamp(4px, 0.4vw, 8px)' }}
        >
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-stretch" style={{ flex: 1, minWidth: 0 }}>
              <LiquidGlassCard
                className="flex flex-col w-full"
                style={{ padding: 'clamp(12px, 1.2vw, 24px)' }}
              >
                <step.icon
                  style={{
                    width: 'clamp(24px, 2vw, 36px)',
                    height: 'clamp(24px, 2vw, 36px)',
                    marginBottom: 'clamp(8px, 0.8vw, 14px)',
                    flexShrink: 0,
                  }}
                  strokeWidth={1.5}
                />
                <h3
                  style={{
                    fontSize: 'clamp(12px, 1vw, 18px)',
                    fontWeight: 700,
                    marginBottom: 'clamp(4px, 0.4vw, 8px)',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 'clamp(10px, 0.8vw, 14px)',
                    opacity: 0.8,
                    lineHeight: 1.5,
                  }}
                >
                  {step.desc}
                </p>
              </LiquidGlassCard>
              {i < steps.length - 1 && (
                <div className="flex items-center" style={{ padding: '0 clamp(2px, 0.2vw, 4px)' }}>
                  <ChevronRight
                    style={{
                      width: 'clamp(16px, 1.2vw, 22px)',
                      height: 'clamp(16px, 1.2vw, 22px)',
                      opacity: 0.4,
                      flexShrink: 0,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Differentiators */}
        <LiquidGlassCard
          className="w-full"
          style={{
            marginTop: '3%',
            padding: 'clamp(16px, 1.5vw, 28px) clamp(20px, 2vw, 36px)',
          }}
        >
          <p style={{ fontSize: 'clamp(12px, 0.95vw, 17px)', lineHeight: 1.6 }}>
            <span style={{ fontWeight: 700, opacity: 0.9 }}>Key Differentiators:</span>{' '}
            <span style={{ opacity: 0.85 }}>
              Real-time voice (not text) · Adversarial AI (not agreeable) · Structured analytics
              (not generic feedback) · Persistent memory via RAG · Multi-modal output (voice + text +
              image)
            </span>
          </p>
        </LiquidGlassCard>

        <div className="flex-1" />
      </div>
    </div>
  );
}
