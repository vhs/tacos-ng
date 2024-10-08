import { FC, useState, ChangeEvent, KeyboardEvent } from 'react'

interface DeviceDescriptionProps {
    id: string
}

const DeviceDescriptionForm: FC<DeviceDescriptionProps> = (props) => {
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
            <div className='font-teko mt-2 flex w-full justify-between text-xl'>
                <div className='mr-1 font-semibold'>Description:</div>
                <div className='truncate'>{description}</div>
            </div>
            <div className='font-teko flex '>
                <label className='mr-1 text-lg font-semibold' htmlFor={props.id}>
                    Edit Description:
                </label>
                <input
                    className='h-[28px] flex-1 rounded-md text-center text-lg text-black'
                    type='text'
                    id={props.id}
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                />
            </div>
        </>
    )
}

export default DeviceDescriptionForm
