import { Separator } from "../../components/PageComponents/Separator"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { PageContainer } from "../PageContainer"
import BackendImg from '../../assets/img/Backend.png';
import { Title } from "../../components/PageComponents/Articles/Title";
import { ParagrafComponent } from "../../components/PageComponents/Articles/Paragraf";
import { SubTitle } from "../../components/PageComponents/Articles/SubTitle";
import { ThirdTitle } from "../../components/PageComponents/Articles/ThirdTitle";
import { ContentSidebarContainer, ContentSidebarItemSubTitle, ContentSidebarItemTitle } from "../../components/Sidebar/ContentSidebar";

export const EstructuraBackend = () => {
    return (
        <PageContainer titlePage={'EstructuraBackend'} pageContent={<Content />} sidebarContent={<SidebarContent />} />
    )
}

const Content = () => {
    return (
        <article className="md:text-justify">

            <TitlePage sectionTitle={'Backend'} pageTitle={'Estructura de un proyecto NodeJs'} />

            <div className="mt-4 mr-10" id="about">

                <Title title={'Sobre este articulo'} />

                <ParagrafComponent>
                    En el mundo del desarrollo de aplicaciones web con Node.js, la organización adecuada de nuestros proyectos es un pilar fundamental para alcanzar la eficiencia y el éxito.
                    La estructura de un proyecto influye directamente en la legibilidad del código, la facilidad de mantenimiento y la escalabilidad del mismo.
                </ParagrafComponent>

                <ParagrafComponent>
                    En este artículo, nos adentraremos en el fascinante terreno de la estructura de proyectos Node.js. Exploraremos cómo una disposición bien pensada de directorios y archivos puede
                    optimizar nuestro flujo de trabajo y facilitar la colaboración entre equipos de desarrollo.
                </ParagrafComponent>

                <ParagrafComponent>
                    Desde la elección de una estructura base sólida hasta las mejores prácticas para organizar nuestros módulos y componentes, abarcaremos los conceptos clave que todo desarrollador Node.js
                    debe tener en cuenta. Aprenderemos cómo separar las responsabilidades, gestionar las dependencias y establecer un entorno de desarrollo eficiente.
                </ParagrafComponent>

                <ParagrafComponent>
                    Si eres un apasionado del desarrollo backend y buscas potenciar tus habilidades en Node.js, este artículo te proporcionará las herramientas y conocimientos para llevar la estructura de tus
                    proyectos al siguiente nivel.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="resumen">

                <Title title={'Resumen de Estructura'} />

                <ParagrafComponent>
                    Es importante destacar que la estructura de un proyecto puede variar según las preferencias y necesidades de cada desarrollador. No existe una única forma {`"correcta"`} de organizar los
                    archivos y directorios, sino que depende del enfoque y las prácticas adoptadas por cada equipo o individuo. En este artículo, compartiré la estructura que he utilizado personalmente
                    en la mayoria de proyectos que desarrollo empleando NodeJs.
                </ParagrafComponent>

                <ParagrafComponent>
                    Antes de sumergirnos en los detalles, es esencial comprender que esta estructura es simplemente una opción entre muchas otras posibles. Cada desarrollador tiene la libertad de elegir la organización
                    que mejor se adapte a sus flujos de trabajo y preferencias. La flexibilidad en la estructura de un proyecto es una de las ventajas clave de trabajar con Node.js y nos permite adaptarnos a diferentes
                    contextos y requerimientos.
                </ParagrafComponent>

                <ParagrafComponent>
                    A continuación, se presenta una imagen con la estructura de carpetas que he utilizado en un proyecto a modo de ejemplo. Cabe mencionar que algunas de las carpetas están personalizadas con iconos gracias a la
                    extensión {`"Material Icon Theme"`} en Visual Studio Code, lo que facilita la identificación visual de cada elemento.
                </ParagrafComponent>

                <img
                    className="w-4/12 rounded-lg mx-auto bg-slate-800 p-1 mt-5"
                    src={BackendImg} alt="Backend Pic Structure"
                />

                <ParagrafComponent>
                    En el desarrollo de software, la organización adecuada de archivos y directorios es crucial para mantener un código limpio, legible y fácilmente mantenible. En este artículo, exploraremos cada una de las carpetas
                    y su función en el proyecto Bibliotech, brindando una visión detallada de cómo estas piezas se complementan entre sí para formar un sistema eficiente y coherente.
                </ParagrafComponent>

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

            <div className="mt-4 mr-10" id="controllers">
                <SubTitle text={'controllers'} />
                <ParagrafComponent>
                    La carpeta {`"Controllers"`} contiene los controladores de la aplicación, que son responsables de manejar las solicitudes entrantes y coordinar las respuestas adecuadas.
                    Estos controladores actúan como intermediarios entre las rutas y la lógica de negocio de la aplicación. Aquí se definen funciones y métodos que procesan los datos recibidos,
                    interactúan con los modelos y servicios correspondientes, y generan las respuestas que se envían al cliente. Los controladores juegan un papel fundamental en mantener la
                    separación de preocupaciones dentro de la aplicación, lo que facilita el mantenimiento y la escalabilidad del código.
                </ParagrafComponent>
            </div>

            <div className="mt-4 mr-10" id="database">
                <SubTitle text={'database'} />

                <ParagrafComponent>
                    Dentro de la carpeta {`"Database"`}, se encuentran todos los archivos y módulos relacionados con la gestión de la base de datos de la aplicación. Esta carpeta se subdivide en
                    otras carpetas para mantener una organización adecuada:
                </ParagrafComponent>

                <ThirdTitle text={'config'} />

                <ParagrafComponent>
                    La carpeta {`"Config"`} almacena archivos de configuración para la conexión y ajustes específicos de la base de datos. Aquí se definen detalles como el nombre de la base de datos,
                    las credenciales de acceso, el puerto, el host y cualquier otra configuración necesaria para establecer una conexión exitosa con la base de datos. Al mantener estos detalles en un
                    solo lugar, es más fácil modificarlos en el futuro sin afectar otras partes de la aplicación.
                </ParagrafComponent>

                <ThirdTitle text={'enums'} />

                <ParagrafComponent>
                    La carpeta {`"Enums"`} contiene archivos que definen enumeraciones y constantes utilizadas en diferentes partes de la aplicación. Estos enumeradores ayudan a mejorar la legibilidad del código,
                    evitando el uso de valores literales en diferentes secciones del código. Por ejemplo, podrían utilizarse para representar estados, tipos de roles de usuario o cualquier valor que se utilice
                    repetidamente en la aplicación.
                </ParagrafComponent>

                <ThirdTitle text={'models'} />

                <ParagrafComponent>
                    La carpeta {`"Models"`} almacena los modelos de la base de datos. Los modelos son estructuras de datos que definen el esquema de la información almacenada en la base de datos. Cada modelo representa
                    una entidad o tabla en la base de datos y se utiliza para interactuar con ella de forma orientada a objetos. Los modelos permiten crear, leer, actualizar y eliminar registros de la base de datos de
                    manera sencilla y organizada.
                </ParagrafComponent>

            </div>

            <div className="mt-4 mr-10" id="helpers">
                <SubTitle text={'helpers'} />
                <ParagrafComponent>
                    La carpeta {`"Helpers"`} contiene módulos con funciones auxiliares que se utilizan en diferentes partes de la aplicación. Estas funciones son de uso común y brindan funcionalidades adicionales que pueden ser
                    utilizadas en varios lugares. Por ejemplo, podrían incluir funciones para formatear fechas, generar contraseñas seguras, manejar errores o realizar validaciones de datos. El objetivo principal de esta
                    carpeta es evitar la repetición de código y promover la reutilización de lógica, lo que conduce a un código más limpio y mantenible.
                </ParagrafComponent>
            </div>

            <div className="mt-4 mr-10" id="middlewares">
                <SubTitle text={'middlewares'} />
                <ParagrafComponent>
                    La carpeta {`"Middlewares"`} almacena módulos que contienen funciones de middleware utilizadas en la aplicación. Los middlewares son funciones que se ejecutan entre la recepción de una solicitud y el envío de
                    una respuesta. Se utilizan para realizar acciones comunes en todas las rutas o para agregar funcionalidades adicionales a las solicitudes antes de que lleguen a los controladores. Algunos ejemplos de middlewares
                    pueden incluir la autenticación de usuarios, la verificación de autorización o el registro de solicitudes. Los middlewares desempeñan un papel fundamental en la implementación de aspectos transversales en la
                    aplicación sin afectar la lógica específica de cada ruta.
                </ParagrafComponent>
            </div>

            <div className="mt-4 mr-10" id="routes">
                <SubTitle text={'routes'} />
                <ParagrafComponent>
                    La carpeta {`"Routes"`} contiene archivos que definen las rutas y los endpoints de la aplicación. Aquí es donde se configuran las diferentes rutas que los usuarios pueden acceder y se asocian con los controladores
                    correspondientes. Cada archivo de ruta agrupa rutas relacionadas con una característica específica de la aplicación. Las rutas son el punto de entrada para las solicitudes del cliente y determinan qué controladores
                    se encargarán de procesarlas. Esta estructura de rutas ayuda a mantener la claridad y la organización del código a medida que la aplicación crece y se agrega más funcionalidad.
                </ParagrafComponent>
            </div>

            <div className="mt-4 mr-10" id="services">
                <SubTitle text={'services'} />
                <ParagrafComponent>
                    La carpeta {`"Services"`} contiene módulos que encapsulan la lógica de negocio relacionada con un dominio específico de la aplicación. Estos servicios se utilizan para desacoplar la lógica de los controladores y mantener
                    un código más organizado y mantenible. Los servicios se encargan de manejar operaciones más complejas, como la validación de datos, la comunicación con APIs externas o la lógica de negocio específica de la aplicación.
                    Al utilizar servicios, se promueve la reutilización de código y la modularidad, lo que facilita el desarrollo y la evolución de la aplicación.
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
                <ContentSidebarItemTitle title={'Resumen de Estructura'} id={'resumen'} />
                <ContentSidebarItemTitle title={'Detalle de Estructura'} id={'detalle'} />

                <ContentSidebarItemSubTitle title={'Node Modules'} id={'node'} />
                <ContentSidebarItemSubTitle title={'Controllers'} id={'controllers'} />
                <ContentSidebarItemSubTitle title={'Database'} id={'database'} />
                <ContentSidebarItemSubTitle title={'Helpers'} id={'helpers'} />
                <ContentSidebarItemSubTitle title={'Middlewares'} id={'middlewares'} />
                <ContentSidebarItemSubTitle title={'Routes'} id={'routes'} />
                <ContentSidebarItemSubTitle title={'Services'} id={'services'} />
            </ul>
        </ContentSidebarContainer>
    )
}
