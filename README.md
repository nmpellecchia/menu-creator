# Alkemy React Challenge

## Fecha de entrega: 28/02/2022 (Inclusive)

Hola! Mi nombre es Nicolas Pellecchia y esta es mi entrada para el desafío front-end de Alkemy Labs. Los invito a leer este pequeño resumen de mi experiencia y pensamientos realizándolo previamente a ver el código.

## Instalación

Para correr este proyecto, clonar el repositorio o descargar el archivo .zip y abrirlo con su editor favorito.

En la consola de comandos correr el siguiente código:

```
npm install
```

Una vez instaladas todas las dependencias, crear un archivo .env y escribir dentro su llave de la API de la siguiente manera:

```
VITE_API-KEY={Su llave}
```

Finalmente para correr la aplicación escribir:

```
npm run dev
```

Entrar a su navegador y dirigirse a la dirección dada en la consola:

```
vite v2.7.13 dev server running at:

  > Local: http://localhost:3000/
```

## Objetivos

Este desafío consistía en crear una página web que simule una carta de opciones de menú de un hotel. Debía de ser dinámica y consumir la API [Spoonacular](https://spoonacular.com/food-api).

## Herramientas

Los requísitos eran utilizar ReactJS como eje central de la aplicación, React Router Dom para la navegación, Axios para llamadas a APIs y Formik para validación de formularios.

También se pedía el uso de Sweet Alert2 para alertas y alguna herramienta para estandarizar estilos.

En mi caso, elegí utilizar Tailwind en lugar de Bootstrap como recomendaba la documentación. Porque consideré que se ajustaba mucho mejor a la idea que tenía en mente sobre el proyecto.

# Ejemplos

A continuación cito unas pequeñas partes del código a modo de ejemplo.

- Display del título de los resultados de búsqueda de platillos

```javascript
useEffect(() => {
  if (dishes.length > 0 && searchValue !== '') {
    setResultsTitle(`Dishes containing '${searchValue}'`);
  } else if (dishes.length == 0 && searchValue !== '') {
    setResultsTitle(`We couldn't find dishes containing '${searchValue}'`);
  } else {
    setResultsTitle(``);
  }
}, [searchValue]);
```

- Validación del plato a agregar al menú

```javascript
if (items.length >= 4) {
  showErrorPopup('You have too many dishes!');
  return false;
}

if (i !== -1) {
  showErrorPopup('This dish is already on the menu!');
  return false;
}

if (!checkVeganDishes(items, value)) {
  return false;
}
```

- Destructuring respuesta de la API para un mejor manejo dentro de la aplicación

```javascript
dishes.map(dish => {
      id,
      title,
      image,
      vegan,
      healthScore,
      pricePerServing,
      readyInMinutes,
      servings,
      dishTypes,
      analyzedInstructions,
    } = dish;
```

# Detalles

## Inglés

Todo el proyecto a excepción de este archivo está escrito en inglés. Esto es porque estoy acostumbrado a ello. Los lenguajes de programación están "escritos" en este idioma y también hay una gran cantidad de recursos útiles y documentación. Todo ello culminando en que realice siempre mis proyectos en inglés.

## LocalStorage vs SessionStorage

Ambas eran opciones válidas a la hora de guardar el token de sesión o los platos del menú. Me veo en la obligación de explicar brevemente porqué me decanté sobre uno y no el otro.  
La respuesta es Comodidad. localStorage y sessionStorage funcionan de manera muy similar, pero tienen una diferencia **muy** importante, la persistencia de información. en sessionStorage, la misma se mantiene hasta que la ventana o pestaña del navegador se cierre, mientras que en localStorage tiene que ser eliminada manualmente o por una aplicación (Utilizando, por ejemplo el método `localStorage.clear()`).

Esto quiere decir que, en el primer caso, el usuario tendría que volver no sólo a confirmar su identidad si su pestaña se ha cerrado por error, sino que todo su menú se habría eliminado y tendría que comenzar de nuevo. localStorage impide esto mismo, y es por ello que me pareció la opción más razonable.

## Alertas

SweetAlert2 permite el uso de alertas de manera muy sencilla y decidí aprovechar esta herramienta lo máximo posible.
Para tomar una decisión importante, como eliminar un platillo del menú o cerrar sesión, el usuario deberá confirmar o cancelar dentro de una. La idea de esto es evitar pérdidas de tiempo generadas por clicks accidentales.
También opté por mostrar los detalles del plato con un Pop Up, ya que es más rápido y cómodo que redigir a una nueva página cada vez.

# A futuro

Por motivos personales, no conté con todo el tiempo que me habría gustado dedicarle a este proyecto y no logré llevar a cabo todos los objetivos que tenía en mente. Por eso mismo me decido a dejarlos por escrito aquí mismo, en caso de tener el tiempo en el futuro para realizarlos, ya no solo por el challenge, sino por mi propia apreciación.

- **TESTS**: Utilizar Jest para escribir tests unitarios para las distintas funciones del proyecto. Como por ejemplo mock calls de APIs y la validación de platillos.

- **PAGINADOR**: Crear un paginador similar al que utilicé en un [proyecto personal](https://github.com/nmpellecchia/countries-api) para poder mostrar más entradas al usuario en lugar de limitarme a unas pocas. Esto se haría aprovechando los parámetros de number y offset que la API provee.

- **INFORMACIÓN MÁS ESPECÍFICA**: Los precios que se ven en la App son al completo. Mostrar también el valor monetario de cada porción y cuántas de ellas trae cada platillo tendría mucha utilidad para los usuarios.

- **MEJOR MANERO DE ERRORES**: Por el momento todos los errores generan una notificación y poco más. Con más tiempo, me habría gustado manejar los distintos tipos que pueden surgir, sobre todo los relacionados a las APIs.

# Pensamientos Finales

Se ha tratado de un proyecto muy divertido e informativo. He disfrutado de todo el tiempo que pasé planeando objetivos, escribiendo código e investigando. Espero que sea de su agrado y que nos pongamos en contacto en un futuro. Muchísimas gracias.
