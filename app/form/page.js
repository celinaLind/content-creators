'use client'
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import ClientData from "../components/ClientData"

export default function Form() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type') || 'Add';

    return (
            <div className='container' style={{margin: '8px auto'}}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>{type} Creator</h3>
                    <Link href='/' passHref>
                        <button className="btn-primary">Home</button>
                    </Link>
                </div>
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
            </div>);
    }