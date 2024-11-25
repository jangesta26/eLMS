import OverviewStats from '@/components/Blocks/OverviewStats'
import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { AlarmClock } from 'lucide-react'
import React from 'react'


const MainPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div className="container mx-auto">
        <OverviewStats />
      </div>
      {/* Events*/}
      <div className="container mx-auto">
        <Card className="min-h-[100vh] flex-1 rounded-xl bg-card md:min-h-min p-6">
          <div className=' flex items-center justify-between'>
            <CardTitle>Events</CardTitle>
            <Badge variant="outline" className='flex border-0 py-1.5 items-center gap-0.5 text-md bg-[#ff8800]/10 text-[#ff8800]'>Remind <AlarmClock className='h-5'/></Badge>
          </div>
          <div className='mt-2 p-4'>
            <div className='w-full flex items-start gap-4'>
              <Label className='text-muted-foreground text-base font-semibold'>18 Dec</Label>
              <div className='flex-grow space-y-1.5 mx-auto'>
                <div className=' bg-slate-200 p-4 rounded-2xl dark:bg-slate-900'>
                  <div className='flex-wrap space-y-2 sm:flex items-center sm:gap-6 sm:space-y-0'>
                    <p className='flex-none text-muted-foreground text-sm'>8:00 AM - 9:00 AM</p>
                    <CardDescription className='flex-none text-base font-bold text-primary'>Hope Talk</CardDescription>
                    <div className='flex-grow lg:block hidden'>
                      <div className="flex -space-x-4 justify-end">
                        <img className="h-10 w-10 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-1.webp" alt="avatar" />
                        <img className="h-10 w-10 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-2.webp" alt="avatar" />
                        <img className="h-10 w-10 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-3.webp" alt="avatar" />
                        <img className="h-10 w-10 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-4.webp" alt="avatar" />
                        <div className='pl-4 flex items-center'>
                        <p className='className="h-10 w-10 rounded-full flex items-center font-semibold text-muted-foreground'>+5</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=' bg-slate-200 p-4 rounded-2xl dark:bg-slate-900'>
                  <div className='flex-wrap space-y-2 sm:flex items-center sm:gap-6 sm:space-y-0'>
                    <p className='flex-none text-muted-foreground text-sm'>10:00 AM - 12:00 PM</p>
                    <CardDescription className='flex-none text-base font-bold text-primary'>Webinar Law of Study</CardDescription>
                    <div className='flex-grow lg:block hidden'>
                      <div className="flex -space-x-4 justify-end">
                        <img className="h-10 w-10 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-1.webp" alt="avatar" />
                        <img className="h-10 w-10 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-2.webp" alt="avatar" />
                        <img className="h-10 w-10 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-3.webp" alt="avatar" />
                        <img className="h-10 w-10 rounded-full ring-2 ring-white inline-block" src="https://readymadeui.com/team-4.webp" alt="avatar" />
                        <div className='pl-4 flex items-center'>
                        <p className='className="h-10 w-10 rounded-full flex items-center font-semibold text-muted-foreground'>+5</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </Card>
      </div>
      {/* data table learning progress */}
      <div className="container mx-auto">
        <Card className="min-h-[100vh] flex-1 rounded-xl bg-card md:min-h-min p-6">
        Learning Progress
        </Card>
      </div>
    </div>
  )
}

export default MainPage

