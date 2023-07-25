import { Separator } from "../../components/PageComponents/Separator"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { PageContainer } from "../PageContainer"
import estructuraImg from '../../assets/img/estructuraProyecto.png';

import { ParagrafComponent } from "../../components/PageComponents/Articles/Paragraf"
import { SubTitle } from "../../components/PageComponents/Articles/SubTitle"
import { Title } from "../../components/PageComponents/Articles/Title"
import { ContentSidebarContainer, ContentSidebarItemSubTitle, ContentSidebarItemTitle } from "../../components/Sidebar/ContentSidebar";

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

                <Title title={'Sobre este articulo'} />

                <ParagrafComponent>
                    En el desarrollo de aplicaciones web con React, una de las prácticas fundamentales es establecer una estructura de carpetas adecuada para organizar el código
                    de manera eficiente y escalable. En este artículo, exploraremos en detalle la estructura de un proyecto React y profundizaremos en la utilidad de cada una de las
                    carpetas que lo componen.
                </ParagrafComponent>

                <ParagrafComponent>
                    Una estructura de carpetas bien definida nos permite mantener nuestro código modular, separando las diferentes responsabilidades y facilitando la colaboración
                    entre los miembros del equipo. Además, proporciona una manera clara de ubicar y acceder a los diferentes componentes, estilos, imágenes y otros recursos utilizados
                    en la aplicación.
                </ParagrafComponent>

                <ParagrafComponent>
                    A lo largo de este artículo, exploraremos las carpetas esenciales de un proyecto React y describiremos su propósito y utilidad. Veremos cómo organizar nuestros
                    componentes, estilos, pruebas, archivos de configuración y otros elementos importantes para el desarrollo de una aplicación React robusta y mantenible.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="resumen">

                <Title title={'Resumen de Estructura'} />

                <ParagrafComponent>
                    Es necesario aclarar que esta estructura es la que yo utilizo. Esto no quiere decir que lo que yo hago esta bien o mal, simplemente sigo un estandar al
                    que ya me acostumbre. Segun el desarrollador las estructuras varian, por lo que busca la estructura que mejor se adecue a tus necesidades y te sientas comodo
                    con ella.
                </ParagrafComponent>

                <ParagrafComponent>
                    A continuacion adjuntare una imagen con la estructura que utilice para crear esta Bilioteca digital a modo de ejemplo.
                </ParagrafComponent>

                <ParagrafComponent>
                    Nota: Antes de que te preguntes por que mis carpetas tienen iconos en VSCode, yo utilizo la extension llamada {`' Material Icon Theme '`}
                </ParagrafComponent>

                <img
                    className="w-4/12 rounded-lg mx-auto bg-slate-800 p-1 mt-5"
                    src={estructuraImg} alt="Profile Pic"
                />

            </div>

            <Separator />

            <Title title={'Detalle de Estructura'} id="detalle" />

            <div className="mt-4 mr-10" id="node">
                <SubTitle text={'node_modules'} />
                <ParagrafComponent>
                    La carpeta node_modules es generada automáticamente por npm (Node Package Manager) o yarn para almacenar todas las dependencias y paquetes de terceros utilizados en el
                    proyecto. Aquí se encuentran todas las bibliotecas y módulos externos que has instalado mediante npm o yarn.
                </ParagrafComponent>
            </div>

            <div className="mt-4 mr-10" id="public">
                <SubTitle text={'public'} />
                <ParagrafComponent>
                    La carpeta public contiene los archivos estáticos que se servirán directamente al navegador sin ningún procesamiento por parte de Webpack o Vite. Aquí puedes colocar archivos
                    HTML, imágenes, fuentes u otros recursos estáticos. Por ejemplo, puedes colocar tu archivo index.html principal en esta carpeta.
                </ParagrafComponent>
            </div>

            <div className="mt-4 mr-10" id="src">
                <SubTitle text={'src'} />
                <ParagrafComponent>
                    La carpeta src es el corazón de tu proyecto. Aquí es donde resides la mayor parte del código fuente de tu aplicación React. Contiene los componentes, estilos, datos, enrutamiento y
                    otros archivos necesarios para construir tu aplicación.
                </ParagrafComponent>
            </div>

            <div className="mt-4 mr-10" id="assets">
                <SubTitle text={'Assets'} />
                <ParagrafComponent>
                    La carpeta assets se utiliza para almacenar activos estáticos de tu aplicación, como imágenes, iconos, archivos de fuentes, archivos JSON u otros recursos que necesites utilizar en
                    tu proyecto. Almacenar estos activos en una carpeta separada ayuda a mantener el código más limpio y facilita su organización.
                </ParagrafComponent>
            </div>

            <div className="mt-4 mr-10" id="components">
                <SubTitle text={'Components'} />
                <ParagrafComponent>
                    La carpeta components es donde puedes almacenar todos tus componentes reutilizables. Los componentes son bloques de construcción fundamentales de tu interfaz de usuario en React. Aquí
                    puedes crear subcarpetas adicionales para organizar tus componentes en categorías lógicas, como common, layout, forms, etc.
                </ParagrafComponent>
            </div>

            <div className="mt-4 mr-10" id="data">
                <SubTitle text={'Data'} />
                <ParagrafComponent>
                    La carpeta data se utiliza para almacenar datos estáticos o archivos de configuración utilizados en tu aplicación. Aquí puedes incluir archivos JSON, archivos de configuración, archivos de
                    traducción, archivos CSV u otros datos estáticos que necesites cargar o utilizar en tu proyecto. Ademas puedes emplear esta carpeta para incluir datos estaticos de la DB, o para realizar
                    simulaciones de registros de DB.
                </ParagrafComponent>
            </div>

            <div className="mt-4 mr-10" id="helpers">
                <SubTitle text={'Helpers'} />
                <ParagrafComponent>
                    La carpeta helpers es donde puedes colocar funciones de utilidad, helpers o módulos de ayuda que se utilizan en varias partes de tu aplicación. Estas funciones pueden incluir lógica común o
                    funcionalidades compartidas que pueden ser reutilizadas en diferentes componentes o módulos.
                </ParagrafComponent>
            </div>

            <div className="mt-4 mr-10" id="hooks">
                <SubTitle text={'Hooks'} />
                <ParagrafComponent>
                    La carpeta hooks es un lugar adecuado para almacenar tus custom hooks. Los custom hooks son funciones reutilizables que encapsulan lógica y estados compartidos en tu aplicación. Puedes crear y
                    organizar tus propios hooks personalizados en esta carpeta para facilitar su reutilización y mantenimiento.
                </ParagrafComponent>
            </div>

            <div className="mt-4 mr-10" id="pages">
                <SubTitle text={'Pages'} />
                <ParagrafComponent>
                    La carpeta pages es donde puedes definir tus componentes de página. Estos componentes representan las diferentes páginas o vistas de tu aplicación. Cada componente de página generalmente corresponde
                    a una ruta específica en tu aplicación. Organizar tus componentes de página en esta carpeta te permite tener una visión clara y estructurada de las diferentes rutas y vistas de tu aplicación.
                </ParagrafComponent>
            </div>

            <div className="mt-4 mr-10" id="routes">
                <SubTitle text={'Routes'} />
                <ParagrafComponent>
                    La carpeta routes (o router) se utiliza para definir y configurar las rutas de tu aplicación. Aquí puedes crear y organizar tus archivos de enrutamiento, donde especificas las rutas, componentes asociados
                    y cualquier otra configuración relacionada con el enrutamiento de tu aplicación.
                </ParagrafComponent>
            </div>

            <div className="mt-4 mr-10" id="styles">
                <SubTitle text={'Styles'} />
                <ParagrafComponent>
                    La carpeta styles (o css, scss, etc.) se utiliza para almacenar tus archivos de estilos. Aquí puedes tener archivos CSS o preprocesadores como Sass, Less o Stylus. Organizar tus estilos en una carpeta separada
                    ayuda a mantener una estructura limpia y modularizada.
                </ParagrafComponent>
            </div>

            <div className="mt-4 mr-10" id="config">
                <SubTitle text={'Plus: Config'} />
                <ParagrafComponent>
                    La carpeta config es opcional y se utiliza para almacenar archivos de configuración específicos de tu proyecto. Estos archivos pueden incluir configuraciones de herramientas, ajustes de compilación, variables de
                    entorno o cualquier otra configuración personalizada que necesites para tu proyecto.
                </ParagrafComponent>
            </div>

        </article>
    )
}

const EstructuraSidebar = () => {
    return (
        <ContentSidebarContainer>
            <ul>
                <ContentSidebarItemTitle title={'Sobre este Articulo'} id={'about'} customClassname="mt-8" />
                <ContentSidebarItemTitle title={'Resumen de Estructura'} id={'resumen'} />
                <ContentSidebarItemTitle title={'Detalle de Estructura'} id={'detalle'} />

                <ContentSidebarItemSubTitle title={'Node Modules'} id={'node'} />
                <ContentSidebarItemSubTitle title={'Public'} id={'public'} />
                <ContentSidebarItemSubTitle title={'Src'} id={'src'} />
                <ContentSidebarItemSubTitle title={'Assets'} id={'assets'} />
                <ContentSidebarItemSubTitle title={'Components'} id={'components'} />
                <ContentSidebarItemSubTitle title={'Data'} id={'data'} />
                <ContentSidebarItemSubTitle title={'Helpers'} id={'helpers'} />
                <ContentSidebarItemSubTitle title={'Hooks'} id={'hooks'} />
                <ContentSidebarItemSubTitle title={'Pages'} id={'pages'} />
                <ContentSidebarItemSubTitle title={'Routes'} id={'routes'} />
                <ContentSidebarItemSubTitle title={'Styles'} id={'styles'} />
                <ContentSidebarItemSubTitle title={'Plus: Config'} id={'config'} />
            </ul>
        </ContentSidebarContainer>
    )
}
