"use client";

import Link from "next/link";

const PRODUCTS = [
  { slug: "overview", title: "Enterprise AI Products", subtitle: "Turnkey, enterprise-ready AI" },
  { slug: "catalyst-forge", title: "Catalyst Forge", subtitle: "Smart MLOps & lifecycle automation" },
  { slug: "privilance", title: "Privilance", subtitle: "Private Generative AI" },
  { slug: "catalyst-ql", title: "CatalystQL", subtitle: "Natural language to SQL" },
  { slug: "catalyst-one", title: "CatalystOne", subtitle: "Unified knowledge querying" },
];

export default function ProductsPage() {
  return (
    <section className="relative pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-slate-900">Products</h1>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
          Explore our enterprise-ready AI product suite — secure, scalable, and integration-friendly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {PRODUCTS.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="block h-full">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-800">{p.title}</h3>
                <p className="text-sm md:text-base font-medium mb-3 text-blue-600">{p.subtitle}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M13.5 4.5L21 12l-7.5 7.5m6-7.5H3" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


