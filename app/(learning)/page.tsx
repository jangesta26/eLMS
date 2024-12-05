import EventsAnnouncement from '@/components/Blocks/EventsAnnouncement'
import OverviewStats from '@/components/Blocks/OverviewStats'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'


const MainPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div className="container mx-auto">
        <OverviewStats />
      </div>
      {/* Events*/}
      <div className="container mx-auto">
        <EventsAnnouncement />
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

