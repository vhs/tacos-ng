import { FC, useState, ChangeEvent, KeyboardEvent } from 'react'

interface DeviceDescriptionProps {
    id: string
}

const DeviceDescriptionForm: FC<DeviceDescriptionProps> = (props) => {
    // const [input, setInput] = useState<string>('')
    // const [description, setDiscription] = useState<string>('')
    const [isEdit, setIsEdit] = useState<boolean>(true)

    // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setInput(e.target.value)
    // }

    // const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter') {
    //         if (input.trim() !== '') {
    //             setDiscription(input)
    //             setInput('')
    //         }
    //     }
    // }

    const handleClick = () => {
        setIsEdit(!isEdit)
    }

    return (
        <>
            <div className='font-teko flex'>
                <label className='mr-1 text-xl font-semibold' htmlFor={props.id}>
                    Description:
                </label>
                <input
                    className='h-7 flex-1 truncate rounded-l-md text-center text-lg text-black'
                    type='text'
                    id={props.id}
                    disabled={!isEdit}
                    //onChange={handleInputChange}
                    //onKeyDown={handleKeyPress}
                />
                <button
                    className='right-0 h-7 rounded-r-md bg-zinc-300 
                              px-2 text-center text-lg text-black'
                    onClick={handleClick}
                >
                    {isEdit ? 'Save' : 'Edit'}
                </button>
            </div>
        </>
    )
}

export default DeviceDescriptionForm
