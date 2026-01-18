import { notFound } from "next/navigation";
import { industryData } from "@/lib/industry-data";
import AnimatedHero from "@/components/industry/animated-hero";
import { Hero115 } from "@/components/ui/hero-115";

import FeaturedSectionStats from "@/components/industry/featured-section-stats";
import FAQs from "@/components/industry/faqs-component";
import { HeroGridSection } from "@/components/ui/hero-grid-section";
import { cn } from "@/lib/utils";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return Object.keys(industryData).map((slug) => ({
        slug,
    }));
}

export default async function IndustryPage({ params }: PageProps) {
    const { slug } = await params;
    const data = industryData[slug];

    if (!data) {
        return notFound();
    }

    // Transform FAQ items to match component interface
    const faqItems = data.faq.items.map((item, index) => ({
        id: `item-${index + 1}`,
        question: item.question,
        answer: item.answer,
    }));

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Animated Hero Section */}
            <AnimatedHero
                title={data.hero.title}
                description={data.featureCarousel.description}
            />

            {/* New Hero 115 Section */}
            <Hero115
                heading={`Transforming ${data.hero.title} with AI`}
                description={`Leverage our advanced AI agents to revolutionize your ${data.hero.title.toLowerCase()} operations. Built for scale, security, and performance.`}
                button={{
                    text: "Get Started",
                    url: "/contact",
                    icon: undefined
                }}
                imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
                trustText="Trusted by industry leaders"
            />





            {/* Featured Section with Stats */}
            <FeaturedSectionStats />

            {/* FAQ Section */}
            <FAQs
                faqItems={faqItems}
                heading={data.faq.heading}
                description={data.faq.description}
            />

            {/* Hero Grid Section */}
            <HeroGridSection />
        </div>
    );
}