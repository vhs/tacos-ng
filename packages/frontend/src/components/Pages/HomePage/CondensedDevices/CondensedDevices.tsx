import { FC, useState, useEffect } from 'react'
import CondensedDevice from './CondensedDevice/CondensedDevice'
import { getDevices, toggleDeviceState } from '../../../../localStorageUtils'

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
    const [devices, setDevices] = useState<any[]>([])

    const handleArm = async (id: number) => {
        await toggleDeviceState(id)
        const updatedDevices = await getDevices()
        setDevices(updatedDevices)
    }

    useEffect(() => {
        const fetchDevices = async () => {
            const data = await getDevices()
            setDevices(data)
        }

        fetchDevices()
    }, [])

    return (
        <div className='bg-body flex w-full flex-col'>
            {devices.map((device) =>
                device.show ? (
                    <CondensedDevice
                        onArm={handleArm}
                        name={device.name}
                        state={device.state}
                        seen={device.seen}
                        id={device.id}
                        key={device.id}
                    />
                ) : null
            )}
        </div>
    )
}

export default CondensedDevices
