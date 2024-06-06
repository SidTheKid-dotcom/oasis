'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GlobalFeedPage from "./global-feed/page";
export default function Home() {
  const token = localStorage.getItem('token');
  const router = useRouter();
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
      router.refresh();
    }, 2)
    return () => {
      clearTimeout(timer)
      setLoaded(false)
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