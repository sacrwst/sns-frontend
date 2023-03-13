import Post from 'components/post/Post'
import Share from 'components/share/Share'
import React from 'react'
import {Posts} from 'dummyData'
import './timeline.css'

export default function Timeline() {
  return (
    <div className='timeline'>
        <div className="timelineWrapper">
            <Share />
            {
              Posts.map((post) => (
                <Post post={post} key={post.id} />
              ))
            }
        </div>
    </div>
  )
}
