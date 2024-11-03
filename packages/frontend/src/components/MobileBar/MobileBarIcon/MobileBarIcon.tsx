import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface MobileBarIconProps {
    icon: React.ReactNode
    text: string
    path: string
}

const MobileBarIcon: FC<MobileBarIconProps> = ({ icon, text, path }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(path)
        console.log(location.pathname)
    }

    const isActive = location.pathname === path

    return (
        <div className={`navbar-button ${isActive ? 'text-lime-500' : 'text-white'}`} onClick={handleClick}>
            <div className='navbar-icon'>{icon}</div>
            <div className='navbar-icon-text'>{text}</div>
        </div>
    )
}

export default MobileBarIcon
