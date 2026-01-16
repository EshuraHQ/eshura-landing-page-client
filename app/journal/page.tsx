"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { journalArticles } from "@/lib/journal-data";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JournalPage() {
    const [selectedCategory, setSelectedCategory] = useState("All Stories");

    // Filter categories
    const categories = [
        "All Stories",
        "Advertising",
        "Event Production",
        "Culture & Trends",
        "Technology"
    ];

    // Get specific featured article (hardcoded for now to match design)
    const featuredArticle = journalArticles.find(a => a.slug === "the-art-of-silence");

    // Filter articles based on selected category, excluding the featured one
    const filteredArticles = useMemo(() => {
        let articles = journalArticles.filter(a => a.slug !== "the-art-of-silence");

        if (selectedCategory !== "All Stories") {
            articles = articles.filter(a => a.category === selectedCategory);
        }

        return articles;
    }, [selectedCategory]);

    return (
        <main className="w-full bg-background min-h-screen pb-20 pt-24">
            <div className="container mx-auto px-6">
                {/* Hero Heading */}
                <header className="py-12 md:py-20 max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-foreground">
                        Eshura Journal
                    </h1>
                    <div className="flex flex-col md:flex-row gap-6 md:items-center border-l-2 border-primary/30 pl-6">
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-light leading-relaxed">
                            Curated insights on experiential marketing, event strategy, and the intersection of modern culture and design.
                        </p>
                    </div>
                </header>

                {/* Featured Article */}
                {featuredArticle && (
                    <section className="mb-24 group cursor-pointer">
                        <Link href={`/journal/${featuredArticle.slug}`}>
                            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg bg-card border border-border">
                                <div className="relative w-full h-full grayscale-[20%] transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-105">
                                    <Image
                                        src={featuredArticle.image}
                                        alt={featuredArticle.alt}
                                        fill
                                        className="object-cover opacity-90"
                                        priority
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex flex-col items-start">
                                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-primary-foreground uppercase bg-primary rounded">Featured Story</span>
                                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mb-6">
                                        {featuredArticle.title}
                                    </h2>
                                    <div className="flex items-center gap-4 text-white/80">
                                        <span className="text-sm font-medium uppercase tracking-wider">{featuredArticle.category}</span>
                                        <span className="size-1 bg-white/50 rounded-full"></span>
                                        <span className="text-sm">{featuredArticle.date}</span>
                                    </div>
                                    <div className="mt-8 flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                                        <span className="text-sm font-bold uppercase tracking-wide">Read Full Story</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </section>
                )}

                {/* Filtering & Grid Layout */}
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sticky Sidebar Filter (Desktop) / Horizontal Scroll (Mobile) */}
                    <aside className="lg:w-1/5 lg:min-w-[200px]">
                        <div className="sticky top-28">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 hidden lg:block">Filter by Topic</h3>
                            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`shrink-0 text-left px-4 py-2 lg:px-4 lg:py-2 text-sm transition-all rounded lg:border-l-2
                                            ${selectedCategory === category
                                                ? "font-bold text-primary border-primary bg-primary/10"
                                                : "font-medium text-muted-foreground border-transparent hover:text-foreground hover:border-border"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Articles Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                            {filteredArticles.map((article, index) => (
                                <Link key={article.slug} href={`/journal/${article.slug}`} className={`group flex flex-col gap-4 cursor-pointer ${index % 2 !== 0 ? 'md:mt-12' : ''}`}>
                                    <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted relative border border-border/50">
                                        <div className="relative w-full h-full grayscale-[20%] transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-105">
                                            <Image
                                                src={article.image}
                                                alt={article.alt}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-foreground">
                                            {article.category}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 mt-2">
                                        <div className="text-xs font-bold text-primary uppercase tracking-widest">{article.date}</div>
                                        <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors text-foreground">{article.title}</h3>
                                        <p className="text-muted-foreground line-clamp-3 leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: article.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...' }}
                                        />
                                        <span className="inline-flex items-center gap-1 text-sm font-bold mt-2 underline decoration-transparent group-hover:decoration-primary underline-offset-4 transition-all text-foreground/80 group-hover:text-primary">
                                            Read Story
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {filteredArticles.length === 0 && (
                            <div className="py-20 text-center text-muted-foreground">
                                No articles found for this category.
                            </div>
                        )}

                        {/* Pagination */}
                        {filteredArticles.length > 0 && (
                            <div className="mt-20 flex justify-center border-t border-border pt-10">
                                <Button variant="outline" className="gap-2 rounded-full px-8 py-6">
                                    <span className="text-sm font-bold uppercase tracking-widest">Load More Stories</span>
                                    <ChevronDown className="w-4 h-4" />
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
