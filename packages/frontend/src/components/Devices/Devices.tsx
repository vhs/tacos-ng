import Device from './Device/Device'
import './Devices.css'
import { useState } from 'react'

const DeviceContainers = [{}]

export default function Devices() {
    const [selectedRole, setSelectedRole] = useState<string>('')

    return (
        <div className='flex flex-grow flex-col px-4 pt-3'>
            <div
                className='font-teko mb-4
                text-center text-5xl font-bold 
                text-white'
            >
                Devices
            </div>
            <div className='flex flex-row flex-wrap'>
                <Device />
                <Device />
                <Device />
                <Device />
            </div>
        </div>
    )
}
