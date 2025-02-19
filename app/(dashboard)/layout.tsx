import BreadcrumbHeader from '@/components/BreadcrumbHeader'
import { AppProviders } from '@/components/providers/AppProviders'
import { ModeToggle } from '@/components/providers/ThemeModeToggle'
import DesktopSidebar from '@/components/Sidebar'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { Separator } from "@/components/ui/separator"
import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className="flex h-screen">
        <DesktopSidebar />
        <div className="flex flex-col flex-1 min-h-screen">
            <header className="flex justify-between items-center px-6 py-4 h-[50px] container"> 
                <BreadcrumbHeader />
                <div className='flex items-center gap-1'>
                    <ModeToggle />
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </header>
            <Separator />
            <div className="overflow-auto">
                <div className="flex-1 container py-4 text-accent-foreground">
                    <AppProviders>
                        {children}
                    </AppProviders>
                </div>
            </div>
        </div>
    </div>
  )
}

export default layout