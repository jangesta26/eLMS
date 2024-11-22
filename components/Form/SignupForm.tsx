'use client'
import React, { useState } from 'react'

const SignupForm = () => {
    const [eyeOpen, setEyeOpen] = useState(false);

    const handleChangeEyeOpen = () => {
        setEyeOpen(!eyeOpen)
    }
  return (
    <form className="max-w-lg w-full mx-auto">
        <div className="mb-12 space-y-2">
            <h3 className="text-gray-800 md:text-3xl text-2xl font-extrabold max-md:text-center">Create an account</h3>
            <p className='text-muted-foreground'>Create a new account by filling out the form below.</p>
        </div>
        <div>
        <label className="text-gray-800 text-xs block mb-2">Full Name</label>
        <div className="relative flex items-center">
            <input name="name" type="text" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter name" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
            <circle cx={10} cy={7} r={6} data-original="#000000" />
            <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000" />
            </svg>
        </div>
        </div>
        <div className="mt-6">
        <label className="text-gray-800 text-xs block mb-2">Email</label>
        <div className="relative flex items-center">
            <input name="email" type="text" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter email" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
            <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                <path d="M0 512h512V0H0Z" data-original="#000000" />
                </clipPath>
            </defs>
            <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                <path fill="none" strokeMiterlimit={10} strokeWidth={40} d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000" />
                <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000" />
            </g>
            </svg>
        </div>
        </div>
        <div className="mt-6">
        <label className="text-gray-800 text-xs block mb-2">Password</label>
        <div className="relative flex items-center">
            <input 
            name="password" 
            type={ eyeOpen ? 'text' : 'password'}
            required 
            className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" 
            placeholder="Enter password" />
            <button
             onClick={handleChangeEyeOpen} 
            >
            {
                eyeOpen ? (
                    <>
                    <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000" />
                    </svg>
                    </>
                ) : (
                     <>
                    <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 48 48"><path d="M45.3,22.1C43.2,19.5,35.4,11,24,11a23.4,23.4,0,0,0-3.8.3L23.8,15H24c8.8,0,15.3,6.2,17.7,9a33.7,33.7,0,0,1-4.6,4.3l2.8,2.8a30.1,30.1,0,0,0,5.4-5.2A3,3,0,0,0,45.3,22.1Z"></path> <path d="M29.4,26.6A5.8,5.8,0,0,0,30,24a6,6,0,0,0-6-6,5.8,5.8,0,0,0-2.6.6L9.7,6.9A2,2,0,0,0,6.9,9.7l4.7,4.8a32.1,32.1,0,0,0-8.9,7.6,3,3,0,0,0,0,3.8C4.8,28.5,12.6,37,24,37a23,23,0,0,0,8.5-1.6l5.8,5.7a2,2,0,1,0,2.8-2.8ZM24,33c-8.8,0-15.3-6.2-17.7-9a29.7,29.7,0,0,1,8.3-6.6l4,4A5.8,5.8,0,0,0,18,24a6,6,0,0,0,6,6,5.8,5.8,0,0,0,2.6-.6l2.8,2.8A19.1,19.1,0,0,1,24,33Z"></path></svg>

                     </>   
                )
            }

            </button>
        </div>
        </div>
        <div className="flex items-center mt-6">
        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
        <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
            I accept the <a href="#" className="text-blue-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
        </label>
        </div>
        <div className="mt-12">
        <button type="button" className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-primary/95 hover:bg-primary text-white focus:outline-none">
            Creat an account
        </button>
        <p className="text-sm mt-6 text-gray-800">Already have an account? <a href="/signin" className="text-blue-500 font-semibold hover:underline ml-1">Login here</a></p>
        </div>
    </form>
  )
}

export default SignupForm
