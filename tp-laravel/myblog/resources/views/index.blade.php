<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $category }} - Tu Blog</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

@include('components.navbar')

<div class="container mx-auto mt-8">
    <h2 class="text-2xl font-semibold mb-4">Artículos en la categoría "{{ $category }}"</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        @foreach ($articles as $article)
            <a href="{{ route('article.show', $article->id) }}" class="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
                <img src="{{ $article->image }}" alt="{{ $article->title }}" class="w-full h-40 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold mb-2">{{ $article->title }}</h3>
                    <p class="text-gray-700">{{ $article->description }}</p>
                </div>
            </a>
        @endforeach
    </div>
</div>

@include('components.footer')

<script src="scripts.js"></script>
</body>
</html>