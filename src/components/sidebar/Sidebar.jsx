import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <Home className='sidebarIcon' />
                    <span className="sidebarListItemText">Home</span>
                </li>
                <li className="sidebarListItem">
                    <Search className='sidebarIcon' />
                    <span className="sidebarListItemText">Search</span>
                </li>
                <li className="sidebarListItem">
                    <Notifications className='sidebarIcon' />
                    <span className="sidebarListItemText">Notifications</span>
                </li>
                <li className="sidebarListItem">
                    <MessageRounded className='sidebarIcon' />
                    <span className="sidebarListItemText">Message</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className='sidebarIcon' />
                    <span className="sidebarListItemText">Home</span>
                </li>
                <li className="sidebarListItem">
                    <Person className='sidebarIcon' />
                    <span className="sidebarListItemText">Home</span>
                </li>
                <li className="sidebarListItem">
                    <Settings className='sidebarIcon' />
                    <span className="sidebarListItemText">Home</span>
                </li>
            </ul>
            <hr className='sidebarHr' />

            <ul className="sidebarFriends">
                <li className="sidebarFriend">
                    <img src='/assets/person/2.jpeg' className='sidebarFriendImg' />
                    <span className="sidebarFriendName">Name</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
