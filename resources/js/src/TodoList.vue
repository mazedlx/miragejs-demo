<template>
  <div class="w-1/3">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    ></TodoItem>
  </div>
</template>
<script>
import axios from 'axios';
import TodoItem from '@components/TodoItem';

export default {
  components: {
    TodoItem,
  },

  data() {
    return {
      todos: [],
      serverError: '',
    };
  },

  async created() {
    try {
      const { data } = await axios.get('/api/todos');
      this.todos = data.todos;
    } catch (error) {
      this.serverError = error.response.data.error;
    }
  }
}
</script>
