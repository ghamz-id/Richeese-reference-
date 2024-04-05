'use server'
import Model_User, { User } from "@/db/models/users";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request : Request){
    try {
        const body: User = await request.json()
        await Model_User.register(body)

        return NextResponse.json({msg: "Register success"})
    } catch (error) {
        if (error instanceof ZodError) {
            const errMsg = error.errors[0].path[0] + " " + error.errors[0].message
            return NextResponse.json({
                error: errMsg,
            }, { status: 400})
        }
        return NextResponse.json(
            { error: "Internal server error" }, { status: 500 }
        )
    }
}