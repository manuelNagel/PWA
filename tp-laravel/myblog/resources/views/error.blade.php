<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

@include('components.navbar')

<div class="container mx-auto mt-8">
    <div class="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden p-4">
        <h2 class="text-2xl font-semibold mb-4">Error</h2>
        <p>{{ $message }}</p>
        <a href="{{ route('home') }}" class="text-blue-500 hover:underline">Volver al inicio</a>
    </div>
</div>

@include('components.footer')
@vite('resources/js/app.js')

</body>
</html>