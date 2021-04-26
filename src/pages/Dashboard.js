import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Timeline from '../components/Timeline'
import Header from '../components/Header'

export default function Dashboard() {

    useEffect(() => {
        document.title = 'Instagram'
        }, [])

    return (
        <div className ='bg-gray-background' >
          <Header /> 
            <div className='grid  grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg' >
                 <Timeline /> 
               <Sidebar /> 
            </div>
        </div>
    )
}
