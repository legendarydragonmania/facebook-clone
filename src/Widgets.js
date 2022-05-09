import React from 'react'
import './Widgets.css'

function Widgets() {
  return (
    <div className='widgets'>
      <iframe
        src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&width=500&show_text=true&height=274&appId'
        width='100%'
        height='100%'
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling='no'
        frameBorder='no'
        // allowTransparency='true'
        allow='encrypted-media'
      ></iframe>
    </div>
  )
}

export default Widgets
