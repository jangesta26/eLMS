import { Card } from '@/components/ui/card'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Label } from '../ui/label'
import { Badge } from '../ui/badge'

const BlogSection = () => {
  return (
    <Card className="rounded-2xl shadow-2xl font-sans">
        <div className="max-w-8xl mx-auto">
            <div className="text-center sm:flex sm:items-center sm:justify-between p-6">
                <h2 className="text-3xl font-extrabold text-primary inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-blue-600 after:rounded-lg-full">Top Courses</h2>
                <div className='sm:block hidden'>
                    <Link
                    href='#'
                    className='flex gap-1.5 items-center text-base hover:underline hover:cursor-pointer hover:text-blue-600 px-4 font-bold'
                    >
                    All Courses <MoveRight />
                    </Link>
                </div>
            </div>
            <hr className='w-full mt-4'/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-lg:max-w-3xl max-md:max-w-md mx-auto p-6">
                <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                    <Badge className='absolute left-2 top-2 py-1.5 bg-[#ff8800]/80'>SUMMER EVENTS</Badge>
                    <img src="https://readymadeui.com/images/food55.webp" alt="Blog Post 1" className="w-full h-96 object-cover" />
                    <div className="p-6 absolute bottom-0 left-0 right-0 bg-blue-200 opacity-90">
                    <span className="text-sm block text-gray-800 mb-2">10 FEB 2025 | BY Luis Mark</span>
                    <h3 className="text-xl font-bold text-gray-800">Mastering interaction design:From principle...</h3>
                    <div className="h-0 overflow-hidden group-hover:h-32 group-hover:mt-4 transition-all duration-300 overflow-y-auto xl:overflow-y-hidden space-y-1">
                        <p className="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                        <Label className='flex items-center gap-1.5 text-muted-foreground'>Level: <p className='text-md text-primary dark:text-black'>Beginner</p></Label>
                        <div className='flex items-center gap-x-1.5'>
                            <Badge variant="outline" className='border-primary rounded-sm text-primary hover:bg-primary hover:text-white dark:text-black'>FREE</Badge>
                            <Badge variant="outline" className='border-primary rounded-sm text-primary hover:bg-primary hover:text-white dark:text-black'>EVENT</Badge>
                            <Badge variant="outline" className='border-primary rounded-sm text-primary hover:bg-primary hover:text-white dark:text-black'>BEGINNER</Badge>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                    <img src="https://readymadeui.com/images/food11.webp" alt="Blog Post 2" className="w-full h-96 object-cover" />
                    <div className="p-6 absolute bottom-0 left-0 right-0 bg-blue-200 opacity-90">
                    <span className="text-sm block text-gray-800 mb-2">7 JUN 2023 | BY MARK ADAIR</span>
                    <h3 className="text-xl font-bold text-gray-800">Mastering interaction design:From principle...</h3>
                    <div className="h-0 overflow-hidden group-hover:h-32 group-hover:mt-4 transition-all duration-300 overflow-y-auto xl:overflow-y-hidden space-y-1">
                        <p className="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                        <Label className='flex items-center gap-1.5 text-muted-foreground'>Level: <p className='text-md text-primary dark:text-black'>Beginner</p></Label>
                        <div className='flex items-center gap-x-1.5'>
                            <Badge variant="outline" className='border-primary rounded-sm text-primary hover:bg-primary hover:text-white dark:text-black'>FREE</Badge>
                            <Badge variant="outline" className='border-primary rounded-sm text-primary hover:bg-primary hover:text-white dark:text-black'>EVENT</Badge>
                            <Badge variant="outline" className='border-primary rounded-sm text-primary hover:bg-primary hover:text-white dark:text-black '>BEGINNER</Badge>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                    <img src="https://readymadeui.com/images/food22.webp" alt="Blog Post 3" className="w-full h-96 object-cover" />
                    <div className="p-6 absolute bottom-0 left-0 right-0 bg-blue-200 opacity-90">
                    <span className="text-sm block text-gray-800 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
                    <h3 className="text-xl font-bold text-gray-800">Mastering interaction design:From principle...</h3>
                    <div className="h-0 overflow-hidden group-hover:h-32 group-hover:mt-4 transition-all duration-300 overflow-y-auto xl:overflow-y-hidden space-y-1">
                        <p className="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                        <Label className='flex items-center gap-1.5 text-muted-foreground'>Level: <p className='text-md text-primary dark:text-black'>Beginner</p></Label>
                        <div className='flex items-center gap-x-1.5'>
                            <Badge variant="outline" className='border-primary rounded-sm text-primary hover:bg-primary hover:text-white dark:text-black'>FREE</Badge>
                            <Badge variant="outline" className='border-primary rounded-sm text-primary hover:bg-primary hover:text-white dark:text-black'>EVENT</Badge>
                            <Badge variant="outline" className='border-primary rounded-sm text-primary hover:bg-primary hover:text-white dark:text-black'>BEGINNER</Badge>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                    <img src="https://readymadeui.com/images/food33.webp" alt="Blog Post 3" className="w-full h-96 object-cover" />
                    <div className="p-6 absolute bottom-0 left-0 right-0 bg-blue-200 opacity-90">
                    <span className="text-sm block text-gray-800 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
                    <h3 className="text-xl font-bold text-gray-800">Mastering interaction design:From principle...</h3>
                    <div className="h-0 overflow-hidden group-hover:h-32 group-hover:mt-4 transition-all duration-300 overflow-y-auto xl:overflow-y-hidden space-y-1">
                        <p className="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                        <Label className='flex items-center gap-1.5 text-muted-foreground'>Level: <p className='text-md text-primary dark:text-black'>Beginner</p></Label>
                        <div className='flex items-center gap-x-1.5'>
                            <Badge variant="outline" className='border-primary rounded-sm text-primary hover:bg-primary hover:text-white dark:text-black'>FREE</Badge>
                            <Badge variant="outline" className='border-primary rounded-sm text-primary hover:bg-primary hover:text-white dark:text-black'>EVENT</Badge>
                            <Badge variant="outline" className='border-primary rounded-sm text-primary hover:bg-primary hover:text-white dark:text-black'>BEGINNER</Badge>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='block sm:hidden mb-4'>
            <Link
            href='#'
            className='flex gap-1.5 items-center justify-center text-base hover:underline hover:cursor-pointer hover:text-blue-600 px-4 p-4 font-bold'
            >
            All Courses <MoveRight />
            </Link>
        </div>
    </Card>
  )
}

export default BlogSection
