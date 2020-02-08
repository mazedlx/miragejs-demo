/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import TodoList from '@components/TodoList';
import { makeServer } from "./src/server";

const app = new Vue({
    components: {
        TodoList,
    },
    el: '#app',
});
