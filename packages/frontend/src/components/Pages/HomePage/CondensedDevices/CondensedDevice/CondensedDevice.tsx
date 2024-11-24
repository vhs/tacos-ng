import { FC, useState } from 'react'

interface CondensedDeviceProps {
    onArm: (id: string) => void
    name: string
    state: boolean
    seen: string
    id: string
}

const CondensedDevice: FC<CondensedDeviceProps> = ({ onArm, name, state, seen, id }) => {
    const [isArmed, setIsArmed] = useState<boolean>(state)
    const [arming, setArming] = useState<boolean>(false)

    return (
        <div className='bg-card m-3 mb-0 h-auto rounded-xl px-4 pb-4 pt-2'>
            <div className='text-card-text-primary font-teko text-4xl font-semibold'>{name}</div>
            <div className='text-card-text-primary font-teko mt-4 flex justify-between text-xl'>
                <span className='font-teko text-xl font-semibold'>State:</span>
                <span>{state ? 'Armed' : 'Unarmed'}</span>
            </div>
            <div className='text-card-text-primary font-teko mt-4 flex justify-between text-xl'>
                <span className='font-semibold'>Last Seen:</span>
                <span>{seen}</span>
            </div>
            <div className='font-teko flex justify-center'>
                <button
                    className={`h-10 w-24 rounded-[4px] px-2 pt-1 text-3xl font-semibold ${isArmed ? 'bg-card-disarm' : 'bg-card-arm'}`}
                    onClick={async () => {
                        if (arming) return
                        setArming(true)
                        await onArm(id)
                        setIsArmed(!isArmed)
                        setArming(false)
                    }}
                >
                    {arming ? (
                        <div className='mx-auto mb-1 h-6 w-6 animate-spin rounded-full border-[3px] border-white border-t-transparent'></div>
                    ) : isArmed ? (
                        'Disarm'
                    ) : (
                        'Arm'
                    )}
                </button>
            </div>
        </div>
    )
}

export default CondensedDevice
