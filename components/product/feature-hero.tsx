import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Target, Search, BarChart, ShoppingCart, MessageSquare, Phone, Calendar, Mail,
    FileText, Database, LifeBuoy, RefreshCcw, Wrench, Globe, Shield, Send
} from "lucide-react";

interface Feature {
    icon: string;
    title: string;
    description: string;
}

interface FeatureHeroProps {
    badge?: string;
    heading: string;
    imageSrc?: string;
    imageAlt?: string;
    features?: Feature[];
}

const iconMap: Record<string, any> = {
    Target, Search, BarChart, ShoppingCart, MessageSquare, Phone, Calendar, Mail,
    FileText, Database, LifeBuoy, RefreshCcw, Wrench, Globe, Shield, Send
};

export const FeatureHero = ({
    badge = "Smart Targeting",
    heading = "Identify Your Ideal Customers Instantly",
    imageSrc = "/ai-chat-interaction.png",
    imageAlt = "Feature Visual",
    features = []
}: FeatureHeroProps) => {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-6 overflow-hidden">
                <div className="mb-16 flex flex-col items-center gap-6 text-center max-w-3xl mx-auto">
                    <Badge variant="outline" className="px-4 py-1">{badge}</Badge>
                    <h2 className="text-3xl font-bold lg:text-4xl tracking-tight">{heading}</h2>
                </div>

                <div className="relative mx-auto max-w-5xl">
                    {/* Visual Placeholder for Feature Hero */}
                    <div className="aspect-video w-full rounded-2xl overflow-hidden border bg-background shadow-xl flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5" />

                        {/* Mock UI */}
                        <div className="w-3/4 h-3/4 bg-card rounded-xl border shadow-sm p-6 flex flex-col gap-4">
                            <div className="flex items-center gap-4 border-b pb-4">
                                <div className="h-10 w-10 rounded-full bg-primary/20" />
                                <div className="space-y-2">
                                    <div className="h-3 w-32 bg-muted rounded" />
                                    <div className="h-2 w-24 bg-muted rounded" />
                                </div>
                            </div>
                            <div className="flex-1 bg-muted/30 rounded border border-dashed flex items-center justify-center text-muted-foreground">
                                AI Scanning Market Data...
                            </div>
                        </div>
                    </div>

                    <div className="absolute -right-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
                    <div className="absolute -left-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
                </div>

                <div className="mx-auto mt-16 flex max-w-5xl flex-col md:flex-row gap-8 md:gap-0">
                    {features.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon] || Target;
                        return (
                            <div key={index} className="flex-1 flex md:contents">
                                {index > 0 && (
                                    <Separator
                                        orientation="vertical"
                                        className="mx-6 hidden h-auto w-[1px] bg-gradient-to-b from-border/0 via-border to-border/0 md:block"
                                    />
                                )}
                                <div
                                    className="flex flex-col items-center text-center p-4"
                                >
                                    <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <IconComponent className="size-6" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
