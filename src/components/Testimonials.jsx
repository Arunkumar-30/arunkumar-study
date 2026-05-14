import React from 'react';

const TestimonialCard = ({ name, role, review, avatar }) => (
  <div className="glass-card p-8 hover:bg-white/10 transition-colors duration-300">
    <div className="flex items-center mb-6">
      <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
        {name[0]}
      </div>
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
    <p className="text-gray-300 italic">"{review}"</p>
    <div className="mt-6 flex text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  const reviews = [
    {
      name: "Alex Johnson",
      role: "Full Stack Developer",
      review: "NovaAI's coding assistant is a game changer. It understands my context perfectly and has saved me hours of debugging every week."
    },
    {
      name: "Sarah Chen",
      role: "Stanford University Student",
      review: "The AI Notes feature is incredible. I just upload my lecture recordings and get a perfect set of structured notes instantly."
    },
    {
      name: "Mark Thompson",
      role: "Project Manager at TechFlow",
      review: "Managing our team's tasks has never been easier. NovaAI automates the boring stuff so we can focus on building products."
    }
  ];

  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-600/10 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their productivity with NovaAI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <TestimonialCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
