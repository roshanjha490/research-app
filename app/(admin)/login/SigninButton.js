"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'


async function getTickets(){
    await new Promise(resolve => setTimeout(resolve, 200))

    console.log('Promise Resolved')
}

const SigninButton = async () => {

    await getTickets() 

    return (
        <>
            <button className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="submit">
                Sign In
            </button>
        </>
    )
}

export default SigninButton