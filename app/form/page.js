'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';

export default function Form() {
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState(null);
    const supabase = createClient();

    useEffect(() => {
        const type = searchParams.get('type');
        const creatorDataString = searchParams.get('creatorData');

        if (creatorDataString) {
            try {
                const parsedCreatorData = JSON.parse(decodeURIComponent(creatorDataString));
                setFormData({ type, ...parsedCreatorData });
            } catch (error) {
                console.error('Error parsing creator data:', error);
                setFormData({ type });
            }
        } else {
            setFormData({ type });
        }
    }, [searchParams]);

    if (!formData) {
        return <div>Loading...</div>;
    }

    // var creatorData = type == 'Add' ? [] : 

    // const { data, error } = await supabase.from('movies').insert([
    //     {
    //       name: 'The Empire Strikes Back',
    //       description:
    //         'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda.',
    //     },
    //     {
    //       name: 'Return of the Jedi',
    //       description:
    //         'After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star.',
    //     },
    //   ])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.type === "Add") {
            await AddCreator();
        } else {
            await UpdateCreator();
        }
    }

    const AddCreator = async () => {
        const { data, error } = await supabase
            .from('creators')
            .insert([
                {
                    name: formData.name,
                    description: formData.description,
                    brand: formData.brand,
                    instagram: formData.instagram,
                    twitter: formData.twitter,
                    tiktok: formData.tiktok,
                    youtube: formData.youtube,
                    twitch: formData.twitch
                }
            ]);

        if (error) console.error('Error adding creator:', error);
        else console.log('Creator added successfully:', data);

    }

    const UpdateCreator = async () => {
        const { data, error } = await supabase
            .from('creators')
            .update({
                name: formData.name,
                description: formData.description,
                brand: formData.brand,
                instagram: formData.instagram,
                twitter: formData.twitter,
                tiktok: formData.tiktok,
                youtube: formData.youtube,
                twitch: formData.twitch
            })
            .eq('id', formData.id); // Assuming you have an id field

        if (error) console.error('Error updating creator:', error);
        else console.log('Creator updated successfully:', data);
    };

    return (
        <div className='container' style={{ margin: '8px auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>{formData.type} Creator</h3>
                <Link href='/' passHref>
                    <button className="btn-primary">Home</button>
                </Link>
            </div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        Name
                        <input
                            name="name"
                            placeholder="Name"
                            autoComplete="given-name"
                            value={formData.name || ''}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Description
                        <textarea
                            name="description"
                            placeholder="Enter a description"
                            value={formData.description || ''}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Brand Type
                        <input
                            type="text"
                            name="brand"
                            placeholder="Enter brand type"
                            value={formData.brand || ''}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Instagram
                        <input
                            type="text"
                            name="instagram"
                            placeholder="Instagram username"
                            autoComplete="off"
                            value={formData.instagram || ''}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Twitter
                        <input
                            type="text"
                            name="twitter"
                            placeholder="Twitter username"
                            autoComplete='off'
                            value={formData.twitter || ''}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        TikTok
                        <input
                            type="text"
                            name="tiktok"
                            placeholder="TikTok username"
                            value={formData.tiktok || ''}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        YouTube
                        <input
                            type="text"
                            name="youtube"
                            placeholder="YouTube channel name"
                            autoComplete="off"
                            value={formData.youtube || ''}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Twitch
                        <input
                            type="text"
                            name="twitch"
                            placeholder="Twitch username"
                            autoComplete="off"
                            value={formData.twitch || ''}
                            onChange={handleInputChange}
                        />
                    </label>
                </fieldset>
                <input
                    type="submit"
                    value={formData.type === "Add" ? "Add" : "Save"}
                />
            </form>
        </div>);
}