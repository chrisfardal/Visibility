import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/VISIBILITY Logo Symbol copy.png" 
              alt="Visibility AS Logo" 
              className="h-8 w-8"
            />
            <span className={`font-bold text-xl transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Visibility AS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
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
                className={`transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            Få Tilbud
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
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
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Få Tilbud
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
