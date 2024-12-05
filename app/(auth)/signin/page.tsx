import SigninForm from '@/components/Form/SigninForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SigninPage = () => {
  return (
    <div className="grid md:grid-cols-2 items-center gap-8 max-w-5xl w-full bg-card/95 p-6 px-8 rounded-xl shadow-2xl">
        <div className='mt-0'>
            <h2 className="lg:text-5xl text-4xl font-extrabold lg:leading-[55px] text-gray-800">
              Let's Sign you in eLMS
            </h2>
            <p className="text-sm mt-6 text-gray-800">
              By joining you agree the System logo eLMS {" "}
              <Link href="#" className='underline hover:text-blue-600 font-semibold'>
              Terms of service
              </Link>.
            </p>
            <p className="hidden sm:block text-sm mt-12 text-gray-800">Don't have an account <a href="/signup" className="text-blue-600 font-semibold hover:underline ml-1">Register here</a></p>
        </div>
        <SigninForm />
    </div>
  )
}

export default SigninPage
