"use client"
import React, { useState, useEffect } from 'react';
import { useSession, signOut } from "next-auth/react"
import { get_visitors_data } from '@/app/actions'

const Notes = () => {

  //  Below is the example
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {

    const fetchVisitors = async () => {
      try {
        const response = await get_visitors_data();
        console.log(response);
        setVisitors(response);
      } catch (error) {
        console.error('Error fetching visitors:', error);
      }
    };

    fetchVisitors();

  }, []);


  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
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
