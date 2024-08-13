import Image from "next/image";
import styles from "./page.module.css";
import SocialMedia from "./components/SocialMedia";

export default function Home() {

  const creatorData = [
    { name: 'Tyler Perry',
      contentType: 'Actor',
      description: 'Tyler Perry is a renowned American actor, playwright, filmmaker, and entrepreneur known for creating and performing the Madea character. He has built a media empire through his production company, Tyler Perry Studios, producing numerous successful films, TV shows, and stage plays that often explore themes of faith, family, and African-American life.',
      youtube: '',
      instagram: 'celinasacct',
      tiktok: '',
      twitter: '',
      twitch: '',
      discord: 'hamlit1163',
      image: '',
    }
  ]

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
      </div>

      <div className={`${styles.center } flex-column`}>
      <h1 className="playfair-display-headers">Who's your favorite content creator?</h1>
      <h6 className="playfair-display-headers" style={{fontWeight: 500}}>Add your favorite content creators and check out other people's favorites as well.</h6>
      </div>

      <div className={styles.grid}>
        <div
          className={styles.card}
        >
          <div className={styles.grid}>
            <image src="/assets/codioful-site-background.jpg" width={50} height={50}></image>
           <div>
          <h2>
            {creatorData[0].name}
          </h2>
          <p>{creatorData[0].contentType}</p>
          <button className={styles.primaryBtn}>Read More <span>-&gt;</span></button>
          </div></div> 
          <SocialMedia instagramUser={creatorData[0].instagram} discordUser={creatorData[0].discord}></SocialMedia>
        </div>
      </div>
    </main>
  );
}
