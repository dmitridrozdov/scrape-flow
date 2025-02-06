"use client";

import { CoinsIcon, HomeIcon, Layers2Icon, ShieldCheckIcon } from 'lucide-react';
import React from 'react'
import Logo from './Logo';

const routs = [
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
  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen 
        overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground
        text-muted-foreground border-r-2 border-separate
    ">
        <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
            <Logo />
        </div>
    </div>
  )
}

export default DesktopSidebar