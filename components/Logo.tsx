import { cn } from '@/lib/utils';
import { SquareDashedMousePointer } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

interface LogoProps {
  fontSize?: string;
  iconSize?: number;
}

function Logo({ fontSize = "text-2xl", iconSize = 20 }: LogoProps): React.ReactElement {
  return (
    <Link href="/" className={cn("text-2xl font-extrabold flex item-center gap-2", fontSize)}>
        <div className="rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-600 p-2"> 
            <SquareDashedMousePointer size={iconSize} className='stroke-white'/>
        </div>
    </Link>
  )
}

export default Logo