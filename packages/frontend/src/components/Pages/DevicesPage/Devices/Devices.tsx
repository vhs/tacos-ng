import Device from './Device/Device'
import { useState, useEffect } from 'react'

const DeviceContainers = [
    { name: 'Lazer Cutter', role: 'tool:main:lazer-cutter', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Metal CNC', role: 'tool:metal:cnc', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Mill', role: 'tool:metal:mill', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Lathe', role: 'tool:metal:lathe', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Wood CNC', role: 'tool:wood:cnc', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Jointer-Planer', role: 'tool:wood:jointer-planer', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Table Saw', role: 'tool:wood:table-saw', state: false, seen: '2 Years Ago', id: '' }
]

export default function Devices() {
    const [deviceIDs, setDevicesIDs] = useState<string[]>([])

    const handleDelete = (id: string) => {
        setDevicesIDs((prevDeviceIDs) => prevDeviceIDs.filter((deviceID) => deviceID !== id))
    }

    const handleArm = (id: string) => {
        DeviceContainers.forEach((i) => {
            if (i.id === id) {
                i.state = !i.state
            }
        })
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
        <div className='bg-body w-full'>
            <div className='flex flex-col'>
                {DeviceContainers.map((device) =>
                    deviceIDs.includes(device.id) ? (
                        <Device
                            onDelete={handleDelete}
                            onArm={handleArm}
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
