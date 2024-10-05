import { FC, useState, ChangeEvent, KeyboardEvent } from 'react'

interface DeviceDescriptionProps {
    foo?: string
}

const DeviceDescriptionForm: FC<DeviceDescriptionProps> = () => {
    const [input, setInput] = useState<string>('')
    const [description, setDiscription] = useState<string>('')

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (input.trim() !== '') {
                setDiscription(input)
                setInput('')
            }
        }
    }

    return (
        <>
            <div className='font-teko flex w-full justify-between'>
                <div className='mr-1 font-semibold'>Description:</div>
                <div className='truncate'>{description}</div>
            </div>
            <div className='flex h-[25px]'>
                <label className='font-teko mr-1 font-semibold' htmlFor='input'>
                    Edit Description:
                </label>
                <input
                    className='font-teko flex-1 rounded-md text-center text-black'
                    type='text'
                    id='input'
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                />
            </div>
        </>
    )
}

export default DeviceDescriptionForm
