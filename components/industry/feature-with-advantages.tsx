import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Advantage {
    title: string;
    description: string;
}

interface FeatureWithAdvantagesProps {
    badge: string;
    title: string;
    description: string;
    advantages: Advantage[];
}

export function FeatureWithAdvantages({ badge, title, description, advantages }: FeatureWithAdvantagesProps) {
    return (
        <div className="w-full py-20 lg:py-40 bg-background text-foreground">
            <div className="container mx-auto">
                <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
                    <div>
                        <Badge>{badge}</Badge>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
                            {title}
                        </h2>
                        <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
                            {description}
                        </p>
                    </div>
                    <div className="flex gap-10 pt-12 flex-col w-full">
                        <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
                            {advantages.map((adv, index) => (
                                <div key={index} className="flex flex-row gap-6 w-full items-start">
                                    <Check className="w-4 h-4 mt-2 text-primary" />
                                    <div className="flex flex-col gap-1">
                                        <p>{adv.title}</p>
                                        <p className="text-muted-foreground text-sm">
                                            {adv.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
