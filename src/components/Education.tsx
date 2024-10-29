import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const certifications = [
    "Information Security Consultant & Professional Forensics Analyst — Institute of Information Security",
    "Pre-Security, Web fundamentals & Jr Penetration Tester — Try Hack Me",
    "ISO 27001:2022 LA"
  ];

  return (
    <section className="py-32 bg-gray-900/80 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-fixed" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              <GraduationCap className="w-10 h-10" />
              Education
            </h2>
            <div className="glass-card p-8 rounded-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Bachelor of Science in Information Technology</h3>
              <p className="text-xl text-gray-300 mb-2">with Mathematics, Statistics</p>
              <p className="text-gray-500">Panjab University, Chandigarh</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              <Award className="w-10 h-10" />
              Certifications
            </h2>
            <div className="glass-card p-8 rounded-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
              <ul className="space-y-6">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <Award className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}