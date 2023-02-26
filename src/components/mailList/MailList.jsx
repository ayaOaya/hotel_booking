import React from 'react'
import "./mailList.css"

export default function MailList() {
  return (
    <div className='mail'>
        <h1 className='mailTitle'>Save Time, save Money</h1>
        <span className='mailDesc'>Sign up and we ll send the beast deals to you</span>
        <div className='mailInputContainer'>
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
