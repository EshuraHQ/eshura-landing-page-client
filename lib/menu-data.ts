export interface MenuItem {
    name: string;
    href?: string;
    hasDropdown?: boolean;
    dropdownContent?: {
        groups?: {
            title: string;
            cta?: string;
            items: { name: string; href: string }[];
        }[];
        items?: { name: string; href: string }[];
    };
}

export const menuItems: MenuItem[] = [
    {
        name: 'Products',
        hasDropdown: true,
        dropdownContent: {
            groups: [
                {
                    title: 'Sales Agents',
                    cta: 'Boost your revenue with AI',
                    items: [
                        { name: 'Lead Generation', href: '/products/sales-agents/lead-generation' },
                        { name: 'Product Recommendation', href: '/products/sales-agents/product-recommendation' },
                        { name: 'Cart Abandonment', href: '/products/sales-agents/cart-abandonment' },
                        { name: 'Upsell & Cross-sell', href: '/products/sales-agents/upsell-cross-sell' },
                    ],
                },
                {
                    title: 'Customer Support Agents',
                    cta: 'Delight customers 24/7',
                    items: [
                        { name: 'Order Tracking', href: '/products/customer-support/order-tracking' },
                        { name: 'Returns & Refunds', href: '/products/customer-support/returns-refunds' },
                        { name: 'FAQ & Knowledge Base', href: '/products/customer-support/faq-knowledge-base' },
                        { name: 'Technical Support', href: '/products/customer-support/technical-support' },
                    ],
                },
                {
                    title: 'Booking & Scheduling',
                    cta: 'Automate appointments',
                    items: [
                        { name: 'Appointment Booking', href: '/products/booking/appointment-booking' },
                        { name: 'Service Scheduling', href: '/products/booking/service-scheduling' },
                    ],
                },
                {
                    title: 'Voice Agents',
                    cta: 'Human-like conversations',
                    items: [
                        { name: 'Inbound Voice', href: '/products/voice/inbound-voice' },
                        { name: 'Outbound Voice', href: '/products/voice/outbound-voice' },
                    ],
                },
                {
                    title: 'Email Agents',
                    cta: 'Smart email automation',
                    items: [
                        { name: 'Email Support Agent', href: '/products/email/email-support-agent' },
                    ],
                },
                {
                    title: 'Custom RAG Agents',
                    cta: 'Train on your data',
                    items: [
                        { name: 'Document Training', href: '/products/rag/document-training' },
                        { name: 'Internal Knowledge Assistant', href: '/products/rag/internal-knowledge-assistant' },
                    ],
                },
            ],
        },
    },
    {
        name: 'Industries',
        hasDropdown: true,
        dropdownContent: {
            items: [
                { name: 'E-commerce & Retail', href: '/industries/e-commerce-retail' },
                { name: 'Healthcare & Clinics', href: '/industries/healthcare-clinics' },
                { name: 'SaaS & Tech', href: '/industries/saas-tech' },
                // { name: 'Home Services', href: '/industries/home-services' },
                // { name: 'Professional Services', href: '/industries/professional-services' },
                // { name: 'Enterprises', href: '/industries/enterprises' },
            ],
        },
    },
    {
        name: 'Technology',
        hasDropdown: true,
        dropdownContent: {
            items: [
                { name: 'Agentic Architecture', href: '/technology/agentic-architecture' },
                { name: 'RAG & Vector Databases', href: '/technology/rag' },
                { name: 'LLMs & Fine-Tuning', href: '/technology/llm' },
                { name: 'Voice AI Stack', href: '/technology/voice' },
                { name: 'Integrations', href: '/technology/integration' },
                { name: 'Security & Compliance', href: '/technology/security' },
            ],
        },
    },
    // {
    //     name: 'Resources',
    //     hasDropdown: true,
    //     dropdownContent: {
    //         items: [
    //             { name: 'Case Studies', href: '#' },
    //             { name: 'Blogs & Insights', href: '#' },
    //             { name: 'Documentation', href: '#' },
    //             { name: 'ROI Calculator', href: '#' },
    //         ],
    //     },
    // },
    {
        name: 'Company',
        hasDropdown: true,
        dropdownContent: {
            items: [
                { name: 'About Us', href: '/company#about' },
                { name: 'Vision & Mission', href: '/company#vision' },
                { name: 'Contact', href: '/company#contact' },
            ],
        },
    },
]
