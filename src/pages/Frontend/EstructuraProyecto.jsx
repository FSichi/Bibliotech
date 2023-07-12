import { Separator } from "../../components/PageComponents/Separator"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { PageContainer } from "../PageContainer"
import estructuraImg from '../../assets/img/estructuraProyecto.png';

export const EstructuraProyecto = () => {
    return (
        <PageContainer titlePage={'EstructuraFrontend'} pageContent={<EstructuraContent />} sidebarContent={<EstructuraSidebar />} />

    )
}

const EstructuraContent = () => {
    return (
        <article className="md:text-justify">

            <TitlePage sectionTitle={'Frontend'} pageTitle={'Estructura de un proyecto'} />

            <div className="mt-4 mr-10" id="about">
                <h1 className="text-3xl text-white">Sobre este articulo</h1>
                <h2 className="text-slate-400 mt-4">
                    En el desarrollo de aplicaciones web con React, una de las prácticas fundamentales es establecer una estructura de carpetas adecuada para organizar el código
                    de manera eficiente y escalable. En este artículo, exploraremos en detalle la estructura de un proyecto React y profundizaremos en la utilidad de cada una de las
                    carpetas que lo componen.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    Una estructura de carpetas bien definida nos permite mantener nuestro código modular, separando las diferentes responsabilidades y facilitando la colaboración
                    entre los miembros del equipo. Además, proporciona una manera clara de ubicar y acceder a los diferentes componentes, estilos, imágenes y otros recursos utilizados
                    en la aplicación.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    A lo largo de este artículo, exploraremos las carpetas esenciales de un proyecto React y describiremos su propósito y utilidad. Veremos cómo organizar nuestros
                    componentes, estilos, pruebas, archivos de configuración y otros elementos importantes para el desarrollo de una aplicación React robusta y mantenible.
                </h2>
            </div>

            <Separator />

            <div className="mt-4 mr-10" id="resumen">
                <h1 className="text-3xl text-white">Resumen de Estructura</h1>
                <h2 className="text-slate-400 mt-4">
                    Es necesario aclarar que esta estructura es la que yo utilizo. Esto no quiere decir que lo que yo hago esta bien o mal, simplemente sigo un estandar al
                    que ya me acostumbre. Segun el desarrollador las estructuras varian, por lo que busca la estructura que mejor se adecue a tus necesidades y te sientas comodo
                    con ella.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    A continuacion adjuntare una imagen con la estructura que utilice para crear esta Bilioteca digital a modo de ejemplo.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    Nota: Antes de que te preguntes por que mis carpetas tienen iconos en VSCode, yo utilizo la extension llamada {`' Material Icon Theme '`}
                </h2>

                <img
                    className="w-4/12 rounded-lg mx-auto bg-slate-800 p-1 mt-5"
                    src={estructuraImg} alt="Profile Pic"
                />

            </div>

            <Separator />

            <h1 className="text-3xl text-white" id="detalle">Detalle de Estructura</h1>

            <div className="mt-4 mr-10" id="node">
                <h1 className="text-2xl text-white">node_modules</h1>
                <h2 className="text-slate-400 mt-4">
                    La carpeta node_modules es generada automáticamente por npm (Node Package Manager) o yarn para almacenar todas las dependencias y paquetes de terceros utilizados en el
                    proyecto. Aquí se encuentran todas las bibliotecas y módulos externos que has instalado mediante npm o yarn.
                </h2>
            </div>

            <div className="mt-4 mr-10" id="public">
                <h1 className="text-2xl text-white">public</h1>
                <h2 className="text-slate-400 mt-4">
                    La carpeta public contiene los archivos estáticos que se servirán directamente al navegador sin ningún procesamiento por parte de Webpack o Vite. Aquí puedes colocar archivos
                    HTML, imágenes, fuentes u otros recursos estáticos. Por ejemplo, puedes colocar tu archivo index.html principal en esta carpeta.
                </h2>
            </div>

            <div className="mt-4 mr-10" id="src">
                <h1 className="text-2xl text-white">src</h1>
                <h2 className="text-slate-400 mt-4">
                    La carpeta src es el corazón de tu proyecto. Aquí es donde resides la mayor parte del código fuente de tu aplicación React. Contiene los componentes, estilos, datos, enrutamiento y
                    otros archivos necesarios para construir tu aplicación.
                </h2>
            </div>

            <div className="mt-4 mr-10" id="assets">
                <h1 className="text-2xl text-white">Assets</h1>
                <h2 className="text-slate-400 mt-4">
                    La carpeta assets se utiliza para almacenar activos estáticos de tu aplicación, como imágenes, iconos, archivos de fuentes, archivos JSON u otros recursos que necesites utilizar en
                    tu proyecto. Almacenar estos activos en una carpeta separada ayuda a mantener el código más limpio y facilita su organización.
                </h2>
            </div>

            <div className="mt-4 mr-10" id="components">
                <h1 className="text-2xl text-white">Components</h1>
                <h2 className="text-slate-400 mt-4">
                    La carpeta components es donde puedes almacenar todos tus componentes reutilizables. Los componentes son bloques de construcción fundamentales de tu interfaz de usuario en React. Aquí
                    puedes crear subcarpetas adicionales para organizar tus componentes en categorías lógicas, como common, layout, forms, etc.
                </h2>
            </div>

            <div className="mt-4 mr-10" id="data">
                <h1 className="text-2xl text-white">Data</h1>
                <h2 className="text-slate-400 mt-4">
                    La carpeta data se utiliza para almacenar datos estáticos o archivos de configuración utilizados en tu aplicación. Aquí puedes incluir archivos JSON, archivos de configuración, archivos de
                    traducción, archivos CSV u otros datos estáticos que necesites cargar o utilizar en tu proyecto. Ademas puedes emplear esta carpeta para incluir datos estaticos de la DB, o para realizar
                    simulaciones de registros de DB.
                </h2>
            </div>

            <div className="mt-4 mr-10" id="helpers">
                <h1 className="text-2xl text-white">Helpers</h1>
                <h2 className="text-slate-400 mt-4">
                    La carpeta helpers es donde puedes colocar funciones de utilidad, helpers o módulos de ayuda que se utilizan en varias partes de tu aplicación. Estas funciones pueden incluir lógica común o
                    funcionalidades compartidas que pueden ser reutilizadas en diferentes componentes o módulos.
                </h2>
            </div>

            <div className="mt-4 mr-10" id="hooks">
                <h1 className="text-2xl text-white">Hooks</h1>
                <h2 className="text-slate-400 mt-4">
                    La carpeta hooks es un lugar adecuado para almacenar tus custom hooks. Los custom hooks son funciones reutilizables que encapsulan lógica y estados compartidos en tu aplicación. Puedes crear y
                    organizar tus propios hooks personalizados en esta carpeta para facilitar su reutilización y mantenimiento.
                </h2>
            </div>

            <div className="mt-4 mr-10" id="pages">
                <h1 className="text-2xl text-white">Pages</h1>
                <h2 className="text-slate-400 mt-4">
                    La carpeta pages es donde puedes definir tus componentes de página. Estos componentes representan las diferentes páginas o vistas de tu aplicación. Cada componente de página generalmente corresponde
                    a una ruta específica en tu aplicación. Organizar tus componentes de página en esta carpeta te permite tener una visión clara y estructurada de las diferentes rutas y vistas de tu aplicación.
                </h2>
            </div>

            <div className="mt-4 mr-10" id="routes">
                <h1 className="text-2xl text-white">Routes</h1>
                <h2 className="text-slate-400 mt-4">
                    La carpeta routes (o router) se utiliza para definir y configurar las rutas de tu aplicación. Aquí puedes crear y organizar tus archivos de enrutamiento, donde especificas las rutas, componentes asociados
                    y cualquier otra configuración relacionada con el enrutamiento de tu aplicación.
                </h2>
            </div>

            <div className="mt-4 mr-10" id="styles">
                <h1 className="text-2xl text-white">Styles</h1>
                <h2 className="text-slate-400 mt-4">
                    La carpeta styles (o css, scss, etc.) se utiliza para almacenar tus archivos de estilos. Aquí puedes tener archivos CSS o preprocesadores como Sass, Less o Stylus. Organizar tus estilos en una carpeta separada
                    ayuda a mantener una estructura limpia y modularizada.
                </h2>
            </div>

            <div className="mt-4 mr-10" id="config">
                <h1 className="text-2xl text-white">Plus: Config</h1>
                <h2 className="text-slate-400 mt-4">
                    La carpeta config es opcional y se utiliza para almacenar archivos de configuración específicos de tu proyecto. Estos archivos pueden incluir configuraciones de herramientas, ajustes de compilación, variables de
                    entorno o cualquier otra configuración personalizada que necesites para tu proyecto.
                </h2>
            </div>

        </article>
    )
}

const EstructuraSidebar = () => {
    return (
        <div className="text-white p-2 fixed content-sidebar-scroll content-sidebar-container">

            <div className='mb-8 content-sidebar-container-children'>

                <h1 className="text-sky-400 text-center">Contenido de la Pagina</h1>

                <ul>
                    <li className="mt-8 ml-4 text-slate-400"><a href="#about">Sobre este Articulo</a></li>

                    <li className="mt-4 ml-4 text-slate-400"><a href="#resumen">Resumen de Estructura</a></li>
                    <li className="mt-4 ml-4 text-slate-400"><a href="#detalle">Detalle de Estructura</a></li>

                    <li className="ml-10 mt-2 text-slate-400"><a href="#node">Node Modules</a></li>
                    <li className="ml-10 mt-2 text-slate-400"><a href="#public">Public</a></li>
                    <li className="ml-10 mt-2 text-slate-400"><a href="#src">Src</a></li>
                    <li className="ml-10 mt-2 text-slate-400"><a href="#assets">Assets</a></li>
                    <li className="ml-10 mt-2 text-slate-400"><a href="#components">Components</a></li>
                    <li className="ml-10 mt-2 text-slate-400"><a href="#data">Data</a></li>
                    <li className="ml-10 mt-2 text-slate-400"><a href="#helpers">Helpers</a></li>
                    <li className="ml-10 mt-2 text-slate-400"><a href="#hooks">Hooks</a></li>
                    <li className="ml-10 mt-2 text-slate-400"><a href="#pages">Pages</a></li>
                    <li className="ml-10 mt-2 text-slate-400"><a href="#routes">Routes</a></li>
                    <li className="ml-10 mt-2 text-slate-400"><a href="#styles">Styles</a></li>
                    <li className="ml-10 mt-2 text-slate-400"><a href="#config">Plus: Config</a></li>

                </ul>
            </div>
        </div>
    )
}
