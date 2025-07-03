import GlitchText from './GlitchText';
import TypewriterText from './TypewriterText';

interface ContentBlockProps {
  title: string;
  content: string;
  delay?: number;
  alignment?: 'left' | 'right';
}

const ContentBlock = ({ title, content, delay = 0, alignment = 'left' }: ContentBlockProps) => {
  return (
    <div className={`relative p-3 sm:p-4 md:p-6 max-w-xs sm:max-w-sm ${
      alignment === 'right' ? 'text-right' : 'text-left'
    }`}>
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-base sm:text-lg md:text-xl font-mono font-medium tracking-wide">
          <GlitchText text={title} />
        </h2>
        
        <div className="text-chaos-text-mono text-xs sm:text-sm md:text-base leading-relaxed font-mono font-light">
          <TypewriterText 
            text={content}
            speed={30}
            delay={delay}
            showCursor={true}
          />
        </div>
      </div>

      {/* Decorative elements - responsive sizing */}
      <div className={`absolute ${alignment === 'right' ? '-left-1 sm:-left-2' : '-right-1 sm:-right-2'} top-3 sm:top-4 w-0.5 sm:w-1 h-6 sm:h-8 bg-gradient-to-b from-chaos-glow to-transparent opacity-60`} />
      <div className={`absolute ${alignment === 'right' ? '-left-0.5 sm:-left-1' : '-right-0.5 sm:-right-1'} bottom-3 sm:bottom-4 w-0.5 h-8 sm:h-12 bg-gradient-to-t from-chaos-particle to-transparent opacity-40`} />
    </div>
  );
};

export default ContentBlock;