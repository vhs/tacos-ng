import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import MobileBar from '../MobileBar/MobileBar'
//import SideBarVertical from '../SideBarVertical/SideBarVertical'

import HomePage from '../Pages/HomePage/HomePage'
import DevicesPage from '../Pages/DevicesPage/DevicesPage'
import TerminalsPage from '../Pages/TerminalsPage/TerminalsPage'
import LogsPage from '../Pages/LogsPage/LogsPage'

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
        <div>
            {isMobile ? <MobileBar /> : <MobileBar />}
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/devices' element={<DevicesPage />} />
                <Route path='/terminals' element={<TerminalsPage />} />
                <Route path='/logs' element={<LogsPage />} />
            </Routes>
        </div>
    )
}

export default App
