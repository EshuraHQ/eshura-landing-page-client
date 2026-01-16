'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { InfiniteSlider } from '../infinite-slider'

interface ProductHeroProps {
    title: string;
    subtitle: string;
    description: string;
    ctaText?: string;
}

export function ProductHero({
    title = "Lead Generation",
    subtitle = "Automate Your Sales Pipeline",
    description = "Capture identifying and intent data from your website visitors.",
    ctaText = "Start Generating Leads"
}: ProductHeroProps) {
    return (
        <>
            {/* <HeroHeader /> */}
            <main className="overflow-x-hidden">
                <section>
                    <div className="py-24 md:pb-32 lg:pb-36 lg:pt-36">
                        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                                    {title}
                                </span>
                                <h1 className="mt-4 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-6 xl:text-7xl font-bold">
                                    {subtitle}
                                </h1>
                                <p className="mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
                                    {description}
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-full pl-6 pr-4 text-base">
                                        <Link href="#">
                                            <span className="text-nowrap">{ctaText}</span>
                                            <ChevronRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-full px-6 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                        <Link href="#">
                                            <span className="text-nowrap">View Demo</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pb-16 px-32">
                    <InfiniteSlider
                    durationOnHover={75}
                    duration={60}
                    gap={112}>
                    {/* LlamaIndex */}
                    <div className="flex items-center gap-2">
                        <svg className="h-7 w-7 opacity-70" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="3" y="3" width="7" height="7" rx="1" />
                            <rect x="14" y="3" width="7" height="7" rx="1" />
                            <rect x="3" y="14" width="7" height="7" rx="1" />
                            <rect x="14" y="14" width="7" height="7" rx="1" />
                        </svg>
                        <span className="text-lg font-semibold tracking-tight opacity-70">LlamaIndex</span>
                    </div>
                    {/* n8n */}
                    <div className="flex items-center gap-2">
                        <svg className="h-7 w-7 opacity-70" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 8c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8zm0 6c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-2zm10-6c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V8z" />
                        </svg>
                        <span className="text-lg font-bold tracking-tight opacity-70">n8n</span>
                    </div>
                    {/* LangGraph */}
                    <div className="flex items-center gap-2">
                        <svg className="h-7 w-7 opacity-70" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="6" cy="6" r="3" />
                            <circle cx="18" cy="6" r="3" />
                            <circle cx="12" cy="18" r="3" />
                            <path d="M6 9v6l6 3M18 9v6l-6 3" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                        <span className="text-lg font-semibold tracking-tight opacity-70">LangGraph</span>
                    </div>
                    {/* crewAI */}
                    <div className="flex items-center">
                        <span className="text-lg tracking-tight opacity-70"><em>crew</em><span className="font-bold">AI</span></span>
                    </div>
                    {/* LangChain */}
                    <div className="flex items-center gap-2">
                        <svg className="h-7 w-7 opacity-70" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8v8M18 8v8M8 6h8M8 18h8" />
                        </svg>
                        <span className="text-lg font-semibold tracking-tight opacity-70">LangChain</span>
                    </div>
                    {/* Opal */}
                    <div className="flex items-center gap-2">
                        <svg className="h-7 w-7 opacity-70" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                            <circle cx="12" cy="12" r="5" />
                        </svg>
                        <span className="text-lg font-semibold tracking-tight opacity-70">Opal</span>
                    </div>
                </InfiniteSlider>
                </section>
            </main>
        </>
    )
}
