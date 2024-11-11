import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface MobileBarIconProps {
    icon: React.ReactNode
    text: string
    path: string
}

const MobileBarIcon: FC<MobileBarIconProps> = ({ icon, text, path }) => {
    const navigate = useNavigate()
    const isActive = location.pathname === path

    const handleClick = () => {
        navigate(path)
        console.log(location.pathname)
    }

    return (
        <div
            className={`navbar-button ${isActive ? 'text-mobile-bar-icon-active' : 'text-mobile-bar-icon-inactive'}`}
            onClick={handleClick}
        >
            <div className='navbar-icon'>{icon}</div>
            <div className='navbar-icon-text'>{text}</div>
        </div>
    )
}

export default MobileBarIcon
