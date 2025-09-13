import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Om Visibility AS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vi er et norsk teknologi- og markedsføringsselskap dedikert til å hjelpe 
            lokale bedrifter med å øke synlighet og vokse gjennom smart teknologi.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Hvem Er Vi</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Visibility AS hjelper små og mellomstore bedrifter med å vokse ved å automatisere                     kundedialog og service gjennom AI-chatbots. Vi gjør avansert teknologi enkelt,                        tilgjengelig og lønnsomt – slik at lokale virksomheter kan fokusere på det de er best                 på: å drive sin egen bedrift.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Selv om vi er et ungt selskap, kombinerer vi vår erfaring innen markedsføring, 
              teknologi og bedriftsutvikling for å levere løsninger som er både praktiske 
              og fremtidsrettede.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Users className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Lokal Tilstedeværelse</h4>
                <p className="text-gray-600 text-sm">Basert i Norge med dyp forståelse av norske SMB-er</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Target className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Målrettede Løsninger</h4>
                <p className="text-gray-600 text-sm">Skreddersydde chatbots tilpasset din bedrifts mål</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Vårt Oppdrag</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Vårt oppdrag er å styrke lokale bedrifter i Norge og utover til å utnytte 
              teknologi – med start på AI chatbots – for å forbedre kundekommunikasjon, 
              redusere manuelt arbeid og skape flere muligheter for vekst.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Vi tror at enhver bedrift, uavhengig av størrelse, bør ha tilgang til 
              smarte og rimelige digitale løsninger.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Våre Verdier</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Enkelhet</h4>
              <p className="text-gray-600">
                Teknologi skal være enkel, rimelig og gi målerbar avkastning på investering.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Innovasjon</h4>
              <p className="text-gray-600">
                Vi leverer praktiske og fremtidsrettede løsninger som bringer målbare resultater.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Partnerskap</h4>
              <p className="text-gray-600">
                Vi bygger ikke bare chatbots – vi bygger partnerskap som varer over tid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
