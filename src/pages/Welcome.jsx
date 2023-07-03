import { Link } from 'react-router-dom';
import { BrowserTitle } from '../components/BrowserTitle/BrowserTitle';

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
                        <h2 className="text-3xl font-bold sm:text-6xl text-white">Bienvenido a <span className='text-sky-400'>Bibliotech</span></h2>
                        <h2 className="text-lg italic font-semibold sm:text-xl mt-3">By Facundo Sichi</h2>

                        <p className="mt-4 text-slate-300 dark:text-gray-400 text-xl">
                            Explora por las distintas secciones y aprende los recursos mas importantes para poder programar
                        </p>

                        <p className="mt-4 text-slate-300 dark:text-gray-400 text-xl">
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

                        <div className="block rounded-xl border border-sky-400 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"  >
                            <div className="flex justify-center">
                                <span className="inline-block rounded-lg bg-indigo-600 p-3">
                                    <svg
                                        className="h-6 w-6 text-gray-900"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>
                            </div>

                            <h2 className="mt-4 font-bold text-center">Librerias</h2>
                            {/* 
                            <p className="hidden sm:mt-3 sm:block sm:text-sm sm:text-gray-600 text-center">
                                Correlatividades para Cursado
                            </p> */}
                        </div>

                        <div
                            className="block rounded-xl border border-sky-400 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <div className="flex justify-center">
                                <span className="inline-block rounded-lg bg-indigo-600 p-3">
                                    <svg
                                        className="h-6 w-6 text-gray-900 dark:text-gray-100"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                         

                            <h2 className="mt-4 font-bold text-center">Estructuras</h2>

                        </div>

                        <div
                            className="block rounded-xl border border-sky-400 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <div className="flex justify-center">
                                <span className="inline-block rounded-lg bg-indigo-600 p-3">
                                    <svg
                                        className="h-6 w-6 text-gray-900 dark:text-gray-100"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                         

                            <h2 className="mt-4 font-bold text-center">Componentes</h2>

                        </div>

                        <div
                            className="block rounded-xl border border-sky-400 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <div className="flex justify-center">
                                <span className="inline-block rounded-lg bg-indigo-600 p-3">
                                    <svg
                                        className="h-6 w-6 text-gray-900 dark:text-gray-100"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                         

                            <h2 className="mt-4 font-bold text-center">{`API's`}</h2>

                        </div>

                        <div
                            className="block rounded-xl border border-sky-400 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <div className="flex justify-center">
                                <span className="inline-block rounded-lg bg-indigo-600 p-3">
                                    <svg
                                        className="h-6 w-6 text-gray-900 dark:text-gray-100"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                         

                            <h2 className="mt-4 font-bold text-center"> CRUD</h2>

                        </div>

                        <div
                            className="block rounded-xl border border-sky-400 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <div className="flex justify-center">
                                <span className="inline-block rounded-lg bg-indigo-600 p-3">
                                    <svg
                                        className="h-6 w-6 text-gray-900 dark:text-gray-100"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                         

                            <h2 className="mt-4 font-bold text-center">Roles y Token</h2>

                        </div>

                        <div
                            className="block rounded-xl border border-sky-400 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <div className="flex justify-center">
                                <span className="inline-block rounded-lg bg-indigo-600 p-3">
                                    <svg
                                        className="h-6 w-6 text-gray-900 dark:text-gray-100"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                         

                            <h2 className="mt-4 font-bold text-center">Middlewares</h2>

                        </div>

                        <div
                            className="block rounded-xl border border-sky-400 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <div className="flex justify-center">
                                <span className="inline-block rounded-lg bg-indigo-600 p-3">
                                    <svg
                                        className="h-6 w-6 text-gray-900 dark:text-gray-100"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                         

                            <h2 className="mt-4 font-bold text-center">i18n</h2>

                        </div>

                        <div
                            className="block rounded-xl border border-sky-400 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <div className="flex justify-center">
                                <span className="inline-block rounded-lg bg-indigo-600 p-3">
                                    <svg
                                        className="h-6 w-6 text-gray-900 dark:text-gray-100"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                         

                            <h2 className="mt-4 font-bold text-center">Hooks</h2>

                        </div>

                        <div
                            className="block rounded-xl border border-sky-400 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <div className="flex justify-center">
                                <span className="inline-block rounded-lg bg-indigo-600 p-3">
                                    <svg
                                        className="h-6 w-6 text-gray-900 dark:text-gray-100"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                         

                            <h2 className="mt-4 font-bold text-center">Rutas Protegidas</h2>

                        </div>

                        <div
                            className="block rounded-xl border border-sky-400 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <div className="flex justify-center">
                                <span className="inline-block rounded-lg bg-indigo-600 p-3">
                                    <svg
                                        className="h-6 w-6 text-gray-900 dark:text-gray-100"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                         

                            <h2 className="mt-4 font-bold text-center">MongoDB</h2>
                            <h2 className="mt-0 font-bold text-center">Sequelize</h2>

                        </div>

                        <div
                            className="block rounded-xl border border-sky-400 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <div className="flex justify-center">
                                <span className="inline-block rounded-lg bg-indigo-600 p-3">
                                    <svg
                                        className="h-6 w-6 text-gray-900 dark:text-gray-100"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                         

                            <h2 className="mt-4 font-bold text-center">Postman</h2>
                            <h2 className="mt-0 font-bold text-center">Github</h2>

                        </div>

                        

                       


                    </div>

                </div>
            </div>
        </section>
    )
}

