import VideoBackground from '../components/VideoBackground';
import LiquidGlassCard from '../components/LiquidGlassCard';

const left = {
  title: 'Speech-to-Text & Text-to-Speech',
  points: [
    'Deepgram Nova-2: streaming ASR with <300ms latency, punctuation recovery, and speaker diarization support',
    'ElevenLabs Turbo v2: neural TTS with prosody modeling, emotion injection, and chunked audio streaming',
    'Pipeline: raw audio (16kHz PCM) → Deepgram WebSocket → transcript → LLM → text → ElevenLabs → audio stream',
    'Speaker Diarization: PyAnnote segments multi-speaker audio for accurate transcript attribution',
  ],
};

const rightTop = {
  title: 'Large Language Models & Prompt Engineering',
  points: [
    'GPT-4 Turbo / Claude 3.5 Sonnet with custom debate system prompts defining persona, style, and constraints',
    'Chain-of-thought (CoT) prompting for structured rebuttals: identify claim → find weakness → construct counter-argument',
    'System prompt includes debate rules, scoring awareness, and adversarial behavior directives (not agreeable by design)',
    'Temperature tuning: 0.7–0.9 for creative argumentation, lower for factual precision in evidence-based debates',
  ],
};

const rightBottom = {
  title: 'Sentiment Analysis & Text Classification',
  points: [
    'VADER (lexicon-based) for real-time polarity scoring during debate — feeds into mood image generation',
    'Custom transformer classifier for debate tone: aggressive, conciliatory, evasive, analytical, persuasive',
    'Sentiment trajectory tracked across turns — generates "emotional arc" used by DALL·E 3 prompt construction',
    'Combined output: per-turn sentiment + overall debate mood → structured report + generated artwork',
  ],
};

export default function NLPConceptsSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>Bantr</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Applications of AI</span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>07</span>
        </div>

        {/* Title */}
        <div style={{ marginTop: '2%' }}>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Natural Language Processing
          </h1>
          <p style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', opacity: 0.7, marginTop: '0.5%' }}>
            NLP pipeline from voice input to structured output
          </p>
        </div>

        {/* Two columns */}
        <div className="flex flex-1" style={{ marginTop: '3%', gap: 'clamp(12px, 1.2vw, 20px)' }}>
          {/* Left — STT/TTS */}
          <LiquidGlassCard
            className="flex flex-col"
            style={{ flex: '0 0 48%', padding: 'clamp(18px, 2vw, 36px)' }}
          >
            <h3 style={{ fontSize: 'clamp(14px, 1.15vw, 22px)', fontWeight: 700, marginBottom: 'clamp(12px, 1.2vw, 22px)' }}>
              {left.title}
            </h3>
            <ul className="list-none" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 1vw, 18px)' }}>
              {left.points.map((p, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex-shrink-0" style={{ width: 'clamp(5px, 0.4vw, 7px)', height: 'clamp(5px, 0.4vw, 7px)', borderRadius: '50%', background: 'rgba(255,255,255,0.5)', marginTop: 'clamp(7px, 0.55vw, 10px)', marginRight: 'clamp(8px, 0.7vw, 12px)' }} />
                  <span style={{ fontSize: 'clamp(11px, 0.88vw, 17px)', opacity: 0.9, lineHeight: 1.6 }}>{p}</span>
                </li>
              ))}
            </ul>
          </LiquidGlassCard>

          {/* Right — stacked */}
          <div className="flex flex-col flex-1" style={{ gap: 'clamp(12px, 1.2vw, 20px)' }}>
            <LiquidGlassCard className="flex-1 flex flex-col" style={{ padding: 'clamp(18px, 2vw, 36px)' }}>
              <h3 style={{ fontSize: 'clamp(14px, 1.15vw, 22px)', fontWeight: 700, marginBottom: 'clamp(10px, 1vw, 16px)' }}>
                {rightTop.title}
              </h3>
              <ul className="list-none" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 0.8vw, 14px)' }}>
                {rightTop.points.map((p, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0" style={{ width: 'clamp(5px, 0.4vw, 7px)', height: 'clamp(5px, 0.4vw, 7px)', borderRadius: '50%', background: 'rgba(255,255,255,0.5)', marginTop: 'clamp(7px, 0.55vw, 10px)', marginRight: 'clamp(8px, 0.7vw, 12px)' }} />
                    <span style={{ fontSize: 'clamp(11px, 0.85vw, 16px)', opacity: 0.9, lineHeight: 1.55 }}>{p}</span>
                  </li>
                ))}
              </ul>
            </LiquidGlassCard>

            <LiquidGlassCard className="flex-1 flex flex-col" style={{ padding: 'clamp(18px, 2vw, 36px)' }}>
              <h3 style={{ fontSize: 'clamp(14px, 1.15vw, 22px)', fontWeight: 700, marginBottom: 'clamp(10px, 1vw, 16px)' }}>
                {rightBottom.title}
              </h3>
              <ul className="list-none" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 0.8vw, 14px)' }}>
                {rightBottom.points.map((p, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0" style={{ width: 'clamp(5px, 0.4vw, 7px)', height: 'clamp(5px, 0.4vw, 7px)', borderRadius: '50%', background: 'rgba(255,255,255,0.5)', marginTop: 'clamp(7px, 0.55vw, 10px)', marginRight: 'clamp(8px, 0.7vw, 12px)' }} />
                    <span style={{ fontSize: 'clamp(11px, 0.85vw, 16px)', opacity: 0.9, lineHeight: 1.55 }}>{p}</span>
                  </li>
                ))}
              </ul>
            </LiquidGlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
