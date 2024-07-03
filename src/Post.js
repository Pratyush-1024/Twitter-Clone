import React,{forwardRef} from 'react';
import './Post.css';
import { Avatar} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CachedIcon from '@mui/icons-material/Cached';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import UploadIcon from '@mui/icons-material/Upload';


const Post=forwardRef(({displayName,profilePic,username,verified,text,image},ref)=> {
  return (
    <div className='post' ref={ref}>

    <div className='post__logo'>
      <Avatar src={profilePic} className='post__avatar' />
    </div>


    <div className='post__details'>
     <div className='post__about'>
        <h4>{displayName}</h4>
        {verified && <VerifiedIcon className='post__aboutVer'/>}
        <h4 className='post__aboutUsername'>{username}</h4>
     </div>

     <div className='post__content'>
        <p>{text}</p>
        {image&&<img className='post__contentImage' src={image} alt='post'/>}
     </div>
   
     

     <div className='post__footer'>
        <ChatBubbleOutlineIcon/>
        <CachedIcon/>
        <FavoriteBorderIcon/>
        <EqualizerIcon/>
        <UploadIcon/>
     </div>
     </div>
    </div>
  )
}
)
export default Post