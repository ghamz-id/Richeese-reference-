'use client'

import { logout } from "@/actions/users"

export default function Logout() {
    return (
        <button onClick={() => logout()} className="btn btn-sm">
            Logout
        </button>
    )
}