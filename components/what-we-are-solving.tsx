"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BorderBeam } from "@/components/border-beam"
import { Lightbulb, Target, Zap, Shield, TrendingUp, Users } from "lucide-react"

const problems = [
    {
        icon: Lightbulb,
        title: "Complexity Overload",
        description: "Modern health tracking is fragmented across dozens of apps, making it impossible to see the full picture of your wellness journey.",
    },
    {
        icon: Target,
        title: "Lack of Actionable Insights",
        description: "Raw data without context is meaningless. Most tools show numbers but fail to explain what they mean for your health goals.",
    },
    {
        icon: Zap,
        title: "Time-Consuming Analysis",
        description: "Manually correlating sleep, exercise, nutrition, and stress data takes hours each week—time better spent living healthy.",
    },
    {
        icon: Shield,
        title: "Privacy Concerns",
        description: "Your health data is sensitive. Many platforms monetize your information without transparent consent or control.",
    },
    {
        icon: TrendingUp,
        title: "Inconsistent Motivation",
        description: "Without personalized feedback and adaptive goals, users quickly lose interest and abandon their health routines.",
    },
    {
        icon: Users,
        title: "One-Size-Fits-All Approach",
        description: "Generic recommendations ignore individual biology, lifestyle, and preferences—what works for others may not work for you.",
    },
]

export function WhatWeAreSolving() {
    return (
        <section className="bg-background py-20 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                        What we are solving?
                    </h2>
                    <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-lg">
                        We identified the core challenges that prevent people from achieving their health goals—and built solutions for each one.
                    </p>
                </div>

                {/* Problem Cards Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {problems.map((problem, index) => (
                        <Card
                            key={index}
                            className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                        >
                            <CardHeader>
                                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    <problem.icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl mb-2">{problem.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base leading-relaxed">
                                    {problem.description}
                                </CardDescription>
                            </CardContent>
                            <BorderBeam
                                size={250}
                                duration={12}
                                delay={index * 2}
                                colorFrom="#6366f1"
                                colorTo="#8b5cf6"
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
