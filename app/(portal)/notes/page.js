"use client"
import React from 'react';
import SignOut from './SignOut';
import { useEffect } from 'react';
import useWebSocket from './websocket';
const Notes = () => {

  const messages = useWebSocket('https://symphony.acagarwal.com:3000/apimarketdata')

  return (
    <div className='w-full h-auto min-h-screen'>
      <div className="w-100 h-[80px] flex justify-end items-center bg-slate-900">
        <SignOut></SignOut>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Notes
