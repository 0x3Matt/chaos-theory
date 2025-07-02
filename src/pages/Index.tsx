import { useEffect } from 'react';
import ChaosHero from '@/components/ChaosHero';

const Index = () => {
  useEffect(() => {
    // Add mouse tracking for cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <ChaosHero />;
};

export default Index;
