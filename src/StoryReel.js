import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
        image='https://www.perma-horti.com/wp-content/uploads/2019/02/image-2.jpg'
        profileSrc='https://avatars.githubusercontent.com/u/6920421?'
        title='Sven Hotta'
      />
      <Story
        image='https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg'
        profileSrc='https://avatars.githubusercontent.com/u/865977?'
        title='Simmon Rasmussen'
      />
      <Story
        image='https://png.pngtree.com/illustrations/20190327/ourmid/pngtree-cure-starry-sky-night-sky-star-png-image_38228.jpg'
        profileSrc='https://avatars.githubusercontent.com/u/1529210?'
        title='Teemu Tapinila'
      />
      <Story
        image='https://c.vanceai.com/assets/images/index/index_desc_img-1aeac11335.png'
        profileSrc='https://avatars.githubusercontent.com/u/20131887?'
        title='Murugappan Chetty'
      />
    </div>
  )
}

export default StoryReel
