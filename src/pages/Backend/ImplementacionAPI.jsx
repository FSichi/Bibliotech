import { controllerFile, exampleRoutes, indexFile, indexFileRoutes, initialPackaje, installLibraries, newPackaje, serviceFile, startServer } from "../../assets/code/APIExample"
import { MarkedText } from "../../components/PageComponents/Articles/MarkedText"
import { ParagrafComponent } from "../../components/PageComponents/Articles/Paragraf"
import { SubTitle } from "../../components/PageComponents/Articles/SubTitle"
import { Title } from "../../components/PageComponents/Articles/Title"
import { Separator } from "../../components/PageComponents/Separator"
import { ShowCode, ShowCodeJavaScript } from "../../components/PageComponents/ShowCode"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { ContentSidebarContainer, ContentSidebarItemSubTitle, ContentSidebarItemTitle } from "../../components/Sidebar/ContentSidebar"
import { PageContainer } from "../PageContainer"

export const ImplementacionAPI = () => {
    return (
        <PageContainer titlePage={'ImplementacionAPI'} pageContent={<Content />} sidebarContent={<SidebarContent />} />
    )
}

const Content = () => {
    return (
        <article className="md:text-justify">

            <TitlePage sectionTitle={'Backend'} pageTitle={'Implementacion de una API'} />

            <div className="mt-4 mr-10" id="about">

                <Title title={'Sobre este articulo'} />

                <ParagrafComponent>
                    En el mundo del desarrollo de aplicaciones, la creación de una API sólida y eficiente es esencial para proporcionar una comunicación fluida entre el servidor y el cliente.
                    Node.js y Express son dos tecnologías populares que nos permiten construir APIs robustas y escalables de manera sencilla.
                </ParagrafComponent>

                <ParagrafComponent>
                    En este artículo, exploraremos cómo implementar una API utilizando Node.js y Express, centrándonos en una metodología de desarrollo que sigue las mejores prácticas y
                    fomenta la organización y mantenimiento del código. Nos enfocaremos en el patrón de diseño de rutas, controladores y servicios, una estrategia que divide las diferentes
                    capas de nuestra aplicación para mejorar la legibilidad, facilitar la reutilización y permitir un desarrollo más eficiente.
                </ParagrafComponent>

                <ParagrafComponent>
                    A lo largo de este articulo, aprenderemos cómo establecer rutas para manejar diferentes peticiones HTTP, cómo separar la lógica de negocio en controladores y cómo
                    implementar servicios para encapsular operaciones más complejas. Este enfoque modular y escalable nos permitirá desarrollar APIs más coherentes y flexibles,
                    facilitando así el mantenimiento y la adición de nuevas características en el futuro.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="servidor">

                <Title title={'Crear Servidor Node Js'} />

                <ParagrafComponent>
                    Antes de comenzar a definir nuestras APIs debemos crear un servidor NodeJs con Express para escuchar las peticiones, que sea funcional. Para ello, lo primero que vamos a hacer
                    es crear una carpeta en algun directorio para almacenar alli los archivos de nuestro servidor. A esta carpeta pueden nombrarla por ejemplo de la siguiente manera
                    <span className="text-sky-400 font-semibold"> {`'NodeJs-Server-Example'`}.</span>
                </ParagrafComponent>

                <ParagrafComponent>
                    Una vez tengamos nuestra carpeta lo siguiente que vamos a hacer es abrir una terminal de comandos como el powershell, cmd de windows o similares y nos situaremos en la carpeta
                    que creamos anteriormente.
                </ParagrafComponent>

                <ParagrafComponent classNameCustom="mb-4">
                    Con la terminal apuntando hacia nuestro directorio, vamos a introducir el siguiente comando:
                </ParagrafComponent>

                <ShowCode code={'npm init'} />

                <ParagrafComponent classNameCustom="mb-4">
                    A continuacion, la terminal va a comenzar a crear el archivo packaje.json. En este proceso ira guiandonos solicitandonos cierta informacion como el nombre del proyecto
                    (En este caso pueden introducir algo como nodejs-server-example), luego la version, descripcion, autor y demas cuestiones. Lo unico obligatorio es el nombre del paquete, en lo demas
                    pueden presionar la tecla {`'Intro'`} para saltear estos pasos. Una vez que la terminal finalice su trabajo, veremos que en la carpeta del proyecto se creo un archivo packaje.json.
                    Este deberia verse algo similar a esto:
                </ParagrafComponent>

                <ShowCode code={initialPackaje} />

                <ParagrafComponent classNameCustom="mb-4">
                    A continuacion, van a incorporar 2 comandos dentro del arreglo de scripts de su packaje.json. Su fichero deberia verse de la siguiente manera:
                </ParagrafComponent>

                <ShowCode code={newPackaje} />

                <SubTitle text={'Instalacion de dependencias'} customClass="mt-6" id="dependencias"/>

                <ParagrafComponent classNameCustom="mb-4">
                    Para poder crear nuestro servidor de Node Js, necesitamos incorporar ciertas librerias que nos brinden las funcionalidades que requerimos para nuestro proyecto. Utilizando la terminal de
                    su editor de codigo o cualquier terminal del sistema (Recordar que debemos estar situados en el directorio del proyecto) vamos a agregar las siguientes librerias.
                </ParagrafComponent>

                <ShowCode code={installLibraries} />

                <ParagrafComponent classNameCustom="mb-4">
                    Estas Librerias nos brindaran todas las herramientas que necesitamos para poder inicializar nuestro proyecto NodeJs basico para implementar una API de ejemplo. Para finalizar vamos a asegurarnos
                    de que NodeJs cuenta con todas las librerias y herramientas necesarias correctamente instaladas, para eso utilizamos el siguiente comando:
                </ParagrafComponent>

                <ShowCode code={'npm install'} />

                <SubTitle text={'Servidor Node Js + Express Funcional'} customClass="mt-6" id="funcional"/>

                <ParagrafComponent>
                    Por ultimo, una vez finalizada la configuracion inicial del proyecto y finalizada la correcta instalacion de las librerias que necesitamos, simplemente queda el paso final,
                    el cual consiste en crear un archivo index.js que cree el metodo para inicializar nuestro servidor Node Js.
                </ParagrafComponent>

                <ParagrafComponent classNameCustom="mb-4">
                    En el directorio que crearon van a crear un nuevo archivo llamado index.js y van a incluir el siguiente fragmento de codigo:
                </ParagrafComponent>

                <ShowCodeJavaScript code={indexFile} />

                <ParagrafComponent classNameCustom="mb-4">
                    Eso es todo, ahora tienen configurado lo necesario para inicializar su servidor NodeJs para comenzar a establecer APIs para sus proyectos!. Si desean probar su servidor simplemente tienen
                    que utilizar cualquiera de los 2 siguientes comandos. Con el primero inicializan su servidor por medio de nodemonJs, el cual escucha los cambios que realicemos
                    en el codigo en tiempo real, para no tener que estar relanzando nuestro servidor. El segundo comando inicializa el servidor en el estado actual, eso quiere decir que si hacemos algun cambio
                    en algun archivo, debemos reiniciar el servidor lanzando este comando nuevamente.
                </ParagrafComponent>

                <ShowCode code={startServer} />

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="ruta">

                <Title title={'Establecer una Ruta'} />

                <ParagrafComponent>
                    Una vez configurado nuestro servidor, tenemos todo lo necesario para poder crear una API de ejemplo. En primer lugar necesitamos crear la ruta con la cual podremos
                    comunicarnos y acceder a la informacion de la API.
                </ParagrafComponent>

                <ParagrafComponent classNameCustom="mb-4">
                    Lo primero que debemos hacer es crear una carpeta llamada  <MarkedText text={`'routes'`} /> en el directorio raiz del proyecto. A continuacion dentro de dicha carpeta crearemos un archivo llamado
                    <MarkedText text={`'ExampleRoutes.js'`} /> a continuacion te dejo un fragmento de codigo del archivo Example:
                </ParagrafComponent>

                <ShowCodeJavaScript code={exampleRoutes} />

                <ParagrafComponent>
                    Este archivo posee una ruta de ejemplo, de tipo GET, que retorna todos los clientes de una base de datos cualquiera. Como pueden observar, sobre la ruta existe un comentario que indica la
                    finalidad de la ruta, esa es una buena practica a la hora de desarrollar.
                </ParagrafComponent>

                <ParagrafComponent classNameCustom="mb-4">
                    Como pueden ver, la url que establecimos para esta ruta es {`'/'`}. Lo que debemos hacer ahora es establecer en nuestro index, el archivo de rutas que creamos aqui para que el
                    servidor sea capaz de administrarlo. Es por esto que dentro de nuestro index.js debemos agregar un par de lineas de codigo, quedando de la siguiente manera.
                </ParagrafComponent>

                <ShowCodeJavaScript code={indexFileRoutes} />

                <ParagrafComponent>
                    Aqui agregamos el fichero de rutas que creamos previamente para que nuestro servidor sea capaz de administrarlo. Como pueden observar la direccion para acceder al conjunto de rutas que declaremos
                    en ExampleRoutes es {`'/example'`}, por lo que si creasemos una nueva ruta que tenga la direccion {`'/getcliente'`} por ejemplo, para acceder a la misma deberiamos utilizar la ruta:
                    <MarkedText text={`'/example/getcliente'`} />
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="controlador">

                <Title title={'Crear Controlador'} />

                <ParagrafComponent>
                    Si fueron observadores vieron que cuando creamos nuestro archivo de rutas, habia una linea que importaba un controlador y luego, dentro de la ruta, llamaba un metodo de dicho controlador.
                    Vamos a crearlo a continuacion.
                </ParagrafComponent>

                <ParagrafComponent classNameCustom="mb-4">
                    En nuestro directorio raiz vamos a crear una carpeta llamada <MarkedText text={`'controllers'`} /> y dentro de dicha carpeta crearemos un archivo llamado
                    <MarkedText text={`'RouteController.js'`} /> A continuacion adjunto el framento de codigo de dicho controlador:
                </ParagrafComponent>

                <ShowCodeJavaScript code={controllerFile} />

                <ParagrafComponent>
                    El fragmento de código es un ejemplo de un controlador en una aplicación Node.js que utiliza Express para manejar las solicitudes HTTP. El controlador se encarga de manejar la lógica de negocio
                    para obtener una lista de clientes y responder a las solicitudes con la lista de clientes obtenida desde el servicio correspondiente.
                </ParagrafComponent>

                <ParagrafComponent>
                    En la primera línea, importamos el módulo <MarkedText text={`'ExampleService'`} /> desde el directorio {`'services'`} de nuestra aplicación. Esto permite que el controlador utilice funciones y lógica
                    específica para obtener los datos necesarios.
                </ParagrafComponent>

                <ParagrafComponent>
                    La función <MarkedText text={`'getAllClientes'`} /> es el controlador que maneja la solicitud HTTP para obtener todos los clientes. Utilizamos la palabra clave <MarkedText text={`'async'`} /> para
                    permitir el uso de <MarkedText text={`'await'`} /> dentro del bloque de código, lo que nos permite manejar operaciones asíncronas de manera más limpia.
                </ParagrafComponent>

                <ParagrafComponent>
                    Dentro del bloque <MarkedText text={`'try'`} />, llamamos a la función <MarkedText text={`'getAllClientes()'`} /> del servicio ExampleService utilizando await. Esto nos permite esperar a que la
                    función se resuelva antes de continuar con la ejecución del código. Si la obtención de la lista de clientes es exitosa, respondemos al cliente con un objeto que contiene un estado de {`"OK"`}
                    y la lista de clientes obtenida del servicio.
                </ParagrafComponent>

                <ParagrafComponent>
                    En caso de que ocurra algún error durante la ejecución de la función, capturamos el error en el bloque <MarkedText text={`'catch'`} /> y respondemos al cliente con un estado de error y un objeto que
                    contiene detalles del error. Si el error tiene un código de estado específico, lo utilizamos; de lo contrario, se utiliza el código de estado 500 (Internal Server Error). También enviamos un mensaje
                    de error si está disponible o simplemente el propio error.
                </ParagrafComponent>

                <ParagrafComponent>
                    Finalmente, exportamos la función getAllClientes para que pueda ser utilizada por otros módulos de nuestra aplicación (En nuestro caso el fichero de Rutas), como las rutas que manejan las solicitudes HTTP.
                    Esto permite que otros módulos accedan a la lógica del controlador y la utilicen según sea necesario, lo que facilita la organización y reutilización del código en nuestra aplicación.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="servicio">

                <Title title={'Crear Servicio'} />

                <ParagrafComponent>
                    Por ultimo debemos crear el Servicio que contiene la logica de acceso a la base de datos de nuestro Servidor, de esta manera podemos dividir la logica de acceso a datos de la logica de negocios y, en caso de
                    que en un futuro decidiesemos cambiar de tecnologia de Base de datos, simplemente deberiamos actualizar el controlador, pero la logica de todo lo demas estaria correctamente dividida y actualizada.
                </ParagrafComponent>

                <ParagrafComponent>
                    A continuacion adjunto un fragmento de codigo de ejemplo para el servicio de ejemplo.
                </ParagrafComponent>

                <ShowCodeJavaScript code={serviceFile} />

                <ParagrafComponent>
                    Este fragmento de código es parte de un módulo que proporciona un servicio para obtener una lista de clientes desde una base de datos. Para lograr esto, el código utiliza un modelo de base de datos llamado
                    {`"Clientes"`} que es importado desde el directorio {`"database/clients".`}
                </ParagrafComponent>

                <ParagrafComponent>
                    La función <MarkedText text={`'getAllClientes'`} /> es una función asíncrona que se encarga de obtener todos los clientes desde la base de datos. Dentro del bloque try, utilizamos la función
                    <MarkedText text={`'findAll()'`} /> del modelo Clientes, que es una función proporcionada por alguna biblioteca o ORM (Mapeo Objeto-Relacional) utilizada en el proyecto. La función
                    <MarkedText text={`'findAll()'`} /> generalmente se utiliza para buscar todos los registros en una tabla específica de la base de datos.
                </ParagrafComponent>

                <ParagrafComponent>
                    Al utilizar <MarkedText text={`'await'`} /> en la llamada a Clientes.findAll(), le indicamos a JavaScript que espere hasta que la operación de búsqueda se complete antes de continuar con la ejecución del código.
                    Esto es necesario ya que las operaciones de bases de datos son asíncronas y, utilizando await, evitamos el uso de callbacks o promesas encadenadas, lo que hace que el código sea más legible y fácil de entender.
                </ParagrafComponent>

                <ParagrafComponent>
                    Si la operación de búsqueda tiene éxito, la variable <MarkedText text={`'listOfClientes'`} /> contendrá una matriz de objetos que representan a los clientes encontrados en la base de datos. Luego, la función
                    <MarkedText text={`'getAllClientes'`} /> devuelve esta lista de clientes.
                </ParagrafComponent>

                <ParagrafComponent>
                    En caso de que ocurra algún error durante la operación de búsqueda, el código captura el error en el bloque <MarkedText text={`'catch'`} />. Cuando esto sucede, se lanza un nuevo objeto de error que contiene un
                    código de estado 500 (Internal Server Error) y un mensaje de error que recibimos de la base de datos.
                </ParagrafComponent>

                <ParagrafComponent>
                    Finalmente, exportamos la función <MarkedText text={`'getAllClientes'`} /> para que pueda ser utilizada por otros módulos en nuestra aplicación. De esta manera, otros módulos, como el <MarkedText text={`'controlador'`} />
                    que vimos en el ejemplo anterior, pueden acceder a esta función y obtener la lista de clientes desde la base de datos.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="aclaraciones">

                <Title title={'Aclaraciones Finales'} />

                <ParagrafComponent>
                    Como pueden observar con los ejemplos anteriores, la logica para crear una API es muy sencilla. Simplemente debemos crear la ruta para ser consumida por el cliente, posteriormente definir un controlador,
                    encargado de manejar toda la logica de negocios de nuestra aplicacion y por ultimo crear un servicio encargado unicamente de la llamada a la base de datos para obtener la informacion.
                </ParagrafComponent>

                <ParagrafComponent>
                    Con este tipo de Arquitectura de Capas (Ruta - Controlador - Servicio), obtenemos como resultado un codigo super eficiente y modular, capaz de modificarse o expandirse sin problemas en caso de actualizacion
                    de requerimientos.
                </ParagrafComponent>

                <ParagrafComponent>
                    Por ultimo, existen otros metodos para definir las rutas que va a consumir nuestro servidor. El que proporcione en este ejemplo es muy basico y existen mejores soluciones, pero mas complejas. Es por esto que
                    en un inicio podrian trabajar de esta manera, pero a futuro seria muy recomendable que creen un index de rutas especifico para que este consuma las mismas y enviarlo como una request en el index.js del proyecto,
                    de esta manera nos evitamos el tener que definir todas las rutas individualmente en el archivo principal.
                </ParagrafComponent>

                <ParagrafComponent>
                    (Mas Adelante, se agregara esto y muchos mas tips en el articulo de <MarkedText text={`'Consejos de optimizacion'`} /> de la seccion Backend).
                </ParagrafComponent>

            </div>

        </article>
    )
}

const SidebarContent = () => {
    return (
        <ContentSidebarContainer>
            <ul>
                <ContentSidebarItemTitle title={'Sobre este Articulo'} id={'about'} customClassname="mt-8" />
                <ContentSidebarItemTitle title={'Crear Servidor NodeJs'} id={'servidor'} />

                <ContentSidebarItemSubTitle title={'Instalacion de dependencias'} id={'dependencias'} />
                <ContentSidebarItemSubTitle title={'Servidor Node Js + Express Funcional'} id={'funcional'} />

                <ContentSidebarItemTitle title={'Establecer una Ruta'} id={'ruta'} />
                <ContentSidebarItemTitle title={'Crear Controlador'} id={'controlador'} />
                <ContentSidebarItemTitle title={'Crear Servicio'} id={'servicio'} />
                <ContentSidebarItemTitle title={'Aclaraciones Finales'} id={'aclaraciones'} />
            </ul>
        </ContentSidebarContainer>
    )
}
