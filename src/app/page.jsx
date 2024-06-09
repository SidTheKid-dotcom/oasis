'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import GlobalFeedPage from "./global-feed/page";
import { useAuth } from "@/context/authContext";

export default function Home() {
  const { token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/auth');
    }
  }, [token, router]);

  return (
    <div>
      {token ? <GlobalFeedPage /> : null}
    </div>
  );
}