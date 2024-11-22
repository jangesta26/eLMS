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
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import NavUser from '@/components/Sidebar/nav-user'
import ModeThemeSwitch from '@/components/Switch/ModeThemeSwitch'
import { usePathname } from 'next/navigation'

const DefaultLayout = ({ children }:{  children: React.ReactNode }) => {
  const pathname = usePathname() as string;
  const titleFixedToShow = pathname === '/' 
    ? 'Overview' 
    : `${pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}`;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="shrink-0 border-b">
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
                    <BreadcrumbPage className='text-xl font-bold'>{titleFixedToShow}</BreadcrumbPage>
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
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DefaultLayout
