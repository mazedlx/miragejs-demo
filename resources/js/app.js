require('./bootstrap');

window.Vue = require('vue');

import TodoList from '@components/TodoList';

const app = new Vue({
    components: {
        TodoList,
    },
    el: '#app',
});
