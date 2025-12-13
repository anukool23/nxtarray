"use client";

import Link from "next/link";

const PRODUCTS = [
  { slug: "catalyst-forge", title: "Catalyst Forge", subtitle: "Smart MLOps & lifecycle automation" },
  { slug: "privilance", title: "Privilance", subtitle: "Private Generative AI" },
];

export default function ProductsPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#020617] text-white flex items-center  pb-24">
      {/* 🔮 Glowing Background Layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_70%)] blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.2),transparent_70%)] blur-[160px]" />
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_70%)] blur-[120px]" />
      </div>

      {/* 🔷 Main Content */}
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            Products
          </h1>
          <p className="text-slate-300/90 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our enterprise-ready AI product suite — secure, scalable, and integration-friendly.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {PRODUCTS.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="block h-full">
              <div
                className="relative rounded-2xl p-[2px] 
                bg-gradient-to-br from-blue-500/20 via-indigo-700/20 to-transparent
                hover:from-blue-500/30 hover:via-indigo-900/25 hover:to-blue-900/25
                transition-all duration-500 hover:-translate-y-3
                shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_45px_rgba(59,130,246,0.3)]"
              >
                <div
                  className="rounded-2xl h-full bg-gradient-to-br 
                  from-[#0d111c]/90 via-[#0b0f1a]/85 to-[#090d18]/90
                  border border-blue-400/20 backdrop-blur-2xl p-10
                  shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.4)]"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-100">
                    {p.title}
                  </h3>
                  <p className="text-base md:text-lg font-medium mb-5 text-blue-200/80">
                    {p.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 text-blue-300 font-semibold text-lg hover:text-blue-400 transition-colors">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-6 h-6"
                    >
                      <path d="M13.5 4.5L21 12l-7.5 7.5m6-7.5H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
