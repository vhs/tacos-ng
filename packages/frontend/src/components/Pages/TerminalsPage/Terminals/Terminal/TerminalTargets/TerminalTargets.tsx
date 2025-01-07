import { FC } from 'react'

interface TerminalTargetsProps {
    onRoleChange: (role: string) => void
    selectedRole: string
    id: string
}

const TerminalTargets: FC<TerminalTargetsProps> = (props) => {
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
            <span className='text-card-text-primary text-xl font-semibold'>Target:</span>
            <select
                className='w-full max-w-[50%] rounded-md text-center text-lg'
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

export default TerminalTargets
