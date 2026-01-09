'use client'
import React from 'react'
import { Mail, SendHorizonal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/animated-group'
import { cn } from '@/lib/utils'
import { InfiniteSlider } from '@/components/infinite-slider'
import { ProgressiveBlur } from '@/components/progressive-blur'
import { FlickeringGridDemo } from '@/components/flickering-grid-hero'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            y: 12,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            } as const,
        },
    },
}

export function HeroSection() {
    const [activeCategory, setActiveCategory] = React.useState('fitness')

    return (
        <>
            <main className="overflow-hidden relative">
                <FlickeringGridDemo />
                <section className="pt-24 pb-6 md:pt-32 md:pb-12">
                    <div className="relative mx-auto max-w-6xl px-6 pt-6 lg:pt-10">
                        <div className="relative z-10 mx-auto max-w-4xl text-center">
                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                            >
                                <h1
                                    className="text-balance text-4xl font-medium sm:text-5xl md:text-6xl">
                                    Scale Your Business with AI Infrastructure
                                </h1>

                                <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg">
                                    Deploy enterprise-ready AI agents that power customer conversations, automate workflows, and drive revenue—securely and at scale.
                                </p>

                                <form
                                    action=""
                                    className="mt-6 mx-auto max-w-sm">
                                    <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] pr-1.5 items-center rounded-[1rem] border shadow shadow-zinc-950/5 has-[input:focus]:ring-2 lg:pr-0">
                                        <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

                                        <input
                                            placeholder="Your work email"
                                            className="h-12 w-full bg-transparent pl-12 focus:outline-none"
                                            type="email"
                                        />

                                        <div className="md:pr-1.5 lg:pr-0">
                                            <Button
                                                aria-label="submit"
                                                size="sm"
                                                className="rounded-[0.5rem] cursor-pointer">
                                                <span className="hidden md:block">Book a Demo</span>
                                                <SendHorizonal
                                                    className="relative mx-auto size-5 md:hidden"
                                                    strokeWidth={2}
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                </form>

                                <div
                                    aria-hidden
                                    className="bg-radial from-primary/50 dark:from-primary/25 relative mx-auto mt-20 max-w-2xl to-transparent to-55% text-left"
                                >
                                    <div className="bg-background border-border/50 absolute inset-0 mx-auto w-80 -translate-x-3 -translate-y-12 rounded-[2rem] border p-2 [mask-image:linear-gradient(to_bottom,#000_80%,transparent_100%)] sm:-translate-x-6">
                                        <div className="relative h-96 overflow-hidden rounded-[1.5rem] border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--border),var(--border)_1px,transparent_1px,transparent_6px)] before:opacity-50"></div>
                                    </div>
                                    <div className="bg-muted dark:bg-background/50 border-border/50 mx-auto w-80 translate-x-4 rounded-[2rem] border p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_80%,transparent_100%)] sm:translate-x-8">
                                        <div className="bg-background space-y-2 overflow-hidden rounded-[1.5rem] border p-2 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                                            <CardContent activeCategory={activeCategory} />

                                            <div className="bg-muted rounded-[1rem] p-4 pb-16 dark:bg-white/5"></div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mix-blend-overlay [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-5" />
                                </div>

                                {/* Category Buttons - Just below the card */}
                                <div className="mx-auto mt-6 max-w-4xl">
                                    <div className="grid grid-cols-3 gap-2 w-fit mx-auto">
                                        {categories.map((category) => (
                                            <button
                                                key={category.id}
                                                onClick={() => setActiveCategory(category.id)}
                                                className={cn(
                                                    "rounded-lg border px-4 py-2 text-xs font-medium transition-all duration-150 focus:outline-none cursor-pointer flex items-center justify-center min-w-fit",
                                                    activeCategory === category.id
                                                        ? "border-black bg-black text-white"
                                                        : "border-black bg-white text-black hover:bg-gray-50"
                                                )}
                                            >
                                                {category.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>
                <LogoCloud />
            </main>
        </>
    )
}

const categories = [
    { id: 'fitness', label: 'Fitness' },
    { id: 'personal', label: 'Personal Care' },
    { id: 'beauty', label: 'Beauty & Cosmetics' },
    { id: 'fashion', label: 'Fashion & Apparel' },
    { id: 'supplements', label: 'Nutritional Supplements' },
    { id: 'health', label: 'Health & Nutrition' },
]

interface ChatMessage {
    role: 'user' | 'ai';
    message: string;
}

const categoryContent: Record<string, { title: string; icon: string; color: string; messages: ChatMessage[] }> = {
    fitness: {
        title: 'Fitness',
        icon: '💪',
        color: 'text-red-400',
        messages: [
            { role: 'user', message: "I need a plan for muscle gain." },
            { role: 'ai', message: "Our 8-week Hypertrophy Protocol is perfect for you." },
            { role: 'user', message: "Does it include diet?" },
            { role: 'ai', message: "Yes, complete with our protein stack recommendations." },
        ],
    },
    personal: {
        title: 'Personal Care',
        icon: '🧴',
        color: 'text-blue-400',
        messages: [
            { role: 'user', message: "Best set for sensitive skin?" },
            { role: 'ai', message: "Try our Calming Aloe Kit. It's fragrance-free." },
            { role: 'user', message: "Can I use it daily?" },
            { role: 'ai', message: "Absolutely, it's designed for gentle daily use." },
        ],
    },
    beauty: {
        title: 'Beauty & Cosmetics',
        icon: '',
        color: 'text-pink-400',
        messages: [
            { role: 'user', message: "Which red lipstick suits me?" },
            { role: 'ai', message: "Based on your tone, 'Ruby Velvet' is a match." },
            { role: 'user', message: "Is it transfer-proof?" },
            { role: 'ai', message: "Yes, it lasts 12+ hours with zero smudge." },
        ],
    },
    fashion: {
        title: 'Fashion & Apparel',
        icon: '',
        color: 'text-purple-400',
        messages: [
            { role: 'user', message: "Does this dress run true to size?" },
            { role: 'ai', message: "It has a slim fit. We suggest sizing up." },
            { role: 'user', message: "Do you have matching shoes?" },
            { role: 'ai', message: "Pair it with our 'Luna' strappy heels." },
        ],
    },
    supplements: {
        title: 'Nutritional Supplements',
        icon: '💊',
        color: 'text-orange-400',
        messages: [
            { role: 'user', message: "Help me focus at work." },
            { role: 'ai', message: "Our 'NeuroFocus' Nootropic is the best seller." },
            { role: 'user', message: "Any caffeine in it?" },
            { role: 'ai', message: "No, it's stimulant-free energy." },
        ],
    },
    health: {
        title: 'Health & Nutrition',
        icon: '',
        color: 'text-green-400',
        messages: [
            { role: 'user', message: "I'm feeling low energy." },
            { role: 'ai', message: "Our 'Vitality Green' blend boosts energy naturally." },
            { role: 'user', message: "Is it vegan?" },
            { role: 'ai', message: "100% plant-based and gluten-free." },
        ],
    },
}

const CardContent = ({ activeCategory }: { activeCategory: string }) => {
    const content = categoryContent[activeCategory] || categoryContent.fitness

    return (
        <div className="relative h-[16.25rem] space-y-3 rounded-[1rem] bg-white/5 p-4 transition-all duration-300 overflow-hidden">
            <div className={cn("flex items-center gap-1.5", content.color)}>
                <span className="text-lg">{content.icon}</span>
                <div className="text-sm font-medium">{content.title}</div>
            </div>
            <div className={cn(
                "space-y-2",
                activeCategory === 'personal' && "-mt-4"
            )}>
                {content.messages.map((msg, index) => (
                    <div key={index} className={cn(
                        "rounded-lg px-3 py-2 text-xs max-w-[85%]",
                        msg.role === 'user'
                            ? "bg-muted text-foreground ml-auto rounded-tr-sm"
                            : "bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 text-foreground mr-auto rounded-tl-sm"
                    )}>
                        <span className={cn("font-medium", msg.role === 'ai' ? content.color : "text-muted-foreground")}>
                            {msg.role === 'user' ? 'User' : 'AI'}:
                        </span>{' '}
                        {msg.message}
                    </div>
                ))}
            </div>
        </div>
    )
}

const LogoCloud = () => {
    return (
        <section className="bg-background pb-6 md:pb-12">
            <div className="group relative m-auto max-w-6xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="inline md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Powering the best teams</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            durationOnHover={75}
                            duration={60}
                            gap={112}>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Nvidia Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/column.svg"
                                    alt="Column Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nike.svg"
                                    alt="Nike Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                    alt="Lemon Squeezy Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                                    alt="Laravel Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-7 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                                    alt="Lilly Logo"
                                    height="28"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-6 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    height="24"
                                    width="auto"
                                />
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
