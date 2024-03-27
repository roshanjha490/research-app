"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

const SignOut = () => {
    return (
        <div className='p-[10px]'>
            <button onClick={() => signOut()} type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Sign out
            </button>
        </div>
    )
}

export default SignOut