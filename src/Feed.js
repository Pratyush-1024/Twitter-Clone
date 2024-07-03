import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import FlipMove from 'react-flip-move';


function Feed() {

   const [posts,setPosts]=useState([]);

   useEffect(() => {
    const q = query(collection(db, 'posts')); 
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });

    return () => {
      unsubscribe();
    };
  }, []);
    
  return (
    <div className='feed'>
     <div className='feed__header'>
        <h2>Home</h2>
     </div>

     <TweetBox/>

     <FlipMove>

     {posts.map((post) => (
  <Post
    key={post.text}
    displayName={post.displayName}
    image={post.image}
    profilePic={post.profilePic}
    text={post.text}
    username={post.username}
    verified={post.verified}
  />
))}
</FlipMove>


    </div>
  )
}

export default Feed;