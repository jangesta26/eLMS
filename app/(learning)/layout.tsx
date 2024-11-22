import React from 'react'
import DefaultLayout from '@/components/Layout/DefaultLayout'

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  )
}

export default MainLayout
