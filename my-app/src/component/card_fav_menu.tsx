import { Product } from "@/db/models/products";

export default function Card_Fav_Menus({ item }: { item: Product }) {
    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-box hover:cursor-pointer
                transition ease-in-out duration-300 hover:scale-105
            ">
                <figure className="flex-1"><img src={item.thumbnail} alt="Album" className="bg-cover" /></figure>
                <div className="flex-1 card-body bg-yellow-50 rounded-tr-xl rounded-br-xl">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.description}</p>
                    <h2 className="card-title">{new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                    }).format(item.price)}</h2>
                </div>
            </div>
        </>
    )
}