const ChaosTitle = () => {
  const text = "CHAOS THEORY";
  const letters = text.split('');

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-20">
      <div className="relative">
        {/* Rotating circular text */}
        <div className="animate-chaos-rotate">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {letters.map((letter, index) => {
              const angle = (index * 360) / letters.length;
              const radius = 120; // Distance from center
              
              return (
                <span
                  key={index}
                  className="absolute text-title text-lg md:text-xl lg:text-2xl tracking-widest"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `
                      translate(-50%, -50%) 
                      rotate(${angle}deg) 
                      translateY(-${radius}px) 
                      rotate(-${angle}deg)
                    `,
                    transformOrigin: 'center',
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
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