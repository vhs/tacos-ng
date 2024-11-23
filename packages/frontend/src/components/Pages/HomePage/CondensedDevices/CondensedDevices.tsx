import { FC } from 'react'
import CondensedDevice from './CondensedDevice/CondensedDevice'

const CondensedDeviceContainers = [
    { name: 'Lazer Cutter', role: 'tool:main:lazer-cutter', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Metal CNC', role: 'tool:metal:cnc', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Mill', role: 'tool:metal:mill', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Lathe', role: 'tool:metal:lathe', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Wood CNC', role: 'tool:wood:cnc', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Jointer-Planer', role: 'tool:wood:jointer-planer', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Table Saw', role: 'tool:wood:table-saw', state: false, seen: '2 Years Ago', id: '' }
]

const CondensedDevices: FC = () => {
    return (
        <div className='bg-body flex w-full flex-col'>
            {CondensedDeviceContainers.map((device) => (
                <CondensedDevice
                    name={device.name}
                    role={device.role}
                    state={device.state}
                    seen={device.seen}
                    id={device.id}
                    key={device.id}
                />
            ))}
            <div className='mt-3'></div>
        </div>
    )
}

export default CondensedDevices
