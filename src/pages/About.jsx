import { PageContainer } from "./PageContainer"
import { TitlePage } from '../components/PageComponents/TitlePage'
import { Separator } from '../components/PageComponents/Separator'
// import profileImage from '../assets/img/profile.jpeg';
export const About = () => {
    return (
        <PageContainer titlePage={'Acerca De'} pageContent={<AboutContent />} sidebarContent={<AboutSidebar />} />
    )
}

const AboutContent = () => {
    return (
        <article>

            <TitlePage sectionTitle={'Introduccion'} pageTitle={'Acerca De'} />

            <div className="mt-4 mr-10">
                <h1 className="text-xl text-white">Finalidad y Objetivo General</h1>
                <h2 className="text-slate-400 mt-4">Esta biblioteca digital surgio bajo la premisa de ayudar a la comunidad dev, ofreciendo contenido simplificado y organizado de las tematicas mas importantes del mundo de la programacion. </h2>
                <h2 className="text-slate-400 mt-4">El contenido actualmente esta segmentado en Frontend (ReactJs) y Backend (NodeJs) con javascript. El objetivo es que esta biblioteca amplie su panorama y sea rica en contenido. </h2>
                <h2 className="text-slate-400 mt-4">Este trabajo es mi pequeño granito de arena en la comunidad para ayudar a optimizar el tiempo de aprendizaje de las personas, como para introducir en este mundo a muchas otras.</h2>

            </div>

            <Separator />

            <div className="flex mt-8 mr-10">
                <div className="xl:w-1/2 ">
                    <h1 className="text-xl text-white">Sobre Mi</h1>
                    <h2 className="text-slate-400 mt-4">
                        Mi nombre es Facundo Sichi. Nací en Tucumán, Argentina y tengo 23 años.
                        Tengo aproximadamente 5 años de experiencia en desarrollo tanto con proyectos personales como trabajando para empresas dev.
                    </h2>
                    <h2 className="text-slate-400 mt-4">
                        Actualmente estoy finalizando mis estudios en Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional,
                        Facultad Regional Tucumán (UTN-FRT). Tengo más de 20 certificados en desarrollo y herramientas de trabajo, además de algunos de productividad personal y gestión de equipos de trabajo.
                    </h2>
                    <h2 className="text-slate-400 mt-4">
                        En el año 2022, fui incluido y condecorado en mi institución académica por pertenecer a los 10 mejores promedios de toda mi universidad.
                        Fui escogido como el mejor promedio en 2 cursos de programación de más de 30 personas.
                    </h2>
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
        <div className="text-white p-2 fixed content-sidebar-scroll content-sidebar-container">

            <div className='mb-8 content-sidebar-container-children'>

                <h1 className="text-sky-400 text-center">Contenido de la Pagina</h1>

                <h1 className="mt-8 ml-4 text-sky-300">Librerias de Utilidad General</h1>

                <h2 className="ml-10 mt-2 text-slate-400">Libreria 1</h2>
                <h2 className="ml-10 mt-2 text-sky-300">Libreria 2</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 3</h2>

                <h1 className="mt-5 ml-4 text-slate-400"> Librerias de Utilidad Especifica</h1>

                <h2 className="ml-10 mt-2 text-slate-400">Libreria 1</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 2</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 3</h2>

                <h1 className="mt-5 ml-4 text-slate-400"> Librerias de Utilidad Especifica</h1>

                <h2 className="ml-10 mt-2 text-slate-400">Libreria 1</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 2</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 3</h2>


                <h1 className="mt-5 ml-4 text-slate-400"> Librerias de Utilidad Especifica</h1>

                <h2 className="ml-10 mt-2 text-slate-400">Libreria 1</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 2</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 4</h2>

                <h1 className="mt-5 ml-4 text-slate-400"> Librerias de Utilidad Especifica</h1>

                <h2 className="ml-10 mt-2 text-slate-400">Libreria 1</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 2</h2>
                <h2 className="ml-10 mt-2 text-slate-400">Libreria 4</h2>

            </div>

        </div>
    )
}