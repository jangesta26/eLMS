import SigninForm from '@/components/Form/SigninForm'
import React from 'react'

const SigninPage = () => {
  return (
    <div className="grid md:grid-cols-2 items-center gap-10 max-w-7xl w-full bg-card/95 p-6 px-8 rounded-xl shadow-2xl">
        <div>
            <h2 className="lg:text-5xl text-4xl font-extrabold lg:leading-[55px] text-gray-800">
            Seamless Login for eLMS
            </h2>
            <p className="text-sm mt-6 text-gray-800">Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account.</p>
            <p className="hidden sm:block text-sm mt-12 text-gray-800">Don't have an account <a href="/signup" className="text-blue-600 font-semibold hover:underline ml-1">Register here</a></p>
        </div>
        <SigninForm />
    </div>
  )
}

export default SigninPage
