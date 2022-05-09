import React from 'react'
import './Login.css'
import Button from '@mui/material/Button'

function Login() {
  const handleLogin = () => {
    // do some stuff here
  }
  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://www.facebook.com/images/fb_icon_325x325.png'
          alt='facebook logo'
        />
        <img
          src='https://o.remove.bg/downloads/cde5cbc2-f2f6-4981-81c1-06b0468cf75a/Facebook-2019-removebg-preview.png'
          alt='facebook logo'
        />
        <Button type='submit' variant='contained' onclick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  )
}

export default Login
