"use client"

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { WorflowStatus } from '@/types/workflow'
import { Workflow } from '@prisma/client'
import { FileTextIcon, PlayIcon } from 'lucide-react'
import React from 'react'

const statusColors = {
    [WorflowStatus.DRAFT]: "bg-yellow-400 text-yellow-600",
    [WorflowStatus.PUBLISHED]: "bg-primary"
}

const WorkflowCard = ({workflow}: {workflow: Workflow}) => {
    const isDraft = workflow.status === WorflowStatus.DRAFT
  return (
    <Card className='border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark: shadow-primary/30'>
        <CardContent className='p-4 flex items-center justify-between h-[100px]'>
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", 
                statusColors[workflow.status as WorflowStatus])}>
                {isDraft ? <FileTextIcon className='h-5 w-5' /> : <PlayIcon className='h-5 w-5 text-white' />}
            </div>
            <p className='text-sm text-muted-foreground'>{workflow.description}</p>
        </CardContent>
    </Card>
  )
}

export default WorkflowCard