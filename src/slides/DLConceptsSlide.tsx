import VideoBackground from '../components/VideoBackground';
import LiquidGlassCard from '../components/LiquidGlassCard';

const concepts = [
  {
    title: 'Transformer Architecture (DeBERTa-v3)',
    points: [
      'Disentangled attention mechanism — separates content and position embeddings for richer contextual understanding',
      'Used for logical fallacy detection: fine-tuned on 14 fallacy categories from debate transcripts',
      'Pre-trained on large text corpus, then fine-tuned with task-specific classification head (768-dim → 14 classes)',
      'Gradient accumulation with mixed precision (FP16) for efficient training on limited GPU memory',
    ],
  },
  {
    title: 'Generative Models — DALL·E 3',
    points: [
      'Diffusion-based image generation model conditioned on text prompts',
      'Bantr uses sentiment analysis output to generate "mood images" — abstract visuals capturing the debate\'s emotional arc',
      'Prompt construction: debate sentiment scores + key themes → descriptive art prompt → DALL·E 3 API',
      'Output: unique post-debate visual artifact representing argument intensity, tone shifts, and resolution',
    ],
  },
  {
    title: 'Neural Speech Synthesis (TTS)',
    points: [
      'ElevenLabs Turbo v2 — neural TTS model producing natural, expressive speech from LLM-generated text',
      'Low-latency streaming: audio chunks streamed as they\'re generated, not waiting for full response',
      'Voice cloning capability enables distinct AI agent voices matching configured personas',
      'End-to-end pipeline (STT → LLM → TTS) achieves sub-2 second latency for real-time debate flow',
    ],
  },
];

export default function DLConceptsSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>Bantr</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Applications of AI</span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>06</span>
        </div>

        {/* Title */}
        <div style={{ marginTop: '2%' }}>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Deep Learning
          </h1>
          <p style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', opacity: 0.7, marginTop: '0.5%' }}>
            Neural network architectures powering Bantr
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
