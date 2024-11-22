import Background from '@/components/Background/Background'
import React from 'react'

const AuthLayout = ({ children }:{ children: React.ReactNode}) => {
  return (
    <div className="font-[sans-serif] relative w-full h-screen">
        <Background />
        <div className="absolute top-0 left-0 z-10 w-full h-full flex justify-center items-center">
      
        {
            children
        }
      </div>
    </div>
  )
}

export default AuthLayout
