"use client";

import React, { useRef } from 'react';
import {
    motion,
    useMotionValue,
    useMotionTemplate,
    useAnimationFrame,
    useInView
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Helper component for the SVG grid pattern.
 */
const GridPattern = ({ offsetX, offsetY, size }: { offsetX: any; offsetY: any; size: number }) => {
    return (
        <svg className="w-full h-full">
            <defs>
                <motion.pattern
                    id="infinite-grid-pattern"
                    width={size}
                    height={size}
                    patternUnits="userSpaceOnUse"
                    x={offsetX}
                    y={offsetY}
                >
                    <path
                        d={`M ${size} 0 L 0 0 0 ${size}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-muted-foreground"
                    />
                </motion.pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#infinite-grid-pattern)" />
        </svg>
    );
};

interface InfiniteGridBackgroundProps {
    children?: React.ReactNode;
    className?: string;
    gridSize?: number;
    showBlurSpheres?: boolean;
}

/**
 * The Infinite Grid Background Component
 * Displays a scrolling background grid that reveals an active layer on mouse hover.
 * This is a simplified version for use as a section background.
 */
export const InfiniteGridBackground = ({
    children,
    className,
    gridSize = 40,
    showBlurSpheres = true
}: InfiniteGridBackgroundProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef);

    // Track mouse position with Motion Values for performance
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    // Grid offsets for infinite scroll animation
    const gridOffsetX = useMotionValue(0);
    const gridOffsetY = useMotionValue(0);

    const speedX = 0.3;
    const speedY = 0.3;

    useAnimationFrame(() => {
        if (!isInView) return;
        const currentX = gridOffsetX.get();
        const currentY = gridOffsetY.get();
        gridOffsetX.set((currentX + speedX) % gridSize);
        gridOffsetY.set((currentY + speedY) % gridSize);
    });

    // Create a dynamic radial mask for the "flashlight" effect
    const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className={cn(
                "relative w-full overflow-hidden",
                className
            )}
        >
            {/* Layer 1: Subtle background grid (always visible) */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} size={gridSize} />
            </div>

            {/* Layer 2: Highlighted grid (revealed by mouse mask) */}
            <motion.div
                className="absolute inset-0 z-0 opacity-30 pointer-events-none"
                style={{ maskImage, WebkitMaskImage: maskImage }}
            >
                <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} size={gridSize} />
            </motion.div>

            {/* Decorative Blur Spheres */}
            {showBlurSpheres && (
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute right-[-15%] top-[-15%] w-[35%] h-[35%] rounded-full bg-indigo-500/20 dark:bg-indigo-600/10 blur-[100px]" />
                    <div className="absolute left-[-10%] bottom-[-15%] w-[30%] h-[30%] rounded-full bg-purple-500/20 dark:bg-purple-600/10 blur-[100px]" />
                </div>
            )}

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default InfiniteGridBackground;
