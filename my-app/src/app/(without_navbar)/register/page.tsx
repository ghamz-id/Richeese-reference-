import Link from "next/link"
import { redirect } from "next/navigation"

export default function Login() {
    async function createRegister(formData: FormData): Promise<void> {
        'use server'
        const registerInput = {
            name: formData.get('name'),
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
        }
        try {
            let res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/users/register", {
                cache: 'no-store',
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registerInput)

            })

            if (!res.ok) throw res

        } catch (error) {
        }

        return redirect("/login")
    }

    return (
        <div id="login">
            <div className="flex h-screen items-center justify-center mx-24 gap-2">
                <div className="flex-1 bg-white h-[70%] rounded-xl bg-opacity-75 p-3 border border-l-slate-400">
                    <div className="flex items-center justify-center h-full">
                        <div>
                            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRQAQdrkfOw7XMBdfS7CqCN0rSnJ8jGJbI2v9fegTOaZF_edlzyEZLFH8uVJPeVXIt_MW1xA4VTV5UinbYuXVBU833a1zo8BLJOS4mklNr7EKektKtVIXFQ7rAfsxxzXUv6MVknf_M95dm/s1600-rw/richeese+factory.png" alt="..."
                                className="rounded-box mb-4 h-80"
                            />
                            <div className="border-b border-red-500 border-s-8">
                                <p className="bg-black text-xl text-white py-2 px-5 w-fit rounded-tr-xl">Pastikan !</p>
                                <p className="bg-red-600 text-white p-1 px-5 ms-10 w-fit rounded-tr-xl mt-1">Anda sudah terdaftar pada aplikasi kami...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-2 bg-white h-[70%] min-w-[25%] rounded-xl bg-opacity-15 backdrop-blur-sm border border-l-slate-400">
                    <div className="flex flex-col items-center justify-center h-full px-4">
                        <p className="font-bold text-3xl text-white">Register</p>
                        <form className="flex flex-col gap-3 w-80 mt-6" action={createRegister}>
                            <label className="input input-bordered flex items-center gap-2 h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow" placeholder="Name" name="name" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow" placeholder="Username" name="username" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Email" name="email" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                    <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                                </svg>
                                <input type="password" className="grow" placeholder="password" name="password" />
                            </label>
                            <button type="submit" className="btn btn-primary btn-sm font-bold mt-4">Sign Up</button>
                        </form>
                        <p className="text-white font-light mt-6">Kembali ke halaman {" "}
                            <Link href="/login" className="text-blue-600 font-bold hover:text-slate-600">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}