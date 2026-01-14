En este trabajo se abordará el diseño y desarrollo de un sistema web aplicado a la terminal de transporte de Florida Valle del Cauca, como respuesta a la necesidad de modernizar la consulta de rutas, tarifas y servicios ofrecidos a los usuarios. A partir del caso de estudio, se analizarán los requisitos funcionales y no funcionales, las especificaciones técnicas y los recursos humanos y tecnológicos necesarios para la construcción de la plataforma.
El proyecto contempla la creación de una página web dinámica capaz de almacenar información en una base de datos MySQL, utilizando PHP para gestionar la conexión y las operaciones del lado del servidor. Asimismo, se desarrollará la estructura visual mediante HTML, USB y JavaScript, permitiendo presentar de manera organizada las posibles soluciones planteadas.
De forma complementaria, se integrarán conceptos de SEO y marketing digital, fundamentales para garantizar la visibilidad y el posicionamiento del sitio web. El SEO permitirá optimizar el rendimiento, la estructura y el contenido del sitio para mejorar su presencia en motores de búsqueda; mientras que el marketing digital apoyará la promoción y alcance del proyecto, generando una mayor interacción con los usuarios.
En conjunto, este proceso permitirá aplicar de manera práctica los conocimientos adquiridos, fortaleciendo las competencias necesarias para el desarrollo web moderno y orientado a las necesidades reales de la empresa Terminal de transporte de Florida Valle.



Objetivos
Objetivo general
Diseñar y desarrollar una plataforma web dinámica para la terminal de transporte de Florida Valle del Cauca que permita centralizar la información de rutas, tarifas y servicios, optimizar la interacción con los usuarios mediante el uso de tecnologías web modernas e integrar estrategias de SEO y marketing digital que mejoren la visibilidad, accesibilidad y funcionalidad del sitio.
Objetivos específicos
    • Implementar un sistema web dinámico que permita gestionar y actualizar la información de rutas, tarifas y servicios en la terminal de transporte de Florida Valle del Cauca, garantizando que los usuarios puedan acceder a datos claros, centralizados y en tiempo real.
    • Desarrollar los módulos funcionales del sitio utilizando PHP y MySQL para almacenar, procesar y validar la información ingresada por los usuarios, asegurando la correcta interacción entre la interfaz web y la base de datos.
    • Integrar estrategias de SEO y marketing digital orientadas a optimizar el posicionamiento del sitio web, mejorar su estructura y visibilidad en motores de búsqueda, y aumentar la interacción de los usuarios con el contenido publicado.


Contenido
Empresa aplicada: Expreso Florida Ltda.
La terminal de transporte de Florida Valle del Cauca es una empresa intermunicipal de transporte de pasajeros con sede en el Valle del Cauca, Colombia, operando rutas como Cali – Florida, Palmira, Pradera, Corinto y Santander, entre otras.
Su misión es ofrecer un servicio seguro, confiable y de alta calidad, con un fuerte compromiso ambiental y con la comunidad.
Procesos y procedimientos sistematizados
Proceso de información de servicios (Rutas/Tarifas/Horarios)
Procedimiento:
    • Publicación automática de rutas y tarifas almacenadas en MySQL.
    • Consulta dinámica desde la web mediante PHP/JS.
    • Actualización desde un panel administrativo.
Proceso PQRS
Procedimiento:
    • Formulario web.
    • Registro automático en la base de datos.
    • Gestión y seguimiento por parte del administrador.

Proceso de Atención al usuario / contacto
Procedimiento:
    • Formulario o chat básico.
    • Canalización automática de mensajes al área respectiva.
    • Control de tiempos de respuesta.
Proceso de gestión de contenidos
Procedimiento:
    • Administración de misión, visión, noticias, imágenes.
    • Panel interno en PHP para modificar contenido sin tocar código.
Proceso de Seguridad y Privacidad
Procedimiento:
    • SSL activo (HTTPS).
    • Validación de formularios.
    • Copias de seguridad.
    • Autenticación en módulos administrativos.



Problemática planteada
La terminal de transporte de Florida Valle del Cauca, ha tenido problemas permanentes debido a la falta de un sistema en línea que permita gestionar sus servicios de manera eficiente.
Entre las principales carencias se identifican:
    • Falta de información centralizada: Los usuarios no podían consultar en línea información sobre rutas, precios ni disponibilidad de vehículos.
    • Compra de tiquetes limitada: La venta de tiquetes se hacía exclusivamente en ventanilla, generando filas y pérdida de tiempo.
    • Imposibilidad de cotizar: Los pasajeros no podían calcular de forma anticipada el valor total de su viaje.
    • Gestión manual de disponibilidad: No había un mecanismo para validar cupos en tiempo real.
Es necesario mejorar la página web de la terminal de transporte de Florida Valle del Cauca, porque la actual no satisface las necesidades de los usuarios ni facilita la gestión de la información, por lo que se requiere una plataforma más moderna, dinámica y eficiente.
Análisis y requerimientos
Requisitos funcionales       
RF1 – Consulta de rutas, horarios y tarifas
El usuario debe poder ver información actualizada
RF2 – Buscador dinámico de rutas
Filtrar destinos y calcular el valor total del viaje.
RF3 – Simulación de compra de tiquetes
Formulario que captura datos del pasajero y muestra resumen.
RF4 – Registro en base de datos
Los formularios (compra, PQRS, contacto) quedan almacenados en MySQL.
RF5 – Panel de administración
Gestión interna de rutas, contenidos, tarifas y PQRS.
RF6 – Validación de disponibilidad en tiempo real
Lectura de cupos desde MySQL (Etapa 3 de tu proyecto).
RF7 – Sistema de autenticación
Login de administradores (PHP + MySQL).
RF8 – Integración con Docker
Cargar Apache, PHP, MySQL y phpMyAdmin en contenedores funcionales.
Requisitos no funcionales
RNF1 – Usabilidad
Interfaz clara, moderna, accesible desde cualquier dispositivo.
RNF2 – Seguridad
    • Datos cifrados con SSL.
    • Sanitización de entradas PHP.
    • Protección contra inyecciones SQL.
RNF3 – Rendimiento
    • Respuestas rápidas (<2 segundos).
    • Optimización de imágenes.
    • Código liviano en JS y CSS.
RNF4 – Escalabilidad
El sistema puede crecer gracias al uso de Docker.
RNF5 – Mantenibilidad
Separación por carpetas (html, css, js, php).
Uso de docker-compose para levantar servicios fácilmente.
RNF6 – Compatibilidad
Funciona en Chrome, Firefox y dispositivos móviles.
RNF7 – Disponibilidad
Acceso 24/7 al sistema desde cualquier ubicación.
Especificaciones técnicas
Servidor del sistema (mínimo):
    • CPU: 2–4 núcleos.
    • RAM: 8 GB.
    • Disco SSD: 100 GB.
    • Conectividad a internet estable.
    • UPS para respaldo energético.
Puntos de acceso o kioscos para usuarios (opcional):
    • Pantallas táctiles o PC para consultas rápidas.
    • Tablets para personal administrativo.
Equipo del personal administrativo:
    • Computador con mínimo 4 GB RAM.
    • Navegador actualizado.
    • Acceso a la red interna / internet.
Recursos de software
Backend y servidor
    • PHP 8.2
    • Apache (Servidor web)
    • MySQL 8.1 (Base de datos)
    • phpMyAdmin (Gestión visual de la BD)
Frontend
    • HTML5
    • CSS3
    • JavaScript (búsquedas, validaciones, cálculos)
Virtualización / despliegue
    • Docker
    • docker-compose.yml
Entorno de desarrollo
    • Visual Studio Code
    • Extensiones: PHP, HTML, Docker, Live Server
    • Linux (Ubuntu / Mint)
Seguridad
    • Certificado SSL
    • Validación de datos
