import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

const paginasIntro = [
    { name: 'Bienvenida', path: '/welcome' },
    { name: 'Acerca De', path: '/about' },
]

const paginasFrontend = [

    { name: 'Librerias que siempre utilizo', path: '/frontend/librerias' },
    { name: 'Estructura React', path: '/frontend/estructura-proyecto' },
    { name: 'Hooks', path: '/frontend/hooks' },
    { name: 'Estructura de ReactRouterDom', path: '/frontend/estructura-rrd' },
    { name: 'Rutas Publicas y Privadas', path: '/frontend/rutas' },
    { name: 'Consejos de Optimizacion', path: '/frontend/optimizacion' },
    // { name: 'Tailwind', path: '/frontend/tailwind' },
    { name: 'Internacionalizacion', path: '/frontend/internacionalizacion' },
    // { name: 'Componentes', path: '/frontend/componentes' },
]

const paginasBackend = [
    // { name: 'Librerias que siempre utilizo', path: '/backend/librerias' },
    { name: 'Estructura Node Js', path: '/backend/estructura-proyecto' },
    { name: 'Implementacion API', path: '/backend/implementacion-api' },
    { name: 'Definicion Modelos', path: '/backend/modelos' },
    { name: 'Operaciones CRUD', path: '/backend/crud' },
    { name: 'Middlewares', path: '/backend/middlewares' },
    { name: 'Roles y Token', path: '/backend/roles-token' },
    { name: 'QueryParams', path: '/backend/queryparams' },
    // { name: 'Consultas Avanzadas Mongo', path: '/backend/consultas-avanzadas' },
]

const paginasGeneral = [
    { name: 'Herramientas de Desarrollo', path: '/general/herramientas' },
    { name: 'Postman', path: '/general/postman' },
    // { name: 'Netlify', path: '/general/netlify' },
    // { name: 'Railway', path: '/general/railway' },
    { name: 'Organizacion GIT', path: '/general/git' },
    // { name: 'Bitbucket o Github', path: '/general/upload-code-sites' },
]

export const SidebarMovile = () => {

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <div className="">
            <div>
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100" leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex bg-white shadow-slate-900/5 transition duration-500 shadow-none bg-slate-900/95 backdrop-blur [@supports(backdrop-filter:blur(0))]:bg-slate-900/75">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform" enterFrom="translate-x-full" enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-slate-900 py-4 pb-12 shadow-xl top-0">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-100">Paginas</h2>
                                        <button
                                            type="button" onClick={() => setMobileFiltersOpen(false)}
                                            className="-mr-1 flex h-10 w-10 items-center justify-center rounded-md bg-slate-700 p-2 text-gray-300"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <form className="mt-6 md:mt-4 border-t border-gray-200">
                                        <h3 className="sr-only">Categories</h3>
                                        <ul role="list" className="px-2 py-3 font-medium text-gray-900">

                                            <h1 className='text-sky-400 text-xl mb-1'>Introduccion</h1>

                                            {paginasIntro.map((route, index) => (
                                                <li key={index} className='relative p-2 ml-3' onClick={() => setMobileFiltersOpen(false)}>
                                                    <Link to={`${route.path}`} className='text-white'>
                                                        {route.name}
                                                    </Link>
                                                </li>
                                            ))}

                                            <h1 className='text-sky-400 text-xl mt-2 mb-1'>Frontend</h1>

                                            {paginasFrontend.map((route, index) => (
                                                <li key={index} className='relative p-2 ml-3' onClick={() => setMobileFiltersOpen(false)}>
                                                    <Link to={`${route.path}`} className='text-white'>
                                                        {route.name}
                                                    </Link>
                                                </li>
                                            ))}

                                            <h1 className='text-sky-400 text-xl mt-2 mb-1'>Backend</h1>

                                            {paginasBackend.map((route, index) => (
                                                <li key={index} className='relative p-2 ml-3' onClick={() => setMobileFiltersOpen(false)}>
                                                    <Link to={`${route.path}`} className='text-white'>
                                                        {route.name}
                                                    </Link>
                                                </li>
                                            ))}

                                            <h1 className='text-sky-400 text-xl mt-2 mb-1'>General</h1>

                                            {paginasGeneral.map((route, index) => (
                                                <li key={index} className='relative p-2 ml-3' onClick={() => setMobileFiltersOpen(false)}>
                                                    <Link to={`${route.path}`} className='text-white'>
                                                        {route.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <button
                    type="button" onClick={() => setMobileFiltersOpen(true)}
                    className={`md:-mt-1 p-2 bg-slate-700 rounded-md lg:hidden ${(mobileFiltersOpen ? 'text-sky-400' : 'text-white')}`}
                >
                    <span className="sr-only">OpenSidebarMovile</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}
