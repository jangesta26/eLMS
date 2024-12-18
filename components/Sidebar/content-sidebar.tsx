"use client"
import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import NavMain from "./nav-main"
import { CourseContentData } from "@/utils/courseContent"
import { Label } from "../ui/label"
import Image from "next/image"
import ContentNavMain from "./content-navMain"

export function ContentSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  
  return (
    <Sidebar variant="inset" {...props} className="px-0">
      <SidebarHeader className="border-0 md:border-r">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Image 
                    src="https://res.cloudinary.com/duwr4xret/image/upload/v1732217466/favicon-32x32_cygtrh.png"
                    alt="brand logo"
                    width={300}
                    height={300}
                    priority
                  />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">eLMS</span>
                  <Label className="text-sm">Course Content</Label>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="border-t border-r-0 md:border-r w-full pt-2">
        <ContentNavMain items={CourseContentData.navMain} />
      </SidebarContent>
      <SidebarFooter>
        {/* footer item */}
      </SidebarFooter>
    </Sidebar>
  )
}
