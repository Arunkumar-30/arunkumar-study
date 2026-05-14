import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/30">
            <span className="text-2xl font-bold text-white">N</span>
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">NovaAI</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
          <a href="#reviews" className="text-gray-400 hover:text-white transition-colors">Reviews</a>
        </div>

        <div>
          <button className="btn-primary py-2 px-6 text-sm">
            Start Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
