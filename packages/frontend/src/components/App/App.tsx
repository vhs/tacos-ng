import { useState, useEffect } from 'react'
import './App.css'
import MobileBar from '../MobileBar/MobileBar'
import Devices from '../Devices/Devices'
import Header from '../Header/Header'
import SideBarVertical from '../SideBarVertical/SideBarVertical'

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
            <Header />
            <Devices />
        </div>
    )
}

export default App
