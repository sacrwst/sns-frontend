import React from 'react'
import './share.css'
import { Image } from '@mui/icons-material'

export const Share = () => {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <div className="img">IMG</div>
          <input type="text" className='shareInput' />
        </div>
        <div className="shareBtns">
          <div className="shareOptions">
            <div className="shareOption">
              <Image />
            </div>
          </div>
          <button className="shareBtn">投稿</button>
        </div>
      </div>
    </div>
  )
}
