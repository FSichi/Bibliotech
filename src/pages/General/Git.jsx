import { ParagrafComponent } from "../../components/PageComponents/Articles/Paragraf"
import { SubTitle } from "../../components/PageComponents/Articles/SubTitle"
import { Title } from "../../components/PageComponents/Articles/Title"
import { Separator } from "../../components/PageComponents/Separator"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { ContentSidebarContainer, ContentSidebarItemSubTitle, ContentSidebarItemTitle } from "../../components/Sidebar/ContentSidebar"
import { PageContainer } from "../PageContainer"

export const Git = () => {
    return (
        <PageContainer titlePage={'Git'} pageContent={<Content />} sidebarContent={<SidebarContent />} />
    )
}

const Content = () => {
    return (
        <article className="md:text-justify">
            <TitlePage sectionTitle={'General'} pageTitle={'Organizacion Git'} />

            <div className="mt-4 mr-10" id="about">

                <Title text={'Sobre este articulo'} />

                <ParagrafComponent>
                    Bienvenidos al apasionante mundo de la organización de proyectos de desarrollo con Git. Si eres desarrollador o trabajas en un equipo de desarrollo de software, seguramente estás familiarizado con la importancia de un control de versiones sólido y eficiente. Git, sin duda, se ha convertido en la herramienta de control de versiones
                    más popular y ampliamente utilizada en la comunidad de desarrollo.
                </ParagrafComponent>

                <ParagrafComponent>
                    A medida que los proyectos de software crecen en complejidad, la correcta organización y estructuración del repositorio de Git se vuelve esencial para mantener la colaboración, la eficiencia y la coherencia en el desarrollo. Una buena organización de Git puede facilitar la colaboración entre desarrolladores, ayudar a mantener un historial
                    limpio de cambios y simplificar el proceso de despliegue.
                </ParagrafComponent>

                <ParagrafComponent>
                    En este artículo, exploraremos las mejores prácticas y estrategias para organizar tu repositorio de Git de manera efectiva. Veremos cómo estructurar ramas, etiquetar versiones, trabajar con ramas principales como `develop` y `master`, y cómo aprovechar las ramas de características o `feature branches` para desarrollar nuevas funcionalidades de forma aislada.
                </ParagrafComponent>

                <ParagrafComponent>
                    Además, hablaremos sobre el flujo de trabajo Git más comúnmente utilizado, como el Git Flow, que te permitirá gestionar el ciclo de vida de tu proyecto con mayor facilidad y evitar conflictos innecesarios.
                    Ya seas un principiante que busca entender cómo organizar tu primer repositorio o un desarrollador experimentado que busca optimizar su flujo de trabajo, este artículo tiene algo para todos.
                </ParagrafComponent>

            </div>

            <Separator />

            <Title title={'Organización de Git en Proyectos de Desarrollo'} id="organizacion" />

            <div className="mt-8 mr-10" id="intro">

                <SubTitle text={'Introducción'} />

                <ParagrafComponent>
                    En el emocionante mundo del desarrollo de software, mantener un control de versiones sólido y eficiente es fundamental para el éxito de cualquier proyecto. Git, la herramienta de control de versiones más popular, ofrece una amplia gama de funcionalidades que permiten a los equipos de desarrollo colaborar de manera efectiva, mantener un historial de cambios limpio y facilitar el despliegue de software.
                </ParagrafComponent>

                <ParagrafComponent>
                    En este artículo, exploraremos las mejores prácticas y estrategias para organizar tu repositorio de Git de manera efectiva. Aprenderemos cómo estructurar las ramas, etiquetar versiones y cómo aprovechar al máximo las funcionalidades de Git para lograr una organización sólida y coherente.
                </ParagrafComponent>

            </div>

            <div className="mt-4 mr-10" id="importancia">

                <SubTitle text={'La Importancia de una Buena Organización de Git'} />

                <ParagrafComponent>
                    Una buena organización de Git puede tener un impacto significativo en el desarrollo de software. Proporciona claridad y estructura a lo largo del ciclo de vida del proyecto, lo que facilita la colaboración entre desarrolladores y la administración de cambios. Al organizar adecuadamente el repositorio, se evitan conflictos innecesarios y se mejora la eficiencia del equipo de desarrollo.
                </ParagrafComponent>

                <ParagrafComponent>
                    Cuando varios desarrolladores trabajan en un proyecto, es esencial mantener una estructura ordenada y coherente para garantizar que todos los miembros del equipo estén en la misma página. Una buena organización de Git también facilita la revisión de cambios, la resolución de problemas y la identificación de errores.
                </ParagrafComponent>

            </div>

            <div className="mt-4 mr-10" id="ramas">
                <SubTitle text={'Ramas Principales: `Develop` y `Master`'} />

                <ParagrafComponent>
                    Las ramas principales, como `develop` y `master`, juegan un papel fundamental en la organización de Git. La rama `develop` es donde se combinan todas las características completadas y probadas antes de liberar una nueva versión del software. Trabajar en la rama `develop` permite a los desarrolladores colaborar en nuevas funcionalidades sin afectar la versión estable del proyecto.
                </ParagrafComponent>

                <ParagrafComponent>
                    La rama `master` representa la versión estable y lista para producción del proyecto. Cuando se ha probado y validado el código en la rama `develop`, se fusiona con la rama `master` para marcar un nuevo lanzamiento o una versión estable del software. Es importante mantener la rama `master` limpia y estable, lo que significa que solo debe contener código probado y listo para su despliegue en producción.
                </ParagrafComponent>

            </div>

            <div className="mt-4 mr-10" id="feature">
                <SubTitle text={'Ramas de Características o `Feature Branches`'} />

                <ParagrafComponent>
                    Las ramas de características, también conocidas como `feature branches`, son ramas aisladas que se crean para desarrollar nuevas funcionalidades o solucionar problemas específicos. Trabajar en ramas de características permite a los desarrolladores trabajar de forma aislada sin afectar la rama principal del proyecto hasta que la funcionalidad esté completa y probada.
                </ParagrafComponent>

                <ParagrafComponent>
                    El uso de ramas de características ayuda a mantener un historial de cambios limpio y facilita la revisión de código. Cada característica o corrección de errores se desarrolla en su propia rama, lo que permite una mejor organización y facilita la colaboración entre miembros del equipo.
                </ParagrafComponent>

            </div>

            <div className="mt-4 mr-10" id="versiones">
                <SubTitle text={'Etiquetado de Versiones'} />

                <ParagrafComponent>
                    El etiquetado de versiones en Git es una práctica importante para marcar hitos importantes en el desarrollo del proyecto. Las etiquetas son útiles para identificar versiones estables, lanzamientos importantes o cualquier otro punto significativo en la historia del proyecto.
                </ParagrafComponent>

                <ParagrafComponent>
                    Cuando se alcanza un hito importante, como una versión estable o un lanzamiento importante, se puede crear una etiqueta para marcar ese punto en la línea de tiempo del repositorio. Las etiquetas son útiles para referenciar versiones específicas del software y facilitar el seguimiento de cambios a lo largo del tiempo.
                </ParagrafComponent>

            </div>

            <div className="mt-4 mr-10" id="git">

                <SubTitle text={'Flujo de Trabajo Git: Git Flow'} />

                <ParagrafComponent>
                    Git Flow es un popular flujo de trabajo que define un conjunto de reglas y prácticas para la organización de Git. Este enfoque estructurado ayuda a los equipos a trabajar de manera más eficiente, manteniendo un flujo constante y claro de desarrollo.
                </ParagrafComponent>

                <ParagrafComponent>
                    El flujo de trabajo Git Flow se basa en la creación de dos ramas principales: `develop` y `master`, como mencionamos anteriormente. Además de estas ramas principales, se crean ramas de características para desarrollar nuevas funcionalidades y ramas de lanzamiento para preparar nuevas versiones.
                </ParagrafComponent>

                <ParagrafComponent>
                    Git Flow también introduce el uso de etiquetas para marcar versiones estables y lanzamientos importantes. Este enfoque ayuda a mantener una organización clara y coherente en el repositorio, lo que facilita la colaboración y el despliegue de software.
                </ParagrafComponent>

            </div>

            <div className="mt-4 mr-10" id="conflictos">

                <SubTitle text={'Resolución de Conflictos'} />

                <ParagrafComponent>
                    Los conflictos en Git pueden surgir cuando varios desarrolladores trabajan en la misma parte del código y realizan cambios incompatibles. Resolver conflictos de manera efectiva es fundamental para mantener un historial de cambios limpio y asegurar que el código funcione correctamente.
                </ParagrafComponent>

                <ParagrafComponent>
                    Una buena comunicación entre los miembros del equipo y el uso adecuado de ramas de características pueden ayudar a prevenir conflictos en el repositorio. Sin embargo, si surgen conflictos, es importante abordarlos de manera proactiva y colaborativa para garantizar que el código se integre correctamente y no se pierdan cambios importantes.
                </ParagrafComponent>

            </div>

            <div className="mt-4 mr-10" id="integracion">

                <SubTitle text={'Integración Continua y Despliegue Continuo'} />

                <ParagrafComponent>
                    La integración continua (CI) y el despliegue continuo (CD) son prácticas clave en la organización de proyectos de desarrollo. La integración continua implica combinar cambios en el código en una rama compartida varias veces al día, lo que ayuda a detectar problemas rápidamente y garantiza que el código esté siempre en un estado funcional.
                </ParagrafComponent>

                <ParagrafComponent>
                    El despliegue continuo, por otro lado, automatiza la entrega de software a los servidores de producción después de pasar por un proceso de integración continua y pruebas automatizadas. Esta práctica garantiza que las actualizaciones y correcciones se desplieguen de manera rápida y confiable.
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
                <ContentSidebarItemTitle title={'Organización de Git en Proyectos de Desarrollo'} id={'organizacion'} />

                <ContentSidebarItemSubTitle title={'Introducción'} id={'intro'} />
                <ContentSidebarItemSubTitle title={'La Importancia de una Buena Organización de Git'} id={'importancia'} />
                <ContentSidebarItemSubTitle title={'Ramas Principales: `Develop` y `Master`'} id={'ramas'} />
                <ContentSidebarItemSubTitle title={'Ramas de Características o `Feature Branches`'} id={'feature'} />
                <ContentSidebarItemSubTitle title={'Etiquetado de Versiones'} id={'versiones'} />
                <ContentSidebarItemSubTitle title={'Flujo de Trabajo Git: Git Flow'} id={'git'} />
                <ContentSidebarItemSubTitle title={'Resolución de Conflictos'} id={'conflictos'} />
                <ContentSidebarItemSubTitle title={'Integración Continua y Despliegue Continuo'} id={'integracion'} />
            </ul>
        </ContentSidebarContainer>
    )
}
