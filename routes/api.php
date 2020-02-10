<?php

use App\Todo;

Route::get('todos', function () {
    return ['todos' => Todo::all()];
});
