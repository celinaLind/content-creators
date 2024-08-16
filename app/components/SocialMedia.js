import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react'
import { faDiscord, faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

// Create a SocialMedia component that will display social media links with the ability to distinguish which link is which
export default function SocialMedia({linkedInUser, tiktokUser, discordChannel, instagramUser, youtubeUser, twitchUser}) {

    return (
        // Add social media links as icons for linkedin, github, instagram, youtube, tiktok, and email
        <div className='social-media'>
           { linkedInUser && <a className="btn-primary" href={`https://www.linkedin.com/in/${linkedInUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>}
            {discordChannel && <a className="btn-primary" href={`https://discordapp.com/invite/${discordChannel}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faDiscord} />
            </a>}
            {instagramUser && <a className="btn-primary" href={`https://www.instagram.com/${instagramUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faInstagram} />
            </a>}
            {youtubeUser && <a className="btn-primary" href={`https://www.youtube.com/channel/${youtubeUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faYoutube} />
            </a>}
            {tiktokUser && <a className="btn-primary" href={`https://www.tiktok.com/@${tiktokUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faTiktok} />
            </a>}
            {twitchUser && <a className="btn-primary" href={`https://www.twitch.tv/${twitchUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={['fab', 'twitch']} />
            </a>}
        </div>
    );
}