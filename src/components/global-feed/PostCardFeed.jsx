import ReactPlayer from 'react-player';
import Link from 'next/link';

export default function PostCardFeed({
    loadMedia,
    likedState,
    followingState,
    post,
    isActive,
    muted,
    setMuted,
    playerRef,
}) {
    const toggleMute = () => setMuted(prevMuted => !prevMuted);

    const renderMedia = () => {
        if (!loadMedia || !post.media_type) return <div className="w-full h-full bg-gray-300 animate-pulse" />;

        if (post.media_type === 'video') {
            return (
                <div>
                    <div>
                        <button onClick={e => e.stopPropagation() || toggleMute()}>
                            {muted ? 'Unmute' : 'Mute'}
                        </button>
                    </div>
                    <ReactPlayer
                        ref={playerRef}
                        controls
                        url={post.media}
                        width="100%"
                        height="100%"
                        muted={muted}
                        playing={isActive}
                    />
                </div>
            );
        }

        return (
            <figure className="w-full h-full">
                <img src={post.media} className="object-cover w-full h-full" alt="Post Media" />
            </figure>
        );
    };

    return (
        <div className="lazy-post-card w-full pixel-text">
            <div className="py-[1rem] px-[2rem] text-white flex flex-col min-h-[100px] border-y border-blue-500">
                <section>
                    <div className="mt-[1rem] grid grid-cols-12 items-center">
                        <div className="col-span-2 rounded-full overflow-hidden w-[50px] h-[50px] border border-solid border-white">
                            <figure className="w-full h-full">
                                <img
                                    src={loadMedia ? post.user.profile_picture || '/github.svg' : '/github.svg'}
                                    className="w-full h-full object-cover"
                                    alt="Profile Picture"
                                />
                            </figure>
                        </div>
                        <div className="col-span-6 text-md flex flex-col justify-center">
                            <div className="font-bold">{post.user.username}</div>
                            <div className="text-sm">
                                <i>@{post.community.name}</i>
                            </div>
                        </div>
                        <div className="col-span-3 flex flex-col items-center text-[1rem]">
                            {!followingState && (
                                <button className="m-2 p-2 px-3 min-w-[75px] bg-blue-500 rounded-[5px]">
                                    Follow
                                </button>
                            )}
                        </div>
                        <div className="col-span-1 flex flex-row justify-end">
                            <button>
                                <figure>
                                    <img src="/ellipsis-vertical-solid.svg" width="7px" height="12px" alt="Ellipsis Icon" />
                                </figure>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="my-[10px]">
                    <div className="text-[0.75rem]">{post.title}</div>
                    <div className="text-[0.75rem]">{post.body}</div>
                </section>
                <section>{renderMedia()}</section>
                <section className="mt-[20px] mb-[10px] w-full">
                    <div className="flex flex-row gap-6">
                        <div className="flex flex-col items-center">
                            <figure>
                                <img src={likedState ? '/heart-solid.svg' : '/heart-regular.svg'} width="25px" alt="Heart Icon" />
                            </figure>
                            <figcaption>{post.likes}</figcaption>
                        </div>
                        <div className="flex flex-col">
                            <Link href={{ pathname: '/post-card', query: { postId: post.id } }}>
                                <button>
                                    <figure>
                                        <img src="/comment-regular.svg" width="25px" alt="Comment Icon" />
                                    </figure>
                                    <figcaption>{post.comments}</figcaption>
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}