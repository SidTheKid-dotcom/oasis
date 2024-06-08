'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GlobalFeedPage from "./global-feed/page";
export default function Home() {
  const token = localStorage.getItem('token');
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.refresh();
    }, 2)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <>
      <div>
        {token ? <GlobalFeedPage /> : router.push('/auth')}
      </div>
    </>
  );
}