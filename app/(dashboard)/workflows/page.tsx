import { GetWorkflowsForUser } from '@/actions/workflows/getWorkflowsForUser'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Skeleton } from '@/components/ui/skeleton'
import { AlertCircle, InboxIcon, User } from 'lucide-react'
import React, { Suspense } from 'react'
import CreateWorfklowDialog from './_components/CreateWorfklowDialog'

const page = () => {
  return (
    <div className='flex flex-1 flex-col h-full'>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-bold'>Workflows</h1>
                <p className='text-muted-foreground'>Manage your workflows</p>
            </div>
            <CreateWorfklowDialog />
        </div>

        <div className='h-full py-6'>
            <Suspense fallback={<UserWorkflowSkeleton />}>
                <UserWorkflows />
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

async function UserWorkflows() {
    const workflows = await GetWorkflowsForUser()
    if (!workflows) {
        return(
            <Alert variant={'destructive'}>
                <AlertCircle className='h-4 w-4' />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went wrong</AlertDescription>
            </Alert>
        )
    }

    if(workflows.length === 0) {    
        return (
            <div className='flex flex-col items-center gap-4 h-full justify-center'>
                <div className='flex items-center justify-center w-20 h-20bg-accent rounded-full'>
                    <InboxIcon size={40} className='stroke-primary' />
                </div>
                <div className='flex flex-col gap-1 text-center'>
                    <p className='font-bold'>No Workflows</p>
                    <p className='text-sm text-muted-foreground'>
                        Click the button below to create your first workflow
                    </p>
                </div>
                <CreateWorfklowDialog triggerText='Create your first workflow' />
            </div>
        )
    }

    return <div></div>
}   

export default page