"use client";

import { useState } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FeatureItem {
    id: number;
    title: string;
    image: string;
    description: string;
}

interface Feature197Props {
    features?: FeatureItem[];
    heading?: string;
}

const defaultFeatures: FeatureItem[] = [
    {
        id: 1,
        title: "Intelligent Task Automation",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        description:
            "Our AI agents analyze your workflows and automatically handle repetitive tasks. From data entry to complex decision trees, let intelligent automation work for you around the clock.",
    },
    {
        id: 2,
        title: "Natural Language Processing",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
        description:
            "AI agents understand context and nuance in human communication. Process emails, chat messages, and documents with human-like comprehension and respond appropriately.",
    },
    {
        id: 3,
        title: "Custom Agent Training",
        image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=600&fit=crop",
        description:
            "Train your AI agents on your specific business processes and terminology. Our platform learns from your data to deliver increasingly accurate and relevant results over time.",
    },
    {
        id: 4,
        title: "Enterprise Security",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop",
        description:
            "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA regulations. Your data stays secure with role-based access controls and comprehensive audit trails.",
    },
    {
        id: 5,
        title: "Seamless Integrations",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        description:
            "Connect your AI agents to 200+ popular business tools including Salesforce, HubSpot, Slack, and more. REST APIs and webhooks enable custom integrations with your existing tech stack.",
    },
];

const Feature197 = ({ features = defaultFeatures, heading = "Our Working Process" }: Feature197Props) => {
    const [activeTabId, setActiveTabId] = useState<number | null>(1);
    const [activeImage, setActiveImage] = useState(features[0].image);

    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto max-w-6xl px-6">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                        {heading}
                    </h2>
                </div>

                <div className="flex w-full items-start justify-between gap-12">
                    <div className="w-full md:w-1/2">
                        <Accordion type="single" className="w-full" defaultValue="item-1">
                            {features.map((tab) => (
                                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                                    <AccordionTrigger
                                        onClick={() => {
                                            setActiveImage(tab.image);
                                            setActiveTabId(tab.id);
                                        }}
                                        className="cursor-pointer py-5 !no-underline transition"
                                    >
                                        <h6
                                            className={`text-xl font-semibold ${tab.id === activeTabId ? "text-foreground" : "text-muted-foreground"}`}
                                        >
                                            {tab.title}
                                        </h6>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mt-3 text-muted-foreground">
                                            {tab.description}
                                        </p>
                                        <div className="mt-4 md:hidden">
                                            <img
                                                src={tab.image}
                                                alt={tab.title}
                                                className="h-full max-h-80 w-full rounded-md object-cover"
                                            />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                    <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-xl bg-muted md:block">
                        <img
                            src={activeImage}
                            alt="Feature preview"
                            className="aspect-[4/3] w-full rounded-md object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Feature197 };
