import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
}

const TypewriterText = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = '',
  showCursor = true 
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [showBlinkingCursor, setShowBlinkingCursor] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          if (showCursor) {
            setShowBlinkingCursor(true);
          }
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay, showCursor]);

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
      {showCursor && (
        <span className={`${showBlinkingCursor ? 'animate-chaos-blink' : ''} text-chaos-glow`}>
          |
        </span>
      )}
    </span>
  );
};

export default TypewriterText;