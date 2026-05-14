import React from 'react';

const PricingCard = ({ title, price, features, isPopular }) => (
  <div className={`glass-card p-8 flex flex-col ${isPopular ? 'border-primary-500 bg-primary-900/10 scale-105 z-10 shadow-2xl shadow-primary-600/20' : ''}`}>
    {isPopular && (
      <span className="bg-primary-600 text-white text-xs font-bold px-4 py-1 rounded-full w-max mb-6 self-center">
        MOST POPULAR
      </span>
    )}
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold">${price}</span>
      <span className="text-gray-500">/month</span>
    </div>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center text-gray-300">
          <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${isPopular ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg' : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'}`}>
      Choose {title}
    </button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: "Free",
      price: "0",
      features: [
        "Basic AI Note Summarization",
        "5 Task Automations / month",
        "Community Support",
        "Standard Speed"
      ],
      isPopular: false
    },
    {
      title: "Pro",
      price: "19",
      features: [
        "Advanced AI Analysis",
        "Unlimited Task Automations",
        "Coding Assistant (Beta)",
        "Priority 24/7 Support",
        "100GB Cloud Storage"
      ],
      isPopular: true
    },
    {
      title: "Team",
      price: "49",
      features: [
        "Everything in Pro",
        "Collaborative Workspaces",
        "Team Analytics Dashboard",
        "Custom AI Models",
        "SSO & Advanced Security"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-dark-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
