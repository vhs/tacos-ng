import basicSsl from '@vitejs/plugin-basic-ssl'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [basicSsl(), react(), tsconfigPaths()],
    server: {
        proxy: {
            '/api': {
                target:
                    process.env.TACOS_BACKEND_URL ?? 'http://127.0.0.1:7000',
                changeOrigin: true
            }
        }
    },
    resolve: {
        alias: {
            assets: '/src/assets',
            components: '/src/components',
            stories: '/src/stories',
            types: '/src/types'
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
})
