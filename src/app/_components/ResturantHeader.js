import React from 'react'
import Link from 'next/link'
const ResturantHeader = () => {
  return (
    <div className='header-wrapper'>
      <div className="logo">
        <img style={{width:100}} src="https://cdn1.vectorstock.com/i/1000x1000/82/75/restaurant-icon-dinner-vector-39668275.jpg" alt="" />
      </div>
      <ul>
        <li>
            <Link href='/'>Home</Link>
        </li>
        <li>
            <Link href='/'>Login or SignUp</Link>
        </li>
        <li>
            <Link href='/'>Profile</Link>
        </li>
      </ul>
    </div>
  )
}

export default ResturantHeader
