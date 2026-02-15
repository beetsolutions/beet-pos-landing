import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Email Marketing",
    description: "Drive customer engagement with BEET POS integrated email marketing. Send targeted campaigns, automate promotions, and increase repeat business with powerful marketing tools.",
    openGraph: {
        title: "Email Marketing - BEET POS",
        description: "Drive customer engagement with integrated email marketing and automated promotions.",
        images: ['/images/hero/beetpos.png'],
    },
};

// Core Email Marketing Features
const emailFeatures = [
  {
    icon: "📧",
    iconLabel: "Email",
    title: "Targeted Campaigns",
    description: "Create and send personalized email campaigns that resonate with your customers. Segment your audience for maximum impact.",
  },
  {
    icon: "🤖",
    iconLabel: "Robot",
    title: "Marketing Automation",
    description: "Set up automated email sequences for birthdays, anniversaries, and special occasions to keep customers engaged.",
  },
  {
    icon: "📊",
    iconLabel: "Bar chart",
    title: "Performance Analytics",
    description: "Track open rates, click-through rates, and revenue generated from each campaign with detailed analytics.",
  },
  {
    icon: "🎯",
    iconLabel: "Target",
    title: "Customer Segmentation",
    description: "Divide your customers into targeted groups based on spending habits, preferences, and visit frequency.",
  },
  {
    icon: "📱",
    iconLabel: "Mobile phone",
    title: "Mobile-Optimized",
    description: "All email templates are fully responsive and look great on any device your customers use.",
  },
  {
    icon: "🔗",
    iconLabel: "Link",
    title: "POS Integration",
    description: "Seamlessly integrated with your BEET POS system. Customer data flows automatically for targeted marketing.",
  },
];

// Detailed product sections
const detailedFeatures = [
  {
    title: "Build Campaigns That Convert",
    description: "Create professional email campaigns in minutes with our easy-to-use drag-and-drop editor. Choose from pre-designed templates or build your own from scratch. Add images, promotions, menus, and special offers that drive customers back to your restaurant.",
    image: "/images/hero/email.avif",
    features: [
      "Drag-and-drop email builder",
      "Professional restaurant templates",
      "Custom branding and styling",
      "Preview across all devices",
      "A/B testing capabilities",
    ],
  },
  {
    title: "Automate Your Marketing",
    description: "Set up automated campaigns that run on autopilot. Welcome new customers, re-engage inactive guests, celebrate birthdays, and send special occasion reminders. Your marketing works 24/7 even when you're busy running your restaurant.",
    image: "/images/hero/beetpos.png",
    features: [
      "Welcome email sequences",
      "Birthday and anniversary campaigns",
      "Win-back inactive customer campaigns",
      "Post-visit follow-up emails",
      "Seasonal promotion automation",
    ],
  },
  {
    title: "Smart Customer Segmentation",
    description: "Not all customers are the same, and your marketing shouldn't be either. Segment your audience based on visit frequency, average spend, favorite items, and more. Send the right message to the right customer at the right time.",
    image: "/images/hero/hq.webp",
    features: [
      "Automatic segmentation by behavior",
      "VIP customer identification",
      "Spending tier categorization",
      "Visit frequency tracking",
      "Custom segment creation",
    ],
  },
  {
    title: "Measure What Matters",
    description: "Get detailed insights into campaign performance with comprehensive analytics. Track open rates, click-through rates, and most importantly, revenue generated from each email. See which campaigns drive the most visits and optimize accordingly.",
    image: "/images/hero/beetpos.png",
    features: [
      "Real-time campaign tracking",
      "Revenue attribution per email",
      "Open and click-through rates",
      "Best time to send analysis",
      "Export reports to Excel or PDF",
    ],
  },
];

// Benefits section
const benefits = [
  {
    title: "Boost Revenue",
    description: "Generate significant revenue with targeted email campaigns that bring customers back more often.",
    stat: "£2,800",
    statLabel: "Per Campaign*",
  },
  {
    title: "Increase Visits",
    description: "Drive more repeat visits with automated marketing that keeps your restaurant top-of-mind.",
    stat: "35%",
    statLabel: "More Visits",
  },
  {
    title: "Higher Engagement",
    description: "Achieve industry-leading open rates with personalized, relevant content for your customers.",
    stat: "42%",
    statLabel: "Open Rate",
  },
  {
    title: "Save Time",
    description: "Automated campaigns save hours each week while delivering better results than manual efforts.",
    stat: "10hrs",
    statLabel: "Weekly Saved",
  },
];

const ProductsPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className='bg-gray-50 dark:bg-gray-700'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-16">
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-8'>
                        <div className='col-span-6'>
                            <p className="text-xl lg:text-3xl font-light mb-5 text-black dark:text-white lg:text-start text-center">
                                Email Marketing
                            </p>
                            <h1 className="text-2xl lg:text-5xl font-semibold mb-5 text-black dark:text-white lg:text-start text-center">
                                Email marketing tools built for restaurants, nightclubs, bars
                            </h1>
                            <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                Generate up to £2,800 in sales per campaign with email marketing.* Turn first-time guests into regulars with automated, personalized campaigns that drive repeat visits and boost revenue.
                            </p>
                            <div className='md:flex items-center justify-center lg:justify-start gap-4'>
                                <Link href='/request-demo' className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-primary hover:text-primary lg:px-14 border border-primary hover:bg-transparent transition-colors duration-300'>
                                    Get a Demo
                                </Link>
                                <Link href='/pricing' className='flex border w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary hover:text-white hover:bg-primary transition-colors duration-300'>
                                    See Pricing
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-6 flex justify-center relative'>
                            <Image src="/images/hero/email.avif" alt="Email marketing dashboard" width={1000} height={805} priority />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="bg-white dark:bg-gray-800 py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-14">
                        <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
                            Powerful Features
                        </p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
                            Everything you need to grow your business
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {emailFeatures.map((feature, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
            <section className="py-20 bg-gray-50 dark:bg-gray-700">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
                            Built for Success
                        </p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-4">
                            Marketing tools that work as hard as you do
                        </h2>
                        <p className="text-black/60 dark:text-white/60 lg:text-xl max-w-2xl mx-auto">
                            From campaign creation to performance tracking, BEET Email Marketing provides everything you need to drive customer engagement and increase revenue.
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
                                    <p className="text-lg text-black/60 dark:text-white/60 mb-6">
                                        {feature.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {feature.features.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <div className="rounded-full p-1 bg-primary">
                                                    <Check className="h-4 w-4 text-white" />
                                                </div>
                                                <span className="text-base text-black/70 dark:text-white/70">
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
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                            Proven results for your restaurant
                        </h2>
                        <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                            Join hundreds of restaurants using BEET Email Marketing to drive repeat business and increase revenue.
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
                    <p className="text-center text-sm opacity-70 mt-8">
                        *Based on average results from BEET customers. Individual results may vary.
                    </p>
                </div>
            </section>

            {/* Integration Section */}
            <section className='bg-white dark:bg-gray-800 py-20'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Seamless Integration</p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-6">
                            Built right into your BEET POS
                        </h2>
                        <p className='text-black/60 dark:text-white/60 text-lg max-w-3xl mx-auto'>
                            No separate platforms or complicated integrations. Your email marketing works seamlessly with your POS data to deliver targeted, effective campaigns.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <span className="text-3xl" role="img" aria-label="Database">💾</span>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Automatic Data Sync</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Customer information, purchase history, and preferences automatically sync from your POS to your email marketing platform. No manual data entry required.
                            </p>
                        </div>

                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <span className="text-3xl" role="img" aria-label="Growth chart">📈</span>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Real-Time Insights</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                See exactly which campaigns drive the most revenue. Track customer behavior from email click to in-store purchase with complete attribution.
                            </p>
                        </div>

                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <span className="text-3xl" role="img" aria-label="People">👥</span>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Smart Segmentation</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Leverage your POS data to create powerful customer segments. Target high-value customers, win back lapsed guests, or reward your most loyal fans.
                            </p>
                        </div>

                        <div className='bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300'>
                            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                                <span className="text-3xl" role="img" aria-label="Clock">⏰</span>
                            </div>
                            <h3 className='text-2xl font-semibold mb-4 text-black dark:text-white'>Trigger-Based Campaigns</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Automatically send emails based on customer actions. Welcome first-time visitors, thank recent guests, or re-engage customers who haven't visited in a while.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className='bg-gray-50 dark:bg-gray-700 py-20'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-16">
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Campaign Ideas</p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
                            Campaigns that drive results
                        </h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='bg-white dark:bg-gray-800 p-8 rounded-2xl'>
                            <div className='text-4xl mb-4'>
                                <span role="img" aria-label="Birthday cake">🎂</span>
                            </div>
                            <h3 className='text-xl font-semibold mb-3 text-black dark:text-white'>Birthday Campaigns</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Automatically send birthday offers to customers. Create memorable experiences that drive visits during celebration times.
                            </p>
                        </div>

                        <div className='bg-white dark:bg-gray-800 p-8 rounded-2xl'>
                            <div className='text-4xl mb-4'>
                                <span role="img" aria-label="Fork and knife">🍽️</span>
                            </div>
                            <h3 className='text-xl font-semibold mb-3 text-black dark:text-white'>New Menu Announcements</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Showcase new dishes and seasonal specials. Generate excitement and drive traffic with mouthwatering menu promotions.
                            </p>
                        </div>

                        <div className='bg-white dark:bg-gray-800 p-8 rounded-2xl'>
                            <div className='text-4xl mb-4'>
                                <span role="img" aria-label="Gift heart">💝</span>
                            </div>
                            <h3 className='text-xl font-semibold mb-3 text-black dark:text-white'>Win-Back Campaigns</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Re-engage customers who haven't visited recently. Personalized offers bring guests back through your doors.
                            </p>
                        </div>

                        <div className='bg-white dark:bg-gray-800 p-8 rounded-2xl'>
                            <div className='text-4xl mb-4'>
                                <span role="img" aria-label="Clock">⏰</span>
                            </div>
                            <h3 className='text-xl font-semibold mb-3 text-black dark:text-white'>Off-Peak Promotions</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Fill tables during slow periods with targeted promotions. Drive traffic when you need it most.
                            </p>
                        </div>

                        <div className='bg-white dark:bg-gray-800 p-8 rounded-2xl'>
                            <div className='text-4xl mb-4'>
                                <span role="img" aria-label="Party popper">🎉</span>
                            </div>
                            <h3 className='text-xl font-semibold mb-3 text-black dark:text-white'>Event Invitations</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Promote special events, live music, and private dining experiences directly to interested customers.
                            </p>
                        </div>

                        <div className='bg-white dark:bg-gray-800 p-8 rounded-2xl'>
                            <div className='text-4xl mb-4'>
                                <span role="img" aria-label="Star">⭐</span>
                            </div>
                            <h3 className='text-xl font-semibold mb-3 text-black dark:text-white'>VIP Programs</h3>
                            <p className='text-black/60 dark:text-white/60'>
                                Reward your best customers with exclusive offers and early access to new menu items or events.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='bg-white dark:bg-gray-800 py-20'>
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center">
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-6">
                            Ready to grow your business with email marketing?
                        </h2>
                        <p className='text-black/60 dark:text-white/60 text-lg mb-10 max-w-2xl mx-auto'>
                            Join restaurants worldwide using BEET Email Marketing to drive repeat visits, increase customer lifetime value, and boost revenue.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                            <Link href='/request-demo' className='text-xl w-full sm:w-auto font-medium rounded-full text-white py-5 px-14 bg-primary hover:bg-primary/90 transition-colors duration-300'>
                                Schedule a Demo
                            </Link>
                            <Link href='/company/contact-us' className='text-xl w-full sm:w-auto font-medium rounded-full text-primary py-5 px-14 border-2 border-primary hover:bg-primary hover:text-white transition-colors duration-300'>
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsPage;