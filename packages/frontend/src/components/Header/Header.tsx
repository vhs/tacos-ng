import { FC } from 'react'
import DarkModeToggle from './DarkModeToggle/DarkModeToggle'
import VHS from './logo.png'

const Header: FC = () => {
    return (
        <div className='bg-header-body p-2'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <img src={VHS} alt='VHS' className='mr-2 h-12 w-28'></img>
                    <div className='font-teko text-header-text text-6xl font-bold leading-[56px]'>TACOS</div>
                </div>
                <DarkModeToggle />
            </div>
        </div>
    )
}

export default Header
