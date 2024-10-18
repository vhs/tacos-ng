import { FC } from 'react'
import Devices from './Devices/Devices'
import Header from '../../Header/Header'

const DevicesPage: FC = () => {
    return (
        <div>
            <Header text='Devices' />
            <Devices />
        </div>
    )
}

export default DevicesPage
