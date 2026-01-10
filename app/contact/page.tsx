"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactCard } from "@/components/ui/contact-card";
import { InfiniteGridBackground } from "@/components/ui/infinite-grid-background";
import {
    ArrowLeft,
    Mail,
    Phone,
    MapPin,
    Send,
    User,
    MessageSquare,
    CheckCircle,
    Building2
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
        <InfiniteGridBackground className="min-h-screen py-12 md:py-20 flex items-center justify-center">
            <div className="mx-auto w-full max-w-6xl px-6 mt-12">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                </Link>

                <ContactCard
                    title="Book a Demo"
                    description="See how our AI agents can transform your business operations. Schedule a personalized demo with our team and get an ROI analysis for your use case."
                    contactInfo={[
                        {
                            icon: Mail,
                            label: 'Email Us',
                            value: 'contact@eshura.ai',
                        },
                        {
                            icon: Phone,
                            label: 'Call Us',
                            value: '+91 9875591127',
                        },
                        {
                            icon: MapPin,
                            label: 'Location',
                            value: 'Kolkata, India',
                            className: 'col-span-2',
                        }
                    ]}
                >
                    {isSubmitted ? (
                        <div className="w-full text-center py-12 space-y-4">
                            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                                <CheckCircle className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
                            <p className="text-muted-foreground max-w-sm mx-auto">
                                Your demo request has been submitted. Our team will contact you within 24 hours.
                            </p>
                            <Button variant="outline" className="mt-4" onClick={() => setIsSubmitted(false)}>
                                Send another message
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="w-full space-y-4 p-4">
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
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@company.com"
                                    required
                                    className="bg-background/50"
                                />
                            </div>

                            {/* <div className="space-y-2">
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
                            </div> */}

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
                                className="w-full cursor-pointer"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                        Submitting...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        <Send className="w-4 h-4" />
                                        Request Demo
                                    </span>
                                )}
                            </Button>
                        </form>
                    )}
                </ContactCard>
            </div>
        </InfiniteGridBackground>
    );
}
