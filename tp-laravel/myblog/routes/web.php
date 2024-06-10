<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ShowController;
use App\Http\Controllers\PostController;


Route::get('/', [HomeController::class, 'getHome'])->name('home');
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'getLogin']);
Route::get('/load-test-post', [PostController::class, 'loadTestPost']);

Route::post('/logout', function () {
    Auth::logout();
    return redirect('/');
})->name('logout');
Route::middleware('auth')->group(function () {
    Route::get('/category/List', [CategoryController::class, 'getIndex'])->name('category.index');
    Route::get('/article/{id}', [CategoryController::class, 'getShow'])->name('article.show');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
