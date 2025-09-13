import React from 'react';
import { ArrowRight, Bot, Clock, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8">
            <Bot className="w-5 h-5 text-blue-300 mr-2" />
            <span className="text-white text-sm font-medium">AI-drevet kundekommunikasjon</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Smarte AI Chatbots
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              for Lokale Bedrifter
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Automatiser kundekommunikasjon, øk konverteringer og voks din bedrift 24/7 
            med skreddersydde AI chatbots fra Visibility AS.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center group"
            >
              Få Gratis Konsultasjon
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Se Våre Tjenester
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
              <Clock className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
              <p className="text-blue-100">Kundeservice døgnet rundt</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white mb-2">90%</h3>
              <p className="text-blue-100">Økning i kundeengasjement</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
              <Bot className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white mb-2">3 sek</h3>
              <p className="text-blue-100">Gjennomsnittlig responstid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
