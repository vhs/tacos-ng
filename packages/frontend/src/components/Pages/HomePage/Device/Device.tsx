import { FC } from 'react'

interface DeviceProps {
    onDelete: (id: string) => void
    onArm: (id: string) => void
    name: string
    role: string
    state: boolean
    seen: string
    id: string
}

const DeviceContainers = [
    { name: 'Lazer Cutter', role: 'tool:main:lazer-cutter', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Metal CNC', role: 'tool:metal:cnc', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Mill', role: 'tool:metal:mill', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Lathe', role: 'tool:metal:lathe', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Wood CNC', role: 'tool:wood:cnc', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Jointer-Planer', role: 'tool:wood:jointer-planer', state: false, seen: '2 Years Ago', id: '' },
    { name: 'Table Saw', role: 'tool:wood:table-saw', state: false, seen: '2 Years Ago', id: '' }
]

const Device: FC = () => {
    return (
        <div className='bg-card m-3 h-auto rounded-xl px-4 pb-4 pt-2'>
            <div className='text-card-text-primary font-teko text-4xl font-semibold'>Test Name</div>

            <div className='text-card-text-primary font-teko mt-4 flex justify-between text-xl'>
                <span className='font-teko text-xl font-semibold'>State:</span>
                <span>Test State</span>
            </div>
            <div className='text-card-text-primary font-teko mt-4 flex justify-between text-xl'>
                <span className='font-semibold'>Last Seen:</span>
                <span>Test Seen</span>
            </div>
        </div>
    )
}

export default Device
