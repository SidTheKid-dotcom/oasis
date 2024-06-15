'use client'
import { createContext, useState, useEffect } from "react";
export const Context = createContext();

import api from "@/api/api";

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [navBarData, setNavBarData] = useState({});
  
  useEffect(() => {
    navBarText()
  }, [])
  const navBarText = async () => {
    try {
        const response = await api.get("/user/navbar");
        const {data,status} = await response
        if(status === 200 && data){
            setNavBarData(data)
        }
    } catch (error) {
        console.log(error)
    }
}
  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        mobileMenu,
        setMobileMenu,
        navBarData
      }}
    >
      {children}
    </Context.Provider>
  );
};


