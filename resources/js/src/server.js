import { Server, Model } from 'miragejs';

export function makeServer({ environment = 'development'} = {}) {
    let server = new Server({
        environment,

        models: {
            todo: Model,
        },

        seeds(server) {
            server.create('todo', { id: 7, task: 'Do stuff.'});
            server.create('todo', { id: 12, task: 'Do more stuff.'});
        },

        routes() {
            this.namespace = 'api';

            this.get('/todos', schema => {
                return schema.todos.all();
            });
        }
    });

    return server;
}
