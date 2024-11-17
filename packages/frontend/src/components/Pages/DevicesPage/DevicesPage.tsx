import { FC } from 'react'
import Devices from './Devices/Devices'
import Subheader from '../../Header/Subheader'

const DevicesPage: FC = () => {
    return (
        <div>
            <Subheader text='Devices' />
            <Devices />
        </div>
    )
}

export default DevicesPage
