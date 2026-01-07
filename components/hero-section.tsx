'use client'
import React from 'react'
import { Mail, SendHorizonal, Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/animated-group'
import { cn } from '@/lib/utils'
import Link from 'next/link'
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
    const [activeCategory, setActiveCategory] = React.useState('health')

    return (
        <>
            <HeroHeader />

            <main className="overflow-hidden relative">
                <FlickeringGridDemo />
                <section className="py-20 md:py-32">
                    <div className="relative mx-auto max-w-6xl px-6 pt-16 lg:pt-24">
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
                                    Automate Your Business with AI Agents
                                </h1>

                                <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg">
                                    Deploy intelligent AI agents that handle complex tasks, automate workflows, and deliver results 24/7. Transform your operations with cutting-edge automation technology.
                                </p>

                                <form
                                    action=""
                                    className="mt-12 mx-auto max-w-sm">
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
                                                className="rounded-[0.5rem]">
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
                                    <div className="bg-background border-border/50 absolute inset-0 mx-auto w-80 -translate-x-3 -translate-y-12 rounded-[2rem] border p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:-translate-x-6">
                                        <div className="relative h-96 overflow-hidden rounded-[1.5rem] border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--border),var(--border)_1px,transparent_1px,transparent_6px)] before:opacity-50"></div>
                                    </div>
                                    <div className="bg-muted dark:bg-background/50 border-border/50 mx-auto w-80 translate-x-4 rounded-[2rem] border p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:translate-x-8">
                                        <div className="bg-background space-y-2 overflow-hidden rounded-[1.5rem] border p-2 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                                            <CardContent activeCategory={activeCategory} />

                                            <div className="bg-muted rounded-[1rem] p-4 pb-16 dark:bg-white/5"></div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mix-blend-overlay [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-5" />
                                </div>

                                {/* Category Buttons - Just below the card */}
                                <div className="mx-auto mt-6 max-w-md">
                                    <div className="grid grid-cols-3 gap-2">
                                        {categories.map((category) => (
                                            <button
                                                key={category.id}
                                                onClick={() => setActiveCategory(category.id)}
                                                className={cn(
                                                    "rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-150 focus:outline-none",
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
    { id: 'health', label: 'Health & Nutrition' },
    { id: 'personal', label: 'Personal Care' },
    { id: 'beauty', label: 'Beauty & Cosmetics' },
    { id: 'fashion', label: 'Fashion & Apparel' },
    { id: 'supplements', label: 'Nutritional Supplements' },
    { id: 'fitness', label: 'Fitness' },
]

interface ChatMessage {
    role: 'user' | 'ai';
    message: string;
}

const categoryContent: Record<string, { title: string; icon: string; color: string; messages: ChatMessage[] }> = {
    health: {
        title: 'Health & Nutrition',
        icon: '�',
        color: 'text-green-400',
        messages: [
            { role: 'user', message: "What foods help boost immunity?" },
            { role: 'ai', message: "Citrus fruits, spinach, garlic, and yogurt are great immunity boosters rich in vitamins C and D." },
            { role: 'user', message: "How much water should I drink daily?" },
            { role: 'ai', message: "Aim for 8 glasses (2 liters) daily. Increase intake during exercise or hot weather." },
        ],
    },
    personal: {
        title: 'Personal Care',
        icon: '🧴',
        color: 'text-blue-400',
        messages: [
            { role: 'user', message: "What's the best skincare routine for oily skin?" },
            { role: 'ai', message: "Use a gentle cleanser, oil-free moisturizer, and salicylic acid treatment. Don't skip sunscreen!" },
            { role: 'user', message: "How often should I exfoliate?" },
            { role: 'ai', message: "2-3 times per week is ideal. Over-exfoliating can damage your skin barrier." },
        ],
    },
    beauty: {
        title: 'Beauty & Cosmetics',
        icon: '�',
        color: 'text-pink-400',
        messages: [
            { role: 'user', message: "How do I make my makeup last all day?" },
            { role: 'ai', message: "Start with primer, use setting spray, and choose long-wear formulas. Blotting papers help too!" },
            { role: 'user', message: "What's the right foundation shade for me?" },
            { role: 'ai', message: "Test on your jawline in natural light. The shade should blend seamlessly with your neck." },
        ],
    },
    fashion: {
        title: 'Fashion & Apparel',
        icon: '�',
        color: 'text-purple-400',
        messages: [
            { role: 'user', message: "What are the must-have wardrobe basics?" },
            { role: 'ai', message: "White tee, dark jeans, blazer, little black dress, and quality sneakers form a versatile foundation." },
            { role: 'user', message: "How do I dress for my body type?" },
            { role: 'ai', message: "Focus on highlighting your favorite features. A-line dresses and high-waisted pants work for most body types." },
        ],
    },
    supplements: {
        title: 'Nutritional Supplements',
        icon: '💊',
        color: 'text-orange-400',
        messages: [
            { role: 'user', message: "Do I need to take vitamin D supplements?" },
            { role: 'ai', message: "If you have limited sun exposure or low levels, yes. 1000-2000 IU daily is commonly recommended." },
            { role: 'user', message: "What's the best time to take supplements?" },
            { role: 'ai', message: "Fat-soluble vitamins with meals, B vitamins in morning, magnesium at night for best absorption." },
        ],
    },
    fitness: {
        title: 'Fitness',
        icon: '💪',
        color: 'text-red-400',
        messages: [
            { role: 'user', message: "How often should I work out as a beginner?" },
            { role: 'ai', message: "Start with 3-4 days per week, mixing cardio and strength training. Rest days are crucial for recovery." },
            { role: 'user', message: "What should I eat before a workout?" },
            { role: 'ai', message: "A light snack with carbs and protein 1-2 hours before. Try banana with peanut butter or Greek yogurt." },
        ],
    },
}

const CardContent = ({ activeCategory }: { activeCategory: string }) => {
    const content = categoryContent[activeCategory] || categoryContent.health

    return (
        <div className="relative h-52 space-y-3 rounded-[1rem] bg-white/5 p-4 transition-all duration-300 overflow-hidden">
            <div className={cn("flex items-center gap-1.5", content.color)}>
                <span className="text-lg">{content.icon}</span>
                <div className="text-sm font-medium">{content.title}</div>
            </div>
            <div className="space-y-2">
                {content.messages.map((msg, index) => (
                    <div key={index} className={cn(
                        "rounded-lg px-3 py-2 text-xs",
                        msg.role === 'user'
                            ? "bg-muted text-foreground ml-4"
                            : "bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 text-foreground mr-4"
                    )}>
                        <span className={cn("font-medium", msg.role === 'ai' ? content.color : "text-muted-foreground")}>
                            {msg.role === 'user' ? 'You' : 'AI'}:
                        </span>{' '}
                        {msg.message}
                    </div>
                ))}
            </div>
        </div>
    )
}

// MenuItem interface and menuItems constant moved to @/lib/menu-data
import { menuItems } from '@/lib/menu-data'

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed group z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <div className="flex items-center gap-2">
                                    <img src="./eshura-logo.png" alt="eshura-logo" className="h-14 w-auto" />
                                    <p className='text-xl font-bold'>Eshura</p>
                                </div>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-6 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="relative group/menu">
                                        {item.hasDropdown ? (
                                            <>
                                                <button className="text-muted-foreground hover:text-accent-foreground flex items-center gap-1 duration-150">
                                                    <span>{item.name}</span>
                                                    <ChevronDown className="size-3 transition-transform group-hover/menu:rotate-180" />
                                                </button>
                                                {/* Dropdown Menu */}
                                                <div className="invisible opacity-0 group-hover/menu:visible group-hover/menu:opacity-100 absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-200">
                                                    <div className="bg-background border rounded-xl shadow-xl p-4 min-w-[200px]">
                                                        {item.dropdownContent?.groups ? (
                                                            /* Mega Menu for Products */
                                                            <div className="grid grid-cols-3 gap-6 min-w-[600px]">
                                                                {item.dropdownContent.groups.map((group, gIdx) => (
                                                                    <div key={gIdx} className="space-y-3">
                                                                        <div>
                                                                            <h4 className="font-bold text-sm text-foreground">{group.title}</h4>
                                                                            {group.cta && (
                                                                                <p className="text-xs text-muted-foreground mt-1">{group.cta}</p>
                                                                            )}
                                                                        </div>
                                                                        <ul className="space-y-1.5">
                                                                            {group.items.map((subItem, sIdx) => (
                                                                                <li key={sIdx}>
                                                                                    <Link href={subItem.href} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                                                                        <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors" />
                                                                                        <span className="group-hover:translate-x-0.5 transition-transform">{subItem.name}</span>
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            /* Simple Dropdown */
                                                            <ul className="space-y-1">
                                                                {item.dropdownContent?.items?.map((subItem, sIdx) => (
                                                                    <li key={sIdx}>
                                                                        <Link href={subItem.href} className="text-sm text-muted-foreground hover:text-foreground block py-1.5 px-2 rounded-md hover:bg-muted transition-colors">
                                                                            {subItem.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href || '#'}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-4 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            {item.hasDropdown ? (
                                                <details className="group/mobile">
                                                    <summary className="text-muted-foreground hover:text-accent-foreground flex items-center justify-between cursor-pointer duration-150 list-none">
                                                        <span>{item.name}</span>
                                                        <ChevronDown className="size-4 transition-transform group-open/mobile:rotate-180" />
                                                    </summary>
                                                    <ul className="mt-2 ml-4 space-y-2">
                                                        {item.dropdownContent?.groups?.map((group, gIdx) => (
                                                            <li key={gIdx} className="space-y-1">
                                                                <span className="text-sm font-bold text-foreground block">{group.title}</span>
                                                                {group.cta && (
                                                                    <span className="text-xs text-muted-foreground block mb-2">{group.cta}</span>
                                                                )}
                                                                <ul className="ml-2 border-l pl-3 space-y-1">
                                                                    {group.items.map((subItem, sIdx) => (
                                                                        <li key={sIdx}>
                                                                            <Link href={subItem.href} className="text-sm text-muted-foreground hover:text-foreground block py-1">
                                                                                {subItem.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </li>
                                                        ))}
                                                        {item.dropdownContent?.items?.map((subItem, sIdx) => (
                                                            <li key={sIdx}>
                                                                <Link href={subItem.href} className="text-sm text-muted-foreground hover:text-foreground block py-0.5">
                                                                    {subItem.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </details>
                                            ) : (
                                                <Link
                                                    href={item.href || '#'}
                                                    className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                    <span>{item.name}</span>
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Book a Demo</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="#">
                                        <span>Book a Demo</span>
                                    </Link>
                                </Button>
                                {/* Theme Toggle Button */}
                                <button
                                    onClick={toggleTheme}
                                    aria-label="Toggle theme"
                                    className="flex h-8 w-8 items-center justify-center rounded-lg border bg-background text-foreground transition-colors hover:bg-muted">
                                    {mounted && theme === 'dark' ? (
                                        <Sun className="size-4" />
                                    ) : (
                                        <Moon className="size-4" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const LogoCloud = () => {
    return (
        <section className="bg-background pb-16 md:pb-32">
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
