import { FC } from 'react'

interface HeaderProps {
    text: string
}

const Header: FC<HeaderProps> = (props) => {
    return <div className='font-teko pt-3 text-center text-5xl font-bold text-white underline'>{props.text}</div>
}

export default Header
