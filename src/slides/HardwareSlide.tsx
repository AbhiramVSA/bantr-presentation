import { Server, Cpu, HardDrive, Globe, Activity, Monitor } from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import LiquidGlassCard from '../components/LiquidGlassCard';
import type { LucideIcon } from 'lucide-react';

interface Spec {
  icon: LucideIcon;
  title: string;
  details: string[];
}

const specs: Spec[] = [
  {
    icon: Cpu,
    title: 'GPU — Model Inference',
    details: [
      'AWS g5.xlarge — NVIDIA A10G (24GB VRAM)',
      'Used for: DeBERTa-v3 fallacy detection, PyAnnote speaker diarization',
      'Mixed precision (FP16) inference for 2–3× throughput',
      'Fallback: CPU inference viable for low-traffic with ~4× latency increase',
    ],
  },
  {
    icon: Server,
    title: 'Cloud Compute',
    details: [
      'Frontend: Vercel (Edge Network, serverless functions)',
      'Backend: Railway (containerized Node.js / FastAPI)',
      'Min specs: 16GB RAM, 4 vCPU for backend services',
      'Auto-scaling: Railway scales containers 0→N based on request load',
    ],
  },
  {
    icon: HardDrive,
    title: 'Storage',
    details: [
      'AWS S3: audio recordings, generated mood images, debate exports',
      'PostgreSQL (Supabase/RDS): user data, debate metadata, agent configs',
      'Pinecone: vector embeddings (serverless, auto-scales)',
      'Redis: session cache, rate limiting, real-time state',
    ],
  },
  {
    icon: Globe,
    title: 'CDN & Networking',
    details: [
      'CloudFront: static assets, low-latency global delivery',
      'WebRTC: peer-to-peer audio with TURN/STUN fallback',
      'WebSocket: persistent connections for real-time transcript streaming',
      'Target latency: <50ms CDN, <300ms STT, <2s full pipeline',
    ],
  },
  {
    icon: Activity,
    title: 'Monitoring & Observability',
    details: [
      'Sentry: error tracking, performance monitoring, session replay',
      'Datadog: infrastructure metrics, APM traces, log aggregation',
      'Custom dashboards: debate latency P50/P95/P99, LLM token usage, TTS queue depth',
    ],
  },
  {
    icon: Monitor,
    title: 'Development Environment',
    details: [
      'Local: Apple M-series / NVIDIA RTX for model testing',
      'Docker Compose: full local stack (DB, Redis, backend, frontend)',
      'GPU cloud notebooks: Google Colab Pro+ / Lambda Cloud for model fine-tuning',
    ],
  },
];

export default function HardwareSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <VideoBackground src="https://stream.mux.com/00qQnfNo7sSpnp3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8" />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: '4% 5.2%' }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span style={{ fontSize: 'clamp(16px, 1.4vw, 28px)', fontWeight: 700 }}>Bantr</span>
          <span style={{ fontSize: 'clamp(12px, 1.05vw, 20px)', opacity: 0.8 }}>Applications of AI</span>
          <span style={{ fontSize: 'clamp(14px, 1.2vw, 24px)', opacity: 0.6, fontWeight: 500 }}>10</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '2%' }}>
          Hardware & Infrastructure
        </h1>

        {/* 3×2 grid */}
        <div className="flex-1 flex flex-col" style={{ marginTop: '3%', gap: 'clamp(10px, 1vw, 18px)' }}>
          <div className="flex flex-1" style={{ gap: 'clamp(10px, 1vw, 18px)' }}>
            {specs.slice(0, 3).map((s) => (
              <LiquidGlassCard key={s.title} className="flex-1 flex flex-col" style={{ padding: 'clamp(14px, 1.5vw, 28px)' }}>
                <div className="flex items-center" style={{ gap: 'clamp(8px, 0.7vw, 14px)', marginBottom: 'clamp(10px, 1vw, 18px)' }}>
                  <s.icon style={{ width: 'clamp(20px, 1.6vw, 28px)', height: 'clamp(20px, 1.6vw, 28px)', opacity: 0.75 }} strokeWidth={1.5} />
                  <h3 style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', fontWeight: 700 }}>{s.title}</h3>
                </div>
                <ul className="list-none" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5px, 0.5vw, 10px)' }}>
                  {s.details.map((d, i) => (
                    <li key={i} className="flex items-start" style={{ fontSize: 'clamp(10px, 0.8vw, 15px)', opacity: 0.85, lineHeight: 1.5 }}>
                      <span className="flex-shrink-0" style={{ width: 'clamp(4px, 0.3vw, 6px)', height: 'clamp(4px, 0.3vw, 6px)', borderRadius: '50%', background: 'rgba(255,255,255,0.4)', marginTop: 'clamp(6px, 0.45vw, 9px)', marginRight: 'clamp(6px, 0.6vw, 10px)' }} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </LiquidGlassCard>
            ))}
          </div>
          <div className="flex flex-1" style={{ gap: 'clamp(10px, 1vw, 18px)' }}>
            {specs.slice(3).map((s) => (
              <LiquidGlassCard key={s.title} className="flex-1 flex flex-col" style={{ padding: 'clamp(14px, 1.5vw, 28px)' }}>
                <div className="flex items-center" style={{ gap: 'clamp(8px, 0.7vw, 14px)', marginBottom: 'clamp(10px, 1vw, 18px)' }}>
                  <s.icon style={{ width: 'clamp(20px, 1.6vw, 28px)', height: 'clamp(20px, 1.6vw, 28px)', opacity: 0.75 }} strokeWidth={1.5} />
                  <h3 style={{ fontSize: 'clamp(13px, 1.05vw, 20px)', fontWeight: 700 }}>{s.title}</h3>
                </div>
                <ul className="list-none" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5px, 0.5vw, 10px)' }}>
                  {s.details.map((d, i) => (
                    <li key={i} className="flex items-start" style={{ fontSize: 'clamp(10px, 0.8vw, 15px)', opacity: 0.85, lineHeight: 1.5 }}>
                      <span className="flex-shrink-0" style={{ width: 'clamp(4px, 0.3vw, 6px)', height: 'clamp(4px, 0.3vw, 6px)', borderRadius: '50%', background: 'rgba(255,255,255,0.4)', marginTop: 'clamp(6px, 0.45vw, 9px)', marginRight: 'clamp(6px, 0.6vw, 10px)' }} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </LiquidGlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
