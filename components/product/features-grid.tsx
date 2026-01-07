import { cn } from "@/lib/utils";
import { IconTerminal2 } from "@tabler/icons-react";
import {
    Target, Search, BarChart, ShoppingCart, MessageSquare, Phone, Calendar, Mail,
    FileText, Database, LifeBuoy, RefreshCcw, Wrench, Globe, Shield, Send
} from "lucide-react";

interface Feature {
    title: string;
    description: string;
    icon: string;
}

const iconMap: Record<string, any> = {
    Target, Search, BarChart, ShoppingCart, MessageSquare, Phone, Calendar, Mail,
    FileText, Database, LifeBuoy, RefreshCcw, Wrench, Globe, Shield, Send,
    Terminal: IconTerminal2
};

interface FeaturesGridProps {
    heading: string;
    subheading: string;
    features: Feature[];
}

export function FeaturesGrid({
    heading = "Complete Lead Generation Toolkit",
    subheading = "Everything you need to build a high-performance sales engine.",
    features = []
}: FeaturesGridProps) {

    const displayFeatures = features.length > 0 ? features : [
        {
            title: "No Features Data",
            description: "Please provide features data.",
            icon: "Terminal",
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">{heading}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subheading}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
                    {displayFeatures.map((feature, index) => (
                        <Feature key={feature.title} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: any;
    index: number;
}) => {
    const IconComponent = iconMap[icon] || Target;

    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature border-border",
                (index === 0 || index === 4) && "lg:border-l border-border",
                index < 4 && "lg:border-b border-border"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-muted/50 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-muted/50 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-muted-foreground">
                <IconComponent className="w-6 h-6" />
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
                    {title}
                </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10 leading-relaxed">
                {description}
            </p>
        </div>
    );
};
