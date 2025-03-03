import { submitLogin } from "@/actions/users"
import Link from "next/link"

export default function Login() {
    return (
        <div id="login">
            <div className="flex h-screen items-center justify-center mx-24 gap-2">
                <div className="flex-1 bg-white h-[70%] rounded-xl bg-opacity-75 p-3 border border-l-slate-400">
                    <div className="flex flex-row h-full">
                        <div className="flex h-full w-[250%]">
                            <img src="https://richeesefactory.com/media/thumb/banner/2024/4/4/4n9cebd9wz6s26qphsfbsw_size_1700x850_webp.webp" className="rounded-lg me-4" />
                        </div>
                        <div className="flex flex-col h-full p-3 w-[70%]">
                            <p><b className="text-4xl">Burger deals</b>, <i className="text-slate-600 text-sm">Nikmati berbagai macam menu burger Dari Richeese Factory</i></p>
                            <img src="Curly-Arrow-PNG.png" alt="arrow" className="bg-cover my-3 px-4" />
                            <p className="font-light italic text-sm h-full text-end">Login for more</p>
                        </div>
                    </div>
                </div>
                <div className="flex-2 bg-white h-[70%] min-w-[25%] rounded-xl bg-opacity-15 backdrop-blur-sm border border-l-slate-400">
                    <Link href={"/"}>
                        <button className="text-white italic absolute right-0 -top-10 bg-black border border-white px-2">Back to home</button>
                    </Link>
                    <div className="flex flex-col items-center justify-center h-full px-4">
                        <p className="font-bold text-3xl text-white">Hello!</p>
                        <p className="text-white font-light">Terimakasih telah mengunjungi kami</p>
                        <form className="flex flex-col gap-3 w-80 mt-8" action={submitLogin}>
                            <label className="input input-bordered flex items-center gap-2 h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" name="email" className="grow" placeholder="Email" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                    <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                                </svg>
                                <input type="password" name="password" className="grow" placeholder="password" />
                            </label>
                            <button type="submit" className="btn btn-primary btn-sm font-bold mt-4">Sign In</button>
                        </form>
                        <p className="text-white font-light mt-6">Belum memiliki akun ? {" "}
                            <Link href="/register" className="text-blue-600 font-bold hover:text-slate-600">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}