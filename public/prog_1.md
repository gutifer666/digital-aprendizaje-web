# Introducción a la programación.

# Caso práctico

La evolución de Internet y de las nuevas tecnologías, así como las diferentes posibilidades para establecer nuevas líneas de negocio para la empresa **BK Programación**, han hecho que **Ada** haya decidido abrir una vía de innovación. Para ello, su empresa deberá realizar el desarrollo de sus aplicaciones a través de lenguajes y técnicas de programación modernos, aunque con una eficiencia y flexibilidad contrastadas.

**María y Juan**, ayudados y orientados por **Ada**, recordarán y ampliarán sus conocimientos relacionados con la programación, permitiéndoles crear software que pueda adaptarse a nuevas situaciones, como el funcionamiento en diferentes plataformas (PDA, Móviles, Web, etc.) o la interacción con bases de datos. Todo ello sin perder de vista de dónde parten y hacia dónde quieren redirigir sus esfuerzos.

Estas innovaciones, junto a la predisposición para adaptarse y evolucionar que **BK Programación** está potenciando en todas sus áreas, repercutirán en una mayor capacidad de respuesta ante las necesidades de sus posibles clientes. En definitiva, conseguir mayor competitividad.

¿Cuántas acciones de las que has realizado hoy, crees que están relacionadas con la programación?

Hagamos un repaso de los primeros instantes del día: te ha despertado la alarma de tu teléfono móvil o radio-despertador, has preparado el desayuno utilizando el microondas, mientras desayunabas has visto u oído las últimas noticias a través de tu receptor de televisión digital terrestre, te has vestido y puede que hayas utilizado el ascensor para bajar al portal y salir a la calle, etc. Quizá no es necesario que continuemos más para darnos cuenta de que casi todo lo que nos rodea, en alguna medida, está relacionado con la programación, los programas y el tratamiento de algún tipo de información.

El volumen de datos que actualmente manejamos y sus innumerables posibilidades de tratamiento constituyen un vasto territorio en el que los programadores tienen mucho que decir.

En esta primera unidad realizaremos un recorrido por los conceptos fundamentales de la programación de aplicaciones. Iniciaremos nuestro camino conociendo con qué vamos a trabajar, qué técnicas podemos emplear y qué es lo que pretendemos conseguir. Continuando con el análisis de las diferentes formas de programación existentes, identificaremos qué fases conforman el desarrollo de un programa, avanzaremos detallando las características relevantes de cada uno de los lenguajes de programación disponibles, para posteriormente, realizar una visión general del lenguaje de programación Java. Finalmente, tendremos la oportunidad de conocer con qué herramientas podríamos desarrollar nuestros programas, escogiendo entre una de ellas para ponernos manos a la obra, utilizando el lenguaje Java.

# 1.- Programas: buscando una solución.

# Caso práctico

Ministerio de Educación. Uso educativo-nc.

Elaboración propia.

**Ada** conoce bien lo que significa tener que llevar a cabo el proceso completo de creación de software y sabe que, en ocasiones, no se le da la importancia que debería a las fases iniciales de este proceso. Quiere que **Juan**, que desarrolla programas casi sin darse cuenta, recuerde las ventajas que aporta un buen análisis inicial de los problemas a solucionar y que no aborde el desarrollo de sus programas sentándose directamente ante el ordenador a teclear código.

**Juan** le comenta a **Ada** y a **María**:

—La verdad es que cuando conoces bien un lenguaje de programación crees que puedes hacer cualquier programa directamente sobre el ordenador, pero al final te das cuenta de que deberías haberte parado a planificar tu trabajo. Muchas veces tienes que volver atrás, recodificar y en ocasiones, rehacer gran parte del programa porque lo que tienes no está bien planteado.

**María**, que permanece atenta a lo que dicen **Ada** y **Juan**, quiere aprender bien desde el principio y tendrá la ventaja de tener a su lado a dos expertos.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Silueta del perfil de un hombre, dentro de la zona de la cabeza aparecen ruedas dentadas a modo de mecanismo. Todo sobre fondo azul oscuro.](./recopila_files/PROG01_CONT_R03_pensando.JPG "Pensando")

[CC by](http://creativecommons.org/licenses/by/3.0/deed.es "CC by") [Filosofias filosoficas](http://commons.wikimedia.org/wiki/File:Filos_segundo_logo.JPG "Filosofias filosoficas")

Generalmente, la primera razón que mueve a una persona hacia el aprendizaje de la programación es utilizar el ordenador como herramienta para resolver problemas concretos. Como en la vida real, la búsqueda y obtención de una solución a un problema determinado, utilizando medios informáticos, se lleva a cabo siguiendo unos pasos fundamentales. En la siguiente tabla podemos ver estas analogías.

| En la vida real... | En Programación... |
| --- | --- |
| Observación de la situación o problema. | **Análisis del problema:** requiere que el problema sea definido y comprendido claramente para que pueda ser analizado con todo detalle. |
| Pensamos en una o varias posibles soluciones. | **Diseño o desarrollo de algoritmos:** procedimiento paso a paso para solucionar el problema dado. |
| Aplicamos la solución que estimamos más adecuada. | **Resolución del algoritmo elegido en la computadora:** consiste en convertir el algoritmo en programa, [ejecutarlo_Ejecutar un programa._Ejecutar un programa consiste en hacer que el ordenador siga una a una sus instrucciones, haciendo lo que cada una de ellas especifica.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) y comprobar que soluciona verdaderamente el problema. |

¿Qué virtudes debería tener nuestra solución?

- **Corrección y eficacia:** si resuelve el problema adecuadamente.
- **Eficiencia:** si lo hace en un tiempo mínimo y con un uso óptimo de los recursos del sistema.

Para conseguirlo, cuando afrontemos la construcción de la solución tendremos que tener en cuenta los siguientes conceptos:

1. **Abstracción:** se trata de realizar un análisis del problema para descomponerlo en problemas más pequeños y de menor complejidad, describiendo cada uno de ellos de manera precisa. **Divide y vencerás**, es una filosofía general para resolver problemas y de aquí que su nombre no sólo forme parte del vocabulario informático, sino que también se utiliza en muchos otros ámbitos.
2. **Encapsulación:** consiste en ocultar la información para poder implementarla de diferentes maneras sin que esto influya en el resto de elementos.
3. **Modularidad:** estructuraremos cada parte en módulos independientes, cada uno de ellos tendrá su función correspondiente.

# Citas para pensar

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

> “El comienzo de la sabiduría para un ingeniero de software es reconocer la diferencia entre hacer que un programa funcione y conseguir que lo haga correctamente.”**Roger Pressman**

# 1.1.- Algoritmos y programas.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Después de analizar en detalle el problema a solucionar, hemos de diseñar y desarrollar el algoritmo adecuado. Pero, **¿qué es un algoritmo?**

**Algoritmo:** secuencia ordenada de pasos, descrita sin ambigüedades, que conducen a la solución de un problema dado.

![En una mesa de un obrador de pan, las manos del panadero amasan la harina para darle forma. Al lado, un pan ya cocido y dos hogazas aún por cocer.](./recopila_files/FD002648.png "Elaborando una receta.")

Stockbyte.Uso educativo no comercial

para plataformas públicas de

Formación Profesional a distancia.

CD-DVD Num. V43

Los algoritmos son independientes de los lenguajes de programación y de las computadoras donde se ejecutan. Un mismo algoritmo puede ser expresado en diferentes lenguajes de programación y podría ser ejecutado en diferentes dispositivos. Piensa en una receta de cocina, ésta puede ser expresada en castellano, inglés o francés, podría ser cocinada en fogón o vitrocerámica, por un cocinero o más, etc. Pero independientemente de todas estas circunstancias, el plato se preparará siguiendo los mismos pasos.

La diferencia fundamental entre algoritmo y **programa** es que, en el segundo, los pasos que permiten resolver el problema, deben escribirse en un determinado **lenguaje de programación** para que puedan ser ejecutados en el ordenador y así obtener la solución.

**Los lenguajes de programación** son sólo un medio para expresar el algoritmo y el ordenador un procesador para ejecutarlo. El diseño de los algoritmos será una tarea que necesitará de la creatividad y conocimientos de las técnicas de programación. Estilos distintos, de distintos programadores a la hora de obtener la solución del problema, darán lugar a algoritmos diferentes, igualmente válidos.

En esencia, todo problema se puede describir por medio de un algoritmo y las características fundamentales que éstos deben cumplir son:

- Debe ser **preciso** e indicar el orden de realización paso a paso.
- Debe estar **bien definido**, si se ejecuta dos o más veces, debe obtener el mismo resultado cada vez.
- Debe ser **finito**, debe tener un número finito de pasos.

Pero cuando los problemas son complejos, es necesario descomponer éstos en subproblemas más simples y, a su vez, en otros más pequeños. Estas estrategias reciben el nombre de [diseño descendente_Diseño descendente_Metodología de diseño de programas, consistente en la descomposición del problema en problemas más sencillos de resolver.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) o [**diseño modular**_Diseño modular_Metodología de diseño de programas, que consiste en dividir la solución a un problema en módulos más pequeños o subprogramas. Las soluciones de los módulos se unirán para obtener la solución general del problema.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) (**top-down design**). Este sistema se basa en el lema **divide y vencerás**.

Para representar gráficamente los algoritmos que vamos a diseñar, tenemos a nuestra disposición diferentes herramientas que ayudarán a describir su comportamiento de una forma precisa y genérica, para luego poder codificarlos con el lenguaje que nos interese. Entre otras tenemos:

- **Diagramas de flujo:** esta técnica utiliza símbolos gráficos para la representación del algoritmo. Suele utilizarse en las fases de análisis.
- **Pseudocódigo:** esta técnica se basa en el uso de palabras clave en lenguaje natural, [constantes_Constantes_Estructura de datos que se utiliza en los lenguajes de programación que no puede cambiar su contenido en el transcurso del programa.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource), [variables_Variables_Estructura de datos que, como su nombre indica, puede cambiar de contenido a lo largo de la ejecución de un programa.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource), otros objetos, instrucciones y estructuras de programación que expresan de forma escrita la solución del problema. Es la técnica más utilizada actualmente.
- **Tablas de decisión:** En una tabla son representadas las posibles condiciones del problema con sus respectivas acciones. Suele ser una técnica de apoyo al pseudocódigo cuando existen situaciones condicionales complejas.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

A continuación te ofrecemos dos enlaces muy interesantes:

- En el primer vídeo puedes ver los elementos gráficos fundamentales que se utilizan para la generación de diagramas de flujo.
- En el segundo vídeo tienes un ejemplo de uso del programa PSeInt.

[https://www.youtube.com/embed/tMEscFCEP0g](https://www.youtube.com/embed/tMEscFCEP0g)

[Resumen textual alternativo](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/Resumen_textual_alternativo_para_el_video_Elementos_de_los_diagramas_de_flujo..htm "Resumen textual alternativo para ")

[http://www.youtube.com/embed/nUnULP-suvA](http://www.youtube.com/embed/nUnULP-suvA)

[Resumen textual alternativo](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/Resumen_textual_alternativo_para_el_video_Introduccion_a_la_Programacion_con_PSInt..htm "Resumen textual alternativo para ")

En el **Anexo III** se trata el pseudocódigo, por lo que debes echarle un buen vistazo, hay bastantes ejemplos para ilustrar su uso.

Si quieres un programa para realizar pseudocódigos, a continuación tienes un enlace donde puedes bajarte el programa PSeInt.

[Introducción a la programación con PSeInt](http://pseint.sourceforge.net/ "Ir al sitio web de descarga de PSeInt")

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

**Rellena el hueco con el concepto adecuado:**



A los pasos que permiten resolver el problema, escritos en un lenguaje de programación, para que puedan ser ejecutados en el ordenador y así obtener la solución, se les denomina: Rellenar huecos (1):  JXUwMDI4JXUwMDAyJXUwMDFkJXUwMDA4JXUwMDE1JXUwMDEzJXUwMDBjJXUwMDBj .

Habilitar JavaScript

Si estos pasos estuvieran descritos en un lenguaje genérico independiente de la máquina y del lenguaje de programación, estaríamos hablando de **algoritmos**.

# 2.- Paradigmas de la programación.

# Caso práctico

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![En primer plano una mesa de reunión sobre la que hay un teléfono de sobremesa. En segundo plano, dos personas se dan la mano. Representan el acuerdo entre la empresa y el cliente después de una reunión.](./recopila_files/stk32301bme.png "Acuerdo con cliente.")

Stockbyte.Uso educativo no comercial  
para plataformas públicas de  
Formación Profesional a distancia.

CD-DVD Num. CD165

**Ada** comenta con **Juan** y **María** los distintos enfoques para el desarrollo de programas que han existido a lo largo de la historia de la programación, destacando que todos van a tener que “renovar” su forma de pensar, si quieren comenzar a utilizar un lenguaje moderno que les permita construir programas adaptados a las nuevas necesidades de sus clientes.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Aparece una señal rural de diferentes caminos fabricada en madera.](./recopila_files/PROG01_CONT_R04_crucecaminos.jpg "Múltiples caminos")

[CC by-sa](http://creativecommons.org/licenses/by-sa/3.0/deed.es "CC by-sa") [barraquito](http://commons.wikimedia.org/wiki/File:Cruce_de_caminos-El_Hierro.jpg "barraquito")

¿Cuántas formas existen de hacer las cosas?

Supongo que estarás pensando: varias o incluso, muchas.

Pero cuando se establece un patrón para la creación de aplicaciones nos estamos acercando al significado de la palabra paradigma.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

**Paradigma de programación:**

Es un modelo básico para el diseño y la implementación de programas. Este modelo determinará cómo será el proceso de diseño y la estructura final del programa.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

El paradigma representa un enfoque particular o filosofía para la construcción de software. Cada uno tendrá sus ventajas e inconvenientes, será más o menos apropiado, pero no es correcto decir que exista uno mejor que los demás.

Puedes ver un resumen de los diferentes paradigmas de programación en el siguiente documento:

[Paradigmas de programación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG01_CONT_R05_paradigmas.pdf "Descargar documento sobre paradigmas [pdf - 596 KB]") (596 KB)

Como habrás podido apreciar, existen múltiples paradigmas, incluso puede haber lenguajes de programación que no se clasifiquen únicamente dentro de uno de ellos. Un lenguaje como [Smalltalk_Smalltalk_Lenguaje de programación que permite realizar tareas de computación mediante la interacción con un entorno de objetos virtuales. Metafóricamente, se puede considerar que Smalltalk es un mundo virtual donde viven objetos que se comunican mediante el envío de mensajes.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) es un lenguaje basado en el paradigma orientado a objetos. El lenguaje de programación [Scheme_Scheme_Lenguaje de programación funcional, dialecto de Lisp. Desarrollado en la década de los setenta. Scheme proporciona el mínimo número posible de nociones primitivas, construyendo todo lo demás a partir de un reducido número de abstracciones. Scheme ofrece también gestión automática de memoria. Las listas son la estructura de datos básica del lenguaje, que también ofrece arrays entre sus tipos predefinidos.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource), en cambio, soporta sólo programación funcional. [Python_Python_Lenguaje de programación de alto nivel, cuya filosofía hace hincapié en una sintaxis limpia y que favorezca un código legible. Es multiparadigma, ya que soporta orientación a objetos, programación imperativa y programación funcional. Es un lenguaje interpretado y está fuertemente tipado. Es multiplataforma.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) soporta múltiples paradigmas.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Te proponemos el siguiente enlace en el que encontrarás información adicional sobre los diferentes paradigmas de programación.

[Paradigmas de programación y lenguajes](http://javierleal.wordpress.com/2009/08/27/paradigmas-de-programacion/ "Acceder al artículo sobre paradigmas y lenguajes de programación.")

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

¿Cuál es el objetivo que se busca con la aplicación de los diferentes enfoques?

Fundamentalmente:

- **reducir la dificultad para el mantenimiento** de las aplicaciones,
- **mejorar el rendimiento** del programador y, en general,
- **mejorar la productividad y calidad** de los programas.

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

# Pregunta

**¿En qué paradigma de programación podríamos enmarcar el lenguaje de programación Java?**

# Respuestas

[Opción 1](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-14_63)

Programación Estructurada.

[Opción 2](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-14_85)

Programación Declarativa.

[Opción 3](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-14_88)

Programación Orientada a Objetos.

# Retroalimentación

No, Java permite trabajar con una filosofía más potente que la programación estructurada.

No, la programación declarativa se encarga de describir el problema y no las sentencias para su solución.

Sí, Java emplea la filosofía de ver el mundo como objetos que tienen propiedades y métodos que les permiten interactuar entre ellos.

# Solución

1. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-14_63) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa0b14_60))
2. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-14_85) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa1b14_60))
3. [Opción correcta](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-14_88) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa2b14_60))

# 3.- Fases de la programación.

# Caso práctico

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Programador frente al ordenador buscando información.](./recopila_files/SEGURIDAD_Y__MEDIO_AMBIENTE_05.jpg "Programador buscando información.")

Ministerio de Educación. Uso educativo-nc.

Elaboración propia.

**Juan** pregunta a **Ada** cómo van a realizar todo el proceso de producción, y duda si utilizar un nuevo lenguaje supondrá cambiar drásticamente los métodos aprendidos en el pasado.

**Ada** tranquiliza a **Juan** y a **María:**

—Está claro que las fases principales que hemos estado llevando a cabo a lo largo de nuestros anteriores proyectos se seguirán aplicando, aunque con algunas diferencias. Lo más importante, **Juan**, es que sigamos adecuadamente el método de trabajo para conseguir buenos resultados.  
—¿Me costará mucho trabajo adaptarme? —pregunta **María**.

**Ada** le contesta sentándose a su lado:

—No te preocupes, **María**, se trata de adaptar conocimientos que ya tienes y aprender algunos otros.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Sea cual sea el estilo que escojamos a la hora de automatizar una determinada tarea, debemos realizar el proceso aplicando un método a nuestro trabajo. Es decir, sabemos que vamos a dar solución a un problema, aplicando una filosofía de desarrollo y lo haremos dando una serie de pasos que deben estar bien definidos.

El proceso de creación de software puede dividirse en diferentes fases:

- **Fase de resolución del problema.**
- **Fase de implementación.**
- **Fase de explotación y mantenimiento.**

A continuación, analizaremos cada una de ellas.

# 3.1.- Resolución del problema.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Para el comienzo de esta fase, es necesario que el problema sea definido y comprendido claramente para que pueda ser analizado con todo detalle. A su vez, la fase de resolución del problema puede dividirse en dos etapas:

1. **Análisis.**

   ![Anotaciones hechas con un bolígrafo sobre un cuaderno.](./recopila_files/PROG01_CONT_R06_escribiendo.jpg "Escribiendo")

   [CC by-sa](http://creativecommons.org/licenses/by-sa/3.0/deed.es "CC by-sa") [Ildar Sagdejev](http://commons.wikimedia.org/wiki/File:2004-02-29_Ball_point_pen_writing.jpg "Ildar Sagdejev")

   Por regla general, el análisis del problema nos va a indicar la especificación de requisitos que la aplicación debe cubrir. ¿Y cómo se llega a esa especificación? Pues lo más probable es que haya numerosos contactos, a modo de entrevistas, entre el analista/programador y el cliente/usuario de la futura aplicación. De esta forma, se irán averiguando todas las necesidades que precisa la aplicación. Se especificarán los procesos y estructuras de datos que se van a emplear. La creación de [prototipo](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#tf92d943a-22ac-574e-9568-bf4d5fd72a9a)s será muy útil para saber con mayor exactitud los puntos a tratar.

   El análisis inicial ofrecerá una idea general de lo que se solicita, realizando posteriormente sucesivos refinamientos que servirán para dar respuesta a las siguientes cuestiones:

    - **¿Cuál es la información que ofrecerá la resolución del problema?** La respuesta a esta primera pregunta se identifica con los resultados deseados o las salidas del problema.
    - **¿Qué datos son necesarios para resolver el problema?** La respuesta a esta segunda pregunta indicará qué datos se proporcionan o las entradas del problema.


    En esta fase debemos aprender a analizar la documentación de la empresa, investigar, observar todo lo que rodea al problema y recopilar cualquier información útil.


Un prototipo es una implementación parcial de un sistema o una parte del mismo que principalmente se crea para explorar cuestiones sobre aspectos diversos del sistema durante el desarrollo del mismo.

# Ejercicio resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Vamos a ilustrar esta fase realizando el análisis del siguiente problema:

“Leer el radio de un círculo y calcular e imprimir su superficie y circunferencia.”

Está claro que las entradas de datos en este problema se reducen al radio del círculo, pero piensa ¿qué salidas de datos ofrecerá la solución?



# Retroalimentación

Las salidas serán...

- Variable de salida **superficie**: será la superficie del círculo. (¿Te acuerdas? El número Pi (π) por el radio al cuadrado).
- Variable de salida **circunferencia**: será la longitud de la circunferencia del círculo. (¿Y de ésta? 2 por el número π y por el radio)

Y la entrada...

- Variable **radio**: será el radio del círculo.

Estas variables **radio**, **superficie** y **circunferencia** podrán ser de tipo real (números con parte entera y parte decimal, por ejemplo: 3,57).

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

2. **Diseño.**

   En esta etapa se convierte la especificación realizada en la fase de análisis en un diseño más detallado, indicando el comportamiento o la secuencia lógica de instrucciones capaz de resolver el problema planteado. Estos pasos sucesivos, que indican las instrucciones a ejecutar por la máquina, constituyen lo que conocemos como algoritmo.

   Consiste en plantear la aplicación como una única operación global, e ir descomponiéndola en operaciones más sencillas, detalladas y específicas. En cada nivel de refinamiento, las operaciones identificadas se asignan a módulos separados.

   Hay que tener en cuenta que antes de pasar a la implementación del algoritmo, hemos de asegurarnos de que tenemos una solución adecuada. Para ello, todo diseño requerirá de la realización de la **prueba o traza** del programa. Este proceso consistirá en un seguimiento paso a paso de las instrucciones del algoritmo utilizando datos concretos. Si la solución aportada tiene errores, tendremos que volver a la fase de análisis para realizar las modificaciones necesarias o tomar un nuevo camino para la solución. Sólo cuando el algoritmo cumpla los requisitos y objetivos especificados en la fase de análisis se pasará a la fase de implementación.


# 3.2.- Implementación.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Primer plano de algunas teclas de un teclado de ordenador.](./recopila_files/ST000943.png "Teclado.")

Stockbyte. Uso educativo no comercial  
para plataformas públicas de  
Formación Profesional a distancia.

CD-DVD Num. V07

Si la fase de resolución del problema requiere un especial cuidado en la realización del análisis y el posterior diseño de la solución, la fase de implementación cobra también una especial relevancia. Llevar a la realidad nuestro algoritmo implicará cubrir algunas etapas más que se detallan a continuación.

1. **Codificación o construcción.**

   Esta etapa consiste en transformar o traducir los resultados obtenidos a un determinado lenguaje de programación. Para comprobar la calidad y estabilidad de la aplicación se han de realizar una serie de pruebas que comprueben las funciones de cada módulo (**pruebas unitaria**s), que los módulos funcionan bien entre ellos (**pruebas de interconexión**) y que todos funcionan en conjunto correctamente (**pruebas de integración**).

   Cuando realizamos la traducción del algoritmo al lenguaje de programación debemos tener en cuenta las reglas gramaticales y la sintaxis de dicho lenguaje. Obtendremos entonces el [código fuente_Código fuente._ El código fuente de un programa informático (o software) es un conjunto de líneas de texto (importante: líneas de TEXTO), que son las instrucciones que debe seguir la computadora para ejecutar dicho programa. Por tanto, en el código fuente de un programa está escrito por completo su funcionamiento. (Basado en la definición de Wikipedia).](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) , lo que normalmente conocemos por programa.

   Pero para que nuestro programa comience a funcionar, antes debe ser **traducido** a un lenguaje que la máquina entienda. Este proceso de traducción puede hacerse de dos formas, **compilando** o **interpretando** el código fuente del programa.


**Compilación:** es el proceso por el cual se traducen las instrucciones escritas en un determinado lenguaje de programación a lenguaje que la máquina es capaz de interpretar.

**Compilador:** programa informático que realiza la traducción. Recibe el código fuente, realiza un análisis lexicográfico, semántico y sintáctico, genera un código intermedio no optimizado, optimiza dicho código y finalmente, genera el código objeto para una plataforma específica.

**Intérprete:** programa informático capaz de analizar y ejecutar otros programas, escritos en un lenguaje de alto nivel. Los intérpretes se diferencian de los compiladores en que mientras estos traducen un programa desde su descripción en un lenguaje de programación al código de máquina del sistema, los intérpretes sólo realizan la traducción a medida que sea necesaria, típicamente, instrucción por instrucción, y normalmente no guardan el resultado de dicha traducción.

Una vez traducido, sea a través de un proceso de compilación o de interpretación, el programa podrá ser ejecutado.

2. **Prueba de ejecución y validación.**

   Para esta etapa es necesario implantar la aplicación en el sistema donde va a funcionar, debe ponerse en marcha y comprobar si su funcionamiento es correcto. Utilizando diferentes datos de prueba se verá si el programa responde a los requerimientos especificados, si se detectan nuevos errores, si éstos son bien gestionados y si la interfaz es amigable. Se trata de poner a prueba nuestro programa para ver su respuesta en situaciones difíciles.

   Mientras se detecten errores y éstos no se subsanen no podremos avanzar a la siguiente fase. Una vez corregido el programa y testeado se documentará mediante:

    - **Documentación interna:** encabezados, descripciones, declaraciones del problema y comentarios que se incluyen dentro del código fuente.
    - **Documentación externa:** son los manuales que se crean para una mejor ejecución y utilización del programa, así como algunos tipos de diagramas que ayudan a comprender mejor la "arquitectura" de nuestra solución, como pueden ser los [diagramas de flujo_Diagrama de flujo._ Es la representación gráfica del algoritmo o proceso. (Basado en la definición de Wikipedia).](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource), [diagramas de clases_Diagrama de clases._ Es un tipo de diagrama estático orientado a objetos que describe la estructura de un sistema mostrando sus clases. (Wikipedia)](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource), etc.

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

**Rellena los huecos con los conceptos adecuados:**



En la fase de codificación, hemos de tener en cuenta la Rellenar huecos (1):  JXUwMDJiJXUwMDFhJXUwMDA3JXUwMDFhJXUwMDE1JXUwMDE5JXUwMDExJXUwMDFh del lenguaje para obtener el código fuente o programa. Posteriormente, éste deberá ser Rellenar huecos (2):  JXUwMDNiJXUwMDBjJXUwMDAyJXUwMDFkJXUwMDE5JXUwMDA1JXUwMDBkJXUwMDA1JXUwMDBi o Rellenar huecos (3):  JXUwMDMxJXUwMDA3JXUwMDFhJXUwMDExJXUwMDE3JXUwMDAyJXUwMDAyJXUwMDE3JXUwMDExJXUw MDE1JXUwMDA1JXUwMDBi para que pueda ser ejecutado posteriormente.

Habilitar JavaScript

La **sintaxis** y reglas gramaticales del lenguaje de programación que estemos utilizando deben ser respetadas para obtener un código fuente correcto. Este código fuente debe ser **compilado o interpretado,** utilizando un programa compilador o intérprete, para transformarlo a un formato que sea ejecutable por la máquina.

# 3.3.- Explotación.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Dos clientes, ante un portátil, están mirando la pantalla. Ilustra la situación de explotación de una aplicación.](./recopila_files/57437477.png "Usando software.")

Stockbyte. Uso educativo no comercial  
para plataformas públicas de  
Formación Profesional a distancia.

CD-DVD Num. CD109

Cuando el programa ya está instalado en el sistema y está siendo de utilidad para los usuarios, decimos que se encuentra en **fase de explotación**.

Periódicamente será necesario realizar evaluaciones y, si es necesario, llevar a cabo modificaciones para que el programa se adapte o actualice a nuevas necesidades, pudiendo también corregirse errores no detectados anteriormente. Este proceso recibe el nombre de **mantenimiento del** software.

**Mantenimiento del software:** es el proceso de mejora y optimización del software después de su entrega al usuario final. Involucra cambios al software en orden de corregir defectos y dependencias encontradas durante su uso, así como la adición de nuevas funcionalidades para mejorar su usabilidad y su aplicabilidad.

Será imprescindible añadir una documentación adecuada que facilite al programador o a la programadora la comprensión, uso y modificación de dichos programas.

# 4.- Ciclo de vida del software.

# Caso práctico

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Dos programadores, un chico moreno con camiseta blanca y una chica de pelo castaño con camiseta de tirantes amarilla, hablan a la salida del trabajo.](./recopila_files/GENERICAS_CASO_74.jpg "Programadores hablando.")

Ministerio de Educación. Uso educativo-nc.

Elaboración propia.

**María** le pregunta a **Juan:**

—¿Qué ocurre cuando terminas un programa? ¿Se entrega al cliente y ya está? La verdad es que los programas que he hecho han sido para uso propio y no sé cómo termina el proceso con los clientes.

Contesta **Juan**:

—Pues verás, cuando terminas un programa, o crees que lo has terminado, hay que llevar a cabo toda clase de pruebas para ver dónde puede fallar. Después corrijes los posibles fallos y posteriormente se entrega al cliente, ahí es donde ves si tu software ha sido bien construido. El cliente lo utilizará y durante un tiempo puede ser que haya que arreglar alguna cosilla. Y cuando ya está todo correcto, en ocasiones, se establece un contrato de mantenimiento con el cliente. Como ves, desarrollar software no consiste sólo en programar y ya está.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Sean cuales sean las fases en las que realicemos el proceso de desarrollo de software, y casi independientemente de él, siempre se debe **aplicar un modelo de ciclo de vida**.

**Ciclo de vida del software:** es una sucesión de estados o fases por las cuales pasa un software a lo largo de su "vida".

El proceso de desarrollo puede involucrar siempre las siguientes etapas mínimas:

- Especificación y Análisis de requisitos.
- Diseño.
- Codificación.
- Pruebas.
- Instalación y paso a Producción.
- Mantenimiento.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Existen varios tipos de ciclos de vida del software, a continuación te mostramos un resumen de los más importantes.

[Ciclos de vida del software](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG01_CONT_R07_ciclos_de_vida.pdf "Descargar documento sobre ciclos de vida [pdf - 76 KB]") (76 KB)

# 5.- Lenguajes de programación.

# Caso práctico

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Aparece una programadora ante un ordenador personal de la época de los años ochenta, con las manos en el teclado.](./recopila_files/ST000918.png "Programando en los ochenta.")

Stockbyte. Uso educativo no comercial

para plataformas públicas de

Formación Profesional a distancia.

CD-DVD Num. V07

**Ada** y **Juan** están recordando lo complejos que eran algunos lenguajes de programación, **Ada** comenta:

—Cuando yo empecé en esto, había relativamente pocos lenguajes de programación y no permitían hacer programas como los que ahora desarrollamos.

**Juan** indica que él conoce las características generales de algunos lenguajes, pero que le gustaría saber algo más sobre los que hubo, hay y habrá.

**María** que asiente con la cabeza, piensa que aprender más sobre los lenguajes disponibles en la actualidad puede ayudar a la hora de elegir entre unos u otros.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Como hemos visto, en todo el proceso de resolución de un problema mediante la creación de software, después del análisis del problema y del diseño del algoritmo que pueda resolverlo, es necesario traducir éste a un lenguaje que exprese claramente cada uno de los pasos a seguir para su correcta ejecución. Este lenguaje recibe el nombre de **lenguaje de programación**.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

**Lenguaje de programación:** conjunto de reglas sintácticas y semánticas, símbolos y palabras especiales establecidas para la construcción de programas. Es un lenguaje artificial, una construcción mental del ser humano para expresar programas.

**Gramática del lenguaje:** reglas aplicables al conjunto de símbolos y palabras especiales del lenguaje de programación para la construcción de sentencias correctas.

**Léxico:** es el conjunto finito de símbolos y palabras especiales, es el vocabulario del lenguaje.

**Sintaxis:** son las posibles combinaciones de los símbolos y palabras especiales. Está relacionada con la forma de los programas.

**Semántica:** es el significado de cada construcción del lenguaje, la acción que se llevará a cabo.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Primer plano de la cabeza de un avestruz.](./recopila_files/PROG01_CONT_R08_avestruz.jpg "Avestruz")

[Dominio público](http://creativecommons.org/publicdomain/zero/1.0/deed.es "Dominio público") [Newsum](http://commons.wikimedia.org/wiki/File:OstrichHead.JPG "Newsum")

Hay que tener en cuenta que pueden existir sentencias sintácticamente correctas, pero semánticamente incorrectas. Por ejemplo, _“Un avestruz dio una tremenda dentellada a su cuidador”_ está bien construida sintácticamente, pero es evidente que semánticamente no.

Una característica relevante de los lenguajes de programación es, precisamente, que más de un programador pueda usar un conjunto común de instrucciones que sean comprendidas entre ellos. A través de este conjunto se puede lograr la construcción de un programa de forma colaborativa.

Los lenguajes de programación pueden ser clasificados en función de lo cerca que estén del lenguaje humano o del lenguaje de los computadores. El lenguaje de los computadores son códigos binarios, es decir, secuencias de unos y ceros. Detallaremos seguidamente las características principales de los lenguajes de programación.

# 5.1.- Lenguaje máquina.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Hoja con símbolos binarios.](./recopila_files/PROG01_CONT_R09_binario.jpg "Lenguaje binario.")

GNU GPL[Sasa Stefanovic](http://commons.wikimedia.org/wiki/File:Exquisite-binary.png "Sasa Stefanovic")

Éste es el lenguaje utilizado directamente por el procesador, consta de un conjunto de instrucciones codificadas en binario. Es el sistema de códigos directamente interpretable por un [circuito microprogramable_Circuito microprogramable_Dispositivo o conjunto de dispositivos de propósito general, que, según sea necesario, se programan para resolver distintos problemas.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource).

Se trata del primer lenguaje utilizado para la programación de computadores. De hecho, cada máquina tenía su propio conjunto de instrucciones codificadas en ceros y unos. Cuando un algoritmo está escrito en este tipo de lenguaje, decimos que está en código máquina.

Programar en este tipo de lenguaje presentaba los siguientes **inconvenientes**:

- Cada programa era válido **sólo para un tipo de procesador** u ordenador.
- **La lectura o interpretación de los programas era extremadamente difícil** y, por tanto, **insertar modificaciones resultaba muy costoso**.
- Los programadores de la época debían **memorizar largas combinaciones de ceros y unos**, que equivalían a las instrucciones disponibles para los diferentes tipos de procesadores.
- Los programadores se encargaban de introducir los códigos binarios en el computador, lo que provocaba **largos tiempos de preparación y posibles errores**.

A continuación, se muestran algunos códigos binarios equivalentes a las operaciones de suma, resta y movimiento de datos en lenguaje máquina.

| Operación | Lenguaje máquina |
| --- | --- |
| SUMAR | 00101101 |
| RESTAR | 00010011 |
| MOVER | 00111010 |

Dada la complejidad y dificultades que ofrecía este lenguaje, fue sustituido por otros más sencillos y fáciles utilizar. No obstante, hay que tener en cuenta que todos **los programas para poder ser ejecutados, han de traducirse siempre al lenguaje máquina** que es el único que entiende la computadora.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Como recordatorio, te proponemos  ver el siguiente vídeo sobre cómo funciona el sistema binario.

Sistema binario

[https://www.youtube.com/embed/cJhy9JutK\_4](https://www.youtube.com/embed/cJhy9JutK_4)

[Resumen textual alternativo](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG01_Descripcion_Video_Elsistemabinario.html "Resumen textual alternativo para ")

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

**Rellena el hueco con el concepto adecuado:**



En el lenguaje máquina de algunos procesadores, la combinación 00101101 equivale a la operación de Rellenar huecos (1):  JXUwMDBiJXUwMDI2JXUwMDE4JXUwMDBj .

Habilitar JavaScript

La suma, resta y la operación de movimiento de datos eran muy utilizadas en los programas escritos en lenguaje máquina. Aún no se había extendido el uso de estructuras de programación como las sentencias condicionales o los bucles.

# 5.2.- Lenguaje ensamblador.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

La evolución del lenguaje máquina fue el lenguaje ensamblador.

Las instrucciones ya no son secuencias binarias, se sustituyen por códigos de operación que describen una operación elemental del procesador. Es un lenguaje de bajo nivel, al igual que el lenguaje máquina, ya que dependen directamente del hardware donde son ejecutados.

**Mnemotécnico:** son palabras especiales, que sustituyen largas secuencias de ceros y unos, utilizadas para referirse a diferentes operaciones disponibles en el juego de instrucciones que soporta cada máquina en particular.

En ensamblador, cada instrucción (mnemotécnico) se corresponde a una instrucción del procesador. En la siguiente tabla se muestran algunos ejemplos.

| Operación | Lenguaje Ensamblador |
| --- | --- |
| MULTIPLICAR | MUL |
| DIVIDIR | DIV |
| MOVER | MOV |

En el siguiente gráfico puedes ver parte de un programa escrito en lenguaje ensamblador. En color rojo se ha resaltado el código máquina en [hexadecimal_Hexadecimal_Sistema numérico en base 16, esto significa que contiene 16 símbolos únicos para representar datos: los números del 0 al 9 y las letras de la A a la F.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource), en magenta el código escrito en ensamblador y en azul, las direcciones de memoria donde se encuentra el código.

[![Fragmento de código escrito en ensamblador con su equivalente en hexadecimal y las direcciones de memoria donde está alojado. En color rojo se ha resaltado el código máquina en hexadecimal, en magenta el código escrito en ensamblador y en azul, las direcciones de memoria donde se encuentra el código.](./recopila_files/PROG01_CONT_R10_ensamblador_miniatura.jpg "Lenguaje ensamblador.")](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG01_CONT_R10_ensamblador.jpg)

[Dominio público](http://creativecommons.org/publicdomain/zero/1.0/deed.es "Dominio público") [German](http://commons.wikimedia.org/wiki/File:Codigo_de_maquina.png "German")

Pero aunque ensamblador fue un intento por aproximar el lenguaje de los procesadores al lenguaje humano, presentaba **múltiples dificultades**:

- Los programas **seguían dependiendo directamente del hardware** que los soportaba.
- Los programadores **tenían que conocer detalladamente la máquina** sobre la que programaban, ya que debían hacer un uso adecuado de los recursos de dichos sistemas.
- **La lectura, interpretación o modificación** de los programas seguía presentando **dificultades**.

Todo programa escrito en lenguaje ensamblador necesita de un intermediario, que realice la traducción de cada una de las instrucciones que componen su código al lenguaje máquina correspondiente. Este intermediario es el **programa ensamblador**. El programa original escrito en lenguaje ensamblador constituye el **código fuente** y el programa traducido al lenguaje máquina se conoce como **programa objeto** que será directamente ejecutado por la computadora.

# 5.3.- Lenguajes compilados.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Uomo Vitruviano de Leonardo Da Vinci.](./recopila_files/PROG01_CONT_R11_humano.jpg "Cuerpo humano.")

[Dominio público](http://creativecommons.org/publicdomain/zero/1.0/deed.es "Dominio público") [Leonardo Da Vinci](http://commons.wikimedia.org/wiki/File:Vitruvian.jpg "Leonardo Da Vinci")

Para paliar los problemas derivados del uso del lenguaje ensamblador y con el objetivo de acercar la programación hacia el uso de un lenguaje más cercano al humano que al del computador, nacieron los **lenguajes compilados**.

Algunos ejemplos de este tipo de lenguajes son: **Pascal, Fortran, Algol, C, [C++_C++_Es el lenguaje de programación C ampliado para poder utilizar los mecanismos que permitan la manipulación de objetos. Es un lenguaje multiparadigma.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource),** etc.

Al ser lenguajes más cercanos al humano, también se les denomina **lenguajes de alto nivel**. Son más fáciles de utilizar y comprender, las instrucciones que forman parte de estos lenguajes utilizan palabras y signos reconocibles por el programador.

¿Cuáles son sus **ventajas**?

- Son **mucho más fáciles de aprender y de utilizar** que sus predecesores.
- Se **reduce el tiempo para desarrollar** programas, así como **los costes**.
- Son **independientes del hardware**, los programas pueden ejecutarse en diferentes tipos de máquina.
- La **lectura, interpretación y modificación** de los programas es **mucho más sencilla**.

Pero un programa que está escrito en un lenguaje de alto nivel también **tiene que traducirse** a un código que pueda utilizar la máquina. Los programas traductores que pueden realizar esta operación se llaman **compiladores**.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

**Compilador:** es un programa cuya función consiste en traducir el código fuente de un programa escrito en un lenguaje de alto nivel a lenguaje máquina. Al proceso de traducción se le conoce con el nombre de compilación.

Para ilustrar el proceso de compilación de programas te proponemos el siguiente esquema:

[![El código fuente en un lenguaje 1 pasa por un proceso inicial del compilador para ese lenguaje: analizador lexicográfico (Scanner), Analizador sintáctico/semántico (Parser) y Generador de código intermedio. En esta fase se obtiene un código intermedio no optimizado, que se pasa por el optimizador de código intermedio obteníendose código intermedio optimizado. Éste se pasa al generador de código objeto, específico para cada máquina, que genera el código máquina, que se le pasa al microprocesador del ordenador para su ejecución. ](./recopila_files/EsquemaCompilacion_EnCastellano_mini.png "Esquema de compilación. ")](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/EsquemaCompilacion_EnCastellano.png "Imagen Ampliada.")

[GNU Free Documentation License](http://en.wikipedia.org/wiki/GNU_Free_Documentation_License "GNU Free Documentation License.").  
[Magnus Colossus](http://commons.wikimedia.org/wiki/File:CompilationScheme-Spanish.png "Magnus Colossus")

El compilador realizará la traducción y además informará de los posibles errores. Una vez subsanados, se generará el programa traducido a código máquina, conocido como **código objeto**. Este programa aún no podrá ser ejecutado hasta que no se le añadan los módulos de enlace o bibliotecas, durante el proceso de enlazado. Una vez finalizado el enlazado, se obtiene el **código ejecutable**.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

En el siguiente documento puedes consultar información sobre el proceso de enlazado:

[Documento sobre el proceso de enlazado](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/Compilacion.pdf "Descargar documento sobre el proceso de enlazado [pdf - 92 KB]") (92 KB)

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

# Pregunta 1

**Durante la fase de enlazado, se incluyen en el código fuente determinados módulos (bibliotecas) que son necesarios para que el programa pueda realizar ciertas tareas, posteriormente se obtendrá el código ejecutable.**

Verdadero  Falso

# Retroalimentación

**Falso**

El código fuente es traducido por el compilador, pero en la fase de enlazado los módulos son añadidos al código objeto; estos módulos permitirán al programa manejar dispositivos, comunicarse con otros elementos del sistema, etc.

# 5.4.- Lenguajes interpretados.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

¿Recuerdas que en un apartado anterior ya hablamos de que existen dos formas de traducir los programas escritos en un lenguaje de alto nivel a código máquina y que una de esas formas es mediante un intérprete? Pues bien, ahora vamos a ver cuáles son las características de los lenguajes interpretados.

Se caracterizan por estar diseñados para que su ejecución se realice a través de un **intérprete**. Cada instrucción escrita en un lenguaje interpretado se analiza, traduce y ejecuta tras haber sido verificada. Una vez realizado el proceso por el intérprete, la instrucción se ejecuta, pero no se guarda en memoria.

**Intérprete:** es un programa traductor de un lenguaje de alto nivel en el que el proceso de traducción y de ejecución se llevan a cabo simultáneamente, es decir, la instrucción se pasa a lenguaje máquina y se ejecuta directamente. No se genera programa objeto, ni programa ejecutable.

![Primer plano de las manos de dos pianistas interpretando una partitura.](./recopila_files/ED001110.png "Interpretando al piano.")

Stockbyte.Uso educativo no comercial para

plataformas públicas de Formación Profesional

a distancia. CD-DVD Num. V43.

Los programas en lenguajes interpretados presentan el inconveniente de ser algo más lentos que los compilados, ya que han de ser traducidos durante su ejecución. Por otra parte, necesitan disponer en la máquina del programa intérprete ejecutándose, algo que no es necesario en el caso de un programa compilado, para los que sólo es necesario tener el programa ejecutable para poder utilizarlo.

Ejemplos de lenguajes interpretados son: **Perl, PHP, Python, JavaScript,** etc.

A medio camino entre los lenguajes compilados y los interpretados, existen los lenguajes que podemos denominar **pseudo-compilados o pseudo-interpretados**, es el caso del **Lenguaje Java**. Java puede verse como compilado e interpretado a la vez, ya que su código fuente se compila para obtener el código binario en forma de bytecodes, que son estructuras parecidas a las instrucciones máquina, con la importante propiedad de no ser dependientes de ningún tipo de máquina (se detallarán más adelante). La [Máquina Virtual Java_Máquina Virtual Java._No es más que una aplicación que permite terminar de traducir los bytecodes al lenguaje máquina de la plataforma concreta en que se quiera ejecutar una aplicación java. Cualquier plataforma "se presenta al compilador de java" con el aspecto de una única máquina capaz de entender y ejecutar los bytecodes que se producen al compilar. Por tanto, la compilación se hace una sola vez, con independencia de la plataforma en la que se vayan a ejecutar los bytecodes. Por eso hablamos de máquina virtual, porque todas las plataformas "ofrecen el aspecto de una misma máquina" que en realidad no existe, ya que cada plataforma es diferente. Ese aspecto común lo proporciona un programa específico y distinto para cada plataforma, que es al que llamamos máquina virtual, que se encarga de interpretar y ejecutar esos bytecodes genéricos al lenguaje máquina concreto de la plataforma.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) se encargará de interpretar este código y, para su ejecución, lo traducirá a código máquina del procesador en particular sobre el que se esté trabajando.

# Debes conocer

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Puedes entender por qué Java es un lenguaje compilado e interpretado a través del siguiente enlace:

[El lenguaje Java es compilado e interpretado.](http://www.sc.ehu.es/sbweb/fisica/cursoJava/fundamentos/introduccion/virtual.htm "Acceder a una web con un esquema para visualizar por qué el lenguaje Java es compilado e interpretado.")

# 6.- El lenguaje de programación Java.

# Caso práctico

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Una llave dorada vuela hacia su cerradura.](./recopila_files/019.png "La llave con la que abrir puertas.")

Stockbyte. Uso educativo no comercial

para plataformas públicas de Formación

Profesional a distancia.CD-DVD Num. ECD001

**Ada** indica a **Juan** y **María** que el lenguaje elegido para sus desarrollos va a ser Java.

La flexibilidad, facilidad de aprendizaje, similitud con algunos lenguajes que ya conocen y su capacidad para adaptarse a cualquier plataforma, hacen que sea ideal para producir las nuevas aplicaciones de **BK Programación**.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Logotipo del lenguaje Java](./recopila_files/PROG01_CONT_R12_logojava.jpg "Lenguaje Java.")

[CC by-nc-sa](http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es "CC by-nc-sa") [rob patrick](https://www.flickr.com/photos/alkalinezoo/3595562784/ "rob patrick")

Java es un lenguaje sencillo de aprender, con una sintaxis parecida a la de C++, pero en la que se han eliminado elementos complicados y que pueden originar errores. Java es orientado a objetos, con lo que elimina muchas preocupaciones al programador y permite la utilización de gran cantidad de bibliotecas ya definidas, evitando reescribir código que ya existe. Es un lenguaje de programación creado para satisfacer nuevas necesidades que los lenguajes existentes hasta el momento no eran capaces de solventar.

Una de las principales virtudes de Java es su **independencia del hardware**, ya que el código que se genera es válido para cualquier plataforma. Este código será ejecutado sobre una máquina virtual denominada **Máquina Virtual Java** (MVJ o JVM – Java Virtual Machine), que interpretará el código convirtiéndolo a código específico de la plataforma que lo soporta. De este modo el programa se escribe una única vez y puede hacerse funcionar en cualquier lugar. Por eso, ese es el lema del lenguaje: **_“Write once, run everywhere”._**

Antes de que apareciera Java, el lenguaje C era uno de los más extendidos por su versatilidad. Pero cuando los programas escritos en C aumentaban de volumen, su manejo comenzaba a complicarse. Mediante las técnicas de programación estructurada y programación modular se conseguían reducir estas complicaciones, pero no era suficiente.

Fue entonces cuando la Programación Orientada a Objetos (POO) entra en escena, aproximando notablemente la construcción de programas al pensamiento humano y haciendo más sencillo todo el proceso. Los problemas se dividen en objetos que tienen propiedades e interactúan con otros objetos, de este modo, el programador puede centrarse en cada objeto para programar internamente los elementos y funciones que lo componen.

Las características principales de lenguaje Java se resumen a continuación:

- El código generado por el compilador Java es independiente de la arquitectura.
- Está totalmente orientado a objetos.
- Su sintaxis es similar a C y C++.
- Es distribuido, preparado para aplicaciones [TCP/IP_TCP/IP_Familia de protocolos de Internet. Es un conjunto de protocolos de red en los que se basa Internet y que permiten la transmisión de datos entre redes de ordenadores.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource).
- Dispone de un amplio conjunto de bibliotecas.
- Es robusto, realizando comprobaciones del código en tiempo de compilación y de ejecución.
- La seguridad está garantizada, ya que las aplicaciones Java no acceden a zonas delicadas de memoria o de sistema.

# Debes conocer

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Obtén una descripción detallada de las características reseñadas anteriormente a través del siguiente artículo:

[Características detalladas del lenguaje Java](http://es.wikibooks.org/wiki/Programaci%C3%B3n_en_Java/Caracter%C3%ADsticas_del_lenguaje "Características ampliadas del lenguaje Java.")

# 6.1.- Breve historia.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Java surgió en 1991 cuando un grupo de ingenieros de Sun Microsystems trataron de diseñar un nuevo lenguaje de programación destinado a programar pequeños dispositivos electrónicos. La dificultad de estos dispositivos es que cambian continuamente y para que un programa funcione en el siguiente dispositivo aparecido, hay que rescribir el código. Por eso la empresa Sun quería crear un lenguaje **independiente del dispositivo.**

Pero no fue hasta 1995 cuando pasó a llamarse Java, dándose a conocer al público como lenguaje de programación para computadores. Java pasa a ser un lenguaje totalmente independiente de la plataforma y a la vez potente y orientado a objetos. Esa filosofía y su facilidad para crear aplicaciones para redes TCP/IP ha hecho que sea uno de los lenguajes más utilizados en la actualidad.

El factor determinante para su expansión fue la incorporación de un intérprete Java en la versión 2.0 del navegador Web Netscape Navigator, lo que supuso una gran revuelo en Internet. A principios de 1997 apareció **Java 1.1,** que proporcionó sustanciales mejoras al lenguaje.

**Java 1.2**, más tarde rebautizado como **Java 2,** nació a finales de 1998.

El principal objetivo del lenguaje Java es llegar a ser el **nexo universal** que conecte a los usuarios con la información, esté ésta situada en el ordenador local, en un servidor Web, en una base de datos o en cualquier otro lugar.

Para el desarrollo de programas en lenguaje Java es necesario utilizar un entorno de desarrollo denominado **JDK** (Java Development Kit), que provee de un compilador y un entorno de ejecución (**JRE** – Java Runtime Environment) para los bytecodes generados a partir del código fuente. Al igual que las diferentes versiones del lenguaje han incorporado mejoras, el entorno de desarrollo y ejecución también ha sido mejorado sucesivamente.

**Java 2** es la tercera versión del lenguaje, pero es algo más que un lenguaje de programación, incluye los siguientes elementos:

- Un lenguaje de programación: Java.
- Un conjunto de bibliotecas estándar que vienen incluidas en la plataforma y que son necesarias en todo entorno Java. Es el Java Core.
- Un conjunto de herramientas para el desarrollo de programas, como es el compilador de bytecodes, el generador de documentación, un depurador, etc.
- Un entorno de ejecución que en definitiva es una máquina virtual que ejecuta los programas traducidos a bytecodes.

El siguiente esquema muestra los elementos fundamentales de la plataforma de desarrollo Java 2.

[![Esquema en el que se muestran los elementos que conforman la plataforma de desarrollo Java 2. En el nivel inferior aparece el hardware, el sistema operativo se encuentra sobre él. Interactuando con ambos, la máquina virtual java y el sistema de ejecución. A su derecha, la API. Más arriba, los bytecodes resultantes y sobre éstos, actúan las herramientas (compilador y otros), para obtener finalmente en el extremo superior, el código fuente.](./recopila_files/PROG01_CONT_R13_elementos_plataforma_java2_miniatura.PNG "Elementos de la plataforma de desarrollo Java 2.")](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG01_CONT_R13_elementos_plataforma_java2.png)

Ministerio de Educación. Uso educativo-nc. Elaboración propia.

Actualmente hay varias ediciones de la plataforma Java, que puedes ver en el siguiente enlace, y que de forma muy resumida podríamos clasificar en:

- **Java SE**: es la plataforma base para desarrollo de aplicaciones en Java. Es usado para desarrollar aplicaciones de escritorio, [applets_Applet_Son programas incrustados en otras aplicaciones, normalmente una página web que se muestra en un navegador.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource)        y otros tipos de aplicaciones. Es fundamental, dado que es la base sobre la que se cimientan el resto de plataformas Java.
- **Java EE**: es una plataforma de desarrollo para aplicaciones empresariales y del lado del servidor.
- **Java ME**: es una plataforma de desarrollo de aplicaciones Java para dispositivos móviles.

# Debes conocer

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Lee atentamente el siguiente artículo, pues resume las ediciones de la plataforma Java de manera muy sencilla.

[Java: lenguaje, plataforma, ediciones,...](https://www.campusmvp.es/recursos/post/Descifrando-Java-lenguaje-plataforma-ediciones-implementaciones.aspx)

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Si deseas conocer más sobre los orígenes del lenguaje Java, aquí te ofrecemos más información:

[Las versiones de Java y su historia](http://www.arquitecturajava.com/las-versiones-de-java/ "Acceder a la web de arquitecturajava.com, que muestra una página sobre la historia de Java.")

[Historia de Java](http://es.wikipedia.org/wiki/Java_%28lenguaje_de_programaci%C3%B3n%29#Historia "Acceder al artículo de Wikipedia dedicado a la Historia de Java.")

[Línea de tiempo de la historia de Java desde julio de 2011](https://www.java.com/es/download/faq/release_dates.xml "Acceder a la web de oracle con la Línea de tiempo de la historia de Java.")

# 6.2.- La POO y Java.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

En Java, los datos y el código (funciones o métodos) se combinan en entidades llamadas **objetos**. El objeto tendrá un **comportamiento** (su código interno) y un **estado** (los datos). Los objetos permiten la reutilización del código y pueden considerarse, en sí mismos, como piezas reutilizables en múltiples proyectos distintos. Esta característica permite reducir el tiempo de desarrollo de software.

Por simplificar un poco las cosas, un programa en Java será como una representación teatral en la que debemos preparar primero cada personaje, definir sus características y qué va a saber hacer. Cuando esta fase esté terminada, la obra se desarrollará sacando personajes a escena y haciéndoles interactuar.

Al emplear los conceptos de la Programación Orientada a Objetos (POO), Java incorpora las tres características propias de este paradigma:

- **[Encapsulación_Encapsulación_En programación modular y más específicamente en programación orientada a objetos, se denomina así al ocultamiento de los datos y elementos internos de un objeto. Sólo se puede modificar un objeto a través de las operaciones definidas para éste.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource),**
- **[Herencia_Herencia_Mecanismo que permite derivar una clase de otra, de manera que extienda su funcionalidad.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource),**
- **[Polimorfismo_Polimorfismo_Capacidad para que varias clases derivadas de una antecesora utilicen un mismo método de forma diferente. Podemos crear dos clases distintas: Pez y Ave que heredan de la superclase Animal. La clase Animal tiene el método abstracto mover que se implementa de forma distinta en cada una de las subclases (peces y aves se mueven de forma distinta).](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource).**

Los patrones o tipos de objetos se denominan [clases_Clase_Es una construcción que se utiliza como un modelo (o plantilla) para crear objetos de ese tipo. El modelo describe el estado y el comportamiento que todos los objetos de la clase comparten.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) y los objetos que utilizan estos patrones o pertenecen a dichos tipos, se identifican con el nombre de [instancias_Instancia_Una instancia se produce con la creación de un objeto perteneciente a una clase (se dice que se instancia la clase). El objeto que se crea tiene los atributos, propiedades y métodos de la clase a la que pertenece. Los objetos y sus características se usan en la construcción de programas, ya sea como contenedores de datos o como partes funcionales del programa.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) . Pero, no hay que alarmarse, estos conceptos se verán más adelante en sucesivas unidades.

[![Esquema que muestra las ventajas de la programación orientada a objetos. El trabajo colaborativo, el reparto del trabajo y la reutilización del código son las principales ventajas resaltadas en cuadros de color naranja. En verde aparecen dos consecuencias asociadas a la reutilización del código: reducción de costes humanos/tiempo y mayor calidad en los desarrollos.](./recopila_files/PROG01_CONT_R14_ventajas_POO_miniatura.png "Ventajas de la Programación Orientada a Objetos.")](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG01_CONT_R14_ventajas_POO.png)

Ministerio de Educación. Uso educativo-nc. Elaboración propia.

![Varios bloques Lego interconectados entre sí.](./recopila_files/PROG01_CONT_R15_poo.jpg "Programación Orientada a Objetos")

[Dominio público](http://creativecommons.org/publicdomain/zero/1.0/deed.es "Dominio público") [Priwo](http://commons.wikimedia.org/wiki/File:LEGO-02.jpg "Priwo")

Otro ejemplo para seguir aclarando ideas, piensa en los bloques de juegos de construcción. Suponemos que conoces los cubos de plástico en varios colores y tamaños. Por una de sus caras disponen de pequeños conectores circulares y en otra de sus caras pequeños orificios en los que pueden conectarse otros bloques, con el objetivo principal de permitir construir formas más grandes. Si usas diferentes piezas del lego puedes construir aviones, coches, edificios, etc. Si te fijas bien, cada pieza es un objeto pequeño que puede unirse con otros objetos para crear objetos más grandes.

Pues bien, aproximadamente así es como funciona la programación dirigida a objetos: unimos elementos pequeños para construir otros más grandes. Nuestros programas estarán formados por muchos componentes (objetos) independientes y diferentes; cada uno con una función determinada en nuestro software y que podrá comunicarse con los demás de una manera predefinida.

# 6.3.- Independencia de la plataforma y trabajo en red.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Existen dos características que distinguen a **Java** de otros lenguajes, como son la **independencia de la plataforma** y la posibilidad de trabajar en red o, mejor, la posibilidad de **crear aplicaciones que trabajan en red**.

Estas características las vamos a explicar a continuación:

1. **Independencia:** los programas escritos en Java pueden ser ejecutados en cualquier tipo de hardware. El código fuente se compila, generándose el código conocido como Java Bytecode (instrucciones máquina simplificadas que son específicas de la plataforma Java), el bytecode será interpretado y ejecutado en la **Máquina Virtual** **Java (MVJ o JVM – Java Virtual Machine)** que es un programa escrito en código nativo de la plataforma destino, entendible por el hardware. Con esto se evita tener que realizar un programa diferente para cada CPU (Unidad Central de Proceso) o plataforma.

   Por tanto, la parte que realmente es dependiente del sistema es la Máquina Virtual Java, así como las librerías o bibliotecas básicas que permiten acceder directamente al hardware de la máquina.

2. **Trabajo en red:** esta capacidad del lenguaje ofrece múltiples posibilidades para la comunicación vía TCP/IP. Para poder hacerlo existen librerías que permiten el acceso y la interacción con protocolos como [http_HTTP_Es el protocolo utilizado para la transacción de la World Wide Web. Es un protocolo orientado a transacciones y sigue el esquema petición-respuesta entre un cliente y un servidor.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource), [ftp_FTP_Es un protocolo de red para la transferencia de archivos entre sistemas conectados a una red TCP (Transmission Control Protocol), basado en arquitectura cliente-servidor.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource), etc., facilitando al programador las tareas del tratamiento de la información a través de redes.

![En blanco y negro, un hombre con sombrero baquero saltando en el aire.](./recopila_files/LS010895.png "Independencia.")

Stockbyte. Uso educativo no comercial para plataformas públicas de

Formación Profesional a distancia.CD-DVD Num. V43

![Visto desde arriba, cuatro manos rodean un globo terráqueo.](./recopila_files/stk22500btm.png "Trabajo en red.")

Stockbyte. Uso educativo no comercial para plataformas públicas de

Formación Profesional a distancia. CD-DVD Num. 109

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

# Pregunta

**¿Qué elemento es imprescindible para que una aplicación escrita en Java pueda ejecutarse en un ordenador?**

# Respuestas

[Opción 1](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-49_63)

Que disponga de conexión a Internet y del hardware adecuado.

[Opción 2](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-49_103)

Que tenga instalado un navegador web y conexión a Internet.

[Opción 3](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-49_106)

Que tenga la Máquina Virtual Java adecuada instalada.

# Retroalimentación

Estos elementos no son suficientes para poder hacer funcionar una aplicación escrita en lenguaje Java.

Tener conectividad a Internet no es imprescindible para poder ejecutar programas Java, además de que no sólo a través del navegador puede ejecutarse código Java.

Efectivamente, sin la Máquina Virtual Java es imposible que el hardware pueda entender los códigos de bytes (o bytecodes) necesarios para la ejecución del programa, siendo necesaria la máquina virtual adecuada para la plataforma hardware que estemos utilizando.

# Solución

1. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-49_63) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa0b49_60))
2. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-49_103) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa1b49_60))
3. [Opción correcta](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-49_106) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa2b49_60))

# 6.4.- Seguridad y simplicidad.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Un grupo de trabajadores en torno a una mesa de reuniones en una oficina, muestran su aprobación con el pulgar hacia arriba. Hay cuatro hombres y dos mujeres. ](./recopila_files/stk22412btm.png "buen trabajo.")

Stockbyte.Uso educativo no comercial para

plataformas públicas de Formación Profesional

a distancia. CD-DVD Num. 109

Junto a las características diferenciadoras del lenguaje Java relacionadas con la independencia y el trabajo en red, han de destacarse dos virtudes que hacen a este lenguaje uno de los más extendidos entre la comunidad de programadores: su **seguridad** y su **simplicidad**.

- **Seguridad:** en primer lugar, los posibles accesos a zonas de memoria “sensibles” que en otros lenguajes como C y C++ podían suponer peligros importantes, se han eliminado en Java.

  Y en segundo lugar, el código Java se comprueba y verifica para evitar que determinadas secciones del código produzcan efectos no deseados. Los test que se aplican garantizan que las operaciones, operandos, conversiones, uso de clases y demás acciones son seguras.

  En definitiva, podemos afirmar que Java es un lenguaje seguro.

- **Simplicidad:** aunque Java es tan potente como C o C++, es bastante más sencillo. Posee una curva de aprendizaje muy rápida y, **para alguien que comienza a programar en este lenguaje,** como será el caso de la mayoría de quienes comienzan a estudiar este módulo, le resulta relativamente fácil comenzar a escribir aplicaciones interesantes.

  Si has programado alguna vez en C o C++ encontrarás que Java te pone las cosas más fáciles, ya que se han eliminado: la aritmética de [punteros_Puntero_Un puntero o apuntador es una variable que referencia una región de memoria; en otras palabras es una variable cuyo valor es una dirección de memoria.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) , los registros, la definición de tipos, la gestión de memoria, etc. Con esta simplificación se reduce bastante la posibilidad de cometer errores comunes en los programas. Un programador experimentado en C o C++ puede cambiar a este lenguaje rápidamente y obtener resultados en muy poco espacio de tiempo.

  Muy relacionado con la simplicidad que aporta Java está la incorporación de un elemento muy útil como es el **Recolector de Basura (Garbage collector)**. Permite al programador liberarse de la gestión de la memoria y hace que ciertos bloques de memoria puedan reaprovecharse, disminuyendo el número de huecos libres ([fragmentación de memoria_Fragmentación de memoria_La fragmentación es la memoria que queda desperdiciada al usar los métodos de gestión de memoria. Puede ser interna o externa.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource)).

  Cuando realicemos programas, crearemos objetos, haremos que éstos interaccionen, etc. Todas estas operaciones requieren de uso de memoria del sistema, pero la gestión de ésta será realizada de manera transparente al programador. Todo lo contrario que ocurría en otros lenguajes. Podremos crear tantos objetos como solicitemos, pero nunca tendremos que destruirlos. El entorno de Java borrará los objetos cuando determine que no se van a utilizar más. Este proceso es conocido como **recolección de basura**, y simplifica tu trabajo al programar una barbaridad.


# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

**Rellena los huecos con los conceptos adecuados:**



En Java se ha simplificado la gestión de memoria a través de la eliminación de la Aritmética de Rellenar huecos (1):  JXUwMDA4JXUwMDI1JXUwMDFiJXUwMDFhJXUwMDExJXUwMDE3JXUwMDFkJXUwMDFj , por lo que la incorporación del Garbage Collector evita que se produzca un crecimiento de los huecos libres en memoria, que recibe el nombre de Rellenar huecos (2):  JXUwMDFlJXUwMDM0JXUwMDEzJXUwMDA2JXUwMDBhJXUwMDA4JXUwMDBiJXUwMDFhJXUwMDE1JXUw MDAyJXUwMDBhJXUwMDlhJXUwMDlk de memoria.

Habilitar JavaScript

Los Punteros son un tipo especial de elemento utilizado en C/C++ que permiten realizar directamente gestión de la memoria del sistema, su control es complicado y, en ocasiones, peligroso. Al dejar en manos del recolector de basura la gestión de la memoria, se evita la Fragmentación y se reutilizan mejor los espacios libres, liberando al programador para que se centre en el desarrollo del programa sin distracciones adicionales.

# 6.5.- Java y los Bytecodes.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Un programa escrito en Java no es directamente ejecutable, es necesario que el código fuente sea interpretado por la Máquina Virtual Java. ¿Cuáles son los pasos que se siguen desde que se genera el código fuente hasta que se ejecuta? A continuación se detallan cada uno de ellos.

[![Esquema que muestra el proceso desde la creación del código fuente en Java, pasando por las fases de compilación, generación de bytecodes y su interpretación en la Máquina Virtual Java.](./recopila_files/PROG01_CONT_R16_programas_en_Java_miniatura.png "Programas en Java.")](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG01_CONT_R16_programas_en_Java.png)

Ministerio de Educación. Uso educativo-nc. Elaboración propia.

Una vez escrito el código fuente (archivos con extensión .java), éste es precompilado generándose los códigos de bytes, Bytecodes o Java Bytecodes (archivos con extensión .class) que serán interpretados directamente por la Máquina Virtual Java y traducidos a código nativo de la plataforma sobre la que se esté ejecutando el programa.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

**Bytecode:** son un conjunto de instrucciones en lenguaje máquina que no son específicas para ningún procesador o sistema de cómputo. Un intérprete de código de bytes (bytecodes) para una plataforma específica será quien los ejecute. A estos intérpretes también se les conoce como Máquinas Virtuales Java o intérpretes Java de tiempo de ejecución.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

En el proceso de precompilación, existe un verificador de códigos de bytes que se asegurará de que se cumplen las siguientes condiciones:

- El código satisface las especificaciones de la Máquina Virtual Java.
- No existe amenaza contra la integridad del sistema.
- No se producen desbordamientos de memoria.
- Los parámetros y sus tipos son adecuados.
- No existen conversiones de datos no permitidas.

Para que un bytecode pueda ser ejecutado en cualquier plataforma, es imprescindible que dicha plataforma cuente con el intérprete adecuado, es decir, **la máquina virtual específica para esa plataforma**. En general, la Máquina Virtual Java es un programa de reducido tamaño y gratuito para todos los sistemas operativos.

[![Esquema general de la arquitectura de un programa ejecutándose en una Máquina Virtual Java. El archivo con el código fuente (extensión .java) es compilado mediante javac.exe, obteniéndose los bytecodes (extensión .class). Finalmente, mediante el intérprete java.exe se ejecutarán los bytecodes en la plataforma específica.](./recopila_files/PROG01_CONT_R17_javabytecode_mini.png "Bytecodes en Java.")](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG01_CONT_R17_javabytecode.png)

Ministerio de Educación. Uso educativo-nc. Elaboración propia.

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

# Pregunta

**En Java el código fuente es compilado, obteniéndose el código binario en forma de bytecodes. Pero, ¿cuál es la extensión del archivo resultante?**

# Respuestas

[Opción 1](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-114_59)

Extensión .obj

[Opción 2](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-114_263)

Extensión .class

[Opción 3](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-114_266)

Extensión .java

# Retroalimentación

Incorrecto, los archivos .obj son generados por un compilador antes de generar el archivo ejecutable.

Correcto, este tipo de archivos son los que la Máquina Virtual Java traducirá para poder ejecutarlos en la máquina real.

Incorrecto, los archivos con esta extensión contienen el código fuente del programa.

# Solución

1. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-114_59) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa0b114_56))
2. [Opción correcta](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-114_263) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa1b114_56))
3. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-114_266) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa2b114_56))

# 7.- Programas en Java.

# Caso práctico

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Sala repleta de asistentes, escuchando una ponencia de un programador en un congreso.](./recopila_files/PROG01_CONT_R18_congreso.jpg "Congreso de programadores.")

[CC by-sa](http://creativecommons.org/licenses/by-sa/3.0/deed.es "CC by-sa") [Ziko van Dijk](http://commons.wikimedia.org/wiki/File:2010-11-14_orr_ob_08.JPG "Ziko van Dijk")

**Juan** celebra que **BK Programación** vaya a desarrollar sus programas en un lenguaje como Java. En algunas ocasiones ha asistido a congresos y ferias de exposiciones de software en las que ha podido intercambiar impresiones con compañeros de profesión sobre los diferentes lenguajes que utilizan en sus proyectos. Una gran mayoría destacaba lo fácil y potente que es programar en Java.

**Juan** está entusiasmado y pregunta:

—¿**Ada**, cuándo empezamos? ¿Tienes código fuente para empezar a ver la sintaxis? ¿Podremos utilizar algún entorno de desarrollo profesional?

**Ada** responde sonriendo:

—¡Manos a la obra! **María**, ¿preparada? Vamos a echarle un vistazo a este fragmento de código...

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Hasta ahora, hemos descrito el lenguaje de programación Java, hemos hecho un recorrido por su historia y nos hemos instruido sobre su filosofía de trabajo, pero te preguntarás:

- ¿Cuándo empezamos a desarrollar programas?
- ¿Qué elementos forman parte de un programa en Java?
- ¿Qué se necesita para programar en este lenguaje?
- ¿Podemos crear programas de diferente tipo?

No te impacientes, cada vez estamos más cerca de comenzar la experiencia con el lenguaje de programación Java. Iniciaremos nuestro camino conociendo cuáles son los elementos básicos de un programa Java, la forma en que debemos escribir el código y los tipos de aplicaciones que pueden crearse en este lenguaje.

# 7.1.- Estructura de un programa.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

En el gráfico al que puedes acceder a continuación, se presenta la estructura general de un programa realizado en un lenguaje orientado a objetos como es Java.

[![Aparece un fragmento de código con la clase principal y el método main de un programa escrito en Java.](./recopila_files/PROG01_CONT_R19_estructura_programa_java_mini.jpg "Estructrua de un programa en Java.")](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG01_CONT_R19_estructura_programa_java.jpg)

José Luis García Martínez. Uso educativo-nc. Elaboración propia.

Vamos a analizar los elementos que aparecen en esa estructura:

- public class ClasePrincipal: todos los programas han de incluir elemento como éste. Podrá llamarse ClasePrincipal, `ProgramaPrincipal`, ClaseDePruebas, `ProgramaDePruebas`, Programa01 o como queramos. Pero debe tener un nombre. Se trata de una clase general en la que se incluyen todos los demás elementos del programa. En unidades posteriores veremos qué es una clase y cuáles son sus componentes principales. Por ahora es suficiente con que sepamos que nuestro programa va a comenzar con las líneas public class NombrePrograma, donde NombrePrograma será el nombre de nuestro programa.
- Dentro de este elemento principal observamos el método o función **main()** que contiene las líneas de código de nuestro programa. También veremos más adelante qué es un método. Baste por ahora saber que, al igual que en el caso anterior, nuestro programa sebe contener también esas líneas public static void main (String args\[\]). Aquí dentro se podrán incluir las instrucciones que estimemos oportunas para la ejecución del programa.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Ten en cuenta que **Java distingue entre mayúsculas y minúsculas**. Si le das a la clase principal el nombre PrimerPrograma, el archivo **.java** tendrá como identificador **PrimerPrograma.java**, que es totalmente diferente a primerprograma.java. Además, para Java los elementos PrimerPrograma y `primerprograma` serían considerados dos clases diferentes dentro del código fuente.

Más adelante hablaremos de las convenciones que suelen seguirse para formar los nombres de las clases en Java, así como de cualquier otro identificador usado por el lenguaje.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

- **Comentarios**: los comentarios se suelen incluir en el código fuente para realizar aclaraciones, anotaciones o cualquier otra indicación que el programador estime oportuna. Estos comentarios pueden introducirse de dos formas:
    - Con **//** estaríamos estableciendo una única línea completa de comentario, es decir, todo lo que hay detrás, hasta que haya un salto de línea, es comentario.
    - Con **/\* \*/**. De esta forma   con **/\*** comenzaríamos el comentario y éste no terminaría hasta que no insertáramos **\*/**.
- **Bloques de código**: son conjuntos de instrucciones que se marcan mediante la apertura y cierre de llaves **{ }**. El código así marcado es considerado interno al bloque.
- **Punto y coma** (**;**): aunque en el ejemplo de la imagen no hemos terminado ninguna línea de código con punto y coma, para no distraer de momento con los detalles, hay que hacer hincapié en que cada línea de código ha de terminar con punto y coma (**;**). En caso de no hacerlo, tendremos errores sintácticos.

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

# Pregunta 1

public static void main (String\[\] args) contiene las líneas de código de nuestro programa principal.

Verdadero  Falso

# Retroalimentación

**Falso**

La clase general del programa tiene el formato public class <nombre\_clase\_general> y todos los programas Java tendrán una. Dentro de ella podrá haber más clases definidas por el usuario y siempre, deberá haber un método main() desde el que se irá haciendo uso del resto de clases definidas. Por el momento, no necesitamos conocer los conceptos de clase y de método. Baste saber que esas dos líneas deben estar en todos nuestros programas y que dentro (encerradas entre llaves) estarán las líneas de código que escribiremos.

# 7.2.- El entorno básico de desarrollo Java.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Primer plano de unas manos trabajando con un ordenador. La mano derecha sobre el ratón y la izquierda pulsa en el teclado. ](./recopila_files/BU004810.png "Programando.")

Stockbyte. Uso educativo no comercial para

plataformas públicas de Formación

Profesional a distancia. CD-DVD Num. V43

Ya conoces cómo es la estructura de un programa en Java, pero, ¿qué necesitamos para llevarlo a la práctica?

La herramienta básica para empezar a desarrollar aplicaciones en Java es el **JDK (Java Development Kit o Kit de Desarrollo Java)**, que incluye un compilador y un intérprete para línea de comandos. Estos dos programas son los empleados en la precompilación e interpretación del código.

Como veremos, existen diferentes entornos para la creación de programas en Java que incluyen multitud de herramientas, pero por ahora nos centraremos en el entorno más básico, extendido y gratuito, el Java Development Kit (JDK). JDK es un entorno de desarrollo para construir aplicaciones, applets y componentes utilizando el lenguaje de programación Java. Incluye herramientas útiles para el desarrollo y prueba de programas escritos en Java y ejecutados en la Plataforma Java.

Así mismo, junto a JDK se incluye una implementación del entorno de ejecución Java, el **JRE (Java Runtime Environment)** para ser utilizado por el JDK. El JRE incluye la Máquina Virtual de Java (MVJ ó JVM – Java Virtual Machine), bibliotecas de clases y otros ficheros que soportan la ejecución de programas escritos en el lenguaje de programación Java.

Java fue creado por Sun Microsystems, posteriormente absorbida por Oracle, que ha ido lanzando las sucesivas versiones del JDK. Con el lanzamiento de Java 11 Oracle hizo un cambio de licencia de modo que se convirtió en una tecnología de pago en caso de usarlo en ciertas circunstancias. Podemos usar el JDK de Oracle o bien otras implementaciones abiertas, en nuestro caso trabajaremos con la implementación que vemos a continuación.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Para poder desarrollar nuestros primeros programas en Java sólo necesitaremos un editor de texto plano y los elementos que acabamos de instalar a través de Java SE.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

En el artículo que tienes a continuación puedes leer más sobre el cambio de licencia de Oracle con el JDK 11.

[Cambio de licencia](https://www.muylinux.com/2019/03/19/java-11-open-source-gratuito/ "Cambio de licencia")

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

# Pregunta 1

**Podemos desarrollar programas escritos en Java mediante un editor de textos y a través del JDK podremos ejecutarlos.**

Verdadero  Falso

# Retroalimentación

**Verdadero**

Efectivamente, JDK incluye un compilador de Java, que permitiría realizar la compilación del código fuente, generando los bytecodes, e incluye al JRE, (que a su vez incluye la JVM y una serie de bibliotecas Java llamadas API) que permitiría la ejecución posterior en la JVM de los bytecodes de nuestro programa.

# Debes conocer

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Instalar AdoptOpenJDK en Windows

[https://www.youtube.com/embed/H-tWycZkYfc](https://www.youtube.com/embed/H-tWycZkYfc)

[Resumen del vídeo](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/instalarAdoptOpen.html "Ver el resumen del vídeo")

**Instalar AdoptOpenJDK en Linux**

En el siguiente artículo se comenta cómo instalar OpenJDK en las principales distribuciones Linux.

[Instalar JDK en Linux](https://www.muylinux.com/2019/05/24/instalar-adoptopenjdk-principales-distribuciones/ "Instalar el JDK en Linux")

# 7.3.- La API de Java.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Una alumna busca un libro en un estante bajo de una biblioteca.](./recopila_files/SKD246687SDC.png "Biblioteca.")

Stockbyte. Uso educativo no comercial para

plataformas públicas de Formación Profesional

a distancia. CD-DVD Num. SD174

Junto con el kit de desarrollo que hemos descargado e instalado anteriormente, vienen incluidas gratuitamente todas las bibliotecas de la API (Application Programming Interface – Interfaz de programación de aplicaciones) de Java, es lo que se conoce como **Bibliotecas de Clases Java.** Este conjunto de bibliotecas proporciona al programador paquetes de clases útiles para la realización de múltiples tareas dentro de un programa. Está organizada en paquetes lógicos, donde cada paquete contiene un conjunto de clases relacionadas [semánticamente_Semántica_Referencia a los aspectos del significado, sentido o interpretación del significado de un determinado elemento, símbolo, palabra, expresión o representación formal. En principio cualquier medio de expresión (lenguaje formal o natural) admite una correspondencia entre expresiones de símbolos o palabras, y situaciones o conjuntos de cosas que se encuentran en el mundo físico o abstracto, que puede ser descrito por dicho medio de expresión.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) .

En décadas pasadas una biblioteca era un conjunto de programas que contenían cientos de rutinas (una rutina es un procedimiento o función bien verificados, en determinado lenguaje de programación). Las rutinas de biblioteca manejaban las tareas que todos o casi todos los programas necesitaban. El programador podía recurrir a esta biblioteca para desarrollar programas con rapidez.

Una biblioteca de clases es un conjunto de clases de programación orientada a objetos. Esas clases contienen métodos que son útiles para los programadores. En el caso de Java cuando descargamos el JDK obtenemos la biblioteca de clases API. Utilizar las clases y métodos de las API de Java reduce el tiempo de desarrollo de los programas. También, existen diversas bibliotecas de clases desarrolladas por terceros que contienen componentes reutilizables de software, y están disponibles a través de la Web.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Si quieres acceder a la información oficial sobre la API de Java, te proponemos el siguiente enlace (está en Inglés).

[Información oficial sobre la API de Java](http://www.oracle.com/technetwork/Java/Javase/documentation/api-jsp-136079.html "Acceder a la web con la API de Java.")

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

# Pregunta

**Indica qué no es la API de Java:**

# Respuestas

[Opción 1](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-68_63)

Un entorno integrado de desarrollo.

[Opción 2](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-68_121)

Un conjunto de bibliotecas de clases.

[Opción 3](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-68_124)

Una parte del JDK, incluido en el Java SE.

# Retroalimentación

En efecto, la API de Java es utilizada para la creación de programas pero no ofrece las herramientas de desarrollo que un IDE posee.

Incorrecto, la API de Java provee de clases agrupadas en paquetes que proporcionan una interfaz común para desarrollar aplicaciones Java en todas las plataformas.

Incorrecto, la API de Java está incluida junto con JDK y JRE en Java SE.

# Solución

1. [Opción correcta](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-68_63) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa0b68_60))
2. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-68_121) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa1b68_60))
3. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-68_124) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa2b68_60))

# 7.4.- Afinando la configuración.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Primer plano de una lupa colocada a cuarenta y cinco grados sobre una superficie.](./recopila_files/BSY_074.png "Mirando con lupa.")

Stockbyte. Uso educativo no comercial para

plataformas públicas de Formación

Profesional a distancia. CD-DVD Num. EP006

¿Y es necesario configurar la instalación del JDK que acabamos de hacer?

Para que podamos compilar y ejecutar ficheros Java es necesario que realicemos unos pequeños ajustes en la configuración del sistema. Vamos a indicarle dónde encontrar los ficheros necesarios para realizar las labores de compilación y ejecución, en este caso **javac.exe** y **java.exe**, así como las librerías contenidas en la API de Java y las clases del usuario.

**La variable PATH:** como aún no disponemos de un IDE (Integrated Development Environment - Entorno Integrado de Desarrollo) la única forma de ejecutar programas es a través de línea de comandos. Pero sólo podremos ejecutar programas directamente si la ruta hacia ellos está indicada en la variable PATH del ordenador. Es necesario que incluyamos la ruta hacia estos programas en nuestra variable PATH. Esta ruta será el lugar donde se instaló el JDK hasta su directorio **bin**.

Si has instalado AdoptJDK como se indicaba en el vídeo de instalación, no tienes que hacer nada. Si no fuera así, tendrías que indicar dónde está instalado Java. Por ejemplo, así se haría si se tuviera instalado jdk 8 de Oracle.

# Debes conocer

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

En el siguiente documento aprenderás cómo habría que configurar la variable PATH en Windows, aunque AdoptOpenJdk ya lo hace.

[Cómo configurar la variable PATH de Windows](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG01_CONT_R21_Como_configurar_PATH.pdf "Descargar documento sobre paquetes [pdf - 1.1 MB]") (1.1 MB)

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

**La variable** CLASSPATH: esta variable de entorno establece dónde buscar las clases o bibliotecas de la API de Java, así como las clases creadas por el usuario. Es decir, los ficheros .class que se obtienen una vez compilado el código fuente de un programa escrito en Java. Es posible que en dicha ruta existan directorios y ficheros comprimidos en los formatos zip o `jar` que pueden ser utilizados directamente por el JDK, conteniendo en su interior archivos con extensión class.

(Por ejemplo: C:\\Program Files\\AdoptOpenJDK\\jdk-11.0.7.10-hotspot\\bin)

Si no existe la variable **CLASSPATH** debes crearla, para modificar su contenido sigue el mismo método que hemos empleado para la modificación del valor de la variable PATH, anteriormente descrito. Ten en cuenta que la ruta que debes incluir será el lugar donde se instaló el JDK hasta su directorio lib.

(Por ejemplo: C:\\Program Files\\AdoptOpenJDK\\jdk-11.0.7.10-hotspot\\lib)

# Debes conocer

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

En el siguiente artículo aprenderás cómo se configura el CLASSPATH en Windows.

[Cómo configurar el CLASPATH de Windows](https://www.abrirllave.com/java/configurar-la-variable-de-entorno-classpath.php "Acceder al artículo sobre configuración del Classpath")

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

# Pregunta

**¿Qué variable de sistema o de entorno debemos configurar correctamente para que podamos compilar directamente desde la línea de comandos nuestros programas escritos en lenguaje Java?**

# Respuestas

[Opción 1](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-73_63)

CLASSPATH.

[Opción 2](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-73_130)

PATH.

[Opción 3](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-73_133)

Javac.exe.

# Retroalimentación

No es correcto, esta es la variable que hemos de configurar para conseguir que las clases de Java o las creadas por el usuario estén accesibles por nuestros programas.

Efectivamente, esta es la variable de entorno que modificaremos añadiendo a su contenido la ruta hasta el directorio bin donde está instalado el JDK.

No es correcto, la pregunta te pedía cuál es la variable, no cuál es el programa para realizar la compilación.    

# Solución

1. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-73_63) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa0b73_60))
2. [Opción correcta](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-73_130) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa1b73_60))
3. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-73_133) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa2b73_60))

# 7.5.- Codificación, compilación y ejecución de aplicaciones.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Una vez que la configuración del entorno Java está completada y tenemos el código fuente de nuestro programa escrito en un archivo con extensión .java, la compilación de aplicaciones se realiza mediante el programa **javac** incluido en el software de desarrollo de Java.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Para llevar a cabo la compilación desde la línea de comandos, escribiremos:

**javac archivo.java**

Donde javac es el compilador de Java y archivo.java es nuestro código fuente.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![En tono fucsia, dos ruedas dentadas encajan para hacer funcionar un mecanismo.](./recopila_files/BSY_001.png "En funcionamiento.")

Stockbyte. Uso educativo no comercial para

plataformas públicas de Formación Profesional a

distancia. CD-DVD Num. EP006.

El resultado de la compilación será un archivo con el mismo nombre que el archivo Java pero con la **extensión .class**. Esto ya es el archivo con el código en forma de bytecode, es decir, con el código precompilado. Si en el código fuente de nuestro programa figuraran más de una clase, veremos cómo al realizar la compilación se generarán tantos archivos con extensión .class como clases tengamos. Además, si estas clases tenían método main() podremos ejecutar dichos archivos por separado para ver el funcionamiento de dichas clases.

Para que el programa pueda ser ejecutado, siempre y cuando esté incluido en su interior el método main(), podremos utilizar el intérprete incluido en el kit de desarrollo.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

La ejecución de nuestro programa desde la línea de comandos podremos hacerla escribiendo:

**java archivo**

Donde java es el intérprete y archivo es el archivo con el código precompilado. Es **IMPORTANTE** aclarar que donde ponemos archivo, nos referimos al archivo ya precompilado en bytecodes, que tiene la extensión .class, pero **NO hay que poner dicha extensión** para ejecutar el archivo, sólo el nombre. Esto se ve más claro en las explicaciones del ejercicio resuelto.

# Ejercicio resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Vamos a llevar a la práctica todo lo que hemos estado detallando a través de la creación, compilación y ejecución de un programa sencillo escrito en Java.



# Retroalimentación

Observa el código que se muestra más abajo, seguro que podrás entender parte de él. Cópialo en un editor de texto, respetando las mayúsculas y las minúsculas. Puedes guardar el archivo con extensión .java en la ubicación que prefieras. Recuerda que el nombre de la clase principal (en el código de ejemplo MiModulo) por ser public, debe ser exactamente igual al del archivo con extensión .java. Si tienes esto en cuenta la aplicación podrá ser compilada correctamente y ejecutada.

/\*\* La clase MiModulo implementa una aplicación que simplemente imprime "Módulo profesional - Programación" en pantalla. \*/

class MiModulo {

> public static void main(String\[\] args) {
>
>      // Muestra la cadena de caracteres<br />
>
>      System.out.println("Módulo profesional - Programación");
>
> }

}

Accede a la línea de comandos y teclea, teniendo como directorio activo la carpeta donde has guardado el archivo .java (y suponiendo que se ha establecido correctamente el valor para la variable de entorno PATH), el comando **para** **compilarlo**:

**javac MiModulo.java**

El compilador genera entonces un fichero de código de bytes: MiModulo.class. Si visualizas ahora el contenido de la carpeta verás que en ella está el archivo .java y uno o varios (depende de las clases que contenga el archivo con el código fuente) archivos .class.

Finalmente, **para realizar la ejecución** del programa debes utilizar la siguiente sentencia:


**java MiModulo**

Si todo ha ido bien, verás escrito en pantalla: ”Módulo profesional – Programación”.

# 7.5.1.- Estandarización del código

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Cada vez que escribamos el código de un programa es importante que sigamos unas normas o estándares que nos ayuden a realizar ese proceso siempre de la misma manera. De este modo todos los programas tendrán una estructura similar y nos será mucho más sencillo localizar cada uno de sus componentes.

En el caso del lenguaje Java ya hemos visto la estructura general un programa. Basándonos en esa estructura general vamos a definir una plantilla a partir de la cual podríamos desarrollar nuestros propios programas sin tener que escribir de nuevo las partes comunes una y otra vez.

Nuestra plantilla podría tener la siguiente estructura:

1. **Declaración de la clase principal**. Aquí podríamos poner el **nombre de nuestro programa**. Es decir, en lugar de llamar a la clase **ClasePrincipal**, podríamos llamarla **Concurso**, **Contabilidad**, **Juego**, **Ejercicio1**, **EjercicioNadador**, **CalculoDeAreas**, etc. Esto es, algún nombre que nos dé una idea sobre la tarea que va a llevar a cabo el programa.
2. Método **main**, dentro del componente anterior (encerrado entre llaves). Este nombre no se puede cambiar (siempre será **main**). En su interior estarán las líneas de código de nuestro programa:
    1. **Declaración de constantes y variables**.
        1. Declaración de **constantes**.
        2. Declaración de **variables de entrada**.
        3. Declaración de **variables de salida**.
        4. Declaración de **variables auxiliares**.
    2. **Cuerpo del programa**.
        1. **Entrada de datos**.
        2. **Procesamiento**.
        3. **Salida de resultados**.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Si seguimos siempre esa estructura, será muy fácil poder analizar nuestros programas, pues estarán divididos en distintos elementos con significado propio cada uno de ellos. Ahora bien, tampoco hay que ser excesivamente rígidos. Dependiendo de la naturaleza y la complejidad del programa es posible que en ocasiones que algunas de esas tres partes se fundan en una (la entrada y el procesamiento, o el procesamiento y la salida, o incluso las tres), especialmente cuando el programa sea interactivo y se sigan introduciendo datos a la vez que se va procesando e incluso devolviendo resultados.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Esa estructura escrita en lenguaje Java podría quedar más o menos así:

/\*
\* Plantilla para programas de prueba
\*/
import java.util.Scanner;

public class NombreProgramaJava {

    public static void main(String\[\] args) {

        //----------------------------------------------
        //          Declaración de variables 
        //----------------------------------------------

        // Constantes


        // Variables de entrada
        
        
        // Variables de salida


        // Variables auxiliares


        // Clase Scanner para petición de datos de entrada
        Scanner teclado= new Scanner (System.in);
        
        
        //----------------------------------------------
        //                Entrada de datos 
        //----------------------------------------------
        System.out.println("PLANTILLA DE PROGRAMA ");
        System.out.println("----------------------");
        System.out.println(" ");


        // Aquí vendrá nuestro código de entrada de datos

        
        //----------------------------------------------
        //                 Procesamiento 
        //----------------------------------------------

        
        // Aquí vendrá nuestro código de procesamiento

        
        //----------------------------------------------
        //              Salida de resultados 
        //----------------------------------------------
        System.out.println ();
        System.out.println ("RESULTADO");
        System.out.println ("---------");
        

        // Aquí vendrá nuestro código de salida de resultados

        
        System.out.println ();
        System.out.println ("Fin del programa.");        
    }    
}

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Es probable que aún no entiendas muchas de las sentencias que hay escritas en el programa. No te preocupes, ya las irás entendiendo. Mientras tanto simplemente tendrás que ir "rellenando" las partes que necesites para construir tu programa.

Aquí tienes el archivo java que puedes utilizar como plantilla para escribir tus programas a partir de ahora: [archivo plantilla de programa Java](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PlantillaProgramaJava.java "Descargar archivo de plantilla para programas Java") (java - 1.52 KB).

Cada vez que vayas a escribir un nuevo programa, puedes usar este código cambiando el nombre a la clase (en lugar de **PlantillaProgramaJava** le asignas el nombre del archivo (clase) que le hayas puesto con el editor de texto que estés utilizando)  y completas con el código de las acciones que tengas que realizar en ese programa (declarar variables, pedir datos por teclado, realizar cálculos, mostrar información por pantalla, etc.). Ya iremos viendo poco a poco y con detalle como llevar a cabo cada una de esas acciones.

# 7.5.2.- Solución a posibles problemas con la codificación de caracteres acentuados.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

¿Te ha pasado que al probar a ejecutar un programa que debe escribir algún carácter acentuado, en su lugar aparecen caracteres extraños? ¿Alguna vez has visitado una web en la que todos los caracteres acentuados aparecen como un cuadradito negro con una interrogación dentro (Mar�a) o la ñ como Ã± (EspaÃ**±**a)?¿Cómo evitar el problema de los caracteres extraños al mostrar caracteres acentuados en Java?

Esto suele pasar cuando se intenta ejecutar un programa en Java que contiene caracteres acentuados, y trabajamos con la consola de comandos. En cualquier caso, no debéis preocuparos demasiado de estos fallos en este módulo, ya que la forma normal de programar en Java NO es usando el JDK “a secas” (aunque esté bien que se sepa que es posible), sino que se suele programar haciendo uso de un entorno de desarrollo como es el caso de NetBeans, que este tipo de problemas los "solventa" por defecto, usando la codificación adecuada, de forma que los acentos se ven correctamente, etc.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

A continuación, recomendar un enlace en el que explica muy bien a qué se debe el problema, por qué se produce y cómo solucionarlo en distintos entornos.

[Sobre las reglas de codificación o... ¿de dónde salen esos caracteres "raros"?](http://www.adictosaltrabajo.com/tutoriales/tutoriales.php?pagina=characterencoding-native2ascii "Acceder a una web con información interesante sobre reglas de codificación.")

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Una solución muy simple, y que suele funcionar en la mayoría de los casos consiste en guardar el archivo .java, compilarlo, e indicarle en el momento de ejecutar cuál es la codificación correcta que tiene que usar, forzando a que muestre la salida con esa codificación:

java -Dfile.encoding=cp850 PROG\_programa1

En este ejemplo, la página de códigos que usamos en nuestro sistema es la 850, y por eso ponemos encoding=cp850, pero puedes forzar a usar cualquier otra codificación que use tu sistema. Para averiguar cuál es la codificación de tu sistema, puedes usar desde la consola el comando chcp (son las iniciales de CHange CodePage, ya que sirve para mostrar y también para cambiar la codificación que usa tu equipo). Mira un ejemplo en la siguiente captura de pantalla:

[![Captura de pantalla de la consola de comandos en la que se ejecuta el comando chcp, y que muestra como salida el mensaje ](./recopila_files/PROG01_CONT_R21_1_EjecutandoCHCP_mini.png "Ejecutando CHCP para ver la página de codigo activa. ")](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG01_CONT_R21_1_EjecutandoCHCP.jpg "Imagen Ampliada. ")

© Captura de pantalla de consola de comandos en Windows.

Como regla general, podemos seguir una serie de pasos para no tener problemas con las tildes (en entornos Windows). Es una manera alternativa para no tener que usar las opciones de forzado de uso de una cierta tabla de caracteres al ejecutar los comandos javac o `java`. Aunque esta solución implica que debemos saber de antemano qué juego de caracteres se usará allá donde vayamos a ejecutar nuestro programa. Para los primeros ejercicios donde sabemos que los vamos a hacer en la [consola de comandos_Consola de comandos o línea de comandos._Es una pantalla del sistema operativo que proporciona un método diferente de "dar órdenes" al sistema operativo. Permite dar las instrucciones al Sistema operativo por medio de una línea de texto simple, que se introduce detrás del prompt (una señal que indica que el sistema está listo esperando a recibir la siguiente instrucción).](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) , nos puede valer esta "artimaña", aunque como ya se ha dicho, cuando utilicemos entornos de desarrollo (en nuestro caso NetBeans) podremos "olvidarnos" de estas cuestiones. Los pasos a seguir son los siguientes:

- En la consola de Windows ejecutamos el comando chcp para que nos diga qué juego de caracteres está usando nuestro sistema. (Ver la captura de pantalla anterior).
- Con [Notepad++](http://notepad-plus-plus.org/ "Acceder a la web oficial de Notepad++.") creo un archivo en blanco y antes de nada le indico que quiero usar el juego de caracteres de Europa occidental/ISO 8859-1.

  [![Captura de pantalla donde se ve cómo se elige el juego de caracteres Adecuado en el editor de texto Notepad++. (Menú Codificación - Juego de caracteres - Europa Occidental - ISO 8859-1)](./recopila_files/isoeuropeo_mini.png "Eligiendo juego de caracteres para Notepad++.")](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/isoeuropeo.png "Imagen Ampliada.")

  Captura de pantalla de Notepad++.  [GNU/GPL](http://www.gnu.org/copyleft/gpl.html "Acceder a la licencia GNU/GPL").  [Notepad++](http://notepad-plus-plus.org/ "Captura de pantalla de la aplicación Notepad++")


- Pego el código de mi programa y lo guardo como archivo Java source (.java)

  [![Captura de pantalla del cuadro de diálogo ](./recopila_files/PROG01_CONT_R21_3_GuardandoComoJava_mini.png "Eligiendo tipo de archivo Java. ")](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG01_CONT_R21_3_GuardandoComoJava.jpg "Imagen Ampliada. ")

  Captura de elaboración propia a partir de Notepad++, con licencia [GNU/GPL](http://www.gnu.org/copyleft/gpl.html "Acceder a la licencia GNU/GPL").

- Finalmente pasamos a compilar el .java y a ejecutar el .class y vemos en esta captura que se hace correctamente:

  [![Captura de pantalla de la consola de comandos de windows en la que se ve la compilación y la ejecución de un programa Java en el que la salida contiene caracteres acentuados que se muestran correctamente. ](./recopila_files/PROG01_CONT_R21_4_CompilacionYEjecucionCorrecta_mini.png "Compilación y ejecución con acentuación correcta. ")](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG01_CONT_R21_4_CompilacionYEjecucionCorrecta.jpg "Imagen Ampliada. ")

  © Captura de pantalla de la consola de comandos de Windows.


# 7.6.- Tipos de aplicaciones en Java.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Estructura metálica compuesta por nodos circulares de diferentes tamaños, interconectados y en el centro de cada uno de ellos, una esfera de cristal de diferentes colores.](./recopila_files/PROG01_CONT_R22_aplicaciones.png "Tipos de aplicaciones.")

[CC by-sa](http://creativecommons.org/licenses/by-sa/3.0/deed.es "CC by-sa") [Oxygen team](http://commons.wikimedia.org/wiki/File:Nepomuk.svg "Oxygen team")

La versatilidad del lenguaje de programación Java permite al programador crear distintos tipos de aplicaciones. A continuación, describiremos las características más relevantes de cada uno de ellos:

- **Aplicaciones de consola:**
    - Son programas independientes al igual que los creados con los lenguajes tradicionales.
    - Se componen como mínimo de un archivo **.class** que debe contar necesariamente con el método **main()**.
    - No necesitan un navegador web y se ejecutan cuando invocamos el comando **java** para iniciar la Máquina Virtual de Java (JVM). De no encontrarse el método **main()** la aplicación no podrá ejecutarse.
    - Las aplicaciones de consola leen y escriben hacia y desde la entrada y salida estándar, sin ninguna interfaz gráfica de usuario.

- **Aplicaciones gráficas:**
    - Aquellas que utilizan las clases con capacidades gráficas, como Swing, que es la biblioteca para la interfaz gráfica de usuario avanzada de la plataforma Java SE.
    - Incluyen las instrucciones import, que indican al compilador de Java que las clases del paquete javax.swing se incluyan en la compilación.

- **Applets:**
    - Son programas incrustados en otras aplicaciones, normalmente una página web que se muestra en un navegador. Cuando el navegador carga una web que contiene un applet, éste se descarga en el navegador web y comienza a ejecutarse. Esto nos permite crear programas que cualquier usuario puede ejecutar con tan solo cargar la página web en su navegador.
    - Se pueden descargar de Internet y se observan en un navegador. Los applets se descargan junto con una página HTML desde un servidor web y se ejecutan en la máquina cliente.
    - No tienen acceso a partes sensibles (por ejemplo: no pueden escribir archivos), a menos que uno mismo le dé los permisos necesarios en el sistema.
    - No tienen un método principal.
    - Son multiplataforma y pueden ejecutarse en cualquier navegador que soporte Java.

- **Servlets:**
    - Son componentes de la parte del servidor de Java EE, encargados de generar respuestas a las peticiones recibidas de los clientes.
    - Los servlets, al contrario de los applets, son programas que están pensados para trabajar en el lado del servidor y desarrollar aplicaciones Web que interactúen con los clientes.

- **Midlets:**
    - Son aplicaciones creadas en Java para su ejecución en sistemas de propósito simple o dispositivos móviles. Algunos juegos Java creados para teléfonos móviles son midlets.
    - Son programas creados para dispositivos embebidos (se dedican a una sola actividad), más específicamente para la máquina virtual Java Micro Edition (Java ME).
    - Generalmente son juegos y aplicaciones que se ejecutan en teléfonos móviles.

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

# Pregunta 1

**Un Applet es totalmente seguro, ya que no puede acceder, en ningún caso, a zonas sensibles del sistema. Es decir, no podría borrar o modificar nuestros archivos.**

Verdadero  Falso

# Retroalimentación

**Falso**

Los applets podrían acceder a zonas sensibles de nuestro sistema si les diéramos permisos para hacerlo. Pero si no está firmado como confiable, tiene un acceso limitado al sistema del usuario.

# 8.- Entornos Integrados de Desarrollo (IDE).

# Caso práctico

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Programador chateando frente al ordenador.](./recopila_files/SEGURIDAD_Y__MEDIO_AMBIENTE_07.jpg "Juan chateando.")

Ministerio de Educación. Uso educativo-nc.

Elaboración propia.

**Ada, Juan y María** están navegando por Internet buscando información sobre herramientas que les faciliten trabajar en Java. **Ada** aconseja utilizar alguno de los entornos de desarrollo integrado existentes, ya que las posibilidades y rapidez que ofrecen aumentarían la calidad y reducirían el tiempo requerido para desarrollar sus proyectos.

**Juan**, que está chateando con un miembro de un foro de programadores al que pertenece, corrobora lo que **Ada** recomienda.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Computador Commodore 64 con su monitor y unidad de disco.](./recopila_files/PROG01_CONT_R22_01_C64c_system.jpg "Commodore 64.")

[CC by-sa](http://creativecommons.org/licenses/by-sa/3.0/deed.es "CC by-sa") [Bill Bertram](http://commons.wikimedia.org/wiki/Commodore_64#mediaviewer/File:C64c_system.jpg "Bill Bertram")

En los comienzos de Java la utilización de la línea de comandos era algo habitual. El programador escribía el código fuente empleando un editor de texto básico, seguidamente, pasaba a utilizar un compilador y con él obtenía el código compilado. En un paso posterior, necesitaba emplear una tercera herramienta para el ensamblado del programa. Por último, podía probar a través de la línea de comandos el archivo ejecutable. El problema surgía cuando se producía algún error, lo que provocaba tener que volver a iniciar el proceso completo.

Estas circunstancias hacían que el desarrollo de software no estuviera optimizado. Con el paso del tiempo, se fueron desarrollando aplicaciones que incluían las herramientas necesarias para realizar todo el proceso de programación de forma más sencilla, fiable y rápida. Para cada lenguaje de programación existen múltiples entornos de desarrollo, cada uno con sus ventajas e inconvenientes. Dependiendo de las necesidades de la persona que va a programar, la facilidad de uso o lo agradable que le resulte trabajar con él, se elegirá entre unos u otros entornos.

Para el lenguaje de programación Java existen múltiples alternativas, siendo los principales entornos de desarrollo **NetBeans** (que cuenta con el apoyo de la empresa Sun), **Eclipse** y **JCreator**. Los dos primeros son gratuitos, con soporte de idiomas y multiplataforma (Windows, Linux, MacOS).

¿Y cuál será con el que vamos a trabajar? El entorno que hemos seleccionado llevar a cabo nuestros desarrollos de software en este módulo profesional será **NetBeans,** al haber sido construido por la misma compañía que creó Java, ser de código abierto y ofrecer capacidades profesionales. Aunque, no te preocupes, también haremos un recorrido por otros entornos destacables.

# 8.1.- ¿Qué son?

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Muestra una carpeta y unas herramientas para simbolizar un IDE.](./recopila_files/PROG01_CONT_R23_Herramientas_IDE.jpg "Herramientas.")

GNU GPL [Sasa Stefanovic](http://commons.wikimedia.org/wiki/File:Exquisite-kcontrol.png "Sasa Stefanovic")

Son aplicaciones que ofrecen la posibilidad de llevar a cabo el proceso completo de desarrollo de software a través de un único programa. Podremos realizar las labores de edición, compilación, depuración, detección de errores, corrección y ejecución de programas escritos en Java o en otros lenguajes de programación, bajo un entorno gráfico (no mediante línea de comandos). Junto a las capacidades descritas, cada entorno añade otras que ayudan a realizar el proceso de programación, como por ejemplo: código fuente coloreado, plantillas para diferentes tipos de aplicaciones, creación de proyectos, etc.

Hay que tener en cuenta que un entorno de desarrollo no es más que una fachada para el proceso de compilación y ejecución de un programa. ¿Qué quiere decir eso? Pues que si tenemos instalado un IDE (Entorno Integrado de Desarrollo) y no tenemos instalado el compilador, no tenemos nada.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Si deseas conocer algo más sobre lo que son los Entornos Integrados de Desarrollo (IDE) accede a las definiciones que te proponemos a continuación:

[Definición de Entorno Integrado de Desarrollo](https://www.ecured.cu/IDE_de_Programaci%C3%B3n "Acceder a una web con la definición de  Entorno Integrado de Desarrollo.")

[Definición de Entorno Integrado de Desarrollo en Wikipedia](http://es.wikipedia.org/wiki/Entorno_de_desarrollo_integrado "Acceder a la definición de Entorno Integrado de Desarrollo según Wikipedia.")

# 8.2.- IDE actuales.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Existen en el mercado multitud de entornos de desarrollo para el lenguaje Java, los hay de libre distribución, de pago, para principiantes, para profesionales, que consumen más recursos, que son más ligeros, más amigables, más complejos que otros, etc.

Entre los que son gratuitos o de libre distribución tenemos:

- **NetBeans.**
- **Eclipse.**
- **BlueJ.**
- **jGRASP.**
- **JCreator LE.**

Entre los que son propietarios o de pago tenemos:

- **IntelliJ IDEA.**
- **JCreator.**
- **JDeveloper.**

# Debes conocer

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Cada uno de los entornos nombrados más arriba posee características que los hacen diferentes unos de otros, pero para tener una idea general de la versatilidad y potencia de cada uno de ellos, accede a la siguiente tabla comparativa:

[Comparativa entornos para Java](http://en.wikipedia.org/wiki/Comparison_of_integrated_development_environments#Java "Acceder a una web con una comparativa entornos Java.")

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Una figura aparece en el primer puesto de un podium, junto a un trofeo.](./recopila_files/PROG01_CONT_R24_Podium.jpg "El ganador.")

[CC by-sa](http://creativecommons.org/licenses/by-sa/3.0/deed.es "CC by-sa") [Svilen.milev](http://commons.wikimedia.org/wiki/File:Victory_podium.png "Svilen.milev")

Pero, ¿cuál o cuáles son los más utilizados por la comunidad de programadores Java?

El puesto de honor se lo disputan entre **Eclipse, IntelliJ IDEA** y **NetBeans**.

En los siguientes epígrafes haremos una descripción de NetBeans y Eclipse, para posteriormente desarrollar los puntos claves del entorno NetBeans.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Si quieres conocer la situación actual de uso y comparar diferentes entornos integrados de desarrollo para el lenguaje de programación Java, puedes ampliar datos en el siguiente artículo:

[Artículo sobre utilización de entornos Java.](https://bbvaopen4u.com/es/actualidad/herramientas-basicas-para-los-desarrolladores-en-java "Acceder a un artículo  en la web con una comparativa de uso de entornos Java.")

Para acceder a los lugares de Internet donde obtener los diferentes entornos integrados de desarrollo, puedes utilizar la lista que te ofrecemos en el anexo que hay al final de la unidad.

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

# Pregunta

**¿Cuál de los siguientes entornos sólo está soportado en la plataforma Windows?**

# Respuestas

[Opción 1](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-90_63)

Eclipse.

[Opción 2](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-90_141)

IntelliJ IDEA.

[Opción 3](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-90_144)

JCreator.

# Retroalimentación

No, el nivel de expansión de Eclipse se ha visto potenciado por estar soportado en la mayoría de plataformas.

No es así, este entorno está soportado en todas las plataformas e incorpora un entorno visual de desarrollo.

Correcto, este entorno, además de ser de pago, sólo es soportado en la plataforma Windows. No incorpora un entorno visual de desarrollo.

# Solución

1. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-90_63) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa0b90_60))
2. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-90_141) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa1b90_60))
3. [Opción correcta](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-90_144) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa2b90_60))

# 8.3.- El entorno NetBeans.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Logotipo del IDE NetBeans para Java.](./recopila_files/PROG01_CONT_R25_LogoNetBeans.jpg "Logo NetBeans.")

©  cita [NetBeans.org](https://netbeans.org/community/teams/evangelism/collateral.html?print=yes "Netbeans.org")

Como se ha indicado anteriormente, el entorno de desarrollo que vamos a utilizar a lo largo de los contenidos del módulo profesional será **NetBeans**. Por lo que vamos primero a analizar sus características y destacar las ventajas que puede aportar su utilización.

Se trata de un entorno de desarrollo orientado principalmente al lenguaje Java, aunque puede servir para otros lenguajes de programación. Es un producto libre y gratuito sin restricciones de uso. Es un proyecto de código abierto de gran éxito, con una comunidad de usuarios numerosa, en continuo crecimiento y apoyado por varias empresas.

El origen de este entorno hay que buscarlo en un proyecto realizado por estudiantes de la República Checa. Fue el primer IDE creado en lenguaje Java. Un tiempo más tarde, se formó una compañía que sería comprada en 1999 por Sun Microsystems (quien había creado el lenguaje Java). Poco después, Sun decidió que el producto sería libre y de código abierto y nació Netbeans como IDE de código abierto para crear aplicaciones Java.

NetBeans lleva tiempo pugnando con Eclipse por convertirse en la plataforma más importante para crear aplicaciones en Java y hasta el nombre (Eclipse) es toda una declaración de intenciones de hacerle la competencia a Oracle, (la empresa propietaria de NetBeans). Oracle Corporation adquirió Sun Microsystems en 2009. NetBeans sigue siendo software libre y ofrece las siguientes posibilidades:

- Escribir código en C, C++, [Ruby_Ruby_Lenguaje de programación interpretado, reflexivo y orientado a objetos. Su implementación oficial es distribuida bajo una licencia de software libre.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource), [Groovy_Groovy_Lenguaje de programación orientado a objetos implementado sobre la plataforma Java. Desde Groovy se puede acceder directamente a todas las API existentes en Java. El bytecode generado en el proceso de compilación es totalmente compatible con el generado por el lenguaje Java para la Java Virtual Machine (JVM), por tanto puede usarse directamente en cualquier aplicación Java. Todo lo anterior unido a que la mayor parte de código escrito en Java es totalmente válido en Groovy hacen que este lenguaje sea de muy fácil adopción para programadores Java.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource), [Javascript_Javascript_Lenguaje de programación interpretado. Se utiliza principalmente en su forma del lado del cliente (client-side), implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas. Todos los navegadores modernos interpretan el código JavaScript integrado en las páginas web.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource), [CSS_CSS_Hojas de estilo en cascada (en inglés Cascading Style Sheets), CSS es un lenguaje usado para definir la presentación de un documento estructurado escrito en HTML o XML.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) y [PHP_PHP_Lenguaje de programación interpretado, diseñado originalmente para la creación de páginas web dinámicas. Es usado principalmente para la interpretación del lado del servidor (server-side scripting), pero actualmente puede ser utilizado desde una interfaz de línea de comandos, o en la creación de otros tipos de programas, incluyendo aplicaciones con interfaz gráfica usando las bibliotecas Qt o GTK+.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) además de Java.
- Permitir crear aplicaciones J2EE gracias a que incorpora servidores de aplicaciones Java (actualmente [Glassfish_Glassfish_Servidor de aplicaciones de software libre desarrollado por Sun Microsystems, que implementa las tecnologías definidas en la plataforma Java EE y permite ejecutar aplicaciones que siguen esta especificación.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) y [Tomcat_Tomcat_Funciona como un contenedor de servlets desarrollado bajo el proyecto Jakarta en la Apache Software Fundation. Tomcat implementa las especificaciones de los servlets y de JavaServer Pages de Sun Microsystems. Se le considera un servidor de aplicaciones, hay que tener en cuenta que Tomcat puede utilizarse como servidor web independiente, o bien como una extensión del servidor web ya instalado.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource)).
- Crear aplicaciones [Swing_Swing_Es una biblioteca gráfica para Java. Incluye elementos para interfaz gráfica de usuario tales como cajas de texto, botones, desplegables y tablas.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) de forma sencilla, al estilo del Visual Studio de Microsoft.
- Crear aplicaciones **JME** para dispositivos móviles.

La versión que vamos a usar en este curso es la que tienes en el anexo de la programación docente.

Puedes consultar la hoja de ruta de desarrollos NetBeans mientras que lo desarrolló Oracle en el siguiente enlace:

[NetBeans Release Roadmap](https://netbeans.org/community/releases/roadmap.html "Acceder a la web del proyecto NetBeans con la hoja de ruta para sus desarrollos.")

Despúes de Oracle, el desarrollo de NetBeans pasó a manos de la fundación Oracle:

[Apache](https://netbeans.apache.org/ "Apache")

La plataforma NetBeans permite que las aplicaciones sean desarrolladas a partir de un conjunto de componentes de software llamados módulos. Un módulo es un archivo Java que contiene clases de Java escritas para interactuar con las API de NetBeans y un archivo especial (manifest file) que lo identifica como módulo.

Las aplicaciones construidas a partir de módulos pueden ser extendidas agregándole nuevos módulos. Debido a que los módulos pueden ser desarrollados independientemente, las aplicaciones basadas en esta plataforma pueden ser extendidas fácilmente por cualquiera que desarrolle también software.

Cada módulo provee una función bien definida, tales como el soporte de Java, edición, o soporte para el sistema de control de versiones. NetBeans contiene todos los módulos necesarios para el desarrollo de aplicaciones Java en una sola descarga, permitiendo a la persona que va a realizar el programa comenzar a trabajar inmediatamente.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Encuentra más información sobre esta plataforma en el enlace que te proponemos a continuación:

[Información oficial sobre NetBeans](http://netbeans.org/index_es.html "Acceder a datos sobre NetBeans en su web oficial.")

# 8.4.- Instalación y configuración.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Sobre la areana de una playa de Maldivas, pueden verse varias huellas caminando hacia nosotros. Al fondo las aguas cristalinas del mar.](./recopila_files/PROG01_CONT_R27_pasos.jpg "Pasos.")

[CC by-sa](http://creativecommons.org/licenses/by-sa/3.0/deed.es "CC by-sa") [Nevit Dilmen](http://commons.wikimedia.org/wiki/File:Maldives_00147.JPG "Nevit Dilmen")

Para realizar la instalación del entorno NetBeans, seguiremos los siguientes pasos básicos:

1. Descargar la versión deseada desde la web oficial.
2. Ejercutar el fichero de instalación. Más abajo hay un vídeo describiendo la instalción

Para llevar a cabo la descarga puedes dirigirte al siguiente enlace:

[Descarga de NetBeans.](https://netbeans.apache.org/download/index.html "Acceder a la web del proyecto NetBeans, para descargar NetBeans")

# Debes conocer

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

A continuación vemos cómo instalar el entorno de desarrollo NetBeans.

Instalar NetBeans

[https://www.youtube.com/embed/VWGL5k3\_0Y4](https://www.youtube.com/embed/VWGL5k3_0Y4)

[Resumen del vídeo](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/Descripcion_del_videoInstalNEt.html "Ver el resumen del vídeo (Se abre en una nueva ventana)")

Y ya podemos empezar a crear programas. Por ejemplo, en el siguiente vídeo ejecutamos NetBeans y creamos un proyecto muy sencillo para crear un programa que escriba una frase por consola.

Crear un proyecto sencillo

[https://www.youtube.com/embed/uYAZO64wIeM](https://www.youtube.com/embed/uYAZO64wIeM)

[Resumen del vídeo](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/DescripcionCrearPRoyIni.html "Ver el resumen del vídeo")

# 8.5.- Aspecto del entorno y gestión de proyectos.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

La pantalla inicial de nuestro entorno de desarrollo ofrece accesos directos a las operaciones más usuales: aprendizaje inicial, tutoriales, ejemplos, demos, los últimos programas realizados y las novedades de la versión.

Para comenzar a describir el aspecto del entorno, es necesario crear un nuevo proyecto accediendo al menú **File - New Project**, indicaremos el tipo de aplicación que vamos a crear.

# Debes conocer

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Para continuar con la creación de nuestro proyecto y la descripción del aspecto del entorno, accede al siguiente documento:

[Descripción del entorno NetBeans](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/EntornoNetBeans.pdf "Descargar documento sobre el entorno NetBeans [pdf - 1.05 MB]") (1.05 MB)

Cuando trabajemos con NetBeans, nuestros proyectos harán uso de clases para poder desarrollar las operaciones de nuestros programas. Estas clases se agruparán en paquetes y en el siguiente documento puedes aprender cómo se gestionan a través del entorno:

[Documento sobre paquetes](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/Presenta.pdf "Descargar documento sobre paquetes [pdf - 696 KB]") (696 KB)

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Una de las ventajas que ofrece este entorno es poder examinar nuestros proyectos a través de la vista **Archivos**. Esta vista nos enseña la realidad de los archivos del proyecto, la carpeta **build** contiene los archivos compilados (.class), la carpeta **src** el código fuente y el resto, son archivos creados por Netbeans para comprobar la configuración del proyecto o los archivos necesarios para la correcta interpretación del código en otros sistemas (en cualquier caso no hay que borrarlos). Para activar esta vista, selecciona en el menú principal Windows - Files.

![Visión a través del entorno NetBeans de las carpetas que contienen los archivos .java y .class de un proyecto.](./recopila_files/ventanafiles.png "Vista de archivos de un proyecto en NetBeans.")

José Javier Bermúdez Hernández. Uso educativo-nc. Elaboración propia.

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

**Rellena los huecos con los conceptos adecuados:**



En NetBeans, los archivos .class de un proyecto están alojados en la carpeta Rellenar huecos (1):  JXUwMDNhJXUwMDE3JXUwMDFjJXUwMDA1JXUwMDA4 y los .Java en la carpeta Rellenar huecos (2):  JXUwMDJiJXUwMDAxJXUwMDEx .

Habilitar JavaScript

Los archivos correspondientes a las clases se alojan en la carpeta build y los archivos con el código fuente se alojan en la carpeta src.

# 9.- Variables e identificadores.

# Caso práctico

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Fotografía en la que se muestra una aplicación informática a través de la pantalla de un ordenador.](./recopila_files/PROG01_CONT_R03_GENERICAS_CASO_286.jpg "Aplicación informática.")

Ministerio de Educación. Uso educativo-nc.

Elaboración propia.

**María** y **Juan** han comprobado que una aplicación informática es un trabajo de equipo que debe estar perfectamente coordinado. El primer paso es la definición de los datos y las variables que se van a utilizar.

Las decisiones que se tomen pueden afectar a todo el proyecto, en lo referente al rendimiento de la aplicación y ahorro de espacio en los sistemas de almacenamiento.

Después de la última reunión del equipo de proyecto ha quedado claro cuáles son las especificaciones de la aplicación a desarrollar. **Juan** no quiere perder el tiempo y ha comenzado a preparar los datos que va a usar el programa. Le ha pedido a **María** que vean juntos qué variables y tipos de datos se van a utilizar, **Juan** piensa que le vendrá bien como primera tarea para familiarizarse con el entorno de programación y con el lenguaje en sí.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Ventana donde se ve unas variables con su valor.](./recopila_files/PROG01_CONT_R039_Variables.jpg "Variables.")

[CC by-sa](http://creativecommons.org/licenses/by-sa/3.0/deed.es "CC by-sa") [El taller del Bit.](https://www.flickr.com/photos/eltallerdelbit/15550376555/in/photolist-pG8KbB-RQTiuo-9RiuF1-9RfBnF-qNz4FT-SUS4Vi-bw6RXy-hnccot-SVAKvw-eizaLd-T67R1v-oqXkx4-4GUhzJ-rddfHf-dgRTU2-aPTMKx-qu1DJm-89usUd-o4wJtk-6ACQNt-mRDGqB-mXcsR8-poCLka-TjV41E-mXcuyV-9YMHZD-p2H1o3-dJMU7R-mXcCsv-oD1mKc-rQTkgL-hnb7yo-iYNwnc-5KbJpr-bw6LBC-9bvmJh-hnbaHE-hnazdW-r2S7Rr-pLTU9x-nKJqug-82LYFR-4eSokR-5Nsjao-cNBZdm-d7iD5Q-r8Nh85-e3WLaK-bf1MvF-4TQNm1 "El taller del Bit.")

Un programa maneja datos para hacer cálculos, presentarlos en informes por pantalla o impresora, solicitarlos al usuario, guardarlos en disco, etc. Para poder manejar esos datos, el programa los guarda en variables.  
Una [variable_Variable_Una variable es un espacio en memoria principal del ordenador en donde el programa puede almacenar valores para utilizarlos posteriormente durante su ejecución.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) es una zona en la memoria del computador que puede almecenar un valor de un determinado tipo para ser usado más tarde en el programa. Las variables vienen determinadas por:

- Un **nombre**, que permite al programa acceder al valor que contiene en memoria. Debe ser un identificador válido. Por ejemplo, podría llamarse **precioVentaPublico**.
- Un **[tipo de dato_Tipo de dato_Un tipo especifica la naturaleza del dato, esto es, el rango de valores que puede adquirir, así como las operaciones que se pueden llevar a cabo sobre esos valores.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource)**, que especifica qué clase de información puede ser guardada por la variable en esa zona de memoria. Por ejemplo, puede ser de tipo entero, o de tipo cadena de caracteres, o de tipo real, etc. La variable anterior, si pretendemos que almacene precios, podría definirse como de tipo real, para que admita decimales para los céntimos. Cualquier lenguaje permitirá definir disintos tipos de reales. En Java, por ejemplo, **float** y **double** serían dos tipos de dato real.
- Un **rango de valores** que puede admitir dicha variable. Establece el valor máximo y mínimo que puede almacenarse en esa variable, así como la precisión. Normalmente va asociado al tipo de dato que puede almacenar. Siguiendo con el ejemplo, en Java, la diferencia entre definir una variable **float** o **double** supone que se podrán almacenar números reales más pequeños o más grandes y en la precisión (número de decimales máximo) que se pueden usar. Así, para un precio, con **float** tendremos suficiente rango, y suficiente precisión, ya que sólo necesitamos dos decimales, y ese tipo nos permite usar incluso más.

Al nombre que le damos a la variable se le llama **identificador**. Los identificadores permiten nombrar los elementos que se están manejando en un programa.

Vamos a ver con más detalle ciertos aspectos sobre los identificadores que debemos tener en cuenta.

# Citas para pensar

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

> Las grandes ideas requieren un gran lenguaje.

> **Aristófanes**.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Bruce Eckel es el autor de los libros sobre Java y C++ (C orientado a objetos) dirigidos a programadores que desean aprender sobre estos lenguajes y sobre la programación orientada a objetos. Este escritor ha tenido la buena costumbre de editar sus libros para que puedan descargarse gratis. Así, podemos acceder de forma totalmente gratuita a la tercera edición de su libro “Thinking in Java” en el siguiente enlace (en inglés):

[Libro "Thinking in Java"](http://www.ibiblio.org/pub/docs/books/eckel/TIJ-3rd-edition4.0.zip "Descargar el libro “Thinking in Java”, de Bruce Eckel. [.zip - 1,5 MB]  ") (1,5 MB)

A partir de ahora es conveniente que utilices algún manual de apoyo para iniciarte a la programación en Java. Te proponemos el de la serie de libros “Aprenda Informática como si estuviera en primero”, de la Escuela Superior de Ingenieros Industriales de San Sebastián (Universidad de Navarra):

[Manual de apoyo sobre Java](http://ocw.uc3m.es/cursos-archivados/programacion-java/manuales/java2-U-Navarra.pdf/view "http://ocw.uc3m.es/cursos-archivados/programacion-java/manuales/java2-U-Navarra.pdf/view")

# 9.1.- Identificadores.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Un **identificador** en Java es una secuencia ilimitada sin espacios de letras y dígitos [Unicode_Unicode_El estándar Unicode son unas normas de codificación de caracteres que utilizan de 8 a 32 bits para asignar un nombre y un código único a carácter o símbolo de cada posible lenguaje.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource), de forma que **el primer símbolo de la secuencia debe ser una letra, un símbolo de subrayado (\_) o el símbolo dólar ($)**. Por ejemplo, son válidos los siguientes identificadores:

x5      ατη    NUM\_MAX    numCuenta

En la definición anterior decimos que un identificador es una secuencia ilimitada de caracteres Unicode. Pero… ¿qué es Unicode? Unicode es un código de caracteres o sistema de codificación, un alfabeto que recoge los caracteres de prácticamente todos los idiomas importantes del mundo. Las líneas de código en los programas se escriben usando ese conjunto de caracteres Unicode.

Esto quiere decir que en Java se pueden utilizar diversos sistemas de escritura como los alfabetos griego o árabe, los caracteres chinos o los kanjis japoneses. De esta forma, los programas están más adaptados a los lenguajes e idiomas locales, por lo que son más significativos y fáciles de entender tanto para los programadores que escriben el código, como para los que posteriormente lo tienen que interpretar, para introducir alguna nueva funcionalidad o modificación en la aplicación.

![Imagen con fondo y palabras varias: identificadores, clases, atributos, etc.](./recopila_files/PROG02_CONT_R05_Identificador.jpg "Identificadores.")

Flor Moncada Añón. Uso educativo-nc.

Elaboración propia.

El estándar Unicode originalmente utilizaba 16 bits, pudiendo representar hasta 65.536 caracteres distintos, que es el resultado de elevar dos a la potencia dieciséis. Actualmente Unicode puede utilizar más o menos bits, dependiendo del formato que se utilice: **UTF\-8 (siglas en inglés para Formato de Transformación Unicode 8)**, ****UTF**\-16** ó **UTF\-32. A cada carácter le corresponde unívocamente un número entero perteneciente al intervalo de 0 a 2 elevado a n, siendo n el número de bits utilizados para representar los caracteres.** Por ejemplo, la letra ñ es el entero 164. Además, el código Unicode es “compatible” con el código ASCII, ya que para los caracteres del código ASCII, Unicode asigna como código los mismos 8 bits, a los que les añade a la izquierda otros 8 bits todos a cero. La conversión de un carácter ASCII a Unicode es inmediata.

# Recomendación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Una buena práctica de programación es seleccionar nombres adecuados para las variables, eso ayuda a que el programa se autodocumente, y evita un número excesivo de comentarios para aclarar el código.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Enlace para acceder a la documentación sobre las distintas versiones de Unicode en la página web oficial del estándar:

[Documentación sobre Unicode](http://www.unicode.org/versions/ "Acceder a la web del estándar Unicode donde podrás ver información sobre este sistema de codificación")

# 9.2.- Convenios y reglas para nombrar variables.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Imagen con las palabras: estilo, normas, nombres, variables e identificadores flotando sobre un fondo de color.](./recopila_files/PROG02_CONT_R06_Estilo.jpg "Estilo.")

Flor Moncada Añón. Uso educativo-nc.

Elaboración propia.

A la hora de nombrar un identificador existen una serie de **normas de estilo** de uso generalizado, que se aceptan por convenio, aunque no son obligatorias, y que de hecho se usan en la mayor parte del código Java, lo que ayuda a entender más rápidamente [la semántica_Semántica._ En este contexto, el significado asociado a un identificador concreto, que nos permite saber si se trata de una constante, de una variable, si pertenece a una clase o a un objeto de esa clase, etc. Hay toda una serie de significados asociados a un identificador que se hacen explícitos si usamos correctamente los convenios de formación de identificadores.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) de cada identificador. Estas reglas para la nomenclatura de variables son las siguientes:

- **Java distingue las mayúsculas de las minúsculas**. Por ejemplo, **Alumno** y **alumno** son variables diferentes.
- **No se suelen utilizar identificadores que comiencen con «****$****» o «\_»****,** además el símbolo del dólar, por convenio, no se utiliza nunca para identificadores que define el usuario (aunque lo usa internamente el lenguaje para crear ciertas clases que genera automáticamente, pero de eso no nos tenemos que ocupar ni preocupar al programar).
- **No se puede utilizar el valor booleano** (**true** o **false**) **ni el valor nulo** (**null**).
- Los **identificadores deben ser lo más descriptivos posibles**. Es mejor usar palabras completas en vez de abreviaturas crípticas. Así nuestro código será más fácil de leer y comprender. En muchos casos también hará que nuestro código se autodocumente. Por ejemplo, si tenemos que darle el nombre a una variable que almacena los datos de un cliente sería recomendable que la misma se llamara algo así como **FicheroClientes** o **ManejadorCliente**, y no algo poco descriptivo como **Cl33**., por más que Java lo considere correcto.

Además de estas restricciones, en la siguiente tabla puedes ver otras convenciones, que no siendo obligatorias, sí son recomendables a la hora de crear identificadores en Java.

| Identificador | Convención | Ejemplo |
| --- | --- | --- |
| Nombre de variable. | Comienza por letra minúscula, y si está formado por varias palabras, se colocan juntas y todas las siguientes a partir de la segunda comenzarán por mayúsculas para ayudar a identificar visualmente dónde comienza cada nueva palabra a pesar de que no haya espacios. | **numAlumnosMatriculados, suma** |
| Nombre de constante. | Con todas sus letras en mayúsculas, separando las palabras con el guión bajo, y además por convenio el guión bajo no se utiliza en ningún otro sitio. | **TAM\_MAX, PI** |
| Nombre de una clase. | Comienza por letra mayúscula. | **String, MiTipo** |
|
Nombre de función o método.

| Un nombre de una función o de un [método_Método_Es un conjunto de instrucciones en un programa a las que se les da un nombre, de forma que en cualquier otra parte del programa donde aparezca ese nombre del método, el compilador se encarga de desplegar todas las instrucciones que lleva asociadas y las ejecuta en el orden que esté especificado en su interior.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) comienza con letra minúscula. Sigue en realidad la misma nomenclatura que cualquier variable y se distingue que se trata de un método o función porque obligatoriamente debe ir seguido de paréntesis, que enmarcan la lista de [parámetros_Parámetro._ Un valor que se le pasa a una función o un método para que haga algo con él. Siguiendo una analogía matemática, una función f(x)=2x establece que con el parámetro formal x que se le pasa debe hacer una operación matemática, multiplicándolo por dos, y devolviendo el resultado. Así, si ejecuto la función pasándole como parámetro actual un 3, f(3) multiplicará 2 por 3 y me dará como valor de vuelta un 6.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) que se le dan al método para trabajar. El paréntesis es obligado aunque no se le pase ningún parámetro.  
| **modificaValor(), obtieneValor()** |

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

# Pregunta

**Elige la opción correcta. Un identificador es una secuencia de uno o más símbolos Unicode que cumple que.... :**

# Respuestas

[Opción 1](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-142_63)

Todos los identificadores han de comenzar con una letra, el carácter subrayado (\_) o el carácter dólar ($).

[Opción 2](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-142_80)

No puede incluir el carácter espacio en blanco.

[Opción 3](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-142_83)

Puede tener cualquier longitud, no hay tamaño máximo.

[Opción 4](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-142_86)

Todas las respuestas anteriores son correctas.

# Retroalimentación

Incorrecto, existen más condiciones.

Incorrecta, sigue intentándolo.

No es la única respuesta correcta.

¡Exacto! Además, se desaconseja el uso del símbolo dólar, y el guión bajo prácticamente sólo se utiliza para separar palabras en identificadores de constantes.

# Solución

1. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-142_63) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa0b142_60))
2. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-142_80) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa1b142_60))
3. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-142_83) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa2b142_60))
4. [Opción correcta](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-142_86) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa3b142_60))

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Te recomendamos consultar los tutoriales que nos ofrece el propio lenguaje Java para resolver cualquier duda que te vaya surgiendo. En concreto, resulta interesante ir a las fuentes para ver las reglas de formación de identificadores para variables, etc. Por eso te recomendamos que veas el apartado Variables - Naming, del siguiente enlace al tutorial de Java sobre los conceptos básicos del lenguaje. Está en inglés, pero reiteramos que es muy importante que te vayas acostumbrando a consultar documentación técnica en inglés.

[Nombrando variables](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html "Acceder al tutorial de Java que trata (en inglés) las reglas de formación de nombres para variables. ").

# 9.3.- Palabras reservadas.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Imagen de palabras clave o reservadas del lenguaje Java en distintos colores, flotando sobre un fondo con un motivo de llaves fotografiado.](./recopila_files/PROG02_CONT_R07_Keywords.jpg "Keywords")

[Dominio público](http://creativecommons.org/publicdomain/zero/1.0/deed.es "Dominio público") [ytueresburroyyomemonto](http://www.flickr.com/photos/ytueresburroyyomemonto/2694706203/ "ytueresburroyyomemonto")

Las palabras reservadas, a veces también llamadas palabras clave o keywords, son secuencias de caracteres formadas con letras ASCII cuyo uso se reserva al lenguaje y, por tanto, **no pueden utilizarse para crear identificadores.**

Las palabras reservadas en Java son:

<table class="tabla" summary="Cuadro o tabla de diez filas por cinco columnas, de título " palabras="" clave="" en="" java",="" de="" modo="" que="" muestra="" un="" listado="" con="" todas="" las="" del="" lenguaje="" java.="" debe="" ser="" leída="" columnas="" izquierda="" a="" derecha="" y="" arriba="" abajo."=""><tbody><tr><td><span style="font-size: small;">abstract</span></td><td><span style="font-size: small;">continue</span></td><td><span style="font-size: small;">for</span></td><td><span style="font-size: small;">new</span></td><td><span style="font-size: small;">switch</span></td></tr><tr><td><span style="font-size: small;">assert</span></td><td><span style="font-size: small;">default</span></td><td><span style="font-size: small;">goto</span></td><td><span style="font-size: small;">package</span></td><td><span style="font-size: small;">synchronized</span></td></tr><tr><td><span style="font-size: small;">boolean</span></td><td><span style="font-size: small;">do</span></td><td><span style="font-size: small;">if</span></td><td><span style="font-size: small;">private</span></td><td><span style="font-size: small;">this</span></td></tr><tr><td><span style="font-size: small;">break</span></td><td><span style="font-size: small;">double</span></td><td><span style="font-size: small;">implements</span></td><td><span style="font-size: small;">protected</span></td><td><span style="font-size: small;">throw</span></td></tr><tr><td><span style="font-size: small;">byte</span></td><td><span style="font-size: small;">else</span></td><td><span style="font-size: small;">import</span></td><td><span style="font-size: small;">public</span></td><td><span style="font-size: small;">throws</span></td></tr><tr><td><span style="font-size: small;">case</span></td><td><span style="font-size: small;">enum</span></td><td><span style="font-size: small;">instanceof</span></td><td><span style="font-size: small;">return</span></td><td><span style="font-size: small;">transient</span></td></tr><tr><td><span style="font-size: small;">catch</span></td><td><span style="font-size: small;">extends</span></td><td><span style="font-size: small;">int</span></td><td><span style="font-size: small;">short</span></td><td><span style="font-size: small;">try</span></td></tr><tr><td><span style="font-size: small;">char</span></td><td><span style="font-size: small;">final</span></td><td><span style="font-size: small;">interface</span></td><td><span style="font-size: small;">static</span></td><td><span style="font-size: small;">void</span></td></tr><tr><td><span style="font-size: small;">class</span></td><td><span style="font-size: small;">finally</span></td><td><span style="font-size: small;">long</span></td><td><span style="font-size: small;">strictfp</span></td><td><span style="font-size: small;">volatile</span></td></tr><tr><td><span style="font-size: small;">const</span></td><td><span style="font-size: small;">float</span></td><td><span style="font-size: small;">native</span></td><td><span style="font-size: small;">super</span></td><td><span style="font-size: small;">while</span></td></tr></tbody></table>

Hay palabras reservadas que no se utilizan en la actualidad, como es el caso de const y `goto`, que apenas se utilizan en la actual implementación del lenguaje Java. Por otro lado, puede haber otro tipo de palabras o texto en el lenguaje que aunque no sean palabras reservadas tampoco se pueden utilizar para crear identificadores. Es el caso de true y `false` que, aunque puedan parecer palabras reservadas, porque no se pueden utilizar para ningún otro uso en un programa, técnicamente son **[literales booleanos_Literal booleano._ Un literal es un valor posible para un tipo dado. Un literal booleano es un valor posible para variables de tipo booleano, por tanto. Y finalmente, un tipo booleano es el que puede tomar sólo dos valores distintos, verdadero o falso. En Java serían true o false.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource)** . Igualmente, null es considerado un literal, no una palabra reservada.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Cuando tras haber consultado la documentación de Java aún no tengas seguridad de cómo funciona alguna de sus características, pruébala en tu ordenador, y analiza cada mensaje de error que te dé el compilador para corregirlo. Busca en foros de Internet errores similares para ayudarte de la experiencia de otros usuarios y usuarias.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Normalmente, los editores y entornos integrados de desarrollo utilizan colores para diferenciar las palabras reservadas del resto del código, los comentarios, las constantes y literales, etc. De esta forma se facilita muchísimo la lectura del programa y la detección de errores de sintaxis. Dependiendo de la configuración del entorno se utilizarán unos colores u otros, es posible que los que utilice tu versión de NetBeans se parezcan a éstos:

- Las palabras reservadas en azul.
- Los comentarios aparecen en gris.
- Las variables dentro de una clase aparecen en verde.
- Los errores en rojo.
- Y el resto del código aparece en negro.

Puede que te interese cambiar los colores que utiliza NetBeans para la sintaxis de tus programas, por ejemplo si quieres que los comentarios aparezcan en verde en lugar de en gris o que los destaque con algún tipo de sombreado, o aumentar el tamaño por defecto de la fuente si tienes problemas de visión, o indicar que tienes la autoría de los mismos, en lugar de que te aparezca el nombre de usuario del sistema operativo. En el siguiente documento puedes ver cómo se cambian los colores y las propiedades de usuario en un proyecto NetBeans:

[Cambiar fuente y colores en NetBeans](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/CambiarTexto.pdf "Descargar documento sobre NetBeans [pdf - 1.53 MB]") (1.53 MB)

# 9.4.- Tipos de variables I.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Una selección de libros de textos sobre programación.](./recopila_files/PROG02_CONT_R09_Libros.jpg "Libros")

[Dominio público](http://creativecommons.org/publicdomain/zero/1.0/deed.es "Dominio público") [K.lee](https://es.wikipedia.org/wiki/Dominio_p%C3%BAblico?uselang=es "K.lee") [Programming language textbooks](http://commons.wikimedia.org/wiki/File:Programming_language_textbooks.jpg "Programming language textbooks")

Dentro de un programa podemos encontrar distintos tipos de variables. Las diferencias entre unas variables y otras dependerán de diversos factores como, por ejemplo, el tipo de datos que representan, si su valor puede cambiar o no, o cuál es el papel que tienen en el programa.

Además, dependiendo del lenguaje de programación que se utilice, es posible que encontremos ciertas variaciones en los tipos de variables que se ofrecen. En el caso concreto del **lenguaje de programación Java** podemos distinguir los distintos tipos de variables según los siguientes criterios:

1. Según el **tipo de información que contengan**, podemos hablar de **variables de tipos primitivos** y **variables referencia**. En función de a qué grupo pertenezca la variable, [tipos primitivos_Tipo primitivo._Son tipos de datos tan básicos que sin ellos apenas podría hacerse ningún programa, y que trae incorporados el lenguaje, incluso como palabras reservadas. Suelen ser los distintos tipos de datos numéricos (enteros cortos, enteros largos, reales, ....) algún tipo carácter y el tipo lógico o booleano.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) o [tipos referenciados_Tipo referenciado_Tipo de dato donde el valor de una variable de este tipo es una referencia (un puntero o dirección de memoria) hacia el valor real. En Java tenemos los arrays, las clases y los interfaces como tipos de datos referenciados.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource), podrá tomar unos valores u otros, y se podrán definir sobre ella unas operaciones u otras.

2. Dependiendo de su **mutabilidad**, podemos hablar de variables **mutables** (o **variables**) e **inmutables** (o **constantes**), es decir, según su valor pueda ser modificado o no durante la ejecución del programa.


En conclusión, podemos decir sobre una variable que:

1. es un **almacén temporal de información** que usan los programas para registrar datos y operar con ellos;
2. puede contener un valor de un **tipo primitivo** (entero, real, caracter, etc.) o bien una **referencia** (una dirección de memoria o "puntero") a una zona de memoria que contendrá información mucho más compleja que un simple valor en un tipo primitivo;
3. se crea y usa **dentro de un bloque de código** (en el caso de Java, dentro de un [método](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#tf2102ca9-3d29-a702-d584-843c25a426fa));
4. deja de existir (se "**destruye**") **cuando la ejecución de ese bloque de código finaliza**.

El siguiente ejemplo puedes observar cómo se declaran algunas variables. En algunos casos se ha indicado un valor inicial y en otros no.

int cantidadLargos = 10;
double longitudPiscina;
char letraDni;
String nombre;
final int MAXIMO\_NUMERO\_PLANTAS= 12;
final double PI= 3.1415926536;

Analicemos cada una de las variables o elementos de memoria que se han declarado:

| Nombre | Tipo | Mutabilidad | Primitivo/Referencia | Contenido | Descripción |
| --- | --- | --- | --- | --- | --- |
| **cantidadLargos** | entero (**int**) | variable | primitivo (un número entero) | valor entero 10 | Se trata de una variable que puede cambiar, valor, que almacenará la cantidad de largos realizados por un nadador y cuyo valor inicial es 10. |
| **longitudPisicina** | real (**double**) | variable | primitivo (un número real) | todavía nada | Se trata de una variable que puede cambiar de valor, que almacenará la longitud de una piscina y que aún no tiene ningún valor asignado. |
| **letraDni** | carácter (**char**) | variable | primitivo (un carácter) | aún nada | Se trata de una variable que puede cambiar de valor, que almacenará la letra de un DNI. |
| **nombre** | cadena (**String**) | variable | referencia (puntero a una cadena) | aún nada (referencia vacía o nula) | Se trata de una variable que puede cambiar de valor, que almacena la dirección de memoria (referencia o "puntero") donde se encontrará una cadena de caracteres que representa el nombre de una persona. |
| **MAXIMO\_NUMERO\_PLANTAS** | entero (**int**) | constante | primitivo (un número entero) | valor entero 12 | Se trata de una variable que una vez que se le asigne un primer valor ya no podrá cambiar y que almacena el máximo número de plantas que puede tener un edificio. Se le ha asignado el valor 12. Ese valor ya no se podrá cambiar. |
| **<strong><span style="font-size: medium;"><code>PI** | real (**double**) | constante | primitivo (un número real) | valor real 3.1415926536 | Se trata de una variable que una vez que se le asigne un primer valor, ya no podrá cambiarse y que almacena el valor la constante geométrica π (4,1415926536). |

Como puedes observar se trata de pequeños casilleros donde se almacena cierta información básica (tipos **primitivos**) o bien una referencia (dirección de memoria) a información más compleja (tipos **referenciados**). En unos casos puede tratarse de información cambiante (**mutable**) y en otros constante (**inmutable**).

**En Java para indicar que una variable es inmutable o constante hay que utilizar el modificador final en su declaración.**

Elementos de una clase u objeto compuestos por una serie de sentencias que sirven para describir las acciones a realizar con esa clase u objeto.

# 9.4.1.- Tipos de variables II.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

El siguiente ejemplo muestra el código para la creación de un par de variables:

- **variable inmutable** (**final**) **llamada **MAXIMO**,** con valor **4.245**. Al haber sido declarada como constante (**final**) no podrá cambiar su valor a lo largo de la vida del programa;
- **variable mutable llamada** **y**. Sólo se podrá acceder a ella dentro del bloque de código donde ha sido declarada (método **main**), ya que fuera de él no existe. Podrá modificarse el valor que contiene tantas veces como se considere oportuno a lo largo de la vida del programa.

En apartados posteriores veremos cómo darle más funcionalidad a nuestros programas, mostrar algún resultado por pantalla, hacer operaciones, etc. Por el momento, si ejecutas el siguiente ejemplo simplemente NetBeans mostrará tres líneas indicando que este es el primer programa y el valor de la variable y de la constante declarada:

[![Imagen del código para la creación de distintos tipos de variables en una aplicación Java. Se adjunta código del ejemplo en enlace debajo de la foto.](./recopila_files/editoryejecucion_mini.png "Código Ejemplo de variables.")](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/editoryejecucion.png "Imagen Ampliada.")

Captura de NetBeans  ([licencia CDDL](http://es.wikipedia.org/wiki/CDDL "Acceder a la descripción de la licencia CDDL."))

public class EjemploVariables {

    /\*\*
     \* @param args the command line arguments
     \*/
    public static void main(String\[\] args) {
        int y ; // y es una variabe local
        final double MAXIMO = 4.245 ;
        
        // Asignamos un valor a la variable y
        y = 2 ;
        
        // aquí iría el código de nuestra aplicación
        System.out.println ("Hola, este es un primer programa") ;
        
        // Podemos escribir el valor de la variabel y así:
        System.out.println ("El valor de y es: " + y) ;
        
        System.out.println ("El valor máximo es: " + MAXIMO) ;
        
    } 

}

La salida por pantalla del resultado de la ejecución de este programa sería algo similar a lo siguiente:

Hola, este es un primer programa
El valor de y es: 2
El valor máximo es: 4.245

En el siguiente documento presentación puedes ver cómo hemos creado este primer programa.

[Documento sobre crear programa](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG01_CONT_CreacionPrimerPrograma.pdf "Descargar documento sobre crear programa [pdf - 2.20 MB]") (2.20 MB)

# 10.- Los tipos de datos.

# Caso práctico

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Imagen en la que se aprecia una mano introduciendo datos por un teclado.](./recopila_files/PROG02_CONT_R12_CASO_BU004854.png "Teclado.")

Stockbyte. Uso educativo no comercial

para plataformas públicas de

Formación Profesional a distancia.

CD-DVD Num. V43.

**María** ya ha hecho sus pinitos como programadora. Ahora mismo está ayudando a **Juan** con las variables y le ha surgido un problema.  
—El lenguaje se está comportando de una forma extraña, quiero llamar a una variable final y no me deja —comenta **María** a **Juan**.  
—Claro, eso es porque final es una palabra reservada y ya hemos visto que no la puedes utilizar para nombrar variables —le responde **Juan**.  
—¡Vaya, es verdad! ¿Y qué otros requisitos debo tener en cuenta a la hora de declarar las variables?  
—Pues lo importante es saber qué tipo de información hay que guardar, para poder asignarles el tipo de dato adecuado. ¿Tienes un momento y te lo cuento? — le dice **Juan**.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Esquema con un montón de palabras etre las que resalta data.](./recopila_files/PROG01_CONT_datos.jpg "Datos.")

[CC by-nc](http://creativecommons.org/licenses/by-nc/3.0/deed.es "CC by-nc") [CyberHades](https://www.flickr.com/photos/cyberhades/8315266195/in/photolist-dEMUWx-puR46m-9bWVHV-ph5TWN-qStVmK-Rgupzk-PgNLpQ-in4r4H-kWhvgc-kWhvig-f6XbVk-kWhvN4-da8jMn-gTnvc5-jAZBNr-kWhvhz-in4qSv-2Kg5Nv-9SvzP4-dq9qxc-7Vrm5x-aeKut7-6UDnWP-8pYhRM-SDpjbS-mZGfF4-a8iAEG-aMi8gz-6inK6h-SAFG7X-9u6D14-in4r8R-9i6acr-5jidJy-6P4ecT-c3Ndsm-6yx8zu-joWCV5-a8K3ek-9u6D1T-9jNjtj-9RmxWY-no6Y-9Xfxt6-4foZvD-9mNPyc-9d2A8p-9CpJYM-gg18VW-9AdKsr "CyberHades")

En los [lenguajes fuertemente tipados_Lenguaje fuertemente tipado_Un lenguaje de programación es fuertemente tipado cuando una variable de un tipo de dato concreto, no se puede usar como si fuera una variable de otro tipo a menos que se haga una conversión de tipo. Si la variable es de tipo entero, por ejemplo, no podré asignarle un valor real.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource), a todo dato (constante, variable o expresión) le corresponde un tipo que es conocido antes de que se ejecute el programa.

El tipo limita el valor de la variable o expresión, las operaciones que se pueden hacer sobre esos valores, y el significado de esas operaciones. Esto es así porque **un tipo de dato no es más que una especificación de los valores que son válidos para esa variable, y de las operaciones que se pueden realizar con ellos.**

Debido a que el tipo de dato de una variable se comprueba durante la revisión que hace el compilador para detectar errores, o sea, en tiempo de compilación, esta labor es mucho más fácil, ya que no hay que esperar a que se ejecute el programa para saber qué valores va a contener esa variable. Esto se consigue con un control muy exhaustivo de los tipos de datos que se utilizan, lo cual tiene sus ventajas e inconvenientes. Por ejemplo, cuando se intenta asignar un valor de un tipo a una variable de otro tipo el compilador "se quejará" mostrando un mensaje de error. Sin embargo, en Java, puede haber **conversión entre ciertos tipos de datos**, como veremos posteriormente.

Ahora no es el momento de entrar en detalle sobre la conversión de tipos, pero sí debemos conocer con exactitud de qué tipos de datos dispone el lenguaje Java. Ya hemos visto que las variables, según la información que contienen, se pueden dividir en variables de tipos primitivos y variables referencia. Pero ¿qué es un tipo de dato primitivo? ¿Y un tipo referencia? Aunque lo hemos indicado brevemente antes, la primera vez que aparecían estos conceptos para que no te sonara totalmente a chino, esto es lo que vamos a ver a continuación con más detalle. Los tipos de datos en Java se dividen principalmente en dos categorías:

- **Tipos de datos sencillos o primitivos**. Representan valores simples que vienen predefinidos en el lenguaje; contienen valores únicos, como por ejemplo un carácter o un número.
- **Tipos de datos referencia.** Se definen con un nombre o referencia ([puntero_Puntero._En general un puntero no es más que una variable cuyo contenido no es el dato que nos interesa, sino que es una dirección de memoria donde está el dato que nos interesa. En Java las referencias son más o menos esto, de forma que cuando uso el nombre de una referencia para decirle al programa que haga algo, lo que hace el programa en realidad es ir a la zona de memoria donde está la variable referencia, buscar a qué dirección de memoria apunta, e ir a esa posición para leer el dato (o estructura de datos) que contenga y trabajar con esa información. Poco a poco irás entendiendo que esto tiene bastantes ventajas a la hora de gestionar la memoria que usa el programa.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) ) que contiene la dirección en memoria de un valor o grupo de valores. Dentro de este tipo tenemos por ejemplo los vectores (también conocidos en informática como arrays), que son una serie de elementos del mismo tipo, o las clases, que son los modelos o plantillas a partir de los cuales se crean los objetos.

En el siguiente apartado vamos a ver con detalle los diferentes tipos de datos que se engloban dentro de estas dos categorías.

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

# Pregunta

**El tipado fuerte de datos supone que:**

# Respuestas

[Opción 1](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-152_63)

A todo dato le corresponde un tipo que es conocido antes de que se ejecute el programa.

[Opción 2](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-152_83)

El lenguaje hace un control muy exhaustivo de los tipos de datos.

[Opción 3](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-152_86)

El compilador puede optimizar mejor el tratamiento de los tipos de datos.

[Opción 4](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-152_89)

Todas las anteriores son correctas.

# Retroalimentación

Incorrecto, existen más condiciones.

Incorrecta, sigue intentándolo.

No es la única respuesta correcta.

Muy bien, en un lenguaje fuertemente tipado se cumplen todas las condiciones anteriores.

# Solución

1. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-152_63) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa0b152_60))
2. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-152_83) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa1b152_60))
3. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-152_86) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa2b152_60))
4. [Opción correcta](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-152_89) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa3b152_60))

# 10.1.- Tipos de datos primitivos I.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Imagen con los tipos primitivos de Java escritos sobre un fondo que simula un rompecabezas.](./recopila_files/PROG02_CONT_R13_TiposPrimitivosI.jpg "Tipos de datos primitivos.")

Flor Moncada Añón. Uso educativo-nc.

Elaboración propia.

Los tipos primitivos son aquellos datos sencillos que constituyen los tipos de información más habituales: números, caracteres y valores lógicos o booleanos. Al contrario que en otros lenguajes de programación orientados a objetos, **en Java no son objetos**.

Una de las mayores ventajas de tratar con tipos primitivos en lugar de con objetos, es que el compilador de Java puede optimizar mejor su uso. Otra importante característica, es que cada uno de los tipos primitivos tiene **idéntico** tamaño y comportamiento en todas las versiones de Java y para cualquier tipo de ordenador. Esto quiere decir que no debemos preocuparnos de cómo se representarán los datos en distintas plataformas, y asegura la **portabilidad** de los programas, a diferencia de lo que ocurre con otros lenguajes. Por ejemplo, el tipo int siempre se representará con 32 bits, con signo, y en el formato de representación [complemento a 2_Complemento a 2_Formato de representación de números enteros basado en el sistema de numeración binario.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource), en cualquier plataforma que soporte Java.

# Reflexiona

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Java especifica el tamaño y formato de todos los tipos de datos primitivos con independencia de la plataforma o sistema operativo donde se ejecute el programa, de forma que el programador no tiene que preocuparse sobre las dependencias del sistema, y no es necesario escribir versiones distintas del programa para cada plataforma.

# Debes conocer

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

En el siguiente enlace se muestran los tipos de datos primitivos en Java con el rango de valores que pueden tomar, el tamaño que ocupan en memoria y sus valores por defecto.

[Tipos de datos primitivos en Java](http://blog.oscarscode.com/es/java-es/tipos-de-datos-primitivos-en-java/%20 "Acceder a una web con información sobre los tipos de datos primitivos en Java")

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Hay una peculiaridad en los tipos de datos primitivos, y es que el tipo de dato char es considerado por el compilador como un tipo numérico, ya que los valores que guarda son el código Unicode correspondiente al carácter que representa, no el carácter en sí, por lo que **puede operarse con caracteres** como si se tratara de números enteros.

Una cuestión importante: a la hora de elegir el tipo de dato que vamos a utilizar ¿qué criterio seguiremos para elegir un tipo de dato u otro?

Pues deberemos tener en cuenta **cómo es la información** que hay que guardar, si es de tipo texto, numérico, etc., y además **qué rango de valores** puede alcanzar. En este sentido, hay veces que aunque queramos representar un número sin decimales, tendremos que utilizar datos de tipo real.

Por ejemplo, el tipo de dato int no podría representar la población mundial del planeta, ya que el valor máximo que alcanza es de 2.147.483.647, siendo éste el número máximo de combinaciones posibles con 32 bits, teniendo en cuenta que la representación de los números enteros en Java utiliza complemento a 2. Si queremos representar el valor correspondiente a la población mundial del planeta, cerca de 7.000.000.000 habitantes, tendríamos que utilizar al menos un tipo de dato long, o si tenemos problemas de espacio un tipo float. Sin embargo, los tipos reales tienen otro problema: la **precisión**. Vamos a ver más sobre ellos en el siguiente apartado.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Si quieres obtener información sobre cómo se lleva a cabo la representación interna de números enteros y sobre la aritmética binaria, puedes consultar el siguiente enlace:

[Aritmética binaria](http://platea.pntic.mec.es/~lgonzale/tic/binarios/aritmetica.html "Acceder a una web con información sobre aritmética binaria.")

# 10.1.1.- Tipos de datos primitivos II.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

[![Evolución de los simios ](./recopila_files/PROG02_CONT_R15_TiposPrimitivosII_miniatura.jpg "Evolución de los simios")](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG02_CONT_R15_TiposPrimitivosII.jpg "Ampliar imagen")

[CC by](http://creativecommons.org/licenses/by/3.0/deed.es "CC by") [dullhunk](http://www.flickr.com/photos/dullhunk/4833512699/ "dullhunk ")

¿Cómo representaremos los datos de tipo real en Java?

El tipo de dato real permite representar **números con decimales**. Al igual que ocurre con los enteros, la mayoría de los lenguajes definen más de un tipo de dato real, en función del número de bits usado para representarlos. Cuanto mayor sea ese número:

- **Más grande podrá ser** el número real representado en valor absoluto.
- **Mayor será la precisión** de la parte decimal.

Entre cada dos números reales cualesquiera, siempre tendremos matemáticamente hablando infinitos números reales, pero un ordenador no puede representar infinitos números, porque no dispone de capacidad ilimitada, por lo que **la mayoría de ellos los representaremos de forma aproximada.**

¡¡No fastidies!! ¿Tanta informática, tanto ordenador cada vez más potente, y ni siquiera puedo representar de forma exacta la mayoría de los números reales?

Justamente, sentimos decirte que así es, pero no se hunde el mundo por ello, y de una forma u otra, tenemos precisión suficiente para casi todo lo que nos propongamos, ya que como humanos, la "precisión infinita" tampoco la manejamos muy bien.

Por ejemplo, en la aritmética convencional, cuando dividimos 10 entre 3, el resultado es 3.3333333…, con la secuencia de 3 repitiéndose infinitamente. En el ordenador sólo podemos almacenar un número finito de bits, por lo que el almacenamiento de un número real será siempre una aproximación.


Los números reales se representan en **coma flotante** o notación científica, que consiste en trasladar la coma decimal a la primera cifra significativa del valor, con objeto de poder representar el máximo de números posible.

Un número en el interior de un computador se expresa como: ![Valor igual a mantisa por dos elevado a exponente.](./recopila_files/eXe_LaTeX_math_2.gif "Fórmula de notación en coma flotante")

Donde la mantisa son las cifras significativas del número (pues hemos trasladado la coma decimal hasta el principio). De este modo, para almacenar el número, sólo se guardan la mantisa y el exponente al que va elevada la base. Los bits empleados por la mantisa representan la **precisión** del número real, es decir, el número de cifras decimales significativas que puede tener el número real, mientras que los bits del exponente expresan la diferencia entre el mayor y el menor número representable, lo que viene a ser el **intervalo de representación**.

En Java las variables de tipo float se emplean para representar los números en coma flotante de simple precisión de 32 bits, de los cuales 24 son para la mantisa y 8 para el exponente. La mantisa es un valor entre -1.0 y 1.0 y el exponente representa la potencia de 2 necesaria para obtener el valor que se quiere representar. Por su parte, las variables tipo double representan los números en coma flotante de doble precisión de 64 bits, de los cuales 53 son para la mantisa y 11 para el exponente.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

La mayoría de los programadores en Java emplean el tipo double cuando trabajan con datos de tipo real. Es una forma de asegurarse de que los errores cometidos por las sucesivas aproximaciones sean menores. De hecho, Java considera los valores en coma flotante como de tipo double por defecto. Así, el literal 3.65 será considerado por defecto como un literal de tipo double. Si quiero que sea considerado como float, (que es de menor precisión, y ocupa menos espacio) tendré que indicarlo explícitamente añadiéndole una f detrás: 3.65f o `3.65F`.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Con el objetivo de conseguir la máxima portabilidad de los programas, Java utiliza el estándar internacional [IEEE 754_IEEE 754_Formato de representación o normativa cuyo objetivo es estandarizar el uso de la representación de números en coma flotante entre distintos fabricantes. Está desarrollado por el IEEE (Institute of Electrical and Electronics Engineers, en español Instituto de Ingenieros Eléctricos y Electrónicos).](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) para la representación interna de los números en coma flotante, que es una forma de asegurarse de que el resultado de los cálculos sea el mismo para diferentes plataformas.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

La siguiente página  en inglés es la web oficial sobre el estándar internacional IEEE 754-2008 para representación de números en coma flotante (Standard for Binary Floating-Point Arithmetic, edición de 2008 desarrollado por el  IEEE: Institute of Electrical and Electronics Engineers, conocido como "IE cubo"):

[Notación IEEE 754](http://grouper.ieee.org/groups/msc/ANSI_IEEE-Std-754-2019/ "Acceder  a la web sobre el estándar IEEE 754.")

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

**Relaciona los tipos primitivos con los bits y rango de valores correspondientes, escribiendo el número asociado en el hueco correspondiente.**



| Tipo | Relación | Característica |
| --- | --- | --- |
| short | Rellenar huecos (1):  JXUwMDZi | Coma flotante de 64 bits, usando la representación IEEE 754-2008 |
| byte | Rellenar huecos (2):  JXUwMDZk | Entero de 32 bits, rango de valores de<span style="font-size: medium;"> -2.147.483.648</span> (\-2<sup>31</sup>) a 2.147.483.647 (+2<sup>31</sup>\-1) |
| double | Rellenar huecos (3):  JXUwMDY5 | Entero de 16 bits, rango de valores de \-32.768 (\-2<sup>15</sup>) a +32.767 (+2<sup>15</sup>\-1) |
| long | Rellenar huecos (4):  JXUwMDZl | Coma flotante de 32 bits, usando la representación IEEE 745-2008 |
| int | Rellenar huecos (5):  JXUwMDZh | Entero de 8 bits, rango de valores de -128 (\-2<sup>7</sup>) a +127 (+2<sup>7</sup>\-1) |
| float | Rellenar huecos (6):  JXUwMDZj | Entero de 64 bits, rango de valores de \-9.223.372.036.854.775.808 (-263)  
a 9.223.372.036.854.775.807 (+263-1) |

Habilitar JavaScript

Además de los anteriores, también son tipos primitivos el tipo de dato boolean, con valores true y `false`, y el tipo de datos char, que almacena el código Unicode de un carácter.

# 10.2.- Declaración e inicialización.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Imagen de unas manos escribiendo en un teclado, la imagen aparece ligeramente ensombrecida, destacando la figura de las manos y el teclado iluminado.](./recopila_files/PROG02_CONT_R16_Declaracion.jpg "Mecanografía.")

[CC by-nc-sa](http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es "CC by-nc-sa") [Dr.Craig](http://www.flickr.com/photos/rorymunro/3651721114/sizes/z/in/photostream/ "Dr.Craig")

Llegados a este punto cabe preguntarnos ¿cómo se crean las variables en un programa? ¿Qué debo hacer antes de usar una variable en mi programa?

Pues bien, como podrás imaginar, debemos crear las variables antes de poder utilizarlas en nuestros programas, indicando qué nombre va a tener y qué tipo de información va a almacenar, en definitiva, debemos **declarar la variable**.

Las variables se pueden declarar en cualquier bloque de código, dentro de llaves. Y lo hacemos indicando su **identificador y el tipo de dato**, separadas por comas si vamos a declarar varias a la vez, por ejemplo:

int numeroAlumnos = 15;  
double radio = 3.14, importe = 102.95;

De esta forma, estamos declarando numeroAlumnos como una variable de tipo int, (y al mismo tiempo asignándole el valor 15, pero de momento nos fijamos solo en la declaración: int numeroAlumnos;) y otras dos variables radio e `importe` de tipo double. No  es obligatorio asignar valor a la vez que se declara, pero puede hacerse y en el ejemplo anterior hemos aprovechado la declaración de las variables para inicializarlas, asignándoles como primer valor  15, `3.14` y 102.95 respectivamente.

Si la variable va a permanecer inalterable a lo largo del programa, la declararemos como constante, utilizando la palabra reservada final de la siguiente forma:

final double PI = 3.1415926536;

En ocasiones puede que al declarar una variable no le demos valor.  ¿Qué crees que ocurre en estos casos? Hemos de tener en cuenta que las **variables** no se inicializan automáticamente. Debemos asignarles nosotros un valor antes de ser usadas, ya que **si el compilador detecta que la variable se usa antes de que se le asigne un valor, se produce un error**. Por ejemplo en este caso:

int p;

int q = p; // error

Estamos intentando inicializar la variable q con el valor que tenga p, pero como p no ha sido inicializada no tiene ningún valor, así que el compilador no sabe qué valor asignar, y producirá un error.

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

# Pregunta

**De las siguientes, señala cuál es la afirmación correcta:**

# Respuestas

[Opción 1](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-78_63)

La declaración de una variable consiste básicamente en indicar el tipo que va a tener seguido del nombre y su valor.

[Opción 2](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-78_75)

Java no tiene restricción de tipos.

[Opción 3](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-78_78)

Todos los tipos tienen las mismas operaciones a realizar con ellos: suma, resta, multiplicación, etc.

[Opción 4](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-78_81)

Todas las anteriores son incorrectas.

# Retroalimentación

Incorrecto, la inicialización de una variable puede ser posterior a la declaración.

Incorrecta, Java es un lenguaje fuertemente tipado.

Incorrecta, las operaciones pueden ser distintas para cada tipo de dato.

¡Exacto! Nada de lo afirmado sobre declaración de variables, tipado de datos y operaciones es correcto.

# Solución

1. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-78_63) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa0b78_60))
2. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-78_75) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa1b78_60))
3. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-78_78) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa2b78_60))
4. [Opción correcta](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-78_81) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa3b78_60))

# 10.3.- Tipos referenciados.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

[![Imagen que simboliza distintos objetos del mundo real que son modelados para ser representados en un lenguaje de programación.](./recopila_files/PROG02_CONT_R17_Objetos_miniatura.jpg "Objetos.")](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG02_CONT_R17_Objetos.jpg)

Flor Moncada Añón. Uso educativo-nc.

Elaboración propia.

¿No te parece que los tipos vistos hasta ahora son un poco limitados? Por ejemplo, no parece razonable que para almacenar las notas de los 800 alumnos y alumnas de un centro escolar para la primera, segunda y tercera evaluación, tuviéramos que declarar en nuestro programa 3 x 800 = 2.400 variables, ¿no te parece? ¿Y  qué pasa si el curso próximo el centro tiene 805 alumnos? Tendríamos que ir cambiando el programa cada vez que cambiara el número de alumnos y alumnas. O si quisiéramos meter una cuarta nota para la evaluación final, etc. ¡¡Se haría inmanejable!!

A partir de los ocho tipos de datos primitivos, se pueden construir otros tipos de datos. Estos tipos de datos se llaman **tipos referenciados** o **referencias**, porque se utilizan para almacenar la dirección de los datos en la memoria del ordenador.

int\[\] arrayDeEnteros;
Cuenta cuentaCliente;

En la primera instrucción declaramos una lista de números del mismo tipo, en este caso, enteros (le llamamos array de enteros, vector de enteros). En la segunda instrucción estamos declarando la variable u objeto cuentaCliente como una referencia de tipo Cuenta. (Cuenta es una clase que habrá definido el usuario, y que especificará qué elementos forman parte de una cuenta, y qué operaciones se pueden hacer con ella).

Como comentábamos al principio del apartado de Tipos de datos, cualquier aplicación de hoy en día necesita no perder de vista una cierta cantidad de datos. Cuando el conjunto de datos utilizado tiene características similares se suelen agrupar en estructuras para facilitar el acceso a los mismos, son los llamados **datos estructurados**. Son datos estructurados los **arrays, listas, árboles**, etc. Pueden estar en la memoria del programa en ejecución, guardados en el disco como ficheros, o almacenados en una base de datos.

Además de los ocho tipos de datos primitivos que ya hemos descrito, Java proporciona un tratamiento especial a los textos o cadenas de caracteres mediante el tipo de dato String. Java crea automáticamente un nuevo objeto de tipo String cuando se encuentra una cadena de caracteres encerrada entre comillas dobles. En realidad se trata de objetos, y por tanto son tipos referenciados, pero **el lenguaje nos permite utilizarlos también de forma sencilla como si fueran variables de tipos primitivos**:

String primerMensaje;
primerMensaje="El primer mensaje";
String segundoMensaje="Otro mensaje más";

Hemos visto qué son las variables, cómo se declaran y los tipos de datos que pueden adoptar. Anteriormente hemos visto  también un ejemplo de creación de variables. Ahora vamos a crear más variables, pero de distintos tipos primitivos y las vamos a mostrar por pantalla. Los tipos referenciados los veremos en unidades posteriores.

Aquí tienes otro ejemplo donde se declaran más variables, una de ellas de tipo referenciado:

public class EjemploTipos {

    public static void main(String\[\] args) {
        int i = 10;
        double d = 3.14;
        char c1 = 'a';
        char c2 = 65;
        boolean encontrado = true;
        String mensaje = "Bienvenido a Java";

        System.out.println("La variable i es de tipo entero y su valor es: " + i);
        System.out.println("La variable d es de tipo double y su valor es: " + d);
        System.out.println("La variable c1 es de tipo carácter y su valor es: " + c1);
        System.out.println("La variable c2 es de tipo carácter y su valor es: " + c2);
        System.out.println("La variable encontrado es de tipo booleano y su valor es: " + encontrado);
        System.out.println("La variable mensaje es de tipo String y su valor es: " + mensaje);
    } 
}

El resultado que se obtendrá por pantalla al ejecutar el programa tendrá el siguiente aspecto:

La variable i es de tipo entero y su valor es: 10
La variable d es de tipo double y su valor es: 3.14
La variable c1 es de tipo carácter y su valor es: a
La variable c2 es de tipo carácter y su valor es: A
La variable encontrado es de tipo booleano y su valor es: true
La variable mensaje es de tipo String y su valor es: Bienvenido a Java

# Reflexiona

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

¿Cuál de las variables anteriores es de tipo referenciado?



# Retroalimentación

La variable de tipo referenciado es mensaje, que es de tipo String. Pero fíjate que la hemos usado exactamente igual que una variable de tipo primitivo. Más adelante veremos las consecuencias de que las cadenas en Java sean objetos y por tanto de tipo referenciado. Por ahora nos quedamos con que podemos declararlas y asignarles valor como a los tipos primitivos.

Por cierto, fíjate en que los tipos primitivos van siempre en minúscula. Sin embargo, String comienza por mayúscula.

# 10.4.- Tipos enumerados.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Conjunto de tres muñecos empuñando carteles con las palabras tipos, enumerados y enum.](./recopila_files/PROG02_CONT_R19_CartelesEnum_miniatura.jpg "Tipos enumerados")

[CC by-nc](http://creativecommons.org/licenses/by-nc/3.0/deed.es "CC by-nc") [姒儿喵喵](http://www.flickr.com/photos/crystaljingsr/3915512726/sizes/z/in/photostream/ "姒儿喵喵")

Los **tipos de datos enumerados** permiten una forma de declarar una variable con un conjunto restringido de valores. Por ejemplo: los días de la semana, las estaciones del año, los meses, etc. Es como si definiéramos nuestro propio tipo de datos.

Para declararlos se usa la palabra reservada enum, seguida del nombre de la variable y la lista de valores que puede tomar entre llaves. A los valores que se colocan dentro de las llaves se les considera como constantes, van separados por comas y deben ser valores únicos.

La lista de valores se coloca entre llaves, porque un tipo de datos enum no es otra cosa que una especie de clase en Java, y todas las clases llevan su contenido entre llaves.

Al considerar Java este tipo de datos como si de una clase se tratara, no solamente podemos definir los valores de un tipo enumerado, sino que también podemos definir operaciones a realizar con él y otro tipo de elementos, lo que hace que este tipo de dato sea más versátil y potente que en otros lenguajes de programación. Pero eso se verá en unidades más avanzadas. Por el momento debemos quedarnos con que **los enum nos permiten definir un nuevo tipo cuyos valores posibles son los que nosotros definamos**.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

A continuación tienes un ejemplo de creación y uso de un tipo de dato enumerado (enum en Java). Declaramos un enum `Dias` que contiene valores que representan todos los posibles días de la semana. **Para acceder a cada posible valor de un tipo enumerado se utiliza el nombre del enum seguido de un punto y el valor en la lista**:

public class TiposEnumerados {
public enum Dias {LUNES, MARTES, MIERCOLES, JUEVES, VIERNES, SABADO, DOMINGO};

    public static void main(String\[\] args) {
        Dias diaActual = Dias.MARTES ;
        Dias diaSiguiente = Dias.MIERCOLES ;
        
        System.out.println("Hoy es: " + diaActual);
        System.out.println("Mañana es " + diaSiguiente);        
    } 
}

Este programa, además de declarar el enum `Dias` con sus posibles valores, declara dos variables de ese nuevo tipo (diaActual y `diaSiguiente`) que acabamos de definir y les asigna valores de entre el conjunto de valores posibles. El resultado de su ejecución debería mostrar por pantalla lo siguiente:

Hoy es: MARTES
Mañana es MIERCOLES

# Ejercicio Resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Crea un enumerado que contenga las unidades de medida de volumen que van desde mililitro hasta hectolitro, después muestra por pantalla cada valor del enumerado.



# Retroalimentación

public class EjercicioUnidadesVolumen {

     public enum UnidadVolumen {MILILITRO, CENTILITRO, DECILITRO, LITRO, DECALITRO, HECTOLITRO };
     
     public static void main(String\[\] args) {

         System.out.println(UnidadVolumen.MILILITRO);
         System.out.println(UnidadVolumen.MILILITRO);
         System.out.println(UnidadVolumen.CENTILITRO);
         System.out.println(UnidadVolumen.DECILITRO);
         System.out.println(UnidadVolumen.LITRO);
         System.out.println(UnidadVolumen.DECALITRO);
         System.out.println(UnidadVolumen.HECTOLITRO);
              
    }
}

# 11.- Literales de los tipos primitivos.

# Caso práctico

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Imagen en la que se aprecia una mesa de reunión con las manos de una persona, en una de ellas sustenta un lápiz y apuntador, sobre la mesa un vaso de agua.](./recopila_files/PROG02_CONT_R21_CASO_BU004815.png "Reunión.")

Stockbyte. Uso educativo no comercial

para plataformas públicas de

Formación Profesional a distancia.

CD-DVD Num. V43.

**Ada** se encuentra con **María** y **Juan**.

—¿Cómo van esos avances con Java?

**Juan** sabe lo que significa eso, **Ada** se interesa por el trabajo que están llevando a cabo. Ya tienen claro qué tipos de datos utilizar, pero necesitan cerciorarse de los valores que pueden almacenar esos tipos de datos, es decir, qué literales pueden contener, para estar seguros que han hecho la elección adecuada.

—Muy bien —contesta **Juan**—. Si quieres te hacemos una demostración para que veas la estructura del programa.

A **Ada** le satisface la eficacia con que trabajan **María** y **Juan**, apenas han comenzado con el proyecto y pronto podrá ver resultados inmediatos.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Un **literal**, **valor literal** o **constante literal** es un valor concreto para los tipos de datos primitivos del lenguaje, el tipo String o el valor null.

Los **literales booleanos** son dos únicos valores, los que puede aceptar el tipo: true y `false`. Por ejemplo, con la instrucción boolean encontrado = true; estamos declarando una variable de tipo booleana a la cual le asignamos el valor literal true.

Los **literales enteros** se pueden representar en tres notaciones:

- **Decimal**: por ejemplo **20**. Es la forma más común.
- **Octal**: por ejemplo **024**. Un número en octal siempre empieza por cero, seguido de dígitos octales (del 0 al 7).
- **Hexadecimal**: por ejemplo **0x14**. Un número en hexadecimal siempre empieza por **0x** seguido de dígitos hexadecimales (del 0 al 9, de la ‘**a**’ a la ‘**f**’ o de la ‘**A**’ a la ‘**F**’).

A los literales de tipo long se les debe añadir detrás una ele mayúscula o minúscula (**l** ó **L)**, por ejemplo 873L, de lo contrario se considera por defecto un literal de tipo int. Se suele utilizar **L** para evitar la confusión de la ele minúscula con 1.

Los **literales** **reales** o en coma flotante se expresan con coma decimal o en notación científica, o sea, seguidos de un exponente **e** ó **E**. El valor puede finalizarse con una f o una F para indicar que se trata de un literal de tipo float o con una d o una D para indicar el formato double (por defecto, si no se pone nada, es double). Por ejemplo, podemos representar un mismo literal real de las siguientes formas: 13.2, 13.2D, 1.32e1, 0.132E2. Otras constantes literales reales son por ejemplo: .54, 31.21E-5, 2.f, 6.022137e+23f, 3.141e-9d.

Desde Java SE 7 y posteriores, pueden aparecer caracteres \_ entre dígitos en un literal numérico. La idea subyacente es mejorar la legibilidad del código. Así, por ejemplo, sería válido escribir:

long numeroDeTarjeta = 1234\_5678\_9012\_3456L;

Un **literal carácter** puede escribirse como un carácter entre comillas simples como 'a', 'ñ', 'Z', 'p', etc., o por su código de la tabla Unicode, anteponiendo la secuencia de escape ‘\\’ si el valor lo ponemos en octal o ‘\\u’ si ponemos el valor en hexadecimal. Por ejemplo, si sabemos que tanto en ASCII como en Unicode, la letra A (mayúscula) es el símbolo número 65, y que 65 en octal es 101 y 41 en hexadecimal, podemos representar esta letra como '\\101' en octal y '\\u0041' en hexadecimal. Existen unos caracteres especiales que se representan utilizando secuencias de escape:

| Secuencia de escape | Significado | Secuencia de escape | Significado |
| --- | --- | --- | --- |
| \\b | Retroceso | \\r | Retorno de carro |
| \\⁣t | Tabulador | \\'' | Carácter comillas dobles |
| \\⁣n | Salto de línea | \\' | Carácter comillas simples |
| \\f | Salto de página | \\\\ | Barra diagonal |

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

**Normalmente, los objetos en Java deben ser creados con el operador new. Sin embargo, los literales String no lo necesitan ya que son objetos que se crean implícitamente por Java, pudiendo prescindir del uso del operador new.**

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Los **literales de cadenas de caracteres** se indican entre comillas dobles. En el ejemplo anterior “El primer mensaje” es un literal de tipo cadena de caracteres. Al construir una cadena de caracteres se puede incluir cualquier carácter Unicode excepto un carácter de retorno de carro. Por ejemplo, en la siguiente instrucción utilizamos la secuencia de escape \\’’ para escribir dobles comillas dentro del mensaje:

String texto = "Juan dijo: \\"Hoy hace un día fantástico…\\"";

En realidad, dentro de la variable texto se está incluyendo la cadena literal Juan dijo: "Hoy hace un día fantástico...", que incluye una parte entre comillas dobles.

En el ejemplo del apartado anterior para tipos enumerados ya estábamos utilizando secuencias de escape, para introducir un salto de línea en una cadena de caracteres, utilizando el carácter especial \\n.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Tienes más ejemplos sobre el uso de literales numéricos con el carácter underscore en el siguiente enlace en inglés:

[Literales numéricos con el carácter \_](https://docs.oracle.com/javase/8/docs/technotes/guides/language/underscores-literals.html "Literales numéricos con el carácter _")

# Ejercicio Resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Declara e inicializa las variables o constantes necesarias en Java, de forma que encajen con cada uno de los siguientes enunciados:

- La edad de un niño es 12.          
- La velocidad de la luz es de 300000 kilómetros por segundo.
- La edad mínima para apuntarse a actividades de tiro con arco es de 10 años.
- El correo electrónico de una persona es vaya@mail.com.
- El peso de un atleta es de 40,44 kilogramos.           
- El número de meses del año es 12.
- La letra del DNI de una persona es C.
- El número de teléfono es 887-44-42-12.
- La distancia de la tierra al sol es de 147.100.000.000 metros
- La distancia que recorre la luz en un año es de 9.460.740.478.580,8 kilómetros.



# Retroalimentación

Una solución posible podría ser la siguiente:

public class EjercicioTiposPrimitivos {
public static void main(String\[\] args) {

        //VARIABLE: La edad de un niño es 12.        
        //Variable tipo int declarada e inicializada en el mismo sitio.
        int edadNiño = 12;

        //CONSTANTE: La velocidad de la luz es de 300000 (trescientos mil) kilómetros por segundo.
        //Constante tipo double inicializada en la misma línea.
        // El literal de entero (300000) promociona a double automáticamente.
        final double VELOCIDAD\_LUZ = 300000;

        //CONSTANTE: La edad mínima para apuntarse a actividades de tiro con arco es de 10 años.
        //Constante tipo int declarada e inicializada en distintas líneas.
        final int EDAD\_MINIMA\_TIRO\_ARCO;
        EDAD\_MINIMA\_TIRO\_ARCO = 10;
        
        //VARIABLE: el correo electrónico de una persona es vaya@mail.com
        //Variable tipo String declarada e inicializada en la misma línea.
        String mail="vaya@mail.com";        
        
        //VARIABLE: el peso de un atleta es de 40,44 kilogramos.        
        //Variable tipo double declada e inicializada en líneas diferentes.
        double pesoAtleta;
        pesoAtleta=40.44d; //d indica literal de double
        
        //CONSTANTE: el número de meses del año es 12
        //Constante entera declarada e inicializadas en líneas diferentes.
        final int MESES\_AÑO;
        MESES\_AÑO=12;
        
        //VARIABLE: la letra del dni de una persona es C
        //Variable tipo char declarada e inicializada en la misma línea.
        char letraDNI='C';
        
        //VARIABLE: El número de teléfono es 887-44-42-12.
        //Variable tipo String declarada e inicializada en líneas diferentes.
        String telefono;
        telefono="887-44-42-12";
        
        //CONSTANTE: la distancia de la tierra al sol es de 147.100.000.000 metros 
        //Constante tipo long inicializada y declarada en la misma línea
        final long DISTANCIA\_TIERRA\_SOL=147\_100\_000\_000L;
        
        //CONSTANTE: la distancia que recorre la luz en un año es de 9.460.740.478.580,8 kilómetros.
        //Constante tipo double inicializada y declarada en la misma línea.
        final double KM\_RECORRIDOS\_LUZ\_AÑO=9\_460\_740\_478\_580.8d;            
    }
}

# 12.- Operadores y expresiones.

# Caso práctico

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Mesa de despacho con diversos elementos: teclado, calculadora, bolígrafo.](./recopila_files/PROG02_CONT_R22_CASO_ST000927.jpg "Cálculos.")

Photodisc. Uso educativo no comercial para

plataformas públicas de Formación Profesional

a distancia. CD-DVD Num. V07.

**María** y **Juan** tienen definidas las variables y tipos de datos a utilizar en la aplicación. Es el momento de ponerse a realizar los cálculos que permitan manipular esos datos, sumar, restar, multiplicar, dividir y mucho más. En definitiva se trata de llevar los conocimientos matemáticos al terreno de la programación, ver cómo se pueden hacer operaciones aritméticas, lógicas o de comparación en el lenguaje Java. También necesitarán algún operador que permita evaluar una condición y decidir las acciones a realizar en cada caso. Es importante conocer bien cómo el lenguaje evalúa esas expresiones, en definitiva, cuál es la [precedencia_Precedencia._Prioridad, anteposición, antelación en el orden.](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource) que tiene cada operador.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Fotografía donde se aprecia un conjunto de expresiones matemáticas con un efecto de iluminación sobre ellas.](./recopila_files/PROG02_CONT_R23_maths.jpg "Expresiones")

[CC by-nc](http://creativecommons.org/licenses/by-nc/3.0/deed.es "CC by-nc") [Simona](http://www.flickr.com/photos/mammaoca2008/4514381307/ "Simona")

Los **operadores** llevan a cabo operaciones sobre un conjunto de datos u operandos, representados por literales y/o identificadores. Los operadores pueden ser **unarios, binarios o terciarios**, según el número de operandos que utilicen sean uno, dos o tres, respectivamente. Los operadores actúan sobre los tipos de datos primitivos y devuelven también un tipo de dato primitivo.

Los operadores se combinan con los literales y/o identificadores para formar **expresiones**.

Una **expresión** es una combinación de operadores y operandos que se evalúa produciendo un único resultado de un tipo determinado.

El resultado de una expresión puede ser usado como parte de otra expresión o en una sentencia o instrucción. Las expresiones, combinadas con algunas palabras reservadas o por sí mismas, forman las llamadas **sentencias** o **instrucciones**.  
Por ejemplo, pensemos en la siguiente expresión Java:

i + 1

Con esta expresión estamos utilizando un operador aritmético para sumarle una cantidad a la variable i, pero es necesario indicar al programa qué hacer con el resultado de dicha expresión:

suma = i + 1;

Que lo almacene en una variable llamada suma, por ejemplo. En este caso ya tendríamos una acción completa, es decir, una sentencia o instrucción.

Más ejemplos de sentencias o instrucciones los tenemos en las declaraciones de variables, vistas en apartados anteriores, o en las estructuras básicas del lenguaje como sentencias condicionales o bucles, que veremos en unidades posteriores.

Como curiosidad comentar que las **expresiones de asignación**, al poder ser usadas como parte de otras asignaciones u operaciones, son consideradas tanto expresiones en sí mismas como sentencias.

# Citas para pensar

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

> Lo que no hemos realizado no es más que lo que todavía no hemos intentado hacer.

> **Alexis de Tocqueville.**

# 12.1.- Operadores aritméticos.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Imagen de viejo ábaco utilizado en las civilizaciones primitivas para realizar operaciones aritméticas sencillas, tales como suma, resta y multiplicaciones.](./recopila_files/PROG02_CONT_R24_abaco.jpg "Ábaco")

[CC by](http://creativecommons.org/licenses/by/3.0/deed.es "CC by") [Paul Schadler](https://www.flickr.com/photos/pschadler/4932737690/ "Paul Schadler")

Los operadores aritméticos son aquellos operadores que combinados con los operandos forman expresiones matemáticas o aritméticas.

| Operador | Operación Java | Expresión Java | Resultado |
| --- | --- | --- | --- |
| \- | Operador unario de cambio de signo | **\-10** | \-10 |
| + | Adición | **1.2 <abbr title="más">+</abbr> 9.3** | 10.5 |
| \- | Sustracción | **312.5 <abbr title="menos">-</abbr> 12.3** | 300.2 |
| \* | Multiplicación | **1.7 <abbr title="por">\*</abbr> 1.2** | 2.04 |
| / | División (entera o real) | **0.5 <abbr title="partido por">/</abbr> 0.2** | 2.5 |
| **%** | Resto de la división entera | **25 <abbr title="Resto-módulo. ">%</abbr> 3** | 1 |

El resultado de este tipo de expresiones depende de los operandos que utilicen:

| Tipo de los operandos | Resultado |
| --- | --- |
| Un operando de tipo **long** y ninguno real ( ni **float** ni **double**) | long |
| Ningún operando de tipo **long** ni real (<strong><span style="font-size: medium;"><code>float o **double**) | int |
| Al menos un operando de tipo **double** | double |
| Al menos un operando de tipo **float** y ninguno **double** | float |

Otro tipo de operadores aritméticos son los **operadores unarios de incremento y decremento**. Producen un resultado del mismo tipo que el operando, y podemos utilizarlos con **notación prefija**, si el operador aparece antes que el operando, o **notación** **postfija**, si el operador aparece después del operando. En la tabla puedes ver un ejemplo de utilización de cada uno de estos operadores.

| Tipo operador | Expresión Java |
| --- | --- |
| ++ (incremental) |
Prefija:

x=3;
y=++x;
// x vale 4 e y vale 4





|

Postfija:

x=3;
y=x++;
// x vale 4 e y vale 3





|
| \--(decremental) |

5-- // el resultado es 4





|

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

En el siguiente ejemplo vemos un programa básico que utiliza algunos **operadores aritméticos**.

| Ejemplo de código | Salida por pantalla |
| --- | --- |
|
public class OperadoresAritmeticos {
public static void main(String\[\] args) {
// Declaración de variables
short x = 7;
int y = 5;
float f1 = 13.5f;
float f2 = 8f;

        // Ejemplos de operaciones
        System.out.println("EJEMPLOS DE USO DE OPERADORES ARITMÉTICOS");
        System.out.println("-----------------------------------------");
        System.out.println("El valor de x es " + x + ", y es " + y);
        System.out.println("El resultado de x + y es " + (x + y));
        System.out.println("El resultado de x - y es " + (x - y));
        System.out.println("División entera: x / y = " + (x/y));
        System.out.println("Resto de la división entera: x % y = " + (x % y));
        System.out.println("El valor de f1 es " + f1 + ", f2 es " + f2);
        System.out.println("El resultado de f1 / f2 es " + (f1 / f2));
    } 
}





|

EJEMPLOS DE USO DE OPERADORES ARITMÉTICOS
-----------------------------------------
El valor de x es 7, y es 5
El resultado de x + y es 12
El resultado de x - y es 2
División entera:
x / y = 1
Resto de la división entera: x % y = 2
El valor de f1 es 13.5, f2 es 8.0
El resultado de f1 / f2 es 1.6875





|

# Ejercicio Resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Partiendo de una variable entera llamada x cuyo valor inicial es 6, haz que se muestre por pantalla la secuencia de números siguiente, aplicando una operación matemática sobre x:

6, 10, -4, 12, 3, 2, 9, -6, 0

Para hacer este ejercicio deberás realizar 9 operaciones matemáticas sobre la variable x, y deberás utilizar cada uno de los operadores vistos en este apartado al menos una vez.



# Retroalimentación

Una solución posible podría ser la siguiente:

public class EjercicioListaNumeros {
public static void main(String\[\] args) {
int x=6;         
System.out.println(x - 0);
System.out.println(x + 4);
System.out.println(x - 10);
System.out.println(x \* 2);
System.out.println(x / 2);
System.out.println(x % 4);
System.out.println(x + 3);
System.out.println(-x);
System.out.println(x - x);              
}
}

# Ejercicio Resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Con el siguiente código se lee desde teclado el precio de un producto:

import java.util.Scanner;

public class CalcularIVA {
public static void main(String args\[\]) {
Scanner scanner=new Scanner(System.in);
System.out.print("Introduce el precio del producto: ");
double precioProducto=scanner.nextDouble();
}
}

¿Podrías modificar el código anterior para que mostrara el precio con IVA de la siguiente forma? (ten en cuenta que el IVA es del 21%)

Introduce el precio del producto: 8,4
Importe del IVA: 1.764
Precio con IVA: 10.164



# Retroalimentación

Una solución al problema anterior podría ser la siguiente:

import java.util.Scanner;

public class CalcularIVA {
public static void main(String args\[\]) {
Scanner scanner=new Scanner(System.in);
System.out.print("Introduce el precio del producto: ");
double precioProducto=scanner.nextDouble();
double iva=0.21\*precioProducto;
double precioConIVA=precioProducto+iva;
System.out.println("Importe del IVA: " +iva);
System.out.println("Precio con IVA: " +precioConIVA);
}
}

# Ejercicio Resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

El siguiente código pregunta al usuario por la velocidad (en kilómetros por hora) y el tiempo (en segundos) de un vehículo.

import java.util.Scanner;

public class Velocidad {
public static void main(String args\[\]) {
Scanner scanner=new Scanner(System.in);
System.out.print("Velocidad en kilometros por hora:");
double velocidad=scanner.nextDouble();
System.out.print("Tiempo en segundos:");
int segundos=scanner.nextInt();            
}
}

¿Serías capaz de modificarlo para que calculase la distancia recorrida en kilómetros y en metros? Un ejemplo de salida sería:

Velocidad en kilometros por hora:30
Tiempo en segundos:90
Distancia recorrida en kilometros:0.75
Distancia recorrida en metros:750.0



# Retroalimentación

Una solución posible sería la siguiente:

import java.util.Scanner;

public class Velocidad {
public static void main(String args\[\]) {
Scanner scanner=new Scanner(System.in);
System.out.print("Velocidad en kilometros por hora:");
double velocidad=scanner.nextDouble();
System.out.print("Tiempo en segundos:");
int segundos=scanner.nextInt();

      double distanciaKM=velocidad\*(segundos/3600.0);
      double distanciaM=distanciaKM\*1000;
      
      System.out.println("Distancia recorrida en kilometros:"+distanciaKM);
      System.out.println("Distancia recorrida en metros:"+distanciaM);
      
    }
}

Fíjate que el tiempo en segundos se divide por 3600.0 (literal double) y no por 3600 (literal int). Esto se realiza así para forzar a que la división segundos/3600.0  se realice con precisión double y no con precisión int.

# 12.2.- Operadores de asignación.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Símbolos de los operadores de asignación sobre una pizarra con números escritos.](./recopila_files/PROG02_CONT_R26_Asignacion.jpg "Operadores asignación.")

[CC by-nc-sa](http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es "CC by-nc-sa") [Aldo Cavini Benedetti](https://www.flickr.com/photos/aldoaldoz/4177043494 "Aldo Cavini Benedetti")

El principal operador de esta categoría es el operador asignación "**\=**"  que permite al programa darle un valor a una variable, que ya hemos utilizado en varias ocasiones en esta unidad. Además de este operador, Java proporciona otros operadores de asignación combinados con los operadores aritméticos, que permiten abreviar o reducir ciertas expresiones.

Por ejemplo, el operador "**+=**" suma el valor de la expresión a la derecha del operador con el valor de la variable que hay a la izquierda del operador, y almacena el resultado en dicha variable. En la siguiente tabla se muestran todos los operadores de asignación compuestos que podemos utilizar en Java.

| Operador | Ejemplo en Java | Expresión equivalente |
| --- | --- | --- |
| **+=** | **op1 += op2** | **op1 = op1 + op2** |
| **\-=** | **op1 -= op2** | **op1 = op1 - op2** |
| **\*=** | **op1 \*= op2** | **op1 = op1 \* op2** |
| **/=** | **op1 /= op2** | **op1 = op1 / op2** |
| **%=** | **op1 %= op2** | **op1 = op1 % op2** |

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

A continuación tienes un ejemplo de uso de algunos de estos operadores de asignación.

| Ejemplo de código | Salida por pantalla |
| --- | --- |
|
public class OperadoresAsignacion {

    public static void main(String\[\] args) {
        int x;
        int y;

        x = 5;  // operador asignación
        y = 3;  // operador asignación

        System.out.println ("EJEMPLOS DE USO DE OPERADORES DE ASIGNACIÓN");
        System.out.println ("-------------------------------------------");
        System.out.println (" El valor de x es: " + x);
        System.out.println (" El valor de y es: " + y);
        System.out.println ();
        
        // Ejemplos de uso de operadores de asignación combinados
        x += y;
        System.out.println(" Suma combinada:      x += y " + " ............ x vale " + x);

        x = 5;
        x -= y;
        System.out.println(" Resta combinada:     x -= y " + " ............ x vale " + x);

        x = 5;
        x \*= y;
        System.out.println(" Producto combinado:  x \*= y " + " ............ x vale " + x);

        x = 5;
        x /= y;
        System.out.println(" Division combinada:  x /= y " + " ............ x vale " + x);

        x = 5;
        x %= y;
        System.out.println(" Resto combinado:     x %= y " + " ............ x vale " + x);
    } 
}





|

EJEMPLOS DE USO DE OPERADORES DE ASIGNACIÓN
-------------------------------------------
El valor de x es: 5
El valor de y es: 3

Suma combinada:      x += y  ............ x vale 8
Resta combinada:     x -= y  ............ x vale 2
Producto combinado:  x \*= y  ............ x vale 15
Division combinada:  x /= y  ............ x vale 1
Resto combinado:     x %= y  ............ x vale 2





|

# Ejercicio Resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Dada la variable entera x, cuyo valor inicial es 10, haz un programa en el que se vaya modificando el valor de la variable x de manera que dicha variable tome la siguiente secuencia de valores:

5, 6, 12, 6, -4, 1

La variable x deberá modificarse haciendo una operación aritmética sobre el valor que ya posee, por ejemplo:

int x=10;
x=x+100; //La variable x toma el valor 110 (10 + 100)

Para hacer el ejercicio debes usar al menos una vez los operadores aritméticos de suma, resta, división y multiplicación. No olvides mostrar el valor de la variable x después de cada modificación.



# Retroalimentación

Un solución posible sería la siguiente:

public class EjercicioModificacionValorVariable {
public static void main(String\[\] args) {
int x=10;
x=x-5;         
System.out.println(x);
x=x+1;
System.out.println(x);
x=x\*2;
System.out.println(x);
x=x/2;
System.out.println(x);
x=x-10;
System.out.println(x);
x=x+5;
System.out.println(x);         
}
}

# Ejercicio Resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Una factoría papelera confecciona **cuadernos** en los que se van alternando hojas de color **rojo** y **verde**. Siempre se comienza por el color rojo, siguiéndole el verde y comenzando nuevamente con el rojo.

Implementar un programa en Java que calcule, para un cuaderno de **20 hojas**, cuántas hojas contiene de cada color.



# Retroalimentación

Está claro que cada **dos hojas se repiten consecutivamente los colores rojo** y **verde**. Por tanto, **cada paquete de dos hojas implica una hoja de cada uno de estos colores**. Eso significa que si la cantidad de hojas fuera múltiplo de dos (par), podríamos obtener la cantidad de hojas de cada color mediante el cociente de la división entera entre dos. Ahora bien, **si la cantidad de hojas no es múltiplo de dos (es impar), habrá un desfase de una hoja roja (+1) adicional**.

¿Cómo calculamos ese posible "desfase" de hoja roja adicional? Podemos hacerlo usando el operador módulo (resto de la división entera).

Para el caso de las **hojas verdes**, sabemos que nunca habrá desfase respecto a la división entre dos:

Cantidad de hojas verdes = hojas totales / 2

Para el caso de las **hojas rojas**, podemos calcular el desfase de hojas mediante el operador módulo (cero o una hojas adicionales).

Cantidad de hojas rojas = hojas totales / 2 + (hojas totales % 2)

Una solución posible para un **cuaderno de 20 hojas** podría ser la siguiente:

public class EjercicioCuadernoColores1 {
public static void main(String\[\] args) {
int hojasTotales= 20;         
int hojasRojas  = hojasTotales / 2;
int hojasVerdes = hojasTotales / 2 + (hojasTotales % 2);

         System.out.println ("Total de hojas en el cuaderno: " + hojasTotales);
         System.out.println ("Cantidad de hojas rojas: " + hojasRojas);
         System.out.println ("Cantidad de hojas verdes: " + hojasVerdes);
    }
}

Implementar un programa en Java que calcule, para un cuaderno de **61 hojas**, cuántas hojas contiene de cada color.



# Retroalimentación

El programa sería prácticamente igual. Lo único que cambiaría sería el contenido de la variable con el total de hojas (61):

public class EjercicioCuadernoColores2 {
public static void main(String\[\] args) {
int hojasTotales= 61;         
int hojasRojas = hojasTotales / 2;
int hojasVerdes = hojasTotales / 2 + (hojasTotales % 2);

         System.out.println ("Total de hojas en el cuaderno: " + hojasTotales);
         System.out.println ("Cantidad de hojas rojas: " + hojasRojas);
         System.out.println ("Cantidad de hojas verdes: " + hojasVerdes);
    }
}

# 12.3.- Operadores de relación.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Imagen con los operadores de relación de Java escritos sobre un fondo de números.](./recopila_files/PROG02_CONT_R29_Relacion.jpg "Operadores de relación.")

Flor Moncada Añón. Uso educativo-nc.

Elaboración propia.

Los operadores relacionales se utilizan para comparar datos de tipo primitivo (numérico, carácter y booleano). El resultado de la comparación se utilizará en otras expresiones o sentencias, que permitirán comprobar en una condición dicho resultado, y ejecutar una acción u otra en función de si se cumple o no la condición comprobada al comparar.

Estas expresiones en Java dan siempre como resultado un valor booleano true o `false`. En la tabla siguiente aparecen los operadores relacionales en Java.

| Operador | Ejemplo en Java | Significado |
| --- | --- | --- |
| \== | op1 == op2 | op1 igual a op2 |
| != | op1 != op2 | op1 distinto de op2 |
| \> | op1 > op2 | op1 mayor que op2 |
| < | op1 < op2 | op1 menor que op2 |
| \>= | op1 >= op2 | op1 mayor o igual que op2 |
| <= | op1 <= op2 | op1 menor o igual que op2 |

Hasta ahora hemos visto ejemplos que creaban variables y se inicializaban con algún valor. Pero ¿y si lo que queremos es que el usuario introduzca un valor al programa?

Entonces debemos agregarle interactividad a nuestro programa, por ejemplo utilizando la clase Scanner. Aunque no hemos visto todavía qué son las clases y los objetos, de momento vamos a pensar que la clase Scanner nos va a permitir leer los datos que se escriben por teclado, y que para usarla es necesario importar el paquete de clases que la contiene. El código del ejemplo lo tienes a continuación. El programa se quedará esperando a que el usuario escriba algo en el teclado y pulse la tecla intro. En ese momento se convierte lo leído a un valor del tipo int y lo guarda en la variable indicada. Además de los operadores relacionales, en este ejemplo utilizamos también el operador condicional, que compara si los números son iguales. Si lo son, devuelve la cadena iguales y si no, la cadena distintos.

import java.util.Scanner; //importamos el paquete necesario para poder usar la clase Scanner

public class EjemploRelacionales {

public static void main( String args\[\] ){

      Scanner teclado = new Scanner( System.in );
      int x, y;
      String cadena;
      boolean resultado;

      System.out.print( "Introducir primer número: " );
      x = teclado.nextInt(); // pedimos el primer número al usuario
      System.out.print( "Introducir segundo número: " );
      y = teclado.nextInt(); // pedimos el segundo número al usuario

      // realizamos las comparaciones y las mostramos por pantalla
      cadena=(x==y)?"iguales":"distintos";
      System.out.printf("Los números %d y %d son %s\\n",x,y,cadena); 
      resultado=(x!=y);
      System.out.println("x != y  // es " + resultado);
      resultado=(x < y );
      System.out.println("x < y  // es " + resultado);
      resultado=(x > y );
      System.out.println("x > y  // es " + resultado);
      resultado=(x <= y );
      System.out.println("x <= y  // es " + resultado);
      resultado=(x >= y );
      System.out.println("x >= y  // es " + resultado);
    } 
}

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

# Pregunta

**Señala cuáles son los operadores relacionales en Java.**

# Respuestas

[Opción 1](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-100_63)

\= =, ! =, >, <, > =, < =.

[Opción 2](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-100_110)

\=, !=, >, <, >=, <=.

[Opción 3](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-100_113)

\==, =!, >, <, =>, =<.

[Opción 4](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-100_116)

\==, !=, >, <, >=, <=.

# Retroalimentación

No es correcta, porque hay un error de sintaxis al colocar un espacio entre los símbolos de cada operador.

Incorrecta, porque \= es el operador de asignación, no el operador relacional de igualdad \==.

No es la respuesta correcta, porque los símbolos de los operadores distinto a, mayor o igual y menor o igual son !=, `>=` y <=, respectivamente.

Muy bien. Tienes claro cuáles son los operadores relacionales en Java.

# Solución

1. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-100_63) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa0b100_60))
2. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-100_110) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa1b100_60))
3. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-100_113) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa2b100_60))
4. [Opción correcta](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-100_116) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa3b100_60))

# Ejercicio Resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Dada una variable entera x cuyo valor inicial es 5, y otra variable entera z cuyo valor inicial es 6, haz que se muestre la secuencia de resultados: true, `false`, true, `false`, true, y false (6 en total); usando un operador de relación diferente en cada caso.



# Retroalimentación

Una solución posible podría ser la siguiente:

public class EjercicioOperadoresRelacionales {
public static void main(String\[\] args) {
int x=5;
int z=6;
boolean b=x<z;
System.out.println(b);
b=x>z;
System.out.println(b);
b=x<=z;
System.out.println(b);
b=x>=z;
System.out.println(b);
b=x!=z;
System.out.println(b);
b=x==z;
System.out.println(b);
}
}

# 12.4.- Operadores lógicos.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Imagen con los operadores lógicos de Java escritos sobre un fondo de cuadros.](./recopila_files/PROG02_CONT_R31_Logicos.jpg "Operadores lógicos.")

[CC by-nc-sa](http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es "CC by-nc-sa") [Aldo Cavini Benedetti](https://www.flickr.com/photos/aldoaldoz/4165811238/ "Aldo Cavini Benedetti")

Los operadores lógicos realizan operaciones sobre valores booleanos, o resultados de expresiones relacionales, dando como resultado un valor booleano.

Los operadores lógicos los podemos ver en la tabla que se muestra a continuación.

Existen ciertos casos en los que el segundo operando de una expresión lógica no se evalúa para ahorrar tiempo de ejecución, porque con el primero ya es suficiente para saber cuál va a ser el resultado de la expresión.

Por ejemplo, en la expresión a && b si a es falso, no se sigue comprobando la expresión, puesto que ya se sabe que la condición de que ambos sean verdadero no se va a cumplir. En estos casos es más conveniente colocar el operando más propenso a ser falso en el lado de la izquierda. Igual ocurre con el operador ||, en cuyo caso es más favorable colocar el operando más propenso a ser verdadero en el lado izquierdo.

| Operador | Ejemplo en Java | Significado |
| --- | --- | --- |
| ! | !op | Devuelve true si el operando es false y viceversa. |
| & | op1 & op2 | Devuelve true si op1 y `op2` son true |
| | | op1 | op2 | Devuelve true si op1 u `op2` son true |
| ^ | op1 ^ op2 | Devuelve true si sólo uno de los operandos es true |
| && | op1 && op2 | Igual que &, pero si op1 es `false` ya no se evalúa op2 |
| || | op1 || op2 | Igual que |, pero si op1 es `true` ya no se evalúa op2 |

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

En el siguiente código puedes ver un ejemplo de utilización de operadores lógicos. Observa la salida que se debería obtener:

| Ejemplo de código | Salida por pantalla |
| --- | --- |
|
public class OperadoresLogicos {

    public static void main(String\[\] args) {

        System.out.println("EJEMPLOS DE USO DE OPERADORES LÓGICOS");
        System.out.println("-------------------------------------");

        System.out.println("Negacion:\\n !false es : " + (! false));
        System.out.println(" !true es : " + (! true));

        System.out.println("Operador AND (&):");
        System.out.println(" false & false es : " + (false & false));
        System.out.println(" false & true  es : " + (false & true));
        System.out.println(" true  & false es : " + (true & false));
        System.out.println(" true  & true  es : " + (true & true));

        System.out.println("Operador OR (|):");
        System.out.println(" false | false es : " + (false | false));
        System.out.println(" false | true  es : " + (false | true));
        System.out.println(" true  | false es : " + (true | false));
        System.out.println(" true  | true  es : " + (true | true));

        System.out.println("Operador OR Exclusivo o XOR (^):");
        System.out.println(" false ^ false es : "  + (false ^ false));
        System.out.println(" false ^ true  es : " + (false ^ true));
        System.out.println(" true  ^ false es : " + (true ^ false));
        System.out.println(" true  ^ true  es : " + (true ^ true));

        System.out.println("Operador AND (&&):");
        System.out.println(" false && false es : "  + (false && false));
        System.out.println(" false && true  es : " + (false && true));
        System.out.println(" true  && false es : " + (true && false));
        System.out.println(" true  && true  es : " + (true && true));

        System.out.println("Operador OR (||):");
        System.out.println(" false || false es : " + (false || false));
        System.out.println(" false || true  es : " + (false || true));
        System.out.println(" true  || false es : " + (true || false));
        System.out.println(" true  || true  es : " + (true || true));
    } 
}





|

EJEMPLOS DE USO DE OPERADORES LÓGICOS
-------------------------------------
Negacion:
!false es : true
!true es : false
Operador AND (&):
false & false es : false
false & true  es : false
true  & false es : false
true  & true  es : true
Operador OR (|):
false | false es : false
false | true  es : true
true  | false es : true
true  | true  es : true
Operador OR Exclusivo o XOR (^):
false ^ false es : false
false ^ true  es : true
true  ^ false es : true
true  ^ true  es : false
Operador AND (&&):
false && false es : false
false && true  es : false
true  && false es : false
true  && true  es : true
Operador OR (||):
false || false es : false
false || true  es : true
true  || false es : true
true  || true  es : true





|

# Ejercicio Resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Dadas las variables siguientes:

int x1=10, x2=5, x3=0;
char c1='F', c2='S';

Crea una expresión lógica, que utilice operadores lógicos y relacionales, para cada uno de los siguientes casos (intenta evaluar mentalmente el resultado de la expresión antes de mostrarlo por pantalla):

- x1 es igual a x2
- c1 es distinto a c2
- x1 está entre 10 y `100`
- x2 no está entre 10 y `100`
- x3 no está entre 10 y `100`
- x1 es mayor que x2 y `c1` es igual a c2
- O x1 es mayor que x2, o `c1` es distinto a c2, cualquiera de los dos casos.
- x1 es menor o igual que 7 y c2 es igual a c1
- c2 es distinto de 'A' y `x2` es mayor que 0
- 'F' es distinto de c1 o `x1` es mayor que 20
- 'F' es distinto de c1 o `x1` es mayor que 20 o `x2` es mayor que 2
- 'F' es igual a c1 y `x3` es menor que x1
- 'F' es igual a c1 y `x3` es menor que x1 y `x2` es menor o igual que x3
- x2 está entre x3 y `x1`, y c2 es `'S'`
- x3 no está entre x2 y `x1`
- x2 no está entre x3 y `x1`, o c2 es igual a c1
- no se cumple que x3 es menor que x1
- ni x3 es mayor que x1, ni c2 es distinto a c1
- no se cumple que x1 es menor que 100 y `x2` es mayor que 10
- c2 es anterior alfabéticamente a c1



# Retroalimentación

Una solución posible sería la siguiente:

public class EjercicioOperadoresLogicos {
public static void main(String\[\] args) {
int x1=10, x2=5, x3=0;
char c1='F', c2='S';
boolean b;

         //x1 es igual a x2
         b=x1==x2; //false
         System.out.println("C1: "+b);

         //c1 es distinto a c2
         b=c1!=c2; //true
         System.out.println("C2: "+b);
         
         //x1 está entre 10 y 100
         b=x1>=10 && x1<=100; //true (x1 está en ese rango)
         System.out.println("C3: "+b);
         
         //x2 no está entre 10 y 100
         b=!(x2>=10 && x2<=100); //true (x2 no está en ese rango)
         System.out.println("C4: "+b);
         
         //x3 no está entre 10 y 100
         b=x3<10 || x3>100; //true (x3 no está en ese rango)
         System.out.println("C5: "+b);
         
         //x1 es mayor que x2 y c1 es igual a c2
         b=x1>x2 && c1==c2; //false (c1 no es igual a c2)
         System.out.println("C6: "+b);

         //O x1 es mayor que x2, o c1 es distinto a c2, cualquiera de los dos casos.
         b=x1>x2 || c1!=c2; //true (se cumplen ambas condiciones)
         System.out.println("C7: "+b);
         
         //x1 es menor o igual que 7 y c2 es igual a c1
         b=x1<=7 && c2==c1; //false (ambas condiciones son falsas)
         System.out.println("C8: "+b);
         
         //c2 es distinto de 'A' y x2 es mayor que 0
         b=c2!='A' && x2>0; //true (ambas condiciones son true)
         System.out.println("C9: "+b);
         
         //'F' es distinto de c1 o x1 es mayor que 20
         b='F'!=c1 || x1>20; //false (ambas condiciones son false)
         System.out.println("C10: "+b);
         
         //'F' es distinto de c1 o x1 es mayor que 20 o x2 es mayor que 2
         b='F'!=c1 || x1>20 || x2>2; //true (la última condición es cierta)
         System.out.println("C11: "+b);
         
         //'F' es igual a c1 y x3 es menor que x1
         b='F'==c1 && x3<x1; //true (ambas condiciones son ciertas)
         System.out.println("C12: "+b);         
         
         //'F' es igual a c1 y x3 es menor que x1 y x2 es menor o igual que x3
         b='F'==c1 && x3<x1 && x2<=x3; //false (la última condición es falsa)
         System.out.println("C13: "+b);
         
         //x2 está entre x3 y x1, y c2 es 'S'
         b=x2>=x3 && x2<=x1 && c2=='S'; //true (todas las condiciones se cumplen)
         System.out.println("C14: "+b);
         
         //x3 no está entre x2 y x1
         b=x3<x2 || x3>x1; //true (todas las condiciones se cumplen)
         System.out.println("C15: "+b);
         
         //x2 no está entre x3 y x1, o c2 es igual a c1
         b=x2<x3 || x2>x1 || c2==c1; // false (Las tres condiciones no se cumplen)
         System.out.println("C16: "+b);
         
         //no se cumple que x3 es menor que x1
         b=!(x3<x1); //false (x3 si es menor que x1)
         System.out.println("C17: "+b);
         
         //ni x3 es mayor que x1, ni c2 es distinto a c1
         b=!(x3>x1) && !(c2!=c1); //false (c2 si es distinto a c1 )
         System.out.println("C18: "+b);
         
         //no se cumple que x1 es menor que 100 y x2 es mayor que 10
         b=!(x1<100 && x2>10); //true
         System.out.println("C19: "+b);

         //c2 es anterior alfabéticamente a c1         
         b=c2<c1; //false (la 'S' es posterior a la 'F')
         System.out.println("C20: "+b);         
        
    }
}

**Nota importante: el tipo de datos char es internamente un número, por eso se pueden comparar usando operadores relacionales, pero esto no es posible con cadenas de caracteres (String).**

# 12.5.- Operador condicional.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

[![Diagrama de flujo del operador condicional.](./recopila_files/PROG02_CONT_R28_opcondicional_miniatura.png "Operador condicional.")](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/PROG02_CONT_R28_opcondicional.png)

Ministerio de Educación. Uso educativo-nc.

Elaboración propia.

El **operador condicional** “? :” sirve para **evaluar una condición y devolver un resultado u otro** en función de si es verdadera o falsa dicha condición. Es el único **operador ternario** de Java, y como tal, **necesita tres operandos** para formar una expresión.

- El **primer operando** se sitúa **a la izquierda del símbolo de interrogación** (?), y siempre será una **expresión booleana**, también llamada condición.
- El **siguiente operando** se sitúa **a la derecha del símbolo de interrogación** (?) y **antes de los dos puntos** (:), y es el **valor que devolverá el operador condicional si la condición es verdadera**.
- El **tercer y último operando**, que aparece **después de los dos puntos** (:), es la **expresión cuyo resultado se devolverá si la condición evaluada es falsa**.

| Operador | Expresión en Java |
| --- | --- |
| ? : | condición ? exp1 : exp2 |

Por ejemplo, en la expresión:

(x>y) ? x : y ;

Se evalúa la condición de si x es mayor que y. En caso afirmativo se devuelve el valor de la variable x, y en caso contrario se devuelve el valor de y. Se trata de una manera muy elegante de calcular el **máximo** de esos dos valores.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

El operador condicional se puede sustituir por la sentencia if-then-else que veremos en la siguiente unidad sobre las **estructuras de control**, de la que viene a ser una versión abreviada muy útil para algunos casos, permitiendo hacer operaciones potentes con una única sentencia bastante simple. Por ejemplo, la línea anterior de ejemplo, devuelve el mayor de los dos números que se comparan, de una manera sintética y elegante, aunque lo mismo se podría haber hecho usando una sentencia if-then-else.

# Citas para pensar

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

> La buena escritura debe ser concisa. Una oración no debe contener palabras innecesarias, un párrafo no debe contener oraciones innecesarias.
>
> **William Strunk, Jr.**

# Ejercicio Resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

El siguiente código generará un número aleatorio entre 0 y 100 (aunque el 100 no estará incluido):

//d contendrá un número aleatorio entre 0 y 100.
double d=Math.random()\*100;

Usando exclusivamente el operador condicional, junto con operadores de relación, lógicos y de asignación, escribe un código en Java que muestre por pantalla si el número aleatorio generado está entre los rangos siguientes:

- d está entre 0 y `20`, 20 no incluido.
- d está entre 20 y `50`, ambos incluidos.
- d está entre 50 y `75`, ninguno incluido.
- d está entre 75 y `100`, ambos incluidos.



# Retroalimentación

Una solución posible podría ser:

public class EjercicioOperadorCondicional {
public static void main(String\[\] args) {
//d contendrá un número aleatorio entre 0 y 100.
double d= Math.random() \* 100;

         String cadena;
         // Comprobamos si d está entre 0 y 20, 20 no incluido.         
         cadena= (d<20) ? "Sí está entre 0 y 20." : "No está entre 0 y 20.";
         System.out.println (cadena);
         // Comprobamos si d está entre 20 y 50, ambos incluidos.         
         cadena= (d>=20 && d<=50) ? "Sí está entre 20 y 50." : "No está entre 20 y 50.";
         System.out.println (cadena);
         // Comprobamos si d está entre 50 y 75, ninguno incluido.         
         cadena= (d>50 && d<75) ? "Sí está entre 50 y 75." : "No está entre 50 y 75.";
         System.out.println (cadena);
         // Comprobamos si d está entre 75 y 100, ambos incluidos.         
         cadena= (d>=75 && d<=100) ? "Sí está entre 75 y 100" : "No está entre 75 y 100.";
         System.out.println (cadena);
         // Mostramos el número aleatorio
         System.out.println ("El número aleatorio es:" + d);
    }
}

# Ejercicio Resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Sabemos si un número es **par** o **impar** (**divisible entre dos**) si **el resto de la división entera** de ese número entre dos es **cero** o **uno**.

Escribe un programa en Java que pida un número entero al usuario e indique si ese número es **par o impar**.



# Retroalimentación

Dado que dependiendo de que el número sea par o impar habrá que mostrar un texto diferente por pantalla ("par" o "impar"), podríamos utilizar el operador condicional (?) para decidir qué mensaje se va a mostrar:

String mensajeResultado = (numero % 2 == 0) ? "par" : "impar";

Por tanto, el programa que realice todo el proceso podría quedar así:

import java.util.Scanner;

public class CalcularParImpar {
public static void main(String args\[\]) {
Scanner scanner = new Scanner(System.in);
int numero;
String mensajeResultado;

      System.out.print("Introduce un número entero: ");
      numero = scanner.nextInt();
      mensajeResultado = (numero % 2 == 0) ? "par" : "impar" ;
      System.out.println ("El número es " + mensajeResultado);
}
}

# 12.6.- Operadores de bits.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Símbolos de los operadores de desplazamientos de bits sobre un fondo de ceros y unos.](./recopila_files/PROG02_CONT_R33_Bits.jpg "Operadores de desplazamiento de bits.")

Flor Moncada Añón. Uso educativo-nc.

Elaboración propia.

Los operadores a nivel de bits se caracterizan porque realizan operaciones sobre números enteros (o char) en su representación binaria, es decir, sobre cada dígito binario.

Aunque estos operadores no son de uso frecuente, sino más bien para aplicaciones muy específicas, no está de más que al menos sepas cuáles son. En la tabla tienes los operadores a nivel de bits que utiliza Java.

| Operador | Ejemplo en Java | Significado |
| --- | --- | --- |
| **~** | **~op** | Realiza el complemento binario de op (invierte el valor de cada bit) |
| **&** | **op1 & op2** | Realiza la operación AND binaria sobre op1 y `op2` |
| **|** | **op1 | op2** | Realiza la operación OR binaria sobre op1 y `op2` |
| **^** | **op1 ^ op2** | Realiza la operación OR-exclusivo (`XOR`) binaria sobre op1 y `op2` |
| **<<** | **op1 << op2** | Desplaza op2 veces hacia la izquierda los bits de op1 |
| **\>>** | **op1 >> op2** | Desplaza op2 veces hacia la derecha los bits de op1 |
| **\>>>** | **op1 >>> op2** | Desplaza op2 (en positivo) veces hacia la derecha los bits de op1 |

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Los operadores de bits raramente los vas a utilizar en tus aplicaciones de gestión. No obstante, si sientes curiosidad sobre su funcionamiento, puedes ver el siguiente enlace dedicado a este tipo de operadores:

[Operadores de bits](http://es.wikibooks.org/wiki/Programaci%C3%B3n_en_Java/Operadores_de_bits "Acceder a una web con información sobre operadores de bits.")

# Ejercicio Resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

En el siguiente código, la variable i almacena el número 129, pero en vez de darle valor con un literal decimal, se le ha dado con un literal binario:

int i = 0b10000001;         
System.out.println(Integer.toBinaryString(i));
System.out.println(i);

En la segunda línea, se muestra el número i en binario por la salida estándar. Dado el código anterior, el objetivo es ampliar el código para conseguir lo siguiente:

1. Modificando el valor de la variable i con la operación OR binaria, haz que muestre 10000011 (`131` en decimal).
2. Partiendo del valor del paso 1, modifica el valor de la variable i con la operación AND binaria para que muestre 10000010 (`130` en decimal).
3. Partiendo del valor del paso 2, modifica el valor de la variable i con el operador de desplazamiento de bits a la derecha, para que muestre 1000001 (`65` en decimal).
4. Partiendo del valor del paso 3, modifica el valor de la variable i con el operador de desplazamiento de bits a la izquierda, para que muestre 1000001000 (`520` en decimal).



# Retroalimentación

Una solución posible sería la siguiente:

public class EjemploOperadoresDeBits {
public static void main(String\[\] args) {
//i contendrá el número 129.
int i = 0b10000001;         
System.out.println(Integer.toBinaryString(i));


         i=i | 0b00000010;
         System.out.println(Integer.toBinaryString(i));
         System.out.println(i); //El valor de i ahora es 131
         
         i=i & 0b10000010;
         System.out.println(Integer.toBinaryString(i));
         System.out.println(i); //El valor de i ahora es 130
         
         i=i >> 1;
         System.out.println(Integer.toBinaryString(i));
         System.out.println(i); //El valor de i ahora es 65
         
         i=i << 3;
         System.out.println(Integer.toBinaryString(i));
         System.out.println(i); //El valor de i ahora es 520
    }
}

Si se ejecuta el programa debería obtenerse por pantalla algo similar a lo siguiente:

10000001
10000011
131
10000010
130
1000001
65
1000001000
520

# 12.7.- Trabajo con cadenas.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Una cadena al frente con el mar y una isla al fondo.](./recopila_files/PROG01_CONT_R34_Cadenas.jpg.jpg "Cadena")

[CC by-nc-nd](http://creativecommons.org/licenses/by-nc-nd/3.0/deed.es "CC by-nc-nd") [Santa Pola](https://www.flickr.com/photos/santapolaturismo/8026408933/in/photolist-degrJV-EgPVc-EgPVt-8zhseg-8ZmaGx-2reUW-bnVxac-rbd9AN-bQxY5M-4vGq6m-r1B6Ez-5ymv7s-FPmVgD-oSo2MP-dqasbi-9fjSxY-bepHb8-8JhaAw-7keGC3-EgPVk-p75Fo3-9zv5LT-3EjLQT-5x47nV-8oYSF7-fDBJxe-zUS4Eb-6JrNoR-heYozr-5ypzQg-cQvg21-9i2c1d-aeZxh7-pgtUEc-UBXSL-u7XwC-djZjmu-i22B9Z-4ghM8t-qM51EL-4gmGzu-crS8a3-M7Kjs-4gmJpL-aAYtCo-cXecnm-8eM7Jt-4idDa9-7s2sTW-comjNU "Santa Pola")

Ya hemos visto en el apartado de literales que el objeto String se corresponde con una secuencia de caracteres entrecomillados, como por ejemplo “hola”. Este literal se puede utilizar en Java como si de un tipo de datos primitivo se tratase, y como caso especial, no necesita del operador new para ser creado.

No se trata aquí de que nos adentremos en lo que es una clase u objeto, puesto que lo veremos en unidades posteriores, y trabajaremos mucho sobre ello. Aquí sólo vamos a utilizar determinadas operaciones que podemos realizar con el objeto String, y lo verás mucho más claro con ejemplos descriptivos.

Para aplicar una operación a una variable de tipo String, escribiremos su nombre seguido de la operación, separados por un punto. Entre las principales operaciones que podemos utilizar para trabajar con cadenas de caracteres están las siguientes:

- **Creación**. Como hemos visto en el apartado de literales, podemos crear una variable de tipo **String** simplemente asignándole una cadena de caracteres encerrada entre comillas dobles.
- **Obtención del carácter** que se encuentra en una posición determinada de la cadena. Para ello se utiliza el método **charAt**.
- **Obtención de longitud**. Si necesitamos saber la longitud de un **String**, utilizaremos el método **length**.
- **Concatenación**. Se utiliza el operador **+** o el método **concat()** para concatenar cadenas de caracteres.
- **Comparación**. El método **equals** nos devuelve un valor booleano que indica si las cadenas comparadas son o no iguales. El método **equalsIgnoreCase** hace lo propio, ignorando las mayúsculas de las cadenas a considerar. Las comparaciones entre objetos **String** nunca deben hacerse con el operador **\==**.
- **Obtención de subcadenas**. Podemos obtener cadenas derivadas de una cadena original con el método **substring()**, al cual le debemos indicar el inicio y el fin de la subcadena a obtener.
- **Cambio a mayúsculas/minúsculas**. Los métodos **toUpperCase** y **toLowerCase** devuelven una nueva variable que transforma en mayúsculas o minúsculas, respectivamente, la variable inicial.
- **Conversiones.**  Utilizaremos el método **valueOf** para convertir un tipo de dato primitivo (**int**, **long**, **float**, etc.) a una variable de tipo **String**.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

A continuación tienes varios ejemplos de las distintas operaciones que podemos realizar con cadenas de caracteres o String en Java:

public class EjemploCadenas {

    public static void main(String\[\] args) {

        // Cadenas de ejemplo con las que trabajar
        String cadena1 = "CICLO DAM-DAW";
        String cadena2 = "ciclo dam-daw";

        System.out.println ("EJEMPLOS DE OPERACIONES CON CADENAS");
        System.out.println ("-----------------------------------");
        
        // Mostramos las cadenas originales
        System.out.println ("La cadena cadena1 es " + cadena1);
        System.out.println ("La cadena cadena2 es " + cadena2);
        System.out.println ();

        System.out.println ("Longitud de cadena1: " + cadena1.length());
        System.out.println ("Longitud de cadena2: " + cadena2.length());

        // Concatenación de cadenas (concat o bien operador +)
        System.out.println ("Concatenación cadena1 y cadena2: " + cadena1.concat(cadena2));
        System.out.println ("Concatenación cadena2 y cadena1: " + cadena2 + cadena1);

        // Comparación de cadenas
        System.out.println ("cadena1.equals(cadena2) es: " + cadena1.equals(cadena2));
        System.out.println ("cadena1.equalsIgnoreCase(cadena2) es: " + cadena1.equalsIgnoreCase(cadena2));

        // Obtención de subcadenas
        System.out.println ("cadena1.substring(0,5) es: " + cadena1.substring(0, 5));

        // Pasar a minúsculas
        System.out.println ("cadena1.toLowerCase() es: " + cadena1.toLowerCase());
        System.out.println();
    }
}

El resultado que se debería obtener es el siguiente:

EJEMPLOS DE OPERACIONES CON CADENAS
-----------------------------------
La cadena cadena1 es CICLO DAM-DAW
La cadena cadena2 es ciclo dam-daw

Longitud de cadena1: 13
Longitud de cadena2: 13
Concatenación cadena1 y cadena2: CICLO DAM-DAWciclo dam-daw
Concatenación cadena2 y cadena1: ciclo dam-dawCICLO DAM-DAW
cadena1.equals(cadena2) es: false
cadena1.equalsIgnoreCase(cadena2) es: true
cadena1.substring(0,5) es: CICLO
cadena1.toLowerCase() es: ciclo dam-daw

# Ejercicio Resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Dada la variable cadena tipo String, haz que vaya mostrando por pantalla la secuencia siguiente:

La casa de
La casa de Juan es
La casa de Juan es el número
La casa de Juan es el número 25.

Para ello tienes que ir modificando el valor de la variable cadena, partiendo del valor que tiene con anterioridad. Para ello puedes usar una de las dos formas siguientes:

cadena=cadena+"texto añadido";
cadena+="texto añadido"

Fíjate por último que 25 es un número, y no un texto.



# Retroalimentación

Una solución posible sería:

public class EjemploConcatenacion {
public static void main(String\[\] args) {
String cadena="La";

        cadena+=" casa de";
        System.out.println(cadena);
        
        cadena+=" Juan es";        
        System.out.println(cadena);
                
        cadena+=" el número ";        
        System.out.println(cadena);
        
        cadena+=25 + ".";        
        System.out.println(cadena);        
    }
}

# Autoevaluación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

# Pregunta

¿Cuál de las siguientes formas es la forma aconsejada para comparar si dos cadenas son iguales entre sí?

# Respuestas

[Opción 1](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-202_145)

cad1.equals(cad2)

[Opción 2](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-202_12953)

cad1==cad2

[Opción 3](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-202_12956)

cad1===cad2

[Opción 4](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-202_12959)

cad1.compareTo(cad2)

# Retroalimentación

**Efectivamente, esta es la forma correcta. Enhorabuena.**

Nunca jamás hay que usar == para comprobar si el contenido de dos cadenas es el mismo.

**Incorrecto.** Aunque en algunos casos puede funcionar, esta no es la forma correcta, dado que compara si las dos cadenas tienen la misma dirección de memoria y no si ambas cadenas tienen el mismo contenido en memoria.

**Incorrecto**. Este operador no existe en Java, aunque si en otros lenguajes.

**Parcialmente correcto, hay otra opción más correcta que esta.** Aunque el método compareTo existe, y podría servir para comparar cadenas, esta operación retorna un entero indicando si la cadena es anterior, igual o posterior alfabéticamente a la pasada por parámetro. La idea es obtener un tipo de dato boolean (`true` si son iguales y false si no lo son). Podría ser válido si fuera: cad1.compareTo(cad2)==0.

# Solución

1. [Opción correcta](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-202_145) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa0b202_142))
2. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-202_12953) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa1b202_142))
3. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-202_12956) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa2b202_142))
4. [Incorrecto](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#answer-202_12959) ([Retroalimentación](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/pluginfile.php/55941/mod_scorm/content/0/#sa3b202_142))

# Ejercicio Resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

El siguiente código Java pregunta al usuario por una palabra y la muestra por pantalla:

import java.util.Scanner;

public class Palabra {
public static void main(String args\[\]) {
Scanner teclado=new Scanner(System.in);
System.out.print ("Introduzca una palabra: ");
String palabra= teclado.nextLine();
System.out.print ("La palabra introducida es " + palabra);
}
}

Para obtener el carácter ubicado en una determinada posición de una cadena en Java disponemos del método charAt teniendo en cuenta que la primera posición es cero y que la última es la del tamaño de la cadena menos uno.

Por ejemplo, dada la siguiente cadena:

String palabra= "ejemplo";

podríamos obtener el carácter ubicado en la primera posición aplicando a la variable palabra el método charAt con el valor 0:

char primeraLetra= palabra.charAt (0);

en tal caso obtendríamos el carácter 'e' ¿Cómo obtendríamos el último? De manera similar, pero accediendo a la posición palabra.length() - 1:

char ultimaLetra= palabra.charAt (palabra.length()-1);

en este caso obtendríamos el carácter 'o'.

Amplía el fragmento de código anterior para que además de solicitar una palabra se muestren por pantalla la primera y la última letra de esa palabra.

Por ejemplo, si la palabra introducida es "prueba" el programa debería mostrar por pantalla los caracteres 'p' y `'a'`.



# Retroalimentación

Para mostrar el primer y último carácter habrá que usar los métodos charAt y `length` tal y como acabamos de ver:

import java.util.Scanner;

public class Palabra {
public static void main(String args\[\]) {
Scanner teclado=new Scanner(System.in);
System.out.print ("Introduzca una palabra: ");
String palabra= teclado.nextLine();

      char primeraLetra= palabra.charAt (0);
      char ultimaLetra=  palabra.charAt ( palabra.length()-1 );	  
      System.out.println ("La palabra introducida es: " + palabra);
	  System.out.println ("La primera letra de la palabra es: " + primeraLetra);
	  System.out.println ("La última letra de la palabra es: "  + ultimaLetra);
    }
}

# 12.8.- Precedencia de operadores.

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Imagen que muestra el orden estándar en la precedencia de las expresiones arimtéticas.](./recopila_files/PROG02_CONT_R36_Precedencia.jpg "Precedencia de operadores")

[CC by-sa](http://creativecommons.org/licenses/by-sa/3.0/deed.es "CC by-sa") [HB](https://commons.wikimedia.org/wiki/File:Order_of_operations.svg "HB")

El orden de precedencia de los operadores determina la secuencia en que deben realizarse las operaciones cuando en una expresión intervienen operadores de distinto tipo.

Las reglas de precedencia de operadores que utiliza Java coinciden con las reglas de las expresiones del álgebra convencional. Por ejemplo:

- La multiplicación, división y resto de una operación se evalúan primero. Si dentro de la misma expresión tengo varias operaciones de este tipo, empezaré evaluándolas de izquierda a derecha.
- La suma y la resta se aplican después que las anteriores. De la misma forma, si dentro de la misma expresión tengo varias sumas y restas empezaré evaluándolas de izquierda a derecha.

A la hora de evaluar una expresión es necesario tener en cuenta la **asociatividad** de los operadores. La asociatividad indica qué operador se evalúa antes, en condiciones de igualdad de precedencia. Los operadores de asignación, el operador condicional (?:), los operadores incrementales (++, --) y el casting son asociativos por la derecha. El resto de operadores son asociativos por la izquierda, es decir, que se empiezan a calcular en el mismo orden en el que están escritos: de izquierda a derecha. Por ejemplo, en la expresión siguiente:

10 / 2 \* 5

Realmente la operación que se realiza es (10 / 2 ) \* 5, porque ambos operadores, división y multiplicación, tienen igual precedencia y por tanto se evalúa primero el que antes nos encontramos por la izquierda, que es la división. El resultado de la expresión es 25. Si fueran asociativos por la derecha, puedes comprobar que el resultado sería diferente, primero multiplicaríamos 2 \* 5 y luego dividiríamos entre 10, por lo que el resultado sería 1. En esta otra expresión:

x = y = z = 1

Realmente la operación que se realiza es x = (y = (z = 1)). Primero asignamos el valor de 1 a la variable z, luego a la variable y, para terminar asignando el resultado de esta última asignación a x. Si el operador asignación fuera asociativo por la izquierda esta operación no se podría realizar, ya que intentaríamos asignar a x el valor de y, pero y aún no habría sido inicializada.

En la tabla se detalla el orden de precedencia y la asociatividad de los operadores que hemos comentado en este apartado. Los operadores se muestran de mayor a menor precedencia.

| Operador | Tipo | Asociatividad |
| --- | --- | --- |
| **++ --** | Unario, notación postfija | Derecha |
| **++ -- + -**  
**(cast) ! ~** | Unario, notación prefija | Derecha |
| **\* / %** | Aritméticos | Izquierda |
| **\+ -** | Aritméticos | Izquierda |
| **<< >> >>>** | Bits | Izquierda |
| **< <= > >=** | Relacionales | Izquierda |
| **\== !=** | Relacionales | Izquierda |
| **&** | Lógico, Bits | Izquierda |
| **^** | Lógico, Bits | Izquierda |
| **|** | Lógico, Bits | Izquierda |
| **&&** | Lógico | Izquierda |
| **||** | Lógico | Izquierda |
| **?:** | Operador condicional | Derecha |
| **\= += -= \*=**  
**/= %=** | Asignación | Derecha |

# Reflexiona

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

¿Crees que es una buena práctica de programación utilizar paréntesis en expresiones aritméticas complejas, aún cuando no sean necesarios?



# Retroalimentación

Probablemente acertaste. El uso de paréntesis, incluso cuando no son necesarios, puede hacer más fácil de leer las expresiones aritméticas complejas.

No obstante, usar de forma exhaustiva los paréntesis como si no existieran las reglas de precedencia de operadores puede hacer que las expresiones se alarguen y se hagan más incómodas de manejar de forma innecesaria.

En el término medio está la virtud.

# Ejercicio Resuelto

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Dada la variable d1 tipo double inicializada a 10 y la variable d2 también tipo double inicializada a 20, realiza las siguientes operaciones aritméticas y muestra el resultado por pantalla:

1. Restamos 4 al doble de d1.
2. Restamos 4 a `d1` y calculamos el doble.
3. Sumamos 2 a `d1` y dividimos por 12, a todo ello sumamos d2.
4. Dividimos d2 entre d1, y todo ello dividido entre 2.
5. Dividimos d2 entre la mitad de d1.
6. Restamos a d2 un cuarto de d1.
7. Restamos d1 a `d2`, y todo ello lo dividimos entre 4.
8. Dividimos d2 entre d1, y todo ello lo multiplicamos por 2.
9. Dividimos d2 entre el doble de d1.
10. Restamos al doble de d2 un cuarto de d1.
11. Multiplicamos d2 por 100 menos d1.
12. Multiplicamos d2 por 50 mas d1, y todo ello lo dividimos por 10.

En este ejercicio es importante que intentes minimizar el uso de paréntesis, usándolos solo cuando sean necesarios.

El resultado que debería aparecer por pantalla debería ser similar al siguiente:

Ej1: 16.0
Ej2: 12.0
Ej3: 21.0
Ej4: 1.0
Ej5: 4.0
Ej6: 17.5
Ej7: 2.5
Ej8: 4.0
Ej9: 1.0
Ej10: 37.5
Ej11: 1800.0
Ej12: 120.0



# Retroalimentación

Una solución posible sería:

public class EjercicioPrecedenciaOperadores {
public static void main(String\[\] args) {
double d1=10, d2=20;
double calc;
//Restamos 4 al doble de d1.
calc=d1\*2 - 4;
System.out.println("Ej1: "+calc);

        //Restamos 4 a d1 y calculamos el doble.
        calc=(d1-4)\*2;
        System.out.println("Ej2: "+calc);
        
        //Sumamos 2 a d1 y dividimos por 12, a todo ello sumamos d2.
        calc=(d1+2)/12 + d2;
        System.out.println("Ej3: "+calc);

        //Dividimos d2 entre d1, y todo ello dividido entre 2.
        calc=d2/d1/2;
        System.out.println("Ej4: "+calc);                
        
        //Dividimos d2 entre la mitad de d1.
        calc=d2/(d1/2);
        System.out.println("Ej5: "+calc);                
        
        //Restamos a d2 un cuarto de d1.
        calc=d2-d1/4;
        System.out.println("Ej6: "+calc);                
        
        //Restamos d1 a d2, y todo ello lo dividimos entre 4.
        calc=(d2-d1)/4;
        System.out.println("Ej7: "+calc);
        
        //Dividimos d2 entre d1, y todo ello lo multiplicamos por 2.
        calc=d2/d1\*2;
        System.out.println("Ej8: "+calc);
        
        //Dividimos d2 entre el doble de d1.
        calc=d2/(d1\*2);
        System.out.println("Ej9: "+calc);        
        
        //Restamos al doble de d2 un cuarto de d1.
        calc=d2\*2 - d1/4;
        System.out.println("Ej10: "+calc);
        
        //Multiplicamos d2 por 100 menos d1.
        calc=d2 \* (100 - d1);
        System.out.println("Ej11: "+calc);
        
        //Multiplicamos d2 por 50 mas d1, y todo ello lo dividimos por 10.
        calc=d2 \* (50 + d1) / 10;
        System.out.println("Ej12: "+calc);
        
    }
}

# 13.- Conversion de tipo.

# Caso práctico

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Imagen en la que se aprecia a Juan programando delante del ordenador.](./recopila_files/PROG02_CONT_R39_CASO_BU004807.jpg "Programando.")

Stockbyte. Uso educativo no comercial para

plataformas públicas de Formación Profesional

a distancia. CD-DVD Num. 109.

**María** ha avanzado mucho en sus conocimientos sobre Java y ha contado con mucha ayuda por parte de **Juan.** Ahora mismo tiene un problema con el código, y le comenta:

—Estoy atrancada en el código. Tengo una variable de tipo byte y quiero asignarle un valor de tipo int, pero el compilador me da un error de posible pérdida de precisión. ¿Tú sabes qué significa eso?

—Claro —le contesta **Juan**—, es un problema de conversión de tipos, para asignarle el valor a la variable de tipo byte debes hacer un casting.

—¡Ah! , ¿y cómo se hace eso?

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Imagina que queremos dividir un número entre otro: ¿tendrá decimales el resultado de esa división?

Podemos pensar que siempre que el denominador no sea divisible entre el divisor, tendremos un resultado con decimales, pero no es así.

Si el denominador y el divisor son variables de tipo entero, el resultado será entero y no tendrá decimales. Para que el resultado tenga decimales necesitaremos hacer una **conversión de tipo**.

Las conversiones de tipo se realizan para hacer que el resultado de una expresión sea del tipo que nosotros deseamos. En el ejemplo anterior, para hacer que el resultado de la división sea de tipo real,con decimales, debemos hacer una conversión de tipo. Existen dos tipos de conversiones:

- **Conversiones automáticas**. Cuando a una variable de un tipo se le asigna un valor de otro tipo numérico con menos bits para su representación, se realiza una conversión automática. En ese caso, el valor se dice que es **promocionado** al tipo más grande (el de la variable), para poder hacer la asignación. También se realizan conversiones automáticas en las operaciones aritméticas, cuando estamos utilizando valores de distinto tipo, el valor más pequeño se promociona al valor más grande, ya que el tipo mayor siempre podrá representar cualquier valor del tipo menor (por ejemplo, de int a `long` o de float a `double`).

- **Conversiones explícitas**. Cuando hacemos una conversión de un tipo con más bits a un tipo con menos bits. En estos casos debemos indicar que queremos hacer la conversión de manera expresa, ya que se puede producir una pérdida de datos y hemos de ser conscientes de ello. Este tipo de conversiones se realiza con el **operador cast**. El operador cast es un operador unario que se forma colocando delante del valor a convertir el tipo de dato entre paréntesis. Tiene la misma precedencia que el resto de operadores unarios y se asocia de derecha a izquierda. Las conversiones explícitas también suelen ser conocidas como **casting**.


Debemos tener en cuenta que **un valor numérico nunca puede ser asignado a una variable de un tipo menor en rango, si no es con una conversión explícita**. Por ejemplo:

int a;
byte b;
a = 12;             // no se realiza conversión alguna  
b = 12;             // se permite porque 12 está dentro
// del rango permitido de valores para b
b = a;              // error, no permitido (incluso aunque
// 12 podría almacenarse en un byte)
byte b = (byte) a;  // Correcto, forzamos conversión explícita

En el ejemplo anterior vemos un caso típico de error de tipos, ya que estamos intentando asignarle a b el valor de a, siendo b de un tipo más pequeño. El compilador detecta que a es "un recipiente más grande", y que por tanto si intentamos volcar su contenido en b que es un recipiente más pequeño, puede no caber, así que mejor avisar del error, y no dejar ni intentarlo, no sea que se pierda el contenido "por desbordamiento del recipiente". 

Lo correcto es forzar la conversión de a al tipo de datos byte, (puesto que su contenido, 12, realmente puede ser visto como un literal byte también) y entonces asignarle su valor a la variable b.

# Debes conocer

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

En el Anexo II de esta misma unidad hay información importante sobre cómo se producen las conversiones de tipos en Java, tanto automáticas como explícitas.

# 14.- Comentarios.

# Caso práctico

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Programador trabajando con su ordenador. Vista frontal.](./recopila_files/PROG02_Caso_Juan.jpg "Programador.")

Ministerio de Educación. Uso educativo-nc.

Elaboración propia.

**Juan** ha podido comprobar los avances que ha hecho **María** con la programación. Ya domina todos los aspectos básicos sobre sintaxis, estructura de un programa, variables y tipos de datos. **Ada** le acaba de comunicar que van a sumarse al proyecto dos personas más, **Ana** y **Carlos** que están haciendo las prácticas en la empresa, vienen del ciclo de Desarrollo de Aplicaciones Multiplaforma y Desarrollo de Aplicaciones Web, respectivamente.

—Al principio de cada programa indicaremos una breve descripción y el autor. En operaciones complicadas podríamos añadir un comentario, les ayudará a entender mejor qué es lo que hace —indica **Juan**.

—De acuerdo —comenta **María**—, y podemos ir metiendo los comentarios de la herramienta esa que me comentaste, **Javadoc**, para que se cree una documentación aún más completa.

— ¡Ajá! , pues ¡manos a la obra!

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Los comentarios son muy importantes a la hora de describir qué hace un determinado programa. A lo largo de la unidad los hemos utilizado para documentar los ejemplos y mejorar la comprensión del código. Para lograr ese objetivo, es normal que cada programa comience con unas líneas de comentario que indiquen, al menos, una breve descripción del programa, el autor o autora del mismo y la última fecha en que se ha modificado.

Todos los lenguajes de programación disponen de alguna forma de introducir comentarios en el código. En el caso de Java, nos podemos encontrar los siguientes tipos de comentarios:

- **Comentarios de una sola línea**. Utilizaremos el delimitador **//** para introducir comentarios de sólo una línea.

// comentario de una sola línea

- **Comentarios de múltiples líneas**. Para introducir este tipo de comentarios, utilizaremos una barra inclinada y un asterisco (/\*), al principio del párrafo y un asterisco seguido de una barra inclinada (\*/) al final del mismo. Aunque no es necesario poner asteriscos al comienzo de cada nueva línea dentro del comentario, suele hacerse para que de esa forma quede visualmente delimitado qué líneas abarca el comentario. De esta forma, en el ejemplo siguiente se ve cómo suele ponerse el comentario primero... y luego se repite con lo que sería  estrictamente necesario

/\* Esto es un comentario
\* de varias líneas  \*/

/\* Esto es otro comentario
de varias líneas \*/

- **Comentarios Javadoc**. Utilizaremos los delimitadores /\*\* y \*/. Al igual que con los comentarios tradicionales, el texto entre estos delimitadores será ignorado por el compilador. Este tipo de comentarios se emplean para generar documentación automática del programa. A través del programa **javadoc**, incluido en Java SE , se recogen todos estos comentarios y se llevan a un documento en formato **.html**. Al igual que en los comentarios de múltiples líneas, no serían necesarios los asteriscos  iniciales para la segunda, tercera y cuarta líneas del comentario siguiente.

/\*\*  Comentario de documentación.
\* Javadoc extrae los comentarios del código y
\* genera un archivo html a partir de este tipo de comentarios
\*/

# Reflexiona

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Una buena práctica de programación es añadir en la última llave que delimita cada bloque de código, un comentario indicando a qué clase o método pertenece esa llave.

# Para saber más

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

Si quieres ir familiarizándote con la información que hay en la web de Oracle, en el siguiente enlace puedes encontrar más información sobre la herramienta Javadoc incluida en el Kit de Desarrollo de Java SE (en inglés):

[Página oficial de Oracle sobre la herramienta Javadoc](http://download.oracle.com/javase/6/docs/technotes/guides/javadoc/index.html "Acceder a la página de la herramienta Javadoc.  ")

# Anexo I.- Listado de IDEs

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

| Herramienta |
| --- |
| [BlueJ Java IDE](http://www.bluej.org/ "BlueJ") |
| [DrJava Java IDE](http://drjava.sourceforge.net/) |
| [Eclipse (multiplataforma)](http://www.eclipse.org/ "Eclipse") |
| [Javelin from Step Ahead SW (Windows)](http://www.stepaheadsoftware.com/products/javelin/javelin.htm "Javelin from Step Ahead SW (Windows)") |
| [JCreator Java IDE LE (Light Edition) (Windows)](http://www.jcreator.com/ "JCreator")  |
| [JEdit](http://www.jedit.org/ "JEdit")  |
| [jGRASP](http://www.eng.auburn.edu/grasp/ "jGRASP")  |
| [JIPE Java IDE](http://jipe.sourceforge.net/ "JIPE Java IDE")  |
| [IBM Rational Application Developer (Windows y Gnu/Linux)](http://www-306.ibm.com/software/awdtools/developer/application/ "IBM Rational Application Developer (Windows y Gnu/Linux)") |
| [IDEA](http://www.jetbrains.com/idea/index.html "IDEA") |
| [NetBeans](http://www.netbeans.org/ "NetBeans") |
| [Oracle JDeveloper](http://www.oracle.com/technetwork/developer-tools/jdev/overview/index.html?ssSourceSiteId=ocomen "JDeveloper") |
| [SlickEdit](http://www.slickedit.com/ "SlickEdit")  |
| [Stylus Studio](http://www.stylusstudio.com/java_ide.html "Stylus Studio")  |
| [UltraStudio](http://www.ultraedit.com/products/uestudio "UltraStudio") |
| [Visual Paradigm Integrated Development Environment (VP-JIDE)](http://www.freedownloadscenter.com/Programming/IDEs_and_Coding_Utilities/Visual_Pardigm_IDE_for_Java.html "Visual Paradigm Integrated Development Environment (VP-JIDE)") |
| [XEmacs](http://www.xemacs.org/ "XEmacs")  |

# Anexo II.- Conversión de tipos de datos en Java

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

[](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila_files/saved_resource "anexo_i_conversin_de_tipos_de_datos_en_java.html")

<table class="tabla" summary="Cuadro o tabla de diez filas por diez columnas, de título " tabla="" de="" conversión="" tipos="" datos="" primitivos",="" modo="" que="" para="" cada="" tipo="" dato="" origen="" se="" indica="" su="" a="" otro="" destino,="" y="" qué="" es="" la="" (ci:="" implícita,="" c:="" casting,="" n:="" no="" permitida).="" debe="" ser="" leída="" izquierda="" derecha="" arriba="" abajo,="" haciendo="" corresponder="" con="" destinto="" ver="" el="" aplicada="" entre="" ambos.="" "=""><tbody><tr><td rowspan=" 2" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;</td><th id="td" colspan="8">Tipo destino</th></tr><tr><th id="tdboolean" headers="td"><span style="font-size: medium;">boolean</span></th><th id="tdchar" headers="td"><span style="font-size: medium;">char</span></th><th id="tdbyte" headers="td"><span style="font-size: medium;">byte</span></th><th id="tdshort" headers="td"><span style="font-size: medium;">short</span></th><th id="tdint" headers="td"><span style="font-size: medium;">int</span></th><th id="tdlong" headers="td"><span style="font-size: medium;">long</span></th><th id="tdfloat" headers="td"><span style="font-size: medium;">float</span></th><th id="tddouble" headers="td"><span style="font-size: medium;">double</span></th></tr><tr><th id="to" rowspan="8">Tipo origen</th><th id="toboolean" headers="to" scope="row"><span style="font-size: medium;">boolean</span></th><td style="text-align: center;" headers="toboolean tdboolean"><abbr title="Mismo tipo.">-</abbr></td><td style="text-align: center;" headers="tochar tdchar"><abbr title="Conversión no permitida.">N</abbr></td><td style="text-align: center;" headers="tobyte tdbyte"><abbr title="Conversión no permitida.">N</abbr></td><td style="text-align: center;" headers="toshort tdshort"><abbr title="Conversión no permitida.">N</abbr></td><td style="text-align: center;" headers="toint tdint"><abbr title="Conversión no permitida.">N</abbr></td><td style="text-align: center;" headers="tolong tdlong"><abbr title="Conversión no permitida.">N</abbr></td><td style="text-align: center;" headers="tofloat tdfloat"><abbr title="Conversión no permitida.">N</abbr></td><td style="text-align: center;" headers="todouble tddouble"><abbr title="Conversión no permitida.">N</abbr></td></tr><tr><th headers="to" scope="row"><span style="font-size: medium;">char</span></th><td style="text-align: center;" headers="toboolean tdboolean"><abbr title="Conversión no permitida.">N</abbr></td><td style="text-align: center;" headers="tochar tdchar"><abbr title="Mismo tipo.">-</abbr></td><td style="text-align: center;" headers="tobyte tdbyte"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="toshort tdshort"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="toint tdint"><abbr title="Conversión implícita o automática.">CI</abbr></td><td style="text-align: center;" headers="tolong tdlong"><abbr title="Conversión implícita o automática.">CI</abbr></td><td style="text-align: center;" headers="tofloat tdfloat"><abbr title="Conversión implícita o automática.">CI</abbr></td><td style="text-align: center;" headers="todouble tddouble"><abbr title="Conversión implícita o automática.">CI</abbr></td></tr><tr><th headers="to" scope="row"><span style="font-size: medium;">byte</span></th><td style="text-align: center;" headers="toboolean tdboolean"><abbr title="Conversión no permitida.">N</abbr></td><td style="text-align: center;" headers="tochar tdchar"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="tobyte tdbyte"><abbr title="Mismo tipo.">-</abbr></td><td style="text-align: center;" headers="toshort tdshort"><abbr title="Conversión implícita o automática.">CI</abbr></td><td style="text-align: center;" headers="toint tdint"><abbr title="Conversión implícita o automática.">CI</abbr></td><td style="text-align: center;" headers="tolong tdlong"><abbr title="Conversión implícita o automática.">CI</abbr></td><td style="text-align: center;" headers="tofloat tdfloat"><abbr title="Conversión implícita o automática.">CI</abbr></td><td style="text-align: center;" headers="todouble tddouble"><abbr title="Conversión implícita o automática.">CI</abbr></td></tr><tr><th headers="to" scope="row"><span style="font-size: medium;">short</span></th><td style="text-align: center;" headers="toboolean tdboolean"><abbr title="Conversión no permitida.">N</abbr></td><td style="text-align: center;" headers="tochar tdchar"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="tobyte tdbyte"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="toshort tdshort"><abbr title="Mismo tipo.">-</abbr></td><td style="text-align: center;" headers="toint tdint"><abbr title="Conversión implícita o automática.">CI</abbr></td><td style="text-align: center;" headers="tolong tdlong"><abbr title="Conversión implícita o automática.">CI</abbr></td><td style="text-align: center;" headers="tofloat tdfloat"><abbr title="Conversión implícita o automática.">CI</abbr></td><td style="text-align: center;" headers="todouble tddouble"><abbr title="Conversión implícita o automática.">CI</abbr></td></tr><tr><th headers="to" scope="row"><span style="font-size: medium;">int</span></th><td style="text-align: center;" headers="toboolean tdboolean"><abbr title="Conversión no permitida.">N</abbr></td><td style="text-align: center;" headers="tochar tdchar"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="tobyte tdbyte"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="toshort tdshort"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="toint tdint"><abbr title="Mismo tipo.">-</abbr></td><td style="text-align: center;" headers="tolong tdlong"><abbr title="Conversión implícita o automática.">CI</abbr></td><td style="text-align: center;" headers="tofloat tdfloat"><abbr title="Conversión implícita o automática.">CI</abbr><abbr title="Una posible pérdida de datos.">*</abbr></td><td style="text-align: center;" headers="todouble tddouble"><abbr title="Conversión implícita o automática.">CI</abbr></td></tr><tr><th headers="to" scope="row"><span style="font-size: medium;">long</span></th><td style="text-align: center;" headers="toboolean tdboolean"><abbr title="Conversión no permitida.">N</abbr></td><td style="text-align: center;" headers="tochar tdchar"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="tobyte tdbyte"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="toshort tdshort"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="toint tdint"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="tolong tdlong"><abbr title="Mismo tipo.">-</abbr></td><td style="text-align: center;" headers="tofloat tdfloat"><abbr title="Conversión implícita o automática.">CI</abbr><abbr title="Una posible pérdida de datos.">*</abbr></td><td style="text-align: center;" headers="todouble tddouble"><abbr title="Conversión implícita o automática.">CI</abbr><abbr title="Una posible pérdida de datos.">*</abbr></td></tr><tr><th headers="to" scope="row"><span style="font-size: medium;">float</span></th><td style="text-align: center;" headers="toboolean tdboolean"><abbr title="Conversión no permitida.">N</abbr></td><td style="text-align: center;" headers="tochar tdchar"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="tobyte tdbyte"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="toshort tdshort"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="toint tdint"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="tolong tdlong"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="tofloat tdfloat"><abbr title="Mismo tipo.">-</abbr></td><td style="text-align: center;" headers="todouble tddouble"><abbr title="Conversión implícita o automática.">CI</abbr></td></tr><tr><th headers="to" scope="row"><span style="font-size: medium;">double</span></th><td style="text-align: center;" headers="toboolean tdboolean"><abbr title="Conversión no permitida.">N</abbr></td><td style="text-align: center;" headers="tochar tdchar"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="tobyte tdbyte"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="toshort tdshort"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="toint tdint"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="tolong tdlong"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="tofloat tdfloat"><abbr title="Casting de tipos o conversión explícita.">C</abbr></td><td style="text-align: center;" headers="todouble tddouble"><abbr title="Mismo tipo.">-</abbr></td></tr></tbody></table>

![Aula de informática con estudiante atento a las indicaciones del libro de texto y con el ordenador delante.](./recopila_files/20257__54_m_51.jpg "Aula de informática.")

[CC by-nc-sa](http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es "CC by-nc-sa") [ITE. Francisco Javier Martínez Adrados.](http://recursostic.educacion.es//bancoimagenes/ArchivosImagenes/DVD11/CD05/20257__54_m_51.jpg "ITE. Francisco Javier Martínez Adrados.")

Explicación de los símbolos utilizados:

- **N:** Conversión no permitida (un **boolean** no se puede convertir a ningún otro tipo y viceversa).
- **CI:** Conversión implícita o automática. Un asterisco indica que puede haber posible pérdida de datos.
- **C:** Casting de tipos o conversión explícita.
- \-: Mismo tipo. No hay que convertir nada.

El asterisco indica que puede haber **una posible pérdida de datos**, por ejemplo al convertir un número de tipo **int** que usa los 32 bits posibles de la representación, a un tipo **float**, que también usa 32 bits para la representación, pero 8 de los cuales son para el exponente.

En cualquier caso, las conversiones de números en coma flotante a números enteros siempre necesitarán un **casting**, y deberemos tener mucho cuidado debido a la pérdida de precisión que ello supone.

**Reglas de Promoción de Tipos de Datos.**

Cuando en una expresión hay datos o variables de distinto tipo, el compilador realiza la promoción de unos tipos en otros, para obtener como resultado el tipo final de la expresión. Esta promoción de tipos se hace siguiendo unas reglas básicas en base a las cuales se realiza esta promoción de tipos, y resumidamente son las siguientes:

- Si uno de los operandos es de tipo **double**, el otro es convertido a **double**.
- En cualquier otro caso:
    - Si uno de los operandos es **float**, el otro se convierte a **float.**
    - Si uno de los operandos es **long**, el otro se convierte a **long**.
    - Si no se cumple ninguna de las condiciones anteriores, (ningún operando es **double**, ni **float**, ni **long**) entonces ambos operandos son convertidos al tipo **int**.

| Conversiones de números en Coma flotante (float, `double`) a enteros (int) | Conversiones entre caracteres (char) y enteros (int) | Conversiones de tipo con cadenas de caracteres (String) |
| --- | --- | --- |
|
Cuando convertimos números en coma flotante a números enteros, la parte decimal se trunca (redondeo a cero). Si queremos hacer otro tipo de redondeo, podemos utilizar, entre otras, las siguientes funciones:

- **Math.round(numero):** Redondeo al siguiente número entero.
- **Math.ceil(numero):** El menor de los enteros que sigue siendo mayor o igual a numero.
- **Math.floor(numero):** El mayor de los enteros que sigue siendo inferior o igual a numero.

double numero=3.5;
x=Math.round(numero);    //  x = 4
y=Math.ceil(numero);     //  y = 4
z=Math.floor(numero);    //  z = 3

|

Como un tipo **char** lo que guarda en realidad es el código **Unicode** de un carácter, los caracteres pueden ser considerados como números enteros sin signo.

**Ejemplo:**

int numero;
char c;
numero = (int) 'A';          // numero = 65
c = (char) 65;               // c = 'A'
c = (char) ((int) 'A' + 1);  // c = 'B'

|

Para convertir cadenas de texto a otros tipos de datos se utilizan las siguientes funciones:

numero=Byte.parseByte(cadena);
numero=Short.parseShort(cadena);
numero=Integer.parseInt(cadena);
numero=Long.parseLong(cadena);
numero=Float.parseFloat(cadena);
numero=Double.parseDouble(cadena);

Por ejemplo, si hemos leído de teclado un número que está almacenado en una variable de tipo **String** llamada **cadena**, y lo queremos convertir al tipo de datos **byte**, haríamos lo siguiente:

byte n=Byte.parseByte(cadena);



|

# Anexo III.- Ejercicios resueltos

# Caso práctico

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Escribiendo sobre una pizarra blanca](./recopila_files/white-board-593300_640.jpg "Whiteboard")

[StartupStockPhotos](https://pixabay.com/es/photos/tablero-blanco-inicio-593300/ "Acceder a la web descarga de la imagen de StartupStockPhotos en Pixabay (se abre en una nueva ventana).") ([Licencia Pixabay](https://pixabay.com/es/service/license/ "Acceder a los términos de la Licencia Pixabay. (Se abre en una nueva ventana)"))

María y **Juan** han estado trabajando con **variables**, **tipos de datos** y **operadores**. Además también han **leído datos desde el teclado** y **mostrado información por pantalla**. Ahora necesitan practicar con todas esas herramientas para combinarlas y construir programas en Java que sirvan para resolver los distintos problemas con los que se van a tener que enfrentar.

Aún tienen pocas herramientas para trabajar, pero son suficientes como para plantear soluciones a pequeños problemas que tan solo requieran la aplicación de algunas fórmulas matemáticas. Ha llegado el momento de empezar a escribir programas en Java que pregunten por unos datos de entrada, se procesen esos datos y se muestren unos resultados de salida. Para ello van a utilizar la **plantilla genérica de programa en Java** que se les proporcionó en un apartado anterior. Te sugerimos que tú también lo hagas.

# Ejercicio 1: Palos de la baraja

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Ilustración con los cuatro ases de la baraja española: oros, copas, bastos, espadas](./recopila_files/cards-5206895_640.jpg "Naipes")

[kevberon](https://pixabay.com/es/photos/naipes-cartas-espa%C3%B1olas-casino-5206895/ "Acceder a la web de descarga de la imagen de kevberon en Pixabay (se abre en una nueva ventana)") ([Pixabay License](https://pixabay.com/es/service/license/ "Acceder a los términos de la Licencia Pixabay. (Se abre en una nueva ventana)"))

Escribe un pequeño programa en Java que defina un enumerado con los **nombres de los palos de la baraja española**: OROS, `COPAS`, BASTOS, `ESPADAS`, para posteriormente mostrar por pantalla cada valor del enumerado declarado.

La salida por pantalla podría ser algo así:

PALOS DE LA BARAJA ESPAÑOLA
---------------------------
Palo 1: OROS
Palo 2: COPAS
Palo 3: BASTOS
Palo 4: ESPADAS



# Retroalimentación

En este caso podemos considerar que ni siquiera vale la pena hacer la distinción entre los bloques de entrada de datos, procesamiento y salida de resultados, pues lo único que se hace es mostrar cada uno de los cuatro posibles valores del enum.

public class EjercicioPalosBaraja {

    public enum PaloBaraja {OROS, COPAS, ESPADAS, BASTOS};
     
    public static void main(String\[\] args) {
     
        PaloBaraja palo;
        
        System.out.println ("PALOS DE LA BARAJA ESPAÑOLA");
        System.out.println ("---------------------------");
        
        palo=PaloBaraja.OROS;
        System.out.println("Palo 1: " + palo);
        palo=PaloBaraja.COPAS;
        System.out.println("Palo 2: " + palo);
        palo=PaloBaraja.ESPADAS;
        System.out.println("Palo 3: " + palo);
        palo=PaloBaraja.BASTOS;
        System.out.println("Palo 4: " + palo);
    }  
}

# Ejercicio 2: Cálculos aritméticos

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Mosaico de fórmulas geométricas y físicas](./recopila_files/geometry-1044090_640.jpg "Cálculos")

[Gerd Altmann](https://pixabay.com/es/illustrations/geometr%C3%ADa-matem%C3%A1ticas-volumen-1044090/ "Acceder a la web de descarga de la imagen de Gerd Altmann en Pixabay (se abre en una nueva ventana)") ([Pixabay License](https://pixabay.com/es/service/license/ "Acceder a los términos de la Licencia Pixabay (Se abre en una nueva ventana)"))

Escribe un programa en Java que solicite dos **números reales** y lleve a cabo los siguientes cálculos:

- el doble del primer número,
- la mitad del segundo número,
- el cuadrado de la suma de ambos números,
- La décima parte de la suma los cuadrados de ambos números.

Para ello tendrás que utilizar **operadores aritméticos** tales como la suma, el producto o la división. Además, es posible que en algunos casos necesites hacer uso de los **paréntesis**.

Un ejemplo de ejecución del programa podría ser:

```markup
CÁLCULOS ARITMÉTICOS
--------------------
Introduzca dos números reales: 
Primer número: 2
Segundo número: 3

RESULTADO
---------
Doble del primer número: 4.0
Mitad del segundo número: 1.5
Cuadrado de la suma de ambos números: 25.0
Décima parte de la suma de los cuadrados de ambos números: 1.3
```

Otro ejemplo de ejecución podría ser:

```markup
CÁLCULOS ARITMÉTICOS
--------------------
Introduzca dos números reales: 
Primer número: 0
Segundo número: 1

RESULTADO
---------
Doble del primer número: 0.0
Mitad del segundo número: 0.5
Cuadrado de la suma de ambos números: 1.0
Décima parte de la suma de los cuadrados de ambos números: 0.1
```

Y otro ejemplo más:

```markup
CÁLCULOS ARITMÉTICOS
--------------------
Introduzca dos números reales: 
Primer número: -2
Segundo número: 2

RESULTADO
---------
Doble del primer número: -4.0
Mitad del segundo número: 1.0
Cuadrado de la suma de ambos números: 0.0
Décima parte de la suma de los cuadrados de ambos números: 0.8
```



# Retroalimentación

En este caso se trata de solicitar un par de números reales al usuario, los cuales se almacenarán en sendas variables (entrada de datos) y a continuación realizar una serie de cálculos aritméticos sencillos cuyos resultados podemos almacenar en otras variables (procesamiento). Finalmente mostraremos esos resultados por pantalla (salida de resultados).

Como variables de entrada podríamos usar algo del estilo a:

double numero1, numero2;

Y como variables de salida podríamos utilizar las siguientes:

double resultado1, resultado2, resultado3, resultado4;

Recuerda que **la elección de los nombres de las variables es un asunto importante**. En este caso no lo es especialmente, pues se trata de un ejemplo extremadamente sencillo. Pero si consideramos que el nombre de cada variable debe representar lo que almacena, también podríamos haber escogido nombres como  dobleNumero1, `mitadNumero2`, cuadradoSuma, `decimoSumaCuadrados`, etc.

Los cálculos que habría que realizar son:

resultado1= 2.0 \* numero1;
resultado2= numero2 / 2.0;
resultado3= (numero1 + numero2) \* (numero1 + numero2);
resultado4= (numero1\*numero1 + numero2\*numero2) / 10.0;

Si utilizamos nuestra plantilla de programa, la solución al ejercicio podría quedar de la siguiente manera:

import java.util.Scanner;

public class CalculosAritmeticos {

    public static void main(String\[\] args) {

        //----------------------------------------------
        //          Declaración de variables 
        //----------------------------------------------

        // Constantes

        
        // Variables de entrada
        double numero1, numero2;
        
        // Variables de salida
        double resultado1, resultado2, resultado3, resultado4;

        // Variables auxiliares

        // Clase Scanner para petición de datos de entrada
        Scanner teclado= new Scanner (System.in);
        
        
        //----------------------------------------------
        //                Entrada de datos 
        //----------------------------------------------
        System.out.println("CÁLCULOS ARITMÉTICOS");
        System.out.println("--------------------");
        System.out.println("Introduzca dos números reales: ");
        System.out.print("Primer número: ");
        numero1= teclado.nextDouble();
        System.out.print("Segundo número: ");
        numero2= teclado.nextDouble();
        
        //----------------------------------------------
        //                 Procesamiento 
        //----------------------------------------------
        
        // Primer cálculo: doble del primer número
        resultado1= 2.0 \* numero1;
        
        // Segundo cálculo: mitad del segundo número
        resultado2= numero2 / 2.0;

        // Tercer cálculo: cuadrado de la suma
        resultado3= (numero1 + numero2) \* (numero1 + numero2);
        
        // Cuarto cálculo: décima parte de la suma de los cuadrados
        resultado4= (numero1\*numero1 + numero2\*numero2) / 10.0;
        
        //----------------------------------------------
        //              Salida de resultados 
        //----------------------------------------------
        System.out.println ();
        System.out.println ("RESULTADO");
        System.out.println ("---------");
        System.out.println ("Doble del primer número: " + resultado1);
        System.out.println ("Mitad del segundo número: " + resultado2);
        System.out.println ("Cuadrado de la suma de ambos números: " + resultado3);
        System.out.println ("Décima parte de la suma de los cuadrados de ambos números: " + resultado4);
                
        System.out.println ();
        System.out.println ("Fin del programa. Bye!");        
    }    
}

# Ejercicio 3: Cambio de unidades

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Fragmento de cinta métrica con divisiones en centímetro y pulgadas](./recopila_files/320px-Inch_tape.jpg "Cinta métrica")

[MJCdetroit](https://commons.wikimedia.org/wiki/File:Inch_tape.jpg "Acceder a la web descarga de la imagen de MJCdetroit en Wiki Commons (se abre en una nueva ventana).") (Dominio público)

El **Sistema Internacional de Unidades** (SI, del francés Le Système International d’Unités) está constituido por siete unidades básicas: amperio, kelvin, segundo, metro, kilogramo, candela y mol, además de unidades derivadas, prefijos para denotar múltiplos y submúltiplos de las unidades y reglas para escribir el valor de las magnitudes.

Por otro lado, el **sistema anglosajón de unidades** es un conjunto de unidades de medida diferentes a las del sistema métrico decimal, que se utilizan actualmente como medida principal en los Estados Unidos, el Reino Unido y en algunos territorios históricamente vinculados a estos dos países.

A nuestro equipo de desarrollo le han propuesto que implemente un pequeño programa para **transformar longitudes medidas en el sistema internacional a submúltiplos de éstas así como también al sistema anglosajón**.

Lo primero que nos han pedido es la transformación de una **longitud dada en metros** (introducida desde teclado) a:

- decímetros, centímetros y milímetros (sistema internacional);
- pulgadas, yardas y pies (sistema anglosajón de unidades).

Para ello hay que tener en cuenta que:

1. en el sistema métrico decimal, un decímetro es la décima parte de un metro (diez decímetros hacen un metro), un centímetro es la centésima parte de un metro (cien centímetros hacen un metro) y un milímetro es la milésima parte de un metro (mil milímetros hacen un metro);
2. en el sistema anglosajón, 1 pulgada = 2,54 cm, 1 pie = 12 pulgadas y una yarda = 3 pies.

Escribe un programa en Java que lea de teclado una longitud en metros y muestra esa misma medida en:

- decímetros, centímetros y milímetros (sistema internacional);
- pulgadas, yardas y pies (sistema anglosajón de unidades).

Un ejemplo de una posible salida por pantalla del programa podría ser:

Introduzca la longitud en metros que desea transformar: 0,5
RESULTADO
---------

SISTEMA INTERNACIONAL
---------------------
La medida 0.5 en metros son:
5.0 decímetros
50.0 centímetros
500.0 milímetros

SISTEMA ANGLOSAJÓN
------------------
La medida 0.5 en metros son:
19.68503937007874 pulgadas
1.6404199475065617 pies
0.5468066491688539 yardas



# Retroalimentación

La implementación de este programa de transformación consiste básicamente en realizar seis conjuntos de operaciones matemáticas, una para cada transformación:

import java.util.Scanner;

public class CambioUnidades {

    public static void main(String\[\] args) {

        //----------------------------------------------
        //          Declaración de variables 
        //----------------------------------------------
        // Constantes
        // Variables de entrada
        double metros;

        // Variables de salida
        double decimetros, centimetros, milimetros;
        double pulgadas, pies, yardas;

        // Variables auxiliares
        // Clase Scanner para peticióde datos
        Scanner teclado = new Scanner(System.in);

        //----------------------------------------------
        //                Entrada de datos 
        //----------------------------------------------
        System.out.println("TRANSFORMACIÓN DE UNIDADES");
        System.out.println("--------------------------");
        System.out.println(" ");
        System.out.print("Introduzca la longitud en metros que desea transformar: ");
        metros = teclado.nextDouble();

        //----------------------------------------------
        //                 Procesamiento 
        //----------------------------------------------
        // Sistema Internacional
        decimetros = metros \* 10;
        centimetros = metros \* 100;
        milimetros = metros \* 1000;

        // Sistema anglosajón
        pulgadas = metros \* 100 / 2.54;
        pies = pulgadas / 12;
        yardas = pies / 3;

        //----------------------------------------------
        //              Salida de resultados 
        //----------------------------------------------
        System.out.println();
        System.out.println("RESULTADO");
        System.out.println("---------");
        System.out.println();
        System.out.println("SISTEMA INTERNACIONAL");
        System.out.println("---------------------");
        System.out.println("La medida " + metros + " en metros son:");
        System.out.println(decimetros + " decímetros");
        System.out.println(centimetros + " centímetros");
        System.out.println(milimetros + " milímetros");

        System.out.println();
        System.out.println("SISTEMA ANGLOSAJÓN");
        System.out.println("------------------");
        System.out.println("La medida " + metros + " en metros son:");
        System.out.println(pulgadas + " pulgadas");
        System.out.println(pies + " pies");
        System.out.println(yardas + " yardas");

        System.out.println();
        System.out.println("Fin del programa. Bye!");
    }
}

# Ejercicio 4: Volumen de una pirámide

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Imagen que muestra una pirámide marcando la altura y la base.](./recopila_files/Pyramid_(geometry).png "Imagen de una pirámide.")

[Sebbe.wigmo](https://commons.wikimedia.org/wiki/File:Pyramid_\(geometry\).png "Acceder a la web descarga de la imagen de Sebbe.wigmo en Wikimedia Commons (se abre en una nueva ventana).") (Dominio público)

El **volumen de una pirámide** se calcula con la siguiente fórmula:

![Volumen es igual a un tercio del area de la base por la altura.](./recopila_files/eXe_LaTeX_math_0.gif)

En la fórmula anterior, **B** corresponde con el área de la base y **h** corresponde con la altura de la pirámide. Crea un programa que, dado el tamaño del lado de la base **L** y la altura **h**, calcule el volumen.

Nota: ten en cuenta que la base (**B**) es un cuadrado, por lo que primero deberás calcular el area **B** partiendo del tamaño del lado (**L**).

![Pirámide de Keops, Egipto.](./recopila_files/320px-Kheops-Pyramid.jpg "Pirámide de Keops")

[Nina](https://commons.wikimedia.org/wiki/File:Kheops-Pyramid.jpg "Acceder a la web descarga de la imagen de Nina en Wikie Commons (se abre en una nueva ventana).") ([CC BY-SA](http://creativecommons.org/licenses/?lang=es "Acceder a los términos de la licencia Creative Commons BY-SA (se abre en una nueva ventana)."))


Escribe un programa en Java que solicite la **altura** y la **longitud del lado** (en metros) de una **pirámide de base cuadrángular** y calcule su **volumen** en metros cúbicos.

Después de realizar ese cálculo, muestra **a cuántas piscinas olímpicas equivale dicho volumen**, teniendo en cuenta que una piscina olímpica tiene 2500 metros cúbicos.

Aquí tienes un ejemplo de ejecución (los datos corresponden con la actual pirámide de Keops o Khufu):

Introduce la altura de la pirámide (metros): 137
Introduce la longitud del lado de la base (metros): 227
Volumen de la pirámide: 2353157.6666666665 metros cúbicos.
Equivale aproximadamente a 941 piscinas olímpicas.



# Retroalimentación

Nuestro programa debe aplicar las anteriores expresiones matemáticas:

areaBase= lado \* lado;                  // Cálculo del área de la base
volumen= (1.0/3.0) \* areaBase \* altura; // Cálculo del volumen
equivalencia= (int) (volumen/2500);     // Cálculo de la equivalencia en piscinas olímpìcas

Además de eso, tendrá que solicitar por teclado la altura y la longitud del lado de la base, así como realizar los cálculos intermedios necesarios y mostrar los resultados por pantalla.

Si utilizamos nuestra plantilla de programa, la solución al ejercicio podria quedar de la siguiente manera:

import java.util.Scanner;

public class EjercicioVolumenPiramide {

    public static void main(String\[\] args) {

        //----------------------------------------------
        //          Declaración de variables 
        //----------------------------------------------

        // Constantes


        // Variables de entrada
        double altura;
        double lado;
        
        // Variables de salida
        double volumen;		
        int equivalencia;

        // Variables auxiliares
        double areaBase;

        // Clase Scanner para petición de datos de entrada
        Scanner teclado= new Scanner (System.in);        
        
        //----------------------------------------------
        //                Entrada de datos 
        //----------------------------------------------
        System.out.println("VOLUMEN DE PIRÁMIDE");
        System.out.println("-------------------");
        
        System.out.print("Introduce la altura de la pirámide (metros): ");
        altura=teclado.nextDouble();

        System.out.print("Introduce la longitud del lado de la base (metros): ");
        lado=teclado.nextDouble();
        
        //----------------------------------------------
        //                 Procesamiento 
        //----------------------------------------------
        areaBase= lado \* lado;                  // Cálculo del área de la base
        volumen= (1.0/3.0) \* areaBase \* altura; // Cálculo del volumen
        equivalencia= (int)(volumen/2500);      // Cálculo de la equivalencia en piscinas olímpìcas
        
        //----------------------------------------------
        //              Salida de resultados 
        //----------------------------------------------       
        System.out.println ();
        System.out.println ("RESULTADO");
        System.out.println ("---------");
        System.out.println("Volumen de la pirámide: " + volumen + " metros cúbicos.");
        System.out.println("Equivale aproximadamente a " + equivalencia + " piscinas olímpicas.");
                
        System.out.println ();
        System.out.println ("Fin del programa. Bye!");
    }    
}

# Ejercicio 5: Análisis de un número

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Listas de números en vertical en fósforo verde con fondo negro, estilo Matrix](./recopila_files/matrix-3109378_640.jpg "Números")

[Jae Rue](https://pixabay.com/es/illustrations/matriz-tecnolog%C3%ADa-de-datos-3109378/ "Acceder a la web de descarga de la imagen de Jae Rue en Pixabay (se abre en una nueva ventana)") ([Pixabay License](https://pixabay.com/es/service/license/ "Acceder a los términos de la Licencia Pixabay (Se abre en una nueva ventana)"))

Escribe un programa en Java que solicite un **número entero** (sin decimales) y lo analice averiguando lo siguiente:

- si es cero,
- si es positivo,
- si es menor que cien,
- si es par.

Para ello tendrás que utilizar **operadores relacionales** tales como igual (==), menor que (<), mayor que (<code>>), etc. Ten en cuenta que el resultado de la aplicación de estos operadores es un valor de tipo boolean, es decir un valor que será true o `false`.

Recuerda también que un **número es par si es divisible entre dos**, es decir, si el resto de la división entera de ese número entre dos es cero. En Java dispones del operador **módulo** (**%**) para calcular el resto de la división entera.

Un ejemplo de ejecución del programa podría ser:

```markup
ANÁLISIS DE UN NÚMERO
---------------------
Introduzca un número entero: 17

RESULTADO
---------
El número es cero: false
El número es positivo: true
El número es es menor que 100: true
El número es par: false
```

Otro ejemplo de ejecución podría ser:

```markup
ANÁLISIS DE UN NÚMERO
---------------------
Introduzca un número entero: 0

RESULTADO
---------
El número es cero: true
El número es positivo: false
El número es es menor que 100: true
El número es par: true
```

Y otro ejemplo más:

```markup
ANÁLISIS DE UN NÚMERO
---------------------
Introduzca un número entero: 100

RESULTADO
---------
El número es cero: false
El número es positivo: true
El número es es menor que 100: false
El número es par: true
```



# Retroalimentación

En este caso se trata de analizar distintas posibles circunstancias que podrían darse con un número que es introducido desde teclado (si es igual a cero, si es positivo, si es menor que cien, etc.). Para ello utilizaremos los operadores relacionales (mayor, menor, igual, etc.), cuya evaluación devolverá un valor lógico (true o `false`). Para almacenar ese resultado podríamos utilizar variables de tipo boolean:

boolean esCero, esPositivo, esMenor100, esPar;

Y los cálculos o comprobaciones que habría que realizar serían:

numero==0;
numero>0;
numero<100;
numero % 2 == 0;

Recuerda que la manera más sencilla de saber si un número es par es comprobando si el resto de su división entre dos es o no cero.

Los resultados de esas comprobaciones (true o `false`) se almacenan como valores logicos o boolean en variables de tipo lógico o boolean.

esCero= numero==0;
esPositivo= numero>0;
esMenor100= numero<100;
esPar= numero % 2 == 0;

Si unimos todo en un programa utilizando nuestra plantilla estándar con entrada de datos, procesamiento y salida de resultados podríamos tener algo así:

import java.util.Scanner;

public class AnalisisNumero {

    public static void main(String\[\] args) {

        //----------------------------------------------
        //          Declaración de variables 
        //----------------------------------------------

        // Constantes


        // Variables de entrada
        int numero;
        
        // Variables de salida
        boolean esCero, esPositivo, esMenor100, esPar;

        // Variables auxiliares

        // Clase Scanner para petición de datos de entrada
        Scanner teclado= new Scanner (System.in);
        
        
        //----------------------------------------------
        //                Entrada de datos 
        //----------------------------------------------
        System.out.println("ANÁLISIS DE UN NÚMERO");
        System.out.println("---------------------");
        System.out.print("Introduzca un número entero: ");
        numero= teclado.nextInt();
        
        //----------------------------------------------
        //                 Procesamiento 
        //----------------------------------------------
        
        // Cálculo de los resultados lógicos
        esCero= numero==0;
        esPositivo= numero>0;
        esMenor100= numero<100;
        esPar= numero % 2 == 0;
        
        //----------------------------------------------
        //              Salida de resultados 
        //----------------------------------------------
        System.out.println ();
        System.out.println ("RESULTADO");
        System.out.println ("---------");
        System.out.println ("El número es cero: " + esCero);
        System.out.println ("El número es positivo: " + esPositivo);
        System.out.println ("El número es es menor que 100: " + esMenor100);
        System.out.println ("El número es par: " + esPar);
                
        System.out.println ();
        System.out.println ("Fin del programa. Bye!");        
    }    
}

# Ejercicio 6: Estilos de natación

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Imagen de un nadador en una piscina](./recopila_files/swimming-78112_640.jpg "Natación")

[David Mark](https://pixabay.com/es/photos/nataci%C3%B3n-nadador-mujeres-carrera-78112/ "Acceder a la web descarga de la imagen de David Mark en Pixabay (se abre en una nueva ventana).") ([Licencia Pixabay](https://pixabay.com/es/service/license/ "Acceder a los términos de la Licencia Pixabay. (Se abre en una nueva ventana)"))


Un nadador entrena en la piscina haciendo **un largo de ida a estilo crol**, **un largo de vuelta a estilo espalda**, y así sucesivamente.

Escribe un programa en Java que solicite al usuario la **cantidad de largos que ha recorrido el nadador** y **la longitud de la piscina** en la que ha entrenado (en metros).

El programa debe calcular e indicar: la **cantidad total de metros que ha nadado en cada estilo** así como la **longitud total que ha recorrido nadando** (en kilómetros).

**Ejemplo de ejecución 1**: se han nadado 47 largos en una piscina de 25 metros.


- En tal caso el programa debería indicar que se han nadado 600 metros a crol y 575 metros a espalda, de un total de 1,175 kilómetros.


**Ejemplo de ejecución 2**: se han nadado 100 largos en una piscina de 15,2 metros.


- En tal caso el programa debería indicar que se han nadado 760 metros a crol y 760 metros a espalda, de un total de 1,52 kilómetros.



# Retroalimentación

Para resolver este problema lo primero que debemos hacer es **calcular cuántos largos se han nadado a cada estilo**. En principio sería algo tan simple con dividir por dos la cantidad total de largos. Dado que se trata numeros enteros (cantidad de largos) la división será entera. Ahora bien, tenemos un problema si el número de largos ha sido impar.

Imagina por ejemplo que se han hecho tres largos. En tal caso sabemos que se ha hecho uno de ida a crol, uno de vuelta a espalda y otro de ida a crol, y nos hemos salido de la piscina. Eso significa que si dividimos el total de largos (tres) entre dos, obtendríamos un largo a crol y un largo a espalda. Pero nos falta un largo (el último largo de ida a crol). ¿Cómo podríamos obtenerlo? Sería simplemente lo que "sobra" de la división entera (el **resto** de la división entera). Ese resto puede calcularse en Java mediante el **operador módulo** (%). Por tanto tendríamos:

- número de largos nadados a crol = largos totales / 2 + largos totales % 2 (la mitad más el posible resto),
- número de largos nadados a espalda= largos totales / 2 (la mitad).

En cuanto al cálculo de las distancias se trataría simplemente de multiplicar la cantidad de largos por la distancia de la pisicina usando los multiplicadores o divisores adecuados.

Por ejemplo, **47 largos en una piscina de 25 metros**:

- largos nadados a crol = 47 / 2 + 47 % 1 = 23 + 1 = 24 largos,
- largos nadados a espalda= 47 / 2 = 23 largos,
- distancia (metros) nadada a crol = 24 × 25 = 600 metros,
- distancia (metros) nadada a espalda= 47 / 2 = 23 × 25 = 575 metros,
- distancia (kilómeros) total = 47 × 25 / 1000 = 1,175 kilómetros.

Esos mismos cálculos (algoritmo) serán los que tendrá que realizar nuestro programa:

import java.util.Scanner;

public class EjercicioNadador1 {
public static void main(String\[\] args) {

        //----------------------------------------------
        //          Declaración de variables 
        //----------------------------------------------
        // Constantes
        // (no hay constantes en este programa)
        
        // Variables de entrada
        int largosTotales;
        double longitudPiscina;
        
        // Variables de salida
        double distanciaCrol, distanciaEspalda; // En metros
        double distanciaTotal;  // En kilómetros

        // Variables auxiliares
        int largosCrol, largosEspalda;
        
        // Clase Scanner para peticióde datos
        Scanner teclado = new Scanner(System.in);

        //----------------------------------------------
        //                Entrada de datos 
        //----------------------------------------------
        System.out.println("ENTRENAMIENTO DE NATACIÓN");
        System.out.println("-------------------------");
        System.out.println(" ");
        System.out.print("Introduzca el número total de largos realizados: ");
        largosTotales = teclado.nextInt();
        System.out.print("Introduzca la longitud de la piscina: ");
        longitudPiscina = teclado.nextDouble();

        //----------------------------------------------
        //                 Procesamiento 
        //----------------------------------------------
        // Cálculo de la cantidad de largos de cada estilo
        largosCrol    = largosTotales / 2 + largosTotales % 2;
        largosEspalda = largosTotales / 2;
        
        //´Cálculo de la distancia en cada estilo (en metros)
        distanciaCrol   = largosCrol    \* longitudPiscina;
        distanciaEspalda= largosEspalda \* longitudPiscina;
        
        // Cálculo de la distancia total (en kilómetros)
        distanciaTotal = largosTotales \* longitudPiscina / 1000;
        
        
        //----------------------------------------------
        //              Salida de resultados 
        //----------------------------------------------
        System.out.println();
        System.out.println("RESULTADO");
        System.out.println("---------");
        System.out.println();
        System.out.println("DISTANCIAS RECORRIDAS");
        System.out.println("---------------------");
        System.out.println("Distancia recorrida a crol (metros): " + distanciaCrol);
        System.out.println("Distancia recorrida a espalda (metros): " + distanciaEspalda);
        System.out.println("Distancia total recorrida (kilómetros): " + distanciaTotal);

        System.out.println();
        System.out.println("Fin del programa. Bye!");
    }
}

Tras una semana de entrenamiento, nuestro nadador ha cambiado su rutina haciendo **un largo de ida a estilo crol**, **un largo de vuelta a estilo espalda**, **un largo de ida a estilo braza** y **de nuevo vuelta a estilo espalda**, y así sucesivamente.

Amplía el programa anterior para que calcule e indique nuevamente la **cantidad total de metros que ha nadado en cada estilo** y la **longitud total que ha recorrido nadando** (en kilómetros) teniendo en cuenta que ahora hay **tres estilos diferentes**.



# Retroalimentación

Si el número de largos nadados es un múltiplo de cuatro (4, 8, 12, 16, etc.) el cálculo es nuevamente muy sencillo: **la mitad de los largos serán a espalda**, **una cuarta parte a crol** y **la otra cuarta parte a braza**. El problema lo tenemos cuando la cantidad de largos no sea múltiplo de cuatro. Volvemos a tener nuevamente el problema de los restos.

Analicemos cada caso posible y saquemos conclusiones:

1. En el caso de los largos a **espalda**, siempre serán la **mitad** de los realizados (cociente de la división entera entre dos).
2. En el caso de **crol**, sabemos que **cada cuatro largos uno será a crol** (cociente de la división entera entre cuatro) y **si se realiza una serie de menos de cuatro largos el primero será a crol**. Por tanto si el resto de la división es mayor que cero, habrá que sumar ese largo adicional.
3. En el caso de **braza**, sabemos también que **cada cuatro uno será de espalda** (cociente de la división entera entre cuatro) y que **si se realiza una serie final de tres largos, ése último largo de la serie sería de espalda**.

Ejemplos:

| Total largos | Crol | Espalda | Braza | Espalda | Crol | Espalda | Braza | Espalda | Total Crol | Total Espalda | Total Braza |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | ********√******** |  |  |  |  |  |  |  | 1/4+1=**1** | 1/2=**0** | 1/4+0=**0** |
| 2 | ****√**** | ****√**** |  |  |  |  |  |  | 2/4+1=**1** | 2/2=**1** | 2/4+0=**0** |
| 3 | **√** | **√** | **√** |  |  |  |  |  | 3/4+1=**1** | 3/2=**1** | 3/4+1=**1** |
| 4 | ****√**** | ****√**** | ****√**** | ****√**** |  |  |  |  | 4/4+0=**1** | 4/2=**2** | 4/4+0=**1** |
| 5 | **√** | **√** | **√** | **√** | **√** |  |  |  | 5/4+1=**2** | 5/2=**2** | 5/4+0=**1** |
| 6 | ****√**** | ****√**** | ****√**** | ****√**** | ****√**** | **√** |  |  | 6/4+1=**2** | 6/2=**3** | 6/4+0=**1** |
| 7 | **√** | **√** | **√** | **√** | **√** | **√** | **√** |  | 7/4+1=**2** | 7/2=**3** | 7/4+1=**2** |
| 8 | ****√**** | ****√**** | ****√**** | ****√**** | ****√**** | ****√**** | ****√**** | **√** | 8/4+0=**2** | 8/2=**4** | 8/4+0=**2** |

¿Cómo podemos calcular esos "+1" que a veces hay que sumar al resultado de dividir entre cuatro? Podemos volver a usar el resto de la división entera.

En el caso de **crol** sería cuestión de obtener el **resto de dividir entre cuatro** (largosTotales % 4), y sabemos que **si se obtiene una cantidad mayor que cero (1, 2 o 3) entonces además hay que sumar uno**. Para ello podríamos usar el **operador condicional** (?). Si el resto de la división es mayor que cero, sumamos uno:

largosCrol = largosTotales / 4 + (largosTotales % 4 > 0 ? 1 : 0);

En el caso de **braza** podríamos hacer algo similar pero teniendo en cuenta que tendríamos **un largo de braza adicional si el resto de la división es tres**:

largosBraza = largosTotales / 4 + (largosTotales % 4 == 3 ? 1 : 0);

De esta manera, la forma de calcular el número de largos de cada estilo quedaría así:

// Cálculo de la cantidad de largos de cada estilo
largosCrol    = largosTotales / 4 + (largosTotales % 4 > 0  ? 1 : 0);
largosBraza   = largosTotales / 4 + (largosTotales % 4 == 3 ? 1 : 0);
largosEspalda = largosTotales / 2;

No olvides poner el cálculo del posible resto entre paréntesis porque **el operador condicional (?) tiene menor prioridad que los aritméticos** y se haría la suma antes que la resolución de la condición.

El resto del programa sería prácticamente igual y no vale la pena repetirlo.

# Ejercicio 7: Cuadernos de colores

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Cuaderno con páginas de colores](./recopila_files/time-682333_640.png "Cuaderno")

[849356](https://pixabay.com/es/illustrations/tiempo-libreta-de-direcciones-682333/) ([Licencia Pixabay](https://pixabay.com/es/service/license/ "Acceder a los términos de la Licencia Pixabay. (Se abre en una nueva ventana)"))


Una factoría papelera confecciona **cuadernos** en los que se van alternando hojas de color **rojo**, **verde** y **azul**. Siempre se comienza por el color rojo, siguiéndole el verde, luego el azul y comenzando nuevamente con el rojo.

Por ejemplo, si un cuaderno está compuesto por **100 hojas**, **34 serían de color rojo**, **33 de color verde** y **33 de color azul**.

Sin embargo, si el cuaderno tuviera **200 hojas**, **67 serían de color rojo**, **67 de color verde** y **66 de color azul**.

Por otro lado, si el cuaderno tuviera **201 hojas**, **67 serían rojas**, **67 verdes** y **67 azules**.

Escribe un programa en Java que solicite por teclado el **número de hojas del cuaderno** y calcule y muestre por pantalla la **cantidad de hojas que contiene de cada color**.



# Retroalimentación

Sabemos que cada **tres hojas se repiten consecutivamente los colores** rojo, verde y azul. Por tanto, **cada paquete de tres hojas implica una hoja de cada uno de estos colores**. Eso significa que si la cantidad de hojas fuera múltiplo de tres, podríamos obtener la cantidad de hojas de cada color mediante el cociente de la división entera entre tres. Ahora bien, **si la cantidad de hojas no es múltiplo de tres**, habrá un **desfase de una hoja roja** (+1) adicional o bien de **una hoja roja** (+1) y **otra verde** (+1) adicionales.

¿Cómo calculamos ese posible "desfase" de hojas adicionales? Ya lo hemos hecho en otras ocasiones usando el **operador módulo** (%, resto de la división entera).

Para el caso de las hojas **azules**, sabemos que nunca habrá desfase respecto a la división entre tres:

Cantidad de hojas azules= hojas totales / 3

Para el caso de las hojas **rojas**, podemos calcular el desfase de hojas mediante el operador módulo (una hoja adicional si el resto de la división entera es mayor que cero) combinado con el **operador condicional** (?):

Cantidad de hojas rojas = hojas totales / 3 + \[ 1 si (hojas totales % 3) > 0 \]

Eso en Java podríamos codificarlo como: hojasRojas = hojasTotales / 3 + (hojasTotales % 3 > 0 ? 1 : 0)

En el caso de las hojas **verdes**, podemos hacer algo similar: (si el resto de la división entera es mayor que uno)

Cantidad de hojas verdes = hojas totales / 3 + \[ 1 si (hojas totales % 3) > 1 \]

Codificado en Java quedaría como: hojasVerdes = hojasTotales / 3 + (hojasTotales % 3 > 1 ? 1 : 0)

Por tanto, el programa podría quedar finalmente así:

import java.util.Scanner;

public class EjercicioCuadernoTresColores {

    public static void main(String\[\] args) {

        //----------------------------------------------
        //          Declaración de variables 
        //----------------------------------------------

        // Constantes


        // Variables de entrada
        int hojasTotales;
        
        // Variables de salida
        int hojasRojas, hojasVerdes, hojasAzules;


        // Variables auxiliares


        // Clase Scanner para petición de datos de entrada
        Scanner teclado= new Scanner (System.in);        
        
        //----------------------------------------------
        //                Entrada de datos 
        //----------------------------------------------
        System.out.println("CUADERNOS DE COLORES");
        System.out.println("--------------------");
        System.out.println(" ");
        
        System.out.print ("Introduce la cantidad de hojas del cuaderno: ");
        hojasTotales= teclado.nextInt();
        
        //----------------------------------------------
        //                 Procesamiento 
        //----------------------------------------------
        hojasRojas=   hojasTotales / 3 + (hojasTotales % 3 > 0 ? 1 : 0);
        hojasVerdes=  hojasTotales / 3 + (hojasTotales % 3 > 1 ? 1 : 0);
        hojasAzules=  hojasTotales / 3;
        
        //----------------------------------------------
        //              Salida de resultados 
        //----------------------------------------------       
        System.out.println ();
        System.out.println ("RESULTADO");
        System.out.println ("---------");
        System.out.println ("Cantidad total de hojas del cuaderno: " + hojasTotales);
        System.out.println ("Cantidad de hojas rojas: "  + hojasRojas);
        System.out.println ("Cantidad de hojas verdes: " + hojasVerdes);
        System.out.println ("Cantidad de hojas azules: " + hojasAzules);
                
        System.out.println ();
        System.out.println ("Fin del programa. Bye!");
        
        
    }

}

# Ejercicio 8: Concurso de TV

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

![Concurso de TV](./recopila_files/320px-Milonario_El_Salvador.jpg "Concurso")

[Idea SV](https://commons.wikimedia.org/wiki/File:Milonario_El_Salvador.jpg "Acceder a la web descarga de la imagen de Idea SV en Wiki commons (se abre en una nueva ventana).") ([CC BY-SA](http://creativecommons.org/licenses/?lang=es "Acceder a los términos de la licencia Creative Commons BY-SA (se abre en una nueva ventana)."))


Para un concurso de TV se solicitan personas cuyo **nombre comience y termine por la misma letra**, y además sus apellidos tengan la misma cantidad de letras.

Escribe un programa en Java que reciba como entradas el **nombre**, el **primer apellido** y el **segundo apellido** de una persona y muestre por pantalla:

- "_La persona es APTA para el concurso_" si es apta para participar en el concurso.
- "_La persona es NO APTA para el concurso_" si no lo es.

La **primera letra del nombre y de los apellidos debe escribirse en mayúscula** y **el resto en minúscula**. No se admiten acentos ni eñes.

Aquí tienes algunos ejemplos de funcionamiento:

1. AnaTorres Barros. Persona APTA para participar en el concurso.
2. Luis Zagal Hegel. Persona NO APTA para participar en el concurso.
3. Orlando Bisbal Torzal. Persona APTA para participar en el concurso.
4. Nanin Torres Manzano. Persona no APTA para participar en el concurso.



# Retroalimentación

Lo primero que tendrás que hacer será leer el **nombre** y los **dos apellidos**. Podrías usar tres variables String nombre, `apellido1` y apellido2.

Para resolver el problema debes llevar a cabo una serie de comprobaciones:

- La primera comprobación que debemos hacer es si **el nombre comienza y termina por la misma letra**:
    - La primera letra la podremos obtener con nombre.charAt(0).
    - La última la podemos obtener con nombre.chartAt(nombre.length()-1).
    - Debes tener en cuenta que los caracteres de una cadena se cuentan desde 0 hasta la longitud menos uno.
    - También debes tener en cuenta que para convertir una letra minúscula en su equivalente en mayúscula debes "restarle" a su código la diferencia o distancia que hay entre los códigos de las mayúsculas y las minúsculas, que puedes calcular como final char DISTANCIA= 'a' - 'A'. Hay que restar porque las minúsculas están después (son "mayores" o tienen un código mayor) que las mayúsculas (tienen un código más bajo o menor).
    - La comprobación quedaría entonces como nombre.charAt(0) + DISTANCIA == nombre.charAt(nombre.length()-1). Podríamos almacenar el resultado de esa comprobación en una variable boolean llamada por ejemplo nombreApto.
- La segunda comprobación es **si la longitud de los apellidos es la misma**: apellido1.length() == apellido2.length(). Podríamos almacenar el resultado de esa comprobación en otra variable boolean llamada por ejemplo apellidosAptos.
- Una vez que tenemos las dos comprobaciones, sabemos que ambas tienen que ser true. Podemos almacenar ese resultado en una tercera variable:
    - concursanteApto= nombreApto && apellidosAptos.

En función de que el valor de concursanteApto sea true o `false` habrá que devolver "APTA" o "NO APTA":

resultado= concursanteApto ? "APTA" : "NO APTA";

Una vez tenido todo esto en cuenta, el programa completo podría quedar así:

import java.util.Scanner;

public class Concurso {

    public static void main(String\[\] args) {

        //----------------------------------------------
        //          Declaración de variables 
        //----------------------------------------------

        // Constantes
        final char DISTANCIA= 'a' - 'A';

        // Variables de entrada
        String nombre, apellido1, apellido2;
        
        // Variables de salida
        String resultado;


        // Variables auxiliares
        boolean nombreApto, apellidosAptos, concursanteApto;
        
        
        // Clase Scanner para petición de datos de entrada
        Scanner teclado= new Scanner (System.in);
        
        
        //----------------------------------------------
        //                Entrada de datos 
        //----------------------------------------------
        System.out.println("CONCURSO DE TV");
        System.out.println("--------------");
        System.out.println();
        System.out.println("Nombre del concursante: ");
        nombre= teclado.nextLine();
        System.out.println("Primer apellido del concursante: ");
        apellido1= teclado.nextLine();
        System.out.println("Segundo apellido del concursante: ");
        apellido2= teclado.nextLine();

        
        //----------------------------------------------
        //                 Procesamiento 
        //----------------------------------------------
        
        nombreApto= nombre.charAt(0) + DISTANCIA == nombre.charAt(nombre.length()-1);
        apellidosAptos= apellido1.length() == apellido2.length();
        concursanteApto= nombreApto && apellidosAptos;
        
        resultado= concursanteApto ? "APTA" : "NO APTA";
        
        //----------------------------------------------
        //              Salida de resultados 
        //----------------------------------------------        
        System.out.println ();
        System.out.println ("RESULTADO");
        System.out.println ("---------");
        System.out.println ("La persona es " + resultado + " para el concurso.");
        
        System.out.println ();
        System.out.println ("Fin del programa. Bye!");
    }    
}

# Condiciones y términos de uso de los materiales

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

**Materiales desarrollados inicialmente por el Ministerio de Educación, Cultura y Deporte y actualizados por el profesorado de la Junta de Andalucía bajo licencia Creative Commons BY-NC-SA.**

**![Logotipos del Ministerio de Educación, Cultura y Deporte, Junta de Andalucía y licencia Creative Commons](./recopila_files/img_para_licencias.png)**

Antes de cualquier uso leer detenidamente el siguente [Aviso legal](https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/aviso_legal/aviso_legal_mjda/index.html "Enlace externo, se accede al aviso legal de los materiales")

[Ocultar](https://educacionadistancia.juntadeandalucia.es/formacionprofesional/blocks/recopila/recopila.php?id=4043&dopt=1# "Ocultar")

[Ocultar](https://apuntes-daw.javiergutierrez.trade/programacion/ut1/recopila.html# "Ocultar")

### Historial de actualizaciones

| Versión: 02.03.02 | Fecha de actualización: 21/09/22 |
| --- | --- |
| Actualización de materiales y correcciones menores. |

| Versión: 02.03.00 | Fecha de actualización: 30/06/21 | Autoría: Diosdado Sánchez Hernández |
| --- | --- | --- |
|
**Ubicación:** 4.- Ciclo de vida del software  
**Mejora (tipo 1):** Dejar el pdf sobre los ciclos de vida del software en un Para saber más, pues se trata de contenidos que no están en la orden ( Orden de 16 de junio de 2011, por la que se desarrolla el currículo correspondiente al título de Técnico Superior en Desarrollo de Aplicaciones Web (págs. 121 a 124 del BOJA).).  
Eliminar el iDevice de autoevaluación que pregunta sobre los distintos tipos de ciclo de vida del software (modelos incremental, en cascada, etc.) por la misma razón: pues se trata de contenidos que no están en la orden.

**Ubicación:** 10.2, 10.4  
**Mejora (tipo 2):** Sustituir las capturas de pantalla de Netbeans con codigo de ejemplo y enlace a un proyecto por código o en contenedor con  
sintaxis resaltada en colores y un contenedor con fondo negro con el resultado.  
En 10.2: eliminar las referencias a explicaciones sobre System.out, println, comentarios, etc. Pueden confundir más que aclarar.  
En 10.2: añadir un reflexiona donde se indique que el tipo referenciado en el ejemplo proporcionado es la variable mesaje y es de tipo String  
(hacer referencia a las mayúsculas).  
En 10.4: eliminar referencias a secuencias de escape y el uso de println. Ya se verá más adelante.  
En 10.4: se hace referencia a Dias como una variable cuando en realidad es un tipo enum que se ha declarado.

**Ubicación:** 9.4.1, 12.1, 12.2, 12.3, 12.4, 12.7  
**Mejora (tipo 2):** Sustituir las capturas de pantalla de Netbeans con código de ejemplo y enlace a un proyecto por código o en contenedor con  
sintaxis resaltada en colores y un contenedor con fondo negro con el resultado.  
Además, en 12.7 cambiar el uso de printf por println, pues aún no se ha explicado el uso de printf (se explica en la unidad 3).

**Ubicación:** 12.8.- Precedencia de operadores  
**Mejora (tipo 2):** En el ejercicio resuelto, incluir un contenedor con fondo oscuro con el resultado de lo que debería dar el programa.

**Ubicación:** Anexo III.- Ejercicios resueltos  
**Mejora (tipo 2):** Añadir más ejercicios resueltos basándonos en los ejercicios de la tarea 1 del curso 2020/21.

**Ubicación:** 7.1.- Estructura de un programa  
**Mejora (tipo 2):** \- Procurar evitar en lo máximo posible las referencias a la terminología orientada a objetos (clase, método, etc.)  
para evitar confusiones, pues hasta la unidad 3 no se va a utilizar ese tipo de nomenclatura. Dejar únicamente  
las referencias imprescindibles indicando que más adelante se explicará detalladamente lo que significan esos  
conceptos. Mientras tanto, utilizar términos más comunes como elemento, mecanismo, herramienta, utilidad, etc.  
\- Sustituir la pregunta de autoevaluación por otra que no incluya terminología de POO (clases, métodos, etc.). No  
es el momento. Podemos hacer referencia a esa terminología en la realimentación si se considera necesario, pero  
no en la pregunta, pues el alumnado aún no está preparado para distinguir los conceptos de clase, objeto, método, etc.

**Ubicación:** Anexo II.- Conversión de tipos de datos en Java  
**Mejora (tipo 1):** Cambiar el formato del código fuente de ejemplo - Incluir contenedor y resaltar sintaxis, lenguaje Java, fondo claro.

**Ubicación:** Anexo III.- Ejercicios resueltos  
**Mejora (tipo 1):** En cada ejercicio resueltos, modificar el texto de cabecera Ejercicio resuelto por nombres más explícitos. Por ejemplo:  
Ejercicio 1: Volumen de una pirámide, Ejercicio 2: Cambio de unidades, Ejercicio 3: Estilos de natación, etc.

**Ubicación:** 7.5.1.- Estandarización del código  
**Mejora (tipo 1):** 1\. Restructurar en bloques de texto libre más pequeños e incluir un iDevice Destacado para indicar que tampoco hay que ser excesivamente rígidos y que dependiendo de la naturaleza y la complejidad del programa es posible  
que en ocasiones que algunas las esas partes se puedan unir.  
2\. Quitar el Bye! del modelo de plantilla del programa (tanto en el texto integrado como en el archivo descargable).  
3\. Eliminar referencias a la herramienta Netbeans. Aún no se ha visto. Se puede hacer referencia a un editor de textos genérico.

**Ubicación:** 7.5.- Codificación, compilación y ejecución de aplicaciones.  
**Mejora (tipo 1):** En el ejemplo resuelto:  
Utilizar el formato con fondo negro para los ejemplos de las órdenes que se ejecutan en cmd y así representar  
mejor la consola (Insertar HTML como texto - Incluir contenedor y resaltar sintaxis, fondo oscuro)  
Usarlo también para el ejemplo de código (usando los colores: fondo claro, lenguaje Java)

**Ubicación:** Apartados: 1/3/4/4.1  
**Mejora (tipo 1):** No se abren apropiadamente las imágenes al ampliarlas. Modificar la propiedad “Destino” del hipervínculo al valor “Abrir en ventana nueva”

**Ubicación:** 12.3.- Operadores de relación.  
**Mejora (tipo 1):** En la solución propuesta al primer ejercicio del apartado hay una errata.  
Donde pone boolean b=xz;  
debería poner boolean b=xz;

|

| Versión: 02.02.00 | Fecha de actualización: 26/06/20 | Autoría: José Javier Bermúdez Hernández |
| --- | --- | --- |
|
**Ubicación:** En toda la unidad  
**Mejora (tipo 2):** Quitar las referencias a pseudocódigo, para ajustar mejor el tamaño de la unidad a las horas disponibles. Estos contenidos sobre pseudocódigo con el tiempo se ha demostrado que han ido perdiendo utilidad práctica para el alumnado, y parece que distraen más que ayudan.

**Ubicación:** Anexo III  
**Mejora (tipo 1):** Ejercicios resueltos

**Ubicación:** Anexo II  
**Mejora (tipo 1):** Revisar al final del apartado, en la parte de la Tabla sobre otras consideraciones con los Tipos de Datos, en la columna Conversiones de números en Coma flotante (float, double) a enteros (int) pone que Math.round(numero): Redondeo al siguiente número entero. eso no es así, redondea al siguiente número entero siempre que la parte decimal sea igual o mayor a 5, si no redondea al anterior número entero.

**Ubicación:** 12.4.- Operadores lógicos.  
**Mejora (tipo 1):** En el segundo ejercicio resuelto , el supuesto C16 debería poner false, y pone true: b=x2x3 || x2>x1 || c2==c1; //true (solo la última condición no se cumple)

**Ubicación:** 7.1  
**Mejora (tipo 1):** Tanto la imagen, como en la primera viñeta de la lista ponía Clase\_Principal cuando realmente debería poner ClasePrincipal.

**Ubicación:** 8.2 hasta 8.5  
**Mejora (tipo 2):** Revisar y modificar apartados 8.2 a 8.5 para actualizar NetBeans a la versión que corresponda.

**Ubicación:** 7.2  
**Mejora (tipo 2):** Añadir OpenJDK y actualizar JDK de Oracle por la versión que corresponda

**Ubicación:** 5.4  
**Mejora (tipo 1):** Cambiar enlace del debes conocer, que ya o funciona.

**Ubicación:** Nodo pseudocódigo  
**Mejora (Mapa conceptual):** Eliminar el nodo de pseudocódigo puesto que se quita de los contenidos lo que quedaba de este aspecto.

**Ubicación:** Actualizado índice e introducción referente a la eliminación del pseudocódigo  
**Mejora (Orientaciones del alumnado):** Actualizado índice e introducción referente a la eliminación del pseudocódigo

**Ubicación:** Actualizar ìndice por anexo de ejercicios resueltos  
**Mejora (Orientaciones del alumnado):** Actualizar ìndice por anexo de ejercicios resueltos

|

| Versión: 02.01.00 | Fecha de actualización: 02/10/18 | Autoría: José Javier Bermúdez Hernández |
| --- | --- | --- |
|
**Ubicación:** Sección 9. Creación de mi primer programa  
**Mejora (tipo 2):** En realidad no es exactamente Creación de mi primer programa. Ya se han hecho pequeños ejemplos de programas elementales en secciones anteriores. Se trata de una introducción al pseudocódigo que incluye incluso estructuras de control, cuando aún no se había hablado de ello. Las estructuras de control, que se ven en Java, se estudian en la unidad siguiente.  
Se propone reconventir este apartado en un anexo sobre pseudocódigo para aquéllos que tengan mayor dificultad a la hora de entender algunos conceptos básicos de programación.  
Se recomienda cambiar los ejemplos que aparecen para que puedan probarse con la aplicación PSeInt. Pero dejar claro que se trata de algo opcional.

**Ubicación:** Sección 7.5.1  
**Mejora (tipo 1):** Cuando se habla de Solución a posibles problemas con la codificación de caracteres acentuados se indica que se seleccione oem 850 como juego de caracteres en la codificación para el Notepad++. Eso va a dar problemas con las vocales acentuadas.  
Hay que proponer otra codificación (por ejemplo ISO-8859-1) para el Notepad++ o bien alguna otra solución (por ejemplo cambiar la codificación en la consola de Windows con chcp -> por ejemplo chcp 65001 o algo que tenga sentido y sea fácil de explicar a un alumno de este nivel, sin entrar en las complejidades de los códigos Unicode o las extensiones heredadas de los ASCII extendidos de antes).

**Ubicación:** Sección 8.3  
**Mejora (tipo 1):** Se dice que la ultima versión del programa NetBeans es la 8.1 de noviembre 2015, cuando ahora mismo, la ultima versión de Oracle es la 8.2, de octubre de 2016. Y además ya está desde julio 2018 la versión 9, responsabilidad ya de Apache.

**Ubicación:** Renumerado el índice  
**Mejora (Orientaciones del alumnado):** Se ha cambiado el apartado de Pseudocódig que se va ahora al final de la unidad, como Anexo III

|

| Versión: 02.00.00 | Fecha de actualización: 28/06/16 | Autoría: José Javier Bermúdez Hernández |
| --- | --- | --- |
|
**Ubicación:** Toda la unidad  
**Mejora (tipo 1):** La unidad 1 pasa a llamarse: Unidad 1. Introducción a la programación.  
El módulo se queda por tanto con 10 unidades.

**Ubicación:** Toda la unidad  
**Mejora (tipo 3):** Se unifica la actual unidad 1 y 2

**Ubicación:** 8.5.1  
**Mejora (tipo 1):** Cuando explica como cambiar el juego de caracteres en notepad++, pone  
Europa Oriental/OEM 850.  
Y seria:  
Europa occidental/OEM 850.

**Ubicación:** 9.5  
**Mejora (tipo 1):** Segunda presentaqión en Debes de conocer del apartado 9.5. no tiene la opción de presentación de pantalla completa para poder ver en completo la diapositiva

**Ubicación:** Introducción del tema. Caso práctico  
**Mejora (tipo 1):** Eliminar el comentario de que Juan hizo DAI hace 4 años (ya que ese plan se extinguió, eliminar el tiempo que hace que lo estudió)

|

| Versión: 01.01.00 | Fecha de actualización: 30/10/13 | Autoría: José Javier Bermúdez Hernández |
| --- | --- | --- |
| Cambios menores: arreglo de erratas, enlaces caídos, actualizar presentaciones y textos a las nuevas versiones de JDK y NetBeans a fecha 30 de Septiembre de 2013. |

| Versión: 01.00.00 | Fecha de actualización: 30/10/13 |
| --- | --- |
| Versión inicial de los materiales. |
