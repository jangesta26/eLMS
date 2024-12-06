import React from 'react'
import { Card } from '../ui/card'
import Link from 'next/link'
import { allCategoryCourse } from '@/data/allCategoryCourse'
import Image from 'next/image'

const CourseListSection = () => {
  return (
    <div className="container mx-auto">
        <div className="lg:max-w-6xl max-w-xl mx-auto p-4">
            <h2 className="text-gray-800 text-3xl font-extrabold text-center">Best Course</h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-md:justify-center mt-12">
                {allCategoryCourse.map((item) => (
                    <Link key={item.id} href={`/view/${item.pathname}/${item.id}`} className='hover:cursor-pointer'>
                        <Card className="relative before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-40 before:z-10 shadow-transparent rounded-lg overflow-hidden hover:scale-[1.02] transition-all">
                            <div className='flex items-center justify-center max-xl:flex-col gap-4 h-60'>
                                <Image 
                                src={item.imgUrl}
                                alt={`${item.title} ${item.id}`}
                                width={300}
                                height={300}
                                className="absolute w-full h-full object-cover"
                                />
                                <h4 className="relative z-50 bg-card/50 text-primary rounded-sm text-xl xl:text-4xl text-center font-bold p-4">{item.title}</h4>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    </div>

  )
}

export default CourseListSection
