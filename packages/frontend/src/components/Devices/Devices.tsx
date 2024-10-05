import Device from './Device/Device'
import './Devices.css'
import { useState } from 'react'

const DeviceContainers = [{}]

export default function Devices() {
    const [selectedRole, setSelectedRole] = useState<string>('')

    return (
        <div className='w-full px-4 pt-3'>
            <div className='flex flex-col'>
                <Device />
                <Device />
                <Device />
                <Device />
            </div>
        </div>
    )
}
