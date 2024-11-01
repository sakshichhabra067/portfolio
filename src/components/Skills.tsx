import React from 'react';
import { Shield, Lock, Terminal, Award, Database, FileCheck } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "ISO 27001:2022",
      description: "Expert in implementing and auditing Information Security Management Systems (ISMS). Proficient in risk assessment, security controls, and compliance documentation. Experience in gap analysis and continuous improvement of security frameworks.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "SOC Audits",
      description: "Specialized in SOC 1 and SOC 2 Type assessments for financial institutions and tech companies. Skilled in evaluating control design, implementation, and operational effectiveness. Experience in documenting control objectives and testing procedures.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "GDPR Compliance",
      description: "Comprehensive understanding of GDPR requirements and implementation. Experience in data protection impact assessments, privacy policies, and compliance frameworks. Skilled in conducting data protection audits and implementing privacy controls.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Security Controls",
      description: "Expertise in IT General Control Audits covering access management, change management, and operations. Proficient in evaluating control effectiveness, identifying gaps, and recommending improvements for robust security posture.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Risk Management",
      description: "Skilled in vendor and third-party risk assessments, including security questionnaires, documentation review, and compliance verification. Experience in developing risk mitigation strategies and monitoring programs.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certifications",
      description: "Certified Information Security Consultant and Professional Forensics Analyst. ISO 27001 Lead Auditor with expertise in security frameworks and best practices. Continuous learning through platforms like Try Hack Me.",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-fixed" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Areas of Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div key={index} 
                 className="skill-card glass-card p-6 md:p-8 rounded-2xl relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
              <div className={`text-transparent bg-gradient-to-r ${skill.color} bg-clip-text mb-4 md:mb-6`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{skill.title}</h3>
              <p className="text-gray-400 text-sm md:text-base">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}