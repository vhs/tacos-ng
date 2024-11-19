import { FC, useState } from 'react'

interface DeviceButtonProps {
    onDelete: (id: number) => void
    onArm: (id: number) => void
    state: boolean
    id: number
}

const DeviceButton: FC<DeviceButtonProps> = ({ onDelete, onArm, state, id }) => {
    const [isArmed, setIsArmed] = useState<boolean>(state)
    const [arming, setArming] = useState<boolean>(false)
    const [deleting, setDeleting] = useState<boolean>(false)

    return (
        <div className='font-teko mt-4 flex justify-between text-3xl font-semibold'>
            <button
                className='bg-card-delete w-24 rounded-[4px] px-2 pt-1'
                onClick={async () => {
                    if (deleting || arming) return
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
            <button
                className={`w-24 rounded-[4px] px-2 pt-1 ${isArmed ? 'bg-card-disarm' : 'bg-card-arm'}`}
                onClick={async () => {
                    if (arming || deleting) return
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
    )
}

export default DeviceButton
