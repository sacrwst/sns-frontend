import React from 'react'
import './rightbar.css'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img src="/assets/star.png" alt="" />
          <span className="eventText"><b>フォロワー限定</b>イベント</span>
        </div>
        <img src="/assets/ad.jpeg" alt="" />
        <h4 className='rightbarTitle'>オンラインの友達</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/person/1.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <div className="rightbarUsername">username</div>
          </li>
        </ul>
      </div>
    </div>
  )
}
