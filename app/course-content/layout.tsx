import ContentLayout from '@/components/Layout/ContentLayout'
import React from 'react'

const CourseContentLayout = ({ children }:{  children: React.ReactNode }) => {
  return (
    <ContentLayout>
      {children}
    </ContentLayout>
  )
}

export default CourseContentLayout
