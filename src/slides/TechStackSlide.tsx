import VideoBackground from '../components/VideoBackground';
import LiquidGlassCard from '../components/LiquidGlassCard';

const frontend = [
  'Frontend: Next.js 14 (App Router), TypeScript, Tailwind CSS',
  'Backend: Node.js + Express / Python FastAPI',
  'Real-time: WebSocket (Socket.io) + WebRTC',
  'Auth: NextAuth.js / Clerk',
  'Database: PostgreSQL (Prisma ORM) + Redis (caching)',
];

const aiServices = [
  'LLM: OpenAI GPT-4 Turbo API / Anthropic Claude API',
  'STT: Deepgram Nova-2 (streaming WebSocket)',
  'TTS: ElevenLabs Turbo v2 API',
  'Embeddings: OpenAI text-embedding-3-small',
  'Vector DB: Pinecone (serverless)',
  'Image Gen: DALL·E 3 API',
  'Fallacy Detection: HuggingFace (fine-tuned DeBERTa-v3)',
];

const hardware = [
  'Cloud: AWS / Vercel (frontend), Railway (backend)',
  'GPU: AWS g5.xlarge (NVIDIA A10G) for model inference',
  'Storage: AWS S3 (audio files, generated images)',
  'CDN: CloudFront (static assets, low-latency delivery)',
  'Monitoring: Sentry (error tracking), Datadog (infra)',
  'CI/CD: GitHub Actions → Vercel / Railway auto-deploy',
  'Min Requirements: 16GB RAM, 4 vCPU for backend services',
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul
      className="list-none"
      style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(6px, 0.6vw, 12px)' }}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start"
          style={{ fontSize: 'clamp(11px, 0.85vw, 16px)', opacity: 0.9, lineHeight: 1.55 }}
        >
          <span
            className="flex-shrink-0"
            style={{
              width: 'clamp(5px, 0.35vw, 6px)',
              height: 'clamp(5px, 0.35vw, 6px)',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.5)',
              marginTop: 'clamp(6px, 0.5vw, 9px)',
              marginRight: 'clamp(8px, 0.7vw, 12px)',
            }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TechStackSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/00qQnfNo7sSpnp3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>Bantr</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>
            Applications of AI
          </span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>
            07
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
          Software & Hardware Stack
        </h1>

        {/* Two-column layout */}
        <div className="flex flex-1" style={{ marginTop: '3%', gap: '4%' }}>
          {/* Left — Software */}
          <div
            className="flex flex-col"
            style={{ flex: '0 0 55%', gap: 'clamp(12px, 1.2vw, 20px)' }}
          >
            <LiquidGlassCard
              className="flex-1"
              style={{ padding: 'clamp(16px, 1.8vw, 32px)' }}
            >
              <h3
                style={{
                  fontSize: 'clamp(14px, 1.15vw, 22px)',
                  fontWeight: 700,
                  marginBottom: 'clamp(10px, 1vw, 18px)',
                }}
              >
                Frontend & Backend
              </h3>
              <BulletList items={frontend} />
            </LiquidGlassCard>

            <LiquidGlassCard
              className="flex-1"
              style={{ padding: 'clamp(16px, 1.8vw, 32px)' }}
            >
              <h3
                style={{
                  fontSize: 'clamp(14px, 1.15vw, 22px)',
                  fontWeight: 700,
                  marginBottom: 'clamp(10px, 1vw, 18px)',
                }}
              >
                AI & ML Services
              </h3>
              <BulletList items={aiServices} />
            </LiquidGlassCard>
          </div>

          {/* Right — Hardware */}
          <div style={{ flex: '0 0 40%' }}>
            <LiquidGlassCard
              className="h-full"
              style={{ padding: 'clamp(16px, 1.8vw, 32px)' }}
            >
              <h3
                style={{
                  fontSize: 'clamp(14px, 1.15vw, 22px)',
                  fontWeight: 700,
                  marginBottom: 'clamp(10px, 1vw, 18px)',
                }}
              >
                Hardware / Infrastructure
              </h3>
              <BulletList items={hardware} />
            </LiquidGlassCard>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center w-full" style={{ marginTop: '2%' }}>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.7 }}>Thank You</span>
        </div>
      </div>
    </div>
  );
}
