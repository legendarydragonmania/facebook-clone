import React, { useEffect, useState } from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
// import { useGlobalContext } from './context'
import { db } from './firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

const collectionReference = collection(db, 'posts')

function Feed() {
  const [posts, setPosts] = useState([])

  const q = query(collectionReference, orderBy('timestamp', 'desc'))

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    })
  }, [])

  console.log(posts)
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      {posts.map((post) => {
        const {
          id,
          data: { username, message, profileSrc, image, timestamp },
        } = post
        return (
          <Post
            key={id}
            username={username}
            message={message}
            profilePic={profileSrc}
            image={image}
            timestamp={timestamp}
          />
        )
      })}
    </div>
  )
}

export default Feed
