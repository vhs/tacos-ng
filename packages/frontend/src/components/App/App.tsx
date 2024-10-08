import { useState } from 'react'
import './App.css'

export function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='flex flex-row'>
                <div className='basis-1/2'>
                    <a href='https://vitejs.dev' target='_blank'>
                        <img src={'/vite.svg'} className='logo m-auto' alt='Vite logo' />
                    </a>
                </div>
                <div className='basis-1/2'>
                    <a href='https://react.dev' target='_blank'>
                        <img src={'/react.svg'} className='logo m-auto' alt='React logo' />
                    </a>
                </div>
            </div>
            <h1 className='text-3xl font-bold underline' data-testid='App'>
                TACOS
            </h1>
            <div className='card'>
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
        </>
    )
}

export default App
