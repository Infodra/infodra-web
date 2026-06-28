import type { Metadata } from "next";
import StaffingPageTemplate, { type StaffingPageData } from "@/components/StaffingPageTemplate";

export const metadata: Metadata = {
  title: "Engineering Staffing Solutions | CAD, Design & Manufacturing Engineers | Infodra Technologies",
  description:
    "Deploy experienced engineering professionals on Infodra payroll — CAD engineers, mechanical design, manufacturing engineering, documentation, validation, and lifecycle management for automotive, industrial, and manufacturing sectors.",
  keywords: [
    "Engineering Staffing",
    "CAD Engineer Staffing",
    "Mechanical Engineer Deployment",
    "Manufacturing Engineer Staffing",
    "CATIA Engineers",
    "SolidWorks Staffing",
    "Automotive Engineering Staffing",
    "Engineering Resource Deployment",
    "Contract Engineering Staffing",
    "Payroll Staffing Engineering",
    "Infodra Technologies",
  ],
  openGraph: {
    title: "Engineering Staffing Solutions | Infodra Technologies",
    description:
      "Deploy experienced engineering professionals on Infodra payroll for automotive, industrial, and manufacturing sectors.",
    url: "https://infodra.in/staffing/engineering",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Engineering Staffing Solutions",
  provider: {
    "@type": "Organization",
    name: "Infodra Technologies",
    url: "https://infodra.in",
  },
  description:
    "Infodra Technologies deploys experienced engineering professionals on payroll — CAD engineers, mechanical design engineers, manufacturing engineers, and technical specialists for automotive, industrial, and manufacturing sectors.",
  areaServed: "IN",
  serviceType: "Engineering Staffing & Resource Deployment",
};

const data: StaffingPageData = {
  theme: "sky",
  badge: "Engineering Staffing",

  heroTitle: "Engineering Staffing",
  heroHighlight: "Solutions",
  heroSubtitle:
    "Deploy experienced engineering professionals on Infodra payroll to support product development, engineering design, manufacturing engineering, documentation, validation, and lifecycle management across automotive, industrial, aerospace, and manufacturing sectors.",
  heroCta1: "Hire Engineers",
  heroCta2: "Request Staffing Consultation",
  heroPreview: [
    "CAD Design & Mechanical Engineers",
    "Automotive Engineering Specialists",
    "Manufacturing & Quality Engineers",
    "Technical Documentation Experts",
    "Validation & Simulation Engineers",
  ],

  rolesLabel: "Talent Pool",
  rolesTitle: "Engineering Roles We Deploy",
  rolesSubtitle:
    "Pre-screened, domain-experienced engineering professionals ready for immediate deployment across industries.",
  roles: [
    { title: "CAD Engineers", desc: "2D/3D modelling and detailed design using CATIA, NX, SolidWorks, Creo, and AutoCAD." },
    { title: "Mechanical Design Engineers", desc: "Product and component design for manufacturing, automotive, and industrial applications." },
    { title: "Product Design Engineers", desc: "End-to-end product development, concept design, prototyping, and design validation." },
    { title: "Technical Drafters", desc: "Detailed manufacturing drawings, GD&T annotations, and technical documentation." },
    { title: "GD&T Engineers", desc: "Geometric dimensioning and tolerancing experts for precision manufacturing and quality control." },
    { title: "DFM & Value Engineering Specialists", desc: "Design for manufacturability analysis, cost reduction, and value engineering programmes." },
    { title: "BOM & PLM Specialists", desc: "Bill of materials management and PLM administration using Teamcenter, Windchill, and 3DEXPERIENCE." },
    { title: "Reverse Engineering Engineers", desc: "Point cloud processing, scan-to-CAD, and component reverse engineering activities." },
    { title: "CAE / Simulation Engineers", desc: "FEA, CFD, and structural analysis using ANSYS, HyperMesh, Abaqus, and Nastran." },
    { title: "Technical Publication Engineers", desc: "Illustrated parts catalogues, maintenance manuals, service documents, and technical publications." },
    { title: "Prototype Build Engineers", desc: "Prototype fabrication support, build coordination, and physical validation activities." },
    { title: "Manufacturing Engineers", desc: "Process planning, PFMEA, control plans, tooling design, and production engineering support." },
    { title: "Quality Engineers", desc: "PPAP, APQP, inspection planning, CMM programming, and quality system support." },
    { title: "Validation Engineers", desc: "DVP&R planning, test execution, data analysis, and validation report preparation." },
    { title: "Engineering Change Coordinators", desc: "ECN/ECR management, change impact analysis, and cross-functional coordination support." },
  ],

  domainsLabel: "Industry Domains",
  domainsTitle: "Engineering Domains We Serve",
  domainsSubtitle:
    "We deploy engineering professionals with domain-specific expertise across all major engineering sectors.",
  domains: [
    "Automotive",
    "Industrial Machinery",
    "Heavy Equipment",
    "Medical Devices",
    "Consumer Products",
    "Oil & Gas",
    "Aerospace",
    "Manufacturing",
    "Renewable Energy",
    "Industrial Automation",
  ],

  stackLabel: "Tools & Software",
  stackTitle: "Software Expertise",
  stackSubtitle:
    "Our engineering professionals are proficient across leading CAD, CAE, and PLM platforms.",
  stack: [
    "CATIA V5/V6",
    "Siemens NX",
    "Creo Parametric",
    "SolidWorks",
    "AutoCAD",
    "Autodesk Inventor",
    "Teamcenter",
    "Windchill",
    "3DEXPERIENCE",
    "SAP PLM",
    "ANSYS",
    "HyperMesh",
    "Abaqus",
    "MATLAB",
    "GD&T",
  ],

  modelsLabel: "Flexible Engagement",
  modelsTitle: "Engagement Models",
  models: [
    {
      title: "Dedicated Engineering Resources",
      desc: "Engineering professionals exclusively assigned to your organisation, fully aligned to your project and workflows.",
    },
    {
      title: "Contract Staffing",
      desc: "Short and long-term contract staffing for project-based, seasonal, or interim engineering requirements.",
    },
    {
      title: "Payroll Staffing",
      desc: "Resources deployed on Infodra payroll with complete statutory compliance — PF, ESI, PT managed end-to-end.",
    },
    {
      title: "Project-Based Teams",
      desc: "Assembled engineering teams for specific project phases — design, validation, documentation, or launch support.",
    },
    {
      title: "Remote Engineering Support",
      desc: "Offshore and remote engineering resources providing design, documentation, and analysis support.",
    },
    {
      title: "Onsite Deployment",
      desc: "Engineers deployed directly at your facility, plant, or customer site for hands-on project support.",
    },
  ],

  whyLabel: "Our Advantage",
  whyTitle: "Why Infodra for Engineering Staffing",
  whyItems: [
    { title: "Engineering Domain Expertise", desc: "Deep industry knowledge across automotive, manufacturing, and industrial engineering domains." },
    { title: "Experienced CAD Professionals", desc: "Professionals with proven project experience on CATIA, NX, SolidWorks, Creo, and more." },
    { title: "Automotive Engineering Specialists", desc: "Dedicated pool of automotive engineers with OEM and Tier-1 project backgrounds." },
    { title: "Quick Deployment", desc: "Rapid resource mobilisation — from requirement to onsite deployment within 1–2 weeks." },
    { title: "Flexible Engagement", desc: "Contract, payroll, dedicated, or project-based models to match your procurement requirements." },
    { title: "Payroll Managed by Infodra", desc: "We handle all payroll, PF, ESI, PT, and labour law compliance so you stay focused on delivery." },
    { title: "Dedicated Account Manager", desc: "Single-point coordination for seamless deployment, performance monitoring, and issue resolution." },
    { title: "Scalable Workforce", desc: "Scale your engineering team up or down based on project phases, product launches, or demand changes." },
  ],

  processLabel: "How We Work",
  processTitle: "Engineering Staffing Workflow",
  processSubtitle:
    "A structured eight-step process ensuring the right engineering talent reaches your team on time.",
  processSteps: [
    { step: "01", title: "Client Requirement", desc: "We analyse your project needs, skill requirements, CAD tools, and deployment timeline." },
    { step: "02", title: "Skill Mapping", desc: "Requirements are mapped to domain expertise, software proficiency, and industry background." },
    { step: "03", title: "Candidate Shortlisting", desc: "Targeted sourcing from our engineering talent pool and validated network." },
    { step: "04", title: "Technical Assessment", desc: "Practical CAD/technical tests and domain knowledge evaluation by engineering specialists." },
    { step: "05", title: "Client Interview", desc: "Shortlisted candidates presented for your technical review and interview." },
    { step: "06", title: "Deployment", desc: "Seamless onboarding and deployment at your site or remote setup within agreed timelines." },
    { step: "07", title: "Payroll & Compliance", desc: "All statutory obligations — PF, ESI, PT, and contracts — managed by Infodra." },
    { step: "08", title: "Continuous Support", desc: "Dedicated coordination, performance reviews, and flexible workforce management ongoing." },
  ],

  industriesLabel: "Sectors We Serve",
  industriesTitle: "Industries Served",
  industriesSubtitle:
    "We staff engineering professionals across all major manufacturing and industrial sectors in India.",
  industries: [
    "Automotive",
    "Manufacturing",
    "Industrial Engineering",
    "Heavy Engineering",
    "Defence",
    "Railways",
    "Energy",
    "Medical Devices",
    "Consumer Products",
  ],

  faqLabel: "Support",
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      q: "What types of engineering professionals can you deploy?",
      a: "We deploy CAD engineers, mechanical designers, manufacturing engineers, quality engineers, validation engineers, technical documentation specialists, PLM administrators, and simulation engineers across multiple software platforms.",
    },
    {
      q: "Do you provide CAD-specific professionals?",
      a: "Yes. We have a dedicated pool of CAD engineers proficient in CATIA V5/V6, Siemens NX, SolidWorks, Creo, AutoCAD, and Autodesk Inventor. We match candidates to your specific software and project requirements.",
    },
    {
      q: "How quickly can engineering resources be deployed?",
      a: "Depending on role complexity and availability, we typically deploy resources within 1–2 weeks from requirement receipt. Urgent requirements are expedited from our active talent pool.",
    },
    {
      q: "Are the professionals on Infodra payroll?",
      a: "Yes. Under our payroll staffing model, all deployed engineering professionals are on Infodra's payroll. We manage salary, PF, ESI, PT, and all statutory compliance obligations on your behalf.",
    },
    {
      q: "Can you support project-based and contract hiring?",
      a: "Absolutely. We offer contract, dedicated, project-based, and permanent hiring models. Contract durations can be tailored to your project phases — from a few months to multi-year deployments.",
    },
    {
      q: "Do you deploy resources for automotive projects?",
      a: "Yes. Automotive engineering is a core strength at Infodra. We have specialists with OEM and Tier-1 experience in CATIA, NX, BIW design, body engineering, and manufacturing engineering.",
    },
    {
      q: "Can you provide remote engineering support?",
      a: "Yes. We offer remote and offshore engineering support for design, documentation, analysis, and PLM administration tasks. Resources work from our facilities or remotely, based on your project needs.",
    },
  ],

  ctaHeading: "Need Engineering Professionals?",
  ctaText:
    "Deploy experienced engineering talent quickly through Infodra — CAD, mechanical, manufacturing, quality, and validation engineers ready for your project.",
  ctaBtn1: "Hire Engineers",
  ctaBtn2: "Contact Us",
};

export default function EngineeringStaffingPage() {
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
