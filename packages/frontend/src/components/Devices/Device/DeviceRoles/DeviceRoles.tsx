import { FC } from 'react'

interface DeviceRolesProps {
    selectedRole: string
    onRoleChange: (role: string) => void
}

const DeviceRoles: FC<DeviceRolesProps> = ({ selectedRole, onRoleChange }) => {
    const roles = [
        'tool:main:lazer-cutter',
        'tool:metal:cnc',
        'tool:metal:mill',
        'tool:metal:lathe',
        'tool:wood:cnc',
        'tool:wood:jointer-planer',
        'tool:wood:table-saw'
    ]
    console.log('Hello Roles')
    return (
        <div className='mt-4 flex'>
            <span className='font-teko mr-1 font-semibold'>Roles:</span>
            <select
                className='font-teko flex-1 rounded-md text-black'
                value={selectedRole}
                title='Roles'
                onChange={(e) => onRoleChange(e.target.value)}
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
