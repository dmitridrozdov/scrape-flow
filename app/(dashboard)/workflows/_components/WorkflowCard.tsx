"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Workflow } from '@prisma/client'
import React from 'react'

const WorkflowCard = ({workflow}: {workflow: Workflow}) => {
  return (
    <Card className='border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark: shadow-primary/30'>
        <CardContent>
            <p>{workflow.name}</p>
            <p>{workflow.description}</p>
            <p>{workflow.status}</p>
        </CardContent>
    </Card>
  )
}

export default WorkflowCard