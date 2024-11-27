import { FC } from 'react'

interface LogProps {
    timestamp: string
    type: string
    action: string
    target: string
    user: string
}

const Log: FC<LogProps> = ({ timestamp, type, action, target, user }) => {
    return (
        <div className='bg-card m-3 mb-0 h-auto rounded-xl px-4 pb-4 pt-2'>
            <div className='text-sm text-gray-400'>{timestamp}</div>
            <div className='mt-2 text-lg font-semibold text-white'>{type}</div>
            <div className='mt-1'>
                <span className='font-medium text-gray-300'>Action:</span>{' '}
                <span className='text-gray-200'>{action}</span>
            </div>
            <div className='mt-1'>
                <span className='font-medium text-gray-300'>Target:</span>{' '}
                <span className='text-gray-200'>{target}</span>
            </div>
            <div className='mt-1'>
                <span className='font-medium text-gray-300'>User:</span> <span className='text-gray-200'>{user}</span>
            </div>
        </div>
    )
}

export default Log
