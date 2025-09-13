import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hei! 👋 Jeg er Visibility AS sin AI-assistent. Hvordan kan jeg hjelpe deg i dag?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses: { [key: string]: string } = {
    'hei': 'Hei! Hyggelig å møte deg! Jeg kan hjelpe deg med informasjon om våre AI chatbot-tjenester.',
    'pris': 'Våre priser varierer basert på dine behov. Kontakt oss på christian@visibilitymedia.no eller +47 472 06 606 for et skreddersydd tilbud.',
    'tjenester': 'Vi tilbyr skreddersydde AI chatbots for lokale bedrifter. Chatbotene håndterer kundespørsmål 24/7, automatiserer bookinger og øker leads.',
    'kontakt': 'Du kan kontakte oss på:\n📧 christian@visibilitymedia.no\n📞 +47 472 06 606\n🌐 www.visibilitymedia.no',
    'åpningstider': 'Vi er tilgjengelige mandag til fredag 08:00-17:00. Vår chatbot og e-post er tilgjengelig 24/7!',
    'hvordan': 'Vi starter med en gratis konsultasjon, designer en skreddersydd chatbot, integrerer den i dine systemer og gir kontinuerlig support.',
    'booking': 'Våre chatbots kan automatisere bookingprosessen ved å koble seg til ditt eksisterende booking- eller CRM-system.',
    'integrasjon': 'Vi integrerer med Google Business, nettsider, Facebook Messenger, Instagram, WhatsApp og SMS.',
    'support': 'Vi gir løpende support, månedlige rapporter og kontinuerlig optimalisering basert på kundeinteraksjoner.',
    'default': 'Takk for spørsmålet! For mer detaljert informasjon, kontakt oss på christian@visibilitymedia.no eller ring +47 472 06 606.'
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return botResponses.default;
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1500));

    const botResponse: Message = {
      id: messages.length + 2,
      text: getBotResponse(inputMessage),
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botResponse]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickReplies = [
    'Hva koster det?',
    'Hvilke tjenester tilbyr dere?',
    'Hvordan fungerer det?',
    'Kontakt informasjon'
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl transition-all duration-300 ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`} style={{ width: '380px', height: '500px' }}>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold">Visibility AI</h3>
              <p className="text-sm text-blue-100">Online nå</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                message.isBot
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-blue-600 text-white'
              }`}>
                <div className="flex items-start space-x-2">
                  {message.isBot && (
                    <Bot className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                  )}
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  {!message.isBot && (
                    <User className="w-4 h-4 mt-1 text-blue-100 flex-shrink-0" />
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                <div className="flex items-center space-x-2">
                  <Bot className="w-4 h-4 text-blue-600" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {messages.length === 1 && (
          <div className="px-4 py-2 border-t">
            <p className="text-xs text-gray-500 mb-2">Hurtigspørsmål:</p>
            <div className="flex flex-wrap gap-1">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(reply)}
                  className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Skriv din melding..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={isTyping || inputMessage.trim() === ''}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
