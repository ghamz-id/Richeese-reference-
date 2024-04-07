'use client'
import { btnAddWishlist } from "@/actions/wishlists";
import { Product } from "@/db/models/products"
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";

export default function Card({ item }: { item: Product }) {
    return (
        <>

            <div className="card card-compact w-auto bg-base-100 shadow-xl rounded-none
                    transition ease-in-out duration-300 hover:scale-105
                    hover:cursor-pointer"
            >
                <Link href={`/products/${item.slug}`} >
                    <figure><img src={item.thumbnail} alt="..."
                    /></figure>
                </Link >
                <div className="card-body">
                    <p className="card-title">{item.name}</p>
                </div>
                <button onClick={() => btnAddWishlist(String(item._id))} className="btn btn-outline btn-success btn-sm h-fit absolute left-3 top-3">
                    <div className="flex flex-col py-1 items-center">
                        <BsCart2 className="text-xl" />
                        <p className="text-xs">Wishlist</p>
                    </div>
                </button>
            </div>
        </>
    )
}