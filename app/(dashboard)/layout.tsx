import { Separator } from '@radix-ui/react-context-menu'
import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className="flex h-screen">
        <div className="flex flex-col flex-1 min-h-screen">
            <header className="flex justify-between items-center px-6 py-4 h-[50px] container"> 
                ScrapeFlow
            </header>
            <Separator />
        </div>
    </div>
  )
}

export default layout