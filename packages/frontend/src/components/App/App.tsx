import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import MobileBar from '../MobileBar/MobileBar'
import Header from '../Header/Header'
//import SideBarVertical from '../SideBarVertical/SideBarVertical'

import HomePage from '../Pages/HomePage/HomePage'
import DevicesPage from '../Pages/DevicesPage/DevicesPage'
import TerminalsPage from '../Pages/TerminalsPage/TerminalsPage'
import LogsPage from '../Pages/LogsPage/LogsPage'

import { initializeMockData, getItem } from '../../localStorageUtils'

export function App() {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    const handleReize = () => {
        setIsMobile(window.matchMedia('(max-width: 640px)').matches)
    }

    useEffect(() => {
        const theme = getItem('dark-mode-key')
        const root = document.getElementById('root')
        if (root) {
            if (theme) {
                root.classList.add('dark')
                root.classList.remove('light')
            } else {
                root.classList.add('light')
                root.classList.remove('dark')
            }
        }
        initializeMockData()
        handleReize()
        window.addEventListener('resize', handleReize)
        return () => window.removeEventListener('resize', handleReize)
    }, [])

    return (
        <div>
            <Header />
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
