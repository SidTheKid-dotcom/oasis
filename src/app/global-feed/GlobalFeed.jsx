'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Posts from '../../components/global-feed/Post';

import api from '@/api/api';

export default function GlobalFeed() {
    const [posts, setPosts] = useState([]);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('/feed/global');
                setPosts(response.data);
            } catch (error) {
                console.warn('Error occurred in fetching posts: ', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="w-full flex flex-col items-center overflow-hidden">
            {posts.map(post => (
                <Posts
                    key={post.id}
                    post={post}
                    muted={muted}
                    setMuted={setMuted}
                />
            ))}
        </div>
    );
}
