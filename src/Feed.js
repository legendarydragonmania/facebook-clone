import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post
        image='https://www.perma-horti.com/wp-content/uploads/2019/02/image-2.jpg'
        profileSrc='https://avatars.githubusercontent.com/u/6920421?'
        username='Sven Hotta'
        timestamp='this is a timestamp'
        message='Okay this is seemlessly working. Boom!!!'
      />
    </div>
  )
}

export default Feed
