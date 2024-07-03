import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';
import db from './firebase';
import { collection, addDoc } from 'firebase/firestore';


function TweetBox() {

  const [tweetMessage,setTweetMessage]= useState('');
  const[tweetImage,setTweetImage]=useState('');

  const sendTweet = async (event) => {
    event.preventDefault();
  
    const docRef = await addDoc(collection(db, 'posts'), {
      displayName: 'Pratyush',
      username: '@Praty0924',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      profilePic: 'https://pbs.twimg.com/profile_images/1580048100927774720/yRrZo8QQ_400x400.jpg',
    });
  
    setTweetMessage('');
    setTweetImage('');
  };
  


  return (

    
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>

                <Avatar src='https://pbs.twimg.com/profile_images/1580048100927774720/yRrZo8QQ_400x400.jpg' className='tweetBox__avatar'/>

            
                  <input placeholder='What is happening?!' className='tweetBox__inputText'
                    onChange={(event)=>{setTweetMessage(event.target.value)}}
                  />
                
          
               
            </div>
            <div className='tweetBox__inputImage'>
            <input placeholder='Optional:Enter image URL' 
                    onChange={(event)=>{setTweetImage(event.target.value)}}
                  />
            </div>
           

            <Button className='tweetBox__tweetButton'
            onClick={sendTweet}>Post</Button>
        </form>
    </div>
  )
}

export default TweetBox