import { FC, useState, useEffect } from 'react'
import Terminal from './Terminal/Terminal'

const DeviceContainers = [
    { name: 'Terminal 1', role: 'tool:main:lazer-cutter', state: true, seen: '2 Years Ago', id: '' },
    { name: 'Terminal 2', role: 'tool:metal:lathe', state: true, seen: '2 Years Ago', id: '' },
    { name: 'Terminal 3', role: 'tool:metal:cnc', state: true, seen: '2 Years Ago', id: '' },
    { name: 'Terminal 4', role: 'tool:metal:mill', state: true, seen: '2 Years Ago', id: '' },
    { name: 'Terminal 5', role: 'tool:wood:cnc', state: true, seen: '2 Years Ago', id: '' }
]

const Terminals: FC = () => {
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
        <div className='bg-body flex w-full flex-col'>
            {DeviceContainers.map((device) =>
                deviceIDs.includes(device.id) ? (
                    <Terminal
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
            <div className='mt-3'></div>
        </div>
    )
}

export default Terminals
