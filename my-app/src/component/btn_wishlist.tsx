import { btnAddWishlist } from "@/actions/wishlists";
import { BsCart2 } from "react-icons/bs";

export default function addWishlist() {
    return (
        <>
            <button className="btn btn-outline btn-success btn-sm h-fit absolute left-3 top-3">
                <div className="flex flex-col py-1 items-center">
                    <BsCart2 className="text-xl" />
                    <p className="text-xs">Wishlist</p>
                </div>
            </button>
        </>
    )
}