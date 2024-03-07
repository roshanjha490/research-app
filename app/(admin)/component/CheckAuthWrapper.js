"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

function CheckAuthWrapper({ children }) {

    const { data: session } = useSession()

    if (session) {
        return <>{children}</>;
    } else {
        return <p>Not Logged In</p>;
    }
}

export default CheckAuthWrapper