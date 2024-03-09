"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"


const AuthProviders = () => {
    return (
        <div className="btn-wrapper text-center">
            <button onClick={() => signIn("github")} className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button">
                <img alt="..." className="w-5 mr-1" src="/img/github.svg" />
                Github
            </button>
            <button className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button">
                <img alt="..." className="w-5 mr-1" src="/img/google.svg" />
                Google
            </button>
        </div>
    )
}

export default AuthProviders