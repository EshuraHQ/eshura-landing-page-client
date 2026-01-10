"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { BorderBeam } from "@/components/border-beam"
import { InfiniteGridBackground } from "@/components/ui/infinite-grid-background"
import { FeatureSection } from "@/components/ui/feature-section"
import {
    Mic,
    Mail,
    Brain,
    Lightbulb,
    BarChart3,
    TrendingUp,
    Target,
    Clock,
    Zap,
    MessageSquare,
    Calendar,
    Bell,
    Phone,
    FileText,
    Database,
    Shield,
    Search,
    CheckCircle
} from "lucide-react"

const tabData = {
    sales: {
        badge: "Sales Automation",
        heading: (
            <>
                <span className="text-foreground font-medium">Capture every lead instantly.</span>{" "}
                Our AI sales agents engage prospects 24/7, qualify leads automatically, and deliver personalized recommendations that drive higher conversion rates and average order value.
            </>
        ),
        badges: ["24/7 Engagement", "Smart Qualification", "Higher AOV"],
        tasks: [
            { title: "Lead Capture", subtitle: "Instant engagement on arrival", icon: <Target className="w-4 h-4 text-indigo-400" /> },
            { title: "Auto Qualification", subtitle: "Score and prioritize leads", icon: <CheckCircle className="w-4 h-4 text-green-400" /> },
            { title: "Personalized Outreach", subtitle: "Tailored recommendations", icon: <MessageSquare className="w-4 h-4 text-purple-400" /> },
            { title: "Follow-up Automation", subtitle: "Never miss a follow-up", icon: <Clock className="w-4 h-4 text-blue-400" /> },
            { title: "CRM Integration", subtitle: "Sync with your tools", icon: <Database className="w-4 h-4 text-orange-400" /> },
        ]
    },
    support: {
        badge: "Customer Support",
        heading: (
            <>
                <span className="text-foreground font-medium">Resolve inquiries instantly.</span>{" "}
                AI-powered support agents handle 70%+ of routine queries, deliver consistent brand voice across channels, and seamlessly escalate complex issues to human agents.
            </>
        ),
        badges: ["70% Auto-Resolution", "Multi-Channel", "Smart Escalation"],
        tasks: [
            { title: "Instant Responses", subtitle: "Zero wait time support", icon: <Zap className="w-4 h-4 text-yellow-400" /> },
            { title: "FAQ Automation", subtitle: "Handle common questions", icon: <MessageSquare className="w-4 h-4 text-blue-400" /> },
            { title: "Ticket Routing", subtitle: "Smart issue categorization", icon: <Target className="w-4 h-4 text-indigo-400" /> },
            { title: "Human Handoff", subtitle: "Seamless escalation", icon: <Phone className="w-4 h-4 text-green-400" /> },
            { title: "Sentiment Analysis", subtitle: "Track customer mood", icon: <BarChart3 className="w-4 h-4 text-purple-400" /> },
        ]
    },
    booking: {
        badge: "Booking & Scheduling",
        heading: (
            <>
                <span className="text-foreground font-medium">Eliminate scheduling friction.</span>{" "}
                AI booking agents handle appointments via chat, sync directly with calendars, send automated reminders, and reduce no-show rates dramatically.
            </>
        ),
        badges: ["Chat Booking", "Calendar Sync", "Auto Reminders"],
        tasks: [
            { title: "Chat Scheduling", subtitle: "Book via conversation", icon: <Calendar className="w-4 h-4 text-blue-400" /> },
            { title: "Calendar Sync", subtitle: "Real-time availability", icon: <Clock className="w-4 h-4 text-green-400" /> },
            { title: "Reminders", subtitle: "Reduce no-shows", icon: <Bell className="w-4 h-4 text-yellow-400" /> },
            { title: "Rescheduling", subtitle: "Easy modification", icon: <TrendingUp className="w-4 h-4 text-purple-400" /> },
            { title: "Confirmation", subtitle: "Instant booking proof", icon: <CheckCircle className="w-4 h-4 text-indigo-400" /> },
        ]
    },
    voice: {
        badge: "Voice Agents",
        heading: (
            <>
                <span className="text-foreground font-medium">Never miss a call again.</span>{" "}
                Intelligent voice agents answer inbound calls, route queries, and log all conversation data directly to your CRM—with human-like quality and zero hold times.
            </>
        ),
        badges: ["24/7 Answering", "Zero Hold Time", "CRM Logging"],
        tasks: [
            { title: "Inbound Calls", subtitle: "Intelligent answering", icon: <Phone className="w-4 h-4 text-green-400" /> },
            { title: "Call Routing", subtitle: "Smart queue management", icon: <Target className="w-4 h-4 text-blue-400" /> },
            { title: "Voice Quality", subtitle: "Human-like interaction", icon: <Mic className="w-4 h-4 text-purple-400" /> },
            { title: "Data Capture", subtitle: "Log to CRM instantly", icon: <Database className="w-4 h-4 text-orange-400" /> },
            { title: "Multilingual", subtitle: "Support any language", icon: <MessageSquare className="w-4 h-4 text-indigo-400" /> },
        ]
    },
    email: {
        badge: "Email Agents",
        heading: (
            <>
                <span className="text-foreground font-medium">Conquer inbox overload.</span>{" "}
                AI email agents auto-draft responses, categorize messages, prioritize critical inquiries, and enable zero-backlog inbox management for your team.
            </>
        ),
        badges: ["Auto-Drafting", "Smart Triage", "Zero Backlog"],
        tasks: [
            { title: "Email Drafting", subtitle: "AI-written responses", icon: <FileText className="w-4 h-4 text-blue-400" /> },
            { title: "Categorization", subtitle: "Auto-sort messages", icon: <Target className="w-4 h-4 text-purple-400" /> },
            { title: "Priority Inbox", subtitle: "Surface critical items", icon: <Bell className="w-4 h-4 text-yellow-400" /> },
            { title: "Follow-ups", subtitle: "Trigger-based outreach", icon: <Clock className="w-4 h-4 text-green-400" /> },
            { title: "Templates", subtitle: "Consistent messaging", icon: <MessageSquare className="w-4 h-4 text-indigo-400" /> },
        ]
    },
    rag: {
        badge: "Custom RAG",
        heading: (
            <>
                <span className="text-foreground font-medium">Unlock your proprietary data.</span>{" "}
                Custom RAG solutions ground AI answers in your secure knowledge base, retrieve internal documents in real-time, and deliver accurate, hallucination-free responses.
            </>
        ),
        badges: ["Secure Knowledge", "Real-time Retrieval", "Zero Hallucination"],
        tasks: [
            { title: "Knowledge Base", subtitle: "Your data, AI-powered", icon: <Database className="w-4 h-4 text-blue-400" /> },
            { title: "Document Search", subtitle: "Instant retrieval", icon: <Search className="w-4 h-4 text-purple-400" /> },
            { title: "Secure Access", subtitle: "Enterprise-grade security", icon: <Shield className="w-4 h-4 text-green-400" /> },
            { title: "Grounded Answers", subtitle: "No hallucinations", icon: <CheckCircle className="w-4 h-4 text-indigo-400" /> },
            { title: "Multi-format", subtitle: "PDF, docs, and more", icon: <FileText className="w-4 h-4 text-orange-400" /> },
        ]
    }
}

const TabLayout = ({ data }: { data: typeof tabData.sales }) => (
    <Card className="glow-edge-container relative overflow-visible border-0">
        <BorderBeam size={300} duration={12} colorFrom="#6366f1" colorTo="#8b5cf6" />
        <CardContent className="p-6 md:p-10">
            <FeatureSection
                tasks={data.tasks}
                badge={data.badge}
                heading={data.heading}
                badges={data.badges}
            />
        </CardContent>
    </Card>
)

export function Services() {
    return (
        <InfiniteGridBackground className="py-4 md:py-6">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-3">
                        What we are solving
                        <br />
                        for you
                    </h1>
                    <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
                        Bridge operational gaps and scale department-wide intelligence with specialized AI agents, managed from a secure, unified infrastructure.
                    </p>
                </div>

                <Tabs defaultValue="sales" className="w-full">
                    <div className="flex justify-center mb-6">
                        <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full h-auto gap-2 bg-transparent p-0">
                            <TabsTrigger value="sales" className="flex items-center justify-center gap-2 h-10 px-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/20 cursor-pointer transition-all duration-200">
                                <Lightbulb className="h-4 w-4 shrink-0" />
                                <span className="whitespace-nowrap">Sales Agents</span>
                            </TabsTrigger>
                            <TabsTrigger value="support" className="flex items-center justify-center gap-2 h-10 px-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/20 cursor-pointer transition-all duration-200">
                                <BarChart3 className="h-4 w-4 shrink-0" />
                                <span className="whitespace-nowrap">Customer Support</span>
                            </TabsTrigger>
                            <TabsTrigger value="booking" className="flex items-center justify-center gap-2 h-10 px-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/20 cursor-pointer transition-all duration-200">
                                <TrendingUp className="h-4 w-4 shrink-0" />
                                <span className="whitespace-nowrap">Booking & Scheduling</span>
                            </TabsTrigger>
                            <TabsTrigger value="voice" className="flex items-center justify-center gap-2 h-10 px-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/20 cursor-pointer transition-all duration-200">
                                <Mic className="h-4 w-4 shrink-0" />
                                <span className="whitespace-nowrap">Voice Agents</span>
                            </TabsTrigger>
                            <TabsTrigger value="email" className="flex items-center justify-center gap-2 h-10 px-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/20 cursor-pointer transition-all duration-200">
                                <Mail className="h-4 w-4 shrink-0" />
                                <span className="whitespace-nowrap">Email Agents</span>
                            </TabsTrigger>
                            <TabsTrigger value="rag" className="flex items-center justify-center gap-2 h-10 px-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/20 cursor-pointer transition-all duration-200">
                                <Brain className="h-4 w-4 shrink-0" />
                                <span className="whitespace-nowrap">Custom RAG</span>
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="sales" className="mt-0">
                        <TabLayout data={tabData.sales} />
                    </TabsContent>

                    <TabsContent value="support" className="mt-0">
                        <TabLayout data={tabData.support} />
                    </TabsContent>

                    <TabsContent value="booking" className="mt-0">
                        <TabLayout data={tabData.booking} />
                    </TabsContent>

                    <TabsContent value="voice" className="mt-0">
                        <TabLayout data={tabData.voice} />
                    </TabsContent>

                    <TabsContent value="email" className="mt-0">
                        <TabLayout data={tabData.email} />
                    </TabsContent>

                    <TabsContent value="rag" className="mt-0">
                        <TabLayout data={tabData.rag} />
                    </TabsContent>
                </Tabs>
            </div>
        </InfiniteGridBackground>
    )
}
