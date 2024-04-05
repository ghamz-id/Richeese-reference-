'use client'
import Card from "@/component/card_product";
import { BASE_URL } from "@/db/config/constant";
import { Product } from "@/db/models/products";
import React, { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Menus() {
    const [product, setProduct] = useState<Product[]>([])
    const fetch_product = async () => {
        const { data } = await (await fetch(BASE_URL, { cache: 'no-store' })).json()
        setProduct((prev) => [...prev, ...data.slice(0, 8)])
    }
    useEffect(() => {
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
                <div className="flex">
                    <p className="font-bold py-3 flex-1">Other Menus</p>
                    <label className="input input-bordered flex items-center gap-2 ms-4 h-10">
                        <input type="text" className="grow text-sm" placeholder="Search" name="q" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                <InfiniteScroll
                    dataLength={product.length} //This is important field to render the next data
                    next={fetch_product}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    } >
                    <div className="grid grid-cols-4 gap-6">
                        {product.map((item, i) => (
                            <Card item={item} key={i} />
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    )
}