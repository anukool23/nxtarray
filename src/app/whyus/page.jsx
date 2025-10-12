"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "Modernize the Digital Core",
    description:
      "A modern data and cloud-enabled digital core drives intelligent, secure, and scalable operations. Through a layered architecture, we boost efficiency and support essential AI workflows.",
    img: "/images/card1.png",
  },
  {
    title: "Digital Sovereignty in the Cloud",
    description:
      "Xebia partners with leading enterprises to modernize and manage their data and cloud infrastructure, ensuring greater resilience and scalability.",
    img: "/images/card2.png",
  },
  {
    title: "Agentic AI and the Future Enterprise Work",
    description:
      "Empowering enterprises with intelligent systems that adapt and evolve using AI-driven automation and decision-making.",
    img: "/images/card3.png",
  },
];

export default function WhyUs() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const totalCards = cards.length;

  return (
    <section
      ref={sectionRef}
      className="relative h-[400vh] bg-gradient-to-b from-purple-950 to-purple-700"
    >
      <div className="sticky top-16 h-screen flex items-center justify-center">
        <div className="relative w-full h-[900px] flex items-center justify-center overflow-visible pt-32">
          {cards.map((card, i) => {
            const start = i / totalCards;
            const end = (i + 1) / totalCards;

            // Slide from below
            const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);
            // Fade-in
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            // Scale effect
            const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);

            // Dynamic zIndex: becomes higher as scroll progresses
            const zIndex = useTransform(
              scrollYProgress,
              [start, end],
              [i, totalCards + i]
            );

            return (
              <motion.div
                key={i}
                style={{
                  y,
                  opacity,
                  scale,
                  zIndex,
                  position: "absolute",
                }}
                className="top-0 left-1/2 -translate-x-1/2 w-[85%] min-h-[700px] bg-[#45055A] rounded-3xl text-white shadow-2xl p-16 flex flex-col md:flex-row items-center justify-between gap-12"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex-1">
                  <h2 className="text-5xl font-bold mb-6">{card.title}</h2>
                  <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                    {card.description}
                  </p>
                  <button className="bg-white text-purple-800 font-semibold px-8 py-3 rounded-lg hover:bg-purple-200 transition">
                    Explore More →
                  </button>
                </div>
                <div className="flex-1 flex justify-center">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="rounded-2xl object-cover w-full max-w-[520px] shadow-lg"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
