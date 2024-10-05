import { FC, useState, useEffect } from 'react'
import { FaTools, FaDesktop } from 'react-icons/fa'
import { FaHouseChimney, FaCodepen, FaClipboardList } from 'react-icons/fa6'
import MobileBarIcon from './MobileBarIcon/MobileBarIcon'
import './MobileBar.css'

const SideBarIcons = [
    { icon: <FaHouseChimney size='32'></FaHouseChimney>, text: 'Home' },
    { icon: <FaCodepen size='32'></FaCodepen>, text: 'Devices' },
    { icon: <FaDesktop size='32'></FaDesktop>, text: 'Terminals' },
    {
        icon: <FaClipboardList size='32'></FaClipboardList>,
        text: 'Logs'
    }
]

const MobileBar: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true)
    const [lastScrollY, setLastScrollY] = useState<number>(0)

    useEffect(() => {
        const handleScroll = () => {
            const curScrollY = window.scrollY
            const maxScrollY = document.documentElement.scrollHeight - window.innerHeight

            if (curScrollY >= maxScrollY || curScrollY <= 0) {
                return
            }

            if (curScrollY > lastScrollY && curScrollY > 100) {
                setIsVisible(false)
            } else if (curScrollY < lastScrollY) {
                setIsVisible(true)
            }

            setLastScrollY(curScrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    return (
        <div className={`navbar ${!isVisible && 'navbar-collapsed'}`}>
            <div className='flex justify-between p-4'>
                {SideBarIcons.map((i) => (
                    <MobileBarIcon icon={i.icon} text={i.text} />
                ))}
            </div>
        </div>
    )
}

export default MobileBar
