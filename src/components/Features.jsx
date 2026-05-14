import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="glass-card p-8 group hover:-translate-y-2">
    <div className="w-14 h-14 bg-primary-600/10 rounded-2xl flex items-center justify-center mb-6 text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
);

const Features = () => {
  const features = [
    {
      title: "AI Notes",
      description: "Automatically summarize lectures, meetings, and long documents into actionable notes and key takeaways.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: "Task Automation",
      description: "Let AI handle your schedule. Smart prioritization and automated workflows to keep your team focused on what matters.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Smart Coding Assistant",
      description: "Write better code faster with context-aware suggestions, bug detection, and automated documentation for any language.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-24 bg-dark-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to boost your productivity and streamline your workflow with advanced artificial intelligence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
