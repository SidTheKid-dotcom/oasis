'use client'

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import MobileNav from "@/components/layout/MobileNav";
import { AppContextProvider } from "@/components/layout/Context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, []);

  const renderAuthenticatedLayout = () => (
    <>
      <Sidebar />
      <div className="w-full flex flex-col">
        <TopBar />
        <MobileNav />
        <div className="overflow-y-auto md:h-[550px] scrollbar-hide md:top-20 h-[790px]">
          {children}
        </div>
      </div>
    </>
  );

  const renderUnauthenticatedLayout = () => (
    <div className="md:my-[-3.5rem] flex-grow flex items-start justify-center">
      {children}
    </div>
  );

  return (
    <html lang="en">
      <AppContextProvider>
      <body className={`${inter.className} ${!token ? 'overflow-hidden' : ''}`}>
        {token && (
          <div className="hidden md:block">
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black my-10 mx-[8%] opacity-75 z-[-10] rounded-2xl shadow-xl shadow-blue-500"></div>
          </div>
        )}
        <div className="md:my-10 md:mx-[8%] md:p-4 md:flex z-10 min-h-screen">
          {token ? renderAuthenticatedLayout() : renderUnauthenticatedLayout()}
        </div>
      </body>
      </AppContextProvider>
    </html>
  );
}
