import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-white to-primary-400 bg-clip-text text-transparent leading-tight">
              Your AI Productivity <br /> Partner
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0">
              NovaAI helps students, developers, and teams automate repetitive tasks, 
              organize thoughts with AI notes, and code faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="btn-primary w-full sm:w-auto">
                Get Started
              </button>
              <button className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 glass-card p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/hero-dashboard.png" 
                alt="NovaAI Dashboard Preview" 
                className="rounded-xl w-full shadow-2xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/10 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
