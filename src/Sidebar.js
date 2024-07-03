import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import logo from './logo-white.png';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SmsIcon from '@mui/icons-material/Sms';
import Button from '@mui/material/Button';


function Sidebar() {
  return (

    <div className='sidebar'>
      <img src={logo} className='sidebar__logo' alt='twitter-logo'/>

      <SidebarOptions active='true' Icon={HomeIcon} title ='Home'/>
      <SidebarOptions Icon={SearchIcon} title ='Explore'/>
      <SidebarOptions Icon={NotificationAddIcon} title='Notifications'/>
      <SidebarOptions Icon={MailOutlineIcon} title='Messages'/>
      <SidebarOptions Icon={ListAltIcon} title='Lists'/>
      <SidebarOptions Icon={PeopleIcon} title='Communities' />
      <SidebarOptions Icon={PermIdentityIcon} title='Profile'/>
      <SidebarOptions Icon={SmsIcon} title='More'/>
      <Button variant='outlined' className='sidebar__button' fullWidth>Post</Button>
      
    </div>
  )
}

export default Sidebar