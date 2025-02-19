"use client"

import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

import React from 'react'

interface Props {
    title?: string
    subTitle?: string
    icon?: LucideIcon
    iconClassName?: string
    titleClassName?: string
    subTitleClassName?: string
}
const CustomDialogHeader = (props: Props) => {
  return (
    <DialogHeader className="py-6">
        <DialogTitle asChild>
            <div className="flex flex-col items-center gap-2 mb-2">
                {props.icon && <props.icon size={30} className={cn("stroke-primary", props.iconClassName)} />}
            </div>
        </DialogTitle>
    </DialogHeader>
  )
}

export default CustomDialogHeader