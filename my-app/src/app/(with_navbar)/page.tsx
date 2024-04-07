'use server'
import AboutUs from "@/component/about";
import Card_Fav_Menus from "@/component/card_fav_menu";
import Carousel from "@/component/carousel";
import { Product } from "@/db/models/products";
import Link from "next/link";

export default async function Home() {
  const data: Product[] = await (await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/products/favorite", { cache: 'no-store' })).json()

  return (
    <>
      <Carousel />
      <div className="flex flex-col items-center justify-center mx-56">
        {/* Layouting - Komponen Featured Product (5-10 product) + “see-all” */}
        <p className="text-5xl pt-10">Menu Paling Laris</p>
        <div className="grid grid-cols-2 gap-8 border-t mt-5 pt-5">
          {data.map((item, i) => (
            <Card_Fav_Menus item={item} key={i} />
          ))}
        </div>
        <Link href={"/products"} className="text-end w-full py-5 btn btn-outline my-10">Menu lainya</Link>

        {/* Layouting - Komponen Detail info Ecommerce (data hardcode) */}
        <AboutUs />
      </div>
    </>
  )
}