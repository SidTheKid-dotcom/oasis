'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GlobalFeedPage from "./global-feed/page";
export default function Home() {
  const token = localStorage.getItem('token');
  const router = useRouter();

  return (
    <>
      <div>
        {token ? <GlobalFeedPage /> : router.push('/auth')}
      </div>
    </>
  );
}