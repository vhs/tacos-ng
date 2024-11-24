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
    { name: 'Lazer Cutter', role: 'tool:main:lazer-cutter', state: true, seen: '2 Years Ago', id: 'd1', show: true },
    { name: 'Lathe', role: 'tool:metal:lathe', state: false, seen: '2 Years Ago', id: 'd2', show: true },
    { name: 'Metal CNC', role: 'tool:metal:cnc', state: false, seen: '2 Years Ago', id: 'd3', show: true },
    { name: 'Mill', role: 'tool:metal:mill', state: false, seen: '2 Years Ago', id: 'd4', show: true },
    { name: 'Wood CNC', role: 'tool:wood:cnc', state: false, seen: '2 Years Ago', id: 'd5', show: true },
    {
        name: 'Jointer-Planer',
        role: 'tool:wood:jointer-planer',
        state: false,
        seen: '2 Years Ago',
        id: 'd6',
        show: true
    },
    { name: 'Table Saw', role: 'tool:wood:table-saw', state: false, seen: '2 Years Ago', id: 'd7', show: true }
]

const mockTerminals = [
    {
        name: 'Terminal 1',
        enabled: true,
        target: 'tool:main:lazer-cutter',
        state: true,
        seen: '2 Years Ago',
        id: 't1',
        show: true
    },
    {
        name: 'Terminal 2',
        enabled: true,
        target: 'tool:metal:lathe',
        state: true,
        seen: '2 Years Ago',
        id: 't2',
        show: true
    },
    {
        name: 'Terminal 3',
        enabled: true,
        target: 'tool:metal:cnc',
        state: true,
        seen: '2 Years Ago',
        id: 't3',
        show: true
    },
    {
        name: 'Terminal 4',
        enabled: true,
        target: 'tool:metal:mill',
        state: true,
        seen: '2 Years Ago',
        id: 't4',
        show: true
    },
    {
        name: 'Terminal 5',
        enabled: true,
        target: 'tool:wood:cnc',
        state: true,
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

export const updateTerminalEnabled = async (terminalID: string): Promise<void> => {
    const terminals = await asyncGetItem('terminals')
    if (terminals) {
        const updatedTerminals = terminals.map((terminal: any) =>
            terminal.id === terminalID ? { ...terminal, enabled: !terminal.enabled } : terminal
        )
        await asyncSetItem('terminals', updatedTerminals)
    }
}

export const deleteTerminal = async (terminalID: string): Promise<void> => {
    const terminals = await asyncGetItem('terminals')
    if (terminals) {
        const updatedTerminals = terminals.map((terminal: any) =>
            terminal.id === terminalID ? { ...terminal, show: false } : terminal
        )
        await asyncSetItem('terminals', updatedTerminals)
    }
}
