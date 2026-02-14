import {HeaderItem} from "@/types/menu";

export const headerData: HeaderItem[] = [
    {
        label: "Products", href: "/products",
        submenu: [
            {label: "Point of Sale", href: "/products/point-of-sale"},
            {label: "Handheld POS", href: "/products/handheld-pos"},
            {label: "BEET Pay", href: "/products/beet-pay"},
            {label: "Kitchen display system", href: "/products/kitchen-display"},
            {label: "Kiosk", href: "/products/kiosk"},
            {label: "Gift cards", href: "/products/gift-cards"},
            {label: "Reservations and waitlist", href: "/products/reservations-and-waitlist"},
            {label: "Loyalty", href: "/products/loyalty"},
            {label: "Email marketing", href: "/products/email-marketing"},
            {label: "Event management", href: "/products/event-management"},
            {label: "Ticket management", href: "/products/ticket-management"},
            {label: "Table management", href: "/products/table-management"},
            {label: "Multi-Location management", href: "/products/multi-location-management"},
            {label: "Employee management", href: "/products/employee-management"},
            {label: "Incident reports management", href: "/products/incident-reports-management"},
            {label: "Door counter management", href: "/products/door-counter-management"},
            {label: "Artificial intelligence", href: "/products/artificial-intelligence"},
        ],
    },
    {
        label: "Hardware", href: "/hardware",
    },
    {
        label: "Pricing", href: "/pricing",
    },
    {
        label: "Resources", href: "/resources",
    },
    {
        label: "Company", href: "/company",
        submenu: [
            {label: "About Us", href: "/company/about-us"},
            {label: "Contact Us", href: "/company/contact-us"},
            {label: "Case studies", href: "/company/case-studies"},
            {label: "Integrations", href: "/company/integrations"},
            {label: "Careers", href: "/company/careers"},
        ],
    },
];

export const companyData: HeaderItem[] = [
    {
        label: "About Us", href: "/about-us",
    },
    {
        label: "Contact US", href: "/contact-us",
    },
    {
        label: "Testimonial", href: "/testimonial",
    },
    {
        label: "Resources", href: "/resources",
    },
    {
        label: "News", href: "/news",
    },
    {
        label: "Careers", href: "/careers",
    },
    {
        label: "Integrations", href: "/integrations",
    },
    {
        label: "Return and Exchange", href: "/return-exchange",
    },
    {
        label: "Privacy", href: "/privacy",
    },
    {
        label: "Download", href: "/download",
    },
];