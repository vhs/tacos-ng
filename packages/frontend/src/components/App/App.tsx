import MobileBar from '../MobileBar/MobileBar'
import Devices from '../Devices/Devices'
import SideBarVertical from '../SideBarVertical/SideBarVertical'
import './App.css'
import { useState, useEffect } from 'react'

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
        <div className='flex bg-gray-800'>
            {isMobile ? <MobileBar /> : <MobileBar />}
            <Devices />
        </div>
    )
}

export default App
