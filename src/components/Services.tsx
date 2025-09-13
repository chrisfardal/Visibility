import React from 'react';
import { MessageSquare, Clock, TrendingUp, Users, Smartphone, BarChart3 } from 'lucide-react';

const Services = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Kundehåndtering",
      description: "Automatiserer svar på ofte stilte spørsmål som åpningstider, priser og bestillingsinformasjon."
    },
    {
      icon: TrendingUp,
      title: "Strømlinjeformede Bookinger",
      description: "Kobler direkte til eksisterende booking- eller CRM-systemer for sømløs timeplanlegging."
    },
    {
      icon: Users,
      title: "Økt Leadfangst",
      description: "Samler og kvalifiserer leads automatisk fra nettside, sosiale medier eller betalte annonser."
    },
    {
      icon: MessageSquare,
      title: "Forbedret Kundeopplevelse",
      description: "Leverer øyeblikkelige, nøyaktige svar som reflekterer din bedrifts merke og tone."
    },
    {
      icon: Smartphone,
      title: "Sømløs Integrasjon",
      description: "Fungerer med Google Business, nettsider, Facebook Messenger, Instagram, WhatsApp og SMS."
    },
    {
      icon: BarChart3,
      title: "Kontinuerlig Optimalisering",
      description: "Månedlige rapporter og kontinuerlig forbedring basert på ekte kundeinteraksjoner."
    }
  ];

  const industries = [
    "Frisørsalonger og skjønnhetsklinikker",
    "Bilverksteder og bilpleie",
    "Helse- og velvære-profesjonelle",
    "Tannleger og kiropraktorer",
    "Personlige trenere og treningssentre",
    "Andre små og mellomstore bedrifter"
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Chatbots for Bedrifter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Våre skreddersydde AI chatbots er designet for å automatisere kundekommunikasjon 
            og drive vekst for din bedrift.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Hvem Vi Betjener</h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Visibility AS jobber primært med lokale tjenestebedrifter i Norge 
                som ønsker å modernisere sin kundekommunikasjon.
              </p>
              
              <div className="space-y-3">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    <span className="text-blue-100">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-6">Hvorfor Velge Oss?</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold mb-1">Ferdig Implementering</h5>
                    <p className="text-blue-100 text-sm">Vi håndterer hele den tekniske siden for deg.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold mb-1">Målbare Resultater</h5>
                    <p className="text-blue-100 text-sm">Fokus på raskere respons, flere leads og høyere kundetilfredshet.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold mb-1">Kontinuerlig Støtte</h5>
                    <p className="text-blue-100 text-sm">Løpende support og oppdateringer – ikke bare engangsinstallasjon.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
