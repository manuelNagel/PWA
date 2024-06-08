<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getIndex($category)
    {
        $articles = []; 

        return view('index', ['category' => $category, 'articles' => $articles]);
    }

    public function getShow($articleId)
    {
        $article = []; 

        return view('show', ['article' => $article]);
    }
}
