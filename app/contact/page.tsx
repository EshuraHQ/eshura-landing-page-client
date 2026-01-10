"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InfiniteGridBackground } from "@/components/ui/infinite-grid-background";
import {
    ArrowLeft,
    Mail,
    Phone,
    MapPin,
    Send,
    Building2,
    User,
    MessageSquare,
    Calendar,
    CheckCircle
} from "lucide-react";

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSubmitted(true);
    };

    return (
        <InfiniteGridBackground className="min-h-screen py-12 md:py-20">
            <div className="mx-auto max-w-6xl px-6">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Info */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Book a Demo
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-md">
                                See how our AI agents can transform your business operations.
                                Schedule a personalized demo with our team.
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 backdrop-blur-sm border border-border/50">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-indigo-400" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground">Email Us</h3>
                                    <p className="text-sm text-muted-foreground">contact@eshura.ai</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 backdrop-blur-sm border border-border/50">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground">Call Us</h3>
                                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 backdrop-blur-sm border border-border/50">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground">Location</h3>
                                    <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 pt-4">
                            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">What to expect</h3>
                            <div className="space-y-2">
                                {[
                                    "30-minute personalized demo",
                                    "Custom AI agent recommendations",
                                    "ROI analysis for your use case",
                                    "Implementation roadmap"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <Card className="border-0 bg-card/50 backdrop-blur-md shadow-2xl">
                        <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-indigo-400" />
                                Schedule Your Demo
                            </CardTitle>
                            <CardDescription>
                                Fill out the form below and we'll get back to you within 24 hours.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {isSubmitted ? (
                                <div className="text-center py-12 space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                                        <CheckCircle className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
                                    <p className="text-muted-foreground max-w-sm mx-auto">
                                        Your demo request has been submitted. Our team will contact you within 24 hours.
                                    </p>
                                    <Link href="/">
                                        <Button variant="outline" className="mt-4">
                                            <ArrowLeft className="w-4 h-4 mr-2" />
                                            Back to Home
                                        </Button>
                                    </Link>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" className="flex items-center gap-2">
                                                <User className="w-3.5 h-3.5 text-muted-foreground" />
                                                First Name
                                            </Label>
                                            <Input
                                                id="firstName"
                                                placeholder="John"
                                                required
                                                className="bg-background/50"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName" className="flex items-center gap-2">
                                                <User className="w-3.5 h-3.5 text-muted-foreground" />
                                                Last Name
                                            </Label>
                                            <Input
                                                id="lastName"
                                                placeholder="Doe"
                                                required
                                                className="bg-background/50"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="flex items-center gap-2">
                                            <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                                            Work Email
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@company.com"
                                            required
                                            className="bg-background/50"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="flex items-center gap-2">
                                            <Building2 className="w-3.5 h-3.5 text-muted-foreground" />
                                            Company Name
                                        </Label>
                                        <Input
                                            id="company"
                                            placeholder="Acme Inc."
                                            required
                                            className="bg-background/50"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="flex items-center gap-2">
                                            <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                                            Phone Number
                                        </Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            className="bg-background/50"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="flex items-center gap-2">
                                            <MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />
                                            How can we help?
                                        </Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your use case and what you're looking to achieve..."
                                            rows={4}
                                            className="bg-background/50 resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white cursor-pointer"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Submitting...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                <Send className="w-4 h-4" />
                                                Request Demo
                                            </span>
                                        )}
                                    </Button>

                                    <p className="text-xs text-center text-muted-foreground">
                                        By submitting this form, you agree to our{" "}
                                        <a href="#" className="underline hover:text-foreground">Privacy Policy</a>
                                    </p>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </InfiniteGridBackground>
    );
}
