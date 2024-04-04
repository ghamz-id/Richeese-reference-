'use server'
import { hashPassword } from "@/db/helpers/bcrypt";
import Model_User, { User } from "@/db/models/users";
import { NextResponse } from "next/server";

export async function POST(request : Request){
    try {
        const body: User = await request.json()
        const registerInput = {
            name: body.name,
            username: body.username,
            email: body.email,
            password: hashPassword(body.password)
        } as User
        
        await Model_User.Register(registerInput)
        NextResponse.json(registerInput)
    } catch (error) {
        return NextResponse.json(
            {error: "Internal server error"},
            {status: 500}
        )
    }
}