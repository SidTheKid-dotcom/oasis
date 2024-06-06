import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import PostCardFeed from './PostCardFeed';

export default function Posts({ post, isActive, setActiveVideoId, muted, setMuted }) {
    const [likedState, setLikedState] = useState(null);
    const [followingState, setFollowingState] = useState(null);
    const postRef = useRef(null);
    const playerRef = useRef(null);
    const [loadMedia, setLoadMedia] = useState(false);

    const fetchPostState = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://3.110.161.150:4000/post/state?id=${post.id}`, {
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/json',
                },
            });
            setLikedState(response.data.isLiked);
            setFollowingState(response.data.isFollowing);
        } catch (error) {
            console.log('Error occurred while fetching post state: ', error);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setLoadMedia(true);
                        fetchPostState();
                        setActiveVideoId(post.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (postRef.current) {
            observer.observe(postRef.current);
        }

        const handleScroll = () => {
            if (postRef.current) {
                const viewPortCenter = window.innerHeight / 2;
                const postRect = postRef.current.getBoundingClientRect();
                if (postRect.top < viewPortCenter && viewPortCenter < postRect.bottom) {
                    setActiveVideoId(post.id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [post.id, setActiveVideoId]);

    useEffect(() => {
        if (isActive) {
            playerRef.current?.getInternalPlayer()?.play();
        } else {
            playerRef.current?.getInternalPlayer()?.pause();
        }
    }, [isActive]);

    return (
        <div ref={postRef} className="w-full bg-black">
            <PostCardFeed
                loadMedia={loadMedia}
                likedState={likedState}
                followingState={followingState}
                post={post}
                isActive={isActive}
                muted={muted}
                setMuted={setMuted}
                playerRef={playerRef}
            />
        </div>
    );
}
