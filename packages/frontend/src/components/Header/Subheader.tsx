import { FC } from 'react'

interface SubheaderProps {
    text: string
}

const Subheader: FC<SubheaderProps> = (props) => {
    return (
        <div className='bg-header-body p-2'>
            <div className='flex justify-between'>
                <div className='font-teko text-header-text ml-4 text-5xl font-bold underline'>{props.text}</div>
            </div>
        </div>
    )
}

export default Subheader
