import Link from "next/link"

export default function Navbar() {
    return (
        <>
            {/* NAVBAR */}
            <div className="navbar fixed bg-gradient-to-r from-[#eb1a24] to-black z-10
            shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]
            ">
                <div className="flex-1">
                    <img src="https://seeklogo.com/images/R/richeese-factory-logo-3EA28FB3AA-seeklogo.com.png" alt="logo" className="absolute h-16 rounded-br-3xl ps-4" />
                </div>
                <div className="flex-none pe-4">
                    <Link href={"/"}>
                        <div role="button" className="w-32 p-2 rounded-lg m-1 text-center text-white hover:bg-red-600 font-bold">Beranda</div>
                    </Link>
                    <Link href={"/products"}>
                        <div role="button" className="w-32 p-2 rounded-lg m-1 text-center text-white hover:bg-red-600 font-bold">Menu</div>
                    </Link>
                    <Link href={"/wishlist"}>
                        <div role="button" className="w-32 p-2 rounded-lg m-1 text-center text-white hover:bg-red-600 font-bold">Keranjang</div>
                    </Link>
                    <label className="input input-bordered flex items-center gap-2 ms-4 h-10">
                        <input type="text" className="grow text-sm" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <p className="text-white ms-10 me-4 font-light text-sm"><b>ID</b> | <b className="text-slate-400">EN</b></p>
                    <Link href={"/login"} className="btn btn-sm">
                        Sign in
                    </Link>
                </div>
            </div>
        </>
    )
}