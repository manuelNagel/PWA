<nav class="bg-gray-800 p-4 text-white">
    <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-8"> 
            <a href="/" class="text-xl font-bold">Tu Blog</a> 
            <a href="/" class="hover:underline">Home</a>
        </div>
        <div class="flex justify-center flex-grow"> 
            @auth
            <button id="load-test-post" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cargar Posts Default</button>
            @endauth
        </div>
        <div class="flex items-center space-x-4">
            <div class="dropdown inline-block relative"> 
                <button id="categorias-button" class="hover:underline focus:outline-none">Categorías</button>
                <ul id="categorias-menu" class="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="{{ route('category.index') }}">Listar</a></li>
                </ul>
            </div>
            @auth
            <form method="POST" action="{{ route('logout') }}" class="inline">
                @csrf
                <button type="submit" class="text-white hover:underline focus:outline-none">Logout</button>
            </form>
            @else
            <a href="{{ route('login') }}" class="hover:underline">Login</a>
            @endauth
        </div>
    </div>
</nav>

<script>
    document.getElementById('categorias-button').addEventListener('click', function() {
        var menu = document.getElementById('categorias-menu');
        menu.classList.toggle('hidden');
    });
    document.getElementById('load-test-post').addEventListener('click', function() {
        fetch('/load-test-post', {
            method: 'GET',
            headers: {
                'X-CSRF-TOKEN': '{{ csrf_token() }}', 
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            if (response.ok) {
                alert('Articulos cargados correctamente.');
            } else {
                
                alert('Error: No se pudieron cargar correctamente los articulos');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
</script>