// components/user-profile/UserProfile.jsx
'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import FollowersCard from "../../../components/profile/FollowersCard";
import MainProfile from "../../../components/profile/MainProfile";
import FollowersCardSkeleton from "../../../components/profile/skeletons/FollowersCardSkeleton";
import MainProfileSkeleton from "../../../components/profile/skeletons/MainProfileSkeleton";

import api from "@/api/api";

export default function UserProfile({ params }) {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await api.get(`/user/profile?userId=${params.slug}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.log("error occurred while fetching user's info: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [params.slug]);

  return (
    <div className="grid grid-cols-12 mt-[2rem]">
      <div className="col-span-12 lg:col-span-8">
        {loading ? (
          <MainProfileSkeleton />
        ) : (
          <MainProfile userInfo={userInfo} setUserInfo={setUserInfo} loading={loading} />
        )}
      </div>
      <div className="hidden lg:block lg:col-span-4">
        {loading ? (
          <FollowersCardSkeleton />
        ) : (
          <FollowersCard username={userInfo.username} followers={userInfo.followers} following={userInfo.following} loading={loading} />
        )}
      </div>
    </div>
  );
}
