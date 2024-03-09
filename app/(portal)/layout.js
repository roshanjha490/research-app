import { Inter } from "next/font/google";
import React from 'react'
import SessionWrapper from "../component/SessionWrapper";
import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Notes | Research App",
    description: "",
};

const NotesLayout = async ({ children }) => {

    const session = await getServerSession()

    if (session && session.user) {
        return (
            <SessionWrapper>
                {children}
            </SessionWrapper>
        )
    } else {
        redirect("/login")
    }
}

export default NotesLayout