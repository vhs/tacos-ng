import { FC } from 'react'
import Header from '../../Header/Header'
import CondensedDevices from './CondensedDevices/CondensedDevices'

const HomePage: FC = () => {
    return (
        <div>
            <Header text='Dashboard' />
            <CondensedDevices />
        </div>
    )
}

export default HomePage
