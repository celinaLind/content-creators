import { useState } from "react";
import SocialMedia from "./SocialMedia";
import Link from "next/link";
import Image from "next/image";

export default function CreatorProfile({ creatorData, isModalOpen, setIsModalOpen }) {
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                                <SocialMedia instagramUser={creatorData.usernames.instagram} discordChannel={creatorData.usernames.discord}></SocialMedia>
                            </div>
                            <div>
                                <h3 className="playfair-display-headers">About</h3>
                                <p>{creatorData.description}</p>
                                <div className="grid">
                                    <button className="primaryBtn">DELETE</button>
                                    <Link href="/form?type=Edit" passHref legacyBehavior><button className="primaryBtn">EDIT</button></Link>
                                    
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