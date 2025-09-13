import React from 'react';
import { Search, Palette, Settings, TestTube, Rocket, BarChart } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Kartlegging & Strategi",
      description: "Vi konsulterer med din bedrift for å forstå behov, kunder og kommunikasjonsutfordringer.",
      color: "bg-blue-600"
    },
    {
      icon: Palette,
      title: "Tilpasset Design",
      description: "Vi lager en chatbot skreddersydd til ditt merke og kundereise.",
      color: "bg-purple-600"
    },
    {
      icon: Settings,
      title: "Integrasjon",
      description: "Vi kobler chatbotten til din nettside, Google Business og/eller sosiale medier-kanaler.",
      color: "bg-green-600"
    },
    {
      icon: TestTube,
      title: "Testing & Kvalitetssikring",
      description: "Vi tester chatbotten grundig for å sikre at den svarer korrekt og håndterer spesialtilfeller.",
      color: "bg-orange-600"
    },
    {
      icon: Rocket,
      title: "Lansering & Støtte",
      description: "Vi lanserer chatbotten og overvåker ytelsen, justerer etter behov.",
      color: "bg-red-600"
    },
    {
      icon: BarChart,
      title: "Løpende Optimalisering",
      description: "Vi gir månedlige rapporter og kontinuerlig forbedring basert på ekte kundeinteraksjoner.",
      color: "bg-indigo-600"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vår Prosess
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vi håndterer prosessen fra ende til ende, slik at du kan fokusere på å drive din bedrift 
            mens vi lager den perfekte AI chatbotten for dine behov.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gray-300"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Step Number Circle */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center z-10">
                  <span className="text-sm font-bold text-gray-600">{index + 1}</span>
                </div>

                {/* Content */}
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className={`${step.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Mobile Step Number */}
                <div className="lg:hidden absolute top-8 left-8 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-600">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-6">
            Klar til å Komme i Gang?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            La oss hjelpe deg med å automatisere kundekommunikasjonen og vokse din bedrift med en skreddersydd AI chatbot.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Start Din Gratis Konsultasjon
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
