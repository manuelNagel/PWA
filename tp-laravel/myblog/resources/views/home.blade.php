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

<div class="container mx-auto mt-8 relative">
    <img src="{{ asset('img/background.jpg') }}" alt="Imagen de bienvenida" class="w-full h-auto">
    <div class="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <div class="mb-16">
            <div class="text-4xl font-bold mb-4">
                Bienvenido a Tu Blog
            </div>
            <p class="text-lg text-gray-700 mb-4">
                Explora nuestras publicaciones sobre temas interesantes y útiles.
            </p>
            <a href="{{ route('category.index') }}" class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explorar publicaciones</a>
        </div>
    </div>
</div>


    @include('components.footer')
    @vite('resources/js/app.js')

</body>
</html>