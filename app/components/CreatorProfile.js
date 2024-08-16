import { useState } from "react";
import SocialMedia from "./SocialMedia";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";

export default function CreatorProfile({ creatorData, isModalOpen, setIsModalOpen }) {
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
            closeModal();
            // You might want to add some logic here to refresh the page or update the state
        }
    };

    return (
        <div>
            <button onClick={openModal} className="primaryBtn">Profile<span>-&gt;</span></button>
            {isModalOpen && (
                <dialog open>
                    <article className="modal-styles">
                    <header>
                            <a href="#close" aria-label="Close" className="close" onClick={closeModal}></a>
                            {/* <h3>{creatorData.name}</h3> */}
                        </header>
                        <div className="grid">
                            <div className='center-column'>
                                <h2 className="playfair-display-headers text-center">{creatorData.name}<br />{creatorData.pronouns}</h2>
                                <h6 className="text-center">{creatorData.brand}</h6>
                                <Image src="/assets/codioful-site-background.jpg" width={200} height={200}/>
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
                    </article>
                </dialog>
            )

            }

        </div>
    )
}