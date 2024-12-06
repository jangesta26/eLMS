'use client'
import { AppSidebar } from '@/components/Sidebar/app-sidebar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

import NavUser from '@/components/Sidebar/nav-user'
import ModeThemeSwitch from '@/components/Switch/ModeThemeSwitch'
import Footer from '../Footer/Footer'

const DefaultLayout = ({ children }:{  children: React.ReactNode }) => {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="shrink-0 border-b sticky">
          <div className='w-full flex items-center justify-between'>
            <div className="flex h-16 items-center gap-2">
              <SidebarTrigger 
              className="sm:bg-primary sm:rounded-r-full hover:bg-primary"
              />
            </div>
            <div className='flex items-center px-5'>
              <NavUser 
                name="Francis M."
                email="m@example.com"
                avatarUrl="https://res.cloudinary.com/duwr4xret/image/upload/v1723572354/k1tmrz0t9m453pqnfiu0.png"
              />
              <ModeThemeSwitch />
            </div>
          </div>
        </header>
          {children}
          <Footer />
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DefaultLayout
