import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react';


interface DeviceDescriptionProps {
  foo?: string
}

const DeviceDescriptionForm: FC<DeviceDescriptionProps> = () => {
  const [input, setInput] = useState<string>("")
  const [description, setDiscription] = useState<string>("")


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
      <div className="font-cutive font-semibold truncate">Description: {description}</div>
      <div className="flex flex-col">
        <label className="font-cutive mr-1 font-semibold" htmlFor="input">
          Description:
        </label>
        <input
          className="font-cutive flex-1 rounded-md"
          type="text"
          id="input"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress} />
      </div>
    </>
  )
};

export default DeviceDescriptionForm;
