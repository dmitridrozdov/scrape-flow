import { GetWorkflowsForUser } from '@/actions/workflows/getWorkflowsForUser'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Skeleton } from '@/components/ui/skeleton'
import { AlertCircle, User } from 'lucide-react'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div className='flex flex-1 flex-col h-full'>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-bold'>Workflows</h1>
                <p className='text-muted-foreground'>Create and manage your workflows</p>
            </div>
        </div>

        <div className='h-full py-6'>
            <Suspense fallback={<UserWorkflowSkeleton />}>
                <UserWorkflow />
            </Suspense>
        </div>
    </div>
  )
}

const UserWorkflowSkeleton = () => {
    return (
        <div className='space-y-2'>
            {
                [1,2,3,4].map(i => <Skeleton key={i} className='h-32 w-full' />)
            }
        </div>
    )
}

async function UserWorkflow() {
    const workflows = await GetWorkflowsForUser()
    if(!workflows) {
        return(
            <Alert variant={'destructive'}>
                <AlertCircle className='h-4 w-4' />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went wrong</AlertDescription>
            </Alert>
        )
    }
    return (
        <div>
        </div>
    )
}   

export default page