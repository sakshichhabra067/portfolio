import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: "ControlCase International Pvt Ltd",
      location: "Mumbai",
      role: "Consultant - Cyber Security",
      period: "April 2025 – Current",
      responsibilities: [
        "Leading the development and implementation of ISO 27001:2022-aligned policies and procedures, ensuring comprehensive security framework adoption",
        "Conducting gap analyses and risk assessments aligned with standards like ISO 27001/22301",
        "Developed ISO 22301 & ISO 27001 report templates aligned with CERT-IN and industry best practices",
        "Created NESA compliance matrix to map and track regulatory requirements",
        "Lead preparation efforts and represent the organization during external ISO certification audits",
        "Perform comprehensive risk assessments and give Information Security approvals to facilitate secure vendor onboarding and offboarding processes"
      ]
    },
    {
      company: "Nangia Co & LLP",
      location: "Mumbai",
      role: "Consultant - Cyber Security",
      period: "Nov 2022 – March 2025",
      responsibilities: [
        "Led the development and implementation of ISO 27001:2022-aligned policies and procedures, ensuring comprehensive security framework adoption",
        "Conducted in-depth SOC 1 and SOC 2 audits for banking and product-based companies, evaluating control effectiveness and compliance",
        "Performed thorough vendor risk assessments and audits, implementing robust third-party risk management programs",
        "Executed comprehensive IS audits and spearheaded Vishing/Phishing awareness campaigns to enhance security culture",
        "Developed and delivered engaging security awareness training programs, improving organizational security posture",
        "Conducted detailed IT General Controls reviews, ensuring alignment with industry best practices",
        "Prepared comprehensive audit reports and compliance reviews, providing actionable recommendations",
        "Implemented and maintained internal audit procedures for ISO 27001:2022 compliance",
        "Reviewed and enhanced security policies based on emerging threats and compliance requirements"
      ]
    },
    {
      company: "Cova Consultancy",
      location: "Lalru Mandi, Punjab",
      role: "IELTS Instructor",
      period: "Mar 2021 - Dec 2021",
      responsibilities: [
        "Created comprehensive IELTS preparation materials tailored to diverse student needs",
        "Conducted engaging preparation classes focusing on all four IELTS modules",
        "Provided detailed, constructive feedback to help students improve their performance",
        "Organized interactive activities to enhance learning and retention",
        "Developed effective exam strategies to maximize student success rates"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-gray-900/50 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-fixed" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center gap-3">
          <Briefcase className="w-8 h-8 md:w-10 md:h-10" />
          Professional Journey
        </h2>
        
        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card p-6 md:p-8 rounded-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">{exp.company}</h3>
                  <p className="text-lg md:text-xl text-gray-300 mb-1">{exp.role}</p>
                  <p className="text-gray-500">{exp.location}</p>
                </div>
                <div className="flex items-center text-gray-400 bg-gray-800/50 px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                    <span className="text-blue-400 mt-1">•</span>
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