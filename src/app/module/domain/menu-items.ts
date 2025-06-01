export const MODULE_TITLE = {
    'SI': 'Sistemas Informáticos',
    'BD': 'Bases de Datos',
    'PROG': 'Programación',
    'LM': 'Lenguajes de Marcas',
    'ED': 'Entornos de Desarrollo',
    'FOL': 'Formación y Orientación Laboral',
    'DWEC': 'Desarrollo Web en Entorno Cliente',
    'DWES': 'Desarrollo Web en Entorno Servidor',
    'DIW': 'Diseño de Interfaces Web',
    'EIE': 'Empresa e Iniciativa Emprendedora',
    'TFG': 'Proyecto de Desarrollo de Aplicaciones Web',
    'FCT': 'Formación en Centros de Trabajo'
}

export const MAIN_MODULES = [
    {path: '', title: 'Inicio'},
    {path: '/sistemas-informaticos', title: 'Sistemas Informáticos'},
    {path: '/bases-de-datos', title: 'Bases de Datos'},
    {path: '/programacion', title: 'Programación'},
    {path: '/lenguajes-de-marcas', title: 'Lenguajes de Marcas'},
    {path: '/entornos-de-desarrollo', title: 'Entornos de Desarrollo'},
    {path: '/formacion-y-orientacion-laboral', title: 'Formación y Orientación Laboral'},
    {path: '/desarrollo-web-en-entorno-cliente', title: 'Desarrollo Web en Entorno Cliente'},
    {path: '/desarrollo-web-en-entorno-servidor', title: 'Desarrollo Web en Entorno Servidor'},
    {path: '/despliegue-de-aplicaciones', title: 'Despliegue de Aplicaciones Web'},
    {path: '/diseno-de-interfaces-web', title: 'Diseño de Interfaces Web'},
    {path: '/empresa-e-iniciativa-emprendedora', title: 'Empresa e Iniciativa Emprendedora'},
    {path: '/proyecto-daw', title: 'Proyecto de Desarrollo de Aplicaciones Web'},
    {path: '/formacion-en-centros-de-trabajo', title: 'Formación en Centros de Trabajo'}
];

export const MODULE_LESSONS: { [key: string]: any[] } = {
    'programacion': [
        {path: '/programacion/ut1', title: 'UT01.- Introducción a la programación'},
        {path: '/programacion/ut2', title: 'UT02.- Uso de estructuras de control'},
        {path: '/programacion/ut3', title: 'UT03.- Utilización de objetos'},
        {path: '/programacion/ut4', title: 'UT04.- Cadenas de caracteres y arrays'},
        {path: '/programacion/ut5', title: 'UT05.- Desarrollo de clases'},
        {path: '/programacion/ut6', title: 'UT06.- Utilización avanzada de clases'},
        {path: '/programacion/ut7', title: 'UT07.- Estructuras de datos internas (memoria)'},
        {path: '/programacion/ut8', title: 'UT08.- Estructuras de datos externas (ficheros)'},
        {path: '/programacion/ut9', title: 'UT09.- Interfaces gráficas de usuario'},
        {path: '/programacion/ut10', title: 'UT10.- Gestión de bases de datos: relacionales y orientadas a objetos'},
    ],
    'sistemas-informaticos': [
        {path: '/sistemas-informaticos/ut1', title: 'UT01.- Hardware de un Sistema Informático'},
        {path: '/sistemas-informaticos/ut2', title: 'UT02.- Software de un Sistema Informático'},
        {path: '/sistemas-informaticos/ut3', title: 'UT03.- Redes de Ordenadores'},
        {path: '/sistemas-informaticos/ut4', title: 'UT04.- Instalación y configuración (Windows I)'},
        {path: '/sistemas-informaticos/ut5', title: 'UT05.- Administración básica del sistema (Windows II)'},
        {path: '/sistemas-informaticos/ut6', title: 'UT06.- Administración de redes (Windows III)'},
        {path: '/sistemas-informaticos/ut7', title: 'UT07.- Instalación y configuración (Linux I)'},
        {path: '/sistemas-informaticos/ut8', title: 'UT08.- Administración básica del sistema (Linux II)'},
        {path: '/sistemas-informaticos/ut9', title: 'UT09.- Administración de la red (Linux III)'},
    ],
    'bases-de-datos': [
        {path: '/bases-de-datos/ut1', title: 'UT01.- Almacenamiento de la información'},
        {path: '/bases-de-datos/ut2', title: 'UT02.- Interpretación de Diagramas E-R'},
        {path: '/bases-de-datos/ut3', title: 'UT03.- Bases de datos Relacionales'},
        {path: '/bases-de-datos/ut4', title: 'UT04.- Realización de Consultas.'},
        {path: '/bases-de-datos/ut5', title: 'UT05.- Tratamiento de Datos'},
        {path: '/bases-de-datos/ut6', title: 'UT06.- Programación de Bases de Datos'},
        {path: '/bases-de-datos/ut7', title: 'UT07.- Uso de Bases de Datos Objeto-Relaciones.'},
    ],
    'lenguajes-de-marcas': [
        {
            path: '/lenguajes-de-marcas/ut1',
            title: 'UT01.- Aspectos básicos de los lenguajes de marcas y sistemas de gestión empresarial'
        },
        {path: '/lenguajes-de-marcas/ut2', title: 'UT02.- Utilización de lenguajes de marcas en entornos web'},
        {path: '/lenguajes-de-marcas/ut3', title: 'UT03.- Sindicación de Contenidos'},
        {path: '/lenguajes-de-marcas/ut4', title: 'UT04.- Definición de esquemas y vocabularios en XML'},
        {path: '/lenguajes-de-marcas/ut5', title: 'UT05.- Conversión y adaptación de documentos XML'},
        {path: '/lenguajes-de-marcas/ut6', title: 'UT06.- Almacenamiento de información'},
    ],
    'entornos-de-desarrollo': [
        {path: '/entornos-de-desarrollo/ut1', title: 'UT01.- Desarrollo del software'},
        {path: '/entornos-de-desarrollo/ut2', title: 'UT02.- Instalación y uso de entornos de desarrollo'},
        {path: '/entornos-de-desarrollo/ut3', title: 'UT03.- Diseño y realización de pruebas'},
        {path: '/entornos-de-desarrollo/ut4', title: 'UT04.- Optimización y documentación'},
        {
            path: '/entornos-de-desarrollo/ut5',
            title: 'UT05.- Diseño orientado a objetos. Diagramas estructurales y de comportamiento'
        },
    ],
    'formacion-y-orientacion-laboral': [
        {path: '/formacion-y-orientacion-laboral/ut1', title: 'UT01.- Relación Laboral Individual'},
        {path: '/formacion-y-orientacion-laboral/ut2', title: 'UT02.- Las relaciones colectivas de trabajo'},
        {path: '/formacion-y-orientacion-laboral/ut3', title: 'UT03.- Seguridad Social'},
        {path: '/formacion-y-orientacion-laboral/ut4', title: 'UT04.- Evaluación de riesgos profesionales'},
        {path: '/formacion-y-orientacion-laboral/ut5', title: 'UT05.- El Plan de Prevención de la Empresa'},
        {path: '/formacion-y-orientacion-laboral/ut6', title: 'UT06.- Medidas de Prevención y Protección'},
        {
            path: '/formacion-y-orientacion-laboral/ut7',
            title: 'UT07.- Los equipos de trabajo y la gestión del conflicto'
        },
        {path: '/formacion-y-orientacion-laboral/ut8', title: 'UT08.- Búsqueda de empleo'},
    ],
    'desarrollo-web-en-entorno-cliente': [
        {
            path: '/desarrollo-web-en-entorno-cliente/ut1',
            title: 'UT01.- Arquitecturas y lenguajes de programación en clientes web - JavaScript'
        },
        {path: '/desarrollo-web-en-entorno-cliente/ut2', title: 'UT02.- Modelo de objetos predefinidos en JavaScript'},
        {
            path: '/desarrollo-web-en-entorno-cliente/ut3',
            title: 'UT03.- Estructuras definidas por el usuario en JavaScript'
        },
        {
            path: '/desarrollo-web-en-entorno-cliente/ut4',
            title: 'UT04.- Gestión de eventos y formularios en JavaScript'
        },
        {path: '/desarrollo-web-en-entorno-cliente/ut5', title: 'UT05.- Modelo de objetos del documento en Javascript'},
        {path: '/desarrollo-web-en-entorno-cliente/ut6', title: 'UT06.- Programación AJAX el JavaScript'},
    ],
    'desarrollo-web-en-entorno-servidor': [
        {
            path: '/desarrollo-web-en-entorno-servidor/ut1',
            title: 'UT01.- Plataformas de programación web en entorno_ ervidor. Características del lenguaje_PHP'
        },
        {path: '/desarrollo-web-en-entorno-servidor/ut2', title: 'UT02.- Trabajar con bases de datos en PHP'},
        {path: '/desarrollo-web-en-entorno-servidor/ut3', title: 'UT03.- Sesiones y autenticación en PHP'},
        {path: '/desarrollo-web-en-entorno-servidor/ut4', title: 'UT04.- Programación orientada a objetos en PHP'},
        {path: '/desarrollo-web-en-entorno-servidor/ut5', title: 'UT05.- Desarrollo de aplicaciones web en Laravel'},
        {path: '/desarrollo-web-en-entorno-servidor/ut6', title: 'UT06.- Servicios web'},
        {path: '/desarrollo-web-en-entorno-servidor/ut7', title: 'UT07.- Aplicaciones web dinámicas e híbridas'},
    ],
    'despliegue-de-aplicaciones': [
        {
            path: '/despliegue-de-aplicaciones/ut1',
            title: 'UT01.- Implantación, configuración y administración de servidores web'
        },
        {
            path: '/despliegue-de-aplicaciones/ut2',
            title: 'UT02.- Configuración y administración de servidores de aplicaciones'
        },
        {
            path: '/despliegue-de-aplicaciones/ut3',
            title: 'UT03.- Instalación y administración de servidores de alta disponibilidad.'
        },
        {
            path: '/despliegue-de-aplicaciones/ut4',
            title: 'UT04.- Servicios de red implicados en el despliegue de una aplicación web'
        },
        {path: '/despliegue-de-aplicaciones/ut5', title: 'UT05.- Documentación y control de versiones'},
    ],
    'diseno-de-interfaces-web': [
        {path: '/diseno-de-interfaces-web/ut1', title: 'UT01.- La interfaz web'},
        {
            path: '/diseno-de-interfaces-web/ut2',
            title: 'UT02.- Guías de estilo. Prototipos. Revisión lenguaje de marcas'
        },
        {path: '/diseno-de-interfaces-web/ut3', title: 'UT03.- Uso avanzado de hojas de estilo'},
        {path: '/diseno-de-interfaces-web/ut4', title: 'UT04.- Modelo de cajas. Frameworks'},
        {path: '/diseno-de-interfaces-web/ut5', title: 'UT05.- Preprocesadores'},
        {path: '/diseno-de-interfaces-web/ut6', title: 'UT06.- Multimedia'},
        {path: '/diseno-de-interfaces-web/ut7', title: 'UT07.- Integración de contenido interactivo'},
        {path: '/diseno-de-interfaces-web/ut8', title: 'UT08.- Accesibilidad web'},
        {path: '/diseno-de-interfaces-web/ut9', title: 'UT09.- La usabilidad web'},
        {path: '/diseno-de-interfaces-web/ut10', title: 'UT010.- Librerías para la creación de interfaces'},
    ],
    'empresa-e-iniciativa-emprendedora': [
        {path: '/empresa-e-iniciativa-emprendedora/ut1', title: 'UT01.- La interfaz web'},
        {
            path: '/empresa-e-iniciativa-emprendedora/ut2',
            title: 'UT02.- Guías de estilo. Prototipos. Revisión lenguaje de marcas'
        },
        {path: '/empresa-e-iniciativa-emprendedora/ut3', title: 'UT03.- Uso avanzado de hojas de estilo'},
        {path: '/empresa-e-iniciativa-emprendedora/ut4', title: 'UT04.- Modelo de cajas. Frameworks'},
        {path: '/empresa-e-iniciativa-emprendedora/ut5', title: 'UT05.- Preprocesadores'},
        {path: '/empresa-e-iniciativa-emprendedora/ut6', title: 'UT06.- Multimedia'},
        {path: '/empresa-e-iniciativa-emprendedora/ut7', title: 'UT07.- Integración de contenido interactivo'},
    ],
    'proyecto-daw': [
        {path: '/proyecto-daw/ut1', title: 'UT01.- TFG'},
    ],
    'formacion-en-centros-de-trabajo': [
        {path: '/formacion-en-centros-de-trabajo/ut1', title: 'UT01.- FCT'},
    ]
};
