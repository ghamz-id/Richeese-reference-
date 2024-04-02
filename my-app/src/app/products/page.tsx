export default function Menus() {
    return (
        <div className="h-screen flex flex-col items-center">
            {/* HEADERS MENU */}
            <div className="flex items-center justify-center h-[50%] w-full mt-16 bg-[url('https://www.richeesefactory.com/sites/default/template/default/img/header-bg-menu.png')]">
                <div className="h-full">
                    <img src="https://www.richeesefactory.com/sites/default/media/library/flying-chicken-14.png" alt="..."
                        className="h-[32rem] bg-cover"
                    />
                </div>
                <div className="ms-4">
                    <p className="text-white text-4xl">
                        DS Flying Chicken 2 Pcs
                    </p>
                    <p className="text-white font-light">
                        2 potong ayam drum stick disajikan dengan taburan bubuk volcano dan saus keju yang lezat
                    </p>
                </div>
            </div>
            <div className="w-[65%] mt-16">
                <div>
                    <p className="font-bold">Other Menu</p>
                </div>
                <div className="border grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                        <div className="card card-compact w-auto bg-base-100 shadow-xl rounded-none">
                            <figure><img src="https://www.richeesefactory.com/sites/default/media/library/ds-richicken.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <p className="card-title">DS Richicken 2 Pcs</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}