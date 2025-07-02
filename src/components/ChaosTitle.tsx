import GlitchText from './GlitchText';

const ChaosTitle = () => {
  const text = "CHAOS THEORY";
  const letters = text.split('');

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-20">
      <div className="relative">
        {/* Rotating circular text */}
        <div className="animate-chaos-rotate">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {letters.map((letter, index) => {
              const angle = (index * 360) / letters.length;
              const radius = 140; // Distance from center
              
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `
                      translate(-50%, -50%) 
                      rotate(${angle}deg) 
                      translateY(-${radius}px)
                    `,
                    transformOrigin: 'center',
                  }}
                >
                  <span
                    className="text-title text-xl md:text-2xl lg:text-3xl tracking-wider block"
                    style={{
                      transform: `rotate(-${angle}deg)`,
                      transformOrigin: 'center',
                    }}
                  >
                    <GlitchText text={letter === ' ' ? '\u00A0' : letter} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Central glow effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-chaos-glow/20 animate-chaos-glow" />
        </div>

        {/* Floating particles around the title */}
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-chaos-glow rounded-full animate-chaos-float opacity-60" />
        <div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-chaos-particle rounded-full animate-chaos-float opacity-80" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 -left-4 w-1 h-1 bg-primary rounded-full animate-chaos-float opacity-70" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 -right-4 w-1.5 h-1.5 bg-chaos-glow rounded-full animate-chaos-float opacity-50" style={{ animationDelay: '3s' }} />
      </div>
    </div>
  );
};

export default ChaosTitle;