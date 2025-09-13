import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lars Andersen",
      business: "Andersen Bilverksted",
      rating: 5,
      text: "Chatbotten fra Visibility AS har revolusjonert måten vi håndterer kundehenvendelser på. Vi sparer 15 timer i uken og kundene får svar øyeblikkelig!",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Maria Haugen",
      business: "Haugen Frisørsalong",
      rating: 5,
      text: "Fantastisk service! Chatbotten booker timer automatisk og svarer på alle vanlige spørsmål. Kundene elsker hvor enkelt det er å komme i kontakt med oss.",
      avatar: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Erik Johansen",
      business: "Johansen Tannklinikk",
      rating: 5,
      text: "Vi så en økning på 40% i bookinger etter at vi implementerte AI chatbotten. Profesjonell løsning og utmerket kundeservice fra Visibility AS.",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hva Kundene Våre Sier
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Se hvordan norske bedrifter har transformert sin kundekommunikasjon 
            med våre AI chatbot-løsninger.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl relative hover:shadow-lg transition-shadow duration-300">
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-blue-600 mb-6" />
              
              {/* Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-8 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">50+</h3>
            <p className="text-gray-600">Fornøyde Kunder</p>
          </div>
          <div className="bg-green-50 p-8 rounde
