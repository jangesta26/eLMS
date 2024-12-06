import BlogSection from '@/components/Blocks/BlogSection'
import ContentSection from '@/components/Blocks/ContentSection'
import SearchInput from '@/components/Input/SearchInput'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import React from 'react'

const AllCategoryCoursePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div className="container mx-auto">
        <div className='w-full flex flex-wrap-reverse items-center justify-center gap-4 lg:flex lg:items-center lg:justify-between'>
          <SearchInput />
          <Button
          className='flex items-center rounded-xl text-md dark:bg-[#ff8800] h-12 lg:w-2/2'
          >
            Join Bootcamp
            <Badge className='bg-[#ff8800] text-primary dark:bg-slate-900 h-8'>20% off</Badge>
          </Button>
        </div>
      </div>
      {/*Content Section  */}
      <div className="container mx-auto mt-10">
        <ContentSection />
      </div>
      {/* Blog Section */}
      <div className='container mx-auto mt-10'>
        <BlogSection />
      </div>
    </div>
  )
}

export default AllCategoryCoursePage
