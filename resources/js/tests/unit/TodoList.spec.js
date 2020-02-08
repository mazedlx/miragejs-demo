import { Response } from "miragejs";
import { mount } from '@vue/test-utils';
import { makeServer } from '../../src/server';
import TodoList from '../../src/TodoList';

const waitFor = function(wrapper) {
    return new Promise(resolve => {
        const timer = setInterval(() => {
            const el = wrapper.findAll('div');
            if(el.length > 0) {
                clearInterval(timer);
                resolve();
            }
        }, 100);
    });
}

let server;

beforeEach(() => {
  server = makeServer({ environment: "test" })
})

afterEach(() => {
  server.shutdown()
})

it('shows all todos', async() => {
  server.create('todo', { id: 7, task: 'Do stuff.'});
  server.create('todo', { id: 12, task: 'Do more stuff.'});
  
  const wrapper = mount(TodoList);
  
  await waitFor(wrapper);
  
  expect(wrapper.isVueInstance()).toBeTruthy();  
  expect(wrapper.vm.todos.length).toBe(2);
});

it('handles errors', async() => {
    server.get("/todos", () => {
        return new Response(
          500,
          {},
          {
            error: "The database is on vacation.",
          }
        )
      });
      const wrapper = mount(TodoList);
      await waitFor(wrapper);
      expect(wrapper.vm.serverError).toBe('The database is on vacation.');
});
