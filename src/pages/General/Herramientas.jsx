import { ParagrafComponent } from "../../components/PageComponents/Articles/Paragraf"
import { SubTitle } from "../../components/PageComponents/Articles/SubTitle"
import { Title } from "../../components/PageComponents/Articles/Title"
import { LinksToPagesChromeWeb, LinksToPagesOrange } from "../../components/PageComponents/LinksToPages"
import { Separator } from "../../components/PageComponents/Separator"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { ContentSidebarContainer, ContentSidebarItemSubTitle, ContentSidebarItemTitle } from "../../components/Sidebar/ContentSidebar"
import { PageContainer } from "../PageContainer"

export const Herramientas = () => {
    return (
        <PageContainer titlePage={'Herramientas'} pageContent={<Content />} sidebarContent={<SidebarContent />} />
    )
}

const Content = () => {
    return (
        <article className="md:text-justify">
            <TitlePage sectionTitle={'General'} pageTitle={'Herramientas de Desarrollo'} />

            <div className="mt-4 mr-10" id="about">

                <Title title={'Sobre este articulo'} />

                <ParagrafComponent>
                    En este artículo, exploraremos una selección de herramientas de desarrollo que se han convertido en aliados indispensables para programadores, diseñadores y equipos de desarrollo en general.
                    Estamos a punto de sumergirnos en un conjunto de herramientas poderosas que optimizarán tu flujo de trabajo, mejorarán la colaboración en equipo y aumentarán tu productividad. Conocerás desde soluciones para diseñar elegantes interfaces de usuario hasta plataformas para gestionar
                    proyectos ágiles y realizar pruebas exhaustivas en tus aplicaciones.
                </ParagrafComponent>

                <ParagrafComponent>
                    Exploraremos en detalle herramientas como Postman, una poderosa herramienta para probar y depurar APIs; draw.io, ideal para crear diagramas y modelos visuales que clarifiquen nuestras ideas; Git, el popular sistema de control de versiones que revolucionó la colaboración en desarrollo de
                    software; Figma, una innovadora plataforma de diseño que permite a equipos crear y prototipar interfaces de usuario de manera conjunta y eficiente; Jira, el aliado perfecto para la gestión ágil de proyectos; y Docker, la solución ideal para empaquetar, distribuir y ejecutar aplicaciones en contenedores.
                </ParagrafComponent>

                <ParagrafComponent>
                    Además, no podemos olvidar las extensiones del navegador Chrome DevTools, que nos proporcionarán superpoderes para depurar, analizar y optimizar nuestras páginas web en tiempo real.
                </ParagrafComponent>

                <ParagrafComponent>
                    Prepárate para explorar estas herramientas y descubrir cómo transforman la forma en que desarrollamos, diseñamos y gestionamos proyectos. Desde proyectos individuales hasta equipos de desarrollo, estas herramientas te permitirán impulsar la eficiencia, mejorar la calidad del código y llevar tus habilidades
                    a nuevos horizontes.
                </ParagrafComponent>

            </div>

            <Separator />

            <Title title={'Listado de Herramientas'} customClass="mt-10" id="listado" />

            <div className="mt-8 mr-10" id="postman">

                <SubTitle text={'Postman'} />

                <ParagrafComponent>
                    Postman es una herramienta de desarrollo de API de nivel profesional que se ha convertido en una elección popular para desarrolladores y equipos de desarrollo en todo el mundo. Con una interfaz de usuario intuitiva y potentes características, Postman permite a los desarrolladores simplificar y agilizar el proceso de prueba, depuración y desarrollo de APIs.
                </ParagrafComponent>

                <ParagrafComponent>
                    Postman te permite organizar y agrupar tus peticiones de API en colecciones, lo que facilita la gestión y la reutilización de las solicitudes en diferentes proyectos. Además, puedes crear entornos personalizados para tus pruebas, lo que te permite cambiar fácilmente entre configuraciones de variables y endpoints según las necesidades de desarrollo.
                </ParagrafComponent>

                <ParagrafComponent>
                    Una de las características destacadas de Postman es la capacidad de crear pruebas automatizadas para tus APIs, lo que te ayuda a verificar la integridad y el correcto funcionamiento de tus endpoints con solo un clic. También puedes recibir alertas en tiempo real sobre el rendimiento de tus APIs gracias a la función de monitoreo.
                </ParagrafComponent>

                <ParagrafComponent>
                    Postman facilita la colaboración en equipo, lo que permite a los desarrolladores trabajar juntos en proyectos de API y compartir fácilmente las colecciones y pruebas. Además, con la generación automática de documentación clara y detallada de tus APIs, Postman se convierte en una herramienta completa para el desarrollo y la gestión de APIs.
                </ParagrafComponent>

                <LinksToPagesOrange link={'https://www.postman.com'} />

            </div>

            <div className="mt-8 mr-10" id="drawio">

                <SubTitle text={'Draw Io'} />

                <ParagrafComponent>
                    Draw.io es una herramienta gráfica y versátil que ofrece una solución completa para que los programadores creen diversos diagramas y modelos visuales que son esenciales en el desarrollo de software. Desde diagramas de modelo de dominio y casos de uso hasta diagramas físicos, de arquitectura y de despliegue, Draw.io permite a los desarrolladores plasmar sus
                    ideas y conceptos de manera visual y clara.
                </ParagrafComponent>

                <ParagrafComponent>
                    Con su interfaz intuitiva y fácil de usar, Draw.io proporciona una experiencia fluida en la creación de diagramas. Los desarrolladores pueden empezar desde cero o elegir entre una amplia gama de plantillas predefinidas para distintos tipos de diagramas, lo que acelera el proceso de diseño. Además, la herramienta ofrece la posibilidad de colaborar en tiempo real,
                    lo que facilita el trabajo en equipo y la revisión conjunta de los diagramas.
                </ParagrafComponent>

                <ParagrafComponent>
                    Para aquellos que trabajan en proyectos complejos, Draw.io es especialmente útil para diseñar diagramas de arquitectura y despliegue. Los desarrolladores pueden esquematizar y representar visualmente la estructura del sistema, los componentes, las interacciones y la distribución en diferentes entornos.
                    Asimismo, los diagramas de modelo de dominio y casos de uso permiten una comprensión más clara de la lógica y los procesos del software en desarrollo. Draw.io posibilita definir entidades, atributos, relaciones y flujos de trabajo, lo que facilita la comunicación entre los miembros del equipo y los stakeholders.
                </ParagrafComponent>

                <ParagrafComponent>
                    La flexibilidad de Draw.io también se destaca en la capacidad de crear diagramas físicos, que son útiles para ilustrar el diseño de bases de datos, esquemas de red y componentes hardware.
                </ParagrafComponent>

                <LinksToPagesOrange link={'https://www.drawio.com/'} />

            </div>

            <div className="mt-8 mr-10" id="vsc">

                <SubTitle text={'Visual Studio Code'} />

                <ParagrafComponent>
                    Visual Studio Code (VS Code) se ha convertido en una de las herramientas más populares y queridas por los desarrolladores en la última década. Diseñado y desarrollado por Microsoft, este editor de código fuente de código abierto ha ganado una inmensa popularidad gracias a su flexibilidad, potencia y una amplia gama
                    de extensiones que lo hacen apto para cualquier tipo de desarrollo.
                </ParagrafComponent>

                <ParagrafComponent>
                    VS Code se destaca por su interfaz de usuario intuitiva y su facilidad de uso, lo que lo convierte en una excelente opción tanto para principiantes como para desarrolladores experimentados. Su editor de texto inteligente ofrece resaltado de sintaxis para una amplia variedad de lenguajes de programación, lo que facilita la
                    lectura y escritura de código sin errores.
                </ParagrafComponent>

                <ParagrafComponent>
                    Una de las características más destacadas de VS Code es su soporte para extensiones. Con un ecosistema en constante crecimiento de complementos y extensiones creados por la comunidad, los desarrolladores pueden personalizar su experiencia de desarrollo según sus necesidades y preferencias. Estas extensiones abarcan desde temas
                    y esquemas de colores hasta herramientas de depuración y soporte para nuevos lenguajes y marcos. El depurador integrado es otra funcionalidad valiosa que ofrece VS Code. Los desarrolladores pueden depurar su código paso a paso, establecer puntos de interrupción y realizar seguimiento de variables y estados para identificar y
                    solucionar errores de manera más eficiente.
                </ParagrafComponent>

                <ParagrafComponent>
                    La integración con Git también es sobresaliente en VS Code. Los desarrolladores pueden realizar operaciones de control de versiones, como confirmar, revertir y enviar cambios, directamente desde la interfaz del editor. Esto facilita el trabajo colaborativo en proyectos y permite a los equipos mantener un control de versiones sólido.
                    Otra característica útil de VS Code es la terminal integrada, que permite a los desarrolladores ejecutar comandos directamente en el editor. Esto ahorra tiempo y evita la necesidad de cambiar entre ventanas y aplicaciones, lo que mejora la productividad general.
                </ParagrafComponent>

                <ParagrafComponent>
                    Además, VS Code es altamente extensible a través de su API de extensión, lo que permite a los desarrolladores crear sus propias extensiones o personalizar aún más el editor para satisfacer sus necesidades específicas. Esto ha llevado a la creación de una comunidad activa y diversa que comparte y contribuye a la mejora continua del editor.
                </ParagrafComponent>

                <LinksToPagesOrange link={'https://code.visualstudio.com/'} />

            </div>

            <div className="mt-8 mr-10" id="jira">

                <SubTitle text={'Jira'} />

                <ParagrafComponent>
                    Jira es una poderosa herramienta de gestión de proyectos y desarrollo de software creada para optimizar y agilizar los procesos de trabajo en equipos de desarrollo. Desarrollada por Atlassian, Jira se ha convertido en una de las plataformas más populares y ampliamente
                    utilizadas en la industria de la tecnología.
                </ParagrafComponent>

                <ParagrafComponent>
                    Con Jira, los equipos de desarrollo pueden planificar, rastrear y administrar tareas de manera efectiva y colaborativa. La herramienta proporciona un entorno centralizado donde los miembros del equipo pueden visualizar el flujo de trabajo, asignar tareas, establecer
                    prioridades y realizar un seguimiento del progreso en tiempo real.
                </ParagrafComponent>

                <ParagrafComponent>
                    Una de las características destacadas de Jira es su capacidad para trabajar con metodologías ágiles, como Scrum y Kanban. Los tableros de tareas personalizables permiten a los equipos adaptar Jira a sus procesos de desarrollo específicos, lo que mejora la eficiencia y la
                    comunicación dentro del equipo.
                </ParagrafComponent>

                <ParagrafComponent>
                    Además, Jira ofrece una amplia variedad de herramientas y plugins que amplían su funcionalidad, como integraciones con herramientas de control de versiones, sistemas de seguimiento de errores y herramientas de automatización. Esto permite a los equipos integrar Jira en su
                    flujo de trabajo existente y aumentar la productividad.
                    Otra ventaja de Jira es su capacidad para facilitar la colaboración entre equipos y departamentos. Los stakeholders pueden acceder a Jira para seguir el progreso del proyecto, proporcionar comentarios y realizar solicitudes, lo que mejora la transparencia y la comunicación
                    en todo el ciclo de desarrollo.
                </ParagrafComponent>

                <LinksToPagesOrange link={'https://www.atlassian.com/es/software/jira'} />

            </div>

            <div className="mt-8 mr-10" id="git">

                <SubTitle text={'Git'} />

                <ParagrafComponent>
                    Git es un sistema de control de versiones distribuido ampliamente utilizado en el desarrollo de software. Creado por Linus Torvalds en 2005, Git se ha convertido en la elección preferida para equipos de desarrollo debido a su flexibilidad, eficiencia y capacidad para facilitar la
                    colaboración entre desarrolladores.
                </ParagrafComponent>

                <ParagrafComponent>
                    El principal objetivo de Git es rastrear los cambios en el código fuente a lo largo del tiempo y permitir la colaboración entre múltiples desarrolladores de manera fluida y segura. A diferencia de otros sistemas de control de versiones centralizados, Git opera en un entorno distribuido,
                    lo que significa que cada miembro del equipo tiene una copia completa del repositorio en su máquina local.
                </ParagrafComponent>

                <ParagrafComponent>
                    Este enfoque distribuido ofrece varias ventajas significativas. Los desarrolladores pueden trabajar de manera independiente en sus propias ramas, realizar cambios y experimentar con nuevas características sin afectar el trabajo de otros. Una vez que están satisfechos con sus cambios, pueden
                    enviarlos al repositorio principal, conocido como `master` o `main`, mediante un proceso conocido como `merge` o `pull request`.
                </ParagrafComponent>

                <ParagrafComponent>
                    Además de su naturaleza distribuida, Git también es apreciado por su velocidad y eficiencia en el manejo de grandes proyectos y la capacidad de manejar ramificaciones de código con facilidad. Las ramas permiten que diferentes funciones o características se desarrollen de manera aislada y luego
                    se fusionen de manera segura una vez que están listas para su integración. Otra característica esencial de Git es su capacidad para mantener un historial completo de cambios, lo que brinda a los desarrolladores la posibilidad de retroceder en el tiempo y restaurar versiones anteriores del código
                    si es necesario. Esto proporciona una red de seguridad valiosa y ayuda a evitar la pérdida de código o cambios importantes.
                </ParagrafComponent>

                <ParagrafComponent>
                    Git también permite una colaboración efectiva entre equipos de desarrollo, ya que múltiples desarrolladores pueden trabajar simultáneamente en diferentes partes del proyecto. La capacidad de revisar y aprobar cambios a través de `pull requests` proporciona un mecanismo para una revisión de código
                    más eficiente y asegura la calidad del código antes de la integración.
                </ParagrafComponent>

                <LinksToPagesOrange link={'https://git-scm.com/'} />

            </div>

            <div className="mt-8 mr-10" id="figma">

                <SubTitle text={'Figma'} />

                <ParagrafComponent>
                    Figma es una poderosa herramienta de diseño y prototipado que ha revolucionado la forma en que los equipos de diseño y desarrollo colaboran en la creación de proyectos creativos. Diseñado como una aplicación en la nube, Figma ofrece un entorno de trabajo en tiempo real que permite a los equipos trabajar juntos
                    de manera simultánea, sin importar su ubicación geográfica.
                </ParagrafComponent>

                <ParagrafComponent>
                    Con Figma, los diseñadores pueden crear y compartir diseños de interfaces de usuario, ilustraciones, gráficos y cualquier otro tipo de diseño de forma rápida y sencilla. Su interfaz intuitiva y sus potentes funciones lo hacen accesible tanto para diseñadores novatos como para expertos.
                    Una de las características más destacadas de Figma es la facilidad con la que se pueden crear prototipos interactivos. Los diseñadores pueden vincular diferentes pantallas y elementos para simular la navegación y la interacción del usuario, lo que facilita la visualización y la evaluación
                    del flujo de trabajo de la aplicación o sitio web en desarrollo.
                </ParagrafComponent>

                <ParagrafComponent>
                    Además, Figma ofrece una biblioteca de componentes reutilizables que permite a los equipos mantener la coherencia y consistencia visual en todo el proyecto. Los componentes se pueden compartir y actualizar de manera centralizada, lo que acelera el proceso de diseño y garantiza una apariencia y funcionalidad
                    coherentes en todas las páginas y secciones del proyecto.
                </ParagrafComponent>

                <ParagrafComponent>
                    La colaboración es el núcleo de Figma, y su enfoque en el trabajo en equipo es evidente en sus características de edición en tiempo real. Varios miembros del equipo pueden colaborar simultáneamente en un diseño, lo que elimina la necesidad de enviar archivos adjuntos y evita la duplicación de esfuerzos. Los comentarios y
                    anotaciones también facilitan la comunicación entre los miembros del equipo, lo que lleva a decisiones más informadas y resultados finales más sólidos.
                </ParagrafComponent>

                <ParagrafComponent>
                    Además, Figma es compatible con una amplia gama de complementos y extensiones que permiten a los diseñadores ampliar su funcionalidad y optimizar su flujo de trabajo. Estos complementos abarcan desde integraciones con otras herramientas populares hasta mejoras de productividad y automatización de tareas repetitivas.
                    Figma también es altamente versátil y se adapta a diferentes flujos de trabajo y necesidades. Desde diseño de interfaces de usuario hasta creación de logotipos y presentaciones visuales, Figma es una herramienta polivalente que puede adaptarse a diversos proyectos creativos.
                </ParagrafComponent>

                <LinksToPagesOrange link={'https://www.figma.com/'} />

            </div>

            <div className="mt-8 mr-10" id="docker">

                <SubTitle text={'Docker'} />

                <ParagrafComponent>
                    Docker es una plataforma de código abierto que permite desarrollar, desplegar y ejecutar aplicaciones dentro de contenedores. Estos contenedores son entornos de ejecución ligeros y portátiles que encapsulan una aplicación y todas sus dependencias, lo que facilita la implementación de aplicaciones en diferentes entornos sin
                    preocuparse por las diferencias en la infraestructura subyacente.
                </ParagrafComponent>

                <ParagrafComponent>
                    Con Docker, los desarrolladores pueden crear un contenedor que incluye su aplicación, junto con todas las bibliotecas y dependencias necesarias. Esto garantiza que la aplicación se ejecute de manera consistente en cualquier entorno, ya sea en un entorno de desarrollo local, en pruebas de integración o en producción en la nube.
                </ParagrafComponent>

                <ParagrafComponent>
                    Una de las principales ventajas de Docker es que ayuda a resolver el problema del famoso `funciona en mi máquina` al brindar un ambiente aislado y reproducible. Los contenedores de Docker se ejecutan de manera consistente en cualquier sistema operativo que admita Docker, lo que garantiza que la aplicación se comporte de la misma
                    manera en todos los entornos.
                </ParagrafComponent>

                <ParagrafComponent>
                    Además, Docker también facilita la gestión y escalabilidad de las aplicaciones. Puedes orquestar múltiples contenedores utilizando herramientas como Docker Compose o Kubernetes, lo que permite desplegar y gestionar aplicaciones distribuidas de manera eficiente.
                </ParagrafComponent>

                <LinksToPagesOrange link={'docker.com'} />

            </div>

            <Title title={'Extensiones de Google Chrome'} customClass="mt-10" id="extensiones" />

            <ParagrafComponent>
                A continuacion te dejare un listado de extensiones que deberias hechar un vistazo para optimizar tu flujo de trabajo a la hora de desarrollar apps web.
            </ParagrafComponent>

            <div className="mt-8 mr-10" id="cz">
                <SubTitle text={'ColorZilla'} />
                <LinksToPagesChromeWeb link={'https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp'} text={'Link a ColorZilla en Chrome Web Store'} />
            </div>

            <div className="mt-8 mr-10" id="jvp">
                <SubTitle text={'JSON Viewer Pro'} />
                <LinksToPagesChromeWeb link={'https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc'} text={'Link a JSON Viewer Pro en Chrome Web Store'} />
            </div>

            <div className="mt-8 mr-10" id="lgt">
                <SubTitle text={'Lighthouse'} />
                <LinksToPagesChromeWeb link={'https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk'} text={'Link a Lighthouse en Chrome Web Store'} />
            </div>

            <div className="mt-8 mr-10" id="rdt">
                <SubTitle text={'React Developer Tools'} />
                <LinksToPagesChromeWeb link={'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi'} text={'Link a React Developer Tools en Chrome Web Store'} />
            </div>

            <div className="mt-8 mr-10" id="rd">
                <SubTitle text={'Redux DevTools'} />
                <LinksToPagesChromeWeb link={'https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd'} text={'Link a Redux DevTools en Chrome Web Store'} />
            </div>

            <div className="mt-8 mr-10" id="sm">
                <SubTitle text={'Simulador móvil'} />
                <LinksToPagesChromeWeb link={'https://chrome.google.com/webstore/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk'} text={'Link a Simulador móvil en Chrome Web Store'} />
            </div>

            <div className="mt-8 mr-10" id="visbug">
                <SubTitle text={'VisBug'} />
                <LinksToPagesChromeWeb link={'https://chrome.google.com/webstore/detail/visbug/cdockenadnadldjbbgcallicgledbeoc'} text={'Link a VisBug en Chrome Web Store'} />
            </div>

            <div className="mt-8 mr-10" id="vr">
                <SubTitle text={'Viewport Resizer'} />
                <LinksToPagesChromeWeb link={'https://chrome.google.com/webstore/detail/viewport-resizer-%E2%80%93-respon/kapnjjcfcncngkadhpmijlkblpibdcgm'} text={'Link a Viewport Resizer en Chrome Web Store'} />
            </div>

        </article>
    )
}

const SidebarContent = () => {
    return (
        <ContentSidebarContainer>
            <ul>
                <ContentSidebarItemTitle title={'Sobre este Articulo'} id={'about'} customClassname="mt-8" />
                <ContentSidebarItemTitle title={'Listado de Herramientas'} id={'listado'} />

                <ContentSidebarItemSubTitle title={'Postman'} id={'postman'} />
                <ContentSidebarItemSubTitle title={'Draw Io'} id={'drawio'} />
                <ContentSidebarItemSubTitle title={'Visual Studio Code'} id={'vsc'} />
                <ContentSidebarItemSubTitle title={'Jira'} id={'jira'} />
                <ContentSidebarItemSubTitle title={'Git'} id={'git'} />
                <ContentSidebarItemSubTitle title={'Figma'} id={'figma'} />
                <ContentSidebarItemSubTitle title={'Docker'} id={'docker'} />

                <ContentSidebarItemTitle title={'Extensiones de Google Chrome'} id={'extensiones'} />

                <ContentSidebarItemSubTitle title={'ColorZilla'} id={'cz'} />
                <ContentSidebarItemSubTitle title={'JSON Viewer Pro'} id={'jvp'} />
                <ContentSidebarItemSubTitle title={'Lighthouse'} id={'lgt'} />
                <ContentSidebarItemSubTitle title={'React Developer Tools'} id={'rdt'} />
                <ContentSidebarItemSubTitle title={'Redux DevTools'} id={'rd'} />
                <ContentSidebarItemSubTitle title={'Simulador móvil'} id={'sm'} />
                <ContentSidebarItemSubTitle title={'VisBug'} id={'visbug'} />
                <ContentSidebarItemSubTitle title={'Viewport Resizer'} id={'vr'} />
            </ul>
        </ContentSidebarContainer>
    )
}
