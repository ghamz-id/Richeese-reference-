import Model_Products from "@/db/models/products"
import Model_Wishlist, { Wishlist } from "@/db/models/wishlist"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const userId = request.headers.get("x-user-id") as string
        if (!userId) return NextResponse.json({ error: "Please login first" })

        const { productId }: { productId: string } = await request.json()
        const product = await Model_Products.findById(productId)
        if (!product) throw NextResponse.json({ error: "Data not found" }, { status: 404 })

        const wishlist = await Model_Wishlist.findListByid(productId)
        if (wishlist) throw NextResponse.json({ error: "This product has ready" }, { status: 400 })

        const body = {
            userId: userId,
            productId: productId,
            createdAt: new Date(),
            updatedAt: new Date()
        } as unknown as Wishlist

        await Model_Wishlist.addWishlist(body)
        return NextResponse.json({ data: body })

    } catch (error: any) {
        if (error.status === 400) {
            return NextResponse.json({ error: "This product has ready" })
        }
        if (error.status === 404) {
            return NextResponse.json({ error: "Data not found" })
        }

        return NextResponse.json({ error: "Data not found" }, { status: 500 })
    }
}

export async function GET(request: Request) {
    try {
        const userId = request.headers.get("x-user-id") as string
        const wishlists = await Model_Wishlist.userWishlist(userId)
        return NextResponse.json({ data: wishlists })
    } catch (error) {
        return NextResponse.json({ error: "Data not found" }, { status: 500 })
    }
}