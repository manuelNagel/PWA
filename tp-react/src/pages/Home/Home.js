import React from "react";
import { TodoWrapper } from "../../components/TodoWrapper";

//Observaciones

//Buen readme. Bien completo.

//Home pierde sentido si existe TodoWrapper. Ese wrapper deberia ser el home.
//Llamen a los archivos que retornan un jsx .jsx en vez de .js
//Intenten instalar prettier o algun identador automatico para que el codigo quede mas ordenado y facil de leer.
//borren los console.log() antes de entregar
//Falta mostrar un mensaje cuando todas las tareas estan completadas.
//Hay archivos .module.css que estan vacios, no deberian existir si no tienen clases.
//Sigan la estructura de carpetas que se pidio. Por cada componente una carpeta. Esto parece redundante, pero luego cuando agreguemos testing va a tener mas sentido.
// <input type='text' className='todo-input'  esta repetido, podrian hacer un componente input con ese estilado y evitar tenerlo dos veces.
//Intenten usar styles modules como vimos en clase para evitar tener problemas cuando la app crezca. Para esto nombre los archivos css de cada componente como nombreComponente.module.css
//Luego importa `import styles from './nombreComponente.module.css' y utilizan el objeto styles para incorporar el css a los className

export const Home = () => {
  return (
    <div className="Home">
      <TodoWrapper />
    </div>
  );
};
