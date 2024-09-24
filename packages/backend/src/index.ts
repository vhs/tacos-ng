import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'

const server: FastifyInstance = Fastify({ logger: true })

const opts: RouteShorthandOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    pong: {
                        type: 'string'
                    },
                    ts: {
                        type: 'number'
                    }
                }
            }
        }
    }
}

server.get('/', async (_request, _reply) => {
    return 'Hello World!\n'
})

server.get('/api/ping', opts, async (_request, _reply) => {
    return { pong: 'it worked!', ts: Date.now() }
})

const start = async () => {
    try {
        await server.listen({
            port: process.env.PORT != null ? parseInt(process.env.PORT) : 7000
        })

        const address = server.server.address()
        const port = typeof address === 'string' ? address : address?.port

        console.log(`Server listening at http://${address.address}:${port}`)
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

start()
