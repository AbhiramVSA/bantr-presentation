import VideoBackground from '../components/VideoBackground';
import LiquidGlassCard from '../components/LiquidGlassCard';

const sections = [
  {
    title: 'Frontend & Backend',
    items: [
      'Frontend: Next.js 14 (App Router), TypeScript, Tailwind CSS',
      'Backend: Node.js + Express / Python FastAPI',
      'Real-time: WebSocket (Socket.io) + WebRTC',
      'Auth: NextAuth.js / Clerk',
      'Database: PostgreSQL (Prisma ORM) + Redis (caching)',
    ],
  },
  {
    title: 'AI & ML Services',
    items: [
      'LLM: OpenAI GPT-4 Turbo API / Anthropic Claude API',
      'STT: Deepgram Nova-2 (streaming WebSocket)',
      'TTS: ElevenLabs Turbo v2 API',
      'Embeddings: OpenAI text-embedding-3-small',
      'Vector DB: Pinecone (serverless)',
      'Image Gen: DALL·E 3 API',
      'Fallacy Detection: HuggingFace Transformers (fine-tuned DeBERTa-v3)',
    ],
  },
  {
    title: 'DevOps & Tooling',
    items: [
      'CI/CD: GitHub Actions → Vercel (frontend) / Railway (backend)',
      'Monitoring: Sentry (error tracking), Datadog (infrastructure)',
      'Version Control: Git + GitHub (monorepo)',
      'Package Manager: pnpm (workspaces)',
      'Testing: Vitest (unit), Playwright (E2E)',
    ],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-none" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(6px, 0.6vw, 12px)' }}>
      {items.map((item) => (
        <li key={item} className="flex items-start" style={{ fontSize: 'clamp(11px, 0.88vw, 17px)', opacity: 0.9, lineHeight: 1.55 }}>
          <span className="flex-shrink-0" style={{ width: 'clamp(5px, 0.35vw, 6px)', height: 'clamp(5px, 0.35vw, 6px)', borderRadius: '50%', background: 'rgba(255,255,255,0.5)', marginTop: 'clamp(7px, 0.55vw, 10px)', marginRight: 'clamp(8px, 0.7vw, 12px)' }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SoftwareSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>Bantr</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Applications of AI</span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>09</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '2%' }}>
          Software & Platforms
        </h1>

        {/* Three columns */}
        <div className="flex flex-1" style={{ marginTop: '3%', gap: 'clamp(12px, 1.2vw, 20px)' }}>
          {sections.map((s) => (
            <LiquidGlassCard
              key={s.title}
              className="flex-1 flex flex-col"
              style={{ padding: 'clamp(18px, 2vw, 36px)' }}
            >
              <h3 style={{ fontSize: 'clamp(14px, 1.15vw, 22px)', fontWeight: 700, marginBottom: 'clamp(14px, 1.3vw, 24px)' }}>
                {s.title}
              </h3>
              <BulletList items={s.items} />
            </LiquidGlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
