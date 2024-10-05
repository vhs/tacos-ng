import { FC, useState } from 'react'
import { FaAngleLeft, FaAngleRight, FaHome, FaTools, FaDesktop, FaClipboardList } from 'react-icons/fa'
import MobileBarIcon from './MobileBarIcon/MobileBarIcon'
import './MobileBar.css'

const SideBarIcons = [
    { icon: <FaHome size='32'></FaHome>, text: 'Dashboard' },
    { icon: <FaTools size='26'></FaTools>, text: 'Devices' },
    { icon: <FaDesktop size='28'></FaDesktop>, text: 'Terminals' },
    {
        icon: <FaClipboardList size='28'></FaClipboardList>,
        text: 'Logs'
    }
]

const MobileBar: FC = () => {
    const [isExpanded, setIsExpanded] = useState(true)
    return (
        <div className={`sidebar-v ${!isExpanded && 'sidebar-v-collapsed'}`}>
            <div className='sidebar-v-header'>Mobey</div>
            <div className='mt-3'>
                {SideBarIcons.map((i) => (
                    <MobileBarIcon icon={i.icon} text={i.text} />
                ))}
            </div>
            <div
                onClick={() => {
                    setIsExpanded(!isExpanded)
                }}
                className='sidebar-v-expand-button'
            >
                {isExpanded ? <FaAngleLeft size='20'></FaAngleLeft> : <FaAngleRight size='20'></FaAngleRight>}
            </div>
        </div>
    )
}

export default MobileBar
