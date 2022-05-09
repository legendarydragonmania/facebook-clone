import React, { useState, useEffect } from 'react'
import './Login.css'
import Button from '@mui/material/Button'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './firebase'
import { useGlobalContext } from './context'
import { actionTypes } from './reducer'
import logo from './logo.png'

function Login() {
  const [state, dispatch] = useGlobalContext()
  const handleLogin = async () => {
    try {
      provider.addScope('profile')
      provider.addScope('email')
      const result = await signInWithPopup(auth, provider).catch((error) => {
        console.log(error.message)
      })
      await dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://www.facebook.com/images/fb_icon_325x325.png'
          alt='facebook logo'
        />
        <img src={logo} alt='facebook logo' />
        <Button type='submit' variant='contained' onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  )
}

export default Login
