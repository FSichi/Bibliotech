import { FormattedMessageExample, FormattedMessageImport, enUSFile, esMXFile, indexProvider, langContextCode, switchExample } from "../../assets/code/FormatJS"
import { ParagrafComponent } from "../../components/PageComponents/Articles/Paragraf"
import { Title } from "../../components/PageComponents/Articles/Title"
import { Separator } from "../../components/PageComponents/Separator"
import { ShowCode } from "../../components/PageComponents/ShowCode"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { ContentSidebarContainer, ContentSidebarItemTitle } from "../../components/Sidebar/ContentSidebar"
import { PageContainer } from "../PageContainer"

export const Internacionalizacion = () => {
    return (
        <PageContainer titlePage={'Internacionalizacion'} pageContent={<Content />} sidebarContent={<SidebarContent />} />
    )
}

const Content = () => {

    const instalacionCode = `npm i react-intl`;

    return (
        <article className="md:text-justify">
            <TitlePage sectionTitle={'Frontend'} pageTitle={'Internacionalizacion'} />

            <div className="mt-4 mr-10" id="about">

                <Title title={'Sobre este articulo'} />

                <ParagrafComponent>
                    En una aplicación React, es común encontrarnos con la necesidad de contar con varias opciones de lenguaje de cara al usuario. Cada vez mas frecuentemente, nuestras aplicaciones son desarrolladas bajo una perspectiva de alcance internacional.
                    A raiz de ello, es necesario contar con recursos de lenguaje que aseguren una correcta y amena experiencia para el usuario.
                </ParagrafComponent>

                <ParagrafComponent>
                    Como minimo, la regla de oro es desarrollar nuestras aplicaciones en nuestra lengua madre y en ingles. A partir de ahi, podemos comenzar a crear ficheros de distintos lenguajes y agregarlos paulatinamente a neustra App en produccion.
                </ParagrafComponent>

                <ParagrafComponent>
                    En este artículo, exploraremos cómo utilizar la libreria de FormatJS como recurso administrativo de ficheros de lenguaje en una aplicacion React. Esta libreria es muy sencilla de utilizar, me atreveria a decir que es la mas sencilla de entre todas las
                    posibilidades para abordar la internacionalizacion de lenguaje en programacion web. Su funcionamiento, si bien es sencilla de implementar, es muy eficiente y ofrece todas las herramientas adicionales que necesitamos en su propio bundle.
                </ParagrafComponent>

                <ParagrafComponent>
                    A lo largo de este recorrido, descubriremos las mejores prácticas y patrones recomendados para asegurar una implementación eficiente y escalable de la internacionalización en React. Exploraremos técnicas para organizar y estructurar archivos de
                    traducción, manejar plurales y variables, y cómo cambiar dinámicamente el idioma de la aplicación.
                </ParagrafComponent>

                <ParagrafComponent>
                    Al final de este artículo, tendrás los conocimientos necesarios para implementar la estructura de react-intl en tus aplicaciones React y podras crear los ficheros de lenguaje que necesites.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="instalacion">

                <Title title={'Instalacion de FormatJS'} />

                <ParagrafComponent classNameCustom="mb-4">
                    La instalacion de FormatJS en un proyecto react es muy sencilla, simplemente debemos incorporar la siguiente libreria:
                </ParagrafComponent>

                <ShowCode code={instalacionCode} />

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="incorporar">

                <Title title={'Incorporar react-intl en la App'} />

                <ParagrafComponent classNameCustom="mb-4">
                    Para poder utilizar react-intl en nuestra aplicacion, es necesario que establezcamos un provider que recubra nuestro componente primario de App. A continuacion adjuntare el fragmento de codigo del <span className="text-sky-400 italic font-bold"> langContext </span>
                    para nuestra App.
                </ParagrafComponent>

                <ShowCode code={langContextCode} />

                <ParagrafComponent>
                    Primero, se importan los módulos necesarios de React, como useState, y se importan los archivos JSON que contienen los mensajes de texto en inglés y español para la aplicación.
                    Luego, se crea un contexto de idioma utilizando React.createContext(). Este contexto servirá como un contenedor para compartir la función de cambio de idioma en toda la aplicación.
                </ParagrafComponent>

                <ParagrafComponent>
                    A continuación, se define el componente LangProvider, que es un proveedor de idioma personalizado. Este componente se encargará de manejar el estado del idioma y los mensajes de idioma.
                </ParagrafComponent>

                <ParagrafComponent>
                    Dentro del componente LangProvider, se inicializan las variables defaultLocal y defaultMessages. Se verifica si el idioma almacenado en el almacenamiento local (localStorage) es nulo. Si es nulo, se establece el idioma predeterminado como {'`en-US`'} (inglés estadounidense) y se guarda en el almacenamiento local.

                    A continuación, se obtiene el idioma actual del almacenamiento local. Si se ha definido un idioma, se establecen los valores predeterminados para defaultLocal y defaultMessages según el idioma seleccionado. Si el idioma es {'`es-MX`'} (español de México), se utilizan los mensajes en español; si el idioma es {'`en-US`'},
                    se utilizan los mensajes en inglés. Si el idioma no está reconocido, se establecen los valores predeterminados en inglés.
                </ParagrafComponent>

                <ParagrafComponent>
                    A continuación, se define la función setLanguage, que permite cambiar el idioma de la aplicación. Dependiendo del idioma seleccionado, se actualizan los mensajes y el idioma en el estado, y se guarda el idioma seleccionado en el almacenamiento local.
                    Finalmente, el componente LangProvider devuelve el proveedor de contexto (langContext.Provider), que envuelve el componente IntlProvider de react-intl. El proveedor de contexto expone la función setLanguage a través del contexto, lo que permite que otros componentes accedan a ella.
                </ParagrafComponent>

                <ParagrafComponent classNameCustom="mb-4">
                    Una vez finalizado el analisis del LangContext, simplemente queda envolver el proveedor de lenguaje en nuestra App. Para ello nos dirigimos al index.js, main.js o cualquiera sea el nombre de nuestro fichero primario de la aplicacion React.
                </ParagrafComponent>

                <ShowCode code={indexProvider} />

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="ficheros">

                <Title title={'Ficheros de lenguaje'} />

                <ParagrafComponent>
                    Con respecto a los ficheros de lenguaje, estos sirven como biblioteca general para almacenar todos los indices de los textos que vamos a utilizar en las traducciones.
                </ParagrafComponent>

                <ParagrafComponent>
                    En el fichero src, crearemos una nueva carpeta llamada language que almacenara dichos ficheros de lenguaje. Normalmente los archivos tienen un nombre que sirve como identificador del idioma y la region. Por ejemplo en el español latinoamericano utilizamos `es-MX.json` o si es ingles estadounidense `en-US.json`.
                    Estos 2 archivos son los mas comunes que desarrollan los programadores cuando crean una aplicacion.
                </ParagrafComponent>

                <ParagrafComponent>
                    Ahora bien, los ficheros se crean como un archivo json con ids para cada cadena de texto, lo que utilizaremos para poder referenciar dichos textos. Aqui un ejemplo:
                </ParagrafComponent>

                <ShowCode code={esMXFile} />

                <ShowCode code={enUSFile} />

                <ParagrafComponent>
                    Como pueden apreciar los ids son exactamente iguales en los 2 ficheros. Lo unico que cambia es el texto en el idioma correspondiente.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="componentes">

                <Title title={'Utilizar react-intl en los componentes'} />

                <ParagrafComponent>
                    Para poder utilizar el texto traducido en los componentes de la App, es sumamente sencillo. Simplemente debemos importar la funcion FormattedMessage de react-intl y utilizarla como si fuese un componente mas en cualquier parte de la aplicacion.
                </ParagrafComponent>

                <ShowCode code={FormattedMessageImport} />

                <ParagrafComponent classNameCustom="mb-4">
                    Ahora simplemente para utilizarlo debemos incluir en el componente 2 props. La primera corresponde al id del fichero de lenguaje que queremos mostrar como texto y la segunda prop corresponde al mensaje por defecto que mostraremos en caso de que el id no exista.
                </ParagrafComponent>

                <ShowCode code={FormattedMessageExample} />

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="cambiar">

                <Title title={'Cambiar Idioma Dinamicamente'} />

                <ParagrafComponent classNameCustom="mb-4">
                    Por ultimo debemos establecer un mecanismo para cambiar dinamicamente el lenguaje en nuestra aplicacion, a fin de hacer la experiencia mas fluida y dinamica para los usuarios.
                    El como cambiar el lenguaje dinamicamente, depende de cada programador y sus necesidades en cuanto a lo visual. A continuacion presentare un ejemplo basico con 2 banderas para escoger entre español e ingles.
                </ParagrafComponent>

                <ShowCode code={switchExample} />

                <ParagrafComponent>
                    Lo importante a analizar aqui no es lo visual ni el contenido html. Como pueden ver tengo 2 botones para establecer el lenguaje que invocan al metodo setLanguage() del context que establecimos previamente.
                    ¡Con esto establecemos un mecanismo para cambiar dinamicamente el idioma de nuestra aplicacion.!
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
                <ContentSidebarItemTitle title={'Instalacion de FormatJS'} id={'instalacion'} />
                <ContentSidebarItemTitle title={'Incorporar react-intl en la App'} id={'incorporar'} />
                <ContentSidebarItemTitle title={'Ficheros de lenguaje'} id={'ficheros'} />
                <ContentSidebarItemTitle title={'Utilizar react-intl en los componentes'} id={'componentes'} />
                <ContentSidebarItemTitle title={'Cambiar Idioma Dinamicamente'} id={'cambiar'} />
            </ul>
        </ContentSidebarContainer>
    )
}
