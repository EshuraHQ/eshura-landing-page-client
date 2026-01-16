"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

type MotionButtonProps = MotionProps & {
    asChild?: boolean;
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "outline" | "secondary" | "ghost" | "link"; // Add basic variants to match usage
    size?: "default" | "sm" | "lg" | "icon";
};

type HTMLButtonProps = Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "ref" | "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"
>;

const MotionButton = React.forwardRef<
    HTMLButtonElement,
    MotionButtonProps & HTMLButtonProps
>(({ asChild = false, children, className, variant = "default", size = "default", ...props }, ref) => {
    // Simple variant mapping to standard Tailwind classes if not using cva here
    // Or we could replicate buttonVariants from button.tsx. 
    // For now I'll use the user provided code but add the variant classes manually or assume className handles it
    // The user provided code only had "bg-primary text-white" hardcoded.
    // I will make it more flexible to accept classes.

    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
    };

    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
    };

    const variantClass = variants[variant] || variants.default;
    const sizeClass = sizes[size] || sizes.default;

    const classNames = cn(
        baseStyles,
        variantClass,
        sizeClass,
        className
    );

    if (asChild && React.isValidElement(children)) {
        const child = children as React.ReactElement<{ className?: string } & React.RefAttributes<any>>;
        return (
            <motion.span whileTap={{ scale: 0.95 }}>
                {React.cloneElement(child, {
                    className: cn(child.props.className, classNames),
                    ref,
                    ...props,
                })}
            </motion.span>
        );
    }

    return (
        <motion.button whileTap={{ scale: 0.95 }} className={classNames} {...props} ref={ref}>
            {children}
        </motion.button>
    );
});

MotionButton.displayName = "MotionButton";

export { MotionButton };
