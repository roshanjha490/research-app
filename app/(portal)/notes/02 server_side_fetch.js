"use server"
import React from 'react';
import { useSession, signOut } from "next-auth/react"
import { get_visitors_data } from '@/app/actions'
import SignOut from './SignOut';

const Notes = async () => {

  const visitors = await get_visitors_data()

  return (
    <div>
      <SignOut></SignOut>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>IP Address</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{visitor.first_name} {visitor.last_name}</td>
              <td>{visitor.email}</td>
              <td>{visitor.ip_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Notes
