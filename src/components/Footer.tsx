import React from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/VISIBILITY Logo Symbol copy.png" 
                alt="Visibility AS Logo" 
                className="h-8 w-8"
              />
              <span className="font-bold text-2xl">Visibility AS</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Norsk teknologi- og markedsføringsselskap som hjelper lokale bedrifter 
              med å øke synlighet og vokse gjennom smarte AI chatbot-løsninger.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Hurtiglenker</h3>
            <div className="space-y-3">
              {[
                { name: 'Hjem', id: 'hero' },
                { name: 'Om Oss', id: 'about' },
                { name: 'Tjenester', id: 'services' },
                { name: 'Prosess', id: 'process' },
                { name: 'Kontakt', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <a href="mailto:christian@visibilitymedia.no" className="text-gray-300 hover:text-white transition-colors">
                  christian@visibilitymedia.no
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <a href="tel:+4747206606" className="text-gray-300 hover:text-white transition-colors">
                  +47 472 06 606
                </a>
              </div>
              <div className="text-gray-300">
                <p>www.visibilitymedia.no</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Visibility AS. Alle rettigheter forbeholdt.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Personvern
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Vilkår
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
