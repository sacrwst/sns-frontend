import { Analytics, Face, Gif, Image } from '@mui/icons-material'
import React from 'react'
import './share.css'

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/1.jpeg" className='shareProfileImg' />
                <input type="text" className='shareInput' placeholder='今なにしてる？' />
            </div>
            <hr className='shareHr' />
            <div className="shareBtns">
                <div className="shareOptions">
                    <div className="shareOption">
                        <Image className='shareIcon' />
                        <span className="shareOptionText">写真</span>
                    </div>
                    <div className="shareOption">
                        <Gif className='shareIcon' />
                        <span className="shareOptionText">Gif</span>
                    </div>
                    <div className="shareOption">
                        <Face className='shareIcon' />
                        <span className="shareOptionText">気持ち</span>
                    </div>
                    <div className="shareOption">
                        <Analytics className='shareIcon' />
                        <span className="shareOptionText">投票</span>
                    </div>
                </div>
                <button className="shareBtn">投稿</button>
            </div>
        </div>
    </div>
  )
}
