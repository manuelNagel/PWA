<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * Metodo para guardar un post
     */
    public function store(Request $request)
    {
        
        $post = Post::create([
            'title' => $request->input('title'),
            'poster' => $request->input('poster'),
            'habilitated' => $request->input('habilitated'),
            'content' => $request->input('content')
        ]);

        
    }
    /**
     * Metodo para carga de post generico
     */
    public function loadTestPost()
    {
        $post = new Post();
        $post->title = 'Título del post de prueba';
        $post->poster = 'Autor del post de prueba';
        $post->habilitated = true;
        $post->content = 'Contenido del post de prueba';

        $this->store(new Request(
        ['title' => $post->title, 
        'poster' => $post->poster, 
        'habilitated' => $post->habilitated, 
        'content' => $post->content
        ]));
    }
}
