import VideoBackground from '../components/VideoBackground';
import LiquidGlassCard from '../components/LiquidGlassCard';

const references = [
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
  {
    category: 'Image Generation & Multimodal',
    items: [
      'OpenAI. "DALL·E 3: Improving Image Generation with Better Captions." OpenAI Research, 2023.',
      'Ramesh, A. et al. "Hierarchical Text-Conditional Image Generation with CLIP Latents." arXiv:2204.06125, 2022.',
    ],
  },
];

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

        {/* Reference cards in a scrollable area */}
        <div
          className="flex-1 flex flex-col"
          style={{ marginTop: '2.5%', gap: 'clamp(8px, 0.8vw, 14px)', overflow: 'hidden' }}
        >
          {references.map((r) => (
            <LiquidGlassCard
              key={r.category}
              style={{ padding: 'clamp(10px, 1.1vw, 20px) clamp(16px, 1.6vw, 28px)' }}
            >
              <h3 style={{ fontSize: 'clamp(12px, 1vw, 19px)', fontWeight: 700, marginBottom: 'clamp(6px, 0.5vw, 10px)' }}>
                {r.category}
              </h3>
              <ul className="list-none" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4px, 0.35vw, 7px)' }}>
                {r.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start"
                    style={{ fontSize: 'clamp(10px, 0.78vw, 15px)', opacity: 0.8, lineHeight: 1.5 }}
                  >
                    <span className="flex-shrink-0" style={{ width: 'clamp(4px, 0.3vw, 6px)', height: 'clamp(4px, 0.3vw, 6px)', borderRadius: '50%', background: 'rgba(255,255,255,0.4)', marginTop: 'clamp(6px, 0.4vw, 8px)', marginRight: 'clamp(8px, 0.6vw, 10px)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </LiquidGlassCard>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center w-full" style={{ marginTop: '1.5%' }}>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.7 }}>Thank You</span>
        </div>
      </div>
    </div>
  );
}
