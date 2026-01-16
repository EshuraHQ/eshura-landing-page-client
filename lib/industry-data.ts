
export interface FaqItem {
    question: string;
    answer: string;
}

export interface Advantage {
    title: string;
    description: string;
}

export interface IndustryData {
    title: string;
    hero: {
        title: string;
    };
    featureCarousel: {
        badge: string;
        title: string;
        description: string;
        images: string[];
    };
    featureAdvantages: {
        badge: string;
        title: string;
        description: string;
        advantages: Advantage[];
    };
    faq: {
        heading: string;
        description: string;
        items: FaqItem[];
    };
}

export const industryData: Record<string, IndustryData> = {
    "e-commerce-retail": {
        title: "E-Commerce & Online Retail",
        hero: {
            title: "Scale your \n E-commerce Business",
        },
        featureCarousel: {
            badge: "Platform",
            title: "Unified Retail Operations",
            description:
                "Manage your entire retail operation from a single dashboard. Inventory, sales, and customer data properly synchronized in real-time.",
            images: [
                "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1472851294608-415105022054?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
            ],
        },
        featureAdvantages: {
            badge: "Benefits",
            title: "Why Top Retailers Choose Us",
            description: "We provide the tools you need to stay ahead in a competitive market.",
            advantages: [
                {
                    title: "Real-time Tracking",
                    description: "Monitor stock levels across all your warehouse locations instantly.",
                },
                {
                    title: "Omnichannel Support",
                    description: "Seamlessly integrate your online and offline sales channels.",
                },
                {
                    title: "Predictive Analytics",
                    description: "Forecast demand with AI-driven insights to optimize inventory.",
                },
                {
                    title: "Customer Loyalty",
                    description: "Built-in loyalty programs to keep your customers coming back.",
                },
                {
                    title: "Automated Reordering",
                    description: "Never run out of stock with smart reordering triggers.",
                },
                {
                    title: "Secure Payments",
                    description: "Enterprise-grade security for all transactions.",
                },
            ],
        },
        faq: {
            heading: "Retail Solutions FAQ",
            description: "Common questions about our retail platform capabilities.",
            items: [
                {
                    question: "Can I integrate with my existing POS?",
                    answer: "Yes, we support integration with most major POS systems available in the market.",
                },
                {
                    question: "Does it support multi-currency?",
                    answer: "Absolutely, our platform is designed for global commerce with multi-currency support.",
                },
                {
                    question: "How long is the setup process?",
                    answer: "Most retailers are up and running within 2-4 weeks, depending on the complexity of data migration.",
                },
            ],
        },
    },
    "healthcare-medical": {
        title: "Healthcare & Medical Practices",
        hero: {
            title: "Streamline \n Patient Care",
        },
        featureCarousel: {
            badge: "Healthcare",
            title: "Modern Clinic Management",
            description:
                "Focus on patient care while we handle the administration. Scheduling, records, and billing in one secure platform.",
            images: [
                "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1516574187841-693083f69802?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000",
            ],
        },
        featureAdvantages: {
            badge: "Efficiency",
            title: "Better Care, Less Paperwork",
            description: "Designed for modern medical practices to improve operational efficiency.",
            advantages: [
                {
                    title: "HIPAA Compliant",
                    description: "Your patient data is secure and compliant with all regulations.",
                },
                {
                    title: "Smart Scheduling",
                    description: "Reduce no-shows with automated appointment reminders.",
                },
                {
                    title: "Telehealth Ready",
                    description: "Integrated video consultations for remote patient care.",
                },
                {
                    title: "Digital Records",
                    description: "Easy access to patient history and treatment plans.",
                },
                {
                    title: "Billing Automation",
                    description: "Streamlined invoicing and insurance claim processing.",
                },
                {
                    title: "Patient Portal",
                    description: "Empower patients to manage their appointments and health data.",
                },
            ],
        },
        faq: {
            heading: "Healthcare FAQ",
            description: "Questions about security and implementation in clinics.",
            items: [
                {
                    question: "Is the data stored securely?",
                    answer: "Yes, we use bank-level encryption and full HIPAA compliance measures.",
                },
                {
                    question: "Can I migrate from paper records?",
                    answer: "We offer digitization services to help move your paper records to the cloud securely.",
                },
                {
                    question: "Do you offer staff training?",
                    answer: "Comprehensive training is included during the onboarding phase for all staff members.",
                },
            ],
        },
    },
    "saas-tech": {
        title: "SaaS & Tech",
        hero: {
            title: "Accelerate \n Your Growth",
        },
        featureCarousel: {
            badge: "Technology",
            title: "Scale Your Architecture",
            description: "Robust infrastructure solutions for growing tech companies. Deploy faster and scale with confidence.",
            images: [
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
            ]
        },
        featureAdvantages: {
            badge: "Performance",
            title: "Built for Developers",
            description: "Tools and APIs that developers love to use.",
            advantages: [
                { title: "High Availability", description: "99.99% uptime SLA guarantee." },
                { title: "Global CDN", description: "Deliver content instantly anywhere in the world." },
                { title: "Developer API", description: "Comprehensive API documentation and SDKs." },
                { title: "Auto-scaling", description: "Handle traffic spikes without manual intervention." },
                { title: "CI/CD Integration", description: "Seamlessly integrates with your deployment pipelines." },
                { title: "Real-time Monitoring", description: "Deep insights into your application performance." }
            ]
        },
        faq: {
            heading: "Tech Solutions FAQ",
            description: "Technical questions about our infrastructure.",
            items: [
                { question: "What languages do you support?", answer: "We support Node.js, Python, Go, Ruby, Java, and more." },
                { question: "Can I host on-premise?", answer: "Yes, we offer enterprise self-hosted solutions." },
                { question: "How is pricing calculated?", answer: "Usage-based pricing means you only pay for what you consume." }
            ]
        }
    },
    "home-field-services": {
        title: "Home & Field Services",
        hero: { title: "Manage \n Field Operations" },
        featureCarousel: {
            badge: "Operations",
            title: "Field Service Excellence",
            description: "Connect your office and field teams. Scheduling, dispatching, and invoicing made simple.",
            images: [
                "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1581092918056-0c4c3acd90f9?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000",
            ]
        },
        featureAdvantages: {
            badge: "Efficiency",
            title: "Optimize Your Workforce",
            description: "Maximize productivity and customer satisfaction.",
            advantages: [
                { title: "Smart Dispatching", description: "Assign the right job to the right technician automatically." },
                { title: "Mobile App", description: "Technicians can view jobs and capture signatures on the go." },
                { title: "Real-time GPS", description: "Track your fleet and optimize routes." },
                { title: "Instant Invoicing", description: "Convert estimates to invoices in one click." },
            ]
        },
        faq: {
            heading: "Field Service FAQ",
            description: "Questions about our field service management software.",
            items: [
                { question: "Does it work offline?", answer: "Yes, the mobile app works offline and syncs when connection is restored." },
                { question: "Can I track inventory?", answer: "Yes, track parts and inventory on trucks and in the warehouse." }
            ]
        }
    },
    "restaurants-food": {
        title: "Restaurants & Food Services",
        hero: { title: "Serve \n More Customers" },
        featureCarousel: {
            badge: "Hospitality",
            title: "Restaurant Management System",
            description: "From front-of-house to back-of-house, streamline every aspect of your restaurant.",
            images: [
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000",
            ]
        },
        featureAdvantages: {
            badge: "Growth",
            title: "Taste of Success",
            description: "Tools designed to help your food business thrive.",
            advantages: [
                { title: "Table Management", description: "Optimize seating and visual table layout." },
                { title: "Kitchen Display", description: "Send orders directly to the kitchen instantly." },
                { title: "Online Ordering", description: "Commission-free online ordering for your website." },
                { title: "Inventory Control", description: "Track ingredients and reduce food waste." },
            ]
        },
        faq: {
            heading: "Restaurant FAQ",
            description: "Common questions for restaurant owners.",
            items: [
                { question: "Is hardware included?", answer: "We work with standard hardware, or you can purchase kits from us." },
                { question: "Does it support multiple locations?", answer: "Yes, manage menus and reporting for chains easily." }
            ]
        }
    },
    "beauty-wellness": {
        title: "Beauty, Salons & Wellness",
        hero: { title: "Elevate \n Client Experience" },
        featureCarousel: {
            badge: "Wellness",
            title: "Salon & Spa Software",
            description: "Booking, payments, and client management for beauty professionals.",
            images: [
                "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1000",
            ]
        },
        featureAdvantages: {
            badge: "Style",
            title: "Look Good, Business Good",
            description: "Seamless experience for you and your clients.",
            advantages: [
                { title: "24/7 Booking", description: "Fill your calendar even when you sleep." },
                { title: "Client Profiles", description: "Keep notes on preferences, formulas, and history." },
                { title: "Marketing Tools", description: "Automated email and SMS campaigns." },
                { title: "POS & Payments", description: "Integrated checkout with retail product support." },
            ]
        },
        faq: {
            heading: "Salon FAQ",
            description: "Questions from beauty professionals.",
            items: [
                { question: "Can I take deposits?", answer: "Yes, secure deposits to reduce no-shows." },
                { question: "Is there a mobile app?", answer: "Yes, manage your schedule from your phone." }
            ]
        }
    },
    "real-estate": {
        title: "Real Estate",
        hero: { title: "Close \n More Deals" },
        featureCarousel: {
            badge: "Property",
            title: "Real Estate CRM",
            description: "Manage leads, listings, and closings in one powerful platform.",
            images: [
                "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1000",
            ]
        },
        featureAdvantages: {
            badge: "Growth",
            title: "Power Your Agency",
            description: "Tools for modern agents and brokers.",
            advantages: [
                { title: "Lead Automation", description: "Capture and nurture leads automatically." },
                { title: "Transaction Mgmt", description: "Track every step of the closing process." },
                { title: "Listing Marketing", description: "Create stunning property websites in minutes." },
                { title: "Client Portal", description: "Collaborate with buyers and sellers seamlessly." },
            ]
        },
        faq: {
            heading: "Real Estate FAQ",
            description: "Questions about our property tech.",
            items: [
                { question: "does it integrate with MLS?", answer: "Yes, we offer IDX/MLS integration." },
                { question: "Is it for teams?", answer: "Yes, robust team permission and routing features." }
            ]
        }
    },
    "automotive": {
        title: "Automotive Services",
        hero: { title: "Drive \n Shop Efficiency" },
        featureCarousel: {
            badge: "Automotive",
            title: "Auto Repair Software",
            description: "Digital vehicle inspections, estimating, and shop management.",
            images: [
                "https://images.unsplash.com/photo-1530046339160-71165e0c9811?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1504222490245-ef07559e20d4?auto=format&fit=crop&q=80&w=1000",
            ]
        },
        featureAdvantages: {
            badge: "Performance",
            title: "Tune Up Your Business",
            description: "Modernize your auto repair shop.",
            advantages: [
                { title: "Digital Inspections", description: "Send photos and videos to customers for approval." },
                { title: "Parts Ordering", description: "Order parts directly from major suppliers." },
                { title: "Service History", description: "Look up vehicle history by VIN." },
                { title: "Text Status Updates", description: "Keep customers informed automatically." },
            ]
        },
        faq: {
            heading: "Auto Shop FAQ",
            description: "Questions from shop owners.",
            items: [
                { question: "Does it work for heavy duty?", answer: "Yes, we support heavy duty and fleet shops." },
                { question: "Can I import customer data?", answer: "Yes, we help migrate from legacy systems." }
            ]
        }
    },
    "professional-services": {
        title: "Professional Services",
        hero: { title: "Automate \n Your Practice" },
        featureCarousel: {
            badge: "Services",
            title: "Practice Management",
            description: "For accountants, consultants, lawyers, and agencies.",
            images: [
                "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000",
            ]
        },
        featureAdvantages: {
            badge: "Professional",
            title: "Focus on Billable Hours",
            description: "Reduce administrative overhead.",
            advantages: [
                { title: "Time Tracking", description: "Accurate time capture for billing." },
                { title: "Project Management", description: "Keep client projects on track." },
                { title: "Client Portal", description: "Secure file sharing and messaging." },
                { title: "Automated Billing", description: "Recurring invoices and retainers." },
            ]
        },
        faq: {
            heading: "Pro Services FAQ",
            description: "Questions about practice management.",
            items: [
                { question: "Is it secure?", answer: "Bank-grade security for sensitive client data." },
                { question: "Does it integrate with QuickBooks?", answer: "Yes, seamless accounting integration." }
            ]
        }
    },
    "education-coaching": {
        title: "Education & Coaching",
        hero: { title: "Empower \n Your Students" },
        featureCarousel: {
            badge: "Education",
            title: "Learning Management",
            description: "For tutors, coaches, and training centers.",
            images: [
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000",
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
            ]
        },
        featureAdvantages: {
            badge: "Learning",
            title: "Grow Your School",
            description: "Manage students, classes, and payments.",
            advantages: [
                { title: "Class Scheduling", description: "Manage group classes and 1-on-1s." },
                { title: "Student Management", description: "Track attendance and progress." },
                { title: "Online Learning", description: "Host video lessons and resources." },
                { title: "Parent Portal", description: "Keep parents informed of progress." },
            ]
        },
        faq: {
            heading: "Education FAQ",
            description: "Questions from educators.",
            items: [
                { question: "Can I sell courses?", answer: "Yes, built-in e-commerce for course sales." },
                { question: "Is Zoom integrated?", answer: "Yes, automatic Zoom link generation." }
            ]
        }
    }
    // "enterprises": { ... } // Reserved for future use
};
