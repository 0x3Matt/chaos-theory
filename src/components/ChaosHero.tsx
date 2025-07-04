import { useState, useEffect } from 'react';
import ChaosBackground from './ChaosBackground';
import ChaosTitle from './ChaosTitle';
import ContentBlock from './ContentBlock';
import SocialIcons from './SocialIcons';

const ChaosHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <ChaosBackground />

      {/* Central rotating title */}
      <ChaosTitle />

      {/* Top left content block */}
      <div className="absolute top-16 left-8 md:left-16 lg:left-24 z-10">
        <div className={`transform transition-all duration-1000 ease-out ${
          isLoaded 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-16 opacity-0'
        }`}>
          <ContentBlock
            title="Uncertainty"
            content="Within disorder lies potential. Each moment is shaped by countless invisible variables."
            delay={500}
            alignment="left"
          />
        </div>
      </div>

      {/* Bottom right content block */}
      <div className="absolute bottom-16 right-8 md:right-16 lg:right-24 z-10">
        <div className={`transform transition-all duration-1000 ease-out ${
          isLoaded 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-16 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          <ContentBlock
            title="Emergence"
            content="Patterns rise from unpredictability. Chaos is not random — it's undiscovered order."
            delay={1200}
            alignment="right"
          />
        </div>
      </div>

      {/* Social icons */}
      <SocialIcons />

      {/* Subtle cursor effect overlay */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div 
          className="absolute w-32 h-32 rounded-full mix-blend-difference opacity-10"
          style={{
            background: 'radial-gradient(circle, hsl(var(--chaos-glow) / 0.3), transparent)',
            transform: 'translate(var(--mouse-x, 50vw), var(--mouse-y, 50vh)) translate(-50%, -50%)',
            transition: 'transform 0.1s ease-out',
          }}
        />
      </div>
    </div>
  );
};

export default ChaosHero;