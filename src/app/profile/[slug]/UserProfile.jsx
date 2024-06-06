'use client'

import FollowersCard from "../../../components/profile/FollowersCard";
import MainProfile from "../../../components/profile/MainProfile";

import { useState, useEffect } from "react";
import axios from "axios";

import FollowersCardSkeleton from "../../../components/profile/skeletons/FollowersCardSkeleton";
import MainProfileSkeleton from "../../../components/profile/skeletons/MainProfileSkeleton";

export default function UserProfile({ params }) {

    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchUserInfo = async () => {
            try {

                //Extract the user token from the cookie

                const token = localStorage.getItem('token');

                const response = await axios.get(`http://3.110.161.150:4000/api/user/profile?userId=${params.slug}`, {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response.data);
                setUserInfo(response.data);
                setLoading(false);
            }
            catch (error) {
                console.log("error occured while fetching user's info: ", error);
                setLoading(false);
            }
        }

        fetchUserInfo();

        return () => {
            setUserInfo(prevUserInfo => prevUserInfo);
        }
    }, [])

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2"></div>
            <div className="col-span-7">
                {
                    loading ? <MainProfileSkeleton /> : <MainProfile userInfo={userInfo} setUserInfo={setUserInfo} loading={loading} />
                }
            </div>
            <div className="col-span-3">
                {
                    loading ? <FollowersCardSkeleton /> : <FollowersCard username={userInfo.username} followers={userInfo.followers} following={userInfo.following} loading={loading} />
                }
            </div>
        </div>
    );
}