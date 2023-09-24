import React from 'react'
import { Topbar } from '../../components/topbar/Topbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Timeline } from '../../components/timeline/Timeline'
import { Rightbar } from '../../components/rightbar/Rightbar'
import './home.css'

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className='homeContainer'>
        <Sidebar />
        {/* <Timeline /> 
        <Rightbar />  */}
      </div>
    </div>
  )
}
