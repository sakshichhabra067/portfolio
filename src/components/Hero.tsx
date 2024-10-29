import React from 'react';
import { Shield, ExternalLink, MapPin, Mail, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative gradient-bg min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-float mb-6 md:mb-8">
            <Shield className="w-16 h-16 md:w-20 md:h-20 text-blue-400" />
          </div>

          <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Sakshi Chhabra
            </h1>

            <h2 className="text-2xl md:text-3xl text-blue-300 font-light">
              Cyber Security Professional
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed px-4 md:px-0">
              Specialized in ISO 27001:2022, SOC audits, and enterprise security compliance. 
              Protecting digital assets through robust security frameworks and risk management.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                Mumbai, India
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/sakshichhabra067/"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sakshichhabra067@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <a
                href="mailto:sakshichhabra067@gmail.com"
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-blue-600 rounded-full overflow-hidden text-sm md:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 transition-transform group-hover:translate-x-full" />
                <span className="relative flex items-center gap-2">
                  Contact Me
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </header>
  );
}