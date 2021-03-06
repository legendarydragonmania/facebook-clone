import React, { useState } from 'react'
import './MessageSender.css'
import Avatar from '@mui/material/Avatar'
import VideocamIcon from '@mui/icons-material/Videocam'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import { useGlobalContext } from './context'
import { db } from './firebase'
import { collection, serverTimestamp, addDoc } from 'firebase/firestore'

const colRef = collection(db, 'posts')

function MessageSender() {
  const [{ user }, dispatch] = useGlobalContext()
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addDoc(colRef, {
      message: input,
      image: imageUrl,
      profileSrc: user.photoURL,
      timestamp: serverTimestamp(),
      username: user.displayName,
    })
    setInput('')
    setImageUrl('')
  }
  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder={`What's on your mind, ${user.displayName}?`}
            className='messageSender__input'
          />
          <input
            type='text'
            placeholder='image URL (Optional)'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button onClick={handleSubmit} type='submit'>
            Hidden Sumit
          </button>
        </form>
      </div>
      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
