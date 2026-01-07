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
                                Insights
                            </TabsTrigger>
                            <TabsTrigger value="metrics" className="flex items-center gap-2">
                                <BarChart3 className="h-4 w-4" />
                                Metrics
                            </TabsTrigger>
                            <TabsTrigger value="trends" className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4" />
                                Trends
                            </TabsTrigger>
                            <TabsTrigger value="sources" className="flex items-center gap-2">
                                <Database className="h-4 w-4" />
                                Sources
                            </TabsTrigger>
                            <TabsTrigger value="models" className="flex items-center gap-2">
                                <Boxes className="h-4 w-4" />
                                Models
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* Dashboard Content */}
                    <TabsContent value="insights" className="mt-0">
                        <Card className="relative overflow-hidden border-2">
                            <BorderBeam size={300} duration={12} colorFrom="#6366f1" colorTo="#8b5cf6" />
                            <CardContent className="p-6">
                                {/* Dashboard Header */}
                                <div className="mb-6">
                                    <h2 className="text-2xl font-semibold">Dashboard</h2>
                                    <div className="flex gap-4 mt-2">
                                        <Button variant="ghost" size="sm" className="text-muted-foreground">Overview</Button>
                                        <Button variant="ghost" size="sm" className="text-muted-foreground">Analytics</Button>
                                        <Button variant="ghost" size="sm" className="text-muted-foreground">Reports</Button>
                                        <Button variant="ghost" size="sm" className="text-muted-foreground">Notifications</Button>
                                    </div>
                                </div>

                                {/* Stats Row */}
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                    {statsData.map((stat, index) => (
                                        <Card key={index} className="bg-card">
                                            <CardHeader className="pb-2">
                                                <CardDescription className="flex items-center gap-2">
                                                    <stat.icon className="h-4 w-4" />
                                                    {stat.title}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="text-2xl font-bold">{stat.value}</div>
                                                <div className={`flex items-center text-sm ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                                                    {stat.trend === 'up' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                                                    {stat.change}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                    {/* Total Revenue Card */}
                                    <Card className="bg-card">
                                        <CardHeader className="pb-2">
                                            <CardDescription className="flex items-center gap-2">
                                                <DollarSign className="h-4 w-4" />
                                                Total Revenue
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">$15,231.89</div>
                                            <div className="flex items-center text-sm text-green-500">
                                                <ArrowUpRight className="h-4 w-4" />
                                                +20.1%
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Charts and Data Section */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    {/* Sales Activity Chart */}
                                    <Card className="lg:col-span-2">
                                        <CardHeader>
                                            <CardTitle className="text-base">Sales Activity - Monthly</CardTitle>
                                            <CardDescription>Your sales for the last 6 months</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="h-40 flex items-end gap-2">
                                                {[40, 65, 35, 85, 55, 70, 45, 80, 50, 90, 60, 75].map((height, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex-1 bg-gradient-to-t from-red-200 to-red-100 rounded-t"
                                                        style={{ height: `${height}%` }}
                                                    />
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Subscriptions Card */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-base">Subscriptions</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-3xl font-bold mb-2">+2350</div>
                                            <div className="h-24 flex items-end gap-1">
                                                {[30, 45, 35, 50, 40, 65, 55, 70, 60, 80, 75, 90].map((height, i) => (
                                                    <div
                                                        key={i}
                                                        className={`flex-1 rounded-t ${i % 2 === 0 ? 'bg-teal-400' : 'bg-orange-400'}`}
                                                        style={{ height: `${height}%` }}
                                                    />
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Payments Table and Team Members */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                                    {/* Payments Table */}
                                    <Card className="lg:col-span-2">
                                        <CardHeader>
                                            <CardTitle className="text-base">Payments</CardTitle>
                                            <CardDescription>Manage your payments</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-2">
                                                <div className="grid grid-cols-4 text-xs text-muted-foreground font-medium pb-2 border-b">
                                                    <div>Status</div>
                                                    <div>Email</div>
                                                    <div>Amount</div>
                                                    <div>Cookies</div>
                                                </div>
                                                {paymentsData.map((payment, index) => (
                                                    <div key={index} className="grid grid-cols-4 text-sm py-2 border-b border-dashed">
                                                        <div className={`font-medium ${payment.status === 'Success' ? 'text-green-600' :
                                                            payment.status === 'Processing' ? 'text-yellow-600' : 'text-red-600'
                                                            }`}>
                                                            {payment.status}
                                                        </div>
                                                        <div className="text-muted-foreground">{payment.email}</div>
                                                        <div>{payment.amount}</div>
                                                        <div className="text-muted-foreground">-</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Team Members */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-base">Team Members</CardTitle>
                                            <CardDescription>Invite your team members to collaborate.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                {teamMembers.map((member, index) => (
                                                    <div key={index} className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                                                            {member.avatar}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="text-sm font-medium truncate">{member.name}</div>
                                                            <div className="text-xs text-muted-foreground truncate">{member.email}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
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
