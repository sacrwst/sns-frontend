import { Home } from '@mui/icons-material'
import React from 'react'
import './sidebar.css'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home />
            <span className="sidebarListItemText">ホーム</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
