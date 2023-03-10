import React from 'react'
import './rightbar.css'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img src="/assets/star.png" alt="" className='starImg' />
          <span className="eventText"><b>フォロワー限定</b>イベント</span>
        </div>
        <img src="/assets/ad.jpeg" alt="" className='adImg' />
        <h4 className='rightbarTitle'>オンラインの友達</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/person/1.jpeg" alt="" className='rightbarProfileImg' />
              <span className="rightbarOnline"></span>
            </div>
            <div className="rightbarUsername">username</div>
          </li>
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img src="/assets/promotion/promotion1.jpeg" alt="" className='promotionImg' />
        <p className="promotionName">ショッピング</p>
      </div>
    </div>
  )
}
