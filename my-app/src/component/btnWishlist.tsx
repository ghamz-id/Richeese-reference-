'use client'
import { btnAddWishlist } from "@/actions/wishlists";
import { useRouter } from "next/navigation";
import { BsCart2 } from "react-icons/bs";
import Swal from "sweetalert2";

export default function BtnWishlist({ id }: { id: string }) {
    const router = useRouter()
    return (
        <button onClick={async () => {
            const res = await btnAddWishlist(id);

            if (!res) {
                Swal.fire({
                    title: "Failed",
                    text: "Please login first",
                    icon: "warning"
                })
            } else {
                Swal.fire({
                    title: "Success",
                    text: "Success added to wishlist",
                    icon: "success"
                })
                router.push("/wishlists")
            }

        }} className="btn btn-outline btn-success btn-sm h-fit">
            <div className="flex flex-col py-1 items-center">
                <BsCart2 className="text-xl" />
                <p className="text-xs">Wishlist</p>
            </div>
        </button>
    )
}