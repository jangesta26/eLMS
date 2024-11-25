import React from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

const SearchInput = () => {
  return (
    <div className="relative lg:w-1/2">
      {/* The Search icon */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search className="text-muted-foreground" />
        </div>
        
        <Input 
        placeholder="Search..."
        className="pl-10 rounded-full h-14"
        />
    </div>
  )
}

export default SearchInput
