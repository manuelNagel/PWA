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
        <div class="relative">
            <img src="{{ asset('img/background.jpg') }}" alt="Imagen de bienvenida" class="w-full h-auto">
            <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white text-4xl font-bold">
                Bienvenido a Tu Blog
            </div>
        </div>

    </div>

    @include('components.footer')
    @vite('resources/js/app.js')

</body>
</html>