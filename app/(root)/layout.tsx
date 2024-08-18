import LeftSidebar from '@/components/LeftSidebar'
import React from 'react'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>){

    return(
        <div>
        
            <main>
                <LeftSidebar />
                    {children}
                <p className='text-white-1'>Right Sidebar</p>
            </main>
        
        </div>
    )
    
}