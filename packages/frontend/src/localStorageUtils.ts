export const setItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key: string): any => {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
}

export const removeItem = (key: string) => {
    localStorage.removeItem(key)
}

export const clearStorage = () => {
    localStorage.clear()
}

export const asyncGetItem = (key: string): Promise<any> =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(getItem(key))
        }, 300) // Simulate network delay
    })

export const asyncSetItem = (key: string, value: any): Promise<void> =>
    new Promise((resolve) => {
        setTimeout(() => {
            setItem(key, value)
            resolve()
        }, 300) // Simulate network delay
    })

const mockDevices = [
    {
        name: 'Lazer Cutter',
        description: 'Main shop lazer cutter',
        role: 'tool:main:lazer-cutter',
        state: true,
        seen: '2 Years Ago',
        id: 'd1',
        show: true
    },
    {
        name: 'Lathe',
        description: 'Metal shop lathe',
        role: 'tool:metal:lathe',
        state: false,
        seen: '2 Years Ago',
        id: 'd2',
        show: true
    },
    {
        name: 'Metal CNC',
        description: 'Metal shop cnc',
        role: 'tool:metal:cnc',
        state: false,
        seen: '2 Years Ago',
        id: 'd3',
        show: true
    },
    {
        name: 'Mill',
        description: 'Metal shop mill',
        role: 'tool:metal:mill',
        state: false,
        seen: '2 Years Ago',
        id: 'd4',
        show: true
    },
    {
        name: 'Wood CNC',
        description: 'Wood shop cnc',
        role: 'tool:wood:cnc',
        state: false,
        seen: '2 Years Ago',
        id: 'd5',
        show: true
    },
    {
        name: 'Jointer-Planer',
        description: 'Wood shop jointer-planer',
        role: 'tool:wood:jointer-planer',
        state: false,
        seen: '2 Years Ago',
        id: 'd6',
        show: true
    },
    {
        name: 'Table Saw',
        description: 'Wood shop table saw',
        role: 'tool:wood:table-saw',
        state: false,
        seen: '2 Years Ago',
        id: 'd7',
        show: true
    }
]

const mockTerminals = [
    {
        name: 'Terminal 1',
        description: 'Terminal for lazer-cutter',
        enabled: true,
        target: 'tool:main:lazer-cutter',
        state: true,
        secret: 'the-answer-is-foo',
        seen: '2 Years Ago',
        id: 't1',
        show: true
    },
    {
        name: 'Terminal 2',
        description: 'Terminal for lathe',
        enabled: true,
        target: 'tool:metal:lathe',
        state: true,
        secret: 'the-answer-is-foo',
        seen: '2 Years Ago',
        id: 't2',
        show: true
    },
    {
        name: 'Terminal 3',
        description: 'Terminal for metal cnc',
        enabled: true,
        target: 'tool:metal:cnc',
        state: true,
        secret: 'the-answer-is-foo',
        seen: '2 Years Ago',
        id: 't3',
        show: true
    },
    {
        name: 'Terminal 4',
        description: 'Terminal for mill',
        enabled: true,
        target: 'tool:metal:mill',
        state: true,
        secret: 'the-answer-is-foo',
        seen: '2 Years Ago',
        id: 't4',
        show: true
    },
    {
        name: 'Terminal 5',
        description: 'Terminal for wood cnc',
        enabled: true,
        target: 'tool:wood:cnc',
        state: true,
        secret: 'the-answer-is-foo',
        seen: '2 Years Ago',
        id: 't5',
        show: true
    }
]

export const initializeMockData = () => {
    if (!getItem('devices')) {
        setItem('devices', mockDevices)
        console.log('Mock-devices initialized to local storage')
    } else {
        console.log('Mock-devices already exists in local storage')
    }
    if (!getItem('terminals')) {
        setItem('terminals', mockTerminals)
        console.log('Mock-terminals initialized to local storage')
    } else {
        console.log('Mock-terminals already exists in local storage')
    }
}

export const getDevices = async (): Promise<any[]> => {
    return (await asyncGetItem('devices')) || []
}

export const updateDeviceDescription = async (deviceId: string, text: string): Promise<void> => {
    const devices = await asyncGetItem('devices')
    if (devices) {
        const updatedDevices = devices.map((device: any) =>
            device.id === deviceId ? { ...device, description: text } : device
        )
        await asyncSetItem('devices', updatedDevices)
    }
}

export const updateDeviceState = async (deviceId: string): Promise<void> => {
    const devices = await asyncGetItem('devices')
    if (devices) {
        const updatedDevices = devices.map((device: any) =>
            device.id === deviceId ? { ...device, state: !device.state } : device
        )
        await asyncSetItem('devices', updatedDevices)
    }
}

export const deleteDevice = async (deviceId: string): Promise<void> => {
    const devices = await asyncGetItem('devices')
    if (devices) {
        const updatedDevices = devices.map((device: any) =>
            device.id === deviceId ? { ...device, show: false } : device
        )
        await asyncSetItem('devices', updatedDevices)
    }
}

export const getTerminals = async (): Promise<any[]> => {
    return (await asyncGetItem('terminals')) || []
}

export const updateTerminalDescription = async (terminalId: string, text: string): Promise<void> => {
    const terminals = await asyncGetItem('terminals')
    if (terminals) {
        const updatedTerminals = terminals.map((terminal: any) =>
            terminal.id === terminalId ? { ...terminal, description: text } : terminal
        )
        await asyncSetItem('terminals', updatedTerminals)
    }
}

export const updateTerminalSecret = async (terminalId: string, text: string): Promise<void> => {
    const terminals = await asyncGetItem('terminals')
    if (terminals) {
        const updatedTerminals = terminals.map((terminal: any) =>
            terminal.id === terminalId ? { ...terminal, secret: text } : terminal
        )
        await asyncSetItem('terminals', updatedTerminals)
    }
}

export const updateTerminalEnabled = async (terminalId: string): Promise<void> => {
    const terminals = await asyncGetItem('terminals')
    if (terminals) {
        const updatedTerminals = terminals.map((terminal: any) =>
            terminal.id === terminalId ? { ...terminal, enabled: !terminal.enabled } : terminal
        )
        await asyncSetItem('terminals', updatedTerminals)
    }
}

export const deleteTerminal = async (terminalId: string): Promise<void> => {
    const terminals = await asyncGetItem('terminals')
    if (terminals) {
        const updatedTerminals = terminals.map((terminal: any) =>
            terminal.id === terminalId ? { ...terminal, show: false } : terminal
        )
        await asyncSetItem('terminals', updatedTerminals)
    }
}
