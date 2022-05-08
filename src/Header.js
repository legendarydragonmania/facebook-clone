import React from 'react'
import './Header.css'
import HomeIcon from '@mui/icons-material/Home'
import FlagIcon from '@mui/icons-material/Flag'
import SearchIcon from '@mui/icons-material/Search'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import Avatar from '@mui/material/Avatar'
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import AddIcon from '@mui/icons-material/Add'
import ForumIcon from '@mui/icons-material/Forum'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://www.facebook.com/images/fb_icon_325x325.png'
          alt='facebook logo'
        />
        <div className='header__input'>
          <SearchIcon />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>
      <div className='header__center'>
        <div className='header__option header__option--active'>
          <HomeIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <FlagIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SubscriptionsOutlinedIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <StorefrontOutlinedIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SupervisedUserCircleOutlinedIcon fontSize='large' />
        </div>
      </div>
      <div className='header__right'>
        <div className='header__info'>
          <Avatar />
          <h4>Somebody Else</h4>
        </div>
        <Stack direction='row' spacing={2}>
          <IconButton aria-label='delete'>
            <AddIcon />
          </IconButton>
          <IconButton aria-label='delete'>
            <ForumIcon />
          </IconButton>
          <IconButton aria-label='delete'>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton aria-label='delete'>
            <ExpandMoreIcon />
          </IconButton>
        </Stack>
      </div>
    </div>
  )
}

export default Header
