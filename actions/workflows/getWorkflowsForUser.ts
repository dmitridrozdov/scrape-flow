"use server"

import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function GetWorkflowsForUser() {
    const {userId} = auth()
    if (!userId) {
        throw new Error("Unauthorized")
    }
    const workflows = await prisma.workflow.findMany({
        where: {
            userId: userId
        },
        orderBy: {
            createdAt: "asc"
        }
    })
    return workflows
}