import { FC, useState, useEffect } from 'react'
import CondensedDevice from './CondensedDevice/CondensedDevice'
import { getDevices, updateDeviceState } from '../../../../localStorageUtils'

const CondensedDevices: FC = () => {
    const [devices, setDevices] = useState<any[]>([])

    const handleArm = async (id: string) => {
        await updateDeviceState(id)
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
