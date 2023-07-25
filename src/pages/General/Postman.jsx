import { Separator } from "../../components/PageComponents/Separator"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { PageContainer } from "../PageContainer"

export const Postman = () => {
    return (
        <PageContainer titlePage={'Postman'} pageContent={<Content />} sidebarContent={<SidebarContent />} />
    )
}


const Content = () => {
    return (
        <article className="md:text-justify">
            <TitlePage sectionTitle={'General'} pageTitle={'Postman'} />

            <div className="mt-4 mr-10" id="about">
                <h1 className="text-3xl text-white">Sobre este articulo</h1>
                <h2 className="text-slate-400 mt-4">
                    Bienvenidos al apasionante mundo de la organización de proyectos de desarrollo con Git. Si eres desarrollador o trabajas en un equipo de desarrollo de software, seguramente estás familiarizado con la importancia de un control de versiones sólido y eficiente. Git, sin duda, se ha convertido en la herramienta de control de versiones
                    más popular y ampliamente utilizada en la comunidad de desarrollo.
                </h2>
            </div>

            <Separator />

        </article>
    )
}

const SidebarContent = () => {
    return (
        <div>Postman</div>
    )
}
