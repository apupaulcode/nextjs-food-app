import React, { useState } from 'react'

const ResturantSignUp = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [Cpassword,setCpassword]=useState('')
    const [name,setName]=useState('')
    const [city,setCity]=useState('')
    const [address,setAddress]=useState('')
    const [contacts,setContacts]=useState('')
    const handleSignUp= async()=>{
        let response = await fetch("http://localhost:3000/api/restaurant",{
            method:"POST",
            body:JSON.stringify({email,password,name,city,address,contacts})
        })
        response = await response.json();
        console.log(response);
    }
  return (
    <>
     <h3>Sign Up</h3>
     <div>
        <div className='input-wrapper'>
            <input type="text" placeholder='Enter Email' className='input-field' value={email} onChange={(event)=>setEmail(event.target.value)} />
        </div>
        <div>
            <input type="password" placeholder='Enter Password' className='input-field' value={password} onChange={(event)=>setPassword(event.target.value)} />
        </div>
        <div>
            <input type="password" placeholder='Confirm Password' className='input-field' value={Cpassword} onChange={(event)=>setCpassword(event.target.value)} />
        </div>
        <div>
            <input type="text" placeholder='Resturant Name' className='input-field' value={name} onChange={(event)=>setName(event.target.value)} />
        </div>
        <div>
            <input type="text" placeholder='Enter City' className='input-field' value={city} onChange={(event)=>setCity(event.target.value)} />
        </div>
        <div>
            <input type="text" placeholder='Enter Address' className='input-field' value={address} onChange={(event)=>setAddress(event.target.value)}/>
        </div>
        <div>
            <input type="text" placeholder='Enter Contacts' className='input-field' value={contacts} onChange={(event)=>setContacts(event.target.value)}/>
        </div>
        <button className='button' onClick={handleSignUp}>Login</button>
     </div>
    </>
  )
}

export default ResturantSignUp
