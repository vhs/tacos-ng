import { FC } from 'react'
import DarkModeToggle from './DarkModeToggle/DarkModeToggle'

interface HeaderProps {
    text: string
}

const Header: FC<HeaderProps> = (props) => {
    return (
        <div className='bg-header-body flex justify-between py-2'>
            <div className='font-teko text-header-text ml-4 text-5xl font-bold underline'>{props.text}</div>
            <DarkModeToggle />
        </div>
    )
}

export default Header
