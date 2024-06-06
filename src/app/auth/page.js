'use client'
import React, { useEffect, useState } from 'react'
import Form from './form'
import { useRouter } from 'next/navigation';
import { GridLoader } from 'react-spinners';

function Auth() {
  const token = localStorage.getItem('token');
  const router = useRouter();
  const [loaded,SetLoaded]=useState(false)

  useEffect(() => {
      const timer = setTimeout(() => {
        router.refresh();
      },2)
      return ()=> clearTimeout(timer)
  },[])

  return (
    <div className='flex justify-center items-center m-auto'>
        {token ? router.push('/')  : <Form/>}
    </div>
  )
}

export default Auth