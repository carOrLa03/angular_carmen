# Angular_Carmen
aprendiendo angular

## Estructura de un proyecto con Angular


[Documentación]: https://angular.io/guide/file-structure


1. Carpeta del proyecto "first_project"


Contiene el proyecto que creamos con Angular, que podemos llamar como queramos. Para crear nuestro proyecto, comando:

  *ng serve -o*

2. Directorio ".angular"
3. Directorio ".vscode"
4. Directorio "node_modules"


Carpeta que contiene todas las dependencias de nuestro proyecto. Son visibles para todos los proyectos.


5. Directorio "src"

Directorio donde trabajaremos nuestros módulos. Es el más importante, ya que contiene todo el código. 
Dentro de él encontraremos otros directorios y archivos, que explico seguidamente:

   - app

    Aquí se ubica toda la implementación de los componentes principales, junto a su template HTML y archivos de estilos CSS.
    Es decir, contiene los archivos de componentes en los que se definen la lógica y los datos de su aplicación.
    Archivos que contiene:

    - app.component.html

        Define la plantilla HTML asociada al AppComponent raíz.

    - app.component.sass
    - ap.component.spec.ts

        Define una prueba unitaria para el AppComponent raíz.
    - app.component.ts

         Define la lógica del componente raíz de la aplicación, denominado AppComponent. La vista asociada a este componente raíz se convierte en la raíz
        de la jerarquía de vistas a medida que se añaden componentes y servicios a la app.

        
    - app.module.ts

        Define el módulo raíz, llamado AppModule, que le dice a Angular cómo ensamblar la aplicación. Inicialmente declara sólo el AppComponent.
        A medida que añades más componentes a la aplicación, deben ser declarados aquí.

- assets

    Contiene todos los archivos de imagen y otros activos que se copiaran tal cual cuando cree su aplicación.

     - ".gitkeep"


- favicon.ico

      Archivo del icono del proyecto, en concreto lo veremos en la barra de favoritos.


- index.html

      Archivo de la página principal del proyecto. Es la página HTML principal que se sirve cuando alguien visita nuestro sitio.
      La CLI añade automáticamente todos los archivos JS y CSS al crear la aplicación, por lo que no es necesario añadir
      ninguna etiqueta <script> o <link> manualmente.


- main.ts

      Archivo TypeScript inicial del proyecto donde podremos configurar todas la configuraciones globales del proyecto.
      Es el punto de entrada principal para nuestra aplicación. Compila la aplicación con el compilador JIT y arranca el módulo raíz de la aplicación (AppModule) para ejecutarse en el navegador. También puede usar el compilador AOT sin cambiar ningún código añadiendo la bandera --aot a los comandos CLI build y serve.


- styles.sass

      Lista los archivos CSS que suministran estilos para un proyecto. La extensión refleja el preprocesador de estilos que ha configurado para el proyecto.


6. ".editorconfig"

Configuración de nuestro editor de código.


7. ".gitignore"

Contiene el nombre de las carpetas y archivos que debe ignorar el git cuando lo añadimos al repositorio.


8. "angular.json"

Contiene la configuración de Angular. Además, incluye rutas, versiones, etc.


9. "package-lock.json"

Proporciona información sobre la versión de todos los paquetes instalados en node_modules por el cliente npm.


10. "package.json"

Configura las dependencias de paquetes npm que están disponibles para todos los proyectos del espacio de trabajo.


11. "tsconfig.app.json"

Configuración de TypeScript específica de aplicación, incluidas las opciones del compilador de plantillas de TS y Angular. 


12. "tsconfig.json"

Contiene la configuración de TypeScript base para los proyectos en el espacio de trabajo.
Todos los demás archivos heredan de este archivo base.


13. "tsconfig.spec.json"

Configuración de TS para las pruebas de la aplicación.


14. "README.md"

Aquí añadimos información sobre la aplicación. Este archivo es leído por GIT y los muestra en el repositorio.
