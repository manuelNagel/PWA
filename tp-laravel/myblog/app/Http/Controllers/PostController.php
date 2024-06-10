<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * Metodo para guardar un post
     */
    public function store(Request $request)
    {
        
        $post = Post::create([
            'title' => $request->input('title'),
            'poster' => $request->input('poster'),
            'habilitated' => $request->input('habilitated'),
            'content' => $request->input('content')
        ]);

        
    }
    /**
     * Metodo para carga de post generico
     */
    public function loadTestPost()
    {
    $postsData = [
        [
            'title' => 'La aleatoriedad no existe',
            'poster' => '@Alvy',
            'content' => 'Una cuestión filosófica bastante compleja es si la aleatoriedad realmente existe. Una metáfora típica es tirar un dado, lo cual produce un resultado al azar. Pero los dados no son más que simples cubos, construidos de ciertos materiales. Y las reglas según las cuales caen y rebotan sobre una mesa son puramente deterministas. Lo que sucede en realidad es los dados y su entorno son un sistema caótico, del que no podemos conocer su estado inicial con total precisión para calcular qué va a suceder. E incluso aunque lo conociéramos, el más pequeño error al hacer la medición sería amplificado enormemente cuando empiezan a rebotar en la mesa. La cuestión filosófica de fondo permanece: tal vez sólo exista una forma en que puede caer un dado cuando se lanza de una forma determinada… Pero si ni tú, ni el dado, ni el universo lo «saben», parecen razones suficientes para decir que el resultado depende realmente del puro azar.',
            'habilitated' => true,
        ],
        [
            'title' => 'Hayek sobre el individualismo',
            'poster' => 'Chewy',
            'content' => 'El hombre es un individuo. Hayek define su visión del hombre como un "verdadero individualismo" de carácter "irracionalista", en oposición al "falso individualismo" racionalista (1986). Su postura es de carácter nominalista. En su concepción del hombre y la sociedad acepta, parcialmente, el supuesto ontológico sobre el carácter agregatorio de la realidad, la cual no estaría formada por totalidades. La realidad sería la suma de elementos, individuos y acontecimientos coincidentes consigo mismo y que se relacionan externamente. Esta concepción está en la base de la concepción mecanicista del hombre y la sociedad de Hobbes. Su presencia en la teoría de Hayek se debería a la influencia de Popper y a la necesidad de rechazar cualquier argumento en el cual la sociedad aparece como sujeto de deberes. Popper lo formula como criterio teórico-metodológico del "individualismo metodológico". Dice: "todos los fenómenos sociales, y especialmente el funcionamiento de las instituciones sociales, debe ser siempre considerado el resultado de las decisiones, acciones, actitudes de los individuos humanos, y nunca debemos conformarnos con las explicaciones elaboradas en función de los llamados "colectivos" (Estados, naciones, razas, etc.)" (Popper 1981, p. 283). En otro texto señala que "la creencia en la existencia empírica de conjuntos o colectivos sociales, a la que podríamos llamar colectivismo ingenuo, debe ser remplazada por el requisito de que los fenómenos sociales, inclusive los colectivos, sean analizados en función de los individuos, sus acciones y relaciones" (Popper 1989, p. 403).',
            'habilitated' => true,
        ],
        [
            'title' => 'Tempus fugit',
            'poster' => 'centenario Romano',
            'content' => 'Tempus fugit (traducido como «el tiempo huye», «el tiempo se fuga», «el tiempo vuela», o «tiempo fugaz») es una locución latina que hace referencia explícita al veloz transcurso del tiempo. La expresión parece derivar de un verso de las Geórgicas del poeta latino Virgilio (70 a. C.- 19 a. C.) (Georgicae, III, 284,) que dice más exactamente: Sed fugit interea, fugit irreparabile tempus»
            (Pero huye entre tanto, huye irreparablemente el tiempo).',
            'habilitated' => true,
        ],
        [
            'title' => 'Lorem Ipsum',
            'poster' => 'et dolori',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'habilitated' => true,
        ],
        [
            'title' => 'Tasos Grecia (La gema paradisiaca)',
            'poster' => 'Fabian Waldman',
            'content' => 'ASOS (GRECIA)
            Tasos se coloca en el puesto nº 20 del ranking de European Best Destinations, con 6.636 votos a su favor. Bañada por las aguas del mar Egeo, esta isla griega emerge silenciosa y tranquila, dejando que los ferrys pasen de largo y se dirijan hacia destinos como Creta, Rodas o Santorini.
            
            Su exuberante vegetación y sus playas paradisiacas –como Aliki, Makryammos y Marble– la convierten en un diamante en bruto para los viajeros más intrépidos, pero hay mucho más por descubrir: pueblos remotos como Panagia, Theologos y Kazavati –cuyos habitantes te recibirán con los brazos abiertos–, el museo arqueológico, la Acrópolis, el antiguo teatro romano, el Ágora y, por supuesto, la piscina natural Giola (también conocida como la Lágrima de Afrodita).
            
            La mejor opción para llegar a Tasos es tomar un vuelo de Atenas a Kavala y desde allí, el ferry en el puerto de Keramoti.',
            'habilitated' => true,
        ],
    ];

    foreach ($postsData as $postData) {
        if (Post::where('title', $postData['title'])->exists()) {
            continue;
        }
        $post = new Post();
        $post->fill($postData);
        $post->save(); 
    }
    }
}
