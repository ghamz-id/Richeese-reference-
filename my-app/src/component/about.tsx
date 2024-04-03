export default function AboutUs() {
    return (
        <>
            {/* Layouting - Komponen Detail info Ecommerce (data hardcode) */}
            <p className="text-5xl pt-10">About us</p>
            <div className="border-t mt-5 pt-5 w-full">
                <div className="flex">
                    <div className="flex-1 bg-blue-300">
                        <p className="tracking-wide">Hai, Cheesemate! <br />
                            Selamat Datang di Richesee Factory <br />
                            Richeese Factory merupakan QSR (Quick Service Restaurant) atau restoran cepat saji, di mana hampir semua menu kami disajikan dengan saus keju yang lezat (cheese sauce).
                            <br /><br />
                            Restoran kami didesain unik agar menjadi tempat santai yang nyaman untuk semua usia dan kalangan. Anda dapat merayakan kebersamaan dan keceriaan bersama sambil menikmati berbagai menu yang disajikan lengkap oleh kami.
                        </p>
                    </div>
                    <div className="flex-1 bg-red-300">
                        <p>
                            Richeese Factory hadir pertama kali di Indonesia pada tanggal tanggal 8 Februari 2011, bertempat di Paris Van Java Mal, Kota Bandung, Jawa Barat. Seiring dengan makin berkembangnya outlet kami, kini Richeese Factory telah hadir di kota – kota besar di Indonesia dan akan bertambah terus di tahun mendatang.
                            <br /> <br />
                            Merupakan komitmen kami untuk terus dapat berinovasi dalam memberikan pelayanan dan pengalaman yang memuaskan bagi pelanggan. Kinerja kami kemudian mendapatkan penghargaan.
                        </p>
                    </div>
                </div>
                <div className="bg-yellow-300">
                    <p className="grid justify-center">Berikut beberapa penghargaan yang sudah kami raih:</p>
                    <div className="flex gap-2 justify-around p-3 items-center">
                        <div className="w-32">
                            <img src="https://www.richeesefactory.com/media/library/l/wow-2018-frame-26572c76106160.png" alt="" />
                        </div>
                        <div className="w-32">
                            <img src="https://www.richeesefactory.com/media/library/l/marketing-award-26572c792888f1.png" alt="" />
                        </div>
                        <div className="w-32">
                            <img src="https://www.richeesefactory.com/media/library/l/wow-brand-2021-96572c7ddb23ef.png" alt="" />
                        </div>
                        <div className="w-32">
                            <img src="https://www.richeesefactory.com/media/library/l/shopee.png" alt="" />
                        </div>
                        <div className="w-32">
                            <img src="https://www.richeesefactory.com/media/library/l/myca-certificate-2023-richeese-factory-page-0001.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}