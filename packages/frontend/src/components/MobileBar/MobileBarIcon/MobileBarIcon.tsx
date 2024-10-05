import React, { FC } from 'react'

interface MobileBarIconProps {
    icon?: React.ReactNode
    text?: string
}

const MobileBarIcon: FC<MobileBarIconProps> = (props) => (
    <div className='navbar-button'>
        <div className='navbar-icon'>{props.icon}</div>
        <div className='navbar-icon-text'>{props.text}</div>
    </div>
)

export default MobileBarIcon
