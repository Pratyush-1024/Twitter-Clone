import React from 'react';
import './SidebarOptions.css';

function SidebarOptions({ Icon, title, active }) {
  return (
    <div className={`sidebarOptions ${active && 'sidebarOptions--active'}`}>
      <Icon className='sidebarOptions__icon' /> 
      <h2>{title}</h2>
    </div> 
  )
}

export default SidebarOptions;
