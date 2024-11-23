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
        <>
            <div className='font-teko mt-4 flex'>
                <label className='text-card-text-primary mr-16 text-xl font-semibold' htmlFor={id}>
                    {label}:
                </label>
                <input
                    className='h-7 flex-1 truncate rounded-l-md text-center text-lg'
                    type={type}
                    id={id}
                    disabled={!isEdit}
                />
                <button
                    className='text-card-text-secondary bg-card-edit right-0 h-7 w-12 rounded-r-md text-lg'
                    onClick={handleClick}
                >
                    {isEdit ? 'Save' : 'Edit'}
                </button>
            </div>
        </>
    )
}

export default TerminalField
