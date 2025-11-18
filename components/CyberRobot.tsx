import React from 'react';

const CyberRobot: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] ${className}`}>
      {/* Floating Animation Container */}
      <div className="w-full h-full animate-float relative flex items-center justify-center">
        
        {/* HUD Rings (Spinning background) */}
        <div className="absolute inset-0 border border-cyber-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute inset-4 border border-dashed border-cyber-secondary/30 rounded-full animate-[spin_15s_linear_reverse_infinite]"></div>
        
        {/* Robot Head Body */}
        <div className="relative z-10 w-48 h-40 bg-cyber-dark border-2 border-cyber-primary rounded-2xl shadow-[0_0_30px_rgba(0,240,255,0.3)] overflow-hidden backdrop-blur-md">
            {/* Glass Reflection */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
            
            {/* Face Screen */}
            <div className="absolute inset-2 bg-black rounded-xl border border-cyber-primary/30 flex items-center justify-center gap-6 overflow-hidden">
                
                {/* Scan Line */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyber-primary/10 to-transparent animate-scan pointer-events-none"></div>

                {/* Left Eye */}
                <div className="w-8 h-10 bg-cyber-primary rounded-full shadow-[0_0_15px_#00f0ff] animate-blink relative">
                    <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-80"></div>
                </div>
                
                {/* Right Eye */}
                <div className="w-8 h-10 bg-cyber-primary rounded-full shadow-[0_0_15px_#00f0ff] animate-blink relative">
                    <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-80"></div>
                </div>

                {/* Mouth (Audio wave) */}
                <div className="absolute bottom-4 flex gap-1 items-end h-4">
                    <div className="w-1 bg-cyber-secondary animate-[pulse_0.5s_infinite] h-2"></div>
                    <div className="w-1 bg-cyber-secondary animate-[pulse_0.7s_infinite] h-3"></div>
                    <div className="w-1 bg-cyber-secondary animate-[pulse_0.4s_infinite] h-4"></div>
                    <div className="w-1 bg-cyber-secondary animate-[pulse_0.6s_infinite] h-3"></div>
                    <div className="w-1 bg-cyber-secondary animate-[pulse_0.5s_infinite] h-2"></div>
                </div>
            </div>
        </div>

        {/* Ears / Antenna */}
        <div className="absolute w-60 h-2 top-[88px] bg-cyber-dark border border-cyber-primary/50 -z-10 rounded-full"></div>
        <div className="absolute -left-4 top-[80px] w-4 h-12 bg-cyber-secondary rounded border border-cyber-primary shadow-[0_0_10px_#7000df]"></div>
        <div className="absolute -right-4 top-[80px] w-4 h-12 bg-cyber-secondary rounded border border-cyber-primary shadow-[0_0_10px_#7000df]"></div>

        {/* Top Antenna */}
        <div className="absolute -top-8 w-1 h-12 bg-cyber-primary/50"></div>
        <div className="absolute -top-10 w-4 h-4 bg-cyber-accent rounded-full shadow-[0_0_15px_#ff003c] animate-pulse"></div>

        {/* Chat Bubble */}
        <div className="absolute -top-10 -right-10 bg-white text-black font-bold font-mono text-xs px-3 py-2 rounded-t-xl rounded-br-xl animate-bounce shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            JE SUIS YIRI-BOT !
        </div>
      </div>
    </div>
  );
};

export default CyberRobot;
