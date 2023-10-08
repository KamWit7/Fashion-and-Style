/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { createServer, Model } from 'miragejs'

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create('user', { name: 'Bob' } as never)
      server.create('user', { name: 'Alice' } as never)
    },

    routes() {
      this.namespace = 'api'

      this.get('/users', (schema) => {
        return schema.users.all()
      })
    },
  })

  return server
}
