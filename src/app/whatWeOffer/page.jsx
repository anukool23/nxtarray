export default function WhatWeOffer() {
    const services = [
      {
        title: "Web Development",
        description:
          "User-friendly web portals, platforms, SaaS applications and software products leveraging cutting edge technologies",
        icon: "💻",
      },
      {
        title: "Mobility",
        description:
          "Native and hybrid applications with compelling UX after extensive user research, design modeling across platforms",
        icon: "📱",
      },
      {
        title: "Cloud Engineering",
        description:
          "Scalable cloud-native solutions with DevOps practices for agility and efficiency",
        icon: "☁️",
      },
      {
        title: "Data Engineering",
        description:
          "Data pipelines, warehouses and insights platforms to drive data-informed decisions",
        icon: "📊",
      },
      {
        title: "UI/UX Design",
        description:
          "Creating delightful experiences with research-backed design methodologies",
        icon: "🎨",
      },
    ];
  
    return (
      <section className="py-16 bg-slate-800 text-gray-800 mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-white">What we offer</h2>
          <p className="max-w-2xl mx-auto mb-12 text-gray-300">
            We harness the power of digital engineering, aligning our expertise with your business needs to foster innovation, continuous improvement and growth.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-[#2A1B3F] rounded-lg shadow p-6 text-left cursor-pointer overflow-hidden group"
              >
                {/* Default content */}
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.description}</p>
  
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#1B1230cc] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <a
                    href="#contact"
                    className="inline-block px-4 py-2 border border-white rounded text-white hover:bg-white hover:text-[#2A1B3F] transition"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  