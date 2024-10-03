import Devices from '../Devices/Devices'
import SideBarVertical from '../SideBarVertical/SideBarVertical'
import './App.css'

export function App() {

    return (
        <div className='flex h-screen'>
            <SideBarVertical />
            <Devices />
        </div>
    )
}

export default App
