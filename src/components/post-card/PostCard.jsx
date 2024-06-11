import React from "react";
import ReactPlayer from "react-player";
import axios from "axios";

import { useSearchParams } from "next/navigation";
import { useAuth } from "@/context/authContext";

import { Toaster } from "sonner";
import { toast } from "sonner";

const PostCard = React.memo(({ post, setPost, totalComments }) => {

    const { token } = useAuth();
    const searchParams = useSearchParams();
    const postId = searchParams.get('postId');

    console.log(post);

    const toggleFollowUser = async () => {
        try {
            await axios.post('http://3.110.161.150:4000/api/user/follow',
                { userId: post.user.id },
                {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json',
                    },
                }
            )
            setPost(prevPost => ({
                ...prevPost,
                isFollowing: true,
            }));
            toast('User Followed Successfully', {
                position: 'top-right',
                className: 'bg-black text-white pixel-text border border-solid border-green-400',
            })
        }
        catch (error) {
            console.error('Error occired while following user ', error)
        }
    }

    const togglePostLike = async () => {

        try {
            if (!post.isLiked) {
                await axios.post(
                    'http://3.110.161.150:4000/api/post/like',
                    { postId: parseInt(postId) },
                    {
                        headers: {
                            'Authorization': token,
                            'Content-Type': 'application/json',
                        },
                    }
                );
                setPost(prevPost => ({
                    ...prevPost,
                    no_of_likes: prevPost.no_of_likes + 1,
                    isLiked: true, // Correcting the state update
                }));
                toast('Post Liked Successfully', {
                    position: 'top-right',
                    className: 'bg-black text-white pixel-text border border-solid border-green-400',
                });
            } else {
                await axios.delete(
                    'http://3.110.161.150:4000/api/post/unlike',
                    {
                        headers: {
                            'Authorization': token,
                            'Content-Type': 'application/json',
                        },
                        data: {
                            postId: parseInt(postId)
                        },
                    }
                );
                setPost(prevPost => ({
                    ...prevPost,
                    no_of_likes: prevPost.no_of_likes - 1,
                    isLiked: false, // Correcting the state update
                }));
                toast('Post Unliked Successfully', {
                    position: 'top-right',
                    className: 'bg-black text-white pixel-text border border-solid border-red-500',
                });
            }
        } catch (error) {
            console.log('Error occurred while toggling post like: ', error);
        }
    };

    return (
        <div>
            <Toaster />
            <div className="my-[1rem] px-[2rem] text-white flex flex-col w-full min-h-[100px] rounded-[15px] bg-black pixel-text">
                <section>
                    <div className="mt-[1rem] grid grid-cols-12 items-center">
                        <div className="col-span-2 rounded-full overflow-hidden w-[50px] h-[50px] border border-solid border-white">
                            <figure className="w-full h-full">
                                {
                                    post.user.profile_picture ? (
                                        <img src={post.user.profile_picture} className="w-full h-full object-cover" alt="Profile Picture"></img>
                                    )
                                        :
                                        <img src='/github.svg' className="w-full h-full object-cover" alt="Profile Picture"></img>
                                }
                            </figure>
                        </div>
                        <div className="col-span-6 text-md flex flex-col justify-center">
                            <div className="font-bold">{post.user.username}</div>
                            <div className="text-sm"><i>@{post.community.name}</i></div>
                        </div>
                        <div className="col-span-3 flex flex-col items-center text-[1rem]">
                            {
                                !post.isFollowing && (
                                    <button onClick={toggleFollowUser} className="m-2 p-2 px-3 min-w-[75px] bg-blue-500 rounded-[5px]">Follow</button>
                                )
                            }
                        </div>
                        <div className="col-span-1 flex flex-row justify-end">
                            <button>
                                <figure>
                                    <img src='/ellipsis-vertical-solid.svg' width="7px" height="12px"></img>
                                </figure>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="my-[10px]">
                    <div className="text-[0.75rem]">{post.title}</div>
                    <div className="text-[0.75rem]">{post.body}</div>
                </section>
                <section>
                    {
                        post.media_type ? (
                            <div className="rounded-[10px] w-full min-h-[50px] overflow-hidden">
                                {
                                    post.media_type === 'video' ? (
                                        <div>
                                            <ReactPlayer id="post-video-player"
                                                controls
                                                url={post.media}
                                                width="100%"
                                                height="100%"
                                                muted={true}
                                                playing={true}
                                            />
                                        </div>
                                    )
                                        : (
                                            <figure className="w-full h-full">
                                                <img src={post.media} className="object-cover" width="100%" height="100%"></img>
                                            </figure>
                                        )
                                }
                            </div>
                        )
                            : (
                                <div className="w-full h-full bg-gray-300 animate-pulse" />
                            )
                    }
                </section>
                <section className="mt-[20px] mb-[10px] w-full">
                    <div className="flex flex-row gap-6">
                        <button onClick={togglePostLike} className="flex flex-col items-center">
                            <figure>
                                <img src={post.isLiked ? '/heart-solid.svg' : '/heart-regular.svg'} width="25px"></img>
                            </figure>
                            <figcaption>{post.no_of_likes}</figcaption>
                        </button>
                        <div className="flex flex-col">
                            <figure>
                                <img src='/comment-regular.svg' width="25px"></img>
                            </figure>
                            <figcaption>{totalComments}</figcaption>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
})

export default PostCard;