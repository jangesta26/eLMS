'use client'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"


import NavUser from '@/components/Sidebar/nav-user'
import ModeThemeSwitch from '@/components/Switch/ModeThemeSwitch'
import { ContentSidebar } from '../Sidebar/content-sidebar'
import { ChevronsLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import Footer from "../Footer/Footer"

const ContentLayout = ({ children }:{  children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <SidebarProvider>
      <ContentSidebar />
      <SidebarInset>
        <header className="shrink-0 border-b sticky">
          <div className='w-full flex items-center justify-between pl-4  p-2 '>
            <div className="flex items-center">
            <SidebarTrigger 
                className="block sm:hidden"

              />
              <Button 
              variant="outline"
              className="flex items-center px-2 py-2"
              onClick={()=>router.push("/my-course")}
              >
                <ChevronsLeft 
                className="h-10 w-10"
                />
              </Button>
            </div>
            <div className='flex items-center px-1.5'>
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

export default ContentLayout
