# Proyecto de React

## MP4 de l ecommerse

https://youtu.be/A-XuHo1Wmfo

## Instalacion de React

se instalo react desde la consola con npx create-react-app y el nombre de la aplicacion.
para inicializarlo se hace desde la consola, hay que ir a la ruta donde se encuentra el package.json de la aplicacion y accionar el comando npm start

## Tabajando en el proyecto

He creado una app que simula una tienda de venta de camisetas de futbol, donde he creado varios componentes.

### Navbar

En el componente Navbar se creo todo el menu para la interaccion con la app, la cual cuenta con botones para ir filtrando la categoria y asi brindar al usuario una mejor busqueda, tambien cuenta con el carrito de compras que por el momento solo esta de forma figurativa

### CartWidget

En el componente CartWidget es donde esta el carrito con todos los productos agregados que por el momento es inexistente y solo muestra la imagen del carrito con un numero 10 que simula una cantidad de productos que por el momento es estatico

### Catalogo

En el componente Catalogo se muestra todos los productos que estan en el archivo casacas.js que simula una API, salvo que la busqueda este filtrada entonces este componente muestra el resultado de ese filtro

### Contador

En este componente es un contador standard con 3 botones para sumar 1 al valor o restar 1 a ese mismo valor con un valor minimo de 1 y  un maximo de 15, en un futuro este contador se transformara en la cuenta del carrito de cuantos productos lleva dentro

### ItemPage

en este componente se muestra en detalles una camiseta elegida por el usuario la cual se compone de un boton para volver al catalogo y el componente ItemUnit que lo describire a continuacion

### ItemUnit

en este componente es complementario al ItemPage ya que este dentro lleva todos aquellos detalles de la camiseta el cual usuario a elegido, de la cual cuenta con una imagen de la misma, el nombre del club o pais, la marca de la camiseta, el precio en Euro y pesos argentinos con un valor al cambio estatico en 310, pensando en un futuro darle un valor dinamico

### App.js

por ultimo el archivo App.js, el componente padre de todos los componentes es el que da forma a toda la app.


