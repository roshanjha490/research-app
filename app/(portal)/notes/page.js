"use client"
import React from 'react'
import { useSession, signOut } from "next-auth/react"

const page = () => {

  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}

export default page