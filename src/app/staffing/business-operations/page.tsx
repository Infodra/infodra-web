import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Handshake,
  Building2,
  Factory,
  Cog,
  TrendingUp,
  BarChart3,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Wifi,
  ShoppingCart,
  Banknote,
  UserCheck,
  PhoneCall,
  Globe,
  BadgeCheck,
  Package,
  Truck,
  ClipboardList,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business & Operations Staffing Services | Infodra Technologies",
  description:
    "Infodra provides Business & Operations Staffing services including HR, Administration, Finance, Customer Support, Sales, Procurement, Logistics, Supply Chain, and Business Operations professionals on contract, payroll, and permanent staffing models.",
  keywords: [
    "Business Staffing",
    "Operations Staffing",
    "Corporate Staffing",
    "HR Staffing",
    "Payroll Staffing",
    "Administrative Staffing",
    "Customer Support Staffing",
    "Finance Staffing",
    "Supply Chain Staffing",
    "Logistics Staffing",
    "Recruitment Services",
    "Contract Staffing",
    "Permanent Staffing",
    "Business Process Staffing",
    "Workforce Solutions",
    "Infodra Technologies",
  ],
  openGraph: {
    title: "Business & Operations Staffing Services | Infodra Technologies",
    description:
      "Deploy skilled business professionals on Infodra payroll — HR, Finance, Admin, Sales, Customer Support, Procurement, Supply Chain, and Operations roles across industries.",
    url: "https://www.infodra.in/staffing/business-operations",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business & Operations Staffing",
  provider: {
    "@type": "Organization",
    name: "Infodra Technologies",
    url: "https://infodra.in",
  },
  description:
    "Infodra Technologies provides Business & Operations Staffing services including HR, Administration, Finance, Customer Support, Sales, Procurement, Logistics, Supply Chain, and Business Operations professionals on contract, payroll, and permanent staffing models.",
  areaServed: "IN",
  serviceType: "Staffing & Recruitment",
};

const businessFunctions = [
  { icon: <BarChart3 className="w-7 h-7 text-emerald-600" />, label: "Business Operations" },
  { icon: <Users className="w-7 h-7 text-emerald-600" />, label: "Human Resources" },
  { icon: <ClipboardList className="w-7 h-7 text-emerald-600" />, label: "Administration" },
  { icon: <PhoneCall className="w-7 h-7 text-emerald-600" />, label: "Customer Service" },
  { icon: <Banknote className="w-7 h-7 text-emerald-600" />, label: "Finance & Accounts" },
  { icon: <TrendingUp className="w-7 h-7 text-emerald-600" />, label: "Sales & Marketing" },
  { icon: <Package className="w-7 h-7 text-emerald-600" />, label: "Procurement" },
  { icon: <Truck className="w-7 h-7 text-emerald-600" />, label: "Supply Chain & Logistics" },
  { icon: <Building2 className="w-7 h-7 text-emerald-600" />, label: "Office Administration" },
  { icon: <Briefcase className="w-7 h-7 text-emerald-600" />, label: "Executive Assistance" },
];

const roles = [
  "Business Analyst", "Operations Executive", "HR Executive", "Recruiter",
  "Administrative Executive", "Customer Success Executive", "Sales Executive",
  "Marketing Executive", "Finance Executive", "Accounts Executive",
  "Procurement Executive", "Logistics Coordinator", "Supply Chain Executive",
  "Office Administrator", "Executive Assistant", "Data Entry Executive", "Back Office Executive",
];

const industries = [
  { icon: <Factory className="w-8 h-8 text-emerald-600" />, label: "Manufacturing" },
  { icon: <Cog className="w-8 h-8 text-emerald-600" />, label: "Engineering" },
  { icon: <Building2 className="w-8 h-8 text-emerald-600" />, label: "Automotive" },
  { icon: <Globe className="w-8 h-8 text-emerald-600" />, label: "Information Technology" },
  { icon: <HeartPulse className="w-8 h-8 text-emerald-600" />, label: "Healthcare" },
  { icon: <Truck className="w-8 h-8 text-emerald-600" />, label: "Logistics" },
  { icon: <ShoppingBag className="w-8 h-8 text-emerald-600" />, label: "Retail" },
  { icon: <Banknote className="w-8 h-8 text-emerald-600" />, label: "Banking & Financial Services" },
  { icon: <GraduationCap className="w-8 h-8 text-emerald-600" />, label: "Education" },
  { icon: <TrendingUp className="w-8 h-8 text-emerald-600" />, label: "Startups & SMEs" },
  { icon: <Wifi className="w-8 h-8 text-emerald-600" />, label: "Telecommunications" },
  { icon: <ShoppingCart className="w-8 h-8 text-emerald-600" />, label: "E-commerce" },
];

const engagementModels = [
  {
    icon: <UserCheck className="w-10 h-10 text-emerald-600" />,
    title: "Dedicated Resource Deployment",
    desc: "Deploy professionals exclusively assigned to your organisation — fully aligned to your workflows, culture, and long-term goals.",
    color: "from-emerald-50/50 to-white hover:border-emerald-400",
  },
  {
    icon: <Clock className="w-10 h-10 text-teal-600" />,
    title: "Contract Staffing",
    desc: "Short and long-term contract staffing solutions to meet project-based, seasonal, or interim workforce requirements with full flexibility.",
    color: "from-teal-50/50 to-white hover:border-teal-400",
  },
  {
    icon: <Shield className="w-10 h-10 text-cyan-600" />,
    title: "Payroll Staffing",
    desc: "Resources deployed on Infodra payroll with complete statutory compliance — PF, ESI, PT, and labour law obligations managed end-to-end.",
    color: "from-cyan-50/50 to-white hover:border-cyan-400",
  },
  {
    icon: <Handshake className="w-10 h-10 text-blue-600" />,
    title: "Permanent Recruitment",
    desc: "End-to-end hiring for full-time positions — from requirement scoping and candidate sourcing to offer management and onboarding support.",
    color: "from-blue-50/50 to-white hover:border-blue-400",
  },
];

const whyInfodra = [
  { icon: <BadgeCheck className="w-8 h-8 text-emerald-600" />, title: "Pre-Screened Professionals", desc: "Every candidate undergoes rigorous skills screening, background checks, and domain validation before deployment." },
  { icon: <Clock className="w-8 h-8 text-emerald-600" />, title: "Faster Hiring", desc: "Accelerated recruitment timelines — from requirement receipt to resource deployment in the shortest possible time." },
  { icon: <Shield className="w-8 h-8 text-emerald-600" />, title: "Payroll Managed by Infodra", desc: "We handle all payroll, statutory compliance, PF, ESI, PT, and labour law obligations so you don't have to." },
  { icon: <TrendingUp className="w-8 h-8 text-emerald-600" />, title: "Flexible Workforce Scaling", desc: "Scale your business workforce up or down based on demand, project phases, or organisational growth needs." },
  { icon: <Globe className="w-8 h-8 text-emerald-600" />, title: "PAN-India Talent Network", desc: "Access a wide network of pre-vetted business professionals across major cities and Tier-2 locations in India." },
  { icon: <Handshake className="w-8 h-8 text-emerald-600" />, title: "Dedicated Account Management", desc: "A dedicated account manager ensures seamless communication, issue resolution, and workforce performance tracking." },
  { icon: <Building2 className="w-8 h-8 text-emerald-600" />, title: "Industry-Specific Recruitment", desc: "We recruit candidates with relevant domain experience — manufacturing, IT, healthcare, logistics, and more." },
  { icon: <ArrowRight className="w-8 h-8 text-emerald-600" />, title: "Quick Turnaround Time", desc: "Rapid mobilisation of shortlisted candidates to meet your business timelines without delays." },
];

const processSteps = [
  { step: "01", title: "Client Requirement", desc: "We understand your business, role requirements, skills, and deployment timeline." },
  { step: "02", title: "Candidate Sourcing", desc: "Targeted sourcing from our PAN-India talent network and database." },
  { step: "03", title: "Technical & HR Screening", desc: "Multi-stage screening — skills test, HR interview, and domain assessment." },
  { step: "04", title: "Client Interview", desc: "Shortlisted candidates are presented for your review and interview." },
  { step: "05", title: "Selection & Offer", desc: "Offer management, negotiation support, and pre-joining coordination." },
  { step: "06", title: "Resource Deployment", desc: "Seamless onboarding at your site or remote setup within agreed timelines." },
  { step: "07", title: "Payroll & Compliance", desc: "All statutory obligations — PF, ESI, PT, and contracts — managed by Infodra." },
  { step: "08", title: "Ongoing Support", desc: "Dedicated support, performance reviews, and flexible workforce management." },
];

const frequentRoles = [
  { role: "Business Analyst", desc: "Analyse business processes, identify improvement areas, and support data-driven decision making." },
  { role: "HR Executive", desc: "Manage recruitment, employee records, onboarding, compliance, and HR operations." },
  { role: "Customer Support Executive", desc: "Handle inbound/outbound customer queries, escalations, and relationship management." },
  { role: "Sales Executive", desc: "Drive business development, lead generation, client acquisition, and sales target achievement." },
  { role: "Marketing Executive", desc: "Execute digital and offline marketing campaigns, content, and brand communication activities." },
  { role: "Office Administrator", desc: "Manage day-to-day office operations, vendor coordination, and administrative support." },
  { role: "Procurement Executive", desc: "Handle vendor sourcing, purchase orders, negotiations, and supply chain coordination." },
  { role: "Finance Executive", desc: "Support accounts payable/receivable, reconciliations, financial reporting, and MIS." },
  { role: "Accounts Executive", desc: "Day-to-day bookkeeping, invoicing, TDS, GST filing, and financial compliance support." },
  { role: "Operations Executive", desc: "Support operational workflows, coordinate cross-functional teams, and drive process efficiency." },
  { role: "Logistics Coordinator", desc: "Coordinate freight, dispatch, inventory, and supply chain logistics for smooth operations." },
  { role: "Supply Chain Executive", desc: "Manage end-to-end supply chain activities — planning, procurement, logistics, and delivery." },
];

const faqs = [
  { q: "How quickly can resources be deployed?", a: "Depending on the role and availability, we typically deploy resources within 1–3 weeks from requirement receipt. Urgent requirements may be fulfilled faster from our active talent pool." },
  { q: "Are employees on Infodra payroll?", a: "Yes. Under our payroll staffing model, all deployed professionals are on Infodra's payroll. We manage salary disbursement, PF, ESI, PT, and all applicable statutory compliance." },
  { q: "Do you support onsite deployment?", a: "Yes. We deploy resources directly at your office, facility, or client site anywhere in India. Our team handles onboarding logistics and ensures a smooth integration." },
  { q: "Can resources work remotely?", a: "Yes. We support remote and hybrid deployment models. Resources can work from their home location or Infodra facilities, based on your business requirements." },
  { q: "Do you provide contract staffing?", a: "Yes. We offer short-term and long-term contract staffing across all business and operations roles. Contract durations can be customised to match your project or operational timeline." },
  { q: "Can contract resources become permanent employees?", a: "Yes. We offer a contract-to-permanent conversion option. If you wish to absorb a deployed resource as a full-time employee, we facilitate the transition smoothly." },
  { q: "Do you recruit across India?", a: "Yes. Infodra has a PAN-India talent network covering all major metro cities, Tier-2, and Tier-3 locations, enabling us to fulfil requirements across geographies." },
];

export default function BusinessOperationsStaffingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <section className="relative min-h-[580px] flex items-center bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/40 text-gray-900 overflow-hidden">
          <div className="absolute top-32 right-32 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
          <div className="absolute bottom-0 left-16 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-1.5 mb-6">
                <Briefcase className="w-3.5 h-3.5" /> Business &amp; Operations Staffing
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
                Business &amp; Operations{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Staffing Solutions
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl leading-relaxed">
                Providing skilled business professionals on Infodra payroll to support corporate operations, administration, finance, HR, customer service, procurement, sales, and supply chain functions across industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-emerald-500 text-white px-10 py-4 rounded-lg font-semibold text-lg tracking-wide hover:bg-emerald-600 hover:shadow-2xl transition duration-200 shadow-lg"
                >
                  Get Professionals
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-gray-900 text-gray-900 px-8 py-3.5 rounded-lg font-semibold text-lg tracking-wide hover:bg-gray-100 transition duration-200"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-10 flex flex-col gap-5 shadow-xl">
                {[
                  { icon: <Users className="w-6 h-6 text-emerald-600" />, label: "HR & Administration Professionals" },
                  { icon: <BarChart3 className="w-6 h-6 text-teal-600" />, label: "Finance & Accounts Executives" },
                  { icon: <PhoneCall className="w-6 h-6 text-emerald-600" />, label: "Customer Service & Sales Teams" },
                  { icon: <Truck className="w-6 h-6 text-teal-600" />, label: "Supply Chain & Logistics Staff" },
                  { icon: <Package className="w-6 h-6 text-emerald-600" />, label: "Procurement & Operations Experts" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white rounded-xl px-5 py-3 shadow-sm">
                    <div className="p-2 bg-emerald-50 rounded-lg">{item.icon}</div>
                    <span className="font-semibold text-gray-800 text-sm">{item.label}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-auto flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Business Functions We Support ── */}
        <section className="py-20 md:py-28 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2">Functional Coverage</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Business Functions We Support</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We deploy skilled professionals across all core business and corporate functions.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {businessFunctions.map((fn, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-gray-100 bg-gradient-to-br from-emerald-50/40 to-white hover:border-emerald-300 hover:shadow-lg transition-all text-center group"
                >
                  <div className="p-3 bg-emerald-100 rounded-xl group-hover:bg-emerald-200 transition-colors">
                    {fn.icon}
                  </div>
                  <span className="font-semibold text-gray-800 text-sm leading-tight">{fn.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Roles We Deploy ── */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2">Talent Pool</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Roles We Deploy</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Pre-screened, domain-experienced professionals ready for immediate deployment.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {roles.map((role, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl border-2 border-gray-100 bg-white hover:border-emerald-300 hover:shadow-md transition-all group"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="font-medium text-gray-800 text-sm">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industries We Serve ── */}
        <section className="py-20 md:py-28 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2">Industry Coverage</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We staff business professionals across a wide range of industries and sectors.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {industries.map((ind, i) => (
                <div key={i} className="flex flex-col items-center gap-3 group cursor-default">
                  <div className="p-4 bg-emerald-50 rounded-2xl group-hover:bg-emerald-100 transition-colors shadow-sm">
                    {ind.icon}
                  </div>
                  <span className="font-semibold text-gray-800 text-sm text-center leading-tight">{ind.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Engagement Models ── */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-emerald-50/30 via-white to-teal-50/20 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2">Flexible Models</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Engagement Models</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the staffing model that best fits your organisation's needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {engagementModels.map((model, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-start p-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-br ${model.color} hover:shadow-xl transition-all`}
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm mb-5">{model.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{model.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{model.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Infodra ── */}
        <section className="py-20 md:py-28 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2">Our Advantage</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Infodra</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Infodra is your trusted partner for reliable, compliant, and scalable business staffing.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyInfodra.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col p-7 rounded-2xl border-2 border-gray-100 bg-white hover:border-emerald-300 hover:shadow-lg transition-all"
                >
                  <div className="p-3 bg-emerald-50 rounded-xl w-fit mb-4">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Staffing Process ── */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2">How We Work</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Staffing Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A proven end-to-end process ensuring the right professionals reach your team on time.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {processSteps.map((s, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg relative z-10">
                    {s.step}
                  </div>
                  {i < processSteps.length - 1 && i % 4 !== 3 && (
                    <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-emerald-200 z-0" />
                  )}
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Frequently Hired Positions (Accordion) ── */}
        <section className="py-20 md:py-28 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2">Popular Roles</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Hired Positions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the most commonly requested roles we deploy across business and operations functions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {frequentRoles.map((item, i) => (
                <details
                  key={i}
                  className="group border-2 border-gray-100 rounded-xl overflow-hidden hover:border-emerald-200 transition-colors"
                >
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer select-none list-none bg-white hover:bg-emerald-50/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">{item.role}</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-5 pt-2 bg-emerald-50/30 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2">Support</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about our Business &amp; Operations Staffing services.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border-2 border-gray-100 rounded-xl overflow-hidden hover:border-emerald-200 transition-colors"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer select-none list-none bg-white hover:bg-emerald-50/50 transition-colors">
                    <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-5 pt-2 bg-emerald-50/30 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Looking for Skilled Business Professionals?
            </h2>
            <p className="text-lg text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Scale your business with experienced operations, HR, finance, customer support, procurement, logistics, and administrative professionals deployed by Infodra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-emerald-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-emerald-50 hover:shadow-2xl transition duration-200 shadow-lg"
              >
                Request Staffing Support
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-white/10 transition duration-200"
              >
                Talk to Our Staffing Team
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
