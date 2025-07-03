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
    <div className={`relative p-6 max-w-sm ${
      alignment === 'right' ? 'text-right' : 'text-left'
    }`}>
      <div className="space-y-4">
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-mono font-medium tracking-wide">
          <GlitchText text={title} />
        </h2>
        
        <div className="text-chaos-text-mono text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed font-mono font-light">
          <TypewriterText 
            text={content}
            speed={30}
            delay={delay}
            showCursor={true}
          />
        </div>
      </div>

      {/* Decorative elements */}
      <div className={`absolute ${alignment === 'right' ? '-left-2' : '-right-2'} top-4 w-1 h-8 bg-gradient-to-b from-chaos-glow to-transparent opacity-60`} />
      <div className={`absolute ${alignment === 'right' ? '-left-1' : '-right-1'} bottom-4 w-0.5 h-12 bg-gradient-to-t from-chaos-particle to-transparent opacity-40`} />
    </div>
  );
};

export default ContentBlock;