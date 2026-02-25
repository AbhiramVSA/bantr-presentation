import VideoBackground from '../components/VideoBackground';
import LiquidGlassCard from '../components/LiquidGlassCard';

interface Column {
  title: string;
  subtitle: string;
  items: string[];
}

const columns: Column[] = [
  {
    title: 'Natural Language Processing',
    subtitle: 'NLP & LLMs',
    items: [
      'Speech-to-Text: Deepgram Nova-2 (streaming, <300ms latency)',
      'Argument Generation: GPT-4 Turbo / Claude 3.5 with custom debate system prompts',
      'Prompt Engineering: Chain-of-thought reasoning for structured rebuttals',
      'Text-to-Speech: ElevenLabs Turbo v2 (low-latency, expressive)',
      'Sentiment Analysis: VADER + custom transformer for debate tone classification',
    ],
  },
  {
    title: 'Deep Learning Models',
    subtitle: 'Deep Learning',
    items: [
      'Logical Fallacy Detection: Fine-tuned DeBERTa-v3 classifier (14 fallacy types, 89% F1)',
      'Argument Quality Scoring: Custom regression model on debate corpus',
      'Embedding Model: text-embedding-3-small (1536-dim) for RAG chunking',
      'Mood Image Generation: DALL·E 3 with sentiment-conditioned prompts',
      'Speaker Diarization: PyAnnote for multi-speaker segmentation',
    ],
  },
  {
    title: 'Retrieval-Augmented Generation',
    subtitle: 'RAG & Memory',
    items: [
      'Vector Store: Pinecone (serverless, cosine similarity)',
      'Chunking Strategy: Semantic splitting with 512-token windows, 50-token overlap',
      'Retrieval: Top-k=5 context injection into agent system prompt',
      'Memory Decay: Recency-weighted scoring for context relevance',
      'Cross-Session Persistence: Agent remembers prior debates and adapts strategy',
    ],
  },
];

export default function MethodologySlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>Bantr</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
            Applications of AI
          </span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>
            05
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
            Methodology
          </h1>
          <p style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.8 }}>
            ML / DL / NLP Pipeline
          </p>
        </div>

        {/* Three columns */}
        <div className="flex flex-1" style={{ marginTop: '3%', gap: '4%' }}>
          {columns.map((col) => (
            <div key={col.subtitle} style={{ flex: '0 0 30%' }}>
              <LiquidGlassCard
                className="h-full"
                style={{ padding: 'clamp(16px, 1.8vw, 32px)' }}
              >
                <h3
                  style={{
                    fontSize: 'clamp(16px, 1.3vw, 28px)',
                    fontWeight: 700,
                    marginBottom: 'clamp(12px, 1.2vw, 22px)',
                  }}
                >
                  {col.title}
                </h3>
                <ul
                  className="list-none"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(8px, 0.8vw, 14px)',
                  }}
                >
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start"
                      style={{
                        fontSize: 'clamp(11px, 0.85vw, 17px)',
                        opacity: 0.9,
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        className="flex-shrink-0"
                        style={{
                          width: 'clamp(5px, 0.4vw, 7px)',
                          height: 'clamp(5px, 0.4vw, 7px)',
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.5)',
                          marginTop: 'clamp(6px, 0.5vw, 10px)',
                          marginRight: 'clamp(8px, 0.7vw, 12px)',
                        }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </LiquidGlassCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
