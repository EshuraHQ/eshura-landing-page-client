
"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { menuItems } from "@/lib/menu-data"

export function Navbar() {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    // const { theme, setTheme } = useTheme()
    // const [mounted, setMounted] = React.useState(false)

    // React.useEffect(() => {
    //     setMounted(true)
    // }, [])

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // const toggleTheme = () => {
    //     setTheme(theme === 'dark' ? 'light' : 'dark')
    // }

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed group z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <div className="flex items-center gap-2">
                                    <img src="/eshura-logo.png" alt="eshura-logo" className="h-14 w-auto" />
                                    <p className='text-xl font-bold'>Eshura</p>
                                </div>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-6 text-sm">
                                {menuItems.map((item) => (
                                    <li key={item.name} className="relative group/menu">
                                        {item.hasDropdown ? (
                                            <>
                                                <button className="cursor-pointer text-muted-foreground hover:text-accent-foreground flex items-center gap-1 duration-150">
                                                    <span>{item.name}</span>
                                                    <ChevronDown className="size-3 transition-transform group-hover/menu:rotate-180" />
                                                </button>
                                                {/* Dropdown Menu */}
                                                <div className="invisible opacity-0 group-hover/menu:visible group-hover/menu:opacity-100 absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-200">
                                                    <div className="bg-background border rounded-xl shadow-xl p-4 min-w-[200px]">
                                                        {item.dropdownContent?.groups ? (
                                                            /* Mega Menu for Products */
                                                            <div className="grid grid-cols-3 gap-6 min-w-[600px]">
                                                                {item.dropdownContent.groups.map((group, gIdx) => (
                                                                    <div key={gIdx} className="space-y-3">
                                                                        <div>
                                                                            <h4 className="font-bold text-sm text-foreground">{group.title}</h4>
                                                                            {group.cta && (
                                                                                <p className="text-xs text-muted-foreground mt-1">{group.cta}</p>
                                                                            )}
                                                                        </div>
                                                                        <ul className="space-y-1.5">
                                                                            {group.items.map((subItem, sIdx) => (
                                                                                <li key={sIdx}>
                                                                                    <Link href={subItem.href} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                                                                        <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors" />
                                                                                        <span className="group-hover:translate-x-0.5 transition-transform">{subItem.name}</span>
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            /* Simple Dropdown */
                                                            <ul className="space-y-1">
                                                                {item.dropdownContent?.items?.map((subItem, sIdx) => (
                                                                    <li key={sIdx}>
                                                                        <Link href={subItem.href} className="text-sm text-muted-foreground hover:text-foreground block py-1.5 px-2 rounded-md hover:bg-muted transition-colors">
                                                                            {subItem.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href || '#'}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-4 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            {item.hasDropdown ? (
                                                <details className="group/mobile">
                                                    <summary className="text-muted-foreground hover:text-accent-foreground flex items-center justify-between cursor-pointer duration-150 list-none">
                                                        <span>{item.name}</span>
                                                        <ChevronDown className="size-4 transition-transform group-open/mobile:rotate-180" />
                                                    </summary>
                                                    <ul className="mt-2 ml-4 space-y-2">
                                                        {item.dropdownContent?.groups?.map((group, gIdx) => (
                                                            <li key={gIdx} className="space-y-1">
                                                                <span className="text-sm font-bold text-foreground block">{group.title}</span>
                                                                {group.cta && (
                                                                    <span className="text-xs text-muted-foreground block mb-2">{group.cta}</span>
                                                                )}
                                                                <ul className="ml-2 border-l pl-3 space-y-1">
                                                                    {group.items.map((subItem, sIdx) => (
                                                                        <li key={sIdx}>
                                                                            <Link href={subItem.href} className="text-sm text-muted-foreground hover:text-foreground block py-1">
                                                                                {subItem.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </li>
                                                        ))}
                                                        {item.dropdownContent?.items?.map((subItem, sIdx) => (
                                                            <li key={sIdx}>
                                                                <Link href={subItem.href} className="text-sm text-muted-foreground hover:text-foreground block py-0.5">
                                                                    {subItem.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </details>
                                            ) : (
                                                <Link
                                                    href={item.href || '#'}
                                                    className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                    <span>{item.name}</span>
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Book a Demo</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="#">
                                        <span>Book a Demo</span>
                                    </Link>
                                </Button>
                                {/* Theme Toggle Button */}
                                {/* <button
                                    onClick={toggleTheme}
                                    aria-label="Toggle theme"
                                    className="flex h-8 w-8 items-center justify-center rounded-lg border bg-background text-foreground transition-colors hover:bg-muted">
                                    {mounted && theme === 'dark' ? (
                                        <Sun className="size-4" />
                                    ) : (
                                        <Moon className="size-4" />
                                    )}
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
