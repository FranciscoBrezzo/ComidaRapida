
# Comida Rapida

Esta es una aplicacion hecha con django parte del proyecto integrador 
final de 6to año del colegio ITS Villada

## Caso
 
 En este caso un local de comida rapida nos pide que 
 hagamos un sistema para que sus empleados(cajeros
 y cocineros) puedan tomar ordenes, registrarlas y definir si estan 
 en proceso o terminadas

 ## Objetivo

 El objetivo de la aplicacion es poder tomar ordenes
 a los clientes y convertir el proceso en algo digital y eficaz, 
 ya que en un local de comida rapida el tiempo es oro

 ## Nuestra solucion

 Nuestra solucion fue hacer un proyecto django con 2 
 vistas principales, una para la caja y la otra para 
 la cocina, en la primera podes tomar el pedido y generar
 un ticket que va a ir a la segunda y ahi la cocina 
 preparara el pedido y cambiara el estado del mismo
 desde nuestra aplicacion.


## Instalar

Clonar el repositorio en una carpeta

```bash
  git clone https://github.com/FranciscoBrezzo/ComidaRapida
```
Crear entorno virtual

```bash
  pipenv shell
```
Instalar requerimientos

```bash
  pip install -r requirements.txt
```

## Usar el sistema

Para usar el sistema parado en /TPIntegradorconf escribir lo siguiente

```bash
  ./manage.py runserver
```

Ahi entras a la siguiente direccion http://127.0.0.1:8000/







## Authors

- [Juan Ignacio Gonzalez](https://www.github.com/JuanIgnacioGonzalez)

- [Francisco Brezzo](https://www.github.com/FranciscoBrezzo)

- [Bautista Cimatti](https://www.github.com/BautistaCimatti)
