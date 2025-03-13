"use client"

import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { WorflowStatus } from '@/types/workflow'
import { Workflow } from '@prisma/client'
import { FileTextIcon, MoreVerticalIcon, PlayIcon, ShuffleIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'
import { Tooltip } from 'recharts'
import { TooltipArrow } from '@radix-ui/react-tooltip'
import TooltipWrapper from '@/components/TooltipWrapper'

const statusColors = {
    [WorflowStatus.DRAFT]: "bg-yellow-400 text-yellow-600",
    [WorflowStatus.PUBLISHED]: "bg-primary"
}

const WorkflowCard = ({workflow}: {workflow: Workflow}) => {
    const isDraft = workflow.status === WorflowStatus.DRAFT
  return (
    <Card className='border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark: shadow-primary/30'>
        <CardContent className='p-4 flex items-center justify-between h-[100px]'>
            <div className='flex items-center justify-end space-x-3'>
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", 
                    statusColors[workflow.status as WorflowStatus])}>
                    {isDraft ? <FileTextIcon className='h-5 w-5' /> : <PlayIcon className='h-5 w-5 text-white' />}
                </div>
                <div>
                    <h3 className='text-base font-bold text-muted-foreground flex items-center'>
                        <Link 
                            href={`/workflow/editor/${workflow.id}`}
                            className='flex items-center hover:underline'
                        >
                            {workflow.name}
                        </Link>
                        {isDraft && 
                            <span className='ml-2 px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full'>
                                Draft
                            </span>
                        }
                    </h3>   
                </div>
            </div>
            <div className='flex items-center space-x-2'>
                <Link 
                    href={`/workflow/editor/${workflow.id}`}
                    className={
                        cn(
                            buttonVariants({
                                variant: "outline",
                                size: "sm",
                            }),
                            "flex items-center gap-2"
                        )
                    }
                >
                    <ShuffleIcon size={16} />
                    Edit
                </Link>
                <WorkflowActions workflow={workflow} />
            </div>
        </CardContent>
    </Card>
  )
}

const WorkflowActions = ({workflow}: {workflow: Workflow}) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='sm'>
                    <TooltipWrapper content={"More actions"}>
                        <MoreVerticalIcon size={18} />
                    </TooltipWrapper>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href={`/workflow/editor/${workflow.id}`}>Edit</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default WorkflowCard