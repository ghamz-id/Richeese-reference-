import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { joseReadPayload } from "./db/helpers/jwt";

export async function middleware(request: NextRequest){
    if (request.nextUrl.pathname.startsWith("/api/wishlists")) {
        const auth = cookies().get("Authorization")?.value
        
        if (!auth) return NextResponse.json({error: "Invalid token"}, {status: 401})

        const [type, token] = auth?.split(" ")
        if (type !== 'Bearer') return NextResponse.json({error: "Invalid token"}, {status: 401})

        const decoded = await joseReadPayload<{_id: string, email: string}>(token)

        const reqHeaders = new Headers(request.headers)
        reqHeaders.set("x-user-id", decoded._id)
        reqHeaders.set("x-user-email", decoded.email)

        return NextResponse.next({
            request: { headers: reqHeaders }
        })
    }

    if (request.nextUrl.pathname.startsWith("/wishlist")) {
        const auth = cookies().get("Authorization")?.value
        if (!auth) {
            request.nextUrl.pathname = "/login"
            return NextResponse.redirect(request.nextUrl)
        }
    }
}

export const config = {
    matcher : ["/api/wishlists/:path*", "/wishlists"]
}