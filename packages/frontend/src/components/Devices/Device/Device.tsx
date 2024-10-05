import { FC, useState } from 'react'
import DeviceDescription from './DeviceDescription/DeviceDescription'
import DeviceRoles from './DeviceRoles/DeviceRoles'

const Device: FC = () => {
    const [selectedRole, setSelectedRole] = useState<string>('')

    return (
        <div className='m-3 h-[268px] rounded-xl bg-zinc-800 px-4 pb-4 pt-2 text-white'>
            <div className='font-teko text-3xl font-semibold'>Lazer Cutter</div>
            <DeviceDescription />
            <DeviceRoles selectedRole={selectedRole} onRoleChange={setSelectedRole} />
            <div className='flex justify-between'>
                <span className='font-teko font-semibold'>State:</span>
                <span className='font-teko'>Unarmed</span>
            </div>
            <div className='flex justify-between'>
                <span className='font-teko font-semibold'>Last Seen:</span>
                <span className='font-teko'>2 Years Ago</span>
            </div>
            <div className='flex justify-between'>
                <button
                    className='font-teko rounded-[4px] bg-red-500 px-2 py-1
                              font-semibold'
                >
                    Delete
                </button>
                <button
                    className='font-teko rounded-[4px] bg-cyan-500 px-2 py-1
                              font-semibold'
                >
                    Arm
                </button>
            </div>
        </div>
    )
}

export default Device
