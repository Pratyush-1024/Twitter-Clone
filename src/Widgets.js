import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

function Widgets() {
  return (
    <div className='widgets'>
    <div className='widgets__input'>
        <SearchIcon/>
        <input placeholder='Search' type='text'/>
    </div>

    <div className='widgets__sub'>
        <h2>
            Subscribe to Premium
        </h2>
        <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <Button variant='outlined' className='widgets__subButton' fullWidth>Subscribe</Button>

    </div>

    <div className='widgets__widgetContainer'>
        <h2 className='widgets__heading'>What's happening</h2>

        <blockquote class="twitter-tweet" data-lang="en" data-theme="dark"><p lang="en" dir="ltr">His dream came true 😏 <a href="https://t.co/oiEvrXlDkz">pic.twitter.com/oiEvrXlDkz</a></p>&mdash; FC Barcelona (@FCBarcelona) <a href="https://twitter.com/FCBarcelona/status/1697704040358883342?ref_src=twsrc%5Etfw">September 1, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        <TwitterTimelineEmbed
        className='widgets__twitterTimelineEmbed'
        sourceType='profile'
        screenName='Praty0924'
        options={{height:400}}
        />
<div className='widgets__twitterShare'>
<TwitterShareButton
        
        url={'https://www.instagram.com/'}
        options={{text:'This is the Twitter clone designed by me',via:'Pratyush'}}
        />
</div>
        
    </div>
        
    </div>
  )
}

export default Widgets