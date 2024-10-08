import { FC } from 'react'

interface DeviceButtonProps {
    onDelete: (id: string) => void
    id: string
}

const DeviceButton: FC<DeviceButtonProps> = (props) => {
    return (
        <div className='font-teko mt-4 flex justify-between text-3xl font-semibold'>
            <button className='w-[86px] rounded-[4px] bg-red-500 px-2 pt-1' onClick={() => props.onDelete(props.id)}>
                Delete
            </button>
            <button className='w-[86px] rounded-[4px] bg-lime-500 px-2 pt-1'>Arm</button>
        </div>
    )
}

export default DeviceButton
