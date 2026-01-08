import { notFound } from "next/navigation";
import { industryData } from "@/lib/industry-data";
import AnimatedHero from "@/components/industry/animated-hero";
import WavePath from "@/components/industry/wave-path";
import FeaturedSectionStats from "@/components/industry/featured-section-stats";
import CaseStudies from "@/components/industry/case-studies";
import FAQs from "@/components/industry/faqs-component";
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

            {/* Wave Path Divider */}
            <div className="relative w-full flex min-h-[30vh] flex-col items-center justify-center bg-background">
                <div
                    aria-hidden="true"
                    className={cn(
                        "pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full",
                        "bg-[radial-gradient(ellipse_at_center,hsl(var(--foreground)/.1),transparent_50%)]",
                        "blur-[30px]"
                    )}
                />

                <div className="flex w-[70vw] flex-col items-end">
                    <WavePath className="mb-10" />
                    <div className="flex w-full flex-col items-end">
                        <div className="flex justify-end">
                            <p className="text-muted-foreground mt-2 text-sm">
                                {data.featureCarousel.badge}
                            </p>
                            <p className="text-foreground/80 ml-8 w-3/4 text-2xl md:text-4xl">
                                {data.featureCarousel.title}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            

            {/* Case Studies Section */}
            <CaseStudies />


            {/* Featured Section with Stats */}
            <FeaturedSectionStats />

            {/* FAQ Section */}
            <FAQs
                faqItems={faqItems}
                heading={data.faq.heading}
                description={data.faq.description}
            />
        </div>
    );
}