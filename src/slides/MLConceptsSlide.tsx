import VideoBackground from '../components/VideoBackground';
import LiquidGlassCard from '../components/LiquidGlassCard';

const concepts = [
  {
    title: 'Supervised Learning — Fallacy Classification',
    points: [
      'Fine-tuned DeBERTa-v3-base on a labeled corpus of 14 logical fallacy types (ad hominem, straw man, red herring, etc.)',
      'Training: 12k annotated debate excerpts, 80/10/10 split, cross-entropy loss, AdamW optimizer',
      'Achieved 89% macro F1 score — classifies fallacies in real-time from debate transcripts',
    ],
  },
  {
    title: 'Regression — Argument Quality Scoring',
    points: [
      'Custom regression model trained on debate corpus with human-annotated quality scores (1–10 scale)',
      'Features: argument structure depth, evidence density, logical coherence, rebuttal specificity',
      'Output: per-argument strength score used in post-debate performance reports',
    ],
  },
  {
    title: 'Embedding Models & Similarity Search',
    points: [
      'OpenAI text-embedding-3-small generates 1536-dimensional vectors for debate transcript chunks',
      'Cosine similarity search in Pinecone vector store for top-k=5 context retrieval',
      'Enables persistent agent memory — the AI recalls prior debates and adapts strategy accordingly',
    ],
  },
];

export default function MLConceptsSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>Bantr</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Applications of AI</span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>05</span>
        </div>

        {/* Title */}
        <div style={{ marginTop: '2%' }}>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Machine Learning
          </h1>
          <p style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', opacity: 0.7, marginTop: '0.5%' }}>
            Core ML techniques applied in Bantr
          </p>
        </div>

        {/* Three cards */}
        <div className="flex flex-1" style={{ marginTop: '3%', gap: 'clamp(12px, 1.2vw, 20px)' }}>
          {concepts.map((c) => (
            <LiquidGlassCard
              key={c.title}
              className="flex-1 flex flex-col"
              style={{ padding: 'clamp(18px, 2vw, 36px)' }}
            >
              <h3 style={{ fontSize: 'clamp(14px, 1.15vw, 22px)', fontWeight: 700, marginBottom: 'clamp(12px, 1.2vw, 22px)' }}>
                {c.title}
              </h3>
              <ul
                className="list-none"
                style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 1vw, 18px)' }}
              >
                {c.points.map((p, i) => (
                  <li key={i} className="flex items-start">
                    <span
                      className="flex-shrink-0"
                      style={{
                        width: 'clamp(5px, 0.4vw, 7px)',
                        height: 'clamp(5px, 0.4vw, 7px)',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.5)',
                        marginTop: 'clamp(7px, 0.55vw, 10px)',
                        marginRight: 'clamp(8px, 0.7vw, 12px)',
                      }}
                    />
                    <span style={{ fontSize: 'clamp(11px, 0.88vw, 17px)', opacity: 0.9, lineHeight: 1.6 }}>
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </LiquidGlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
