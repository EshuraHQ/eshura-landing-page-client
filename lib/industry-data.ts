
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
        title: "E-commerce & Retail",
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
    "healthcare-clinics": {
        title: "Healthcare & Clinics",
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
    }
};
