"use server"

import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { BASE_URL } from "@/db/config/constant"

// LOGOUT
export async function logout() {
    cookies().delete("Authorization")
    return redirect("/")
}

// LOGIN
export async function submitLogin(formData: FormData) {
    const loginInput = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    try {
        const res = await fetch(BASE_URL + "users/login", {
            cache: 'no-store',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginInput)
        })

        const result = await res.json()
        if (!res.ok) throw result.error

        cookies().set("Authorization", `Bearer ${result.data.access_token}`)
    } catch (error) {
        return redirect("/login?error=" + error)
    }

    return redirect("/products")
}