import { FC, useState } from 'react'
import DeviceDescription from './DeviceDescription/DeviceDescription'
import DeviceRoles from './DeviceRoles/DeviceRoles'
import DeviceButton from './DeviceButton/DeviceButton'

interface DeviceProps {
    onDelete: (id: number) => void
    onArm: (id: number) => void
    name: string
    role: string
    state: boolean
    seen: string
    id: number
}

const Device: FC<DeviceProps> = (props) => {
    const [selectedRole, setSelectedRole] = useState<string>(props.role)

    return (
        <div className='bg-card m-3 mb-0 h-auto rounded-xl px-4 pb-4 pt-2'>
            <div className='text-card-text-primary font-teko mb-4 text-4xl font-semibold'>{props.name}</div>
            <DeviceDescription id={props.id} />
            <DeviceRoles onRoleChange={setSelectedRole} selectedRole={selectedRole} id={props.id} />
            <div className='text-card-text-primary font-teko mt-4 flex justify-between text-xl'>
                <span className='font-teko text-xl font-semibold'>State:</span>
                <span>{props.state ? 'Armed' : 'Unarmed'}</span>
            </div>
            <div className='text-card-text-primary font-teko mt-4 flex justify-between text-xl'>
                <span className='font-semibold'>Last Seen:</span>
                <span>{props.seen}</span>
            </div>
            <DeviceButton onDelete={props.onDelete} onArm={props.onArm} state={props.state} id={props.id} />
        </div>
    )
}

export default Device
