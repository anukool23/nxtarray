"use client";
import CoreValues from "../corevalues/page";
export default function WhyUs() {
  const cardData = [
    {
      title: "Customer-Centric Approach",
      description:
        "We provide a personalised approach, consistent communication, and the ability to adapt to changing needs.",
      icon: "🤝",
    },
    {
      title: "Industry Expertise",
      description:
        "We anticipate challenges and seize opportunities with deep knowledge of market trends, enabling unique solutions.",
      icon: "🏭",
    },
    {
      title: "Strong Values",
      description:
        "We are committed to ethical practices and social responsibility in everything we do.",
      icon: "🌱",
    },
    {
      title: "Competitive Pricing",
      description:
        "We offer the best balance between high-quality delivery and cost-effectiveness.",
      icon: "💰",
    },
  ];

  return (<>
   <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold tracking-tight">Why Us</h2>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-20">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl
                       hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
      
    </section>
      <CoreValues /></>
   
  );
}
