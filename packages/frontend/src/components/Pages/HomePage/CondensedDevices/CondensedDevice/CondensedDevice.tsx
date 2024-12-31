import { FC, useState } from 'react'

interface CondensedDeviceProps {
    name: string
    role: string
    state: boolean
    seen: string
    id: string
}

const CondensedDevice: FC<CondensedDeviceProps> = (props) => {
    const [isArmed, setIsArmed] = useState<boolean>(false)

    return (
        <div className='bg-card m-3 mb-0 h-auto rounded-xl px-4 pb-4 pt-2'>
            <div className='text-card-text-primary font-teko text-4xl font-semibold'>{props.name}</div>
            <div className='text-card-text-primary font-teko mt-4 flex justify-between text-xl'>
                <span className='font-teko text-xl font-semibold'>State:</span>
                <span>{props.state ? 'Armed' : 'Unarmed'}</span>
            </div>
            <div className='text-card-text-primary font-teko mt-4 flex justify-between text-xl'>
                <span className='font-semibold'>Last Seen:</span>
                <span>{props.seen}</span>
            </div>
            <div className='flex justify-center'>
                <button
                    className={`font-teko w-24 rounded-[4px] px-2 pt-1 text-3xl font-semibold ${isArmed ? 'bg-card-disarm' : 'bg-card-arm'}`}
                    onClick={() => {
                        setIsArmed(!isArmed)
                    }}
                >
                    {isArmed ? 'Disarm' : 'Arm'}
                </button>
            </div>
        </div>
    )
}

export default CondensedDevice
