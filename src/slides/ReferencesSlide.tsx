import VideoBackground from '../components/VideoBackground';
import LiquidGlassCard from '../components/LiquidGlassCard';

const leftCol = [
  {
    category: 'Large Language Models',
    items: [
      'OpenAI. "GPT-4 Technical Report." arXiv:2303.08774, 2023.',
      'Anthropic. "Claude 3 Model Card." Anthropic Research, 2024.',
      'Wei, J. et al. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022.',
    ],
  },
  {
    category: 'Speech & Audio',
    items: [
      'Deepgram. "Nova-2: High-Accuracy Speech Recognition." Deepgram Documentation, 2024.',
      'ElevenLabs. "Turbo v2: Low-Latency Text-to-Speech." ElevenLabs API Docs, 2024.',
      'Bredin, H. "PyAnnote.audio: Neural Speaker Diarization." ICASSP 2023.',
    ],
  },
  {
    category: 'Image Generation & Multimodal',
    items: [
      'OpenAI. "DALL·E 3: Improving Image Generation with Better Captions." OpenAI Research, 2023.',
      'Ramesh, A. et al. "Hierarchical Text-Conditional Image Generation with CLIP Latents." arXiv:2204.06125, 2022.',
    ],
  },
];

const rightCol = [
  {
    category: 'RAG & Vector Search',
    items: [
      'Lewis, P. et al. "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." NeurIPS 2020.',
      'Pinecone. "Vector Database for Machine Learning." Pinecone Documentation, 2024.',
      'OpenAI. "Text Embeddings: text-embedding-3-small." OpenAI API Reference, 2024.',
    ],
  },
  {
    category: 'NLP & Classification',
    items: [
      'He, P. et al. "DeBERTa: Decoding-enhanced BERT with Disentangled Attention." ICLR 2021.',
      'Hutto, C.J. & Gilbert, E. "VADER: A Parsimonious Rule-based Model for Sentiment Analysis." ICWSM 2014.',
      'Habernal, I. et al. "Argumentation Mining in User-Generated Web Discourse." Computational Linguistics, 2017.',
    ],
  },
];

function RefCard({ category, items }: { category: string; items: string[] }) {
  return (
    <LiquidGlassCard style={{ padding: 'clamp(10px, 0.9vw, 18px) clamp(14px, 1.3vw, 24px)' }}>
      <h3 style={{ fontSize: 'clamp(12px, 0.95vw, 18px)', fontWeight: 700, marginBottom: 'clamp(5px, 0.4vw, 8px)' }}>
        {category}
      </h3>
      <ul className="list-none" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3px, 0.25vw, 5px)' }}>
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start"
            style={{ fontSize: 'clamp(10px, 0.75vw, 14px)', opacity: 0.8, lineHeight: 1.45 }}
          >
            <span
              className="flex-shrink-0"
              style={{
                width: 'clamp(4px, 0.28vw, 5px)',
                height: 'clamp(4px, 0.28vw, 5px)',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.4)',
                marginTop: 'clamp(5px, 0.38vw, 7px)',
                marginRight: 'clamp(6px, 0.5vw, 9px)',
              }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </LiquidGlassCard>
  );
}

export default function ReferencesSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>Bantr</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Applications of AI</span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>11</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '2%' }}>
          References
        </h1>

        {/* Two-column layout */}
        <div className="flex flex-1" style={{ marginTop: '2%', gap: 'clamp(10px, 1vw, 18px)' }}>
          <div className="flex flex-col flex-1" style={{ gap: 'clamp(8px, 0.7vw, 12px)' }}>
            {leftCol.map((r) => (
              <RefCard key={r.category} category={r.category} items={r.items} />
            ))}
          </div>
          <div className="flex flex-col flex-1" style={{ gap: 'clamp(8px, 0.7vw, 12px)' }}>
            {rightCol.map((r) => (
              <RefCard key={r.category} category={r.category} items={r.items} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center w-full" style={{ marginTop: '1.5%' }}>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.7 }}>Thank You</span>
        </div>
      </div>
    </div>
  );
}
