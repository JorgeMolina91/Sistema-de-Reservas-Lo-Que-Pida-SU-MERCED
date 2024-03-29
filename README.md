# Sistema de Pedidos para Restaurante 'Lo Que Pida SU-MERCED'
Este repositorio contiene el desarrollo de una herramienta de solicitud, entrega, finalización y pago de pedidos para el restaurante 'Lo Que Pida SU-MERCED'. Esta solución tecnológica está siendo desarrollada como parte de mi etapa productiva del tecnólogo en 'Análisis y Desarrollo de Sistemas Informáticos (ADSI)' en el Servicio Nacional de Aprendizaje SENA, que he estado cursando desde el año 2021.

El objetivo principal de esta herramienta es agilizar y optimizar los procesos de solicitud, entrega, finalización y pago de pedidos en el restaurante 'Lo Que Pida SU-MERCED'. Para lograr esto, se está utilizando React para el desarrollo del front-end y Django para el desarrollo del back-end.

## Requerimientos del Back-end (Django)
Para configurar el entorno de desarrollo del back-end con Django, asegúrese de cumplir con los siguientes requerimientos:

1. Instalar Django REST framework: `pip3 install djangorestframework`

2. Instalar drf-yasg para generar documentación Swagger: `pip3 install -U drf-yasg`

3. Instalar testresources para pruebas: `sudo apt install python3-testresources`

4. Instalar djangorestframework-simplejwt para autenticación JWT: `pip3 install --upgrade djangorestframework-simplejwt`

5. Instalar django-cors-headers para manejar CORS: `pip3 install django-cors-headers`  

6. Instalar Pillow para manejar imágenes: `python3 -m pip install Pillow`

7. Instalar django-filter para filtrar consultas: `pip3 install django-filter`  



## Requerimientos del Front-end (React)
Para configurar el entorno de desarrollo del front-end con React, asegúrese de cumplir con los siguientes requerimientos:

1. Instalar cmdtest (si no está instalado): `sudo apt install cmdtest`
   
2. Instalar yarn (si no está instalado): `npm install -g yarn`
   
3. Agregar paquetes de Semantic UI React y estilos CSS: `yarn add semantic-ui-react semantic-ui-css`
   
4. Agregar soporte para Sass: `yarn add sass`
   
5. Agregar react-router-dom v6 para enrutamiento: `yarn add react-router-dom@6`
    
6. Instalar lodash: `yarn add lodash`
   
7. Agregar formik y yup para formularios: `yarn add formik yup`
   
8. Agregar react-toastify para notificaciones: `yarn add react-toastify`

9. Agregar classnames para manejo de clases CSS: `yarn add classnames`


# Guía de Despliegue Local con Docker  

Esta guía permitirá desplegar la aplicación en un entorno local utilizando Docker: el front-end con React, y el back-end con Django.  
Para hacerlo, **dedemos asegurarnos de tener Docker instalado en nuestro sistema.**

## Paso 1: Clonar el Repositorio  
1. Abre tu terminal y navega a la ubicación donde deseas clonar el repositorio.
2. Ejecuta el siguiente comando para clonar el repositorio: `git clone <URL-del-repositorio>`

## Paso 2: Desplegar la Aplicación React
### 2.1. Construir la Imagen Docker
1. Navega al directorio de la aplicación React: `cd 'react-app'`
2. Ejecuta el siguiente comando para construir la imagen de Docker: `docker build -t 'react-app' .`

### 2.2. Ejecutar la Aplicación React
1. Ejecuta el siguiente comando para iniciar la aplicación React en un contenedor: `docker run -d -p 3000:3000 'react-app'`

Ahora puedes acceder a la aplicación React en tu navegador web en **http://localhost:3000.**

## Paso 3: Desplegar la Aplicación Django
### 3.1. Construir la Imagen Docker  
1. Navega al directorio de la aplicación Django: `cd ../'django-app'`
2. Ejecuta el siguiente comando para construir la imagen de Docker: `docker build -t 'django-app' .`
### 3.2. Ejecutar la Aplicación Django  
1. Ejecuta el siguiente comando para iniciar la aplicación Django en un contenedor: `docker run -d -p 8000:8000 'django-app'`
   
La aplicación Django estará disponible en **http://localhost:8000.**

¡Listo! Ahora tienes ambas aplicaciones desplegadas en contenedores Docker en tu entorno local.

## Detener y Limpiar
Si deseas detener y eliminar los contenedores Docker, puedes usar los siguientes comandos:  
`docker stop $(docker ps -aq)`  
`docker rm $(docker ps -aq)`  

## Notas Adicionales
- Asegúrate de que los puertos especificados en los comandos de ejecución (-p puerto-host:puerto-contenedor) no estén en uso por otras aplicaciones en tu sistema.  
- Si necesitas realizar ajustes de configuración específicos para cada aplicación (como variables de entorno), consulta la documentación de las aplicaciones React y Django.  
- Recuerda que esta guía asume que las imágenes de Docker se han construido correctamente y que las aplicaciones tienen sus archivos y dependencias en los lugares adecuados.

    

## Contribución
Este proyecto es parte de mi aprendizaje en el programa ADSI del SENA. Si deseas contribuir, por favor crea un pull request y estaré encantado de revisarlo.

Contacto
Si tienes alguna pregunta o sugerencia sobre este proyecto, no dudes en contactarme.

**Jorge Luis Molina Vega**  
**@:** jorgemolina2097@gmail.com  
**tel:** +57 (300) 327-9697  

¡Gracias por tu interés en el proyecto 'Lo Que Pida SU-MERCED'!
