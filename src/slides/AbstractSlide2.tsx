import VideoBackground from '../components/VideoBackground';
import LiquidGlassCard from '../components/LiquidGlassCard';

const points = [
  'Retrieval-Augmented Generation (RAG) provides persistent agent memory — debate transcripts are chunked, embedded, and stored in Pinecone for cross-session context.',
  'Post-debate, the platform generates structured summaries with argument trees, key rebuttals, and conclusion extraction.',
  'A fine-tuned DeBERTa-v3 classifier performs logical fallacy detection across 14 fallacy types (89% F1 score).',
  'Performance scoring algorithms evaluate argument strength, coherence, evidence usage, and rebuttal effectiveness.',
  'Mood-based image generation (DALL·E 3) creates abstract imagery representing the emotional and tonal arc of each debate.',
  'Bantr bridges the gap in interactive AI communication tools by combining conversational AI with competitive debate frameworks.',
];

export default function AbstractSlide2() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>Bantr</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Applications of AI</span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>03</span>
        </div>

        {/* Title */}
        <div style={{ marginTop: '2%' }}>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Abstract
          </h1>
          <p style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', opacity: 0.7, marginTop: '0.5%' }}>
            Post-Debate Intelligence & Key Contributions
          </p>
        </div>

        {/* Points */}
        <div className="flex-1 flex flex-col justify-center" style={{ marginTop: '1%' }}>
          <LiquidGlassCard style={{ padding: 'clamp(20px, 2.5vw, 48px)' }}>
            <ul
              className="list-none"
              style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.2vw, 24px)' }}
            >
              {points.map((point, i) => (
                <li key={i} className="flex items-start" style={{ gap: 'clamp(12px, 1vw, 20px)' }}>
                  <span
                    className="flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: 'clamp(26px, 2vw, 36px)',
                      height: 'clamp(26px, 2vw, 36px)',
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      fontSize: 'clamp(11px, 0.8vw, 14px)',
                      fontWeight: 700,
                      marginTop: 'clamp(2px, 0.15vw, 4px)',
                    }}
                  >
                    {String(i + 6).padStart(2, '0')}
                  </span>
                  <p style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', opacity: 0.9, lineHeight: 1.6 }}>
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </LiquidGlassCard>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end w-full" style={{ marginTop: '1.5%' }}>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.6 }}>Abstract (2/2)</span>
        </div>
      </div>
    </div>
  );
}
