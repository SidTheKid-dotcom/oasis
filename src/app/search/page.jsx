'use client'

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function SearchPage() {

    const searchParams = useSearchParams();
    const search = searchParams.get('filter');

    const [searchData, setSearchData] = useState({
        posts: [],
        communities: [],
        users: []
    });

    const [displayPosts, setDisplayPosts] = useState(true);
    const [displayUsers, setDisplayUsers] = useState(false);
    const [displayCommunities, setDisplayCommunities] = useState(false);

    useEffect(() => {
        if (search) {
            const getPosts = async () => {
                try {
                    const response = await axios.post(`http://3.110.161.150:4000/search/post`, {
                        query: search
                    });
                    setSearchData(prevSearchData => ({ ...prevSearchData, posts: response.data }));
                } catch (error) {
                    console.log('Error occurred in sending search request: ', error);
                }
            };

            const getUsers = async () => {
                try {
                    const response = await axios.post(`http://3.110.161.150:4000/search/user`, {
                        query: search
                    });
                    setSearchData(prevSearchData => ({ ...prevSearchData, users: response.data }));
                } catch (error) {
                    console.log('Error occurred in sending search request: ', error);
                }
            };

            getPosts();
            getUsers();
        }
    }, [search]);

    const handleSearchTypeChange = (event) => {
        const { value } = event.target;
        setDisplayPosts(value === 'posts');
        setDisplayUsers(value === 'users');
        setDisplayCommunities(value === 'communities');
    };

    return (
        <div className="grid grid-cols-12 bg-red-500">
            <div className="col-span-8">
                {
                    displayPosts && searchData.posts.length > 0 ? (
                        searchData.posts.map((post) => (
                            <div key={post.id}>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </div>
                        ))
                    ) : (
                        displayPosts && <p>No posts found.</p>
                    )}
                {
                    displayUsers && searchData.users.length > 0 ? (
                        searchData.users.map((user) => (
                            <div key={user.id} className="w-full text-white">
                                <h1>{user.username}</h1>
                            </div>
                        ))
                    ) : (
                        displayUsers && <p>No users found.</p>
                    )}
                {
                    displayCommunities && searchData.communities.length > 0 ? (
                        searchData.communities.map((community) => (
                            <div key={community.id}>
                                <h1>{community.name}</h1>
                                <p>{community.description}</p>
                            </div>
                        ))
                    ) : (
                        displayCommunities && <p>No communities found.</p>
                    )}
            </div>
            <div className="col-span-4 h-full bg-purple-400">
                <div>
                    <h1>Search: {search}</h1>
                </div>
                <div className="flex flex-col">
                    <label>
                        <input 
                            type="radio" 
                            name="searchType" 
                            value="posts" 
                            checked={displayPosts} 
                            onChange={handleSearchTypeChange} 
                        />
                        Posts
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="searchType" 
                            value="users" 
                            checked={displayUsers} 
                            onChange={handleSearchTypeChange} 
                        />
                        Users
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="searchType" 
                            value="communities" 
                            checked={displayCommunities} 
                            onChange={handleSearchTypeChange} 
                        />
                        Communities
                    </label>
                </div>
            </div>
        </div>
    );
}
