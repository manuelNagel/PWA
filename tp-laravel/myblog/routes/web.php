<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'Pantalla principal';
});

Route::get('/login', function () {
    return 'Login usuario';
});

Route::get('/logout', function () {
    return 'Logout usuario';
});

Route::get('/category', function () {
    return 'Listado de categorías';
});

Route::get('/category/show/{id}', function ($id) {
    return 'Vista detalle del post ' . $id;
});
