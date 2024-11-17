import { FC } from 'react'

interface DeviceRolesProps {
    onRoleChange: (role: string) => void
    selectedRole: string
    id: string
}

const DeviceRoles: FC<DeviceRolesProps> = (props) => {
    const roles = [
        'tool:main:lazer-cutter',
        'tool:metal:cnc',
        'tool:metal:mill',
        'tool:metal:lathe',
        'tool:wood:cnc',
        'tool:wood:jointer-planer',
        'tool:wood:table-saw'
    ]

    return (
        <div className='font-teko mt-4 flex'>
            <span className='text-card-text-primary mr-16 text-xl font-semibold'>Roles:</span>
            <select
                className='flex-1 rounded-md text-lg'
                value={props.selectedRole}
                title='Roles'
                name={props.id}
                onChange={(e) => props.onRoleChange(e.target.value)}
            >
                {roles.map((role, index) => (
                    <option key={index} value={role}>
                        {role}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default DeviceRoles