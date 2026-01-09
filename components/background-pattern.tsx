"use client"

import { usePathname } from "next/navigation"

export function BackgroundPattern() {
    const pathname = usePathname()

    // Do not render on home page
    if (pathname === "/") return null

    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-background">
            <div className="absolute inset-0 bg-dot-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
        </div>
    )
}
