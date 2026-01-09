"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BorderBeam } from "@/components/border-beam"
import {
    Mic,
    Mail,
    Brain,
    Lightbulb,
    BarChart3,
    TrendingUp,
    Database,
    Boxes,
    Download,
    ArrowUpRight,
    ArrowDownRight,
    Users,
    DollarSign,
    ShoppingCart,
    Activity
} from "lucide-react"

const tabData = {
    sales: {
        challenges: [
            "High lead response latency causing drop-offs",
            "Inconsistent follow-up on cold inquiries",
            "Difficulty qualifying leads at scale 24/7"
        ],
        solutions: [
            "Instant 24/7 engagement to capture every lead",
            "Automated qualification reduces sales cycle time",
            "Personalized recommendations drive higher AOV"
        ]
    },
    support: {
        challenges: [
            "Teams overwhelmed by repetitive L1 queries",
            "Rising operational costs per support ticket",
            "Long wait times leading to customer churn"
        ],
        solutions: [
            "Instant resolution of 70%+ of routine inquiries",
            "Multi-channel support with consistent brand voice",
            "Seamless human handoff for complex escalations"
        ]
    },
    booking: {
        challenges: [
            "Manual scheduling errors and double-bookings",
            "High no-show rates due to lack of reminders",
            "Friction in scheduling high-value consultations"
        ],
        solutions: [
            "Frictionless chat-based booking and rescheduling",
            "Automated reminders and direct calendar sync",
            "Reduced administrative burden on front-desk staff"
        ]
    },
    voice: {
        challenges: [
            "Missed revenue from unanswered phone calls",
            "High cost of 24/7 bilingual phone support",
            "Lack of structured data from voice inquiries"
        ],
        solutions: [
            "Intelligent inbound answering and outbound routing",
            "Human-like voice quality with zero hold times",
            "Direct CRM logging of all voice conversation data"
        ]
    },
    email: {
        challenges: [
            "Inbox silos causing slow response times",
            "Critical inquiries lost in massive mail volumes",
            "Time-intensive manual email triaging"
        ],
        solutions: [
            "Automated drafting and categorization of emails",
            "Proactive outreach based on specific triggers",
            "Zero-backlog inbox management for key accounts"
        ]
    },
    rag: {
        challenges: [
            "Standard AI providing generic or hallucinated info",
            "Proprietary data locked in complex file formats",
            "Security concerns with public AI models"
        ],
        solutions: [
            "Grounded answers using your secure knowledge base",
            "Real-time retrieval of internal business documents",
            "Reliable and accurate logic for complex use cases"
        ]
    }
}

const PhoneMockup = () => (
    <div className="flex justify-center">
        <div className="w-64 bg-white rounded-[2.5rem] p-2 shadow-2xl border border-gray-200">
            <div className="bg-gray-50 rounded-[2rem] overflow-hidden">
                <div className="bg-white h-6 flex items-center justify-center">
                    <div className="w-20 h-1.5 bg-gray-200 rounded-full" />
                </div>
                <div className="bg-white px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium">AI</div>
                        <div>
                            <div className="text-sm font-semibold text-gray-900">Shopping Assistant</div>
                            <div className="text-xs text-green-500 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                Online
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-3 py-4 space-y-3 h-64 overflow-hidden">
                    <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shrink-0" />
                        <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%] shadow-sm">
                            <p className="text-xs text-gray-700">Hi! How can I help you today?</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="bg-indigo-500 text-white rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
                            <p className="text-xs">I have dry skin. Suggest a moisturizer.</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shrink-0" />
                        <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%] shadow-sm">
                            <p className="text-xs text-gray-700 mb-2">For dry skin, I highly recommend our Intense Hydration Cream.</p>
                            <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                                <div className="flex gap-2">
                                    <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-md shrink-0" />
                                    <div>
                                        <p className="text-xs font-medium text-gray-900">Intense Hydration Cream</p>
                                        <p className="text-[10px] text-gray-500">Deep moisture for 24hrs</p>
                                        <p className="text-xs font-semibold text-indigo-600 mt-1">$29.99</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-3 py-3 border-t border-gray-100">
                    <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
                        <span className="text-xs text-gray-400">Message Shopping Assistant...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const TabLayout = ({ challenges, solutions }: { challenges: string[], solutions: string[] }) => (
    <Card className="glow-edge-container relative overflow-visible border-0">
        <BorderBeam size={300} duration={12} colorFrom="#6366f1" colorTo="#8b5cf6" />
        <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground">Critical Challenges</h3>
                    <div className="space-y-4">
                        {challenges.map((c, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                                <p className="text-muted-foreground text-sm">{c}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <PhoneMockup />

                <div className="space-y-6 flex flex-col h-full">
                    <div>
                        <h3 className="text-xl font-semibold text-foreground">AI-Powered Solution & Outcomes</h3>
                        <div className="space-y-4 mt-6">
                            {solutions.map((s, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0" />
                                    <p className="text-muted-foreground text-sm">{s}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-auto flex justify-end">
                        <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white cursor-pointer">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
)

export function Services() {
    return (
        <section className="relative bg-background py-4 md:py-6 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-50" />

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
                        <TabLayout {...tabData.sales} />
                    </TabsContent>

                    <TabsContent value="support" className="mt-0">
                        <TabLayout {...tabData.support} />
                    </TabsContent>

                    <TabsContent value="booking" className="mt-0">
                        <TabLayout {...tabData.booking} />
                    </TabsContent>

                    <TabsContent value="voice" className="mt-0">
                        <TabLayout {...tabData.voice} />
                    </TabsContent>

                    <TabsContent value="email" className="mt-0">
                        <TabLayout {...tabData.email} />
                    </TabsContent>

                    <TabsContent value="rag" className="mt-0">
                        <TabLayout {...tabData.rag} />
                    </TabsContent>
                </Tabs>
            </div >
        </section >
    )
}
