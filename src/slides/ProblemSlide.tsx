import VideoBackground from '../components/VideoBackground';
import LiquidGlassCard from '../components/LiquidGlassCard';

const problems = [
  {
    num: '01',
    title: 'Limited Interactivity in AI Tools',
    desc: 'Current AI chatbots are passive Q&A systems. They lack the ability to engage in structured, adversarial discourse that sharpens critical thinking and argumentation skills.',
  },
  {
    num: '02',
    title: 'No Real-Time Voice-Based AI Debate',
    desc: 'Existing debate platforms are text-only or human-vs-human. No system combines real-time voice interaction with AI-driven argumentative reasoning and live rebuttal generation.',
  },
  {
    num: '03',
    title: 'Absence of Post-Debate Analytics',
    desc: 'Even in human debate contexts, there is no automated system that provides structured argument breakdowns, fallacy detection, scoring rubrics, and actionable performance feedback.',
  },
];

const stats = [
  { value: '78%', label: 'of educators say critical thinking tools are inadequate' },
  { value: '< 3%', label: 'of AI tools support adversarial dialogue' },
  { value: '$4.2B', label: 'projected AI education market by 2028' },
];

export default function ProblemSlide() {
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
            02
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
          Problem Statement
        </h1>

        {/* Two-column layout */}
        <div className="flex flex-1" style={{ marginTop: '3.5%', gap: '5%' }}>
          {/* Left column — Problems */}
          <div className="flex flex-col" style={{ flex: '0 0 55%', gap: 'clamp(12px, 1.2vw, 20px)' }}>
            {problems.map((p) => (
              <LiquidGlassCard
                key={p.num}
                className="flex-1"
                style={{ padding: 'clamp(16px, 1.8vw, 32px)' }}
              >
                <div className="flex items-start" style={{ gap: 'clamp(10px, 1vw, 18px)' }}>
                  <span
                    className="flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: 'clamp(28px, 2.2vw, 40px)',
                      height: 'clamp(28px, 2.2vw, 40px)',
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      fontSize: 'clamp(11px, 0.85vw, 15px)',
                      fontWeight: 700,
                    }}
                  >
                    {p.num}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontSize: 'clamp(14px, 1.15vw, 22px)',
                        fontWeight: 700,
                        marginBottom: 'clamp(4px, 0.4vw, 8px)',
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ fontSize: 'clamp(12px, 0.95vw, 17px)', opacity: 0.85, lineHeight: 1.55 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </LiquidGlassCard>
            ))}
          </div>

          {/* Right column — Stats */}
          <div style={{ flex: '0 0 40%' }}>
            <LiquidGlassCard
              className="h-full flex flex-col justify-center"
              style={{ padding: 'clamp(20px, 2.5vw, 48px)' }}
            >
              <div className="flex flex-col" style={{ gap: 'clamp(20px, 2.5vw, 40px)' }}>
                {stats.map((s) => (
                  <div key={s.value}>
                    <div
                      style={{
                        fontSize: 'clamp(32px, 3.5vw, 64px)',
                        fontWeight: 700,
                        lineHeight: 1,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {s.value}
                    </div>
                    <p
                      style={{
                        fontSize: 'clamp(12px, 0.95vw, 17px)',
                        opacity: 0.7,
                        marginTop: 'clamp(4px, 0.4vw, 8px)',
                        lineHeight: 1.4,
                      }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </LiquidGlassCard>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end w-full" style={{ marginTop: '2%' }}>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.6 }}>
            Problem Statement
          </span>
        </div>
      </div>
    </div>
  );
}
