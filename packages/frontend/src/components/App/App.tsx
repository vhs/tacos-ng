import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import MobileBar from '../MobileBar/MobileBar'
//import SideBarVertical from '../SideBarVertical/SideBarVertical'

import HomePage from '../Pages/HomePage/HomePage'
import DevicesPage from '../Pages/DevicesPage/DevicesPage'

export function App() {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    const handleReize = () => {
        setIsMobile(window.matchMedia('(max-width: 640px)').matches)
    }

    useEffect(() => {
        handleReize()
        window.addEventListener('resize', handleReize)
        return () => window.removeEventListener('resize', handleReize)
    }, [])

    return (
        <div className='bg-zinc-900'>
            {isMobile ? <MobileBar /> : <MobileBar />}
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/devices' element={<DevicesPage />} />
            </Routes>
        </div>
    )
}

export default App
