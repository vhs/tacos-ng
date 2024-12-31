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
            <div className='font-teko flex justify-between'>
                <label className='text-card-text-primary mr-16 text-xl font-semibold' htmlFor={props.id}>
                    Description:
                </label>
                <div className='flex w-1/2 max-w-[50%]'>
                    <input
                        className='h-7 w-full truncate rounded-l-md text-center text-lg'
                        type='text'
                        id={props.id}
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
        </>
    )
}

export default DeviceDescriptionForm
