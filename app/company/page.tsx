"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { About } from "@/components/company/company-about";
import { TeamSection } from "@/components/company/team-section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import FeaturedSectionStats from "@/components/company/featured-section-stats";

export default function CompanyPage() {
    return (
        <>

            <div className="w-full scroll-smooth pt-24">
                {/* 1. Hero Section with Sparkles */}
                <section id="hero" className="h-[40rem] w-full bg-background flex flex-col items-center justify-center overflow-hidden relative">
                    <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-foreground relative z-20">
                        Eshura
                    </h1>
                    <div className="w-[40rem] h-40 relative">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                        {/* Core component */}
                        <SparklesCore
                            background="transparent"
                            minSize={1}
                            maxSize={3}
                            particleDensity={150}
                            className="w-full h-full"
                            particleColor="#6366f1"
                        />

                        {/* Radial Gradient to prevent sharp edges */}
                        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>
                </section>

                <section id="about" className="bg-background">
                    <About
                        title="About Eshura"
                        description="We are pioneering the future of Agentic AI, empowering businesses to automate complex workflows with human-like precision."
                    />
                </section>

                {/* 3. Team Section */}
                <TeamSection />

                {/* 3. Vision & Mission Section (Stats) */}
                {/* <section id="vision" className="bg-background">
                    <FeaturedSectionStats />
                </section> */}

                {/* 4. Contact Us Section (Background Beams) */}
                <section id="contact" className="h-[40rem] w-full bg-background relative flex flex-col items-center justify-center antialiased">
                    <div className="max-w-2xl mx-auto p-4 relative z-10 w-full">
                        <h1 className="text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
                            Get in Touch
                        </h1>
                        <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center">
                            Ready to transform your business? Contact our team to schedule a demo or discuss your specific needs. We are here to help you deploy your first agent in minutes.
                        </p>
                        <div className="flex gap-2 mt-8 w-full max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="enter your email"
                                className="flex-1"
                            />
                            <Button variant="default">Join Waitlist</Button>
                        </div>
                    </div>
                    {/* <BackgroundBeams /> */}
                </section>
            </div>

        </>
    );
}
