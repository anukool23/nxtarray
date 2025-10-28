import Image from "next/image";

const SERVICE_CONTENT_1 = {
  "digital-engineering": {
    title: "Digital Engineering",
    hero: "/images/background.jpg",
    lead: "Your Vision and our engineering creating digital footprints",
    body: [
      "Building new age applications leveraging cutting edge technologies",
    ],
  },
  "web-development": {
    title: "Web Development",
    hero: "/images/background.jpg",
    lead: "What we offer",
    body: [
      "We help with front-end development, back-end development, and management of databases making digital content come to life",
    ],
  },
  "mobile-app-dev": {
    title: "Mobile App Development",
    hero: "/images/background.jpg",
    lead: "What we offer",
    body: [
      "We cover the entire span of mobility solutions including UX design, native & hybrid development & mobile application testing aiming to deliver enthralling Omni channel user experience.",
    ],
  },
  qa: {
    title: "QA",
    hero: "/images/background.jpg",
    lead: "What we offer",
    body: [
      "We help with Functional Testing, Automation Testing, API Testing, ETL Testing, Mobile Testing, QA Strategy and Consulting",
    ],
  },
  "ui-ux": {
    title: "UI/UX",
    hero: "/serviceImage/digital-engineering.jpg",
    lead: "What we offer",
    body: [
      "We help with Defining user experience goals aligned with business objectives",
    ],
  },
  "cloud-devops": {
    title: "Cloud and DevOps",
    hero: "/images/background.jpg",
    lead:
      "Secure, Smart, and Scalable Cloud Solutions that Unlocks your potential in the Cloud",
    sectionsTitle: "Services that we offer",
    bullets: [
      "Cloud Strategy and Consulting (Assisting to define, implement, and optimise a cloud environment aligned with business goals, ensuring scalability, security, and cost-effectiveness)",
      "Cloud Migration (Offering ongoing monitoring, management, and optimisation of cloud resources)",
      "Cloud Managed Service (Assisting businesses in moving their existing applications, data, and infrastructure from on-premise environments to the cloud or to a different cloud)",
      "DevOps-as-a-Service (DaaS) (Taking full responsibility for setting up and running the DevOps toolchain and infrastructure)",
      "Performance and cost optimisation (We analyse application and infrastructure performance to identify bottlenecks and optimise resource utilisation and Cost)",
    ],
  },
  "data-analytics": {
    title: "Data and Analytics",
    hero: "/images/background.jpg",
    lead: "Find clarity in complexity, and Unlock insights from every byte",
    sectionsTitle: "Services that we offer",
    bullets: [
      "Data Consulting (We help analyse complex data sets, develop data strategies, and implement data solutions, transforming raw information into actionable insights for business growth)",
      "Data Engineering (We help in creating reliable data pipelines that transform messy, unstructured data into clean, usable information for data scientists and analysts.)",
      "Data Migration & Modernisation (We help in moving data between systems, formats, or environments and enabling comprehensive, strategic transformation that re-engineers data architecture and integrates modern technologies like AI to extract greater business value and foster innovation, going beyond simple data transfer)",
      "Analytics Services (We help in applying different types of analytics like descriptive, diagnostic, predictive and prescriptive, understanding the business context to drive strategic outcomes)",
    ],
  },
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    hero: "/images/background.jpg",
    lead: "Discover the possibilities of tomorrow, today",
    body: [
      "Unlock the full potential of Generative AI with scalable, enterprise-ready solutions tailored to your unique business needs",
    ],
    bullets: [
      "AI Strategy & Consulting - We help organisations identify opportunities, assess readiness, and define AI roadmaps",
      "Machine Learning & Predictive Analytics - We help in Core development and deployment of models to predict outcomes and automate insights",
      "AI Platform Engineering & MLOps - We help in building scalable infrastructure and automation pipelines for AI lifecycle management",
      "Data Engineering & AI Enablement - Preparing and managing high-quality data pipelines for AI systems.",
      "AI for Business Automation - We help in optimising and automating business operations",
    ],
  },
  "cyber-security": {
    title: "Cyber Security",
    hero: "/images/background.jpg",
    lead: "We hit cyber threats hard, so your data stays safe",
    body: [
      "We protect systems from attacks, identifying weaknesses through penetration testing and vulnerability assessments, and responding to breaches with incident response and digital forensics.",
    ],
    sectionsTitle: "Services that we offer",
    bullets: [
      "Protection and Prevention - We help by identifying gaps and vulnerabilities though Vulnerability assessments and Penetration Testing, along with protection of Cloud, Data, Network and Identity.",
      "Detection and Response - We help by providing Managed service for 24X7 monitoring, incident detection and Response to recover from security breach.",
      "Strategy and Support - We help by providing Cybersecurity Consulting, Training for creating awareness, Security Audits to check Compliance with Industry standards and Security strategy through comprehensive planning.",
    ],

    
  },
};

const SERVICE_CONTENT = {
    "digital-engineering": {
      title: "Digital Engineering",
      hero: "/images/background.jpg",
      lead: "Your Vision and Our Engineering — Creating Digital Footprints That Last",
      body: [
        "In today’s digital-first world, businesses need more than technology — they need transformation. Our Digital Engineering services combine design thinking, modern architectures, and agile development to deliver powerful, scalable, and user-centric digital solutions.",
        "We build new-age applications leveraging cutting-edge technologies such as AI, IoT, Blockchain, and Cloud, enabling faster innovation and seamless integration across systems.",
        "From concept to production, we ensure every digital solution enhances customer experience, drives operational efficiency, and accelerates business growth."
      ],
    },
    "web-development": {
      title: "Web Development",
      hero: "/images/background.jpg",
      lead: "Transforming Ideas into Stunning, Scalable Web Experiences",
      body: [
        "Our Web Development services are focused on building fast, secure, and scalable websites that not only look great but perform flawlessly.",
        "We offer end-to-end development — from front-end interfaces that captivate users to back-end systems that ensure stability and performance.",
        "Our expertise spans technologies like React, Angular, Node.js, and Python, combined with modern cloud and database integrations. Whether it’s a corporate website, an eCommerce platform, or a web app — we help you make your digital presence stand out.",
      ],
    },
    "mobile-app-dev": {
      title: "Mobile App Development",
      hero: "/images/background.jpg",
      lead: "Creating Mobile Experiences that Inspire and Engage",
      body: [
        "In the mobile-first era, your app is often your first impression. We design and develop high-performance mobile applications that connect with users and deliver business value.",
        "Our services span across native (iOS, Android) and hybrid frameworks (React Native, Flutter, Ionic), ensuring flexibility, quality, and performance.",
        "We also handle the entire mobile lifecycle — from UX design and prototyping to testing, deployment, and maintenance — delivering consistent omnichannel experiences across platforms.",
      ],
    },
    qa: {
      title: "Quality Assurance (QA)",
      hero: "/images/background.jpg",
      lead: "Delivering Quality Without Compromise",
      body: [
        "We believe software quality is not just about testing — it’s about delivering confidence. Our QA services ensure your applications perform optimally under every condition.",
        "Our expert QA engineers specialize in Functional Testing, Automation Testing, API Testing, ETL Testing, and Mobile Testing. We also offer QA Strategy and Consulting to align testing efforts with business goals.",
        "By combining manual expertise with automation frameworks like Selenium, Cypress, and Postman, we deliver faster releases with higher reliability and reduced costs.",
      ],
    },
    "ui-ux": {
      title: "UI/UX Design",
      hero: "/images/background.jpg",
      lead: "Designing Digital Experiences that Delight and Convert",
      body: [
        "Your users deserve intuitive, delightful experiences — and that’s what our UI/UX team delivers. We combine creativity with user-centered design principles to create interfaces that are both beautiful and functional.",
        "Our process includes user research, journey mapping, wireframing, prototyping, and usability testing — ensuring every interaction adds value.",
        "We define user experience goals aligned with your business objectives, helping you increase engagement, retention, and customer satisfaction through design that speaks to your audience.",
      ],
    },
    "cloud-devops": {
      title: "Cloud and DevOps",
      hero: "/images/background.jpg",
      lead:
        "Secure, Smart, and Scalable Cloud Solutions that Unlock Your Potential",
      sectionsTitle: "Services We Offer",
      bullets: [
        "Cloud Strategy and Consulting — We help define, implement, and optimise cloud environments aligned with business goals, ensuring scalability, security, and cost-efficiency.",
        "Cloud Migration — Seamlessly move your applications, data, and infrastructure from on-premise environments or other clouds with minimal downtime and zero data loss.",
        "Cloud Managed Services — We provide proactive monitoring, management, and optimisation of your cloud resources, ensuring 24x7 performance and compliance.",
        "DevOps-as-a-Service (DaaS) — We design and maintain complete CI/CD pipelines, automate deployments, and integrate tools that enhance collaboration between development and operations.",
        "Performance and Cost Optimisation — We continuously analyse performance metrics to identify bottlenecks and optimise cloud spend while maximising efficiency.",
      ],
    },
    "data-analytics": {
      title: "Data and Analytics",
      hero: "/images/background.jpg",
      lead: "Find Clarity in Complexity — Unlock Insights from Every Byte",
      sectionsTitle: "Services We Offer",
      bullets: [
        "Data Consulting — Our experts help businesses define robust data strategies, transforming raw data into actionable insights that drive smarter decisions.",
        "Data Engineering — We build reliable data pipelines that convert complex, unstructured data into clean, usable information ready for analytics and AI models.",
        "Data Migration & Modernisation — Move your legacy data systems to modern architectures while integrating AI/ML capabilities to derive more value and innovation.",
        "Analytics Services — From descriptive to predictive analytics, we help you uncover trends, anticipate challenges, and make proactive business decisions.",
      ],
    },
    "artificial-intelligence": {
      title: "Artificial Intelligence",
      hero: "/images/background.jpg",
      lead: "Discover the Possibilities of Tomorrow, Today",
      body: [
        "Artificial Intelligence is reshaping industries, and we help businesses lead that transformation. From machine learning models to generative AI tools, our solutions are built to scale and deliver measurable impact.",
        "We enable smarter decision-making, improved customer engagement, and automated workflows that boost productivity and innovation.",
      ],
      bullets: [
        "AI Strategy & Consulting — We help organisations identify AI opportunities, assess readiness, and define actionable roadmaps for transformation.",
        "Machine Learning & Predictive Analytics — Building intelligent models that learn from data and help predict outcomes or automate decisions.",
        "AI Platform Engineering & MLOps — Developing scalable infrastructure and pipelines for continuous AI lifecycle management.",
        "Data Engineering & AI Enablement — Ensuring clean, high-quality data that fuels efficient AI operations.",
        "AI for Business Automation — Streamlining operations through intelligent process automation, saving time and reducing costs.",
      ],
    },
    "cyber-security": {
      title: "Cyber Security",
      hero: "/images/background.jpg",
      lead: "We Hit Cyber Threats Hard — So Your Data Stays Safe",
      body: [
        "In an age of rising digital threats, protecting your business is not optional — it’s essential. We offer end-to-end cybersecurity services designed to safeguard your data, infrastructure, and reputation.",
        "Our approach combines proactive threat prevention with continuous monitoring and rapid incident response to keep your systems resilient and compliant.",
      ],
      sectionsTitle: "Services We Offer",
      bullets: [
        "Protection and Prevention — Identifying vulnerabilities through assessments and penetration testing, along with securing Cloud, Data, Network, and Identity systems.",
        "Detection and Response — Providing 24x7 monitoring and managed incident response services to minimise downtime and mitigate risks.",
        "Strategy and Support — Offering Cybersecurity Consulting, Employee Training, Security Audits, and Compliance Strategy to build a culture of security and trust.",
      ],
    },
  };
  

export default function ServiceDetail({ params }) {
  const { slug } = params;
  const content = SERVICE_CONTENT[slug];

  if (!content) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold">Service not found</h1>
      </div>
    );
  }

  return (
    <main>
      {/* Hero image */}
      <div className="relative h-56 md:h-80 w-full">
        {/* Using next/image for optimization; fallback to img if needed */}
        <Image src={content.hero} alt={content.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-5xl font-extrabold">{content.title}</h1>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        {content.lead && (
          <p className="text-slate-700 text-lg md:text-xl">{content.lead}</p>
        )}

        {content.body && content.body.length > 0 && (
          <div className="mt-6 space-y-4">
            {content.body.map((p, i) => (
              <p key={i} className="text-slate-700/90 leading-relaxed">{p}</p>
            ))}
          </div>
        )}

        {content.sectionsTitle && (
          <h2 className="mt-10 text-2xl font-bold text-slate-900">{content.sectionsTitle}</h2>
        )}

        {content.bullets && content.bullets.length > 0 && (
          <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-700">
            {content.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}


