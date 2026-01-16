"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getRelatedArticles } from "@/lib/journal-data";
import { Clock, ArrowRight } from "lucide-react";

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    // Unwrap params using React.use
    const resolvedParams = use(params);
    const { slug } = resolvedParams;

    const article = getArticleBySlug(slug);
    const relatedArticles = article ? getRelatedArticles(slug) : [];

    // Scroll progress bar logic
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;

            setScrollProgress(Number(scroll));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!article) {
        notFound();
    }

    return (
        <main className="relative flex flex-col w-full min-h-screen pt-24 pb-20 bg-background text-foreground">
            {/* Sticky Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
                <div
                    className="h-1 bg-primary/20"
                >
                    <div
                        className="h-full bg-primary transition-all duration-100 ease-out"
                        style={{ width: `${scrollProgress * 100}%` }}
                    />
                </div>
            </div>

            {/* Hero Section */}
            <div className="container w-full max-w-5xl mx-auto px-6 mb-12">
                {/* Breadcrumbs Mobile */}
                <div className="md:hidden flex flex-wrap gap-2 mb-6">
                    <Link className="text-muted-foreground text-sm hover:text-foreground transition-colors" href="/journal">Journal</Link>
                    <span className="text-muted-foreground text-sm">/</span>
                    <span className="text-foreground text-sm">{article.category}</span>
                </div>
                {/* Title Block */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-foreground">
                        {article.title}
                    </h1>
                    {/* Meta Data */}
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                        <span className="font-medium text-primary">{article.date}</span>
                        <span className="w-1 h-1 rounded-full bg-border"></span>
                        <span>{article.category}</span>
                        <span className="w-1 h-1 rounded-full bg-border"></span>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                        </div>
                    </div>
                </div>
                {/* Hero Image */}
                <div className="w-full relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg bg-muted shadow-sm mb-16 group border border-border">
                    <div className="absolute inset-0 bg-primary/5 mix-blend-multiply pointer-events-none z-10"></div>
                    <Image
                        src={article.image}
                        alt={article.alt}
                        fill
                        priority
                        className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Article Body */}
            <article className="container flex flex-col max-w-3xl mx-auto px-6 lg:px-0">
                <div
                    className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Divider */}
                <div className="w-full h-px bg-border my-12"></div>

                {/* Author Bio */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-card p-8 rounded-lg border border-border shadow-sm">
                    <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden border border-border relative">
                        <Image
                            src={article.author.image}
                            alt={article.author.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="text-center sm:text-left">
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Written by</p>
                        <h3 className="text-xl font-bold text-foreground mb-2">{article.author.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                            {article.author.bio}
                        </p>
                        <Link className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80" href="#">
                            View Profile <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </article>

            {/* Continue Reading Section */}
            <section className="mt-24 w-full bg-muted/50 border-t border-border py-20">
                <div className="container max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-2xl font-bold text-foreground">Continue Reading</h3>
                        <Link className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group" href="/journal">
                            View Journal <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedArticles.map((related) => (
                            <Link key={related.slug} className="group flex flex-col gap-4" href={`/journal/${related.slug}`}>
                                <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-background border border-border relative">
                                    <Image
                                        src={related.image}
                                        alt={related.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{related.category}</span>
                                    <h4 className="text-xl font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                                        {related.title}
                                    </h4>
                                    <span className="text-sm text-muted-foreground">{related.date} • {related.readTime}</span>
                                </div>
                            </Link>
                        ))}
                        {relatedArticles.length === 0 && (
                            <p className="text-muted-foreground col-span-3">More articles coming soon...</p>
                        )}
                    </div>
                    <div className="mt-8 flex justify-center sm:hidden">
                        <Link className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors" href="/journal">
                            View Journal <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
