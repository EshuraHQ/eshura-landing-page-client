import { HandHelping, Users, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface Hero45Props {
    badge?: string;
    heading: string;
    imageSrc?: string;
    imageAlt?: string;
    features?: Feature[];
}

const WhyChooseUs = ({
    badge = "AI Agent Services",
    heading = "Why Choose Us",
    imageSrc = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
    imageAlt = "AI automation team",
    features = [
        {
            icon: <HandHelping className="h-auto w-5" />,
            title: "24/7 AI Support",
            description:
                "Our AI agents work around the clock, handling customer inquiries and tasks without breaks or downtime.",
        },
        {
            icon: <Users className="h-auto w-5" />,
            title: "Human-AI Collaboration",
            description:
                "Seamlessly blend AI automation with human oversight for optimal results and quality assurance.",
        },
        {
            icon: <Zap className="h-auto w-5" />,
            title: "Instant Deployment",
            description:
                "Deploy your AI agents in minutes with our pre-built templates and intuitive configuration tools.",
        },
    ],
}: Hero45Props) => {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto max-w-6xl px-6 overflow-hidden">
                <div className="mb-16 flex flex-col items-center gap-6 text-center">
                    <Badge variant="outline">{badge}</Badge>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{heading}</h2>
                </div>
                <div className="relative mx-auto max-w-screen-lg">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="aspect-video max-h-[500px] w-full rounded-xl object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                    <div className="absolute -right-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
                    <div className="absolute -left-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
                </div>
                <div className="mx-auto mt-10 flex max-w-screen-lg flex-col md:flex-row">
                    {features.map((feature, index) => (
                        <div key={index} className="flex grow basis-0 items-stretch">
                            {index > 0 && (
                                <Separator
                                    orientation="vertical"
                                    className="mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-muted via-transparent to-muted md:block"
                                />
                            )}
                            <div className="flex grow basis-0 flex-col rounded-md bg-background p-4">
                                <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg">
                                    {feature.icon}
                                </div>
                                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { WhyChooseUs };
