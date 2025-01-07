import { FC } from 'react'
import Subheader from '../../Header/Subheader'
import CondensedDevices from './CondensedDevices/CondensedDevices'

const HomePage: FC = () => {
    return (
        <div>
            <Subheader text='Dashboard' />
            <CondensedDevices />
        </div>
    )
}

export default HomePage
