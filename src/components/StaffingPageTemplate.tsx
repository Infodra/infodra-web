import Link from "next/link";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Wrench,
  Code2,
  Users,
  Briefcase,
  FileText,
  Cog,
  Factory,
  Shield,
  Globe,
  Cloud,
  Monitor,
  Smartphone,
  Database,
  BarChart3,
  UserCheck,
  Clock,
  Handshake,
  BadgeCheck,
  TrendingUp,
  Building2,
  Cpu,
  GraduationCap,
  Zap,
  Car,
  Plane,
  Package,
  Layers,
  Brain,
  Wifi,
  Banknote,
  ShoppingBag,
  PenTool,
  BookOpen,
  Hammer,
  Server,
  type LucideIcon,
} from "lucide-react";

// ─── Data Types ────────────────────────────────────────────────────────────────

export interface StaffingPageData {
  theme: "sky" | "indigo";
  badge: string;

  // Hero
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroCta1: string;
  heroCta2: string;
  heroPreview: string[];

  // Roles
  rolesLabel: string;
  rolesTitle: string;
  rolesSubtitle: string;
  roles: { title: string; desc: string }[];

  // Domains
  domainsLabel: string;
  domainsTitle: string;
  domainsSubtitle: string;
  domains: string[];

  // Stack / Tools
  stackLabel: string;
  stackTitle: string;
  stackSubtitle: string;
  stack: string[];

  // Engagement models
  modelsLabel: string;
  modelsTitle: string;
  models: { title: string; desc: string }[];

  // Why Infodra
  whyLabel: string;
  whyTitle: string;
  whyItems: { title: string; desc: string }[];

  // Process
  processLabel: string;
  processTitle: string;
  processSubtitle: string;
  processSteps: { step: string; title: string; desc: string }[];

  // Industries
  industriesLabel: string;
  industriesTitle: string;
  industriesSubtitle: string;
  industries: string[];

  // FAQ
  faqLabel: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];

  // CTA
  ctaHeading: string;
  ctaText: string;
  ctaBtn1: string;
  ctaBtn2: string;
}

// ─── Theme Configs ─────────────────────────────────────────────────────────────

const T = {
  sky: {
    badge: "text-sky-700 bg-sky-100 border border-sky-200",
    primaryBtn: "bg-sky-500 hover:bg-sky-600",
    label: "text-sky-600",
    check: "text-sky-500",
    stepBg: "bg-sky-500",
    iconBg: "bg-sky-100",
    iconHoverBg: "group-hover:bg-sky-200",
    iconColor: "text-sky-600",
    cardHover: "hover:border-sky-300",
    heroFrom: "from-sky-50/60",
    heroTo: "to-cyan-50/40",
    blob1: "bg-sky-300",
    blob2: "bg-cyan-300",
    heroCardBg: "from-sky-100 to-cyan-100",
    heroIconBg: "bg-sky-50",
    ctaBg: "from-sky-600 via-sky-700 to-cyan-700",
    altSection: "from-sky-50/30 via-white to-cyan-50/20",
    connector: "bg-sky-200",
    stackTag: "bg-sky-100 text-sky-800 border-sky-200",
    titleGradient: "from-sky-500 to-cyan-500",
  },
  indigo: {
    badge: "text-indigo-700 bg-indigo-100 border border-indigo-200",
    primaryBtn: "bg-indigo-500 hover:bg-indigo-600",
    label: "text-indigo-600",
    check: "text-indigo-500",
    stepBg: "bg-indigo-500",
    iconBg: "bg-indigo-100",
    iconHoverBg: "group-hover:bg-indigo-200",
    iconColor: "text-indigo-600",
    cardHover: "hover:border-indigo-300",
    heroFrom: "from-indigo-50/60",
    heroTo: "to-purple-50/40",
    blob1: "bg-indigo-300",
    blob2: "bg-purple-300",
    heroCardBg: "from-indigo-100 to-purple-100",
    heroIconBg: "bg-indigo-50",
    ctaBg: "from-indigo-600 via-indigo-700 to-purple-700",
    altSection: "from-indigo-50/30 via-white to-purple-50/20",
    connector: "bg-indigo-200",
    stackTag: "bg-indigo-100 text-indigo-800 border-indigo-200",
    titleGradient: "from-indigo-500 to-purple-500",
  },
};

// ─── Icon Pools ────────────────────────────────────────────────────────────────

const rolePool: LucideIcon[] = [
  Wrench, Code2, Users, Briefcase, FileText, Cog, Factory, Shield,
  Globe, Cloud, Monitor, Smartphone, Database, BarChart3, PenTool,
  BookOpen, Hammer, Layers, Brain, Cpu, Package, Wifi, Server, UserCheck,
];

const domainPool: LucideIcon[] = [
  Car, Factory, Cog, Building2, Package, Briefcase, Plane, Shield,
  Zap, Globe, Monitor, Cloud, GraduationCap, ShoppingBag, Banknote, Wifi,
];

const modelPool: LucideIcon[] = [
  UserCheck, Clock, Shield, Handshake, Monitor, Users, Globe,
];

const whyPool: LucideIcon[] = [
  BadgeCheck, Clock, Shield, TrendingUp, Globe, Handshake, Building2, Cpu,
];

const industryPool: LucideIcon[] = [
  Car, Factory, Cog, Building2, Shield, Cpu, Zap, Package, Globe,
  Monitor, Banknote, GraduationCap, ShoppingBag, Wifi, Brain, TrendingUp,
];

function RIcon({ pool, index, cls }: { pool: LucideIcon[]; index: number; cls: string }) {
  const Icon = pool[index % pool.length];
  return <Icon className={cls} />;
}

// ─── Template Component ────────────────────────────────────────────────────────

export default function StaffingPageTemplate({ data }: { data: StaffingPageData }) {
  const t = T[data.theme];

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section
        className={`relative min-h-[580px] flex items-center bg-gradient-to-br ${t.heroFrom} via-white ${t.heroTo} text-gray-900 overflow-hidden`}
      >
        <div className={`absolute top-32 right-32 w-80 h-80 ${t.blob1} rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse`} />
        <div className={`absolute bottom-0 left-16 w-96 h-96 ${t.blob2} rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse`} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className={`inline-flex items-center gap-2 text-xs font-semibold rounded-full px-4 py-1.5 mb-6 ${t.badge}`}>
              <Briefcase className="w-3.5 h-3.5" /> {data.badge}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
              {data.heroTitle}{" "}
              <span className={`bg-gradient-to-r ${t.titleGradient} bg-clip-text text-transparent`}>
                {data.heroHighlight}
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl leading-relaxed">
              {data.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className={`${t.primaryBtn} text-white px-10 py-4 rounded-lg font-semibold text-lg tracking-wide hover:shadow-2xl transition duration-200 shadow-lg`}
              >
                {data.heroCta1}
              </Link>
              <Link
                href="/contact"
                className="border-2 border-gray-900 text-gray-900 px-8 py-3.5 rounded-lg font-semibold text-lg tracking-wide hover:bg-gray-100 transition duration-200"
              >
                {data.heroCta2}
              </Link>
            </div>
          </div>

          {/* Preview cards */}
          <div className="flex justify-center lg:justify-end">
            <div className={`w-full max-w-md bg-gradient-to-br ${t.heroCardBg} rounded-2xl p-8 flex flex-col gap-4 shadow-xl`}>
              {data.heroPreview.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white rounded-xl px-5 py-3.5 shadow-sm">
                  <div className={`p-2 ${t.heroIconBg} rounded-lg`}>
                    <RIcon pool={rolePool} index={i} cls={`w-5 h-5 ${t.iconColor}`} />
                  </div>
                  <span className="font-semibold text-gray-800 text-sm">{item}</span>
                  <CheckCircle2 className={`w-4 h-4 ${t.check} ml-auto shrink-0`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Roles We Deploy ── */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className={`${t.label} font-semibold tracking-wider uppercase text-sm mb-2`}>{data.rolesLabel}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{data.rolesTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{data.rolesSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.roles.map((role, i) => (
              <div
                key={i}
                className={`group flex flex-col p-6 rounded-2xl border-2 border-gray-100 bg-white ${t.cardHover} hover:shadow-lg transition-all`}
              >
                <div className={`p-3 ${t.iconBg} ${t.iconHoverBg} rounded-xl w-fit mb-4 transition-colors`}>
                  <RIcon pool={rolePool} index={i} cls={`w-6 h-6 ${t.iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{role.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Domains / Expertise ── */}
      <section className={`py-20 md:py-28 bg-gradient-to-br ${t.altSection} border-t border-gray-100`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className={`${t.label} font-semibold tracking-wider uppercase text-sm mb-2`}>{data.domainsLabel}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{data.domainsTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{data.domainsSubtitle}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {data.domains.map((domain, i) => (
              <div
                key={i}
                className={`group flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-gray-100 bg-white ${t.cardHover} hover:shadow-md transition-all text-center cursor-default`}
              >
                <div className={`p-3 ${t.iconBg} ${t.iconHoverBg} rounded-xl transition-colors`}>
                  <RIcon pool={domainPool} index={i} cls={`w-7 h-7 ${t.iconColor}`} />
                </div>
                <span className="font-semibold text-gray-800 text-sm leading-tight">{domain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech / Software Stack ── */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className={`${t.label} font-semibold tracking-wider uppercase text-sm mb-2`}>{data.stackLabel}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{data.stackTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{data.stackSubtitle}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {data.stack.map((item, i) => (
              <span
                key={i}
                className={`px-5 py-2.5 rounded-full border font-semibold text-sm ${t.stackTag} hover:shadow-md transition-shadow cursor-default`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement Models ── */}
      <section className={`py-20 md:py-28 bg-gradient-to-br ${t.altSection} border-t border-gray-100`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className={`${t.label} font-semibold tracking-wider uppercase text-sm mb-2`}>{data.modelsLabel}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{data.modelsTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.models.map((model, i) => (
              <div
                key={i}
                className={`flex flex-col p-8 rounded-2xl border-2 border-gray-100 bg-white ${t.cardHover} hover:shadow-xl transition-all`}
              >
                <div className={`p-3 ${t.iconBg} rounded-xl w-fit mb-5`}>
                  <RIcon pool={modelPool} index={i} cls={`w-8 h-8 ${t.iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{model.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Infodra ── */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className={`${t.label} font-semibold tracking-wider uppercase text-sm mb-2`}>{data.whyLabel}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{data.whyTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.whyItems.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col p-7 rounded-2xl border-2 border-gray-100 bg-white ${t.cardHover} hover:shadow-lg transition-all`}
              >
                <div className={`p-3 ${t.iconBg} rounded-xl w-fit mb-4`}>
                  <RIcon pool={whyPool} index={i} cls={`w-7 h-7 ${t.iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Staffing Process ── */}
      <section className={`py-20 md:py-28 bg-gradient-to-br ${t.altSection} border-t border-gray-100`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className={`${t.label} font-semibold tracking-wider uppercase text-sm mb-2`}>{data.processLabel}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{data.processTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{data.processSubtitle}</p>
          </div>

          {/* Row 1: steps 1-4 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {data.processSteps.slice(0, 4).map((s, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className={`w-14 h-14 ${t.stepBg} text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg z-10`}>
                  {s.step}
                </div>
                {i < 3 && (
                  <div className={`hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 ${t.connector} z-0`} />
                )}
                <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          {/* Row 2: steps 5-8 */}
          {data.processSteps.length > 4 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.processSteps.slice(4).map((s, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className={`w-14 h-14 ${t.stepBg} text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg z-10`}>
                    {s.step}
                  </div>
                  {i < 3 && (
                    <div className={`hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 ${t.connector} z-0`} />
                  )}
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Industries Served ── */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className={`${t.label} font-semibold tracking-wider uppercase text-sm mb-2`}>{data.industriesLabel}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{data.industriesTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{data.industriesSubtitle}</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
            {data.industries.map((ind, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group cursor-default">
                <div className={`p-4 ${t.iconBg} ${t.iconHoverBg} rounded-2xl shadow-sm transition-colors`}>
                  <RIcon pool={industryPool} index={i} cls={`w-8 h-8 ${t.iconColor}`} />
                </div>
                <span className="font-semibold text-gray-800 text-xs text-center leading-tight">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-20 md:py-28 bg-gradient-to-br ${t.altSection} border-t border-gray-100`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className={`${t.label} font-semibold tracking-wider uppercase text-sm mb-2`}>{data.faqLabel}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{data.faqTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.faqs.map((faq, i) => (
              <details
                key={i}
                className={`group border-2 border-gray-100 rounded-xl overflow-hidden ${t.cardHover} hover:shadow-md transition-all`}
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer select-none list-none bg-white hover:bg-gray-50/80 transition-colors">
                  <span className="font-semibold text-gray-900 pr-4 text-sm leading-snug">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180 shrink-0" />
                </summary>
                <div className="px-6 pb-5 pt-2 bg-gray-50/50 border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={`py-20 md:py-28 bg-gradient-to-br ${t.ctaBg}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {data.ctaHeading}
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {data.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 hover:shadow-2xl transition duration-200 shadow-lg"
            >
              {data.ctaBtn1}
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-white/10 transition duration-200"
            >
              {data.ctaBtn2}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
