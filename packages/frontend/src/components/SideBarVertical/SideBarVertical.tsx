import { useState } from 'react'
import { FaAngleLeft, FaAngleRight, FaHome, FaTools, FaDesktop, FaClipboardList } from 'react-icons/fa'
import SideBarIcon from '../SideBarIcon/SideBarIcon'

const SideBarIcons = [
    { icon: <FaHome size='32'></FaHome>, text: 'Dashboard' },
    { icon: <FaTools size='26'></FaTools>, text: 'Devices' },
    { icon: <FaDesktop size='28'></FaDesktop>, text: 'Terminals' },
    {
        icon: <FaClipboardList size='28'></FaClipboardList>,
        text: 'Logs'
    }
]

export function SideBarVertical() {
    const [isExpanded, setIsExpanded] = useState(true);
    return (
        <div className={`sidebar ${!isExpanded && 'sidebar-collapsed'}`}>
            <div className='sidebar-header'>TACOS</div>
            <div className='mt-3'>
                {SideBarIcons.map((i) => (
                    <SideBarIcon icon={i.icon} text={i.text} />
                ))}
            </div>
            <div
                onClick={() => {
                    setIsExpanded(!isExpanded)
                }}
                className='sidebar-expand-button'
            >
                {isExpanded ? <FaAngleLeft size='20'></FaAngleLeft> : <FaAngleRight size='20'></FaAngleRight>}
            </div>
        </div >
    )
}
