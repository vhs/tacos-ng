import { FC, useState } from 'react'

interface TerminalFieldProps {
    label: string
    id: string
    type: string
    windowWidth: number
}

const OFFSET = 56

const TerminalField: FC<TerminalFieldProps> = ({ label, id, type, windowWidth }) => {
    const [isEdit, setIsEdit] = useState<boolean>(true)
    const [innerWidth, setInnerWidth] = useState<number>(windowWidth - OFFSET)

    const handleClick = () => {
        setIsEdit(!isEdit)
    }

    return (
        <>
            <div className='font-teko mt-4 flex justify-between' style={{ width: '100%' }}>
                <label className='text-card-text-primary text-xl font-semibold' htmlFor={id}>
                    {label}:
                </label>
                <div className={`inline-block flex justify-end`} style={{ maxWidth: '50%', width: '50%' }}>
                    <input
                        className={`h-7 flex-1 truncate rounded-l-md text-center text-lg`}
                        style={{ maxWidth: '100%' }}
                        type={type}
                        id={id}
                        disabled={!isEdit}
                    />
                    <button
                        className='text-card-text-secondary bg-card-edit h-7 rounded-r-md px-2 text-lg'
                        onClick={handleClick}
                    >
                        {isEdit ? 'Save' : 'Edit'}
                    </button>
                </div>
            </div>
        </>
    )
}

export default TerminalField
