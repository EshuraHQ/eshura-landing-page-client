

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface ProductData {
    title: string;
    subtitle: string;
    description: string;
    heroImage?: string;
    ctaText?: string;

    featureHero: {
        badge: string;
        heading: string;
        imageSrc: string;
        features: Feature[];
    };

    featuresGrid: {
        heading: string;
        subheading: string;
        features: Feature[];
    };

    faq: {
        heading: string;
        description: string;
        items: FaqItem[];
    };

    cta: {
        title: string;
        description: string;
        buttonText: string;
        items: string[];
    };
}

// Map of slug to product data
export const productData: Record<string, ProductData> = {
    // --- Sales Agents ---
    "lead-generation": {
        title: "Lead Generation",
        subtitle: "Automate Your Sales Pipeline",
        description: "Capture identifying and intent data from your website visitors. Use AI to qualify leads and personalize outreach at scale.",
        ctaText: "Start Generating Leads",
        featureHero: {
            badge: "Smart Targeting",
            heading: "Identify Your Ideal Customers Instantly",
            imageSrc: "/ai-chat-interaction.png",
            features: [
                { icon: "Target", title: "Precision Targeting", description: "AI algorithms analyze vast datasets to pinpoint prospects that match your ideal customer profile." },
                { icon: "Search", title: "Automated Discovery", description: "Continuously scan for new leads across multiple channels 24/7 without lifting a finger." },
                { icon: "BarChart", title: "Intent Scoring", description: "Prioritize outreach based on real-time buying signals and engagement metrics." }
            ]
        },
        featuresGrid: {
            heading: "Complete Lead Generation Toolkit",
            subheading: "Everything you need to build a high-performance sales engine.",
            features: [
                { icon: "MessageSquare", title: "Multi-Channel Outreach", description: "Reach prospects where they are—LinkedIn, Email, Twitter—with unified campaigns." },
                { icon: "Target", title: "Smart Personalization", description: "AI crafts unique messages for each prospect based on public data." },
                { icon: "Calendar", title: "Automated Follow-ups", description: "Intelligent sequences nurture leads until they reply." },
                { icon: "Database", title: "CRM Integration", description: "Seamlessly sync verified leads to Salesforce, HubSpot, or Pipedrive." },
                { icon: "BarChart", title: "Real-time Analytics", description: "Track open rates, reply rates, and conversion metrics in a single dashboard." },
                { icon: "Search", title: "A/B Testing", description: "Automatically test different messaging strategies to find what converts best." },
                { icon: "Target", title: "Lead Verification", description: "Ensure data accuracy with real-time email verification." },
                { icon: "Database", title: "Scalable Infrastructure", description: "Scale your outreach from hundreds to thousands of prospects." }
            ]
        },
        faq: {
            heading: "Common Questions",
            description: "Learn more about how our AI Lead Generation agents work.",
            items: [
                { question: "How does the AI find leads?", answer: "Our AI scans millions of public datapoints to identify companies that match your specific ideal customer profile (ICP)." },
                { question: "Is the data verified?", answer: "Yes, we perform real-time verification on contact information to ensure high deliverability." },
                { question: "Can I integrate this with my CRM?", answer: "Absolutely. We offer native integrations with HubSpot, Salesforce, and Pipedrive." },
                { question: "Is it compliant with GDPR?", answer: "Yes, our data sourcing and processing methods are fully compliant with GDPR and CCPA." }
            ]
        },
        cta: {
            title: "Ready to Supercharge Your Sales?",
            description: "Join thousands of forward-thinking sales teams who are automating their pipeline with AI.",
            buttonText: "Start Free Trial",
            items: ["No credit card required", "14-day free trial", "Cancel anytime", "Volume discounts available", "24/7 Priority Support"]
        }
    },
    "product-recommendation": {
        title: "Product Recommendation",
        subtitle: "Boost Conversions with personalized suggestions",
        description: "Deliver hyper-personalized product recommendations to every visitor based on their browsing behavior and purchase history.",
        ctaText: "Increase AOV Today",
        featureHero: {
            badge: "Personalization Engine",
            heading: "The Right Product for Every Customer",
            imageSrc: "/ai-chat-interaction.png",
            features: [
                { icon: "ShoppingCart", title: "Behavioral Analysis", description: "Analyzes clicks, views, and time-spent to understand user preferences." },
                { icon: "Target", title: "Predictive Matching", description: "Uses ML to predict what a customer is most likely to buy next." },
                { icon: "BarChart", title: "Real-time Adaptation", description: "Updates recommendations instantly as the user interacts with your site." }
            ]
        },
        featuresGrid: {
            heading: "Intelligent Recommendation Features",
            subheading: "Drive more sales with smarter suggestions.",
            features: [
                { icon: "ShoppingCart", title: "Upsell Widgets", description: "Suggest complementary products on product pages and cart." },
                { icon: "Target", title: "Personalized Homepages", description: "Dynamically change homepage content for returning visitors." },
                { icon: "Mail", title: "Email Recommendations", description: "Embed personalized product grids in your marketing emails." },
                { icon: "BarChart", title: "Performance Tracking", description: "Measure the exact revenue impact of every recommendation." },
                { icon: "Search", title: "Visual Search", description: "Allow customers to find products by uploading images." },
                { icon: "Database", title: "Inventory Aware", description: "Automatically hide out-of-stock items from recommendations." },
                { icon: "Target", title: "Custom Collections", description: "Create rule-based collections for specific campaigns." },
                { icon: "RefreshCcw", title: "A/B Testing", description: "Test different recommendation algorithms to optimize ROI." }
            ]
        },
        faq: {
            heading: "Frequently Asked Questions",
            description: "Everything you need to know about our recommendation engine.",
            items: [
                { question: "How long does it take to learn?", answer: "Our AI starts learning immediately and typically delivers optimized results within 2 weeks of traffic." },
                { question: "Does it slow down my site?", answer: "No, our script loads asynchronously and heavily caches results to ensure zero impact on page speed." },
                { question: "What platforms do you support?", answer: "We support Shopify, WooCommerce, Magento, and custom builds via API." },
                { question: "Can I manually override recommendations?", answer: "Yes, you have full control to pin specific products or exclude others." }
            ]
        },
        cta: {
            title: "Start Personalizing Your Store",
            description: "Turn browsers into buyers with AI-driven recommendations.",
            buttonText: "Get Started",
            items: ["Integration in minutes", "30-day ROI guarantee", "Dedicated success manager", "Custom styling", "API access"]
        }
    },
    "cart-abandonment": {
        title: "Cart Abandonment",
        subtitle: "Recover Lost Revenue Automatically",
        description: "Engage customers who left items behind with personalized, timely messages that bring them back to checkout.",
        ctaText: "Recover Sales Now",
        featureHero: {
            badge: "Revenue Recovery",
            heading: "Stop Losing Sales at Checkout",
            imageSrc: "/ai-chat-interaction.png",
            features: [
                { icon: "MessageSquare", title: "Smart Triggers", description: "Detects exit intent and sends messages at the perfect moment." },
                { icon: "Mail", title: "Omnichannel Reach", description: "Reach customers via SMS, Email, and Push Notifications." },
                { icon: "BarChart", title: "Dynamic Incentives", description: "Offer personalized discounts only when necessary to convert." }
            ]
        },
        featuresGrid: {
            heading: "Advanced Recovery Tools",
            subheading: "Maximize your checkout completion rates.",
            features: [
                { icon: "Mail", title: "Email Sequences", description: "Automated drip campaigns that gently nudge customers back." },
                { icon: "MessageSquare", title: "SMS Reminders", description: "High-open-rate text messages for immediate recovery." },
                { icon: "ShoppingCart", title: "Persistent Cart", description: "Keep carts saved across devices for seamless return." },
                { icon: "Target", title: "Exit-Intent Popups", description: "Capture attention right before a visitor leaves the site." },
                { icon: "BarChart", title: "Recovery Analytics", description: "See exactly how much revenue you've recovered." },
                { icon: "RefreshCcw", title: "One-Click Checkout", description: "Direct links that restore the cart and go straight to payment." },
                { icon: "Search", title: "Product Specifics", description: "Include product images and details in recovery messages." },
                { icon: "Database", title: "A/B Testing", description: "Test message copy, timing, and offers." }
            ]
        },
        faq: {
            heading: "Recovery FAQ",
            description: "Common questions about cart recovery.",
            items: [
                { question: "What is the average recovery rate?", answer: "Our clients typically see a 10-15% recovery rate on abandoned carts." },
                { question: "Is this compliant with spam laws?", answer: "Yes, we strictly adhere to TCPA and GDPR guidelines for consent and frequency." },
                { question: "Can I customize the messages?", answer: "Fully. You can use our templates or build your own from scratch." },
                { question: "Does it work on mobile?", answer: "Absolutely. Our cross-device tracking ensures seamless recovery on any device." }
            ]
        },
        cta: {
            title: "Stop Leaving Money on the Table",
            description: "Recovering lost sales is the easiest way to grow your revenue.",
            buttonText: "Start Recovering",
            items: ["Easy setup", "Pay on performance", "Global compliance", "Real-time dashboard", "24/7 support"]
        }
    },
    "upsell-cross-sell": {
        title: "Upsell & Cross-sell",
        subtitle: "Increase Average Order Value",
        description: "Smart AI suggestions that encourage customers to add more to their cart, boosting your revenue per transaction.",
        ctaText: "Maximize Order Value",
        featureHero: {
            badge: "Growth Engine",
            heading: "Sell More to Every Customer",
            imageSrc: "/ai-chat-interaction.png",
            features: [
                { icon: "ShoppingCart", title: "Post-Purchase Upsells", description: "One-click offers shown immediately after checkout." },
                { icon: "Target", title: "In-Cart Cross-sells", description: "Suggest related items right in the shopping cart drawer." },
                { icon: "BarChart", title: "Smart Bundling", description: "Automatically create and promote high-value product bundles." }
            ]
        },
        featuresGrid: {
            heading: "Upsell & Cross-sell Features",
            subheading: "Strategic tools to grow your basket size.",
            features: [
                { icon: "ShoppingCart", title: "One-Click Upsell", description: "Allow customers to add items post-checkout without re-entering details." },
                { icon: "Target", title: "Frequently Bought Together", description: "Amazon-style recommendations on product pages." },
                { icon: "BarChart", title: "Threshold Progress Bars", description: "'Add $X more for free shipping' gamification." },
                { icon: "Search", title: "Smart Rules", description: "Define custom logic for which products are shown." },
                { icon: "Database", title: "Data-Driven Suggestions", description: "Let AI decide the highest converting offer." },
                { icon: "RefreshCcw", title: "A/B Testing", description: "Test different offers and placements." },
                { icon: "Mail", title: "Thank You Page Offers", description: "Utilize the high-visibility thank you page." },
                { icon: "MessageSquare", title: "Dynamic Pricing", description: "Offer time-sensitive discounts on upsells." }
            ]
        },
        faq: {
            heading: "Q&A",
            description: "Learn about maximizing AOV.",
            items: [
                { question: "Will this annoy my customers?", answer: "Not if done right. Our AI ensures offers are relevant and non-intrusive." },
                { question: "Does it work with subscriptions?", answer: "Yes, we support upgrading one-time purchases to subscriptions." },
                { question: "What is a good upselling rate?", answer: "A healthy take rate for post-purchase upsells is 15-20%." },
                { question: "Is it compatible with custom checkouts?", answer: "We support most major checkout providers and have API options." }
            ]
        },
        cta: {
            title: "Boost Your AOV Today",
            description: "Start increasing your revenue per customer instantly.",
            buttonText: "Get Started",
            items: ["Instant revenue boost", "No risk trial", "Seamless integration", "Mobile optimized", "Expert strategy"]
        }
    },

    // --- Customer Support Agents ---
    "order-tracking": {
        title: "Order Tracking Agent",
        subtitle: "Automated Order Updates",
        description: "Let customers track their orders instantly through chat, email, or SMS without bothering your support team.",
        ctaText: "Automate Interactions",
        featureHero: {
            badge: "Self-Service",
            heading: "Instant Answers for 'Where is my order?'",
            imageSrc: "/ai-chat-interaction.png",
            features: [
                { icon: "Search", title: "Real-time Status", description: "Fetches live data from your shipping carriers." },
                { icon: "MessageSquare", title: "24/7 Availability", description: "Customers get answers instantly, day or night." },
                { icon: "ShoppingCart", title: "Proactive Updates", description: "Automatically notify customers of shipping delays." }
            ]
        },
        featuresGrid: {
            heading: "Tracking Features",
            subheading: "Reduce WISMO (Where Is My Order) tickets by 80%.",
            features: [
                { icon: "Search", title: "Carrier Integration", description: "Supports FedEx, UPS, USPS, DHL, and 500+ others." },
                { icon: "MessageSquare", title: "Branded Tracking Page", description: "Keep customers on your site while they track." },
                { icon: "Mail", title: "Email Notifications", description: "Send beautiful, branded status update emails." },
                { icon: "Phone", title: "SMS Updates", description: "Send delivery updates directly to customers' phones." },
                { icon: "Database", title: "Order History", description: "Allow logged-in users to see past order status." },
                { icon: "LifeBuoy", title: "Escalation Path", description: "Seamlessly hand off to a human for complex issues." },
                { icon: "Target", title: "Marketing Assets", description: "Show product recommendations on the tracking page." },
                { icon: "BarChart", title: "Delivery Analytics", description: "Track carrier performance and delivery times." }
            ]
        },
        faq: {
            heading: "Tracking FAQ",
            description: "Common questions about automated tracking.",
            items: [
                { question: "Which carriers do you support?", answer: "We support over 500 global carriers including all majors." },
                { question: "Can I customize the tracking page?", answer: "Yes, fully branded with your colors, logo, and domain." },
                { question: "Does it reduce support tickets?", answer: "Our customers typically see a 50-80% reduction in tracking inquiries." },
                { question: "How fast is the data?", answer: "We ping carrier APIs frequently to ensure near real-time updates." }
            ]
        },
        cta: {
            title: "Reduce Support Tickets Now",
            description: "Free up your team to focus on high-value tasks.",
            buttonText: "Get Started",
            items: ["Reduce tickets by 80%", "Increase NPS", "Drive repeat sales", "Fast setup", "24/7 reliability"]
        }
    },
    "returns-refunds": {
        title: "Returns & Refunds Agent",
        subtitle: "Hassle-free Automated Returns",
        description: "Streamline your returns process with an AI agent that approves requests, generates labels, and processes refunds.",
        ctaText: "Automate Returns",
        featureHero: {
            badge: "Automation",
            heading: "Turn Returns into Exchanges",
            imageSrc: "/ai-chat-interaction.png",
            features: [
                { icon: "RefreshCcw", title: "Instant Approval", description: "Auto-approve returns based on your policy rules." },
                { icon: "FileText", title: "Label Generation", description: "Automatically generates and sends shipping labels." },
                { icon: "BarChart", title: "Exchange Focus", description: "Promotes exchanges over refunds to save revenue." }
            ]
        },
        featuresGrid: {
            heading: "Returns Management Metrics",
            subheading: "Make returns a positive touchpoint.",
            features: [
                { icon: "RefreshCcw", title: "Self-Service Portal", description: "Customers initiate returns without contacting support." },
                { icon: "Search", title: "Policy Rules Engine", description: "Set flexible rules for different products/conditions." },
                { icon: "BarChart", title: "Refund Analytics", description: "Track return reasons and identify product issues." },
                { icon: "ShoppingCart", title: "Instant Exchanges", description: "Allow customers to shop for a replacement immediately." },
                { icon: "Database", title: "Bonus Credit", description: "Offer extra store credit for choosing refund-to-store-credit." },
                { icon: "Mail", title: "Status Notifications", description: "Keep customers informed at every step of the return." },
                { icon: "Wrench", title: "QR Code Returns", description: "Paperless returns at drop-off locations." },
                { icon: "Target", title: "Fraud Protection", description: "Flag suspicious return patterns." }
            ]
        },
        faq: {
            heading: "Returns FAQ",
            description: "Questions about automating returns.",
            items: [
                { question: "Can I set different policies for sale items?", answer: "Yes, our rules engine makes it easy to segment policies." },
                { question: "Does it handle international returns?", answer: "Yes, we support cross-border returns and customs docs." },
                { question: "How do exchanges work?", answer: "Customers select a new item, paying or receiving the difference instantly." },
                { question: "Who pays for shipping?", answer: "Configurable. You can pay, customer can pay, or split based on reason." }
            ]
        },
        cta: {
            title: "Simplify Your Returns",
            description: "Create a returns experience your customers will love.",
            buttonText: "Start Automating",
            items: ["Retain 30% more revenue", "Save support time", "Improved customer loyalty", "Easy integration", "Detailed insights"]
        }
    },
    "faq-knowledge-base": {
        title: "FAQ & Knowledge Base Agent",
        subtitle: "Instant Answers 24/7",
        description: "An AI-powered knowledge base that instantly answers customer questions using your existing documentation.",
        ctaText: "Deploy Knowledge Agent",
        featureHero: {
            badge: "AI Retrieval",
            heading: "Your Documentation, Alive",
            imageSrc: "/ai-chat-interaction.png",
            features: [
                { icon: "Search", title: "Semantic Search", description: "Understands the meaning behind queries, not just keywords." },
                { icon: "MessageSquare", title: "Instant Chat", description: "Delivers answers directly in the chat widget." },
                { icon: "Database", title: "Auto-Updating", description: "Syncs with your Confluence, Notion, or Help Center." }
            ]
        },
        featuresGrid: {
            heading: "Knowledge Features",
            subheading: "Empower customers to help themselves.",
            features: [
                { icon: "Search", title: "Smart Search Bar", description: "Predictive search that suggests answers as they type." },
                { icon: "MessageSquare", title: "Contextual Help", description: "Suggest articles relevant to the current page/feature." },
                { icon: "BarChart", title: "Gap Analysis", description: "Identify searches that return no results to improve content." },
                { icon: "Database", title: "Multi-Source Sync", description: "Index content from PDF, Notion, Zendesk, and Web." },
                { icon: "Target", title: "Multilingual", description: "Auto-translate answers into 30+ languages." },
                { icon: "LifeBuoy", title: "Ticket Deflection", description: "Suggest articles before a user submits a support ticket." },
                { icon: "FileText", title: "Rich Media", description: "Serve images, videos, and guides within the answer." },
                { icon: "RefreshCcw", title: "Feedback Loop", description: "Users can vote on answer helpfulness to train the AI." }
            ]
        },
        faq: {
            heading: "Knowledge Base FAQ",
            description: "Questions about AI knowledge management.",
            items: [
                { question: "How does it learn my content?", answer: "We scrape your help center or connect via API to ingest your docs." },
                { question: "How accurate is it?", answer: "Very. We uses advanced RAG to ground answers in your verified content." },
                { question: "Can I edit the answers?", answer: "Yes, you can manually override or refine specific answers." },
                { question: "Does it work with Zendesk/Intercom?", answer: "Yes, we integrate seamlessly with major help desk platforms." }
            ]
        },
        cta: {
            title: "Deflect Support Tickets",
            description: "Let AI handle the repetitive questions so you don't have to.",
            buttonText: "Get Started",
            items: ["24/7 Instant Support", "Reduce Ticket Volume", "Multilingual Support", "Easy Setup", "Data Security"]
        }
    },
    "technical-support": {
        title: "Technical Support Agent",
        subtitle: "Automated Level 1 Support",
        description: "Diagnose and resolve common technical issues automatically using AI-guided troubleshooting flows.",
        ctaText: "Automate Tech Support",
        featureHero: {
            badge: "Troubleshooting",
            heading: "Expert Help, sans the Wait",
            imageSrc: "/ai-chat-interaction.png",
            features: [
                { icon: "Wrench", title: "Guided Flows", description: "Step-by-step troubleshooting for common issues." },
                { icon: "MessageSquare", title: "Context Aware", description: "Knows user device/browser details automatically." },
                { icon: "LifeBuoy", title: "Smart Handover", description: "Passes full logs to human agents if unresolved." }
            ]
        },
        featuresGrid: {
            heading: "Tech Support Features",
            subheading: "Scale your technical support capacity.",
            features: [
                { icon: "Wrench", title: "Interactive Diagnostics", description: "Ask users specific questions to pinpoint the bug." },
                { icon: "FileText", title: "Screenshot Analysis", description: "AI can analyze uploaded screenshots to understand errors." },
                { icon: "Database", title: "KB Integration", description: "Pull technical docs relevant to the specific error code." },
                { icon: "Target", title: "SaaS Integration", description: "Can check server status or account limits via API." },
                { icon: "Mail", title: "Ticket Generation", description: "Creates detailed Jira/Linear tickets for escalated bugs." },
                { icon: "BarChart", title: "Issue Trending", description: "Spot emerging technical issues across the user base." },
                { icon: "Phone", title: "Remote Assistance", description: "Co-browsing capabilities (optional add-on)." },
                { icon: "RefreshCcw", title: "Auto-Remediation", description: "Trigger scripts to reset passwords or clear cache." }
            ]
        },
        faq: {
            heading: "Tech Support FAQ",
            description: "Q&A on automated technical assistance.",
            items: [
                { question: "Can it handle complex bugs?", answer: "It handles L1 triage and common fixes. Complex bugs are routed to humans." },
                { question: "Is it secure?", answer: "Yes, SOC2 compliant and data is encrypted." },
                { question: "Does it integrate with Jira?", answer: "Yes, seamless integration with Jira, Linear, and GitHub Issues." },
                { question: "How do you build the flows?", answer: "No-code builder or ingest your existing runbooks." }
            ]
        },
        cta: {
            title: "Scale Your Support Team",
            description: "Handle 5x the volume without adding headcount.",
            buttonText: "Automate Support",
            items: ["Faster resolution", "Lower costs", "Better developer experience", "24/7 coverage", "Consistent answers"]
        }
    },

    // --- Booking & Scheduling ---
    "appointment-booking": {
        title: "Appointment Booking Agent",
        subtitle: "Fill Your Calendar Automatically",
        description: "An AI receptionist that captures leads and books appointments 24/7 directly into your calendar.",
        ctaText: "Start Booking",
        featureHero: {
            badge: "Scheduling",
            heading: "Never Miss a Meeting Opportunity",
            imageSrc: "/ai-chat-interaction.png",
            features: [
                { icon: "Calendar", title: "24/7 Booking", description: "Leads can book anytime, day or night." },
                { icon: "MessageSquare", title: "Natural Chat", description: "Conversational booking experience via SMS or Web." },
                { icon: "RefreshCcw", title: "Auto-Sync", description: "Syncs with Google Calendar, Outlook, and Calendly." }
            ]
        },
        featuresGrid: {
            heading: "Booking Features",
            subheading: "Efficiency for service-based businesses.",
            features: [
                { icon: "Calendar", title: "Calendar Management", description: "Detects conflicts and offers only available slots." },
                { icon: "Mail", title: "Reminders", description: "Automated SMS/Email reminders to reduce no-shows." },
                { icon: "Database", title: "CRM Sync", description: "Create contact records for every new booking." },
                { icon: "Target", title: "Lead Qualification", description: "Ask qualifying questions before allowing a booking." },
                { icon: "RefreshCcw", title: "Rescheduling", description: "Allow clients to easily reschedule via chat." },
                { icon: "Phone", title: "Voice Booking", description: "Can handle phone bookings with Voice AI." },
                { icon: "BarChart", title: "Conversion Tracking", description: "Track which channels drive the most appointments." },
                { icon: "Wrench", title: "Multiple Staff", description: "Route bookings to specific team members." }
            ]
        },
        faq: {
            heading: "Booking FAQ",
            description: "Common questions about AI scheduling.",
            items: [
                { question: "Does it handle time zones?", answer: "Yes, automatically detects and adjusts for user time zones." },
                { question: "Can I collect payments?", answer: "Yes, integrate with Stripe to take deposits upon booking." },
                { question: "What if I'm busy?", answer: "It only offers slots marked as 'free' in your connected calendar." },
                { question: "Is it easy to set up?", answer: "Connect your calendar, set your hours, and you're good to go." }
            ]
        },
        cta: {
            title: "Book More Meetings",
            description: "Stop playing email tag and start filling your pipeline.",
            buttonText: "Get Started",
            items: ["More appointments", "Fewer no-shows", "Better client experience", "Save time", "Grow revenue"]
        }
    },
    "service-scheduling": {
        title: "Service Scheduling Agent",
        subtitle: "Dispatch & Field Service Automation",
        description: "Coordinate field teams and schedule home services efficiently with AI-driven dispatching.",
        ctaText: "Optimize Dispatch",
        featureHero: {
            badge: "Field Service",
            heading: "Efficient Route & Job Planning",
            imageSrc: "/ai-chat-interaction.png",
            features: [
                { icon: "Target", title: "Route Optimization", description: "Minimize travel time between jobs." },
                { icon: "Calendar", title: "Smart Dispatch", description: "Assign the right tech based on skills and location." },
                { icon: "MessageSquare", title: "Customer Updates", description: "Automated 'On my way' notifications." }
            ]
        },
        featuresGrid: {
            heading: "Service Management Features",
            subheading: "Powering HVAC, Plumbing, Cleaning, and more.",
            features: [
                { icon: "Calendar", title: "Job Scheduling", description: "Drag-and-drop or AI-auto schedule jobs." },
                { icon: "Phone", title: "Mobile App", description: "Techs can see schedules and update status on the go." },
                { icon: "FileText", title: "Digital Invoicing", description: "Generate invoices and take payment on site." },
                { icon: "Database", title: "Customer History", description: "Techs see previous jobs and notes for context." },
                { icon: "Search", title: "Parts Management", description: "Track inventory used on each job." },
                { icon: "BarChart", title: "Performance Stats", description: "Track utilization rates and job completion times." },
                { icon: "RefreshCcw", title: "Recurring Jobs", description: "Easily manage subscriptions and recurring visits." },
                { icon: "LifeBuoy", title: "Emergency Dispatch", description: "Prioritize urgent calls automatically." }
            ]
        },
        faq: {
            heading: "Service FAQ",
            description: "Q&A for service businesses.",
            items: [
                { question: "Does it work for small teams?", answer: "Yes, perfect for teams of 1-100+ technicians." },
                { question: "Can customers book online?", answer: "Yes, includes a branded online booking widget." },
                { question: "Does it track location?", answer: "Yes, GPS tracking for active technicians." },
                { question: "Is there an offline mode?", answer: "The mobile app works offline and syncs when reconnected." }
            ]
        },
        cta: {
            title: "Streamline Your Operations",
            description: "Run a more efficient and profitable service business.",
            buttonText: "Start Free Trial",
            items: ["Reduce travel time", "Increase billable hours", "Improve satisfaction", "Get paid faster", "Scale easily"]
        }
    },

    // --- Voice Agents ---
    "inbound-voice": {
        title: "Inbound Voice Agent",
        subtitle: "Zero Hold Times, 24/7",
        description: "Replace your IVR with a conversational AI that answers calls, routes calls, and resolves issues immediately.",
        ctaText: "Listen to Demos",
        featureHero: {
            badge: "Voice AI",
            heading: "Human-Quality Phone Support",
            imageSrc: "/ai-chat-interaction.png",
            features: [
                { icon: "Phone", title: "Instant Answer", description: "Pick up every call on the first ring." },
                { icon: "MessageSquare", title: "Natural Voice", description: "Indistinguishable from a human agent." },
                { icon: "Wrench", title: "Task Execution", description: "Can update records, book appointments, and more." }
            ]
        },
        featuresGrid: {
            heading: "Voice Capabilities",
            subheading: "The future of the call center.",
            features: [
                { icon: "Phone", title: "Call Routing", description: "Intelligently route complex calls to the right human depts." },
                { icon: "Database", title: "CRM Sync", description: "Logs call recordings, transcripts, and summary to CRM." },
                { icon: "Target", title: "Sentiment Analysis", description: "Detect frustrated callers and escalate immediately." },
                { icon: "Globe", title: "Multilingual", description: "Speak to customers in their native language." },
                { icon: "Calendar", title: "Appointment Setting", description: "Book meetings directly over the phone." },
                { icon: "Search", title: "FAQ Answering", description: "Answer common questions without human intervention." },
                { icon: "RefreshCcw", title: "Context Carryover", description: "Remembers previous interactions for continuity." },
                { icon: "BarChart", title: "Call Analytics", description: "Detailed dashboard on call volume and resolution." }
            ]
        },
        faq: {
            heading: "Voice FAQ",
            description: "Common questions about Voice AI.",
            items: [
                { question: "Does it sound robotic?", answer: "No, we use ultra-low latency, emotional voices that sound human." },
                { question: "Can it transfer calls?", answer: "Yes, it can transfer to human agents or external numbers." },
                { question: "Is it expensive?", answer: "It costs a fraction of a human agent minute." },
                { question: "How do I set it up?", answer: "Provide a phone number (or port yours) and configure the flow." }
            ]
        },
        cta: {
            title: "Modernize Your Phone Support",
            description: "Give your callers the experience they deserve.",
            buttonText: "Hear Samples",
            items: ["Zero wait times", "24/7 coverage", "Infinite scalability", "Cost effective", "Brand consistency"]
        }
    },
    "outbound-voice": {
        title: "Outbound Voice Agent",
        subtitle: "Scale Your Outreach",
        description: "Automate lead qualification, appointment reminders, and surveys with high-volume outbound calling.",
        ctaText: "Start Calling",
        featureHero: {
            badge: "Sales Dialing",
            heading: "Reach More Leads, Faster",
            imageSrc: "/ai-chat-interaction.png",
            features: [
                { icon: "Phone", title: "Power Dialing", description: "Dial thousands of numbers simultaneously." },
                { icon: "Target", title: "Voicemail Detection", description: "Leaves messages automatically if no answer." },
                { icon: "MessageSquare", title: "Dynamic Scripting", description: "Adapts conversation based on prospect responses." }
            ]
        },
        featuresGrid: {
            heading: "Outbound Features",
            subheading: "Supercharge your sales team.",
            features: [
                { icon: "Target", title: "Lead Qualification", description: "Filter leads before passing them to closers." },
                { icon: "Calendar", title: "Appointment Reminders", description: "Call to confirm next day appointments." },
                { icon: "RefreshCcw", title: "Reactivation", description: "Call dormant leads to re-engage them." },
                { icon: "BarChart", title: "Survey/Feedback", description: "Conduct market research calls at scale." },
                { icon: "Database", title: "List Management", description: "Upload CSVs or sync with CRM lists." },
                { icon: "Search", title: "Compliance", description: "Built-in DNC (Do Not Call) list checking." },
                { icon: "Shield", title: "Local Presence", description: "Call from local area codes to increase pick-up rates." },
                { icon: "LifeBuoy", title: "Live Transfer", description: "Transfer interested leads to a human instantly." }
            ]
        },
        faq: {
            heading: "Outbound FAQ",
            description: "Questions about automated calling.",
            items: [
                { question: "Is this legal?", answer: "Yes, compliant with TCPA when used with proper consent." },
                { question: "What is the pickup rate?", answer: "Using local presence, we see rates comparable to human dialers." },
                { question: "Can I interrupt the AI?", answer: "Yes, our voices support full duplex interruption handling." },
                { question: "How many calls per hour?", answer: "Unlimited. Scale up or down instantly." }
            ]
        },
        cta: {
            title: "10x Your Outbound Volume",
            description: "Reach your entire total addressable market in days, not months.",
            buttonText: "Get Started",
            items: ["Massive scale", "Consistent messaging", "Detailed reporting", "CRM integration", "Low cost per lead"]
        }
    },

    // --- Email Agents ---
    "email-support-agent": {
        title: "Email Support Agent",
        subtitle: "Inbox Zero on Autopilot",
        description: "Reads, categorizes, drafts, and sends email responses to customers automatically.",
        ctaText: "Automate Email",
        featureHero: {
            badge: "Email AI",
            heading: "Clear Your Inbox Instantly",
            imageSrc: "/ai-chat-interaction.png",
            features: [
                { icon: "Mail", title: "Auto-Draft", description: "Drafts high-quality responses for human review." },
                { icon: "Send", title: "Auto-Send", description: "Confidently answers routine queries automatically." },
                { icon: "Target", title: "Triage", description: "Routes complex emails to the right department." }
            ]
        },
        featuresGrid: {
            heading: "Email Features",
            subheading: "High-volume email automation.",
            features: [
                { icon: "Mail", title: "Intent Recognition", description: "Understands if email is a refund request, bug report, etc." },
                { icon: "Database", title: "Knowledge Base", description: "Uses your docs to formulate accurate answers." },
                { icon: "Search", title: "Sentiment Analysis", description: "Prioritizes angry customers for faster response." },
                { icon: "Target", title: "Spam Filtering", description: "Aggressively filters noise from the support inbox." },
                { icon: "RefreshCcw", title: "Follow-up", description: "Automatically follows up if no reply received." },
                { icon: "BarChart", title: "Analytics", description: "Track response times and resolution rates." },
                { icon: "Wrench", title: "Action Execution", description: "Can trigger API actions (e.g. process refund) from email." },
                { icon: "Globe", title: "Multi-Language", description: "Respond to emails in any language." }
            ]
        },
        faq: {
            heading: "Email FAQ",
            description: "Q&A for email automation.",
            items: [
                { question: "Will it send wrong answers?", answer: "You can set it to 'Draft Mode' first to build confidence." },
                { question: "Does it work with Gmail/Outlook?", answer: "Yes, and dedicated helpdesks like Zendesk/Front." },
                { question: "How personalized are responses?", answer: "It uses customer name/data to sound very personal." },
                { question: "Can it handle attachments?", answer: "Yes, it can read PDFs and images sent by customers." }
            ]
        },
        cta: {
            title: "Stop Drowning in Email",
            description: "Let AI handle the noise so you can focus on the signal.",
            buttonText: "Clean My Inbox",
            items: ["Instant responses", "24/7 operation", "Consistent tone", "Reduce backlog", "Happy customers"]
        }
    },

    // --- Custom RAG Agents ---
    "document-training": {
        title: "Document Training",
        subtitle: "Turn Docs into Intelligence",
        description: "Upload your PDFs, Word docs, and text files to train a custom AI agent on your proprietary data.",
        ctaText: "Start Training",
        featureHero: {
            badge: "RAG Pipeline",
            heading: "Secure Knowledge Ingestion",
            imageSrc: "/ai-chat-interaction.png",
            features: [
                { icon: "FileText", title: "Multi-Format", description: "Support for PDF, DOCX, TXT, CSV, MD, and more." },
                { icon: "Database", title: "Vector Database", description: "Enterprise-grade vector storage for fast retrieval." },
                { icon: "Shield", title: "Data Security", description: "Encryption at rest and strict access controls." }
            ]
        },
        featuresGrid: {
            heading: "Training Features",
            subheading: "Build your corporate brain.",
            features: [
                { icon: "FileText", title: "OCR Support", description: "Read text from scanned documents and images." },
                { icon: "RefreshCcw", title: "Auto-Sync", description: "Keep AI updated as you update your Google Drive/Sharepoint." },
                { icon: "Target", title: "Chunking Strategy", description: "Optimized data chunking for better context retrieval." },
                { icon: "Search", title: "Citation", description: "AI answers include links to the source document." },
                { icon: "Wrench", title: "Playground", description: "Test your agent's knowledge immediately after upload." },
                { icon: "BarChart", title: "Usage Stats", description: "See what documents are being referenced most." },
                { icon: "Database", title: "Hybrid Search", description: "Combines keyword and semantic search for accuracy." },
                { icon: "LifeBuoy", title: "Hallucination Check", description: "Filters built-in to prevent wrong answers." }
            ]
        },
        faq: {
            heading: "Training FAQ",
            description: "Q&A on data training.",
            items: [
                { question: "Is my data used to train public models?", answer: "Never. Your data stays isolated in your private instance." },
                { question: "How much data can I upload?", answer: "We support gigabytes of text data per agent." },
                { question: "How long does indexing take?", answer: "Usually seconds to minutes depending on file size." },
                { question: "Can I delete data?", answer: "Yes, you have full control to add/remove data anytime." }
            ]
        },
        cta: {
            title: "Unlock Your Data",
            description: "Make your organizational knowledge accessible and actionable.",
            buttonText: "Upload Documents",
            items: ["Secure storage", "Instant indexing", "Chat with PDF", "Enterprise ready", "API access"]
        }
    },
    "internal-knowledge-assistant": {
        title: "Internal Knowledge Assistant",
        subtitle: "Supercharge Employee Productivity",
        description: "An internal AI search engine that helps your employees find information across Slack, Notion, Drive, and Jira.",
        ctaText: "Empower Your Team",
        featureHero: {
            badge: "Enterprise Search",
            heading: "One Search Bar for Everything",
            imageSrc: "/ai-chat-interaction.png",
            features: [
                { icon: "Search", title: "Unified Search", description: "Search across all apps from one interface." },
                { icon: "MessageSquare", title: "Slack Bot", description: "Ask questions directly within Slack channels." },
                { icon: "Shield", title: "Permissions", description: "Respects existing document access permissions." }
            ]
        },
        featuresGrid: {
            heading: "productivity Features",
            subheading: "Stop wasting time looking for files.",
            features: [
                { icon: "Search", title: "Contextual Answers", description: "Don't just get links, get synthesized answers." },
                { icon: "Database", title: "Data Connectors", description: "Integrations for GSuite, Microsoft 365, Notion, etc." },
                { icon: "Target", title: "Onboarding", description: "Help new hires find policy info instantly." },
                { icon: "RefreshCcw", title: "Daily Briefing", description: "Summarize updates from key channels/docs." },
                { icon: "BarChart", title: "Knowledge Gaps", description: "See what employees are searching for but not finding." },
                { icon: "Wrench", title: "Custom Actions", description: "Trigger workflows like 'IT Request' from chat." },
                { icon: "LifeBuoy", title: "IT Helpdesk", description: "Auto-resolve internal IT support tickets." },
                { icon: "Shield", title: "SSO Integration", description: "Secure login with Okta/Azure AD." }
            ]
        },
        faq: {
            heading: "Internal Search FAQ",
            description: "Q&A for internal tools.",
            items: [
                { question: "Is it secure?", answer: "Yes, SOC2 Type II compliant and self-hosted options available." },
                { question: "Who can see what?", answer: "It mirrors your existing permissions. Users only see what they have access to." },
                { question: "Does it work in Slack?", answer: "Yes, it can live as a bot in specific channels or DMs." },
                { question: "Is it hard to install?", answer: "One-click OAuth integrations for most data sources." }
            ]
        },
        cta: {
            title: "Make Your Team 10x Faster",
            description: "Eliminate the knowledge silos slowing your company down.",
            buttonText: "Request Demo",
            items: ["Boost productivity", "Faster onboarding", "Reduce questions", "Secure", "Easy to use"]
        }
    }
};

// Helper for icons since we can't store components in JSON if we fetched from API, but fine here

