import { Card } from '@/components/ui/card'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const BlogSection = () => {
  return (
    <Card className="rounded-2xl shadow-2xl font-sans">
        <div className="max-w-8xl mx-auto">
            <div className="text-center sm:flex sm:items-center sm:justify-between p-6">
                <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-blue-600 after:rounded-lg-full">Top Courses</h2>
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
                    <img src="https://readymadeui.com/images/food.webp" alt="Blog Post 1" className="w-full h-96 object-cover" />
                    <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
                    <span className="text-sm block text-gray-800 mb-2">10 FEB 2023 | BY JOHN DOE</span>
                    <h3 className="text-xl font-bold text-gray-800">Igniting Your Imagination</h3>
                    <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                        <p className="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                    </div>
                </div>
                <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                    <img src="https://readymadeui.com/images/food11.webp" alt="Blog Post 2" className="w-full h-96 object-cover" />
                    <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
                    <span className="text-sm block text-gray-800 mb-2">7 JUN 2023 | BY MARK ADAIR</span>
                    <h3 className="text-xl font-bold text-gray-800">Hacks to Supercharge Your Day</h3>
                    <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                        <p className="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                    </div>
                </div>
                <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                    <img src="https://readymadeui.com/images/food22.webp" alt="Blog Post 3" className="w-full h-96 object-cover" />
                    <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
                    <span className="text-sm block text-gray-800 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
                    <h3 className="text-xl font-bold text-gray-800">Trends and Predictions</h3>
                    <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                        <p className="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                    </div>
                    </div>
                </div>
                <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                    <img src="https://readymadeui.com/images/food33.webp" alt="Blog Post 3" className="w-full h-96 object-cover" />
                    <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
                    <span className="text-sm block text-gray-800 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
                    <h3 className="text-xl font-bold text-gray-800">Trends and Predictions</h3>
                    <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                        <p className="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
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
