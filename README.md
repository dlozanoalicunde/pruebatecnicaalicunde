# Prueba Técnica para candidatos

## Descripción

Este repositorio contiene una prueba técnica para candidatos que deseen unirse a nuestro equipo de desarrollo backend y frontend. El objetivo de la prueba es evaluar las habilidades de los candidatos en el desarrollo de aplicaciones utilizando tecnologías como .NET, C#, SQL Server, Microservicios / MVC o Angular, NodeJS y TypeScript.

## Instrucciones

### Candidatos Backend:

1. Realizar un programa en .NET - C# que cumpla con los siguientes requisitos:
    - Crear una clase y una función que consuma la siguiente API: [https://api.opendata.esett.com/](https://api.opendata.esett.com/). Escoge 1 servicio cualquiera de los proporcionados por la API.
    - Almacena la información obtenida en la base de datos SQL Server (Usar un contenerdor Docker para la ddbb).
    - Implementar un controlador que permita filtrar por Primary Key en la base de datos.
    - Construir una API REST con Swagger que permita visualizar los datos almacenados en la base de datos.
    - Usar contenedores Docker para DDBB y la propia App
    - Elige entre usar arquitectura hexagonal / MVC
    - Elige entre usar CRUD o CQRS

### Candidatos Frontend:

1. Desarrollar una interfaz de usuario utilizando Angular y TypeScript que permita interactuar con la siguiente API: [https://api.opendata.esett.com/](https://api.opendata.esett.com/). Puede escoger cualquier servicio proporcionado por la API.
    - Crear componentes de Angular para mostrar los datos almacenados en la base de datos.
    - Implementar funcionalidades como búsqueda, filtrado, paginación de datos y ordenación por cualquier columna.
    - Asegurarse de que la interfaz de usuario sea intuitiva y fácil de usar.

### Criterios de evaluación:

Se valorará positivamente:

1. El uso de código limpio y buenas prácticas de programación tanto en el frontend como en el backend.
2. Utilizar código generado a mano en lugar de depender excesivamente de herramientas de generación automática.
3. Hacer commits frecuentes y bien explicados durante el desarrollo.
4. Demostrar conocimientos en patrones de diseño, tanto en el frontend como en el backend.
5. Gestion correcta de los secretos como cadenas de conexión, uasuarios, passwords...

## Tecnologías utilizadas

### Backend:
- .NET - C#
- SQL Server
- Microservicios (Hexagonal) / MVC

### Frontend:
- Angular
- TypeScript
- NodeJS

## Estructura del repositorio

No hay restricciones específicas sobre la estructura del repositorio. Los candidatos son libres de organizar su código de la manera que consideren más apropiada. Sin embargo, se recomienda seguir las convenciones de nomenclatura y estructura de proyecto estándar.

## Recursos adicionales

- Documentación oficial de Microsoft sobre [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-6.0)
- Documentación oficial de Microsoft sobre [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/)
- Documentación oficial de Angular: [https://angular.io/docs](https://angular.io/docs)

¡Buena suerte!
