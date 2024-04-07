import Model_Wishlist from "@/db/models/wishlist";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const res = await Model_Wishlist.deleteWishlist(params.id)
        if (res.ok) {
            return NextResponse.json("Success delete wishlist")
        }
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }

}