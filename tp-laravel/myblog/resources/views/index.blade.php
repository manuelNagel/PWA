<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu Blog</title>
    @vite('resources/css/app.css')

</head>
<body>

@include('components.navbar')

<div class="container mx-auto mt-8">
    <h2 class="text-2xl font-semibold mb-4">Artículos en nuestro Blog</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        @foreach ($articles as $article)
            <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
                <a href="{{ route('article.show', $article->id) }}" class="block">
                <div class="p-4">
                    <h3 class="text-lg font-semibold mb-2">{{ $article->title }}</h3>
                    <p class="text-gray-700">Creado por: {{ $article->poster }}</p>
                </div>
                </a>
            </div>
        @endforeach
    </div>
</div>

@include('components.footer')
@vite('resources/js/app.js')

</body>
</html>