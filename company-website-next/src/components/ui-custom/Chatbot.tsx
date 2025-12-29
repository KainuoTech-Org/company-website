"use client";

import { useState, useRef, useEffect } from 'react';
import { Send, X } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!message.trim()) return;
    const phone = '85293412653';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') sendMessage();
  };

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <div 
        className={`
          mb-4 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right border border-gray-100
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}
        `}
      >
        {/* Header */}
        <div className="bg-[#1A1A1A] p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="text-2xl animate-bounce">👋</div>
            <div>
              <h4 className="font-bold text-sm">Kainuo Innovision Tech</h4>
              <p className="text-xs text-gray-300">Typically replies within an hour</p>
            </div>
          </div>
          <button onClick={toggleChat} className="text-gray-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 bg-[#F9F7F2] h-64 overflow-y-auto">
          <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-sm text-gray-700">
            Hi there! 👋<br />Welcome to Kainuo Innovision Tech. How can we help you today?
            <div className="text-[10px] text-gray-400 mt-1 text-right">Just now</div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 bg-[#F9F7F2] rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />
          <button 
            onClick={sendMessage}
            className="w-9 h-9 bg-[#25D366] rounded-full flex items-center justify-center text-white hover:bg-[#128C7E] transition-colors shadow-sm"
          >
            <Send size={16} />
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={toggleChat}
        className={`
          w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110
          ${isOpen ? 'bg-[#1A1A1A] rotate-90' : 'bg-[#D4AF37] hover:bg-[#1A1A1A]'}
        `}
      >
        {isOpen ? (
          <X className="text-white" />
        ) : (
          <div className="relative">
             <img src="https://cdn.simpleicons.org/whatsapp/white" alt="Chat" className="w-8 h-8" />
             <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
        )}
      </button>
    </div>
  );
}
