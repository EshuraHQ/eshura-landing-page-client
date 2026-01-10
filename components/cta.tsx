import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Cta4Props {
    heading?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
    items?: string[];
}

const defaultItems = [
    "No-Code Setup",
    "24/7 AI Support",
    "Custom Training",
    "Enterprise Security",
    "200+ Integrations",
];

export const Cta = ({
    heading = "Get Started Today",
    title = "Ready to Transform Your Business?",
    description = "Join hundreds of companies already using AI agents to automate operations, reduce costs, and scale their business.",
    buttonText = "Book a Demo",
    buttonUrl = "/contact",
    items = defaultItems,
}: Cta4Props) => {
    return (
        <section className="py-6 md:py-12 bg-background">
            <div className="container mx-auto max-w-6xl px-6">
                {/* Section Heading */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                        {heading}
                    </h2>
                </div>

                <div className="flex justify-center">
                    <div className="max-w-5xl w-full">
                        <div className="flex flex-col items-start justify-between gap-8 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16">
                            <div className="md:w-1/2">
                                <h4 className="mb-1 text-2xl font-bold md:text-3xl">{title}</h4>
                                <p className="text-muted-foreground">{description}</p>
                                <Button className="mt-6" asChild>
                                    <a href={buttonUrl}>
                                        {buttonText} <ArrowRight className="ml-2 size-4" />
                                    </a>
                                </Button>
                            </div>
                            <div className="md:w-1/3">
                                <ul className="flex flex-col space-y-2 text-sm font-medium">
                                    {items.map((item, idx) => (
                                        <li className="flex items-center" key={idx}>
                                            <Check className="mr-4 size-4 flex-shrink-0 text-green-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
