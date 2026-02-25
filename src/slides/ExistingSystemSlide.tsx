import { MessageSquare, Users, Mic, BarChart3, Brain } from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import LiquidGlassCard from '../components/LiquidGlassCard';
import type { LucideIcon } from 'lucide-react';

interface SystemCard {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const cards: SystemCard[] = [
  {
    icon: MessageSquare,
    title: 'ChatGPT / Claude',
    desc: 'General-purpose LLM chatbots. No debate structure, no scoring, no voice, no adversarial reasoning framework. Responses are agreeable by design.',
  },
  {
    icon: Users,
    title: 'Kialo / DebateArt',
    desc: 'Human-vs-human text debate platforms. No AI opponent, no real-time voice, no automated analysis or fallacy detection.',
  },
  {
    icon: Mic,
    title: 'Voice Assistants (Alexa/Siri)',
    desc: 'Command-response paradigm only. Cannot sustain multi-turn argumentative dialogue or generate structured rebuttals.',
  },
  {
    icon: BarChart3,
    title: 'Grammarly / ProWritingAid',
    desc: 'Writing analysis tools. No debate-specific metrics, no argument structure analysis, no logical fallacy identification.',
  },
  {
    icon: Brain,
    title: 'AI Tutoring Platforms',
    desc: 'Focus on knowledge delivery, not adversarial reasoning. No voice debate capability, no performance benchmarking against AI.',
  },
];

export default function ExistingSystemSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>Bantr</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
            Applications of AI
          </span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>
            03
          </span>
        </div>

        {/* Title */}
        <div className="text-center" style={{ marginTop: '1.5%' }}>
          <p style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.9 }}>Limitations of</p>
          <h1
            style={{
              fontSize: 'clamp(28px, 3.5vw, 64px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Existing Systems
          </h1>
        </div>

        {/* Card grid */}
        <div className="flex-1 flex flex-col" style={{ marginTop: '2.5%', gap: 'clamp(12px, 1.2vw, 20px)' }}>
          {/* Top row — 3 cards */}
          <div className="flex flex-1" style={{ gap: 'clamp(12px, 1.2vw, 20px)' }}>
            {cards.slice(0, 3).map((card) => (
              <LiquidGlassCard
                key={card.title}
                className="flex-1 flex flex-col justify-end"
                style={{ padding: 'clamp(20px, 2.2vw, 48px)' }}
              >
                <card.icon
                  style={{
                    width: 'clamp(32px, 2.5vw, 48px)',
                    height: 'clamp(32px, 2.5vw, 48px)',
                    marginBottom: 'clamp(10px, 1vw, 18px)',
                  }}
                  strokeWidth={1.5}
                />
                <h3
                  style={{
                    fontSize: 'clamp(14px, 1.15vw, 22px)',
                    fontWeight: 700,
                    marginBottom: 'clamp(6px, 0.5vw, 10px)',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 'clamp(11px, 0.9vw, 16px)', opacity: 0.8, lineHeight: 1.5 }}>
                  {card.desc}
                </p>
              </LiquidGlassCard>
            ))}
          </div>

          {/* Bottom row — 2 cards */}
          <div className="flex flex-1" style={{ gap: 'clamp(12px, 1.2vw, 20px)' }}>
            {cards.slice(3).map((card) => (
              <LiquidGlassCard
                key={card.title}
                className="flex-1 flex flex-col justify-end"
                style={{ padding: 'clamp(20px, 2.2vw, 48px)' }}
              >
                <card.icon
                  style={{
                    width: 'clamp(32px, 2.5vw, 48px)',
                    height: 'clamp(32px, 2.5vw, 48px)',
                    marginBottom: 'clamp(10px, 1vw, 18px)',
                  }}
                  strokeWidth={1.5}
                />
                <h3
                  style={{
                    fontSize: 'clamp(14px, 1.15vw, 22px)',
                    fontWeight: 700,
                    marginBottom: 'clamp(6px, 0.5vw, 10px)',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 'clamp(11px, 0.9vw, 16px)', opacity: 0.8, lineHeight: 1.5 }}>
                  {card.desc}
                </p>
              </LiquidGlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
