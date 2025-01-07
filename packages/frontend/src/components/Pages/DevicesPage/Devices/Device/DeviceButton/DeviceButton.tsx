import { FC, useState } from 'react'

interface DeviceButtonProps {
    onDelete: (id: string) => void
    onArm: (id: string) => void
    id: string
}

const DeviceButton: FC<DeviceButtonProps> = (props) => {
    const [isArmed, setIsArmed] = useState<boolean>(false)

    return (
        <div className='font-teko mt-4 flex justify-between text-3xl font-semibold'>
            <button className='bg-card-delete w-24 rounded-[4px] px-2 pt-1' onClick={() => props.onDelete(props.id)}>
                Delete
            </button>
            <button
                className={`w-24 rounded-[4px] px-2 pt-1 ${isArmed ? 'bg-card-disarm' : 'bg-card-arm'}`}
                onClick={() => {
                    props.onArm(props.id)
                    setIsArmed(!isArmed)
                }}
            >
                {isArmed ? 'Disarm' : 'Arm'}
            </button>
        </div>
    )
}

export default DeviceButton
