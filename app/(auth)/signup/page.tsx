import SignupForm from '@/components/Form/SignupForm'
import React from 'react'

const SignupPage = () => {

  return (
    <div className="grid md:grid-cols-2 items-center gap-10 max-w-7xl w-full bg-card/95 p-6 px-8 rounded-xl shadow-2xl">
        <div className="max-md:order-1 p-4">
        <img src="https://res.cloudinary.com/duwr4xret/image/upload/v1732297972/5-made-easy-scaled_zlfjgg.jpg" className="lg:max-w-[100%] w-full h-full object-contain block rounded-xl" alt="login-image" />
        </div>
        <div className="flex items-center p-6 h-full w-full">
            <SignupForm />
        </div>
    </div>
  )
}

export default SignupPage
