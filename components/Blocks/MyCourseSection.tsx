import Image from 'next/image'
import React from 'react'
import { Card } from '../ui/card'
import { allSubject } from '@/data/allSubjectData'
import Link from 'next/link'


const MyCourseSection = () => {
  return (
    <div className="p-4 mt-8">
        <div className="max-w-6xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
            <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-extrabold text-primary mb-12 text-center leading-10">Enroll Subjects</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
                { allSubject.map((item) => (
                    <Card key={item.id} className="rounded-t-3xl overflow-hidden border-0 shadow-transparent">
                        <Image 
                        src={item.imgUrl}
                        width={300}
                        height={300}
                        alt={`${item.title} ${item.id}`} 
                        className="w-full h-52 object-cover" />
                        <div className="p-6">
                        <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                        <p className="text-gray-500 text-sm">{item.description}</p>
                        <p className="text-primary text-[13px] font-semibold mt-4">{item.date}</p>
                        <Link href={`/course-content/${item.id}`} className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-primary hover:bg-primary/90 text-white dark:text-zinc-950 text-[13px]">Start</Link>
                        </div>
                    </Card>
                    ))}
            
            </div>
        </div>
    </div>

  )
}

export default MyCourseSection
