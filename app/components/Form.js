
import { useState } from 'react';

export default function Form({ creatorData, type }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
            <div>
            <button onClick={openModal}>Add Creator</button>
            {isModalOpen && (
                <dialog open>
                    <article>
                        <header>
                            <a href="#close" aria-label="Close" className="close" onClick={closeModal}></a>
                            <h3>{type} New Creator</h3>
                        </header>
                        <form>
                            <fieldset>
                                <label>
                                    First name
                                    <input
                                        name="first_name"
                                        placeholder="First name"
                                        autoComplete="given-name"
                                    />
                                </label>
                                <label>
                                    Email
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        autoComplete="email"
                                    />
                                </label>
                                <label>
                                    Instagram
                                    <input
                                        type="text"
                                        name="instagram"
                                        placeholder="Instagram username"
                                        autoComplete="off"
                                    />
                                </label>
                                <label>
                                    Twitter
                                    <input
                                        type="text"
                                        name="twitter"
                                        placeholder="Twitter username"
                                        autoComplete="off"
                                    />
                                </label>
                                <label>
                                    TikTok
                                    <input
                                        type="text"
                                        name="tiktok"
                                        placeholder="TikTok username"
                                        autoComplete="off"
                                    />
                                </label>
                                <label>
                                    YouTube
                                    <input
                                        type="text"
                                        name="youtube"
                                        placeholder="YouTube channel name"
                                        autoComplete="off"
                                    />
                                </label>
                                <label>
                                    Twitch
                                    <input
                                        type="text"
                                        name="twitch"
                                        placeholder="Twitch username"
                                        autoComplete="off"
                                    />
                                </label>
                            </fieldset>
                            <input
                                type="submit"
                                value={type == "Add" ? "Add": "Save"}
                            />
                        </form>
                    </article>
                </dialog>
            )
        } </div>);
    }