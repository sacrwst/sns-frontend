import { Chat, Notifications, Search } from '@mui/icons-material'
import React from 'react'
import './topbar.css'

export const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">SNS</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className='searchIcon' />
          <input type="text" name="" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topBarIcons">
          <div className="topBarIcon">
            <Chat />
          </div>
          <div className="topBarIcon">
            <Notifications />
          </div>
        </div>
        <div className="img">IMG</div>
      </div>
    </div>
  )
}