import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Create a SocialMedia component that will display social media links with the ability to distinguish which link is which
export default function SocialMedia({ linkedInUser, discordUser, discordChannel, instagramUser, email, youtubeUser, tiktokUser, twitchUser }) {
    return (
        // Add social media links as icons for linkedin, github, instagram, youtube, tiktok, and email
        <div className='social-media'>
           {linkedInUser && <a className="btn-primary" href={`https://www.linkedin.com/in/${linkedInUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>}
            {discordUser && <a className="btn-primary" href={`https://discordapp.com/users/${discordUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon="fa-brands fa-discord" />
            </a>}
            {discordChannel && <a className="btn-primary" href={`https://discordapp.com/invite/${discordChannel}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon="fa-brands fa-discord" />
            </a>}
            {email && <a className="btn-primary" href={`mailto:${email}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={['fab', 'google']} />
            </a>}
            {instagramUser && <a className="btn-primary" href={`https://www.instagram.com/${instagramUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>}
            {youtubeUser && <a className="btn-primary" href={`https://www.youtube.com/channel/${youtubeUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={['fab', 'youtube']} />
            </a>}
            {tiktokUser && <a className="btn-primary" href={`https://www.tiktok.com/@${tiktokUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={['fab', 'tiktok']} />
            </a>}
            {twitchUser && <a className="btn-primary" href={`https://www.twitch.tv/${twitchUser}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={['fab', 'twitch']} />
            </a>}
        </div>
    );
}