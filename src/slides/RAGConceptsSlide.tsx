import { Database, Layers, Search, Clock, RefreshCw } from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import LiquidGlassCard from '../components/LiquidGlassCard';
import type { LucideIcon } from 'lucide-react';

interface Concept {
  icon: LucideIcon;
  title: string;
  points: string[];
}

const concepts: Concept[] = [
  {
    icon: Layers,
    title: 'Chunking & Embedding',
    points: [
      'Debate transcripts split using semantic chunking — 512-token windows with 50-token overlap',
      'Each chunk embedded via OpenAI text-embedding-3-small (1536 dimensions)',
      'Metadata attached: speaker, timestamp, debate topic, sentiment score',
    ],
  },
  {
    icon: Database,
    title: 'Vector Storage (Pinecone)',
    points: [
      'Serverless Pinecone index with cosine similarity metric',
      'Namespaced by agent ID — each AI persona has its own memory space',
      'Upserts happen post-debate; retrieval happens pre-response during live debate',
    ],
  },
  {
    icon: Search,
    title: 'Retrieval & Context Injection',
    points: [
      'Top-k=5 retrieval: most relevant past debate chunks injected into LLM system prompt',
      'Enables: "You argued X last time, but now you\'re contradicting yourself"',
      'Context window management: retrieved chunks + current transcript fit within token budget',
    ],
  },
  {
    icon: Clock,
    title: 'Memory Decay & Recency Weighting',
    points: [
      'Recency-weighted scoring: newer debate memories rank higher in retrieval',
      'Prevents stale context from dominating — agent evolves its strategy over time',
      'Configurable decay rate per agent: some agents have "long memory," others forget quickly',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Cross-Session Persistence',
    points: [
      'Agent remembers prior debates: adapts arguments, avoids repeated points, references past exchanges',
      'Users can reset agent memory or "fork" agents with different memory histories',
      'Enables progressive difficulty — the AI opponent gets harder as it learns your patterns',
    ],
  },
];

export default function RAGConceptsSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>Bantr</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Applications of AI</span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>08</span>
        </div>

        {/* Title */}
        <div style={{ marginTop: '2%' }}>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            RAG & Agent Memory
          </h1>
          <p style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', opacity: 0.7, marginTop: '0.5%' }}>
            Retrieval-Augmented Generation for persistent debate context
          </p>
        </div>

        {/* 5 compact cards */}
        <div
          className="flex-1 flex flex-col justify-center"
          style={{ marginTop: '1.5%', gap: 'clamp(8px, 0.8vw, 14px)' }}
        >
          {concepts.map((c) => (
            <LiquidGlassCard
              key={c.title}
              style={{ padding: 'clamp(12px, 1.2vw, 22px) clamp(16px, 1.6vw, 28px)' }}
            >
              <div className="flex items-start" style={{ gap: 'clamp(12px, 1vw, 20px)' }}>
                <c.icon
                  style={{
                    width: 'clamp(22px, 1.7vw, 32px)',
                    height: 'clamp(22px, 1.7vw, 32px)',
                    opacity: 0.75,
                    flexShrink: 0,
                    marginTop: 'clamp(2px, 0.15vw, 4px)',
                  }}
                  strokeWidth={1.5}
                />
                <div className="flex items-start flex-1" style={{ gap: 'clamp(12px, 1.5vw, 28px)' }}>
                  <h3
                    className="flex-shrink-0"
                    style={{
                      fontSize: 'clamp(13px, 1vw, 19px)',
                      fontWeight: 700,
                      width: 'clamp(160px, 14vw, 260px)',
                    }}
                  >
                    {c.title}
                  </h3>
                  <div className="flex flex-1" style={{ gap: 'clamp(8px, 1vw, 20px)' }}>
                    {c.points.map((p, i) => (
                      <p
                        key={i}
                        className="flex-1"
                        style={{ fontSize: 'clamp(10px, 0.8vw, 15px)', opacity: 0.85, lineHeight: 1.5 }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </LiquidGlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
