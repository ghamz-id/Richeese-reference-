import Model_Products from "@/db/models/products"
import Model_Wishlist, { Wishlist } from "@/db/models/wishlist"
import { NextResponse } from "next/server"

export async function POST(request: Request){
    try {
        const userId = request.headers.get("x-user-id")
        
        if (!userId) return NextResponse.json({error: "Please login first"})
            
        const { productId } : { productId : string } = await request.json()
        const product = await Model_Products.findById(productId)
        
        if (!product) return NextResponse.json({error: "Data not found"})

        const wishlist = await Model_Wishlist.findListByid(productId)
        if (wishlist) return NextResponse.json({error: "This product has ready"})

        const body = {
            userId: userId,
            productId : productId
        } as Wishlist

        await Model_Wishlist.addWishlist(body)
        return NextResponse.json({ data: body })
        
    } catch (error) {
        console.log(error)
    }
}