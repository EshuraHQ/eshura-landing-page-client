
import { notFound } from "next/navigation";
import { Lamp } from "@/components/industry/lamp";
import { FeatureWithImageCarousel } from "@/components/industry/feature-with-image-carousel";
import { FeatureWithAdvantages } from "@/components/industry/feature-with-advantages";
import { Faq5 } from "@/components/industry/faq-5";
import { industryData } from "@/lib/industry-data";

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

    return (
        <div className="min-h-screen bg-black text-foreground">
            {/* Hero Section - Black Theme */}
            <Lamp title={data.hero.title} />

            <div className="bg-background">
                <FeatureWithImageCarousel
                    badge={data.featureCarousel.badge}
                    title={data.featureCarousel.title}
                    description={data.featureCarousel.description}
                    images={data.featureCarousel.images}
                />

                <FeatureWithAdvantages
                    badge={data.featureAdvantages.badge}
                    title={data.featureAdvantages.title}
                    description={data.featureAdvantages.description}
                    advantages={data.featureAdvantages.advantages}
                />

                <Faq5
                    heading={data.faq.heading}
                    description={data.faq.description}
                    faqs={data.faq.items}
                />
            </div>

        </div>
    );
}
