import { FC } from 'react'
import Subheader from '../../Header/Subheader'
import Terminals from './Terminals/Terminals'

const TerminalsPage: FC = () => {
    return (
        <div>
            <Subheader text='Terminals' />
            <Terminals />
        </div>
    )
}

export default TerminalsPage
