import Link from "next/link"
export default function Login(){
    return (
        <div id="login">
            <div className="flex h-screen items-center justify-center mx-24 gap-2">
                <div className="flex-1 bg-white h-[70%] rounded-xl bg-opacity-75 p-3 border border-l-slate-400">
                    <div className="flex flex-row h-full">
                        <div className="flex h-full w-[250%]">
                            <img src="https://www.richeesefactory.com/media/library/l/13.jpg" className="rounded-lg me-4"/>
                        </div>
                        <div className="flex flex-col h-full p-3 w-[70%]">
                            <p><b className="text-4xl">Black Lunch</b>, <i className="text-slate-600 text-sm">Pengenalan Menu Baru Serba Hitam Dari Richeese Factory</i></p>
                            <img src="Curly-Arrow-PNG.png" alt="arrow" className="bg-cover my-3 px-4"/>
                            <p className="font-light italic text-sm h-full text-end">Login for more</p>
                        </div>
                    </div>
                </div>
                <div className="flex-2 bg-white h-[70%] min-w-[25%] rounded-xl bg-opacity-15 backdrop-blur-sm border border-l-slate-400">
                    <div className="flex flex-col items-center justify-center h-full px-4">
                        <p className="font-bold text-3xl text-white">Hello!</p>
                        <p className="text-white font-light">Terimakasih telah mengunjungi kami</p>
                        <div className="flex flex-col gap-4 w-80 mt-8">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                            </svg>
                            <input type="password" className="grow" placeholder="password" />
                        </label>
                        <button className="btn btn-primary font-bold">Sign in</button>
                        </div>
                        <p className="text-white font-light mt-8">Belum memiliki akun ? <Link href="#" className="text-blue-600 font-bold hover:text-slate-600">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}