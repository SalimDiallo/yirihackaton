import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Trophy, Code2, Zap, Shield, ArrowRight, CheckCircle, BrainCircuit } from 'lucide-react';
import IdeaGenerator from '../components/IdeaGenerator';
import Mentors from './Mentors';
import Register from './Register';
import CyberRobot from '../components/CyberRobot';

const Section: React.FC<{ id: string; className?: string; children: React.ReactNode }> = ({ id, className = "", children }) => (
  <section id={id} className={`py-20 ${className}`}>
    {children}
  </section>
);

const TypewriterText: React.FC<{ text: string, delay?: number }> = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span className="typewriter">{displayText}</span>;
};

const Home: React.FC = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Layers */}
        <div className="absolute inset-0 grid-bg z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyber-secondary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyber-primary/10 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-left">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyber-primary/50 bg-cyber-primary/10 rounded-full px-4 py-1 backdrop-blur-md">
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-primary"></span>
                </span>
               <span className="text-cyber-primary font-mono text-sm font-bold tracking-wider">YIRI TECH AFRICA & ASEGUIM FÈS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 leading-tight">
              HACK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-white to-cyber-secondary neon-text glitch" data-text="CODE">CODE</span>
            </h1>
            
            <div className="h-24 md:h-16 mb-8 text-xl md:text-2xl text-gray-400 font-mono leading-relaxed">
              <span className="text-cyber-primary">{">"}</span> <TypewriterText text="Stimuler l'innovation et l'IA. 2 jours pour coder le futur." delay={500} />
            </div>
            
            <div className="flex flex-col sm:flex-row items-start gap-6">
               <a href="#register" className="group relative px-8 py-4 bg-cyber-primary/10 overflow-hidden rounded border border-cyber-primary text-cyber-primary font-bold font-mono tracking-wider hover:text-black hover:bg-cyber-primary transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)]">
                  <span className="relative z-10 flex items-center gap-2">
                    JOIN THE MISSION <ArrowRight className="w-5 h-5" />
                  </span>
               </a>
               <a href="#schedule" className="px-8 py-4 border border-white/20 text-white rounded font-mono hover:bg-white/5 hover:border-white/50 transition-all">
                  VOIR L'AGENDA
               </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm font-mono text-gray-500">
               <div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10">
                  <Calendar className="w-4 h-4 text-cyber-secondary" /> 2 JOURS
               </div>
               <div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10">
                  <MapPin className="w-4 h-4 text-cyber-secondary" /> FÈS, MAROC
               </div>
               <div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10">
                  <BrainCircuit className="w-4 h-4 text-cyber-secondary" /> THEME IA
               </div>
            </div>
          </div>

          {/* Robot Graphic */}
          <div className="hidden lg:flex justify-center items-center relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-cyber-primary/20 to-cyber-secondary/20 rounded-full blur-3xl"></div>
             <CyberRobot />
          </div>
        </div>
      </section>

      {/* ABOUT / STATS */}
      <Section id="about" className="bg-cyber-dark border-t border-white/5 relative overflow-hidden">
        <div className="absolute -right-20 top-40 w-64 h-64 bg-cyber-accent/10 rounded-full blur-[80px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
               INNOVATION & <span className="text-cyber-secondary">COLLABORATION</span>
             </h2>
             <p className="text-gray-400 text-lg leading-relaxed mb-6">
               HACK CODE vise à encourager les jeunes talents à explorer les nouvelles technologies (IA, Data, IoT).
               C'est un écosystème collaboratif entre étudiants, ingénieurs et entreprises pour co-créer des projets à fort impact.
             </p>
             <ul className="space-y-4 font-mono text-sm text-gray-300">
               <li className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-cyber-primary" /> Organisé par YIRI TECH AFRICA et ASEGUIM FÈS.
               </li>
               <li className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-cyber-primary" /> Coaching individualisé par des experts.
               </li>
               <li className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-cyber-primary" /> Opportunités de carrière et networking.
               </li>
             </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-2xl blur opacity-30"></div>
            <div className="relative bg-cyber-black p-8 rounded-2xl border border-white/10 grid grid-cols-2 gap-8">
               <div className="text-center group">
                 <div className="text-4xl font-display font-bold text-white mb-2 group-hover:text-cyber-primary transition-colors">2</div>
                 <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Jours Intenses</div>
               </div>
               <div className="text-center group">
                 <div className="text-4xl font-display font-bold text-white mb-2 group-hover:text-cyber-secondary transition-colors">IA</div>
                 <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Focus Tech</div>
               </div>
               <div className="text-center group">
                 <div className="text-4xl font-display font-bold text-white mb-2 group-hover:text-cyber-primary transition-colors">100+</div>
                 <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Talents</div>
               </div>
               <div className="text-center group">
                 <div className="text-4xl font-display font-bold text-white mb-2 group-hover:text-cyber-secondary transition-colors">Top</div>
                 <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Experts</div>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* TRACKS */}
      <Section id="tracks" className="relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">CHALLENGE <span className="text-cyber-primary">TRACKS</span></h2>
            <p className="text-gray-400 font-mono">Explorez les frontières de la technologie.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "IA & DATA", icon: <Code2 />, desc: "Machine Learning, Analyse de données et solutions intelligentes.", color: "border-cyber-primary text-cyber-primary", shadow: "hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]" },
              { title: "IOT & SMART TECH", icon: <Zap />, desc: "Objets connectés et solutions hardware innovantes.", color: "border-green-500 text-green-500", shadow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]" },
              { title: "CYBERSÉCURITÉ", icon: <Shield />, desc: "Protection des données et sécurité des systèmes.", color: "border-cyber-secondary text-cyber-secondary", shadow: "hover:shadow-[0_0_30px_rgba(112,0,223,0.3)]" }
            ].map((track, idx) => (
              <div key={idx} className={`group p-8 bg-cyber-dark border ${track.color} border-opacity-30 hover:border-opacity-100 rounded-xl transition-all duration-500 hover:-translate-y-2 ${track.shadow}`}>
                <div className={`w-12 h-12 ${track.color} bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {track.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{track.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* MENTORS SECTION */}
      <Mentors />

      {/* AI IDEA GENERATOR */}
      <IdeaGenerator />

      {/* SCHEDULE */}
      <Section id="schedule" className="bg-cyber-dark border-y border-white/5 relative">
         {/* Decorative line */}
         <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyber-primary/30 to-transparent"></div>
         
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-display font-bold">L'AGENDA</h2>
          </div>
          
          <div className="space-y-12">
             {[
               { time: "JOUR 1", title: "Formation & Workshops", desc: "Accueil, Formations intensives (IA, Web, Business Plan)", align: "left" },
               { time: "JOUR 1", title: "Team Building", desc: "Répartition des équipes et attribution des coaches dédiés", align: "right" },
               { time: "JOUR 2", title: "Compétition", desc: "Création des projets, développement et prototypage", align: "left" },
               { time: "JOUR 2", title: "Conférences", desc: "Discussions tech et échanges avec experts, entreprises partenaires", align: "right" },
               { time: "JOUR 2", title: "Jury & Prix", desc: "Évaluation (créativité, faisabilité), annonce des gagnants et remise des prix", align: "left" }
             ].map((item, idx) => (
               <div key={idx} className={`flex flex-col md:flex-row ${item.align === 'right' ? 'md:flex-row-reverse' : ''} gap-8 items-center group`}>
                 
                 {/* Time Bubble */}
                 <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                     {item.align === 'left' ? (
                        <div className="text-right pr-8 hidden md:block">
                            <h3 className="text-2xl font-display font-bold text-cyber-primary">{item.time}</h3>
                            <div className="h-0.5 w-12 bg-cyber-primary ml-auto mt-2"></div>
                        </div>
                     ) : (
                         <div className="glass-panel p-6 rounded-xl border border-white/10 group-hover:border-cyber-primary/50 transition-colors w-full relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-cyber-secondary"></div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                     )}
                 </div>

                 {/* Center Node */}
                 <div className="relative">
                    <div className="w-4 h-4 bg-cyber-black border-2 border-cyber-primary rounded-full z-10 relative group-hover:scale-150 transition-transform shadow-[0_0_10px_#00f0ff]"></div>
                 </div>

                 {/* Content Card */}
                 <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                     {item.align === 'right' ? (
                        <div className="text-left pl-8 hidden md:block">
                            <h3 className="text-2xl font-display font-bold text-cyber-primary">{item.time}</h3>
                             <div className="h-0.5 w-12 bg-cyber-primary mt-2"></div>
                        </div>
                     ) : (
                         <div className="glass-panel p-6 rounded-xl border border-white/10 group-hover:border-cyber-primary/50 transition-colors w-full relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-cyber-secondary"></div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                     )}
                 </div>
                 
                 {/* Mobile View Correction */}
                 <div className="md:hidden text-center">
                    <span className="text-cyber-primary font-bold font-mono mb-2 block">{item.time}</span>
                 </div>

               </div>
             ))}
          </div>
        </div>
      </Section>
      
      {/* REGISTER SECTION */}
      <Register />
    </>
  );
};

export default Home;
