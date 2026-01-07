import { Badge } from "@/components/ui/badge";

export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqProps {
    badge?: string;
    heading?: string;
    description?: string;
    faqs?: FaqItem[];
}

export const ProductFaq = ({
    badge = "FAQ",
    heading = "Common Questions",
    description = "Learn more about how our AI Lead Generation agents work.",
    faqs = []
}: FaqProps) => {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4">{badge}</Badge>
                    <h2 className="text-3xl font-bold tracking-tight">{heading}</h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
                <div className="mx-auto mt-8 max-w-3xl">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-6 flex gap-6 p-6 rounded-2xl bg-background border">
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-sm font-bold text-primary">
                                {index + 1}
                            </span>
                            <div>
                                <div className="mb-2">
                                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
