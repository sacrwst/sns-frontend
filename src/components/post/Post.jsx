import React, { useState } from 'react'
import './post.css'
import { Users } from '../../dummyData'

export const Post = ({post}) => {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  const user = Users.find(user => user.id === post.userId)
  const username = user.username

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="img">
            <img src="http://placekitten.com/30/30/" alt="" />
          </div>
          <span className="postUsername">{username}</span>
          <div className="postDate">{post.date}</div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <div className="img">IMG</div>
        </div>
        <div className="postBottom">
          <div onClick={handleLike} className="img">Like Img</div>
          <div className="postLikeCoutner">{like}</div>
        </div>
      </div>
    </div>
  )
}
