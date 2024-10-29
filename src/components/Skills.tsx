import React from 'react';
import { Shield, Lock, Terminal, Award, Database, FileCheck } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "ISO 27001:2022",
      description: "Audit and Implementation expertise",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "SOC Audits",
      description: "SOC 1 and SOC 2 Type assessments",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "GDPR Compliance",
      description: "Data protection and regulation compliance",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Security Controls",
      description: "IT General Control Audits",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Risk Management",
      description: "Vendor and Third-Party Risk Assessment",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certifications",
      description: "Professional Forensics Analyst & ISO 27001 LA",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-fixed" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Areas of Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} 
                 className="skill-card glass-card p-8 rounded-2xl relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
              <div className={`text-transparent bg-gradient-to-r ${skill.color} bg-clip-text mb-6`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}