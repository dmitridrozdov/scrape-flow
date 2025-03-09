"use client"

import { Card, CardContent } from '@/components/ui/card'
import { WorflowStatus } from '@/types/workflow'
import { Workflow } from '@prisma/client'
import { FileTextIcon, PlayIcon } from 'lucide-react'
import React from 'react'

const WorkflowCard = ({workflow}: {workflow: Workflow}) => {
    const isDraft = workflow.status === WorflowStatus.DRAFT
  return (
    <Card className='border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark: shadow-primary/30'>
        <CardContent>
            <div className='flex items-center justify-between'>
                {isDraft ? <FileTextIcon className='h-5 w-5' /> : <PlayIcon className='h-5 w-5 text-white' />}
            </div>
            <p className='text-sm text-muted-foreground'>{workflow.description}</p>
        </CardContent>
    </Card>
  )
}

export default WorkflowCard