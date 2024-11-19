import Device from './Device/Device'
import { useState, useEffect } from 'react'
import { getDevices, toggleDeviceState, deleteDevice } from '../../../../localStorageUtils'

export default function Devices() {
    const [devices, setDevices] = useState<any[]>([])

    const handleArm = async (id: number) => {
        await toggleDeviceState(id)
        const updatedDevices = await getDevices()
        setDevices(updatedDevices)
    }

    const handleDelete = async (id: number) => {
        await deleteDevice(id)
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
    )
}
