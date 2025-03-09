"use client"

import { Card, CardContent } from '@/components/ui/card'
import { WorflowStatus } from '@/types/workflow'
import { Workflow } from '@prisma/client'
import React from 'react'

const WorkflowCard = ({workflow}: {workflow: Workflow}) => {
    const isDraft = workflow.status === WorflowStatus.DRAFT
  return (
    <Card className='border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark: shadow-primary/30'>
        <CardContent>
            <div className='flex items-center justify-between'>
                <h3 className='font-bold'>{workflow.name}</h3>
                <span className='text-sm text-muted-foreground'>
                    {isDraft ? "Draft" : "Published"}
                </span>
            </div>
            <p className='text-sm text-muted-foreground'>{workflow.description}</p>
        </CardContent>
    </Card>
  )
}

export default WorkflowCard