export default function Card_Fav_Menus() {
    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-box hover:cursor-pointer
                transition ease-in-out duration-300 hover:scale-105
            ">
                <figure className="flex-1"><img src="https://www.richeesefactory.com/sites/default/media/library/drum-stick-flying-chicken-2pcs.jpg" alt="Album" className="bg-cover" /></figure>
                <div className="flex-1 card-body bg-yellow-50 rounded-tr-xl rounded-br-xl">
                    <h2 className="card-title">DS Flying Chicken 2 Pcs</h2>
                    <p>2 potong ayam drum stick disajikan dengan taburan bubuk volcano dan saus keju yang lezat</p>
                    <h2 className="card-title">{new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                    }).format(56_000)}</h2>
                </div>
            </div>
        </>
    )
}