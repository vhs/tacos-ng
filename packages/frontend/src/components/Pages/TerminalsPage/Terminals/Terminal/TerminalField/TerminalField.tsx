import { FC, useState } from 'react'

interface TerminalFieldProps {
    label: string
    id: string
    type: string
}

const TerminalField: FC<TerminalFieldProps> = ({ label, id, type }) => {
    const [isEdit, setIsEdit] = useState<boolean>(true)

    const handleClick = () => {
        setIsEdit(!isEdit)
    }

    return (
        <div className='font-teko mt-4 flex w-full justify-between'>
            <label className='text-card-text-primary text-xl font-semibold' htmlFor={id}>
                {label}:
            </label>
            <div className='flex w-1/2 max-w-[50%]'>
                <input
                    className='h-7 w-full truncate rounded-l-md text-center text-lg'
                    type={type}
                    id={id}
                    disabled={!isEdit}
                />
                <button
                    className='text-card-text-secondary bg-card-edit h-7 flex-shrink-0 rounded-r-md px-2 text-lg'
                    onClick={handleClick}
                >
                    {isEdit ? 'Save' : 'Edit'}
                </button>
            </div>
        </div>
    )
}

export default TerminalField
