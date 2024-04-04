import { comparePassword } from "@/db/helpers/bcrypt"
import { signToken } from "@/db/helpers/jwt"
import Model_User from "@/db/models/users"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { ZodError } from "zod"

export async function POST(request: Request){
    try {
        const body = await request.json()
        const user = await Model_User.findByEmail(body.email)
        if (!user) return NextResponse.json({error: "Wrong email/password"},{status: 401})

        const isValid = comparePassword(body.password, user.password)
        if (!isValid) return NextResponse.json({error: "Wrong email/password"},{status: 401})

        const access_token = signToken({_id: user._id, email: user.email})
        cookies().set("Authorization", `Bearer ${access_token}`)
        return NextResponse.json({
            data: {access_token}
        })
    } catch (error) {
        if (error instanceof ZodError) {
            const errMsg = error.errors[0].path[0] + " " + error.errors[0].message
            return NextResponse.json({
                error: errMsg,
            }, { status: 400})
        } else {
            return NextResponse.json({
                error: "Internal server error"
            }, { status: 500 })
        }
    }
}