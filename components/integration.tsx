import { Button } from "@/components/ui/button";
import { CpuArchitecture } from "@/components/ui/cpu-architecture";

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
    heading = "LLM-Powered Seamless Integration",
    title = "Add LLMs to Your Existing Systems",
    description = "Integrate large language models into your current tools, data, and workflows to build intelligent agents—without changing your core infrastructure.",

    buttonPrimary = {
        label: "Book a Demo",
        href: "/contact",
    },
    buttonSecondary = {
        label: "View Integrations",
        href: "#",
    },
}: Feature2Props) => {
    return (
        <section className="py-6 md:py-12 bg-background">
            <div className="container mx-auto max-w-6xl px-6 flex flex-col gap-14">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                        {heading}
                    </h2>
                </div>

                <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
                    {/* CpuArchitecture replacing the image */}
                    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-10 pb-10 pt-4 mx-auto">
                        <CpuArchitecture />
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
