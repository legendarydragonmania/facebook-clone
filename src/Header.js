import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://www.facebook.com/images/fb_icon_325x325.png'
          alt='facebook logo'
        />
      </div>
      <div className='header__center'></div>
      <div className='header__right'></div>
    </div>
  )
}

export default Header
