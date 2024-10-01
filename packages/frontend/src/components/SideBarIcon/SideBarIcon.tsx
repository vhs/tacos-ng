import React, { FC } from 'react'

interface SideBarIconProps {
    icon?: React.ReactNode
    text?: string
}

const SideBarIcon: FC<SideBarIconProps> = (props) => (
    <div className='flex items-center'>
        <div className='sidebar-icon'>
            {props.icon}
            <span className='sidebar-icon-text'>{props.text}</span>
            <span className='sidebar-tooltip'>{props.text}</span>
        </div>
    </div>
)

export default SideBarIcon
