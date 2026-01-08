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
                    <div className="py-24 md:pb-32 lg:pb-36 lg:pt-48">
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

                        {/* Hero Visual - Abstract Data Flow / Network */}
                        <div className="aspect-[2/3] absolute inset-y-20 right-0 -z-10 w-1/2 overflow-hidden rounded-l-[3rem] border border-r-0 border-black/10 sm:aspect-video dark:border-white/5 hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)]" />
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-12">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm text-muted-foreground font-medium">Trusted by sales teams at</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    durationOnHover={75}
                                    duration={40}
                                    gap={112}>
                                    {/* Logos */}
                                    <div className="flex items-center"><span className="text-xl font-bold text-muted-foreground">Acme Corp</span></div>
                                    <div className="flex items-center"><span className="text-xl font-bold text-muted-foreground">GlobalTech</span></div>
                                    <div className="flex items-center"><span className="text-xl font-bold text-muted-foreground">Nebula</span></div>
                                    <div className="flex items-center"><span className="text-xl font-bold text-muted-foreground">Vertex</span></div>
                                    <div className="flex items-center"><span className="text-xl font-bold text-muted-foreground">Horizon</span></div>
                                    <div className="flex items-center"><span className="text-xl font-bold text-muted-foreground">Elevate</span></div>
                                </InfiniteSlider>

                                <div className="bg-gradient-to-r from-background to-transparent absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-gradient-to-l from-background to-transparent absolute inset-y-0 right-0 w-20"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
