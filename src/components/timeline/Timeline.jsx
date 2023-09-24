import React from 'react'
import './timeline.css'
import { Share } from '../share/Share'
import { Post } from '../post/Post'
import { Posts } from '../../dummyData'

export const Timeline = () => {
  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {
          Posts.map((post, i) => (
            <Post key={i} post={post} />
          ))
        }
      </div>
    </div>
  )
}
