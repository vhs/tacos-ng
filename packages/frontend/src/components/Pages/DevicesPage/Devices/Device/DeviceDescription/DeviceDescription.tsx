import { FC, useState } from 'react'

interface DeviceDescriptionProps {
    id: string
}

const DeviceDescriptionForm: FC<DeviceDescriptionProps> = (props) => {
    const [isEdit, setIsEdit] = useState<boolean>(true)

    const handleClick = () => {
        setIsEdit(!isEdit)
    }

    return (
        <>
            <div className='font-teko flex'>
                <label className='mr-1 text-xl font-semibold' htmlFor={props.id}>
                    Description:
                </label>
                <input
                    className='text-card-text-secondary h-7 flex-1 truncate rounded-l-md text-center text-lg'
                    type='text'
                    id={props.id}
                    disabled={!isEdit}
                />
                <button
                    className='text-card-text-secondary bg-card-edit right-0 h-7 
                              rounded-r-md px-2 text-center text-lg'
                    onClick={handleClick}
                >
                    {isEdit ? 'Save' : 'Edit'}
                </button>
            </div>
        </>
    )
}

export default DeviceDescriptionForm
