import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CtaProps {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
    items?: string[];
}

export const ProductCta = ({
    title = "Ready to Supercharge Your Sales?",
    description = "Join thousands of forward-thinking sales teams who are automating their pipeline with AI.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    items = []
}: CtaProps) => {
    return (
        <section className="py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex justify-center">
                    <div className="w-full max-w-5xl">
                        <div className="flex flex-col items-start justify-between gap-12 rounded-3xl bg-primary/5 border px-8 py-12 md:flex-row lg:px-20 lg:py-20">
                            <div className="md:w-1/2 space-y-6">
                                <h4 className="text-3xl font-bold md:text-4xl tracking-tight">{title}</h4>
                                <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
                                <div className="pt-4">
                                    <Button className="h-12 rounded-full px-8 text-base" asChild>
                                        <a href={buttonUrl} target="_blank">
                                            {buttonText} <ArrowRight className="ml-2 size-4" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className="md:w-1/3">
                                <ul className="flex flex-col space-y-4 text-sm font-medium">
                                    {items.map((item, idx) => (
                                        <li className="flex items-center gap-3" key={idx}>
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
                                                <Check className="size-3.5 text-primary" />
                                            </div>
                                            <span className="text-foreground/80">{item}</span>
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
