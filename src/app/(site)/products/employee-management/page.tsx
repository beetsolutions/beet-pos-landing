import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import HardwareSlider from "@/components/HardwareSlider";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
    title: "Employee Management",
    description: "Manage your team effectively with BEET POS. Track time & attendance, manage schedules, monitor performance, and streamline payroll with powerful employee management tools.",
    openGraph: {
        title: "Employee Management - BEET POS",
        description: "Track time & attendance, manage schedules, and streamline payroll with powerful tools.",
        images: ['/images/hero/team.jpg'],
    },
};

// Core Employee Management Features
const employeeFeatures = [
  {
    icon: "⏱️",
    iconLabel: "Stopwatch",
    title: "Time & Attendance",
    description: "Accurate clock-in/clock-out tracking with automatic overtime calculations and break management.",
  },
  {
    icon: "📅",
    iconLabel: "Calendar",
    title: "Smart Scheduling",
    description: "Create optimized schedules based on forecasted demand, employee availability, and labor budgets.",
  },
  {
    icon: "🔐",
    iconLabel: "Lock",
    title: "Role-Based Permissions",
    description: "Control access to sensitive features with customizable permission levels for each role.",
  },
  {
    icon: "💰",
    iconLabel: "Money bag",
    title: "Payroll Integration",
    description: "Export time data directly to your payroll system. No more manual entry or calculation errors.",
  },
  {
    icon: "📊",
    iconLabel: "Bar chart",
    title: "Performance Tracking",
    description: "Monitor sales per employee, average ticket size, and customer satisfaction metrics.",
  },
  {
    icon: "📱",
    iconLabel: "Mobile phone",
    title: "Mobile Access",
    description: "Employees can view schedules, request time off, and swap shifts from their mobile devices.",
  },
];

// Detailed product sections
const detailedFeatures = [
  {
    title: "Effortless Time & Attendance Tracking",
    description: "Say goodbye to manual timesheets and time theft. Our biometric clock-in system ensures accurate time tracking with facial recognition or PIN codes. Automatically calculate regular hours, overtime, and breaks with precision.",
    image: "/images/hero/team.jpg",
    features: [
      "Biometric clock-in with facial recognition",
      "Automatic overtime and break calculations",
      "Real-time attendance monitoring",
      "GPS location tracking for mobile employees",
      "Time theft prevention with photo verification",
    ],
  },
  {
    title: "Intelligent Scheduling Made Simple",
    description: "Create the perfect schedule in minutes, not hours. Our AI-powered scheduling considers employee availability, labor laws, peak hours, and budget constraints to generate optimized schedules automatically.",
    image: "/images/hero/beetpos.png",
    features: [
      "Drag-and-drop schedule builder",
      "AI-powered schedule optimization",
      "Shift swap and time-off requests",
      "Labor cost forecasting",
      "Compliance with labor laws and overtime rules",
    ],
  },
  {
    title: "Advanced Performance Analytics",
    description: "Make informed decisions with detailed performance metrics. Track individual and team productivity, identify top performers, and coach underperformers with data-driven insights.",
    image: "/images/hero/hq.webp",
    features: [
      "Sales performance by employee",
      "Customer satisfaction scores",
      "Average transaction value tracking",
      "Tip reporting and management",
      "Customizable performance reports",
    ],
  },
  {
    title: "Secure Access Control",
    description: "Protect your business with granular permission controls. Assign specific access levels to different roles, from managers to servers, ensuring employees only see what they need to.",
    image: "/images/hero/beetpos.png",
    features: [
      "Customizable role-based permissions",
      "Multi-level authorization for sensitive actions",
      "Audit trails for all employee actions",
      "Secure PIN or biometric authentication",
      "Remote permission management",
    ],
  },
];

// Benefits section
const benefits = [
  {
    title: "Reduce Labor Costs",
    description: "Optimize scheduling and eliminate time theft to save on labor expenses.",
    stat: "30%",
    statLabel: "Cost Savings",
  },
  {
    title: "Increase Productivity",
    description: "Better scheduling and performance tracking lead to higher team efficiency.",
    stat: "25%",
    statLabel: "More Efficient",
  },
  {
    title: "Improve Retention",
    description: "Fair scheduling and transparent performance management keep employees happy.",
    stat: "40%",
    statLabel: "Lower Turnover",
  },
  {
    title: "Save Time",
    description: "Automate administrative tasks and spend less time on scheduling and payroll.",
    stat: "10hr",
    statLabel: "Saved Weekly",
  },
];

const ProductsPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className='relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900'>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-green-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-12 relative z-10">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            {/* Badge */}
                            <div className="flex lg:justify-start justify-center mb-6">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-600/20 backdrop-blur-sm">
                                    <span className="text-sm font-medium bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                        <span role="img" aria-label="People">👥</span> Employee Management
                                    </span>
                                </div>
                            </div>
                            
                            <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-black dark:text-white lg:text-start text-center leading-tight">
                                Empower Your Team with{" "}
                                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-extrabold">
                                    Smart Management
                                </span>
                            </h1>
                            <p className='text-gray-600 dark:text-gray-300 lg:text-xl font-normal mb-10 lg:text-start text-center'>
                                Transform how you manage your workforce with BEET POS. From time tracking to scheduling, performance monitoring to payroll integration—everything you need to build a productive, engaged team.
                            </p>
                            <div className='flex flex-col sm:flex-row gap-4 lg:justify-start justify-center'>
                                <Link href='/request-demo' className='text-xl font-medium rounded-full text-white py-5 px-10 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/40 transition-all duration-300 text-center'>
                                    Get a Demo
                                </Link>
                                <Link href='/pricing' className='flex border border-green-600 justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-green-600 hover:text-white hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 transition-all duration-300'>
                                    See Pricing
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-6 flex justify-center relative'>
                            <Image src="/images/hero/team.jpg" alt="Employee Management" width={1000} height={805} className="w-full h-auto rounded-3xl shadow-2xl" />
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
                            Complete Employee Management Solution
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {employeeFeatures.map((feature, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-3xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">
                                    <span role="img" aria-label={feature.iconLabel}>
                                        {feature.icon}
                                    </span>
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
                            Built for Restaurant Teams
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 lg:text-xl max-w-2xl mx-auto">
                            From hiring to performance reviews, BEET POS provides all the tools you need to manage your team effectively and efficiently.
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
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-3xl blur-2xl"></div>
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
                                                <div className="rounded-full p-1 bg-gradient-to-r from-green-600 to-blue-600">
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
            <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                            Measurable Results for Your Business
                        </h2>
                        <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                            Join thousands of restaurants that have transformed their workforce management with BEET POS.
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

            {/* Hardware Integration Section */}
            <HardwareSlider />

            {/* CTA Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
                        Ready to Transform Your Team Management?
                    </h2>
                    <p className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        Start managing your workforce more effectively today. Get a personalized demo and see how BEET POS can help your team thrive.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/request-demo"
                            className="text-xl font-medium rounded-full text-white py-5 px-10 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/40 transition-all duration-300 hover:-translate-y-1"
                        >
                            Request a Demo
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-xl font-medium rounded-full border-2 border-green-600 text-green-600 dark:text-green-400 py-5 px-10 hover:bg-green-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ />
        </>
    );
};

export default ProductsPage;