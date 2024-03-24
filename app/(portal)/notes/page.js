"use client"
import React from 'react'
import { useSession, signOut } from "next-auth/react"

const Notes = () => {

  console.log(useSession());

  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}

export default Notes