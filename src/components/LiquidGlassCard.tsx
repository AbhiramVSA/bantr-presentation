import type { ReactNode, CSSProperties } from 'react';

interface LiquidGlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function LiquidGlassCard({ children, className = '', style }: LiquidGlassCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        backdropFilter: 'blur(24px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
        border: '1px solid rgba(255,255,255,0.12)',
        ...style,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 15% 10%, rgba(255,255,255,0.06), transparent 60%)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
