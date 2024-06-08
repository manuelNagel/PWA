<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ShowController;

Route::get('/', [HomeController::class, 'getHome'])->name('home');
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'getLogin']);
Route::post('/logout', [LoginController::class, 'getLogout'])->name('logout');
Route::get('/category/{category}', [CategoryController::class, 'getIndex'])->name('category.index');
Route::get('/article/{id}', [CategoryController::class, 'getShow'])->name('article.show');