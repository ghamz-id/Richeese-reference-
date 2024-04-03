import AboutUs from "@/component/about";
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
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-box hover:cursor-pointer">
              <figure className="flex-1"><img src="https://www.richeesefactory.com/sites/default/media/library/drum-stick-flying-chicken-2pcs.jpg" alt="Album" className="bg-cover" /></figure>
              <div className="flex-1 card-body bg-slate-50 rounded-tr-xl rounded-br-xl">
                <h2 className="card-title">DS Flying Chicken 2 Pcs</h2>
                <p>2 potong ayam drum stick disajikan dengan taburan bubuk volcano dan saus keju yang lezat</p>
                <h2 className="card-title">{new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(56_000)}</h2>
              </div>
            </div>
          ))}
        </div>
        <p className="text-end w-full py-5 btn my-10">Menu lainya</p>

        {/* Layouting - Komponen Detail info Ecommerce (data hardcode) */}
        <AboutUs />
      </div>
    </>
  )
}