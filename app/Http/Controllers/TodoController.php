<?php

namespace App\Http\Controllers;

class TodoController
{
    public function __invoke()
    {
        return view('todos.index');
    }
}
