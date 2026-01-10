"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Task {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
}

interface FeatureSectionProps {
    tasks: Task[];
    badge: string;
    heading: React.ReactNode;
    badges?: string[];
}

export function FeatureSection({ tasks, badge, heading, badges = [] }: FeatureSectionProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
            {/* LEFT SIDE - Task Loop with Vertical Bar */}
            <div className="relative w-full max-w-sm mx-auto md:mx-0">
                <Card className="overflow-hidden bg-muted/30 dark:bg-muted/20 backdrop-blur-md shadow-xl rounded-lg border-0">
                    <CardContent className="relative h-[280px] p-0 overflow-hidden">
                        {/* Scrollable Container */}
                        <div className="relative h-full overflow-hidden">
                            {/* Motion list */}
                            <motion.div
                                className="flex flex-col gap-0 absolute w-full"
                                animate={{ y: ["0%", "-50%"] }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 14,
                                    ease: "linear",
                                }}
                            >
                                {[...tasks, ...tasks].map((task, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 px-4 py-3 border-b border-border/50 relative"
                                    >
                                        {/* Icon + Content */}
                                        <div className="flex items-center justify-between flex-1">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 w-10 h-10 rounded-xl shadow-md flex items-center justify-center">
                                                    {task.icon}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-foreground">{task.title}</p>
                                                    <p className="text-xs text-muted-foreground">{task.subtitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Fade effect only inside card */}
                            <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background via-background/70 to-transparent pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* RIGHT SIDE - Content */}
            <div className="space-y-5">
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                    {badge}
                </Badge>
                <div className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {heading}
                </div>

                {badges.length > 0 && (
                    <div className="flex gap-2 flex-wrap pt-2">
                        {badges.map((b, i) => (
                            <Badge key={i} className="px-3 py-1.5 text-xs bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-foreground border border-indigo-500/20">
                                {b}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default FeatureSection;
