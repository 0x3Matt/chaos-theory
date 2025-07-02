import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (!isGlitching) {
        setIsGlitching(true);
        
        // Phase 1: Scramble text
        const scrambleSteps = 8;
        let step = 0;
        
        const scrambleInterval = setInterval(() => {
          if (step < scrambleSteps) {
            const scrambled = text
              .split('')
              .map((char, index) => {
                if (char === ' ') return ' ';
                if (Math.random() < 0.7) {
                  return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                }
                return char;
              })
              .join('');
            
            setDisplayText(scrambled);
            step++;
          } else {
            // Phase 2: Restore text gradually
            clearInterval(scrambleInterval);
            
            let restoreStep = 0;
            const restoreInterval = setInterval(() => {
              if (restoreStep < text.length) {
                const restored = text
                  .split('')
                  .map((char, index) => {
                    if (index <= restoreStep) return char;
                    if (char === ' ') return ' ';
                    if (Math.random() < 0.5) {
                      return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    }
                    return char;
                  })
                  .join('');
                
                setDisplayText(restored);
                restoreStep++;
              } else {
                clearInterval(restoreInterval);
                setDisplayText(text);
                setIsGlitching(false);
              }
            }, 50);
          }
        }, 100);
      }
    }, Math.random() * 8000 + 6000); // Random interval between 6-14 seconds

    return () => clearInterval(glitchInterval);
  }, [text, isGlitching]);

  return (
    <span className={`font-mono transition-all duration-75 ${className} ${isGlitching ? 'text-chaos-glow' : ''}`}>
      {displayText}
    </span>
  );
};

export default GlitchText;