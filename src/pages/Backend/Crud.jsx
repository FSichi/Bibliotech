import { ParagrafComponent } from "../../components/PageComponents/Articles/Paragraf"
import { Title } from "../../components/PageComponents/Articles/Title"
import { Separator } from "../../components/PageComponents/Separator"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { ContentSidebarContainer, ContentSidebarItemSubTitle, ContentSidebarItemTitle } from "../../components/Sidebar/ContentSidebar"
import { PageContainer } from "../PageContainer"

export const Crud = () => {
    return (
        <PageContainer titlePage={'ModelosDB'} pageContent={<Content />} sidebarContent={<SidebarContent />} />
    )
}


const Content = () => {
    return (
        <article className="md:text-justify">

            <TitlePage sectionTitle={'Backend'} pageTitle={'Definicion de Modelos en MongoDB'} />

            <div className="mt-4 mr-10" id="about">

                <Title title={'Sobre este articulo'} />

                <ParagrafComponent>
                    MongoDB es una base de datos NoSQL ampliamente utilizada en aplicaciones web modernas debido a su flexibilidad y escalabilidad. Una de las ventajas principales de MongoDB
                    es su capacidad para almacenar datos sin una estructura fija, lo que brinda una gran libertad a los desarrolladores. Sin embargo, para garantizar la integridad y consistencia
                    de los datos, es esencial establecer una estructura coherente al interactuar con la base de datos.
                </ParagrafComponent>

                <ParagrafComponent>
                    En este artículo, exploraremos en detalle cómo definir modelos de datos en MongoDB utilizando el módulo Mongoose. Mongoose es una biblioteca de modelado de objetos MongoDB para
                    Node.js que proporciona una capa de abstracción sobre la base de datos, permitiendo definir esquemas, validaciones y relaciones entre documentos.
                </ParagrafComponent>

                <ParagrafComponent>
                    Abordaremos cada aspecto fundamental de la definición de modelos de datos en MongoDB, desde la declaración de tipos de datos y campos requeridos, hasta la implementación de
                    enumeraciones y mensajes personalizados para validar los datos ingresados. Aprenderemos a crear esquemas de MongoDB que sirvan como plantillas para nuestros documentos y
                    nos permitan mantener la consistencia y estructura en toda la aplicación.
                </ParagrafComponent>

                <ParagrafComponent>
                    Al finalizar este artículo, estarás equipado con los conocimientos necesarios para definir modelos de datos sólidos y bien estructurados en MongoDB. Esta práctica te ayudará a
                    desarrollar aplicaciones robustas y fiables, al tiempo que optimizas el flujo de trabajo de desarrollo y mantenimiento.
                </ParagrafComponent>

            </div>

            <Separator />



        </article>
    )
}

const SidebarContent = () => {
    return (
        <ContentSidebarContainer>
            <ul>
                <ContentSidebarItemTitle title={'Sobre este Articulo'} id={'about'} customClassname="mt-8" />

                <ContentSidebarItemTitle title={'Requisitos Previos'} id={'requisitos'} />
                <ContentSidebarItemSubTitle title={'Instalar MongoDB y Configurar la DB'} id={'instalar'} />
                <ContentSidebarItemSubTitle title={'Configurar un Proyecto de Node.js'} id={'configurar'} />
                <ContentSidebarItemSubTitle title={'Crear el Archivo de Conexión a MongoDB'} id={'conexion'} />
                <ContentSidebarItemSubTitle title={'Crear el Modelo de Datos'} id={'crear-modelo'} />
                <ContentSidebarItemSubTitle title={'Utilizar el Modelo de Datos'} id={'utilizar-modelo'} />

                <ContentSidebarItemTitle title={'Tipos de types para atributos de DB'} id={'types'} />
                <ContentSidebarItemSubTitle title={'Ejemplo de Modelo de DB'} id={'ejemplo'} />

            </ul>
        </ContentSidebarContainer>
    )
}
