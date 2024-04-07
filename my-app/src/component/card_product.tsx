'use client'
import { btnAddWishlist } from "@/actions/wishlists";
import { Product } from "@/db/models/products"
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import BtnWishlist from "./btnWishlist";

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
                <div className="absolute left-3 top-3">
                    <BtnWishlist id={String(item._id)} />
                </div>
            </div>
        </>
    )
}