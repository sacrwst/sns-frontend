import { MoreVert } from '@mui/icons-material'
import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpeg" alt="" className='postProfileImg' />
                    <span className="postUsername">Username</span>
                    <span className="postDate">5min ago</span>
                </div>
                <div className="postRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText"></span>
                <img src="/assets/post/1.jpeg" alt="" className='postProfileImg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/heart.png" alt="" className='likeIcon' />
                    <span className="postLikeCounter">3人</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">3: コメント</span>
                </div>
            </div>
        </div>
    </div>
  )
}
