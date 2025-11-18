import React from 'react';
import { Calendar, MapPin, Trophy, Code2, Zap, Shield, ArrowRight, CheckCircle, BrainCircuit } from 'lucide-react';
import Mentors from './Mentors';
import Register from './Register';

const Section: React.FC<{ id: string; className?: string; children: React.ReactNode }> = ({ id, className = "", children }) => (
  <section id={id} className={`py-20 ${className}`}>
    {children}
  </section>
);

const Home: React.FC = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 grid-bg z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6 inline-block border border-cyber-primary/50 bg-cyber-primary/10 rounded-full px-4 py-1 backdrop-blur-md">
             <span className="text-cyber-primary font-mono text-sm font-bold tracking-wider animate-pulse">● ORGANISÉ PAR YIRI TECH AFRICA & ASEGUIM FÈS</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black mb-6 leading-tight">
            HACK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary via-white to-cyber-secondary neon-text glitch" data-text="CODE">CODE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-mono">
            Stimuler l'innovation et l'IA. 2 jours pour créer le futur technologique de l'Afrique.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <a href="#register" className="group relative px-8 py-4 bg-transparent overflow-hidden rounded border border-cyber-primary text-cyber-primary font-bold font-mono tracking-wider hover:text-black transition-colors duration-300">
                <span className="absolute inset-0 w-full h-full bg-cyber-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 flex items-center gap-2">
                  S'INSCRIRE MAINTENANT <ArrowRight className="w-5 h-5" />
                </span>
             </a>
             <a href="#about" className="px-8 py-4 border border-white/20 text-white rounded font-mono hover:bg-white/5 transition-all">
                EN SAVOIR PLUS
             </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 md:gap-16 text-gray-400 font-mono text-sm md:text-base border-t border-white/10 pt-8 mx-auto max-w-2xl">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyber-primary" />
              <span>2 JOURS</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyber-primary" />
              <span>FÈS, MAROC</span>
            </div>
            <div className="flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-cyber-primary" />
              <span>IA & TECH</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / STATS */}
      <Section id="about" className="bg-cyber-dark border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
               <div className="text-center">
                 <div className="text-4xl font-display font-bold text-white mb-2">2</div>
                 <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Jours Intenses</div>
               </div>
               <div className="text-center">
                 <div className="text-4xl font-display font-bold text-white mb-2">IA</div>
                 <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Focus Tech</div>
               </div>
               <div className="text-center">
                 <div className="text-4xl font-display font-bold text-white mb-2">100+</div>
                 <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Talents</div>
               </div>
               <div className="text-center">
                 <div className="text-4xl font-display font-bold text-white mb-2">Prix</div>
                 <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Tech & Goodies</div>
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
              { title: "IA & DATA", icon: <Code2 />, desc: "Machine Learning, Analyse de données et solutions intelligentes.", color: "border-cyber-primary text-cyber-primary" },
              { title: "IOT & SMART TECH", icon: <Zap />, desc: "Objets connectés et solutions hardware innovantes.", color: "border-green-500 text-green-500" },
              { title: "CYBERSÉCURITÉ", icon: <Shield />, desc: "Protection des données et sécurité des systèmes.", color: "border-cyber-secondary text-cyber-secondary" }
            ].map((track, idx) => (
              <div key={idx} className={`group p-8 bg-cyber-dark border ${track.color} border-opacity-30 hover:border-opacity-100 rounded-xl transition-all duration-500 hover:-translate-y-2`}>
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

  

      {/* SCHEDULE */}
      <Section id="schedule" className="bg-cyber-dark border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-display font-bold">L'AGENDA</h2>
          </div>
          
          <div className="space-y-8">
             {[
               { time: "JOUR 1", title: "Formation & Workshops", desc: "Accueil, Formations intensives (IA, Web, Business Plan)" },
               { time: "JOUR 1", title: "Team Building", desc: "Répartition des équipes et attribution des coaches dédiés" },
               { time: "JOUR 2", title: "Compétition", desc: "Création des projets, développement et prototypage" },
               { time: "JOUR 2", title: "Conférences", desc: "Discussions tech et échanges avec entreprises partenaires" },
               { time: "JOUR 2", title: "Jury & Prix", desc: "Évaluation (créativité, faisabilité), annonce des gagnants et remise des prix" }
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col md:flex-row gap-6 md:items-center group">
                 <div className="w-48 shrink-0">
                   <div className="font-mono text-cyber-primary font-bold border-l-2 border-cyber-primary pl-4">{item.time}</div>
                 </div>
                 <div className="flex-grow p-6 glass-panel rounded border border-white/5 group-hover:border-cyber-primary/50 transition-colors">
                   <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                   <p className="text-gray-400 text-sm">{item.desc}</p>
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