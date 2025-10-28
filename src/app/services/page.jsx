"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { slug: "digital-engineering", title: "Digital Engineering", subtitle: "Your Vision + Our Engineering", description: "Building new age applications leveraging cutting edge technologies." },
  { slug: "web-development", title: "Web Development", subtitle: "Front-End + Back-End Expertise", description: "We help with front-end development, back-end development, and database management making digital content come to life." },
  { slug: "mobile-app-dev", title: "Mobile App Development", subtitle: "UX-Driven Mobile Experiences", description: "Native & hybrid apps with seamless omni-channel experiences and thorough testing." },
  { slug: "qa", title: "QA & Testing", subtitle: "Quality is our DNA", description: "Functional, Automation, API, ETL & Mobile Testing with QA strategy and consulting." },
  { slug: "ui-ux", title: "UI/UX Design", subtitle: "Design that Drives Engagement", description: "Aligning user experience goals with business objectives to deliver a delightful interface." },
  { slug: "cloud-devops", title: "Cloud & DevOps", subtitle: "Secure, Smart & Scalable Cloud Solutions", description: "Cloud strategy, migration, DevOps-as-a-Service, and performance & cost optimization." },
  { slug: "data-analytics", title: "Data & Analytics", subtitle: "Find clarity in complexity", description: "Unlock insights from every byte with consulting, engineering, migration & analytics." },
  { slug: "artificial-intelligence", title: "Artificial Intelligence", subtitle: "Discover the possibilities of tomorrow, today", description: "Generative AI, AI strategy, ML, MLOps, AI enablement & automation." },
  { slug: "cyber-security", title: "Cyber Security", subtitle: "We hit cyber threats hard", description: "Protection, detection, response, and strategy to keep systems safe." },
];

export default function ServicesGrid3D() {
  return (
    <section className="relative pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-slate-900">
          Our Premium Services
        </h2>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
          Solutions engineered to scale — aligned with your vision and powered by modern tech.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="block h-full">
              <motion.div
                className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-800">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base font-medium mb-3 text-blue-600">
                  {service.subtitle}
                </p>
                <p className="text-slate-500 leading-relaxed text-sm md:text-[15px]">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M13.5 4.5L21 12l-7.5 7.5m6-7.5H3" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
