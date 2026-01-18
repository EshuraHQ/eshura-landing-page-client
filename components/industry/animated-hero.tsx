"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Github } from "lucide-react";
import { MotionButton } from "@/components/ui/motion-button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AnimatedHeroProps {
    title?: string;
    description?: string;
}

export default function AnimatedHero({ title, description }: AnimatedHeroProps) {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["amazing", "innovative", "revolutionary", "powerful", "transformative"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    const [particles, setParticles] = useState<Array<{ top: string; left: string; duration: number; delay: number }>>([]);

    useEffect(() => {
        // Reduced particle count for better performance
        const newParticles = Array.from({ length: 15 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: 5 + Math.random() * 5,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden bg-gradient-to-br from-background to-muted/30">
            <DotPattern className={cn(
                "[mask-image:radial-gradient(50vw_circle_at_center,white,transparent)]",
            )} />
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 1.4 }}
                className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-primary/30 blur-[120px] rounded-full z-0 will-change-transform"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 1.6, delay: 0.3 }}
                className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-secondary/20 blur-[160px] rounded-full z-0 will-change-transform"
            />

            <div className="absolute inset-0 z-0 pointer-events-none">
                {particles.map((particle, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 0.2, y: [0, -20, 0] }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                        }}
                        className="absolute w-1 h-1 bg-muted-foreground/20 rounded-full will-change-transform"
                        style={{
                            top: particle.top,
                            left: particle.left,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center max-w-3xl space-y-8">
                {/* Optional Github Button - Kept as placeholder for style validity, can be removed or changed to something else */}
                <button
                    className="group relative inline-flex h-10 cursor-pointer items-center justify-center rounded-full border-0 bg-[length:200%] px-6 font-medium transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent]
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50
            before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-[rainbow_3s_linear_infinite] before:bg-[linear-gradient(90deg,var(--color-1),var(--color-2),var(--color-3),var(--color-4),var(--color-5))] before:bg-[length:200%] before:[filter:blur(12px)]
            bg-white dark:bg-black text-foreground shadow-sm"
                    style={{
                        ['--color-1' as any]: 'hsl(210, 100%, 60%)', // Blue
                        ['--color-2' as any]: 'hsl(280, 80%, 65%)',  // Purple
                        ['--color-3' as any]: 'hsl(330, 100%, 65%)', // Pink
                        ['--color-4' as any]: 'hsl(20, 100%, 60%)',  // Orange
                        ['--color-5' as any]: 'hsl(140, 70%, 50%)',  // Green
                    }}
                >
                    <span className="inline-flex items-center text-xs md:text-sm text-foreground font-medium">
                        <Github className="w-4 h-4 mr-2" />
                        Explore Our Solutions
                    </span>
                </button>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter text-foreground">
                    <span className="block mb-2">This is something</span>
                    <span className="relative flex w-full justify-center overflow-hidden text-center h-[1.1em] md:h-[1.2em]">
                        {titles.map((titleText, index) => (
                            <motion.span
                                key={index}
                                className="absolute font-bold text-primary"
                                initial={{ opacity: 0, y: "100%" }}
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                                animate={
                                    titleNumber === index
                                        ? { y: "0%", opacity: 1 }
                                        : {
                                            y: titleNumber > index ? "-100%" : "100%",
                                            opacity: 0,
                                        }
                                }
                            >
                                {titleText}
                            </motion.span>
                        ))}
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                    {description || "Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever."}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
                >
                    <MotionButton size="lg" className="w-full sm:w-auto gap-2">
                        Get Started <MoveRight className="w-4 h-4" />
                    </MotionButton>
                    <MotionButton size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                        Jump on a call <PhoneCall className="w-4 h-4" />
                    </MotionButton>
                </motion.div>
            </div>
        </section>
    );
}
