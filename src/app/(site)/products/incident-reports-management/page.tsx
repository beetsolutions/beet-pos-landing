import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Incident Reports Management",
    description: "Document and manage workplace incidents with BEET POS. Track safety issues, employee incidents, customer complaints, and security events with comprehensive reporting and analytics.",
    openGraph: {
        title: "Incident Reports Management - BEET POS",
        description: "Track and manage workplace incidents with comprehensive reporting tools.",
        images: ['/images/hero/beetpos.png'],
    },
};

// Core Incident Management Features
const incidentFeatures = [
  {
    icon: "📋",
    iconLabel: "Clipboard",
    title: "Quick Reporting",
    description: "Report incidents instantly with intuitive forms. Capture all relevant details while they're fresh.",
  },
  {
    icon: "🔍",
    iconLabel: "Magnifying glass",
    title: "Detailed Documentation",
    description: "Attach photos, videos, and witness statements. Build comprehensive incident records.",
  },
  {
    icon: "🔔",
    iconLabel: "Bell",
    title: "Automated Alerts",
    description: "Notify management immediately when critical incidents occur. Stay informed in real-time.",
  },
  {
    icon: "📊",
    iconLabel: "Bar chart",
    title: "Analytics & Trends",
    description: "Identify patterns and prevent future incidents with powerful analytics and trend reports.",
  },
  {
    icon: "🔒",
    iconLabel: "Lock",
    title: "Secure Storage",
    description: "Keep sensitive incident data secure with encrypted storage and role-based access controls.",
  },
  {
    icon: "📄",
    iconLabel: "Document",
    title: "Compliance Ready",
    description: "Generate reports that meet regulatory requirements. Stay compliant with industry standards.",
  },
];

// Detailed product sections
const detailedFeatures = [
  {
    title: "Instant Incident Reporting",
    description: "Document incidents as they happen with our streamlined reporting interface. Whether it's a workplace injury, customer complaint, or safety hazard, capture all critical information in seconds from any device.",
    image: "/images/hero/beetpos.png",
    features: [
      "Mobile-friendly incident reporting forms",
      "Photo and video evidence capture",
      "GPS location and timestamp tracking",
      "Witness statement collection",
      "Severity level classification",
    ],
  },
  {
    title: "Comprehensive Incident Types",
    description: "Track all types of incidents in one centralized system. From minor safety issues to major security events, organize and manage every incident category with customizable fields and workflows.",
    image: "/images/hero/beetpos.png",
    features: [
      "Employee injuries and accidents",
      "Customer complaints and disputes",
      "Safety hazards and near-misses",
      "Security breaches and theft",
      "Equipment damage and malfunctions",
    ],
  },
  {
    title: "Automated Investigation Workflows",
    description: "Streamline your incident investigation process with automated workflows. Assign investigators, track progress, and ensure timely resolution with built-in task management and notifications.",
    image: "/images/hero/beetpos.png",
    features: [
      "Automatic case assignment",
      "Investigation status tracking",
      "Action item management",
      "Follow-up reminders",
      "Resolution documentation",
    ],
  },
  {
    title: "Powerful Analytics Dashboard",
    description: "Turn incident data into actionable insights. Identify trends, spot recurring issues, and make data-driven decisions to improve workplace safety and reduce incidents over time.",
    image: "/images/hero/beetpos.png",
    features: [
      "Real-time incident dashboards",
      "Trend analysis and pattern detection",
      "Location-based incident mapping",
      "Custom report generation",
      "Export to PDF and Excel",
    ],
  },
];

// Benefits section
const benefits = [
  {
    title: "Reduce Incidents",
    description: "Identify patterns and implement preventive measures to reduce workplace incidents.",
    stat: "45%",
    statLabel: "Fewer Incidents",
  },
  {
    title: "Faster Response",
    description: "Respond to incidents quickly with real-time notifications and mobile access.",
    stat: "3x",
    statLabel: "Faster Resolution",
  },
  {
    title: "Improve Compliance",
    description: "Meet regulatory requirements with comprehensive documentation and reporting.",
    stat: "100%",
    statLabel: "Compliance Rate",
  },
  {
    title: "Save Time",
    description: "Automate incident tracking and eliminate manual paperwork and spreadsheets.",
    stat: "15hr",
    statLabel: "Saved Monthly",
  },
];

const IncidentReportsManagementPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className='relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-red-900'>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-red-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-12 relative z-10">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            {/* Badge */}
                            <div className="flex lg:justify-start justify-center mb-6">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-600/10 to-orange-600/10 border border-red-600/20 backdrop-blur-sm">
                                    <span className="text-sm font-medium bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                                        <span aria-hidden="true">📋</span> Incident Reports Management
                                    </span>
                                </div>
                            </div>
                            
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-black dark:text-white lg:text-start text-center leading-tight">
                                Document & Manage{" "}
                                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-extrabold">
                                    Workplace Incidents
                                </span>
                            </h1>
                            <p className='text-gray-600 dark:text-gray-300 lg:text-xl font-normal mb-10 lg:text-start text-center'>
                                Protect your business and employees with comprehensive incident reporting. Track safety issues, document events, and maintain compliance with powerful analytics and automated workflows.
                            </p>
                            <div className='flex flex-col sm:flex-row gap-4 lg:justify-start justify-center'>
                                <Link href='/request-demo' className='text-xl font-medium rounded-full text-white py-5 px-10 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/40 transition-all duration-300 text-center'>
                                    Get a Demo
                                </Link>
                                <Link href='/pricing' className='flex border border-red-600 justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-red-600 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 transition-all duration-300'>
                                    See Pricing
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-6 flex justify-center relative'>
                            <Image src="/images/hero/beetpos.png" alt="Incident Reports Management" width={1000} height={805} className="w-full h-auto rounded-3xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="bg-primary/15 py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-14">
                        <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
                            Core Features
                        </p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
                            Complete Incident Management Solution
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {incidentFeatures.map((feature, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-3xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="text-4xl mb-4" aria-hidden="true">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl text-black dark:text-white font-semibold mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-base font-normal text-black/50 dark:text-white/50">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Features Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
                            Powerful Capabilities
                        </p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-4">
                            Built for Restaurant Safety
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 lg:text-xl max-w-2xl mx-auto">
                            From minor incidents to major emergencies, BEET POS provides all the tools you need to document, investigate, and prevent workplace incidents.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {detailedFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                            >
                                <div className={cn("col-span-6", index % 2 === 1 && "lg:order-2")}>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10 rounded-3xl blur-2xl"></div>
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            width={600}
                                            height={400}
                                            className="relative w-full h-auto rounded-3xl shadow-xl"
                                        />
                                    </div>
                                </div>
                                <div className={cn("col-span-6", index % 2 === 1 && "lg:order-1")}>
                                    <h3 className="text-2xl lg:text-4xl font-bold text-black dark:text-white mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                        {feature.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {feature.features.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <div className="rounded-full p-1 bg-gradient-to-r from-red-600 to-orange-600">
                                                    <Check className="h-4 w-4 text-white" />
                                                </div>
                                                <span className="text-base text-gray-700 dark:text-gray-300">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-br from-red-600 to-orange-600 text-white">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                            Measurable Safety Improvements
                        </h2>
                        <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                            Join thousands of restaurants that have improved workplace safety and reduced incidents with BEET POS.
                        </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="text-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300">
                                    <div className="text-5xl lg:text-6xl font-bold mb-2">
                                        {benefit.stat}
                                    </div>
                                    <div className="text-lg mb-4 opacity-90">
                                        {benefit.statLabel}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm opacity-80">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose BEET Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
                            Why BEET Incident Management
                        </p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-4">
                            Protect What Matters Most
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-lg">
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                                Comprehensive Documentation
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Never miss critical details. Our incident reporting system captures everything you need—photos, videos, witness statements, and more—ensuring you have a complete record for investigations, insurance claims, and legal compliance.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Unlimited photo and video attachments</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Digital signature capture for statements</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Automatic timestamps and GPS tracking</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-lg">
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                                Proactive Prevention
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Don't just react to incidents—prevent them. Our analytics identify patterns and trends, helping you address root causes before they become serious problems. Create a safer workplace for everyone.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">AI-powered pattern detection</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Predictive risk analysis</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Actionable safety recommendations</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-lg">
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                                Regulatory Compliance
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Stay compliant with OSHA, health department, and insurance requirements. Generate required reports instantly and maintain audit-ready documentation with automated compliance tracking.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">OSHA-compliant reporting</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Automated compliance reminders</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Audit trail for all activities</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-lg">
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                                Seamless Integration
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Works perfectly with your BEET POS ecosystem. Link incidents to specific employees, locations, and time periods. Access all your business data in one unified platform.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Employee record integration</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Multi-location support</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300">Unified reporting dashboard</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
                        Ready to Improve Workplace Safety?
                    </h2>
                    <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        Start protecting your business and employees today. Get a personalized demo and see how BEET POS can help you prevent incidents and maintain compliance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/request-demo"
                            className="text-xl font-medium rounded-full text-white py-5 px-10 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/40 transition-all duration-300 hover:-translate-y-1"
                        >
                            Request a Demo
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-xl font-medium rounded-full border-2 border-red-600 text-red-600 dark:text-red-400 py-5 px-10 hover:bg-red-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IncidentReportsManagementPage;
