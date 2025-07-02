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
    <div className="fixed inset-0 overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'contrast(1.2) brightness(0.8)' }}
      >
        <source src="https://arttentionmedia.pro/wp-content/uploads/2025/07/social_utribeone_an_abstract_polygonal_landscape_that_transitions_fr_46ab97f1-2116-43bc-a034-868be9595fb1_2.mp4" type="video/mp4" />
        {/* Fallback gradient if video fails */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-900/20 to-background" />
      </video>

      {/* Overlay with reduced opacity particles */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 gradient-cosmic opacity-20" />
        
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
              background: `radial-gradient(circle, hsl(${260 + Math.random() * 40} 85% 70% / ${particle.opacity * 0.5}), transparent)`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}

        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 gradient-particle rounded-full blur-2xl animate-chaos-float opacity-10" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 gradient-particle rounded-full blur-xl animate-chaos-float opacity-15" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-3/4 w-40 h-40 gradient-particle rounded-full blur-3xl animate-chaos-float opacity-8" style={{ animationDelay: '4s' }} />
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-background/40" />
    </div>
  );
};

export default ChaosBackground;