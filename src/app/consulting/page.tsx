import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Cog,
  Factory,
  GanttChartSquare,
  GraduationCap,
  Handshake,
  Network,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Consulting & Operational Excellence | Infodra Technologies",
  description:
    "Helping manufacturers and enterprises improve productivity, quality, operational efficiency, and business performance through engineering expertise, process optimization, and strategic consulting.",
  keywords: [
    "engineering consulting",
    "operational excellence",
    "process optimization",
    "supplier development",
    "vendor audits",
    "quality management",
    "cost optimization",
    "industrial workshop",
    "Infodra Technologies",
  ],
  openGraph: {
    title: "Engineering Consulting & Operational Excellence | Infodra Technologies",
    description:
      "Consulting services to improve manufacturing performance, supplier capability, quality standards, and operational efficiency.",
    url: "https://infodratechnologies.com/consulting",
    type: "website",
  },
};

const consultingServices = [
  {
    icon: <Cog className="w-10 h-10 text-amber-600" />,
    title: "Manufacturing Process Optimization",
    points: [
      "Process improvement initiatives",
      "Productivity enhancement",
      "Operational efficiency programs",
    ],
    card: "from-amber-50/50 to-white hover:border-amber-400",
  },
  {
    icon: <Network className="w-10 h-10 text-yellow-600" />,
    title: "Supplier Development & Vendor Audits",
    points: [
      "Supplier performance assessment",
      "Vendor capability development",
      "Audit support and compliance reviews",
    ],
    card: "from-yellow-50/50 to-white hover:border-yellow-400",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-orange-600" />,
    title: "Quality Management & Improvement",
    points: [
      "Quality improvement projects",
      "Root cause analysis",
      "Corrective and preventive actions",
    ],
    card: "from-orange-50/50 to-white hover:border-orange-400",
  },
  {
    icon: <Target className="w-10 h-10 text-lime-600" />,
    title: "Localization & Cost Optimization",
    points: [
      "Localization support",
      "Cost reduction initiatives",
      "Value engineering",
    ],
    card: "from-lime-50/50 to-white hover:border-lime-400",
  },
  {
    icon: <GanttChartSquare className="w-10 h-10 text-cyan-600" />,
    title: "Project Management & Technical Assistance",
    points: [
      "Project planning",
      "Engineering coordination",
      "Technical execution support",
    ],
    card: "from-cyan-50/50 to-white hover:border-cyan-400",
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-indigo-600" />,
    title: "Industrial Workshop & Skill Development",
    points: [
      "Technical workshop",
      "Workforce development",
      "Capability enhancement",
    ],
    card: "from-indigo-50/50 to-white hover:border-indigo-400",
  },
];

const industries = [
  {
    icon: <Building2 className="w-9 h-9 text-amber-600" />,
    title: "Automotive",
    description:
      "Process and quality improvement support for OEMs, Tier suppliers, and component ecosystems.",
  },
  {
    icon: <Factory className="w-9 h-9 text-yellow-600" />,
    title: "Manufacturing",
    description:
      "Operational excellence programs across production, quality, maintenance, and supply chains.",
  },
  {
    icon: <Wrench className="w-9 h-9 text-orange-600" />,
    title: "Industrial Equipment",
    description:
      "Engineering consulting for equipment lifecycle performance, reliability, and efficiency.",
  },
  {
    icon: <BriefcaseBusiness className="w-9 h-9 text-lime-600" />,
    title: "Engineering Services",
    description:
      "Execution support for design, validation, project delivery, and technical coordination.",
  },
  {
    icon: <BarChart3 className="w-9 h-9 text-cyan-600" />,
    title: "Technology & Digital Enterprises",
    description:
      "Cross-functional consulting to align digital platforms with measurable operational outcomes.",
  },
];

const differentiators = [
  "Experienced Industry Professionals",
  "Engineering & Manufacturing Expertise",
  "Quality-Focused Approach",
  "Customized Business Solutions",
  "Cost-Effective Delivery",
  "Customer-Centric Support",
];

const businessImpact = [
  { kpi: "KPI 01", value: "Improved Productivity", icon: <TrendingUp className="w-7 h-7 text-amber-600" /> },
  { kpi: "KPI 02", value: "Enhanced Quality Performance", icon: <BadgeCheck className="w-7 h-7 text-yellow-600" /> },
  { kpi: "KPI 03", value: "Reduced Operational Costs", icon: <Target className="w-7 h-7 text-orange-600" /> },
  { kpi: "KPI 04", value: "Faster Project Execution", icon: <GanttChartSquare className="w-7 h-7 text-lime-600" /> },
  { kpi: "KPI 05", value: "Stronger Supplier Ecosystem", icon: <Network className="w-7 h-7 text-cyan-600" /> },
  { kpi: "KPI 06", value: "Sustainable Growth", icon: <Factory className="w-7 h-7 text-indigo-600" /> },
];

const engagementModels = [
  {
    icon: <Handshake className="w-10 h-10 text-amber-600" />,
    title: "Consulting Engagement",
    description: "Short-term assessments and improvement initiatives.",
  },
  {
    icon: <ArrowRight className="w-10 h-10 text-yellow-600" />,
    title: "Project-Based Support",
    description:
      "Execution-focused engineering and operational projects.",
  },
  {
    icon: <Users className="w-10 h-10 text-orange-600" />,
    title: "Dedicated Expert Support",
    description: "Long-term consulting and technical assistance.",
  },
];

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[560px] flex items-center bg-gradient-to-br from-amber-50/60 via-white to-yellow-50/40 text-gray-900 overflow-hidden">
        <div className="absolute top-32 right-32 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
              Manufacturing <span className="text-amber-500">Excellence</span> <span className="text-amber-500">Consulting</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl leading-relaxed">
              Helping manufacturers and enterprises improve productivity,
              quality, operational efficiency, and business performance through
              engineering expertise, process optimization, and strategic
              consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-amber-500 text-white px-10 py-4 rounded-lg font-semibold text-xl tracking-wider hover:bg-amber-600 hover:shadow-2xl active:shadow-lg transition duration-200 shadow-lg"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-gray-900 text-gray-900 px-8 py-3.5 rounded-lg font-semibold text-lg tracking-wider hover:bg-gray-100 active:bg-gray-200 transition duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/consult.png"
              alt="Modern manufacturing plant with process optimization dashboard and engineering collaboration"
              width={700}
              height={570}
              className="rounded-2xl object-contain drop-shadow-xl w-full max-w-[700px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">
            Overview
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming Operations Through Engineering Excellence
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Infodra Technologies provides consulting and operational excellence
            services to help organizations improve manufacturing performance,
            supplier capability, quality standards, cost efficiency, and
            project execution. Our team combines engineering expertise with
            practical industry experience to deliver measurable business
            outcomes.
          </p>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Our Consulting Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Practical, Outcome-Focused Consulting Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service) => (
              <div
                key={service.title}
                className={`group p-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-br ${service.card} hover:shadow-xl transition-all`}
              >
                <div className="mb-5">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2.5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm">
                      <BadgeCheck className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Industries We Support
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for Cross-Industry Operational Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="p-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-amber-50/40 to-white hover:border-amber-400 hover:shadow-xl transition-all"
              >
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Infodra */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Why Choose Infodra
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted Partner for Operational Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={item}
                className="p-8 rounded-2xl border-2 border-gray-200 bg-white hover:border-amber-400 hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Business Impact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              KPI-Focused Outcomes That Drive Performance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our consulting approach is designed to improve core operational
              metrics that influence quality, cost, speed, and long-term growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessImpact.map((impact) => (
              <div
                key={impact.value}
                className="group p-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-amber-50/40 to-white hover:border-amber-400 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold tracking-widest uppercase text-amber-700 bg-amber-100 px-3 py-1.5 rounded-full">
                    {impact.kpi}
                  </span>
                  {impact.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  {impact.value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Engagement Model
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Flexible Ways to Partner with Infodra
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="flex flex-col items-center text-center p-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-amber-50/40 to-white hover:border-amber-400 hover:shadow-xl transition-all"
              >
                <div className="mb-4">{model.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {model.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-amber-50/60 via-white to-yellow-50/40 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Improve Operational Performance?
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Partner with Infodra Technologies to drive operational excellence,
            optimize manufacturing processes, strengthen supplier capability,
            and achieve sustainable business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-500 text-white px-10 py-4 rounded-lg font-semibold text-xl tracking-wider hover:bg-amber-600 hover:shadow-2xl active:shadow-lg transition duration-200 shadow-lg"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-gray-900 text-gray-900 px-8 py-3.5 rounded-lg font-semibold text-lg tracking-wider hover:bg-gray-100 active:bg-gray-200 transition duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
