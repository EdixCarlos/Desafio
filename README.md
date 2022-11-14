DESAFIO BSALE
Objetivo
Construir una tienda online que despliegue productos agrupados por la categoría a la que pertenecen, generando por separado backend (API REST) y frontend (aplicación que la consuma) y utilizando la base de datos que se disponibiliza para su desarrollo.

Resumen
Se realizo una aplicacion full stack con mysql hosteada en aws, en el backend se uso nodejs con typescript y express, para el frontend unicamente se uso javascript puro y bootstrap. La aplicacion consta de una sola vista, en la que podemos filtrar por categorias, por coincidencia de palabras y tambien un carrito de compras que toma en cuenta la cantidad de descuento y hace calcula el total.

Base de datos
La base de datos de MySQL contiene las siguientes tablas

image

Back-End
La api rest fue contruida en nodejs con ayuda de librerias como typescript, express, dotenv, cors, mysql, helmet, deployada en aws lighsail con certificado ssl autoconfirmado, y pm2 como gestor. Revise la documentacion de api con postman documentacion de api con postman

Front-End
Se realizo un diseño minimalista con ayuda de boostrap, se uso funciones propias de javascript puro y se hosteo en netlify. image
