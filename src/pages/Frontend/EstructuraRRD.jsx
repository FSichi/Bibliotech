import { AppRoutesListCode, ComponenteParametroCode, ParametrosRutasCode, SidebarRoutesCode, reactRouterDomCode } from "../../assets/code/RRD"
import { Separator } from "../../components/PageComponents/Separator"
import { ShowCodeJavaScript } from "../../components/PageComponents/ShowCode"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { PageContainer } from "../PageContainer"
import '../../styles/codeResponsive.css'
import { Title } from "../../components/PageComponents/Articles/Title"
import { ParagrafComponent } from "../../components/PageComponents/Articles/Paragraf"
import { ContentSidebarContainer, ContentSidebarItemTitle } from "../../components/Sidebar/ContentSidebar"

export const EstructuraRRD = () => {
    return (
        <PageContainer titlePage={'LibreriasFrontend'} pageContent={<Content />} sidebarContent={<SidebarContent />} />
    )
}

const Content = () => {
    return (
        <article className="md:text-justify">

            <TitlePage sectionTitle={'Frontend'} pageTitle={'Estructura de ReactRouterDom'} />

            <div className="mt-4 mr-10" id="about">

                <Title title={'Sobre este articulo'} />

                <ParagrafComponent>
                    En este artículo, exploraremos una de las bibliotecas esenciales para la construcción de aplicaciones de React: React Router Dom. RRD proporciona una solución
                    robusta y elegante para la gestión de la navegación en aplicaciones de una sola página (SPA) o incluso en aplicaciones multipágina.
                </ParagrafComponent>

                <ParagrafComponent>
                    Implementar correctamente React Router Dom es crucial para crear una experiencia de usuario fluida y optimizada. Además de proporcionar una navegación fácil
                    entre diferentes componentes y vistas, también es fundamental considerar la optimización y el rendimiento de nuestras rutas.
                </ParagrafComponent>

                <ParagrafComponent>
                    A lo largo de este artículo, exploraremos las mejores prácticas y estrategias para estructurar y optimizar nuestras rutas con React Router Dom. Aprenderemos cómo
                    aprovechar al máximo esta biblioteca para garantizar una navegación rápida y eficiente, así como un rendimiento óptimo en nuestras aplicaciones de React.
                </ParagrafComponent>

                <ParagrafComponent>
                    Veremos cómo organizar nuestras rutas de manera lógica y modular, y cómo aprovechar las capacidades de carga diferida (lazy loading) para cargar los componentes de
                    manera eficiente, mejorando así los tiempos de carga. También exploraremos técnicas de gestión de estado en las rutas, el manejo de parámetros y consultas, y cómo trabajar con rutas anidadas para crear una jerarquía de navegación más compleja.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="introduccion">

                <Title title={'Introduccion a Estructura'} />

                <ParagrafComponent>
                    Es necesario aclarar que esta estructura es la que yo utilizo. Esto no quiere decir que lo que yo hago esta bien o mal, simplemente sigo un estandar al
                    que ya me acostumbre. Segun el desarrollador las estructuras varian, por lo que busca la estructura que mejor se adecue a tus necesidades y te sientas comodo
                    con ella.
                </ParagrafComponent>

                <ParagrafComponent>
                    A continuacion adjuntare un fragmento de codigo para mostrar la manera en que esta biblioteca maneja el estado de las rutas
                </ParagrafComponent>

                <ShowCodeJavaScript code={reactRouterDomCode} />

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="explicacion">

                <Title title={'Explicacion de Estructura'} />

                <ParagrafComponent>
                    Lo primero que salta a la vista son los componentes de RRD que se deben utilizar para crear una jerarquia de Rutas. Estos componentes son:
                    BrowserRouter, Routes y Route. El primero de ellos es el enrutador padre, que funciona como eje para interpretar las redirecciones de url de nuestra app. Normalmente
                    se especifica solo 1 BrowserRoute en toda la App, y luego en caso de necesitar una seccion de rutas dentro de otra se emplea el componente {'Routes'} que sirve para
                    especificar que se van a crear rutas especificas y sirve como contenedor de dichas rutas. Por ultimo Route sirve para declarar la ruta hacia donde queremos navegar en
                    nuestra App.
                </ParagrafComponent>

                <ParagrafComponent>
                    En resumen, la jerarquia para emplear RRD en una App React es BrowserRoutes - Routes - Route(*). Ahora bien te estaras preguntando, que es esa variable <span className="text-sky-400"> AppRoutesList. </span>
                    E aqui mi mecanismo para trabajar las rutas. Absolutamente todas las rutas de mis App las trabajo en un archivo separado, normalmente llamado {'AppRoutesList'} o algo similar. De esta manera mi archivo App.jsx o main.jsx
                    principal se mantiene lo mas limpio posible y divido la logica de las rutas. Simplemente AppRoutesList es un array que contiene la informacion de mis rutas, especificamente
                    [path - componente - exact], y lo recorro para obtener y renderizar todos los registros.
                </ParagrafComponent>

                <ParagrafComponent>
                    Por ultimo debajo de mis rutas de la App se encuentran las rutas especificas que necesitan su declaracion especifica. Como por ejemplo 404ErrorPage, la pagina principal o la redireccion de cualquier
                    ruta que no este contemplada para ir de nuevo hacia 404ErrorPage.
                </ParagrafComponent>

                <ParagrafComponent>
                    A continuacion te presento mi archivo AppRoutesList para que veas como se declara.
                </ParagrafComponent>

                <ShowCodeJavaScript code={AppRoutesListCode} />

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="redireccion">

                <Title title={'Redireccion en la App'} />

                <ParagrafComponent>
                    Anteriormente hemos declarado las rutas de nuestra App, esto quiere decir que si cambiase manualmente la url de mi navegador veria como si se efectua la redireccion, pero ahora es necesario el siguiente paso.
                    Debemos hacer una redireccion dinamica para que el usuario pueda acceder a esas rutas por su cuenta sin cambiar la url del navegador. Para eso usamos los componentes como <span className="text-sky-400"> Navbar/Sidebar. </span>
                    Dentro de cualquiera de estas secciones de nuestra App es donde normalmente incluimos links para acceder a ciertas paginas. Es muy importante que los componentes se encuentren dentro de BrowserRoutes, para que
                    tengan acceso al contexto de operacion de las rutas.
                </ParagrafComponent>

                <ParagrafComponent>
                    Una vez creada la interfaz del Navbar / Sidebar, simplemente queda hacer uso de un componente extra de RRD. {'Link'}, es un componente que funciona como navegacion dinamica para redireccionar al usuario entre las distintas
                    paginas de nuestra App. Pueden crear manualmente los accesos o seguir la misma metodologia de antes, separar las Navbar/Sidebar Routes para mantener un codigo mas limpio y reutilizable.
                </ParagrafComponent>

                <ParagrafComponent>
                    Esto quiere decir que tendremos un nuevo archivo que contendra las rutas de la App nuevamente, pero con caracteristicas especiales como propiedades Active o Dropdown en caso de que desarrollemos esas funcionalidades con css o javascript.
                </ParagrafComponent>

                <ParagrafComponent>
                    A continuacion adjuntare un ejemplo del Archivo que emplee para el Sidebar de esta Biblioteca.
                </ParagrafComponent>

                <ShowCodeJavaScript code={SidebarRoutesCode} />

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="parametros">

                <Title title={'Manejo de Parametros'} />

                <ParagrafComponent>
                    Existen algunas ocasiones en las que necesitamos manejar parametros como IDs en nuestras rutas. Por ejemplo imaginemos que tenemos una App para gestionar clientes.
                    Normalmente tenemos una pagina que brinda el listado de clientes y luego cuando seleccionamos uno de ellos accedemos a su pagina especifica. Ese filtrado de informacion, normalmente
                    se hace obteniendo el id del usuario en la pagina de detalles y contactar a la DB para tener la informacion con dicho ID.
                </ParagrafComponent>

                <ParagrafComponent>
                    Entonces como puede RRD permitir enviar informacion entre Rutas?. Muy sencillo, al momento de declarar las rutas, simplemente necesitamos agregar la siguiente declaracion
                </ParagrafComponent>

                <ShowCodeJavaScript code={ParametrosRutasCode} />

                <ParagrafComponent>
                    Como pueden ver, al momento de crear las rutas, declaramos el parametro por medio de la sentencia [{'/:parametro'}]. Ahora para poder hacer uso del mismo, en el componente especifico de dicha ruta
                    hacemos lo siguiente.
                </ParagrafComponent>

                <ShowCodeJavaScript code={ComponenteParametroCode} />

                <ParagrafComponent>
                    Y asi de sencillo tenemos acceso a los parametros entre rutas. Por ultimo recuerda que tambien debemos incluir el parametro al momento de utilizar el componente Link para la redireccion.
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
                <ContentSidebarItemTitle title={'Introduccion a Estructura'} id={'introduccion'} />
                <ContentSidebarItemTitle title={'Explicacion de Estructura'} id={'explicacion'} />
                <ContentSidebarItemTitle title={'Redireccion en la App'} id={'redireccion'} />
                <ContentSidebarItemTitle title={'Manejo de Parametros'} id={'parametros'} />
            </ul>
        </ContentSidebarContainer>
    )
}
