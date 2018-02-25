import React from 'react';
import SidebarNav from './sidebarNav';
import TrackList from '../tracklist';
import './sidebar.css';

const Sidebar = () => {
  return(
    <div className='sidebar col-3'>
      <SidebarNav />
      <TrackList />
    </div>
  )
}

export default Sidebar;
