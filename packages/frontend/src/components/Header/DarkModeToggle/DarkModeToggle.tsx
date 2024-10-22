import { FC, useState } from 'react'

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
            className={`flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-200 p-1 transition-colors duration-300 ${
                isDarkMode ? 'bg-blue-600' : 'bg-gray-200'
            }`}
        >
            <div
                className={`h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
                    isDarkMode ? 'translate-x-5' : 'translate-x-0'
                }`}
            ></div>
        </div>
    )
}

export default DarkModeToggle
