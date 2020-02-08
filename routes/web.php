<?php

Route::get('/', 'TodoController');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

