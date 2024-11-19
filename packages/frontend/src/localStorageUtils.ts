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

const mockData = [
    { name: 'Lazer Cutter', role: 'tool:main:lazer-cutter', state: true, seen: '2 Years Ago', show: true, id: 1 },
    { name: 'Lathe', role: 'tool:metal:lathe', state: false, seen: '2 Years Ago', id: 2, show: true },
    { name: 'Metal CNC', role: 'tool:metal:cnc', state: false, seen: '2 Years Ago', id: 3, show: true },
    { name: 'Mill', role: 'tool:metal:mill', state: false, seen: '2 Years Ago', id: 4, show: true },
    { name: 'Wood CNC', role: 'tool:wood:cnc', state: false, seen: '2 Years Ago', id: 5, show: true },
    { name: 'Jointer-Planer', role: 'tool:wood:jointer-planer', state: false, seen: '2 Years Ago', id: 6, show: true },
    { name: 'Table Saw', role: 'tool:wood:table-saw', state: false, seen: '2 Years Ago', id: 7, show: true }
]

export const initializeMockData = () => {
    if (!getItem('devices')) {
        setItem('devices', mockData)
        console.log('Mock Data initialized to local storage')
    } else {
        console.log('Mock Data already exists in local storage')
    }
}

export const getDevices = async (): Promise<any[]> => {
    return (await asyncGetItem('devices')) || []
}

export const toggleDeviceState = async (deviceId: number): Promise<void> => {
    const devices = await asyncGetItem('devices')
    if (devices) {
        const updatedDevices = devices.map((device: any) =>
            device.id === deviceId ? { ...device, state: !device.state } : device
        )
        await asyncSetItem('devices', updatedDevices)
    }
}

export const deleteDevice = async (deviceId: number): Promise<void> => {
    const devices = await asyncGetItem('devices')
    if (devices) {
        const updatedDevices = devices.map((device: any) =>
            device.id === deviceId ? { ...device, show: false } : device
        )
        await asyncSetItem('devices', updatedDevices)
    }
}
