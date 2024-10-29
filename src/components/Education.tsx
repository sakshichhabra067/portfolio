import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const certifications = [
    {
      title: "Information Security Consultant & Professional Forensics Analyst",
      org: "Institute of Information Security",
      description: "Comprehensive training in security consulting and digital forensics investigation techniques"
    },
    {
      title: "Pre-Security, Web fundamentals & Jr Penetration Tester",
      org: "Try Hack Me",
      description: "Hands-on experience with web security, penetration testing, and vulnerability assessment"
    },
    {
      title: "ISO 27001:2022 Lead Auditor",
      org: "Professional Certification",
      description: "Qualified to lead ISO 27001:2022 audits and assess ISMS implementation"
    }
  ];

  return (
    <section className="py-16 sm:py-32 bg-gray-900/80 relative px-4">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-fixed" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-16">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-12 text-center md:text-left flex items-center gap-2 sm:gap-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 justify-center md:justify-start">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              Education
            </h2>
            <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400 mb-3 sm:mb-4">Bachelor of Science in Information Technology</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-2">with Mathematics, Statistics</p>
              <p className="text-sm sm:text-base text-gray-500">Panjab University, Chandigarh</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-12 text-center md:text-left flex items-center gap-2 sm:gap-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 justify-center md:justify-start">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              Certifications
            </h2>
            <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
              <ul className="space-y-6 sm:space-y-8">
                {certifications.map((cert, index) => (
                  <li key={index} className="group">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-200 mb-1">{cert.title}</h3>
                        <p className="text-blue-400 text-xs sm:text-sm mb-1 sm:mb-2">{cert.org}</p>
                        <p className="text-gray-400 text-xs sm:text-sm">{cert.description}</p>
                      </div>
                    </div>
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