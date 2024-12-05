import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"/>
        <footer className="font-sans tracking-wide">
            <div className="py-5 px-4 text-center">
            <p className="text-primary text-md">Created by <Link href="https://jangesta26.vercel.app/" className='text-[#4a7dff] hover:underline'>Janell Gesta</Link></p>
                <p className="text-muted-foreground text-sm">© eLMS. All rights reserved.</p>
            </div>
        </footer>
    </>
  )
}

export default Footer
