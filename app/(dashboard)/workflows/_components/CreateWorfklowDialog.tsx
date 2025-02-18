"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'

const CreateWorfklowDialog = () => {
    const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button onClick={() => setOpen(true)}>Create Workflow</Button>
        </DialogTrigger>
        <DialogContent>
            <h1>Workflow</h1>
        </DialogContent>
    </Dialog>
  )
}

export default CreateWorfklowDialog