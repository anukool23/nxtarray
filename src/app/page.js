import WhatWeOffer from "./WhatWeOffer/page";
import WhyUs from "./Whyus/page";

import ServicesSection from "./ServicesSection/page";

export default function Home() {
  return (
    <main className="relative">

      {/* 🔹 Hero Video Section */}
      <section className="relative h-screen w-full">
        <video
          src="/HeroBanner-New.mp4" // Make sure to place the video in public/videos/
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* 📝 Text on Top of Video */}
        <div className="relative z-10 flex flex-col justify-center h-full px-16 text-white w-1/2">
          <h3 className="text-2xl font-bold">Enabling Digital Transformation, accelerated through AI</h3>
          <h4 className="text-2xl font-bold text-blue-400">Accelerate your AI/ML journey through our Products Catalyst Forge that would help you
            achieve ML Lifecycle Automation and Privilance your own Private and secure GenAI Stack in no time</h4>
          <a href="/contact" className="mt-4 underline text-lg">
            Connect with us to Accelerate Outcomes with AI
          </a>

        </div>
      </section>
      <ServicesSection />
      <WhyUs />
      {/* <WhatWeOffer /> */}
     
    </main>
  );
}
