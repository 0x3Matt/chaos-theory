import { useEffect, useState } from 'react';

const ChaosBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; delay: number; size: number; opacity: number }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        delay: Math.random() * 10,
        size: Math.random() * 100 + 50,
        opacity: Math.random() * 0.4 + 0.1,
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient overlay */}
      <div className="absolute inset-0 gradient-cosmic opacity-30" />
      
      {/* Animated particles */}
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className={`absolute rounded-full blur-xl ${
            index % 2 === 0 ? 'animate-chaos-particles' : 'animate-chaos-particles-2'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, hsl(${260 + Math.random() * 40} 85% 70% / ${particle.opacity}), transparent)`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 gradient-particle rounded-full blur-2xl animate-chaos-float opacity-20" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 gradient-particle rounded-full blur-xl animate-chaos-float opacity-30" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-3/4 w-40 h-40 gradient-particle rounded-full blur-3xl animate-chaos-float opacity-15" style={{ animationDelay: '4s' }} />

      {/* Noise overlay for texture */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default ChaosBackground;