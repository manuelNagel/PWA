<nav class="bg-gray-800 p-4 text-white">
    <div class="container mx-auto flex justify-between items-center">
        <a href="/" class="text-xl font-bold">Tu Blog</a>
        <div class="space-x-4">
            <a href="/" class="hover:underline">Home</a>
            <div class="dropdown inline-block relative">
                <button class="hover:underline focus:outline-none">Categorías</button>
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="{{ route('category.show', 'ciencia') }}">Ciencia</a></li>
                    <li><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="{{ route('category.show', 'programacion') }}">Programación</a></li>
                    <li><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="{{ route('category.show', 'biologia') }}">Biología</a></li>
                </ul>
            </div>
            @guest
                <a href="{{ route('login') }}" class="hover:underline">Login</a>
            @else
                <a href="{{ route('logout') }}" class="hover:underline">Logout</a>
            @endguest
        </div>
    </div>
</nav>