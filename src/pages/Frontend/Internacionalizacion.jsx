import { Separator } from "../../components/PageComponents/Separator"
import { ShowCode } from "../../components/PageComponents/ShowCode"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { PageContainer } from "../PageContainer"

export const Internacionalizacion = () => {
    return (
        <PageContainer titlePage={'LibreriasFrontend'} pageContent={<Content />} sidebarContent={<SidebarContent />} />
    )
}

const Content = () => {

    const instalacionCode = `npm i react-intl`;

    return (
        <article className="md:text-justify">
            <TitlePage sectionTitle={'Frontend'} pageTitle={'Internacionalizacion'} />

            <div className="mt-4 mr-10" id="about">
                <h1 className="text-3xl text-white">Sobre este articulo</h1>
                <h2 className="text-slate-400 mt-4">
                    En una aplicación React, es común encontrarnos con la necesidad de contar con varias opciones de lenguaje de cara al usuario. Cada vez mas frecuentemente, nuestras aplicaciones son desarrolladas bajo una perspectiva de alcance internacional.
                    A raiz de ello, es necesario contar con recursos de lenguaje que aseguren una correcta y amena experiencia para el usuario.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    Como minimo, la regla de oro es desarrollar nuestras aplicaciones en nuestra lengua madre y en ingles. A partir de ahi, podemos comenzar a crear ficheros de distintos lenguajes y agregarlos paulatinamente a neustra App en produccion.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    En este artículo, exploraremos cómo utilizar la libreria de FormatJS como recurso administrativo de ficheros de lenguaje en una aplicacion React. Esta libreria es muy sencilla de utilizar, me atreveria a decir que es la mas sencilla de entre todas las
                    posibilidades para abordar la internacionalizacion de lenguaje en programacion web. Su funcionamiento, si bien es sencilla de implementar, es muy eficiente y ofrece todas las herramientas adicionales que necesitamos en su propio bundle.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    A lo largo de este recorrido, descubriremos las mejores prácticas y patrones recomendados para asegurar una implementación eficiente y escalable de la internacionalización en React. Exploraremos técnicas para organizar y estructurar archivos de
                    traducción, manejar plurales y variables, y cómo cambiar dinámicamente el idioma de la aplicación.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    Al final de este artículo, tendrás los conocimientos necesarios para implementar la estructura de react-intl en tus aplicaciones React y podras crear los ficheros de lenguaje que necesites.
                </h2>
            </div>

            <Separator />

            <div className="mt-4 mr-10" id="instalacion">
                <h1 className="text-3xl text-white">Instalacion de FormatJS</h1>
                <h2 className="text-slate-400 mt-4">
                    La instalacion de FormatJS en un proyecto react es muy sencilla, simplemente debemos incorporar la siguiente libreria:
                </h2>

                <div className="codeImg">
                    <ShowCode code={instalacionCode} />
                </div>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="incorporar">
                <h1 className="text-3xl text-white">Incorporar react-intl en la App</h1>
                <h2 className="text-slate-400 mt-4">
                    En una aplicación React, es común encontrarnos con la necesidad de contar con varias opciones de lenguaje de cara al usuario. Cada vez mas frecuentemente, nuestras aplicaciones son desarrolladas bajo una perspectiva de alcance internacional.
                    A raiz de ello, es necesario contar con recursos de lenguaje que aseguren una correcta y amena experiencia para el usuario.
                </h2>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="ficheros">
                <h1 className="text-3xl text-white">Ficheros de lenguaje</h1>
                <h2 className="text-slate-400 mt-4">
                    En una aplicación React, es común encontrarnos con la necesidad de contar con varias opciones de lenguaje de cara al usuario. Cada vez mas frecuentemente, nuestras aplicaciones son desarrolladas bajo una perspectiva de alcance internacional.
                    A raiz de ello, es necesario contar con recursos de lenguaje que aseguren una correcta y amena experiencia para el usuario.
                </h2>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="componentes">
                <h1 className="text-3xl text-white">Utilizar react-intl en los componentes</h1>
                <h2 className="text-slate-400 mt-4">
                    En una aplicación React, es común encontrarnos con la necesidad de contar con varias opciones de lenguaje de cara al usuario. Cada vez mas frecuentemente, nuestras aplicaciones son desarrolladas bajo una perspectiva de alcance internacional.
                    A raiz de ello, es necesario contar con recursos de lenguaje que aseguren una correcta y amena experiencia para el usuario.
                </h2>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="cambiar">
                <h1 className="text-3xl text-white">Cambiar Idioma Dinamicamente</h1>
                <h2 className="text-slate-400 mt-4">
                    En una aplicación React, es común encontrarnos con la necesidad de contar con varias opciones de lenguaje de cara al usuario. Cada vez mas frecuentemente, nuestras aplicaciones son desarrolladas bajo una perspectiva de alcance internacional.
                    A raiz de ello, es necesario contar con recursos de lenguaje que aseguren una correcta y amena experiencia para el usuario.
                </h2>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="aclaracion">
                <h1 className="text-3xl text-white">Aclaraciones Adicionales</h1>
                <h2 className="text-slate-400 mt-4">
                    En una aplicación React, es común encontrarnos con la necesidad de contar con varias opciones de lenguaje de cara al usuario. Cada vez mas frecuentemente, nuestras aplicaciones son desarrolladas bajo una perspectiva de alcance internacional.
                    A raiz de ello, es necesario contar con recursos de lenguaje que aseguren una correcta y amena experiencia para el usuario.
                </h2>

            </div>

            <Separator />

        </article>
    )
}

const SidebarContent = () => {
    return (
        <div className="text-white p-2 fixed content-sidebar-scroll content-sidebar-container">

            <div className='mb-8 content-sidebar-container-children'>

                <h1 className="text-sky-400 text-center">Contenido de la Pagina</h1>

                <ul>
                    <li className="mt-8 ml-4 text-slate-400"><a href="#about">Sobre este Articulo</a></li>

                    <li className="mt-4 ml-4 text-slate-400"><a href="#instalacion">Instalacion de FormatJS</a></li>

                    <li className="mt-4 ml-4 text-slate-400"><a href="#incorporar">Incorporar react-intl en la App</a></li>

                    <li className="mt-4 ml-4 text-slate-400"><a href="#ficheros">Ficheros de lenguaje</a></li>

                    <li className="mt-4 ml-4 text-slate-400"><a href="#componentes">Utilizar react-intl en los componentes</a></li>

                    <li className="mt-4 ml-4 text-slate-400"><a href="#cambiar">Cambiar Idioma Dinamicamente</a></li>

                    <li className="mt-4 ml-4 text-slate-400"><a href="#aclaracion">Aclaraciones Adicionales</a></li>

                </ul>
            </div>
        </div>
    )
}
