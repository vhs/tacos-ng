import { FC } from 'react'

interface HeaderProps {
    text: string
}

const Header: FC<HeaderProps> = (props) => {
    return (
        <div className='bg-zinc-900 py-2'>
            <div className='font-teko text-center text-5xl font-bold text-white underline'>{props.text}</div>
        </div>
    )
}

export default Header
