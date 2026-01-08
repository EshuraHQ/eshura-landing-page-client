import { notFound } from "next/navigation";
import { FeatureHero } from "@/components/product/feature-hero";
import { FeaturesGrid } from "@/components/product/features-grid";
import { ProductFaq } from "@/components/product/faq";
import { ProductCta } from "@/components/product/cta";
import { Footer } from "@/components/footer";
import { menuItems } from "@/lib/menu-data";
import { productData } from "@/lib/product-data";
import { ProductHero } from "@/components/product/hero-section";

interface PageProps {
    params: Promise<{
        category: string;
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const params: { category: string; slug: string }[] = [];

    menuItems.forEach((item) => {
        if (item.name === 'Products' && item.dropdownContent?.groups) {
            item.dropdownContent.groups.forEach((group) => {
                group.items.forEach((subItem) => {
                    const parts = subItem.href.split('/').filter(Boolean);
                    // Expecting /products/[category]/[slug] -> ['products', 'category', 'slug']
                    if (parts.length === 3 && parts[0] === 'products') {
                        params.push({
                            category: parts[1],
                            slug: parts[2],
                        });
                    }
                });
            });
        }
    });

    return params;
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;
    const data = productData[slug];

    if (!data) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <ProductHero
                title={data.title}
                subtitle={data.subtitle}
                description={data.description}
                ctaText={data.ctaText}
            />
            <FeatureHero
                badge={data.featureHero.badge}
                heading={data.featureHero.heading}
                imageSrc={data.featureHero.imageSrc}
                features={data.featureHero.features}
            />
            <FeaturesGrid
                heading={data.featuresGrid.heading}
                subheading={data.featuresGrid.subheading}
                features={data.featuresGrid.features}
            />
            <ProductFaq
                heading={data.faq.heading}
                description={data.faq.description}
                faqs={data.faq.items}
            />
            <ProductCta
                title={data.cta.title}
                description={data.cta.description}
                buttonText={data.cta.buttonText}
                items={data.cta.items}
            />
        </div>
    );
}
