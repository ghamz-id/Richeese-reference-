export default function AboutUs() {
    return (
        <>
            {/* Layouting - Komponen Detail info Ecommerce (data hardcode) */}
            <p className="text-5xl pt-10">About us</p>
            <div className="border-t mt-5 pt-5 w-full mb-16">
                <p className="font-bold ms-3 text-center mb-4">Hai, Cheesemate! <br />
                    Selamat Datang di Richesee Factory</p>
                <div className="flex gap-1">
                    <div className="flex-1 bg-blue-50 p-3 rounded-l-xl">
                        <p className="tracking-wide">
                            <b>Richeese Factory</b> merupakan QSR (Quick Service Restaurant) atau restoran cepat saji, di mana hampir semua menu kami disajikan dengan saus keju yang lezat (cheese sauce).
                            <br /><br />
                            Restoran kami didesain unik agar menjadi tempat santai yang nyaman untuk semua usia dan kalangan. Anda dapat merayakan kebersamaan dan keceriaan bersama sambil menikmati berbagai menu yang disajikan lengkap oleh kami.
                        </p>
                    </div>
                    <div className="flex-1 bg-red-50 p-3 rounded-r-xl">
                        <p className="tracking-wide">
                            <b>Richeese Factory</b> hadir pertama kali di Indonesia pada tanggal tanggal 8 Februari 2011, bertempat di Paris Van Java Mal, Kota Bandung, Jawa Barat. Seiring dengan makin berkembangnya outlet kami, kini Richeese Factory telah hadir di kota – kota besar di Indonesia dan akan bertambah terus di tahun mendatang.
                            <br /> <br />
                            Merupakan komitmen kami untuk terus dapat berinovasi dalam memberikan pelayanan dan pengalaman yang memuaskan bagi pelanggan. Kinerja kami kemudian mendapatkan penghargaan.
                        </p>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-xl mt-1">
                    <p className="grid justify-center font-bold py-3 border-b border-white">Berikut beberapa penghargaan yang sudah kami raih</p>
                    <div className="flex gap-2 justify-around p-3 items-center">
                        <div className="w-32 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition ease-in-out duration-300 hover:scale-110">
                            <img src="/medali-1.jpg" alt="" />
                        </div>
                        <div className="w-32 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition ease-in-out duration-300 hover:scale-110">
                            <img src="/medali-2.jpg" alt="" />
                        </div>
                        <div className="w-32 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition ease-in-out duration-300 hover:scale-110">
                            <img src="/medali-3.jpg" alt="" />
                        </div>
                        <div className="w-32 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition ease-in-out duration-300 hover:scale-110">
                            <img src="/medali-4.jpg" alt="" />
                        </div>
                        <div className="w-32 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition ease-in-out duration-300 hover:scale-110">
                            <img src="/medali-5.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}