import ServicesSection from "./services/page";
import WhyUs from './whyus/page';
import ProductsPage from './products/page';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      
      {/* 🔹 Hero Video Section */}
      <section className="relative h-[80vh] md:h-screen w-full">
        <video
          src="/HeroBanner-New.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 text-white max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Enabling Digital Transformation, accelerated through AI
          </h1>
          <p className="mt-3 text-base md:text-lg text-blue-200">
            {/* Accelerate your AI/ML journey through our product Catalyst Forge that helps you achieve ML lifecycle automation and provision your own private and secure GenAI stack in no time. */}
            Accelerate your AI/ML journey through our Products Catalyst Forge and Privilance, that would help you achieve ML Lifecycle Automation and your own Private and secure GenAI Stack in no time.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold shadow-md transition">
              Talk to us
            </a>
            <a href="/services" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-semibold backdrop-blur border border-white/30 transition">
              Explore services
            </a>
          </div>
        </div>
      </section>
      <ProductsPage />
      <ServicesSection />
      <WhyUs showHero={false}/>

    </main>
  );
}
