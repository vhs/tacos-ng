import { FC, useState } from 'react'
import DeviceDescription from './DeviceDescription/DeviceDescription'
import DeviceRoles from './DeviceRoles/DeviceRoles'
import DeviceButton from './DeviceButton/DeviceButton'

interface DeviceProps {
    onDelete: (id: string) => void
    onArm: (id: string) => void
    onDescriptionUpdate: (id: string, text: string) => void
    name: string
    description: string
    role: string
    state: boolean
    seen: string
    id: string
}

const Device: FC<DeviceProps> = ({
    onDelete,
    onArm,
    onDescriptionUpdate,
    name,
    description,
    role,
    state,
    seen,
    id
}) => {
    const [selectedRole, setSelectedRole] = useState<string>(role)

    return (
        <div className='bg-card m-3 mb-0 h-auto rounded-xl px-4 pb-4 pt-2'>
            <div className='text-card-text-primary font-teko mb-4 text-4xl font-semibold'>{name}</div>
            <DeviceDescription onFieldSave={onDescriptionUpdate} field={description} uuid={id + '1'} id={id} />
            <DeviceRoles onRoleChange={setSelectedRole} selectedRole={selectedRole} id={id} />
            <div className='text-card-text-primary font-teko mt-4 flex justify-between text-xl'>
                <span className='font-teko text-xl font-semibold'>State:</span>
                <span>{state ? 'Armed' : 'Unarmed'}</span>
            </div>
            <div className='text-card-text-primary font-teko mt-4 flex justify-between text-xl'>
                <span className='font-semibold'>Last Seen:</span>
                <span>{seen}</span>
            </div>
            <DeviceButton onDelete={onDelete} onArm={onArm} state={state} id={id} />
        </div>
    )
}

export default Device
