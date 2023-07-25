import { ParagrafComponent } from "../../components/PageComponents/Articles/Paragraf"
import { Title } from "../../components/PageComponents/Articles/Title"
import { Separator } from "../../components/PageComponents/Separator"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { ContentSidebarContainer, ContentSidebarItemTitle } from "../../components/Sidebar/ContentSidebar"
import { PageContainer } from "../PageContainer"

export const ImplementacionAPI = () => {
    return (
        <PageContainer titlePage={'ImplementacionAPI'} pageContent={<Content />} sidebarContent={<SidebarContent />} />
    )
}


const Content = () => {
    return (
        <article className="md:text-justify">

            <TitlePage sectionTitle={'Backend'} pageTitle={'Implementacion de una API'} />

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

            <div className="mt-4 mr-10" id="ruta">

                <Title title={'Establecer una Ruta'} />

                <ParagrafComponent>
                    En el mundo del desarrollo de aplicaciones web con Node.js, la organización adecuada de nuestros proyectos es un pilar fundamental para alcanzar la eficiencia y el éxito.
                    La estructura de un proyecto influye directamente en la legibilidad del código, la facilidad de mantenimiento y la escalabilidad del mismo.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="controlador">

                <Title title={'Crear Controlador'} />

                <ParagrafComponent>
                    En el mundo del desarrollo de aplicaciones web con Node.js, la organización adecuada de nuestros proyectos es un pilar fundamental para alcanzar la eficiencia y el éxito.
                    La estructura de un proyecto influye directamente en la legibilidad del código, la facilidad de mantenimiento y la escalabilidad del mismo.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="servicio">

                <Title title={'Crear Servicio'} />

                <ParagrafComponent>
                    En el mundo del desarrollo de aplicaciones web con Node.js, la organización adecuada de nuestros proyectos es un pilar fundamental para alcanzar la eficiencia y el éxito.
                    La estructura de un proyecto influye directamente en la legibilidad del código, la facilidad de mantenimiento y la escalabilidad del mismo.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="aclaraciones">

                <Title title={'Aclaraciones Finales'} />

                <ParagrafComponent>
                    En el mundo del desarrollo de aplicaciones web con Node.js, la organización adecuada de nuestros proyectos es un pilar fundamental para alcanzar la eficiencia y el éxito.
                    La estructura de un proyecto influye directamente en la legibilidad del código, la facilidad de mantenimiento y la escalabilidad del mismo.
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
                <ContentSidebarItemTitle title={'Establecer una Ruta'} id={'ruta'} />
                <ContentSidebarItemTitle title={'Crear Controlador'} id={'controlador'} />
                <ContentSidebarItemTitle title={'Crear Servicio'} id={'servicio'} />
                <ContentSidebarItemTitle title={'Aclaraciones Finales'} id={'aclaraciones'} />
            </ul>
        </ContentSidebarContainer>
    )
}
