'use client'
import { AppSidebar } from '@/components/Sidebar/app-sidebar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

import NavUser from '@/components/Sidebar/nav-user'
import ModeThemeSwitch from '@/components/Switch/ModeThemeSwitch'
import { usePathname } from 'next/navigation'
import Footer from '../Footer/Footer'

const DefaultLayout = ({ children }:{  children: React.ReactNode }) => {
  const pathname = usePathname() as string;
  const title = pathname?.split("/").filter(Boolean);
  const displayTitle = pathname === '/' ? 'Overview' : title[0]?.charAt(0).toUpperCase() + title[0]?.slice(1);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="shrink-0 border-b sticky">
          <div className='w-full flex items-center justify-between'>
            <div className="flex h-16 items-center gap-2 px-4">
              <SidebarTrigger 
              className="-ml-1"

              />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {/* <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" /> */}
                  <BreadcrumbItem>
                    <BreadcrumbPage className='text-xl font-bold'>{displayTitle}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
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
