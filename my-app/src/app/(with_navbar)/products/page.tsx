'use client'
import Card from "@/component/card_product";
import { Product } from "@/db/models/products";
import { useEffect, useState } from "react";

export default function Menus() {
    const [data, setData] = useState<Product[]>([])
    useEffect(() => {
        const fetch_product = async () => {
            const { data } = await (await fetch("http://localhost:3000/api/products")).json()
            setData(data)
        }
        fetch_product()
    }, [])

    return (
        <div className="flex flex-col items-center">
            {/* HEADERS MENU */}
            <div className="flex items-center justify-center h-[50%] w-full mt-16 border-b border-red-400 bg-[url('https://www.richeesefactory.com/sites/default/template/default/img/header-bg-menu.png')]">
                <div className="h-full">
                    <img src="https://www.richeesefactory.com/sites/default/media/category/ala-carte-6302edf7bca33.png" alt="..."
                        className="h-[24rem] bg-cover"
                    />
                </div>
                <div className="ms-4">
                    <p className="text-white text-4xl tracking-wide font-medium">
                        Ala Carte
                    </p>
                    <p className="text-white font-light">
                        Ala Carte - Ayam Goreng Keju adalah Menu andalan Richeese Factory yang disajikan satuan
                    </p>
                </div>
            </div>
            <div className="w-[65%] py-16">
                <p className="font-bold py-3">Other Menus</p>
                <div className="grid grid-cols-4 gap-6">
                    {data.map((item) => (
                        <Card item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}