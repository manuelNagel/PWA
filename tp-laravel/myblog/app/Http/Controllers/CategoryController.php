<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class CategoryController extends Controller
{
    public function getIndex()
    {
        try {
        $articles = Post::all(); 
        return view('index', ['articles' => $articles]);
    } catch (ModelNotFoundException $e) {
        return view('error')->with('message', 'No se encontraron artículos a listar.');
    }
    }

    public function getShow($articleId)
    {
       
        try {
            $article = Post::findOrFail($articleId);
            return view('show', ['article' => $article]);
        } catch (ModelNotFoundException $e) {
            return view('error')->with('message', 'El artículo solicitado no se encontró.');
        }
    }
}
