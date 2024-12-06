"use client"
import { ChevronRight, type LucideIcon } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import { usePathname } from 'next/navigation';
import { Button } from "../ui/button";

const ContentNavMain = ({
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) => {
  const pathname = usePathname() as string;
  const segments = pathname.split('/').filter(Boolean);
console.log(segments[1])
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
            const itemUrlSegments = item.url.split('/').filter(Boolean);
            const isActive = itemUrlSegments[1] === segments[1] ? true : false
            return(
            <Collapsible key={item.title} asChild defaultOpen={isActive}>
                <SidebarMenuItem>
                <SidebarMenuButton 
                asChild 
                tooltip={item.title}
                className={`hover:cursor-pointer ${pathname === item.url ? 'bg-muted-foreground/10' : 'w-full'}`}
                >
                <Button 
                variant="ghost"
                className="flex px-0 py-0 w-full items-center justify-start "
                ><item.icon />
                <p>{item.title}</p>
                </Button>
                </SidebarMenuButton>
                {item.items?.length ? (
                    <>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuAction className="data-[state=open]:rotate-90">
                        {
                            item.isActive && <ChevronRight />
                        }
                        
                        <span className="sr-only">Toggle</span>
                        </SidebarMenuAction>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>

                        {item.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                                <a href={subItem.url}>
                                <span>{subItem.title}</span>
                                </a>
                            </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        ))}

                        </SidebarMenuSub>

                    </CollapsibleContent>
                    </>
                ) : null}
                </SidebarMenuItem>
            </Collapsible>
        )})}
      </SidebarMenu>
    </SidebarGroup>
  )
}
export default ContentNavMain
