import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <div className="navbar fixed bg-gradient-to-r from-[#eb1a24] to-black
      shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]
      ">
        <div className="flex-1">
          <img src="https://seeklogo.com/images/R/richeese-factory-logo-3EA28FB3AA-seeklogo.com.png" alt="logo" className="absolute h-16 rounded-br-3xl ps-4" />
        </div>
        <div className="flex-none pe-4">
          <Link href={"/"}>
            <div role="button" className="w-32 p-2 rounded-lg m-1 text-center text-white hover:bg-red-600 font-bold">Beranda</div>
          </Link>
          <Link href={"/menu"}>
            <div role="button" className="w-32 p-2 rounded-lg m-1 text-center text-white hover:bg-red-600 font-bold">Menu</div>
          </Link>
          <Link href={"/keranjang"}>
            <div role="button" className="w-32 p-2 rounded-lg m-1 text-center text-white hover:bg-red-600 font-bold">Keranjang</div>
          </Link>
          <p className="text-white ms-10 me-4 font-light"><b>ID</b> | <b className="text-slate-400">EN</b></p>
          <Link href={"/login"} className="btn btn-sm">
            Sign in
          </Link>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="carousel w-full h-screen">
        <div className="carousel-item w-full h-full">
          <img src="https://www.richeesefactory.com/sites/default/media/carousel/cr-65f7c61a10cd4.jpg" alt="Burger" className="w-full bg-cover" />
        </div>
        <div className="carousel-item w-full h-full">
          <img src="https://www.richeesefactory.com/sites/default/media/carousel/cr-65f7c2bc95a30.jpg" alt="Burger" className="w-full bg-cover" />
        </div>
        <div className="carousel-item w-full h-full">
          <img src="https://www.richeesefactory.com/sites/default/media/carousel/cr-65f7bf123e11c.jpg" alt="Burger" className="w-full bg-cover" />
        </div>
        <div className="carousel-item w-full h-full">
          <img src="https://www.richeesefactory.com/sites/default/media/carousel/cr-659ce78b4f238.jpg" alt="Burger" className="w-full bg-cover" />
        </div>
      </div>
    </>
  )
}