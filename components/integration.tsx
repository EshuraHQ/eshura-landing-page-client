"use client"

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const IconCloud = dynamic(() => import("@/components/interactive-icon-cloud").then(mod => ({ default: mod.IconCloud })), { ssr: false });

const iconSlugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

interface Feature2Props {
    heading?: string;
    title?: string;
    description?: string;
    buttonPrimary?: {
        label: string;
        href: string;
    };
    buttonSecondary?: {
        label: string;
        href: string;
    };
}

export const Integration = ({
    heading = "Seamless Integration",
    title = "Connect with Your Favorite Tools",
    description = "Our AI agents integrate seamlessly with your existing tech stack. Connect to CRMs, ERPs, databases, and communication platforms with just a few clicks.",
    buttonPrimary = {
        label: "Book a Demo",
        href: "#",
    },
    buttonSecondary = {
        label: "View Integrations",
        href: "#",
    },
}: Feature2Props) => {
    return (
        <section className="py-6 md:py-12 bg-background">
            <div className="container mx-auto max-w-6xl px-6">
                {/* Section Heading */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                        {heading}
                    </h2>
                </div>

                <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
                    {/* IconCloud replacing the image */}
                    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-10 pb-10 pt-4 mx-auto">
                        <IconCloud iconSlugs={iconSlugs} />
                    </div>

                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h3 className="my-6 mt-0 text-4xl font-semibold text-balance lg:text-5xl">
                            {title}
                        </h3>
                        <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
                            {description}
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            <Button asChild>
                                <a href={buttonPrimary.href}>
                                    {buttonPrimary.label}
                                </a>
                            </Button>
                            <Button variant="outline" asChild>
                                <a href={buttonSecondary.href}>
                                    {buttonSecondary.label}
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
