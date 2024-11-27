import { FC } from 'react'
import Log from './Log/Log'

const TestLogs = [
    {
        timestamp: '2014-11-26 14:37:52',
        type: 'device',
        action: 'arm',
        target: 'tool:main:lazer-cutter',
        user: 'admin:cjames'
    },
    {
        timestamp: '1992-07-15 08:25:10',
        type: 'terminal',
        action: 'enable',
        target: 'Terminal 2',
        user: 'admin:cjames'
    },
    {
        timestamp: '2023-07-15 08:25:10',
        type: 'terminal',
        action: 'delete',
        target: 'Terminal 5',
        user: 'admin:cjames'
    },
    {
        timestamp: '2026-09-09 09:19:54',
        type: 'device',
        action: 'delete',
        target: 'tool:wood:jointer-planer',
        user: 'admin:cjames'
    },
    {
        timestamp: '2027-04-08 07:03:25',
        type: 'device',
        action: 'disarm',
        target: 'tool:metal:mill',
        user: 'admin:cjames'
    },

    {
        timestamp: '2003-09-14 11:03:25',
        type: 'terminal',
        action: 'disable',
        target: 'Terminal 3',
        user: 'admin:cjames'
    },
    {
        timestamp: '2134-06-04 07:24:25',
        type: 'device',
        action: 'delete',
        target: 'tool:wood:table-saw',
        user: 'admin:cjames'
    },
    {
        timestamp: '2037-03-10 04:45:25',
        type: 'terminal',
        action: 'delete',
        target: 'Terminal 1',
        user: 'admin:cjames'
    },
    {
        timestamp: '2033-08-16 08:22:25',
        type: 'device',
        action: 'disarm',
        target: 'tool:metal:cnc',
        user: 'admin:cjames'
    }
]

const Logs: FC = () => {
    return (
        <div className='bg-body flex w-full flex-col'>
            {TestLogs.map((log) => (
                <Log
                    timestamp={log.timestamp}
                    type={log.type}
                    action={log.action}
                    target={log.target}
                    user={log.user}
                />
            ))}
        </div>
    )
}

export default Logs
