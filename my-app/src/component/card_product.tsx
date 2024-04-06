'use client'
import { Product } from "@/db/models/products"
import Link from "next/link"
import { BsCart2 } from "react-icons/bs";

export default function Card({ item }: { item: Product }) {
    return (
        <>
            <Link href={"http://localhost:3000/products/" + item.slug} >
                <div className="card card-compact w-auto bg-base-100 shadow-xl rounded-none
                    transition ease-in-out duration-300 hover:scale-105
                    hover:cursor-pointer"
                >
                    <figure><img src={item.thumbnail} alt="..."
                    /></figure>
                    <div className="card-body">
                        <p className="card-title">{item.name}</p>
                    </div>
                    <button onClick={() => alert("MASUK WISHLIST")} className="btn btn-outline btn-success btn-sm h-fit absolute left-3 top-3">
                        <div className="flex flex-col py-1 items-center">
                            <BsCart2 className="text-xl" />
                            <p className="text-xs">Wishlist</p>
                        </div>
                    </button>
                </div>
            </Link>
        </>
    )
}