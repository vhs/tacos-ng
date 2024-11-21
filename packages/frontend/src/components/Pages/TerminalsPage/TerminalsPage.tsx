import { FC } from 'react'
import Subheader from '../../Header/Subheader'
import Devices from './Terminals/Terminals'

const TerminalsPage: FC = () => {
    return (
        <div>
            <Subheader text='Terminals' />
            <Devices />
        </div>
    )
}

export default TerminalsPage
