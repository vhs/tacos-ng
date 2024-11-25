import { FC, useState, useEffect } from 'react'
import Terminal from './Terminal/Terminal'
import {
    getTerminals,
    updateTerminalDescription,
    updateTerminalSecret,
    updateTerminalEnabled,
    deleteTerminal
} from 'localStorageUtils'

const Terminals: FC = () => {
    const [terminals, setTerminals] = useState<any[]>([])

    const handleDescriptionUpdate = async (id: string, text: string) => {
        await updateTerminalDescription(id, text)
        const updatedTerminals = await getTerminals()
        setTerminals(updatedTerminals)
    }

    const handleSecretUpdate = async (id: string, text: string) => {
        await updateTerminalSecret(id, text)
        const updatedTerminals = await getTerminals()
        setTerminals(updatedTerminals)
    }

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
    }, [terminals])

    return (
        <div className='bg-body flex w-full flex-col'>
            {terminals.map((terminal) =>
                terminal.show ? (
                    <Terminal
                        onDelete={handleDelete}
                        onEnable={handleEnable}
                        onDescriptionUpdate={handleDescriptionUpdate}
                        onSecretUpdate={handleSecretUpdate}
                        name={terminal.name}
                        description={terminal.description}
                        target={terminal.target}
                        state={terminal.state}
                        secret={terminal.secret}
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
