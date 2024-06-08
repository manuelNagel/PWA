<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logout - Tu Blog</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

@include('components.navbar')

<div class="container mx-auto mt-8">
    <div class="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden p-4">
        <h2 class="text-2xl font-semibold mb-4">Cerrar sesión</h2>
        <p class="text-gray-700 mb-4">¿Estás seguro de que quieres cerrar sesión?</p>
        <form action="{{ route('logout') }}" method="POST">
            @csrf
            <div class="flex justify-end">
                <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sí, cerrar sesión</button>
                <a href="{{ route('home') }}" class="text-blue-500 hover:underline">Cancelar</a>
            </div>
        </form>
    </div>
</div>

@include('components.footer')

<script src="scripts.js"></script>
</body>
</html>