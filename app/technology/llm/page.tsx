"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Faq5 } from "@/components/ui/faq-5";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { Feature } from "@/components/ui/feature-with-image";
import { Particles } from "@/components/ui/particles";
import TechnologyHeroSection from "@/components/technology/technology-hero-section";

export default function LlmPage() {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Particles
                    className="absolute inset-0 h-full w-full"
                    quantity={100}
                    ease={80}
                    color={color}
                    refresh
                />
            </div>
            <div className="relative z-10">
                {/* Technology Hero Section */}
                <TechnologyHeroSection />

                {/* Hero / Intro Section with Image */}
                <Feature />

                {/* Hover Effects Feature Section */}
                <section className="py-20 bg-muted/20">
                    <div className="container mx-auto px-4 md:px-8 text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Architected for Autonomy
                        </h2>
                        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                            Our agentic architecture is designed to handle complex tasks with intelligence and speed, ensuring your business stays ahead.
                        </p>
                    </div>
                    <FeaturesSectionWithHoverEffects />
                </section>

                {/* FAQ Section */}
                <Faq5
                    heading="Architecture FAQs"
                    description="Learn more about how our agentic architecture powers your solutions."
                />
            </div>
        </div>
    );
}
