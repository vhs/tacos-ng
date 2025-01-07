import { FC, useState, useEffect } from 'react'
import { FaDesktop } from 'react-icons/fa'
import { FaHouseChimney, FaCodepen, FaClipboardList } from 'react-icons/fa6'
import MobileBarIcon from './MobileBarIcon/MobileBarIcon'
import './MobileBar.css'

const MobileBar: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true)
    const [lastScrollY, setLastScrollY] = useState<number>(0)

    const SideBarIcons = [
        {
            icon: <FaHouseChimney size='32'></FaHouseChimney>,
            text: 'Home',
            path: '/'
        },
        {
            icon: <FaCodepen size='32'></FaCodepen>,
            text: 'Devices',
            path: '/devices'
        },
        {
            icon: <FaDesktop size='32'></FaDesktop>,
            text: 'Terminals',
            path: '/terminals'
        },
        {
            icon: <FaClipboardList size='32'></FaClipboardList>,
            text: 'Logs',
            path: '/logs'
        }
    ]

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
                    <MobileBarIcon icon={i.icon} text={i.text} path={i.path} key={crypto.randomUUID()} />
                ))}
            </div>
        </div>
    )
}

export default MobileBar
