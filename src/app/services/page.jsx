"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Digital Engineering", subtitle: "Your Vision + Our Engineering", description: "Building new age applications leveraging cutting edge technologies." },
  { title: "Web Development", subtitle: "Front-End + Back-End Expertise", description: "We help with front-end development, back-end development, and database management making digital content come to life." },
  { title: "Mobile App Development", subtitle: "UX-Driven Mobile Experiences", description: "Native & hybrid apps with seamless omni-channel experiences and thorough testing." },
  { title: "QA & Testing", subtitle: "Quality is our DNA", description: "Functional, Automation, API, ETL & Mobile Testing with QA strategy and consulting." },
  { title: "UI/UX Design", subtitle: "Design that Drives Engagement", description: "Aligning user experience goals with business objectives to deliver a delightful interface." },
  { title: "Cloud & DevOps", subtitle: "Secure, Smart & Scalable Cloud Solutions", description: "Cloud strategy, migration, DevOps-as-a-Service, and performance & cost optimization." },
];

export default function ServicesGrid3D() {
  return (
    <section className="relative py-24 bg-[url('/images/background.jpg')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-16 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
          Our Premium Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 cursor-pointer"
              whileHover={{ scale: 1.05, rotateY: 15, rotateX: 5, boxShadow: "0 0 30px rgba(0,255,255,0.6)" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="text-3xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
                {service.title}
              </h3>
              <p className="text-xl font-semibold mb-4 text-white/90">{service.subtitle}</p>
              <p className="text-white/80 leading-relaxed">{service.description}</p>
              <button className="mt-6 bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 rounded-xl font-bold text-white hover:scale-105 hover:shadow-lg transition-transform duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
