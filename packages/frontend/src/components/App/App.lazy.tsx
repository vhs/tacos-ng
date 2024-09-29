import React, { lazy, Suspense } from 'react'

const LazyApp = lazy(() => import('./App'))

const App = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
    <Suspense fallback={null}>
        <LazyApp {...props} />
    </Suspense>
)

export default App
