import { FC, useState, useEffect } from 'react'
import Terminal from './Terminal/Terminal'
import { getTerminals, updateTerminalEnabled, deleteTerminal } from 'localStorageUtils'

const Terminals: FC = () => {
    const [terminals, setTerminals] = useState<any[]>([])

    const handleEnable = async (id: string) => {
        await updateTerminalEnabled(id)
        const updatedTerminals = await getTerminals()
        setTerminals(updatedTerminals)
    }

    const handleDelete = async (id: string) => {
        await deleteTerminal(id)
        const updatedTerminals = await getTerminals()
        setTerminals(updatedTerminals)
    }

    useEffect(() => {
        const fetchTerminals = async () => {
            const data = await getTerminals()
            setTerminals(data)
        }

        fetchTerminals()
    }, [])

    return (
        <div className='bg-body flex w-full flex-col'>
            {terminals.map((terminal) =>
                terminal.show ? (
                    <Terminal
                        onDelete={handleDelete}
                        onEnable={handleEnable}
                        name={terminal.name}
                        enabled={terminal.enabled}
                        target={terminal.target}
                        state={terminal.state}
                        seen={terminal.seen}
                        id={terminal.id}
                        key={terminal.id}
                    />
                ) : null
            )}
        </div>
    )
}

export default Terminals
