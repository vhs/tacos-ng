import { FC } from 'react'
import Subheader from '../../Header/Subheader'
import Logs from './Logs/Logs'

const LogsPage: FC = () => {
    return (
        <div>
            <Subheader text='Logs' />
            <Logs />
        </div>
    )
}

export default LogsPage
