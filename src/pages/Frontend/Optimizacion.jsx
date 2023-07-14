import { OperadoresLogicosCode, dividirLogicaCode, estructurasCode, logicaUECode, reactLazyCode, reactLazyImgCode, reactMemoCode, reactMemoContextCode, useCallBackCode } from "../../assets/code/optimizacionFront"
import { Separator } from "../../components/PageComponents/Separator"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { PageContainer } from "../PageContainer"
import { ShowCodeJavaScript } from "../../components/PageComponents/ShowCode"

export const Optimizacion = () => {
    return (
        <PageContainer titlePage={'LibreriasFrontend'} pageContent={<Content />} sidebarContent={<SidebarContent />} />
    )
}


const Content = () => {
    return (
        <article className="md:text-justify">
            <TitlePage sectionTitle={'Frontend'} pageTitle={'Consejos de Optimizacion'} />

            <div className="mt-4 mr-10" id="about">
                <h1 className="text-3xl text-white">Sobre este articulo</h1>
                <h2 className="text-slate-400 mt-4">
                    En este artículo, exploraremos una serie de consejos y mejores prácticas para mejorar el rendimiento de nuestras aplicaciones frontend desarrolladas con React.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    A medida que nuestras aplicaciones crecen en tamaño y complejidad, es crucial optimizarlas para garantizar una experiencia de usuario fluida y eficiente. La optimización en React implica identificar y abordar posibles cuellos de botella en el rendimiento,
                    reducir el uso innecesario de recursos y asegurarse de que nuestra aplicación se ejecute de manera eficiente en diferentes entornos.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    A lo largo de este artículo, abordaremos diversos aspectos de la optimización en React, desde el uso adecuado de los hooks y el manejo eficiente del estado, hasta la optimización de renderizaciones y el aprovechamiento del rendimiento del navegador.
                    Exploraremos consejos prácticos respaldados por ejemplos de código, que te ayudarán a mejorar la velocidad de carga, reducir el uso de memoria y lograr una experiencia de usuario fluida en tus aplicaciones React.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    Recuerda que la optimización no es solo un paso que se realiza al final del desarrollo, sino un proceso continuo a medida que iteramos y mejoramos nuestras aplicaciones. ¡Así que pongámonos manos a la obra y optimicemos nuestras aplicaciones React para un rendimiento excepcional!
                </h2>
            </div>

            <Separator />

            <div className="mt-4 mr-10" id="memo">
                <h1 className="text-3xl text-white">Utiliza React.memo</h1>
                <h2 className="text-slate-400 mt-4 mb-4">
                    La función React.memo te permite memorizar un componente y evitar su renderizado innecesario si las props no han cambiado. Esto es útil cuando tienes componentes
                    que se vuelven a renderizar frecuentemente pero no necesitan actualizarse. Por ejemplo:
                </h2>

                <div className="codeImg">
                    <ShowCodeJavaScript code={reactMemoCode} />
                </div>

                <h1 className="text-2xl text-sky-400 mt-6">Evita la re-renderización innecesaria en contextos</h1>

                <h2 className="text-slate-400 mt-4 mb-4">
                    Utiliza la función React.memo para envolver tus componentes de contexto y evitar que se vuelvan a renderizar si las props del contexto no han cambiado. Esto mejora
                    el rendimiento al evitar actualizaciones innecesarias en los componentes descendientes. Por ejemplo:
                </h2>

                <div className="codeImg">
                    <ShowCodeJavaScript code={reactMemoContextCode} />
                </div>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="callback">
                <h1 className="text-3xl text-white">Utiliza useCallback para Funciones</h1>
                <h2 className="text-slate-400 mt-4 mb-4">
                    La función useCallback te permite memorizar una función y evitar su recreación en cada renderizado. Esto es especialmente útil cuando pasas funciones como props a
                    componentes hijos, ya que evita que los componentes se vuelvan a renderizar innecesariamente. Por ejemplo:
                </h2>

                <div className="codeImg">
                    <ShowCodeJavaScript code={useCallBackCode} />
                </div>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="lazy">
                <h1 className="text-3xl text-white">Implementa Lazy Loading</h1>
                <h2 className="text-slate-400 mt-4 mb-4">
                    Utiliza la función React.lazy junto con Suspense para cargar componentes de manera diferida, lo que mejora el tiempo de carga inicial de tu aplicación. Por ejemplo:
                </h2>

                <div className="codeImg">
                    <ShowCodeJavaScript code={reactLazyCode} />
                </div>

                <h1 className="text-2xl text-sky-400 mt-6">Utiliza Lazy Loading para imagenes</h1>

                <h2 className="text-slate-400 mt-4 mb-4">
                    Carga las imágenes de forma diferida para mejorar el rendimiento inicial de tu aplicación. Puedes usar la propiedad loading{`="lazy"`} en las etiquetas {'<img>'}, lo que hará que
                    las imágenes se carguen solo cuando sean visibles en el viewport. Por ejemplo:
                </h2>

                <div className="codeImg">
                    <ShowCodeJavaScript code={reactLazyImgCode} />
                </div>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="logica">
                <h1 className="text-3xl text-white">Divide la Logica de la App</h1>
                <h2 className="text-slate-400 mt-4 mb-4">
                    Dividir tu aplicación en componentes más pequeños y reutilizables mejora la legibilidad y facilita el mantenimiento. Además, te permite renderizar solo los componentes necesarios
                    en cada actualización. Por ejemplo:
                </h2>

                <div className="codeImg">
                    <ShowCodeJavaScript code={dividirLogicaCode} />
                </div>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="useEffect">
                <h1 className="text-3xl text-white">Utilizar UseEffect Correctamente</h1>

                <h1 className="text-2xl text-sky-400 mt-6">Dividir la Logica</h1>

                <h2 className="text-slate-400 mt-4 mb-4">
                    Al momento de utilizar UseEffect, muchas veces los desarrolladores colocan mucho codigo o logica dentro de 1 solo useEffect. Los creadores de React recomiendan que cada useEffect maneje exclusivamente
                    1 evento. De esta manera nos sera mas facil distribuir las dependencias de cada efecto y manejarlas individualmente, podremos mejorar el rendimiento y la legibilidad del codigo. Por ejemplo.
                </h2>

                <div className="codeImg">
                    <ShowCodeJavaScript code={logicaUECode} />
                </div>

                <h1 className="text-2xl text-sky-400 mt-6">Declarar correctamente las dependencias</h1>

                <h2 className="text-slate-400 mt-4 mb-4">
                    Debemos recordar que las dependencias de useEffect son quienes determinan el renderizado del mismo. Una incorrecta declaracion de dependencias ocasionaria re-renderizados no deseados, ocasionando
                    perdidas masivas de rendimiento, o perdidas de estado de la aplicacion. Por lo tanto debes prestar atencion a aquellos elementos que realmente necesitan ser incluidos para volver a ejecutar el renderizado de 
                    useEffect
                </h2>

                <div className="codeImg">
                    {/* <ShowCodeJavaScript code={dividirLogicaCode} /> */}
                </div>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="codigojs">
                <h1 className="text-3xl text-white">Codigo Javascript</h1>

                <h1 className="text-2xl text-sky-400 mt-6">Utiliza Operadores Logicos</h1>

                <h2 className="text-slate-400 mt-4 mb-4">
                    Cuando sea necesario evaluar sentencias, muchas veces aquellos que no tienen mucha experiencia desarrollando, desconocen la existencia de los operadores logicos en las evaluaciones. Esto desencadena
                    sucesos como la anidacion de ifs, uso innecesarios de variables intermedias, perdida de rendimiento y legibilidad de codigo, entre otras cosas. Los operadores lógicos cortocircuitados, como && y ||,
                    permiten realizar evaluaciones condicionales de manera eficiente y evitar la ejecución innecesaria de código.
                    Por ejemplo:
                </h2>

                <div className="codeImg">
                    <ShowCodeJavaScript code={OperadoresLogicosCode} />
                </div>

                <h1 className="text-2xl text-sky-400 mt-6">Utilizar estructuras de datos adecuadas</h1>

                <h2 className="text-slate-400 mt-4 mb-4">
                    En algunos casos, elegir la estructura de datos adecuada puede mejorar significativamente el rendimiento de tu código. Por ejemplo, utilizar un objeto en lugar de un array para buscar valores por clave puede ser más eficiente.
                    Por ejemplo:
                </h2>

                <div className="codeImg">
                    <ShowCodeJavaScript code={estructurasCode} />
                </div>

            </div>

            <Separator />

            <h1 className="text-3xl text-white mt-6 text-center">Proximamente Mas Consejos</h1>

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

                    <li className="mt-4 ml-4 text-slate-400"><a href="#memo">React.memo</a></li>

                    <li className="mt-4 ml-4 text-slate-400"><a href="#callback">useCallback</a></li>

                    <li className="mt-4 ml-4 text-slate-400"><a href="#lazy">Lazy Loading</a></li>

                    <li className="mt-4 ml-4 text-slate-400"><a href="#logica">Divide la Logica de la App</a></li>

                    <li className="mt-4 ml-4 text-slate-400"><a href="#useEffect">Utilizar UseEffect Correctamente</a></li>

                    <li className="mt-4 ml-4 text-slate-400"><a href="#codigojs">Codigo Javascript</a></li>

                </ul>
            </div>
        </div>
    )
}

