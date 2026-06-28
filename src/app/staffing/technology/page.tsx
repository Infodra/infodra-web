import type { Metadata } from "next";
import StaffingPageTemplate, { type StaffingPageData } from "@/components/StaffingPageTemplate";

export const metadata: Metadata = {
  title: "Technology Staffing Solutions | Software Developers & Cloud Engineers | Infodra Technologies",
  description:
    "Deploy skilled software professionals on Infodra payroll — full stack developers, cloud engineers, DevOps, QA, AI/ML engineers, data analysts, and technology specialists to accelerate digital transformation.",
  keywords: [
    "Technology Staffing",
    "Software Developer Staffing",
    "Full Stack Developer Staffing",
    "Cloud Engineer Deployment",
    "DevOps Staffing",
    "AI ML Engineer Staffing",
    "Contract Developer Staffing",
    "Payroll Staffing Technology",
    "IT Resource Deployment",
    "React Developer Staffing",
    "Infodra Technologies",
  ],
  openGraph: {
    title: "Technology Staffing Solutions | Infodra Technologies",
    description:
      "Deploy skilled software and technology professionals on Infodra payroll for digital transformation, cloud, AI, and software product development.",
    url: "https://infodra.in/staffing/technology",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Technology Staffing Solutions",
  provider: {
    "@type": "Organization",
    name: "Infodra Technologies",
    url: "https://infodra.in",
  },
  description:
    "Infodra Technologies deploys skilled software professionals on payroll — full stack developers, cloud engineers, DevOps, QA automation, AI/ML engineers, and data specialists for enterprise digital transformation.",
  areaServed: "IN",
  serviceType: "Technology Staffing & Software Resource Deployment",
};

const data: StaffingPageData = {
  theme: "indigo",
  badge: "Technology Staffing",

  heroTitle: "Technology Staffing",
  heroHighlight: "Solutions",
  heroSubtitle:
    "Deploy skilled software professionals on Infodra payroll to accelerate digital transformation, enterprise applications, cloud modernisation, AI initiatives, and software product development across industries.",
  heroCta1: "Get Technology Talent",
  heroCta2: "Request Consultation",
  heroPreview: [
    "Full Stack & Backend Developers",
    "Cloud & DevOps Engineers",
    "AI / ML & Data Engineers",
    "QA Automation Specialists",
    "UI/UX & Frontend Developers",
  ],

  rolesLabel: "Talent Pool",
  rolesTitle: "Technology Roles We Deploy",
  rolesSubtitle:
    "Pre-screened, technically assessed professionals across all modern software and technology domains.",
  roles: [
    { title: "Full Stack Developers", desc: "End-to-end web application development covering frontend, backend, APIs, and database layers." },
    { title: "Backend Developers", desc: "Server-side development using Node.js, Python, Java, .NET, and microservices architecture." },
    { title: "Frontend Developers", desc: "Modern UI development with React, Angular, Vue.js, Next.js, and responsive design patterns." },
    { title: "React Developers", desc: "Specialist React developers for SPAs, dashboards, and enterprise web applications." },
    { title: "Angular Developers", desc: "Enterprise Angular application development with TypeScript, RxJS, and Angular Material." },
    { title: "Node.js Developers", desc: "Node.js backend development, REST APIs, GraphQL, and real-time application support." },
    { title: "Python Developers", desc: "Python development for web apps (Django/FastAPI), automation, data processing, and AI pipelines." },
    { title: "Java Developers", desc: "Java enterprise development with Spring Boot, microservices, and JEE architecture." },
    { title: ".NET Developers", desc: "Microsoft .NET, C#, ASP.NET Core, and Azure-based enterprise application development." },
    { title: "Mobile App Developers", desc: "iOS, Android, and cross-platform mobile development using Flutter, React Native, and Swift." },
    { title: "Cloud Engineers", desc: "Cloud infrastructure design, deployment, and management on AWS, Azure, and GCP platforms." },
    { title: "DevOps Engineers", desc: "CI/CD pipeline setup, container orchestration, IaC, and platform reliability engineering." },
    { title: "QA Engineers", desc: "Manual and functional testing, test planning, defect management, and quality assurance." },
    { title: "Automation Test Engineers", desc: "Test automation using Selenium, Playwright, Cypress, Appium, and API testing frameworks." },
    { title: "AI / ML Engineers", desc: "Machine learning model development, MLOps, deep learning, and AI pipeline engineering." },
    { title: "Data Engineers", desc: "Data pipeline development, ETL/ELT, data warehouse design, and big data processing." },
    { title: "Data Analysts", desc: "Business intelligence, data visualisation, SQL analytics, and insights reporting." },
    { title: "Power BI Developers", desc: "Power BI dashboard design, DAX modelling, data gateway setup, and report automation." },
    { title: "UI / UX Designers", desc: "User experience design, wireframing, prototyping, and design system development." },
    { title: "Solution Architects", desc: "Enterprise architecture, system design, cloud solution blueprinting, and technical leadership." },
    { title: "Technical Support Engineers", desc: "L1/L2/L3 application support, issue resolution, and customer-facing technical assistance." },
    { title: "Cyber Security Engineers", desc: "Application security, vulnerability assessment, penetration testing, and compliance support." },
  ],

  domainsLabel: "Technology Areas",
  domainsTitle: "Technology Expertise",
  domainsSubtitle:
    "We deploy professionals across all major technology domains driving modern enterprise transformation.",
  domains: [
    "Web Applications",
    "Enterprise Software",
    "Cloud Computing",
    "AI & Machine Learning",
    "Data Analytics",
    "DevOps",
    "Mobile Applications",
    "API Development",
    "Microservices",
    "Digital Transformation",
  ],

  stackLabel: "Tech Stack",
  stackTitle: "Technology Stack Coverage",
  stackSubtitle:
    "Our professionals are proficient across the leading frameworks, platforms, and tools powering modern software.",
  stack: [
    "React",
    "Next.js",
    "Angular",
    "Node.js",
    "FastAPI",
    "Python",
    "Java",
    ".NET",
    "Flutter",
    "PostgreSQL",
    "MongoDB",
    "Azure",
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Power BI",
    "OpenAI APIs",
    "Terraform",
    "Selenium",
    "Playwright",
  ],

  modelsLabel: "Flexible Engagement",
  modelsTitle: "Engagement Models",
  models: [
    {
      title: "Dedicated Developers",
      desc: "Technology professionals exclusively assigned to your team — fully integrated with your development workflows and sprint cycles.",
    },
    {
      title: "Contract Staffing",
      desc: "Short and long-term contract developer staffing for product releases, project phases, or capacity augmentation.",
    },
    {
      title: "Payroll Staffing",
      desc: "Resources deployed on Infodra payroll with full statutory compliance — PF, ESI, PT managed end-to-end.",
    },
    {
      title: "Project Teams",
      desc: "Assembled technology teams covering frontend, backend, QA, DevOps, and architecture for full-project delivery.",
    },
    {
      title: "Remote Developers",
      desc: "Offshore and remote software professionals integrated into your team via your collaboration and project management tools.",
    },
    {
      title: "Hybrid Deployment",
      desc: "Combine onsite leads with remote development resources for optimal cost and collaboration balance.",
    },
    {
      title: "Onsite Resources",
      desc: "Technology professionals deployed directly at your office or client site for in-person collaboration and support.",
    },
  ],

  whyLabel: "Our Advantage",
  whyTitle: "Why Infodra for Technology Staffing",
  whyItems: [
    { title: "Pre-Screened Professionals", desc: "Every candidate undergoes technical screening, coding assessments, and domain validation before deployment." },
    { title: "Latest Technology Expertise", desc: "Access professionals skilled in current frameworks, cloud platforms, and modern engineering practices." },
    { title: "Fast Deployment", desc: "From requirement to deployment in 1–2 weeks — no lengthy hiring cycles or notice period delays." },
    { title: "Payroll Managed by Infodra", desc: "We handle all salary, PF, ESI, PT, and compliance so your team stays focused on product delivery." },
    { title: "Flexible Scaling", desc: "Scale your development team up or down based on sprint capacity, product roadmap, or business growth." },
    { title: "Dedicated Support", desc: "A dedicated account manager ensures seamless communication and issue resolution throughout deployment." },
    { title: "Experienced Recruitment Team", desc: "Technical recruiters who understand software development deeply — not just keyword matching." },
  ],

  processLabel: "How We Work",
  processTitle: "Technology Staffing Workflow",
  processSubtitle:
    "A proven eight-step process ensuring the right technology professionals join your team quickly and smoothly.",
  processSteps: [
    { step: "01", title: "Client Requirement", desc: "We understand your stack, role requirements, team size, and deployment timeline." },
    { step: "02", title: "Skill Mapping", desc: "Requirements mapped to specific technologies, frameworks, experience levels, and domain knowledge." },
    { step: "03", title: "Technical Screening", desc: "Initial technical screening by our engineering recruitment team for stack fit." },
    { step: "04", title: "Coding Assessment", desc: "Practical coding test or technical challenge tailored to your technology stack and role level." },
    { step: "05", title: "Client Interview", desc: "Shortlisted candidates presented for your technical review and team interview." },
    { step: "06", title: "Deployment", desc: "Seamless onboarding, access setup, and integration into your development workflows." },
    { step: "07", title: "Payroll & Compliance", desc: "All statutory obligations — PF, ESI, PT, and contracts — managed by Infodra." },
    { step: "08", title: "Ongoing Support", desc: "Continuous account management, performance tracking, and flexible workforce management." },
  ],

  industriesLabel: "Sectors We Serve",
  industriesTitle: "Industries We Staff",
  industriesSubtitle:
    "We deploy technology professionals across all major sectors undergoing digital transformation.",
  industries: [
    "IT Services",
    "Manufacturing",
    "Healthcare",
    "Banking",
    "Retail",
    "Logistics",
    "Education",
    "E-Commerce",
    "FinTech",
    "Startups",
    "Real Estate",
  ],

  faqLabel: "Support",
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      q: "What technology roles do you specialise in?",
      a: "We specialise in deploying full stack developers, backend and frontend engineers, React/Angular/Node.js developers, cloud and DevOps engineers, QA automation engineers, AI/ML engineers, data analysts, Power BI developers, and solution architects.",
    },
    {
      q: "How are candidates technically screened?",
      a: "All candidates go through a multi-stage process — technical screening by our engineering recruiters, practical coding assessments, and stack-specific technical interviews — before being shortlisted for client review.",
    },
    {
      q: "How fast can you deploy technology professionals?",
      a: "We typically deploy resources within 1–2 weeks from requirement receipt. For senior or niche roles, timelines may extend to 2–3 weeks. Urgent augmentation requests are expedited from our active talent pipeline.",
    },
    {
      q: "Are resources on Infodra payroll?",
      a: "Yes. Under our payroll staffing model, all deployed technology professionals are on Infodra's payroll. We manage salary disbursement, PF, ESI, PT, and all applicable statutory compliance.",
    },
    {
      q: "Do you support remote technology staffing?",
      a: "Yes. We support fully remote, hybrid, and onsite deployment models. Remote developers are integrated into your team using your project management, communication, and version control tools.",
    },
    {
      q: "Can contract resources be converted to permanent employees?",
      a: "Yes. We offer a contract-to-permanent conversion option. If you wish to absorb a deployed professional as a full-time employee, we facilitate the transition with minimal friction.",
    },
    {
      q: "Do you recruit technology professionals PAN-India?",
      a: "Yes. Infodra has a PAN-India technology talent network spanning all major tech hubs — Bengaluru, Hyderabad, Chennai, Pune, Mumbai, Delhi NCR, and Tier-2 cities — enabling us to fulfil requirements across any location.",
    },
  ],

  ctaHeading: "Looking for Technology Professionals?",
  ctaText:
    "Deploy experienced software engineers and technology specialists with Infodra's flexible staffing solutions — from React developers to cloud architects, deployed fast.",
  ctaBtn1: "Get Technology Talent",
  ctaBtn2: "Speak With Our Team",
};

export default function TechnologyStaffingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StaffingPageTemplate data={data} />
    </>
  );
}
