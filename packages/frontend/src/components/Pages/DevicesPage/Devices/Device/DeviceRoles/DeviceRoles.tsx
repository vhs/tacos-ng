import { FC } from 'react'

interface DeviceRolesProps {
    onRoleChange: (role: string) => void
    selectedRole: string
    id: string
}

const DeviceRoles: FC<DeviceRolesProps> = ({ onRoleChange, selectedRole, id }) => {
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
        <div className='font-teko mt-4 flex w-full justify-between'>
            <span className='text-card-text-primary mr-16 text-xl font-semibold'>Roles:</span>
            <select
                className='w-full max-w-[50%] rounded-md text-center text-lg'
                value={selectedRole}
                title='Roles'
                name={id.toString()}
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
