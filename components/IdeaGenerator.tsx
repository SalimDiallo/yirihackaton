import React, { useState } from 'react';
import { Sparkles, Cpu, Loader2, RefreshCw, Bot } from 'lucide-react';
import { generateHackathonIdea } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

const IdeaGenerator: React.FC = () => {
  const [theme, setTheme] = useState('');
  const [idea, setIdea] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const themes = [
    "Smart Cities", "Green Tech", "Web3 & DeFi", "Santé IA", "EdTech", "Space Exploration"
  ];

  const handleGenerate = async () => {
    if (!theme) return;
    setLoading(true);
    const result = await generateHackathonIdea(theme);
    setIdea(result);
    setLoading(false);
  };

  return (
    <section id="ai-boost" className="py-24 relative overflow-hidden bg-black/50">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-bg opacity-20 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-16 h-16 bg-cyber-secondary/20 rounded-full flex items-center justify-center mb-6 border border-cyber-secondary/50 animate-pulse-slow">
                <Bot className="w-8 h-8 text-cyber-secondary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              LABORATOIRE <span className="text-cyber-primary">D'IDÉES IA</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm">
              Connectez-vous au noyau neural de YIRI-BOT pour générer un concept de projet révolutionnaire.
            </p>
          </div>

          <div className="glass-panel rounded-2xl border border-cyber-primary/30 shadow-[0_0_50px_rgba(112,0,223,0.15)] overflow-hidden">
             {/* Header Bar */}
             <div className="bg-black/60 border-b border-white/10 p-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs font-mono text-gray-500">root@yiri-bot:~</div>
             </div>

             <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Controls */}
                    <div className="space-y-6">
                    <label className="block text-sm font-mono text-cyber-primary font-bold mb-4">{">"} INITIALISER_PARAMETRES</label>
                    <div className="grid grid-cols-2 gap-3">
                        {themes.map((t) => (
                        <button
                            key={t}
                            onClick={() => setTheme(t)}
                            className={`p-3 text-xs font-mono border rounded transition-all duration-300 text-left relative overflow-hidden group ${
                            theme === t
                                ? 'border-cyber-secondary bg-cyber-secondary/20 text-white'
                                : 'border-white/10 text-gray-500 hover:border-cyber-secondary/50 hover:text-gray-300'
                            }`}
                        >
                            {theme === t && <div className="absolute left-0 top-0 w-1 h-full bg-cyber-secondary"></div>}
                            {t}
                        </button>
                        ))}
                    </div>

                    <button
                        onClick={handleGenerate}
                        disabled={!theme || loading}
                        className={`w-full py-4 rounded font-bold font-display tracking-wider transition-all duration-300 flex items-center justify-center gap-3 border
                        ${!theme || loading 
                            ? 'bg-gray-900 border-gray-800 text-gray-600 cursor-not-allowed' 
                            : 'bg-cyber-primary/10 border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-black shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                        }`}
                    >
                        {loading ? <Loader2 className="animate-spin w-5 h-5"/> : <Cpu className="w-5 h-5"/>}
                        {loading ? 'CALCUL EN COURS...' : 'LANCER LA GÉNÉRATION'}
                    </button>
                    </div>

                    {/* Output Console */}
                    <div className="bg-black/80 rounded-lg border border-white/10 p-6 font-mono text-sm min-h-[300px] relative">
                        {!idea && !loading && (
                            <div className="h-full flex flex-col items-center justify-center text-gray-600 gap-4">
                                <RefreshCw className="w-8 h-8 opacity-20" />
                                <p>En attente de données d'entrée...</p>
                            </div>
                        )}

                        {loading && (
                            <div className="space-y-2">
                                <div className="h-2 bg-cyber-primary/20 rounded w-3/4 animate-pulse"></div>
                                <div className="h-2 bg-cyber-primary/20 rounded w-1/2 animate-pulse delay-75"></div>
                                <div className="h-2 bg-cyber-primary/20 rounded w-5/6 animate-pulse delay-150"></div>
                            </div>
                        )}

                        {idea && (
                            <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-cyber-primary prose-strong:text-white text-sm animate-[scan_0.5s_ease-out]">
                                <div className="text-xs text-gray-500 mb-4 border-b border-white/10 pb-2">
                                   { ">" }RÉPONSE GÉNÉRÉE AVEC SUCCÈS
                                </div>
                                <ReactMarkdown>{idea}</ReactMarkdown>
                            </div>
                        )}
                        
                        {/* Scanlines overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
                    </div>
                </div>
             </div>
          </div>
        </div>
    </section>
  );
};

export default IdeaGenerator;
