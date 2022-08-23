# Proyecto de React

## MP4 de la ecommerce (mitad de Proyecto)

https://youtu.be/A-XuHo1Wmfo

## MP4 de la ecommerce (Proyecto Final)

https://youtu.be/3yMdDR4D_dI

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

### CardDiv

en este componente se muestra el carrito desglosado con la cantidad de cada producto, una imagen del mismo, el precio unitario en Euros y el subtotal tambien en Euros y Pesos Argentinos, con la posibilidad de remover items por separado y al final de la lista se encuentra un banner con datos como la cantidad total de articulos y el total a pagar, tambien cuenta con un boton para poder eliminar todos los productos al mismo tiempo y otro boton para finalizar la orden y pasar al componente check.

### Check

en este componente contiene un formulario donde se van a poner los datos del comprador y donde hay un pequeño desglose de los productos y el total a pagar, con un boton llamado generar orden la cual procesa la orden en cuestion, checkea el stock de los productos, en el caso que todos los productos esten en stock, se descontaran la cantidad de la base de datos y se le muestra al usuario el codigo de compra y debajo un boton para volver al catalogo y en caso de que 1 o mas productos no hay en stock se le mostrara al usuario un cartel detallando cuales son los productos que no pueden procesarse, con un boton que lo redirigira al carrito nuevamente para que pueda removerlos.

### App.js

por ultimo el archivo App.js, el componente padre de todos los componentes es el que da forma a toda la app.


