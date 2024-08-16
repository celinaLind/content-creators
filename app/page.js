'use client'
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import CreatorProfile from "./components/CreatorProfile"
import Link from "next/link";
import { useEffect, useState } from "react";
const SocialMedia = dynamic(() => import('./components/SocialMedia'), { ssr: false });
import { createClient } from "@/utils/supabase/client";
export default function Home() {
  const [isProfileModalOpen, setProfileIsModalOpen] = useState(false);
  const [creatorsData, setCreatorsData] =useState([]);
  const supabase = createClient();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
  .from('creators')
  .select()

      if(error) {
        console.error("Error Fetching Data:", error);
        return
      }
      setCreatorsData(data);
    }
    fetchData()
  }, [])


  const creatorData = [
    {
      name: 'Tyler Perry',
      pronouns: 'He/Him',
      contentType: 'Actor',
      description: 'Tyler Perry is a renowned American actor, playwright, filmmaker, and entrepreneur known for creating and performing the Madea character. He has built a media empire through his production company, Tyler Perry Studios, producing numerous successful films, TV shows, and stage plays that often explore themes of faith, family, and African-American life.',
      usernames: {
        youtube: '',
        instagram: 'celinasacct',
        tiktok: '',
        twitter: '',
        twitch: '',
        discord: 'hamlit1163',
        linkedIn: ''
      },
      image: '',
    }
  ]

  return (
    <main className={styles.main}>

      <div className={`${styles.center} flex-column`}>
        <h1 className="playfair-display-headers">Who's your favorite content creator?</h1>
        <h6 className="playfair-display-headers" style={{ fontWeight: 500 }}>Add your favorite content creators and check out other people's favorites as well.</h6>
        <Link href="/form?type=Add" passHref legacyBehavior><button className="primaryBtn">Add Creator</button></Link>
      </div>

      <div className={styles.grid}>
        {creatorsData.map((creator, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.grid}>
              <Image src="/assets/codioful-site-background.jpg" width={50} height={50}/>
              <div>
                <h2>
                  {creator.name} 
                </h2>
                <p>{creator.contentType}</p>
                <CreatorProfile creatorData={creator} isModalOpen={isProfileModalOpen} setIsModalOpen={setProfileIsModalOpen}/>
              </div>
            </div>
            <SocialMedia linkedInUser={creator.linkedIn} tiktokUser={creator.tiktok} twitchUser={creator.twitch} youtubeUser={creator.youtube} instagramUser={creator.instagram} discordChannel={creator.discord}></SocialMedia>
          </div>
        ))}
      </div>
    </main>
  );
}
