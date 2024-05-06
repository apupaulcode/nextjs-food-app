import React from 'react'

const ResturantLogin = () => {
  return (
    <>
     <h3>Login</h3>
     <div>
        <div className='input-wrapper'>
            <input type="text" placeholder='Enter Email' className='input-field' />
        </div>
        <div>
            <input type="password" placeholder='Enter Password' className='input-field' />
        </div>
        <button className='button'>Login</button>
     </div>
    </>
  )
}

export default ResturantLogin
