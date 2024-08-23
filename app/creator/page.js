'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import SocialMedia from '../components/SocialMedia';
import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';


export default function CreatorPage() {
    const router = useRouter();
    const supabase = createClient();
    const [creatorData, setCreatorData] = useState(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const creatorDataString = searchParams.get('creatorData');

        if (creatorDataString) {
            try {
                const parsedCreatorData = JSON.parse(decodeURIComponent(creatorDataString));
                console.log("CREATOR DATA: ", parsedCreatorData);
                setCreatorData(parsedCreatorData);
            } catch (error) {
                console.error('Error parsing creator data:', error);
            }
        } else {
            console.error('No creator data found');
        }
    }, [searchParams]);

    
    if (!creatorData) {
        return <div>Loading...</div>;
    }

    const DeleteCreator = async (creatorId) => {
        const supabase = createClient();
        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', creatorId);

        if (error) {
            console.error('Error deleting creator:', error);
        } else {
            console.log('Creator deleted successfully');
            // You might want to add some logic here to refresh the page or update the state
        }
    };

    return (
        <div className='container' style={{ margin: 'auto', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', height: '100%' }}>
            <header>
            <Link href='/' passHref>
                    <button className="btn-primary">Back to Creators</button>
                </Link>
            </header>
            <div className="grid">
                <div className='center-column'>
                    <h2 className="playfair-display-headers text-center">{creatorData.name}<br />{creatorData.pronouns}</h2>
                    <h6 className="text-center">{creatorData.brand}</h6>
                    <Image src="/assets/codioful-site-background.jpg" width={200} height={200} />
                    <SocialMedia linkedInUser={creatorData.linkedIn} tiktokUser={creatorData.tiktok} twitchUser={creatorData.twitch} youtubeUser={creatorData.youtube} instagramUser={creatorData.instagram} discordChannel={creatorData.discord}></SocialMedia>
                </div>
                <div>
                    <h3 className="playfair-display-headers">About</h3>
                    <p>{creatorData.description}</p>
                    <div className="grid">
                        <button className="primaryBtn" onClick={() => DeleteCreator(creatorData.id)}>DELETE</button>
                        <Link href={`/form?type=Edit&creatorData=${encodeURIComponent(JSON.stringify(creatorData))}`} passHref legacyBehavior><button className="primaryBtn">EDIT</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
}