import { FC, useState } from 'react'
import { FaMoon, FaS, FaSun } from 'react-icons/fa6'

const DarkModeToggle: FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode)
        if (!isDarkMode) {
            document.getElementById('root')?.classList.add('dark')
            document.getElementById('root')?.classList.remove('light')
        } else {
            document.getElementById('root')?.classList.add('light')
            document.getElementById('root')?.classList.remove('dark')
        }
    }

    return (
        <div
            onClick={handleToggle}
            className='bg-card flex h-11 w-20 items-center rounded-full p-1 transition-colors duration-300'
        >
            <div
                className={`flex h-7 w-7 items-center justify-center rounded-full bg-transparent transition-transform duration-300
                ${isDarkMode ? 'translate-x-[44px]' : 'translate-x-0'}`}
            >
                {isDarkMode ? <FaMoon className='text-white' size={22} /> : <FaSun size={20} />}
            </div>
        </div>
    )
}

export default DarkModeToggle
