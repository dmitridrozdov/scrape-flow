"use server"

import prisma from "@/lib/prisma"
import { createWorkflowSchema, createWorkflowSchemaType } from "@/schema/workflow"
import { WorflowStatus } from "@/types/workflow"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export async function createWorkflow(form: createWorkflowSchemaType) {
    const {success, data} = createWorkflowSchema.safeParse(form)
    if (!success) {
        throw new Error("Invalid form data")
    }
    const {name, description} = data
    const {userId} = auth()
    if (!userId) {
        throw new Error("Unauthorized")
    }
    const result = await prisma.workflow.create({
        data: {
            userId,
            status: WorflowStatus.DRAFT,
            definition: "TODO",
            ...data
        }
    })
    if (!result) {
        throw new Error("Failed to create workflow")
    }
    redirect(`/workflow/editor/${result.id}`)
}
