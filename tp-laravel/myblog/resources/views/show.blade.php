<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $article->title }} - Tu Blog</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

@include('components.navbar')

<div class="container mx-auto mt-8">
    <div class="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden p-4">
        <h2 class="text-2xl font-semibold mb-4">{{ $article->title }}</h2>
        <img src="{{ $article->image }}" alt="{{ $article->title }}" class="w-full h-auto mb-4">
        <p class="text-gray-700 mb-4">{{ $article->content }}</p>
        <a href="{{ route('home') }}" class="text-blue-500 hover:underline">Volver al inicio</a>
    </div>
</div>

@include('components.footer')

<script src="scripts.js"></script>
</body>
</html>