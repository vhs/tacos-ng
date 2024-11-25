import { FC, useState } from 'react'
import TerminalField from './TerminalField/TerminalField'
import TerminalTargets from './TerminalTargets/TerminalTargets'

interface TerminalProps {
    onDelete: (id: string) => void
    onEnable: (id: string) => void
    onDescriptionUpdate: (id: string, text: string) => void
    onSecretUpdate: (id: string, text: string) => void
    name: string
    description: string
    target: string
    state: boolean
    secret: string
    seen: string
    id: string
}

const Terminal: FC<TerminalProps> = ({
    onDelete,
    onEnable,
    onDescriptionUpdate,
    onSecretUpdate,
    description,
    name,
    target,
    state,
    secret,
    seen,
    id
}) => {
    const [selectedRole, setSelectedRole] = useState<string>(target)
    const [isEnabled, setIsEnabled] = useState<boolean>(true)
    const [deleting, setDeleting] = useState<boolean>(false)
    const [enabling, setEnabling] = useState<boolean>(false)

    return (
        <div className='bg-card m-3 mb-0 h-auto rounded-xl px-4 pb-4 pt-2'>
            <div className='text-card-text-primary font-teko text-4xl font-semibold'>{name}</div>
            <TerminalField
                onFieldSave={onDescriptionUpdate}
                field={description}
                label='Description'
                uuid={id + '1'}
                type='text'
                id={id}
            />
            <div className='font-teko text-card-text-primary mt-4 flex justify-between text-xl font-semibold'>
                <label className='mr-16' htmlFor={'termcheck' + id}>
                    Enabled:
                </label>
                <div className='flex'>
                    <input
                        className='size-6'
                        type='checkbox'
                        checked={isEnabled}
                        id={'termcheck' + id}
                        title='check'
                        onChange={async () => {
                            if (enabling || deleting) return
                            setEnabling(true)
                            await onEnable(id)
                            setIsEnabled(!isEnabled)
                            setEnabling(false)
                        }}
                    />
                    <div className='ml-2'>
                        {enabling ? (
                            <div className='mx-auto mb-1 h-6 w-6 animate-spin rounded-full border-[3px] border-white border-t-transparent'></div>
                        ) : isEnabled ? (
                            'Enabled'
                        ) : (
                            'Disabled'
                        )}
                    </div>
                </div>
            </div>
            <TerminalTargets onRoleChange={setSelectedRole} selectedRole={selectedRole} id={id} />
            <div className='text-card-text-primary font-teko mt-4 flex justify-between text-xl'>
                <span className='font-semibold'>Secure:</span>
                <span>{state ? 'Secured' : 'Unsecured'}</span>
            </div>
            <TerminalField
                onFieldSave={onSecretUpdate}
                field={secret}
                label='Secret'
                uuid={id + '2'}
                type='password'
                id={id}
            />
            <div className='text-card-text-primary font-teko mt-4 flex justify-between text-xl'>
                <span className='font-semibold'>Last Seen:</span>
                <span>{seen}</span>
            </div>
            <div className='flex justify-center'>
                <button
                    className='bg-card-delete font-teko h-10 w-24 rounded-[4px] px-2 pt-1 text-3xl font-semibold'
                    onClick={async () => {
                        if (deleting) return
                        setDeleting(true)
                        await onDelete(id)
                        setDeleting(false)
                    }}
                >
                    {deleting ? (
                        <div className='mx-auto mb-1 h-6 w-6 animate-spin rounded-full border-[3px] border-white border-t-transparent'></div>
                    ) : (
                        'Delete'
                    )}
                </button>
            </div>
        </div>
    )
}

export default Terminal
