import { OperadoresLogicosCode, dividirLogicaCode, estructurasCode, logicaUECode, reactLazyCode, reactLazyImgCode, reactMemoCode, reactMemoContextCode, useCallBackCode } from "../../assets/code/optimizacionFront"
import { Separator } from "../../components/PageComponents/Separator"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { PageContainer } from "../PageContainer"
import { ShowCodeJavaScript } from "../../components/PageComponents/ShowCode"
import { ContentSidebarContainer, ContentSidebarItemTitle } from "../../components/Sidebar/ContentSidebar"
import { Title } from "../../components/PageComponents/Articles/Title"
import { ParagrafComponent } from "../../components/PageComponents/Articles/Paragraf"
import { SubTitle } from "../../components/PageComponents/Articles/SubTitle"

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

                <Title title={'Sobre este articulo'} />

                <ParagrafComponent>
                    En este artículo, exploraremos una serie de consejos y mejores prácticas para mejorar el rendimiento de nuestras aplicaciones frontend desarrolladas con React.
                </ParagrafComponent>

                <ParagrafComponent>
                    A medida que nuestras aplicaciones crecen en tamaño y complejidad, es crucial optimizarlas para garantizar una experiencia de usuario fluida y eficiente. La optimización en React implica identificar y abordar posibles cuellos de botella en el rendimiento,
                    reducir el uso innecesario de recursos y asegurarse de que nuestra aplicación se ejecute de manera eficiente en diferentes entornos.
                </ParagrafComponent>

                <ParagrafComponent>
                    A lo largo de este artículo, abordaremos diversos aspectos de la optimización en React, desde el uso adecuado de los hooks y el manejo eficiente del estado, hasta la optimización de renderizaciones y el aprovechamiento del rendimiento del navegador.
                    Exploraremos consejos prácticos respaldados por ejemplos de código, que te ayudarán a mejorar la velocidad de carga, reducir el uso de memoria y lograr una experiencia de usuario fluida en tus aplicaciones React.
                </ParagrafComponent>

                <ParagrafComponent>
                    Recuerda que la optimización no es solo un paso que se realiza al final del desarrollo, sino un proceso continuo a medida que iteramos y mejoramos nuestras aplicaciones. ¡Así que pongámonos manos a la obra y optimicemos nuestras aplicaciones React para un
                    rendimiento excepcional!
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="memo">

                <Title title={'Utiliza React.memo'} />

                <ParagrafComponent classNameCustom="mb-4">
                    La función React.memo te permite memorizar un componente y evitar su renderizado innecesario si las props no han cambiado. Esto es útil cuando tienes componentes
                    que se vuelven a renderizar frecuentemente pero no necesitan actualizarse. Por ejemplo:
                </ParagrafComponent>

                <ShowCodeJavaScript code={reactMemoCode} />

                <SubTitle text={'Evita la re-renderización innecesaria en contextos'} customClass="mt-6" />

                <ParagrafComponent classNameCustom="mb-4">
                    Utiliza la función React.memo para envolver tus componentes de contexto y evitar que se vuelvan a renderizar si las props del contexto no han cambiado. Esto mejora
                    el rendimiento al evitar actualizaciones innecesarias en los componentes descendientes. Por ejemplo:
                </ParagrafComponent>

                <ShowCodeJavaScript code={reactMemoContextCode} />

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="callback">

                <Title title={'Utiliza useCallback para Funciones'} />

                <ParagrafComponent classNameCustom="mb-4">
                    La función useCallback te permite memorizar una función y evitar su recreación en cada renderizado. Esto es especialmente útil cuando pasas funciones como props a
                    componentes hijos, ya que evita que los componentes se vuelvan a renderizar innecesariamente. Por ejemplo:
                </ParagrafComponent>

                <ShowCodeJavaScript code={useCallBackCode} />

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="lazy">

                <Title title={'Implementa Lazy Loading'} />

                <ParagrafComponent classNameCustom="mb-4">
                    Utiliza la función React.lazy junto con Suspense para cargar componentes de manera diferida, lo que mejora el tiempo de carga inicial de tu aplicación. Por ejemplo:
                </ParagrafComponent>

                <ShowCodeJavaScript code={reactLazyCode} />

                <SubTitle text={'Utiliza Lazy Loading para imagenes'} customClass="mt-6" />

                <ParagrafComponent classNameCustom="mb-4">
                    Carga las imágenes de forma diferida para mejorar el rendimiento inicial de tu aplicación. Puedes usar la propiedad loading{`="lazy"`} en las etiquetas {'<img>'}, lo que hará que
                    las imágenes se carguen solo cuando sean visibles en el viewport. Por ejemplo:
                </ParagrafComponent>

                <ShowCodeJavaScript code={reactLazyImgCode} />

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="logica">

                <Title title={'Divide la Logica de la App'} />

                <ParagrafComponent classNameCustom="mb-4">
                    Dividir tu aplicación en componentes más pequeños y reutilizables mejora la legibilidad y facilita el mantenimiento. Además, te permite renderizar solo los componentes necesarios
                    en cada actualización. Por ejemplo:
                </ParagrafComponent>

                <ShowCodeJavaScript code={dividirLogicaCode} />

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="useEffect">

                <Title title={'Utilizar UseEffect Correctamente'} />

                <SubTitle text={'Dividir la Logica'} customClass="mt-6" />

                <ParagrafComponent classNameCustom="mb-4">
                    Al momento de utilizar UseEffect, muchas veces los desarrolladores colocan mucho codigo o logica dentro de 1 solo useEffect. Los creadores de React recomiendan que cada useEffect maneje exclusivamente
                    1 evento. De esta manera nos sera mas facil distribuir las dependencias de cada efecto y manejarlas individualmente, podremos mejorar el rendimiento y la legibilidad del codigo. Por ejemplo.
                </ParagrafComponent>

                <ShowCodeJavaScript code={logicaUECode} />

                <SubTitle text={'Declarar correctamente las dependencias'} customClass="mt-6" />

                <ParagrafComponent classNameCustom="mb-4">
                    Debemos recordar que las dependencias de useEffect son quienes determinan el renderizado del mismo. Una incorrecta declaracion de dependencias ocasionaria re-renderizados no deseados, ocasionando
                    perdidas masivas de rendimiento, o perdidas de estado de la aplicacion. Por lo tanto debes prestar atencion a aquellos elementos que realmente necesitan ser incluidos para volver a ejecutar el renderizado de
                    useEffect
                </ParagrafComponent>

                {/* <ShowCodeJavaScript code={dividirLogicaCode} /> */}

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="codigojs">

                <Title title={'Codigo Javascript'} />

                <SubTitle text={'Utiliza Operadores Logicos'} customClass="mt-6" />

                <ParagrafComponent classNameCustom="mb-4">
                    Cuando sea necesario evaluar sentencias, muchas veces aquellos que no tienen mucha experiencia desarrollando, desconocen la existencia de los operadores logicos en las evaluaciones. Esto desencadena
                    sucesos como la anidacion de ifs, uso innecesarios de variables intermedias, perdida de rendimiento y legibilidad de codigo, entre otras cosas. Los operadores lógicos cortocircuitados, como && y ||,
                    permiten realizar evaluaciones condicionales de manera eficiente y evitar la ejecución innecesaria de código.
                    Por ejemplo:
                </ParagrafComponent>

                <ShowCodeJavaScript code={OperadoresLogicosCode} />

                <SubTitle text={'Utilizar estructuras de datos adecuadas'} customClass="mt-6" />

                <ParagrafComponent classNameCustom="mb-4">
                    En algunos casos, elegir la estructura de datos adecuada puede mejorar significativamente el rendimiento de tu código. Por ejemplo, utilizar un objeto en lugar de un array para buscar valores por clave puede ser más eficiente.
                    Por ejemplo:
                </ParagrafComponent>

                <ShowCodeJavaScript code={estructurasCode} />

            </div>

            <Separator />

            <Title title={'Proximamente Mas Consejos'} customClass="mt-6 text-center" />

        </article>
    )
}

const SidebarContent = () => {
    return (
        <ContentSidebarContainer>
            <ul>
                <ContentSidebarItemTitle title={'Sobre este Articulo'} id={'about'} customClassname="mt-8" />
                <ContentSidebarItemTitle title={'React.memo'} id={'memo'} />
                <ContentSidebarItemTitle title={'useCallback'} id={'callback'} />
                <ContentSidebarItemTitle title={'Lazy Loading'} id={'lazy'} />
                <ContentSidebarItemTitle title={'Divide la Logica de la App'} id={'logica'} />
                <ContentSidebarItemTitle title={'Utilizar UseEffect Correctamente'} id={'useEffect'} />
                <ContentSidebarItemTitle title={'Codigo Javascript'} id={'codigojs'} />
            </ul>
        </ContentSidebarContainer>
    )
}
