import { Link } from 'react-router-dom';
import { BrowserTitle } from '../components/BrowserTitle/BrowserTitle';
import { BasicSVG } from '../components/PageComponents/SVGWelcome/svgLibrary';

export const Welcome = () => {
    return (
        <div className='mr-10 '>
            <BrowserTitle titlePage={'Bienvenida'} />
            <WelcomeSection />
        </div>
    )
}

const WelcomeSection = () => {
    return (
        <section className="flex flex-col justify-center items-center h-auto">
            <div className="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">

                    <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
                        <h2 className="text-3xl font-bold sm:text-6xl text-slate-800 dark:text-white">Bienvenido a <span className='text-sky-400'>Bibliotech</span></h2>
                        <h2 className="text-lg italic font-semibold sm:text-xl mt-3 text-slate-800 dark:text-white">By Facundo Sichi</h2>

                        <p className="mt-4 text-slate-600 dark:text-gray-400 text-xl">
                            Explora por las distintas secciones y aprende los recursos mas importantes para poder programar
                        </p>

                        <p className="mt-4 text-slate-600 dark:text-gray-400 text-xl">
                            Aprende sobre las tecnicas, librerias, herramientas, estructuras y demas, de un proyecto tanto desde el lado del Frontend como del Backend
                        </p>

                        <Link
                            className="mt-8 inline-flex items-center rounded border border-sky-600 bg-sky-400 px-8 py-3 text-white hover:bg-transparent  hover:text-gray-100"
                            to="/about"
                        >
                            <span className="text-sm font-medium"> Mas Informacion </span>
                            <svg
                                className="ml-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    <div className="hidden sm:grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <BoxItem title={'Librerias'} svgPath={<BasicSVG />} />
                        <BoxItem title={'Estructuras'} svgPath={<BasicSVG />} />
                        <BoxItem title={'Componentes'} svgPath={<BasicSVG />} />
                        <BoxItem title={`API's`} svgPath={<BasicSVG />} />
                        <BoxItem title={`CRUD`} svgPath={<BasicSVG />} />
                        <BoxItem title={`Roles y Token`} svgPath={<BasicSVG />} />
                        <BoxItem title={`Middlewares`} svgPath={<BasicSVG />} />
                        <BoxItem title={`intl`} svgPath={<BasicSVG />} />
                        <BoxItem title={`Hooks`} svgPath={<BasicSVG />} />
                        <BoxItem title={`Rutas Protegidas`} svgPath={<BasicSVG />} />
                        <BoxItem title={`MongoDB\nSequelize`} svgPath={<BasicSVG />} />
                        <BoxItem title={`Postman\nGithub`} svgPath={<BasicSVG />} />
                    </div>

                </div>
            </div>
        </section>
    )
}


/* WELCOME COMPONENTS */

const BoxItem = ({ svgPath, title }) => {
    return (
        <div className="block rounded-xl border border-sky-400 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"  >
            <div className="flex justify-center">
                <span className="inline-block rounded-lg bg-indigo-600 p-3">
                    <svg
                        className="h-6 w-6 text-gray-900 dark:text-gray-100"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {svgPath}
                    </svg>
                </span>
            </div>
            <h2 className="mt-4 font-bold text-center">{title}</h2>
        </div>
    )
}