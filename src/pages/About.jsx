import { PageContainer } from "./PageContainer"
import { TitlePage } from '../components/PageComponents/TitlePage'
import { Separator } from '../components/PageComponents/Separator'
import { Title } from "../components/PageComponents/Articles/Title"
import { ParagrafComponent } from "../components/PageComponents/Articles/Paragraf"
import { ContentSidebarContainer, ContentSidebarItemTitle } from "../components/Sidebar/ContentSidebar"
// import profileImage from '../assets/img/profile.jpeg';

export const About = () => {
    return (
        <PageContainer titlePage={'Acerca De'} pageContent={<AboutContent />} sidebarContent={<AboutSidebar />} />
    )
}

const AboutContent = () => {
    return (
        <article className="text-justify">

            <TitlePage sectionTitle={'Introduccion'} pageTitle={'Acerca De'} />

            <div className="mt-4 mr-10" id="finalidad">
                <Title title={'Finalidad y Objetivo General'} />

                <ParagrafComponent>
                    Esta biblioteca digital surgio bajo la premisa de ayudar a la comunidad dev, ofreciendo contenido simplificado
                    y organizado de las tematicas mas importantes del mundo de la programacion.
                </ParagrafComponent>

                <ParagrafComponent>
                    El contenido actualmente esta segmentado en Frontend (ReactJs) y Backend (NodeJs) con javascript. El objetivo es que
                    esta biblioteca amplie su panorama y sea rica en contenido.
                </ParagrafComponent>

                <ParagrafComponent>
                    Este trabajo es mi pequeño granito de arena en la comunidad para ayudar a optimizar el tiempo de aprendizaje de las personas,
                    como para introducir en este mundo a muchas otras.
                </ParagrafComponent>
            </div>

            <Separator />

            <div className="flex mt-8 mr-10" id="about">
                <div className="xl:w-1/2 ">

                    <Title title={'Sobre Mi'} />

                    <ParagrafComponent>
                        Mi nombre es Facundo Sichi. Nací en Tucumán, Argentina y tengo 23 años.
                        Tengo aproximadamente 5 años de experiencia en desarrollo tanto con proyectos personales como trabajando para empresas dev.
                    </ParagrafComponent>
                    <ParagrafComponent>
                        Actualmente estoy finalizando mis estudios en Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional,
                        Facultad Regional Tucumán (UTN-FRT). Tengo más de 20 certificados en desarrollo y herramientas de trabajo, además de algunos
                        de productividad personal y gestión de equipos de trabajo.
                    </ParagrafComponent>
                    <ParagrafComponent>
                        En el año 2022, fui incluido y condecorado en mi institución académica por pertenecer a los 10 mejores promedios de toda mi universidad.
                        Fui escogido como el mejor promedio en 2 cursos de programación de más de 30 personas.
                    </ParagrafComponent>
                </div>
                <div className="w-1/2 hidden xl:block">
                    <img
                        className="w-72 rounded-full mb-10 mx-auto bg-orange-400 p-1 mt-10"
                        src='https://avatars.githubusercontent.com/u/68669763?v=4' alt="Profile Pic"
                    />
                </div>
            </div>

        </article>
    )
}

const AboutSidebar = () => {
    return (
        <ContentSidebarContainer>
            <ul>
                <ContentSidebarItemTitle title={'Finalidad y Objetivo General'} id={'finalidad'} customClassname="mt-8 ml-4 text-slate-400" />
                <ContentSidebarItemTitle title={'Sobre Mi'} id={'about'} />
            </ul>
        </ContentSidebarContainer>
    )
}