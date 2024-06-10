<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $article->title }} - Tu Blog</title>
    @vite('resources/css/app.css')

</head>
<body>

@include('components.navbar')

<div class="container mx-auto mt-8">
    <div class="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden p-4">
        <h2 class="text-2xl font-semibold mb-4">{{ $article->title }}</h2>
        <p class="text-gray-700 mb-4">{{ $article->content }}</p>
        <p class="text-gray-700 mb-2">Creado por: {{ $article->poster }}</p>
        <a href="{{ route('category.index') }}" class="text-blue-500 hover:underline inline-block mt-4 px-2 py-1 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300">Volver al inicio</a>
    </div>
</div>

@include('components.footer')
@vite('resources/js/app.js')

</body>
</html>