<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Tu Blog</title>
    <link rel="stylesheet" href="styles.css">
    @vite('resources/css/app.css')

</head>
<body>

@include('components.navbar')

<div class="container mx-auto mt-8">
    <div class="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div class="py-4 px-6">
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">Iniciar sesión</h2>
            <form action="{{ route('login') }}" method="POST">
                @csrf
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Correo electrónico</label>
                    <input type="email" name="email" id="email" class="border-2 border-gray-200 p-2 w-full rounded-md focus:outline-none focus:border-blue-500" required>
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                    <input type="password" name="password" id="password" class="border-2 border-gray-200 p-2 w-full rounded-md focus:outline-none focus:border-blue-500" required>
                </div>
                <div class="mb-4">
                    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Iniciar sesión</button>
                </div>
            </form>
            @if ($errors->any())
                <div class="text-red-500">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            <div class="mt-4 text-sm">
                ¿No tienes una cuenta? <a href="{{ route('register') }}" class="text-blue-500 hover:underline">Regístrate</a>
            </div>
        </div>
    </div>
</div>

@include('components.footer')
@vite('resources/js/app.js')

<script src="scripts.js"></script>
</body>
</html>