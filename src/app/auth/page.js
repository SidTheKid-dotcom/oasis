'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { GridLoader } from 'react-spinners';
import LoginLayout from '../../components/auth/LoginLayout';

function Auth() {
  const token = localStorage.getItem('token');
  const router = useRouter();

  return (
    <div className='h-[100%] w-3/4'>
        {token ? router.push('/')  : <LoginLayout/>}
    </div>
  )
}

export default Auth