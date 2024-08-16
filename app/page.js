'use client'
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import CreatorProfile from "./components/CreatorProfile"
import Link from "next/link";
import { useEffect, useState } from "react";
const SocialMedia = dynamic(() => import('./components/SocialMedia'), { ssr: false });
import { createClient } from "@/utils/supabase/client";
import { useSearchParams } from "next/navigation";
export default function Home() {
  const searchParams = useSearchParams();
  const [openProfileId, setOpenProfileId] = useState(null);
  const [creatorsData, setCreatorsData] =useState([]);
  const supabase = createClient();

  useEffect(() => {
    const creatorId = searchParams.get("creatorId");
    if (creatorId) {
      setOpenProfileId(creatorId);
    }
  }, [searchParams]);

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


  return (
    <main className={styles.main}>

      <div className={`${styles.center} flex-column`}>
        <h1 className="playfair-display-headers">Who's your favorite content creator?</h1>
        <h6 className="playfair-display-headers" style={{ fontWeight: 500 }}>Add your favorite content creators and check out other people's favorites as well.</h6>
        <Link href="/form?type=Add" passHref legacyBehavior><button className="primaryBtn">Add Creator</button></Link>
      </div>

      <div className={styles.grid}>
        {creatorsData.length === 0 ? (
          <h5 style={{textAlign: "center"}}>Please add creators</h5>
        ) : (
          creatorsData.map((creator, index) => (
            <div key={creator.id} className={styles.card}>
              <div className={styles.grid}>
                <Image src="/assets/codioful-site-background.jpg" width={150} height={150} alt="generic-profile-image"/>
                <div>
                  <h2>
                    {creator.name} 
                  </h2>
                  <p>{creator.contentType}</p>
                  <CreatorProfile creatorData={creator} isModalOpen={openProfileId === creator.id} setIsModalOpen={(isOpen) => setOpenProfileId(isOpen ? creator.id :null)}/>
                </div>
              </div>
              <SocialMedia linkedInUser={creator.linkedIn} tiktokUser={creator.tiktok} twitchUser={creator.twitch} youtubeUser={creator.youtube} instagramUser={creator.instagram} discordChannel={creator.discord}></SocialMedia>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
