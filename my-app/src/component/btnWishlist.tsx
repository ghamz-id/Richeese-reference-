'use client'
import { btnAddWishlist } from "@/actions/wishlists";
import { BsCart2 } from "react-icons/bs";

export default function BtnWishlist({ id }: { id: string }) {
    return (
        <button onClick={() => btnAddWishlist(id)} className="btn btn-outline btn-success btn-sm h-fit">
            <div className="flex flex-col py-1 items-center">
                <BsCart2 className="text-xl" />
                <p className="text-xs">Wishlist</p>
            </div>
        </button>
    )
}