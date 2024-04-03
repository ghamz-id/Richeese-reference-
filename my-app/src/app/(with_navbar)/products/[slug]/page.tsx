export default function CardDetail() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://www.richeesefactory.com/sites/default/media/library/ds-richicken.jpg"
                    className="max-w-sm rounded-lg shadow-2xl transition ease-in-out duration-300 hover:scale-110 hover:cursor-pointer"
                />
                <div className="ms-8">
                    <h1 className="text-5xl font-bold">DS Richicken 2 Pcs</h1>
                    <p className="py-4">2 potong ayam goreng drum stick yang gurih, disajikan dengan saus keju lezat</p>
                    <h2 className="card-title pb-14">{new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                    }).format(56_000)}</h2>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}