import { FC, useState } from 'react'
import TerminalField from './TerminalField/TerminalField'
import TerminalTargets from './TerminalTargets/TerminalTargets'

interface TerminalProps {
    onDelete: (id: string) => void
    onArm?: (id: string) => void
    name: string
    role: string
    state: boolean
    seen: string
    id: string
    windowWidth: number
}

const Terminal: FC<TerminalProps> = ({ onDelete, onArm, name, role, state, seen, id, windowWidth }) => {
    const [selectedRole, setSelectedRole] = useState<string>(role)
    const [enabled, setEnabled] = useState<boolean>(false)

    return (
        <div className='bg-card m-3 mb-0 h-auto rounded-xl px-4 pb-4 pt-2'>
            <div className='text-card-text-primary font-teko text-4xl font-semibold'>{name}</div>
            <TerminalField label='Description' id={id} type='text' windowWidth={windowWidth} />
            <div className='font-teko text-card-text-primary mt-4 flex justify-between text-xl font-semibold'>
                <label className='mr-16' htmlFor={'termcheck' + id}>
                    Enabled:
                </label>
                <div className='flex'>
                    <input
                        className='size-6'
                        type='checkbox'
                        id={'termcheck' + id}
                        title='check'
                        onChange={() => {
                            setEnabled(!enabled)
                        }}
                    />
                    <div className='ml-2'>{enabled ? 'Enabled' : 'Disabled'}</div>
                </div>
            </div>
            <TerminalTargets onRoleChange={setSelectedRole} selectedRole={selectedRole} id={id} />
            <div className='text-card-text-primary font-teko mt-4 flex justify-between text-xl'>
                <span className='font-teko text-xl font-semibold'>Secure:</span>
                <span>{state ? 'Secured' : 'Unsecured'}</span>
            </div>
            <TerminalField label='Secret' id={id} type='password' windowWidth={windowWidth} />
            <div className='text-card-text-primary font-teko mt-4 flex justify-between text-xl'>
                <span className='font-semibold'>Last Seen:</span>
                <span>{seen}</span>
            </div>
            <div className='flex justify-center'>
                <button
                    className='bg-card-delete font-teko w-24 rounded-[4px] px-2 pt-1 text-3xl font-semibold'
                    onClick={() => onDelete(id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Terminal
