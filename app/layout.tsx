import type { Metadata } from "next";
import { Inter, Birthstone } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundPattern } from "@/components/background-pattern";
import { ExpandableChatDemo } from "@/components/expandable-chat-demo";

const inter = Inter({ subsets: ["latin"] });
const birthstone = Birthstone({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-birthstone",
});

export const metadata: Metadata = {
    title: "AI Agent Services | Intelligent Business Automation",
    description: "Transform your business with AI agents that automate workflows, reduce costs, and scale operations 24/7.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} ${birthstone.variable}`}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                    <Navbar />
                    <BackgroundPattern />
                    {children}
                    <Footer />
                    <ExpandableChatDemo />
                </ThemeProvider>
            </body>
        </html>
    );
}
