import { FC, useState, useEffect } from 'react'
import { FaMoon, FaS, FaSun } from 'react-icons/fa6'

const DarkModeToggle: FC = () => {
    const DM_KEY = 'dark-mode-key'
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedValue = localStorage.getItem(DM_KEY)
        return savedValue ? JSON.parse(savedValue) : true
    })

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

    useEffect(() => {
        localStorage.setItem(DM_KEY, JSON.stringify(isDarkMode))
    }, [isDarkMode])

    return (
        <div
            onClick={handleToggle}
            className={`bg-card flex h-11 w-20 items-center rounded-full border p-1 
            transition-colors duration-300 ${isDarkMode ? 'border-white' : 'border-black'}`}
        >
            <div
                className={`transiti on-transform flex h-7 w-7 items-center justify-center rounded-full bg-transparent duration-300
                ${isDarkMode ? 'translate-x-[44px]' : 'translate-x-0'}`}
            >
                {isDarkMode ? <FaMoon className='text-white' size={22} /> : <FaSun size={20} />}
            </div>
        </div>
    )
}

export default DarkModeToggle
