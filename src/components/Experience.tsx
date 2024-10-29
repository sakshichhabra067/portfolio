import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: "Nangia Co & LLP",
      location: "Mumbai",
      role: "Consultant - Cyber Security",
      period: "Nov 2022 – Current",
      responsibilities: [
        "Developed and enforced ISO 27001:2022-aligned policies",
        "Conducted SOC 1 and SOC 2 audits for banks",
        "Performed vendor risk assessments",
        "Executed IS audits & security awareness programs",
      ]
    },
    {
      company: "Cova Consultancy",
      location: "Lalru Mandi, Punjab",
      role: "IELTS Instructor",
      period: "Mar 2021 - Dec 2021",
      responsibilities: [
        "Developed IELTS materials and conducted prep classes",
        "Provided detailed feedback and organized engaging activities",
      ]
    }
  ];

  return (
    <section className="py-32 bg-gray-900/50 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-fixed" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center gap-3">
          <Briefcase className="w-10 h-10" />
          Professional Journey
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2">{exp.company}</h3>
                  <p className="text-xl text-gray-300 mb-1">{exp.role}</p>
                  <p className="text-gray-500">{exp.location}</p>
                </div>
                <div className="flex items-center text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-blue-400">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}