"use client";

import { CoinsIcon, HomeIcon, Layers2Icon, ShieldCheckIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import Logo from './Logo';
import { buttonVariants } from './ui/button';
import { usePathname } from 'next/navigation';

const routes = [
    {
        href: "",
        label: "Home",
        icon: HomeIcon
    },
    {
        href: "workflows",
        label: "Workflows",
        icon: Layers2Icon
    },
    {
        href: "credentials",
        label: "Credentials",
        icon: ShieldCheckIcon
    },
    {
        href: "billing",
        label: "Billing",
        icon: CoinsIcon
    },
]

/**
 * DesktopSidebar is a sidebar component that is only visible on desktop devices.
 * It has a fixed width and height of 280px and 100vh respectively, and is
 * absolutely positioned to the left of the screen.
 *
 * It is colored with a background of `bg-primary/5` and text color of
 * `text-muted-foreground` in light mode, and `bg-secondary/30` and
 * `dark:text-foreground` in dark mode.
 *
 * It also has a border-right of 2px with color `border-separate`.
 *
 * It is used as a top-level component in the app.
 */
function DesktopSidebar() {
    const pathName = usePathname();
    const activeRoute = routes.find(
        route => route.href.length >0 && pathName.includes
        (route.href)
    ) || routes[0]
  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen 
        overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground
        text-muted-foreground border-r-2 border-separate
    ">
        <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
            <Logo />
        </div>
        <div className='p-2'>todo credits</div>
        <div className='flex flex-col p2'>
            {routes.map((route) => (
                <Link 
                    key={route.href} 
                    href={route.href} 
                    className={buttonVariants({
                        variant: activeRoute.href === route.href ? "sidebarActiveItem" : "sidebarItem"
                    })}
                >
                    <route.icon size={20} />
                    {route.label}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default DesktopSidebar

export function MobileSidebar() {
    const pathName = usePathname();
    const activeRoute = routes.find(
        route => route.href.length >0 && pathName.includes
        (route.href)
    ) || routes[0]
    return (
        <div className='block border-separate bg-background md:hidden'>Mobile Side Bar</div>
    )
}