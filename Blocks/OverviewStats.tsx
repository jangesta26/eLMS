import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { CalendarDays, HelpCircle, LibraryBig, Mail, Phone } from 'lucide-react'

const OverviewStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        <Card className="rounded-2xl shadow-xl p-6">
            <div className='flex items-center gap-4'>
                <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 w-14 h-14">
                    <CalendarDays className='text-slate-100 w-10 h-10'/>
                </div>
                <CardTitle className="text-lg font-semibold text-primary">My Exam Date</CardTitle>
            </div>
            <div className="mt-4 pl-2">
                <Button 
                className="text-lg font-semibold border-0 px-0 hover:bg-transparent text-blue-600 hover:underline"
                variant="ghost"
                >
                Set a date
                </Button>
                <p>December 8, 2024</p>
                <CardDescription >Time: 1:00 PM - 6:00 PM</CardDescription>
            </div>
        </Card>
        <Card className="rounded-2xl shadow-xl p-6">
        <div className='flex items-center gap-4'>
            <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-3 w-14 h-14">
            <Avatar className='h-[3.2rem] w-[3.2rem]'>
                <AvatarImage
                src='https://res.cloudinary.com/duwr4xret/image/upload/v1723469184/ul4jvquqthe70a1o0xqe.png'
                alt='Coach Profile'
                />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            </div>
        <CardTitle className="text-lg font-semibold text-primary">My Coach</CardTitle>
        </div>
        <div className="mt-4 pl-2">
            <p className="text-md text-primary font-semibold mt-2">John D. Doe</p>
            <p className="flex text-gray-600 text-sm mt-1.5 items-center gap-1 hover:underline hover:text-blue-600 hover:cursor-pointer">
            <Mail className='h-4'/>john.doe@example.com
            </p>
            <p className="flex text-gray-600 text-sm mt-1.5 items-center gap-1">
            <Phone className='h-4'/> +63 123 4567 890
            </p>
        </div>
        </Card>
        <Card className="rounded-2xl shadow-xl p-6">
        <div className='flex items-center gap-4'>
            <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 w-14 h-14">
                <LibraryBig className='text-slate-100 w-10 h-10'/>
            </div>
        <CardTitle className="text-lg font-semibold text-primary">Case Study</CardTitle>
        </div>
        <div className="mt-4 pl-2">
            <p className='text-lg font-semibold'>149</p>
            <CardDescription >Questions</CardDescription>
        </div>
        </Card>
        <Card className="rounded-2xl shadow-xl p-6">
        <div className='flex items-center gap-4'>
            <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 w-14 h-14">
                <HelpCircle className='text-slate-100 w-10 h-10'/>
            </div>
        <CardTitle className="text-lg font-semibold text-primary">Stand Alone</CardTitle>
        </div>
        <div className="mt-4 pl-2">
            <p className='text-lg font-semibold'>998</p>
            <CardDescription >Questions</CardDescription>
        </div>
        </Card>
    </div>
  )
}

export default OverviewStats
