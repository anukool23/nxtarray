"use client";
import Image from "next/image";
import { use } from "react";

const PRODUCT_CONTENT = {
  overview: {
    title: "Enterprise AI Products",
    hero: "/images/background-products.jpg",
    lead:
      "Enabling AI capabilities with our turnkey enterprise-ready solutions — performance-tuned, secure, and integration-capable both on Cloud and On-Prem.",
    body: [
      "Our AI product suite is built to empower enterprises with scalable, secure, and high-performance AI capabilities. Each product is designed with flexibility in mind — easily deployable on cloud or on-premises, ensuring complete control over data and operations.",
      "Whether you are accelerating MLOps pipelines, building intelligent data interfaces, or deploying private generative AI systems, our tools are engineered for seamless integration, reliability, and measurable results.",
    ],
  },

  "catalyst-forge": {
    title: "Catalyst Forge",
    hero: "/images/catalyst-forge.jpg",
    lead: "Accelerate Your AI Journey with Smart MLOps and Model Lifecycle Automation",
    body: [
      "Catalyst Forge provides enterprises with a powerful platform to operationalize AI models at scale. It brings together experimentation, deployment, monitoring, and governance under one unified system — helping data teams focus on innovation instead of infrastructure.",
      "Whether you’re managing multiple ML models or deploying AI capabilities across departments, Catalyst Forge simplifies the complexity with automation, repeatability, and visibility.",
      "With its rich set of connectors, Catalyst Forge integrates seamlessly with your existing Cloud or On-Prem infrastructure, letting you plug and play models instantly — or experiment with new ones on the fly.",
    ],
    bullets: [
      "Complete MLOps lifecycle management — from training to deployment and monitoring.",
      "Integration-ready connectors for Cloud and On-Prem environments.",
      "Experimentation support for existing or custom ML models.",
      "Performance-optimized for enterprise-scale workloads.",
      "Automated governance and version control for model reproducibility and compliance.",
    ],
  },

  privilance: {
    title: "Privilance",
    hero: "/images/privilance.webp",
    lead: "Your Private Generative AI — Secure, Scalable, and Cost-Optimized",
    body: [
      "Privilance empowers organizations to run their own private Generative AI environment — giving you full control, privacy, and customization over your AI workflows. It’s designed for enterprises that want to leverage GenAI power without compromising on data security or cost efficiency.",
      "With Privilance, you can integrate AI directly into your business systems, automate document understanding, analytics, and decision support while maintaining total data sovereignty.",
      "Built on open-source foundations, Privilance gives you the flexibility to customize your setup while reducing total ownership costs by 40–60% compared to public cloud GenAI solutions.",
    ],
    bullets: [
      "Private and secure Generative AI deployment — on Cloud or On-Prem.",
      "Two integrated applications — CatalystQL and CatalystOne for intelligent querying and insights.",
      "Open-source foundation enabling flexibility, customization, and cost control.",
      "40–60% cheaper than Cloud-based GenAI alternatives.",
      "Enterprise-grade privacy and compliance with industry standards.",
    ],
  },

  "catalyst-ql": {
    title: "CatalystQL",
    hero: "/images/catalyst-ql.jpg",
    lead: "Conversational Intelligence for Data — Enterprise-Grade Natural Language to SQL",
    body: [
      "CatalystQL transforms how organizations interact with their data. It enables business users to query databases, data warehouses, lakes, and analytics platforms using natural language — no SQL expertise required.",
      "The engine understands enterprise context, ensuring precise, reliable results even for complex queries across distributed data systems.",
      "CatalystQL integrates seamlessly with your existing data infrastructure, empowering teams to gain insights instantly and make data-driven decisions faster.",
    ],
    bullets: [
      "Enterprise-grade Natural Language to SQL capabilities.",
      "Works across databases, warehouses, and data lakes.",
      "Context-aware engine for accurate and secure query generation.",
      "Integrates easily with existing BI tools and analytics platforms.",
      "Boosts productivity for non-technical users and analysts alike.",
    ],
  },

  "catalyst-one": {
    title: "CatalystOne",
    hero: "/images/catalyst-one.jpg",
    lead: "Unify Your Knowledge Base — Query Documents, Reports, and Policies Instantly",
    body: [
      "CatalystOne bridges the gap between unstructured and structured data. It enables enterprises to query across multiple data types — documents, policies, reports, databases, and more — using natural language or contextual prompts.",
      "Powered by private GenAI models, CatalystOne helps employees find critical information instantly, streamlining compliance, research, and decision-making processes.",
      "It’s designed to fit seamlessly into enterprise workflows, offering secure access controls and integration with document management systems, analytics tools, and databases.",
    ],
    bullets: [
      "AI-driven querying across documents, policies, databases, and reports.",
      "Unified search with context-aware responses and source traceability.",
      "Private GenAI engine ensuring data privacy and compliance.",
      "Plug-and-play integration with enterprise systems and document repositories.",
      "Accelerates knowledge discovery and internal efficiency.",
    ],
  },
};

export default function ProductDetail({ params }) {
  const { slug } = use(params);

  const content = PRODUCT_CONTENT[slug];

  if (!content) {
    return (
      <main className="bg-[#020617] text-blue-100 min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Product not found</h1>
      </main>
    );
  }

  return (
    <main className="bg-[#020617] text-blue-100 min-h-screen">

      {/* HERO */}
      {/* HERO */}
<div className="relative h-[55vh] w-full">
  <Image
    src={content.hero}
    alt={content.title}
    fill
    priority
    className="w-full h-auto object-contain"
  />

  {/* Bottom fade so text is readable */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617]/95" />

  {/* Title pinned at bottom */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center w-full px-4">
    <h1 className="text-3xl md:text-5xl font-bold text-blue-100 drop-shadow-lg">
      {content.title}
    </h1>
  </div>
</div>


      {/* BODY */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="text-blue-100/85 text-lg md:text-xl leading-relaxed">
          {content.lead}
        </p>

        <div className="mt-6 space-y-5">
          {content.body.map((p, i) => (
            <p key={i} className="text-blue-100/80 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {content.bullets && (
          <ul className="mt-8 space-y-2 text-blue-100/85">
            {content.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>

    </main>
  );
}
