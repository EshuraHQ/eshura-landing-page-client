"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BorderBeam } from "@/components/border-beam"
import {
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

// Sample data for the dashboard mockup
const statsData = [
    {
        title: "Active AI Agents",
        value: "248",
        change: "+12.4%",
        trend: "up",
        icon: Users
    },
    {
        title: "Tasks Completed",
        value: "15,892",
        change: "+28.2%",
        trend: "up",
        icon: ShoppingCart
    },
    {
        title: "Avg. Processing Time",
        value: "0.8s",
        change: "-42.5%",
        trend: "up",
        icon: DollarSign
    },
]

const paymentsData = [
    { status: "Success", email: "ken99@yahoo.com", amount: "$316.00" },
    { status: "Success", email: "abe45@gmail.com", amount: "$242.00" },
    { status: "Processing", email: "monserrat44@gmail.com", amount: "$837.00" },
    { status: "Failed", email: "carmella@hotmail.com", amount: "$721.00" },
]

const teamMembers = [
    { name: "Olivia Martin", email: "olivia.martin@email.com", avatar: "OM" },
    { name: "Jackson Lee", email: "jackson.lee@email.com", avatar: "JL" },
    { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", avatar: "IN" },
    { name: "William Kim", email: "will.kim@email.com", avatar: "WK" },
]

export function Services() {
    return (
        <section className="bg-background py-20 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-3">
                        What we are solving
                        <br />
                        for you
                    </h1>
                    <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
                        Monitor, manage, and optimize your AI agents from a single
                        command center. Real-time insights at your fingertips.
                    </p>
                </div>

                {/* Tabs Section */}
                <Tabs defaultValue="insights" className="w-full">
                    <div className="flex justify-center mb-8">
                        <TabsList className="grid grid-cols-5 w-auto">
                            <TabsTrigger value="insights" className="flex items-center gap-2">
                                <Lightbulb className="h-4 w-4" />
                                Revenue Growth
                            </TabsTrigger>
                            <TabsTrigger value="metrics" className="flex items-center gap-2">
                                <BarChart3 className="h-4 w-4" />
                                Support Automation
                            </TabsTrigger>
                            <TabsTrigger value="trends" className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4" />
                                Smart Scheduling
                            </TabsTrigger>
                            <TabsTrigger value="sources" className="flex items-center gap-2">
                                <Database className="h-4 w-4" />
                                Omnichannel AI
                            </TabsTrigger>
                            <TabsTrigger value="models" className="flex items-center gap-2">
                                <Boxes className="h-4 w-4" />
                                Knowledge Intelligence
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* Chatbot UI Mockup Content */}
                    <TabsContent value="insights" className="mt-0">
                        <Card className="glow-edge-container relative overflow-visible border-0">
                            <CardContent className="p-8 md:p-12">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                                    {/* Left Side - Benefits Text */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-semibold text-foreground">How AI Chatbots Drive Revenue</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                                                <p className="text-muted-foreground text-sm">Convert casual visitors into paying customers with personalized conversations</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                                                <p className="text-muted-foreground text-sm">Understand customer intent and guide them to the right products instantly</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                                                <p className="text-muted-foreground text-sm">Recommend products based on real-time preferences and browsing behavior</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center - Mobile Chatbot Preview */}
                                    <div className="flex justify-center">
                                        <div className="w-64 bg-white rounded-[2.5rem] p-2 shadow-2xl border border-gray-200">
                                            {/* Phone Frame */}
                                            <div className="bg-gray-50 rounded-[2rem] overflow-hidden">
                                                {/* Phone Notch */}
                                                <div className="bg-white h-6 flex items-center justify-center">
                                                    <div className="w-20 h-1.5 bg-gray-200 rounded-full" />
                                                </div>

                                                {/* Chat Header */}
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

                                                {/* Chat Messages */}
                                                <div className="bg-gray-50 px-3 py-4 space-y-3 h-64 overflow-hidden">
                                                    {/* Bot Message */}
                                                    <div className="flex gap-2">
                                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shrink-0" />
                                                        <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%] shadow-sm">
                                                            <p className="text-xs text-gray-700">Hi! How can I help you today?</p>
                                                        </div>
                                                    </div>

                                                    {/* User Message */}
                                                    <div className="flex justify-end">
                                                        <div className="bg-indigo-500 text-white rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
                                                            <p className="text-xs">I have dry skin. Suggest a moisturizer.</p>
                                                        </div>
                                                    </div>

                                                    {/* Bot Response */}
                                                    <div className="flex gap-2">
                                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shrink-0" />
                                                        <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%] shadow-sm">
                                                            <p className="text-xs text-gray-700 mb-2">For dry skin, I highly recommend our Intense Hydration Cream.</p>
                                                            {/* Product Card */}
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

                                                {/* Input Area */}
                                                <div className="bg-white px-3 py-3 border-t border-gray-100">
                                                    <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
                                                        <span className="text-xs text-gray-400">Message Shopping Assistant...</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side - Business Outcomes */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-semibold text-foreground">Measurable Business Impact</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0" />
                                                <p className="text-muted-foreground text-sm">35% higher conversion rates through guided shopping experiences</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0" />
                                                <p className="text-muted-foreground text-sm">25% increase in average order value with smart upselling</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0" />
                                                <p className="text-muted-foreground text-sm">60% reduction in cart abandonment with instant support</p>
                                            </div>
                                        </div>
                                        <Button className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Other Tab Contents - Placeholder */}
                    <TabsContent value="metrics">
                        <Card className="relative overflow-hidden border-2">
                            <BorderBeam size={300} duration={12} colorFrom="#6366f1" colorTo="#8b5cf6" />
                            <CardContent className="p-12 text-center">
                                <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Metrics Dashboard</h3>
                                <p className="text-muted-foreground">View detailed metrics and analytics for your business.</p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="trends">
                        <Card className="relative overflow-hidden border-2">
                            <BorderBeam size={300} duration={12} colorFrom="#6366f1" colorTo="#8b5cf6" />
                            <CardContent className="p-12 text-center">
                                <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Trends Analysis</h3>
                                <p className="text-muted-foreground">Discover trends and patterns in your data.</p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="sources">
                        <Card className="relative overflow-hidden border-2">
                            <BorderBeam size={300} duration={12} colorFrom="#6366f1" colorTo="#8b5cf6" />
                            <CardContent className="p-12 text-center">
                                <Database className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Data Sources</h3>
                                <p className="text-muted-foreground">Connect and manage your data sources.</p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="models">
                        <Card className="relative overflow-hidden border-2">
                            <BorderBeam size={300} duration={12} colorFrom="#6366f1" colorTo="#8b5cf6" />
                            <CardContent className="p-12 text-center">
                                <Boxes className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                <h3 className="text-xl font-semibold mb-2">AI Models</h3>
                                <p className="text-muted-foreground">Explore and deploy machine learning models.</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
