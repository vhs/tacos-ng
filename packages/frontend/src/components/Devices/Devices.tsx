import Device from './Device/Device'
import './Devices.css'
import { useState, useEffect } from 'react'

const DeviceContainers = [
    { name: 'Lazer Cutter', role: 'tool:main:lazer-cutter', state: 'Unarmed', seen: '2 Years Ago', id: '' },
    { name: 'Metal CNC', role: 'tool:metal:cnc', state: 'Unarmed', seen: '2 Years Ago', id: '' },
    { name: 'Mill', role: 'tool:metal:mill', state: 'Unarmed', seen: '2 Years Ago', id: '' },
    { name: 'Lathe', role: 'tool:metal:lathe', state: 'Unarmed', seen: '2 Years Ago', id: '' },
    { name: 'Wood CNC', role: 'tool:wood:cnc', state: 'Unarmed', seen: '2 Years Ago', id: '' },
    { name: 'Jointer-Planer', role: 'tool:wood:jointer-planer', state: 'Unarmed', seen: '2 Years Ago', id: '' },
    { name: 'Table Saw', role: 'tool:wood:table-saw', state: 'Unarmed', seen: '2 Years Ago', id: '' }
]

export default function Devices() {
    const [deviceIDs, setDevicesIDs] = useState<string[]>([])

    const handleDelete = (id: string) => {
        setDevicesIDs((prevDeviceIDs) => prevDeviceIDs.filter((deviceID) => deviceID !== id))
    }

    const addDeviceID = (id: string) => {
        setDevicesIDs((prevDeviceIDs) => [...prevDeviceIDs, id])
    }

    useEffect(() => {
        DeviceContainers.forEach((i) => {
            i.id = crypto.randomUUID()
            addDeviceID(i.id)
        })
    }, [])

    return (
        <div className='w-full px-4'>
            <div className='flex flex-col'>
                {DeviceContainers.map((device) =>
                    deviceIDs.includes(device.id) ? (
                        <Device
                            onDelete={handleDelete}
                            name={device.name}
                            role={device.role}
                            state={device.state}
                            seen={device.seen}
                            id={device.id}
                            key={device.id}
                        />
                    ) : null
                )}
            </div>
        </div>
    )
}
