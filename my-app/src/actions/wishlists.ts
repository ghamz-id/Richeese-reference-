'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// FITUR ADD WISHLIST
async function btnAddWishlist(productId: string | undefined) {
    const res = await fetch(process.env.BASE_URL + "wishlists", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Cookie: cookies().toString()
        },
        cache: 'no-store',
        body: JSON.stringify({ productId: productId })
    })

    if (res.ok) {
        return res.statusText
    }
}

// FITUR DELETE WISHLIST
async function btnDelWishlist(id: string | undefined) {
    const res = await fetch(process.env.BASE_URL + `wishlists/${id}`, {
        method: "DELETE",
        headers: {
            Cookie: cookies().toString()
        },
        cache: 'no-store',
    })

    if (res.ok) {
        redirect("/wishlists")
    }
}

export { btnAddWishlist, btnDelWishlist }