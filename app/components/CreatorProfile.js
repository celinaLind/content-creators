import { useState } from "react";
import SocialMedia from "./SocialMedia";

// return (
//         <div>
//         <button onClick={openModal}>Add Creator</button>
//         {isModalOpen && (
//             <dialog open>


export default function CreatorProfile({ creatorData }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <button onClick={openModal} className="primaryBtn">Profile<span>-&gt;</span></button>
            {isModalOpen && (
                <dialog open>
                    <article>
                    <header>
                            <a href="#close" aria-label="Close" className="close" onClick={closeModal}></a>
                            {/* <h3>{creatorData.name}</h3> */}
                        </header>
                        <div className="grid">
                            <div>
                                <h2>{creatorData.name}<br />{creatorData.pronouns}</h2>
                                <h6>{creatorData.brand}</h6>
                                <image src="@/public/assets/codioful-site-background.jpg" width={200} height={200}></image>
                                {/* <SocialMedia usernames={creatorData.usernames}></SocialMedia> */}
                            </div>
                            <div>
                                <h3>About</h3>
                                <p>{creatorData.description}</p>
                                <div className="grid">
                                    <button className="primaryBtn">DELETE</button>
                                    <button className="primaryBtn">EDIT</button>
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