import React from 'react';

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-700 to-indigo-800 p-12 lg:p-24 text-center">
          {/* Decorative patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 border-8 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 border-8 border-white rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8">
              Ready to supercharge <br /> your productivity?
            </h2>
            <p className="text-xl text-primary-100 mb-12">
              Join 50,000+ people using NovaAI to work smarter and faster.
              Start your 14-day free trial today.
            </p>
            <button className="bg-white text-primary-700 hover:bg-primary-50 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <p className="mt-6 text-primary-200 text-sm">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
