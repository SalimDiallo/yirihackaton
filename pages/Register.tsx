import React, { useState } from 'react';
import { ArrowRight, User, Mail, Github, Layers, Terminal, Users } from 'lucide-react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    track: '',
    team: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 1500);
  };

  return (
    <section id="register" className="py-24 relative bg-cyber-black overflow-hidden border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyber-secondary/5 skew-x-12 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-primary/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {submitted ? (
           <div className="glass-panel p-8 w-full text-center border border-green-500/30 rounded-xl relative z-10 animate-[float_4s_ease-in-out_infinite]">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Terminal className="w-10 h-10 text-green-400" />
                </div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">ACCÈS AUTORISÉ</h2>
                <p className="text-gray-400 font-mono mb-6">
                    Bienvenue dans HACK CODE, {formData.name}.<br/>
                    Votre dossier a été encrypté et envoyé au QG de YIRI TECH.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-cyber-primary font-mono hover:underline">
                    ENREGISTRER UN AUTRE MEMBRE
                </button>
            </div>
        ) : (
            <>
                <div className="mb-12 text-center">
                   <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                     REJOINDRE <span className="text-cyber-primary">HACK CODE</span>
                   </h2>
                   <p className="text-gray-400 font-mono">Initialisation du protocole d'inscription...</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Left Panel - Info */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="glass-panel p-6 rounded-xl border-l-4 border-cyber-primary">
                            <h3 className="text-lg font-bold font-display text-white mb-2">PRÉREQUIS</h3>
                            <ul className="text-sm text-gray-400 font-mono space-y-2">
                                <li>{">"} Passion pour l'IA</li>
                                <li>{">"} Laptop personnel</li>
                                <li>{">"} Esprit d'innovation</li>
                            </ul>
                        </div>
                        <div className="glass-panel p-6 rounded-xl border-l-4 border-cyber-secondary">
                            <h3 className="text-lg font-bold font-display text-white mb-2">LIEU</h3>
                            <p className="text-sm text-gray-400 font-mono">
                                Fès, Maroc<br/>
                                ASEGUIM FÈS
                            </p>
                        </div>
                    </div>

                    {/* Right Panel - Form */}
                    <div className="md:col-span-3">
                        <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl border border-white/10 shadow-2xl">
                            <div className="space-y-6">
                                <div className="group">
                                    <label className="block text-xs font-mono text-cyber-primary mb-2 uppercase tracking-wider">Nom Complet</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-500 group-focus-within:text-cyber-primary transition-colors" />
                                        <input 
                                            required
                                            type="text" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-cyber-dark/80 border border-white/10 rounded p-3 pl-10 text-white font-mono focus:outline-none focus:border-cyber-primary transition-colors"
                                            placeholder="Votre nom"
                                        />
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-xs font-mono text-cyber-primary mb-2 uppercase tracking-wider">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500 group-focus-within:text-cyber-primary transition-colors" />
                                        <input 
                                            required
                                            type="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-cyber-dark/80 border border-white/10 rounded p-3 pl-10 text-white font-mono focus:outline-none focus:border-cyber-primary transition-colors"
                                            placeholder="email@exemple.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                     <div className="group">
                                        <label className="block text-xs font-mono text-cyber-primary mb-2 uppercase tracking-wider">Github / Portfolio</label>
                                        <div className="relative">
                                            <Github className="absolute left-3 top-3 w-5 h-5 text-gray-500 group-focus-within:text-cyber-primary transition-colors" />
                                            <input 
                                                type="text" 
                                                name="github"
                                                value={formData.github}
                                                onChange={handleChange}
                                                className="w-full bg-cyber-dark/80 border border-white/10 rounded p-3 pl-10 text-white font-mono focus:outline-none focus:border-cyber-primary transition-colors"
                                                placeholder="@username"
                                            />
                                        </div>
                                    </div>
                                    
                                     <div className="group">
                                        <label className="block text-xs font-mono text-cyber-primary mb-2 uppercase tracking-wider">Équipe</label>
                                        <div className="relative">
                                            <Users className="absolute left-3 top-3 w-5 h-5 text-gray-500 group-focus-within:text-cyber-primary transition-colors" />
                                            <input 
                                                type="text" 
                                                name="team"
                                                value={formData.team}
                                                onChange={handleChange}
                                                className="w-full bg-cyber-dark/80 border border-white/10 rounded p-3 pl-10 text-white font-mono focus:outline-none focus:border-cyber-primary transition-colors"
                                                placeholder="Solo ou Nom Équipe"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-xs font-mono text-cyber-primary mb-2 uppercase tracking-wider">Track Préférée</label>
                                    <div className="relative">
                                        <Layers className="absolute left-3 top-3 w-5 h-5 text-gray-500 group-focus-within:text-cyber-primary transition-colors" />
                                        <select 
                                            name="track"
                                            value={formData.track}
                                            onChange={handleChange}
                                            className="w-full bg-cyber-dark/80 border border-white/10 rounded p-3 pl-10 text-white font-mono focus:outline-none focus:border-cyber-primary transition-colors appearance-none"
                                        >
                                            <option value="">Choisir une track...</option>
                                            <option value="ai">IA & Data</option>
                                            <option value="iot">IoT & Smart Tech</option>
                                            <option value="cyber">Cybersécurité</option>
                                        </select>
                                    </div>
                                </div>

                                <button type="submit" className="w-full mt-4 bg-cyber-primary text-cyber-black font-bold font-mono px-6 py-4 rounded hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all duration-300 clip-path-slant flex items-center justify-center gap-2">
                                    CONFIRMER L'INSCRIPTION <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )}
      </div>
    </section>
  );
};

export default Register;