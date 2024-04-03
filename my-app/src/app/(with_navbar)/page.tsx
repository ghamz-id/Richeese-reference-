import AboutUs from "@/component/about";
import Card_Fav_Menus from "@/component/card_fav_menu";
import Carousel from "@/component/carousel";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="flex flex-col items-center justify-center mx-56">
        {/* Layouting - Komponen Featured Product (5-10 product) + “see-all” */}
        <p className="text-5xl pt-10">Menu Paling Laris</p>
        <div className="grid grid-cols-2 gap-6 border-t mt-5 pt-5">
          {[1, 2, 3, 4].map(item => (
            <Card_Fav_Menus />
          ))}
        </div>
        <p className="text-end w-full py-5 btn my-10">Menu lainya</p>

        {/* Layouting - Komponen Detail info Ecommerce (data hardcode) */}
        <AboutUs />
      </div>
    </>
  )
}