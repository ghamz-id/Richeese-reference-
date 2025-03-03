'use client'
import { btnDelWishlist } from "@/actions/wishlists"
import { Wishlist } from "@/db/models/wishlist"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

export default function Menus() {
    const [wishlist, setWishlist] = useState<Wishlist[]>([])
    useEffect(() => {
        const fetchWishlist = async () => {
            const { data } = await (await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlists", { cache: 'no-store' })).json()
            setWishlist(data)
        }
        fetchWishlist()
    }, [wishlist])

    return (
        <div className="container h-screen m-auto">
            <div className="overflow-x-auto pt-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-base">
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlist.map((item, idx) => (
                            <tr key={idx}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-32 h-32">
                                                <img src={item.productDetail[0].thumbnail} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.productDetail[0].name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.productDetail[0].description}
                                    <br />
                                    <span className="badge badge-ghost badge-sm mt-2">{item.productDetail[0].tags.map((el, idx) => (
                                        <p className="px-2 border-l border-r hover:cursor-pointer" key={idx}>#{el}</p>
                                    ))}</span>
                                </td>
                                <td>{new Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                }).format(item.productDetail[0].price)}</td>
                                <th>
                                    <button onClick={() => {
                                        btnDelWishlist(String(item._id))
                                        setTimeout(() => {
                                            Swal.fire({
                                                title: "Success",
                                                text: "Success remove to wishlist",
                                                icon: "success"
                                            })
                                        }, 1000)
                                    }} className="btn btn-error btn-xs text-white">Remove</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}