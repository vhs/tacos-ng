import React, { FC } from 'react'

interface MobileBarIconProps {
    icon?: React.ReactNode
    text?: string
}

const MobileBarIcon: FC<MobileBarIconProps> = (props) => (
    <div className='flex items-center'>
        <div className='sidebar-v-icon'>
            {props.icon}
            <span className='sidebar-v-icon-text'>{props.text}</span>
            <span className='sidebar-v-tooltip'>{props.text}</span>
        </div>
    </div>
)

export default MobileBarIcon
