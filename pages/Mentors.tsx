import React from 'react';
import { Linkedin, Twitter, Award, Terminal } from 'lucide-react';

const mentors = [
  { name: "Amina El Fassi", role: "Data Scientist", company: "Tech Maroc", color: "border-cyber-primary", bg: "from-cyber-primary/20" },
  { name: "Karim Benjelloun", role: "IA Expert", company: "YIRI TECH", color: "border-cyber-secondary", bg: "from-cyber-secondary/20" },
  { name: "Sofia Alami", role: "Cybersecurity Lead", company: "SecureNet", color: "border-pink-500", bg: "from-pink-500/20" },
  { name: "Youssef Idrissi", role: "IoT Architect", company: "Smart City Fès", color: "border-green-500", bg: "from-green-500/20" },
  { name: "Leila Tazi", role: "Business Coach", company: "ASEGUIM", color: "border-yellow-500", bg: "from-yellow-500/20" },
  { name: "Omar Berrada", role: "Full Stack Lead", company: "DevHouse", color: "border-blue-500", bg: "from-blue-500/20" },
];

const Mentors: React.FC = () => {
  return (
    <section id="mentors" className="py-24 relative bg-cyber-black">
       {/* Background elements */}
       <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none"></div>
       
       <div className="max-w-7xl mx-auto px-4 relative z-10">
         <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              NOS <span className="text-cyber-secondary">COACHS & EXPERTS</span>
            </h2>
            <p className="text-gray-400 font-mono max-w-2xl mx-auto">
               Une équipe d'experts mobilisée par YIRI TECH AFRICA et ses partenaires pour vous guider,
               répondre à vos questions et structurer vos projets tout au long de la compétition.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, idx) => (
                <div key={idx} className={`group relative bg-cyber-dark border border-white/10 rounded-xl overflow-hidden hover:border-opacity-50 transition-all duration-300`}>
                   {/* Holographic Header */}
                   <div className={`h-32 bg-gradient-to-b ${mentor.bg} to-transparent relative`}>
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
                      <div className="absolute top-4 right-4">
                         <Terminal className="w-6 h-6 text-white/20" />
                      </div>
                   </div>
                   
                   <div className="p-6 relative">
                      {/* Avatar Placeholder */}
                      <div className={`absolute -top-12 left-6 w-20 h-20 bg-black border-2 ${mentor.color} rounded-lg flex items-center justify-center overflow-hidden group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow`}>
                         <span className="font-display font-bold text-2xl text-white">{mentor.name.charAt(0)}</span>
                      </div>

                      <div className="mt-8">
                         <h3 className="text-xl font-bold font-display text-white">{mentor.name}</h3>
                         <p className={`text-sm font-mono mt-1 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-bold`}>
                             {mentor.role} @ {mentor.company}
                         </p>
                         
                         <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                            Expert engagé pour stimuler l'innovation technologique en Afrique et accompagner les jeunes talents.
                         </p>

                         <div className="flex gap-4 border-t border-white/5 pt-4">
                            <button className="text-gray-400 hover:text-cyber-primary transition-colors"><Twitter className="w-5 h-5" /></button>
                            <button className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></button>
                            <div className="flex-grow"></div>
                            <Award className="w-5 h-5 text-yellow-500/50" />
                         </div>
                      </div>
                   </div>
                </div>
            ))}
         </div>
       </div>
    </section>
  );
};

export default Mentors;