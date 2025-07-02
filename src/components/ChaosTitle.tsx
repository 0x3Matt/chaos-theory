const ChaosTitle = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-20">
      <div className="relative">
        {/* Rotating circle border */}
        <div className="animate-chaos-rotate">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-primary/30 flex items-center justify-center animate-chaos-glow">
            {/* Inner glow circle */}
            <div className="w-44 h-44 md:w-60 md:h-60 rounded-full border border-chaos-glow/20 flex items-center justify-center">
              {/* Title text */}
              <div className="text-center">
                <h1 className="text-title text-xl md:text-2xl lg:text-3xl tracking-wider leading-tight">
                  CHAOS
                  <br />
                  THEORY
                </h1>
              </div>
            </div>
          </div>
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