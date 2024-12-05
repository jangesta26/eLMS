import { Card } from '@/components/ui/card'
import React from 'react'

const ContentSection = () => {
  return (
    <Card className="font-sans bg-card p-4 rounded-2xl shadow-2xl">
        <div className="md:max-w-5xl max-w-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
            <div className="text-left">
            <h2 className="text-primary text-2xl font-bold mb-4">Explore are courses</h2>
            <p className="mb-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis in bibendum tincidunt.</p>
            <p className="text-sm text-gray-500">Nulla facilisi. Vestibulum fringilla leo et purus consectetur, vel tincidunt dolor rhoncus. In hac habitasse platea dictumst. Fusce vel sodales elit. Suspendisse potenti. Sed eget consequat nisi.</p>
            <button type="button" className="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700">Read More...</button>
            </div>
            <div className="max-h-72">
            <img src="https://readymadeui.com/management-img.webp" alt="Placeholder Image" className="rounded-lg object-contain w-full h-full" />
            </div>
        </div>
        </div>
  </Card>
  )
}

export default ContentSection
