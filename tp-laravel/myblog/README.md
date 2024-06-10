<h1>Integrantes del Equipo:</h1>
  <ul>
    <li><strong>Estudiante:</strong> Juan Manuel Nagel Sabio</li>
    <ul>
      <li><strong>Legajo:</strong> Fai - 2595</li>
    </ul>
  </ul>
    <h1>Tp myblog</h1>
    <p> La definición de blog indica que es una página
web en la que se publican regularmente posts (artículos cortos) con contenido actualizado y
novedoso sobre temas específicos o libres. </p>

<h1>Funcionalidades</h1>
<p>La aplicación cuenta con una página web de visualización de articulos con manejo de sesiones y un precargado de contenido. La página lista los articulos a ver y se pueden seleccionar indiviudalmente</p>
<h2>Vistas</h2>
<ul>
    <li>Listar</li>
    <li>Show</li>
    <li>Home</li>
    <li>Login</li>
    <li>error</li>
  </ul>

  <h2>Guía de Instalación de la Aplicación:</h2>

<p>Esta guía te ayudará a instalar y configurar la aplicación desde el repositorio.</p>

<h3>Requisitos previos</h3>

<p>Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:</p>
<ul>
    <li>PHP</li>
    <li>Composer</li>
    <li>Servidor de base de datos compatible con Laravel (MySQL, PostgreSQL, SQLite)</li>
    <li>Git</li>
</ul>

<h3>Pasos de instalación</h3>

<ol>
    <li><strong>Clona el repositorio:</strong></li>
    <pre><code>git clone https://url-de-tu-repositorio.git</code></pre>

    <li><strong>Accede al directorio del proyecto:</strong></li>
    <p>Usa el siguiente comando para ingresar al directorio:</p>
    <pre><code>cd nombre-de-tu-proyecto</code></pre>

    <li><strong>Instala las dependencias del proyecto utilizando Composer:</strong></li>
    <p>Ejecuta el siguiente comando para instalar todas las dependencias necesarias:</p>
    <pre><code>composer install</code></pre>

    <li><strong>Crea un archivo <code>.env</code> basado en el archivo <code>.env.example</code>:</strong></li>
    <p>Copia el archivo <code>.env.example</code> y renómbralo como <code>.env</code>:</p>
    <pre><code>cp .env.example .env</code></pre>

    <li><strong>Genera una nueva clave de aplicación:</strong></li>
    <p>Utiliza el siguiente comando para generar una nueva clave de aplicación:</p>
    <pre><code>php artisan key:generate</code></pre>

    <li><strong>Configura tu base de datos en el archivo <code>.env</code>:</strong></li>
    <p>Abre el archivo <code>.env</code> en un editor de texto y configura los siguientes valores:</p>
    <pre><code>
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nombre_de_tu_base_de_datos
DB_USERNAME=nombre_de_usuario
DB_PASSWORD=contraseña
    </code></pre>

    <li><strong>Ejecuta las migraciones de la base de datos:</strong></li>
    <p>Para ejecutar las migraciones de la base de datos, utiliza el siguiente comando:</p>
    <pre><code>php artisan migrate</code></pre>

    <li><strong>Inicia el servidor de desarrollo de Laravel:</strong></li>
    <p>Para iniciar el servidor de desarrollo de Laravel, ejecuta el siguiente comando:</p>
    <pre><code>php artisan serve</code></pre>

    <li><strong>Accede a tu aplicación en tu navegador web:</strong></li>
    <p>Abre tu navegador web y visita <code>http://localhost:8000</code> (o la URL proporcionada por el comando <code>php artisan serve</code>).</p>
</ol>

Home:
![alt text](./public/img/Home.png)

Login: 
![alt text](./public/img/Login.png)

List:
![alt text](./public/img/List.png)

Show:
![alt text](./public/img/Show.png)