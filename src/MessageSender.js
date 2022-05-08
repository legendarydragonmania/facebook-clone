import React from 'react'
import './MessageSender.css'
import Avatar from '@mui/material/Avatar'

function MessageSender() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar />
        <form>
          <input
            type='text'
            placeholder="What's on your mind?"
            className='messageSender__input'
          />
          <input type='text' placeholder='image URL (Optional)' />
          <button onClick={handleSubmit} type='submit'>
            Hidden Sumit
          </button>
        </form>
      </div>
      <div className='messageSender__bottom'></div>
    </div>
  )
}

export default MessageSender
