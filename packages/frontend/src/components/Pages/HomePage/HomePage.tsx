import { FC } from 'react'
import Header from '../../Header/Header'
import Device from './Device/Device'

const HomePage: FC = () => {
    return (
        <div>
            <Header text='Dashboard' />
            <Device />
            <Device />
            <Device />
        </div>
    )
}

export default HomePage
