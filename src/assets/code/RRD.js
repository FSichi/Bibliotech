export const reactRouterDomCode = `export const App = () => {
    return (
        <section className="bg-slate-900 text-white min-h-screen">

            <BrowserRouter>

                <Navbar />

                <div className="flex">

                    <div className="z-55 fixed">
                        <Sidebar />
                    </div>

                    <section className="w-full ml-5 md:ml-5 lg:ml-96"> 
                        <Routes>

                            {AppRoutesList.map((route, i) => (
                                <Route path={route.path} element={route.component} exact={route.exact} key={i} />
                            ))}

                            {/* RUTAS PERSONALIZADAS */}

                            <Route path={'/'} element={<Navigate to="/welcome" replace />} exact />
                            <Route path={'/404'} element={<Error404 />} exact />
                            <Route path="*" element={<Navigate to="/404" replace />} />

                        </Routes>
                    </section>

                </div>

            </BrowserRouter>

        </section>
    )
}`


export const AppRoutesListCode = `export const AppRoutesList = [
    {
        path: '/welcome',
        exact: true,
        component: <Welcome />,
    },
    {
        path: '/about',
        exact: true,
        component: <About />,
    },
    {
        path: '/frontend/librerias',
        exact: true,
        component: <LibreriasFrontend />,
    },

    /* Resto de Rutas */

]`

export const SidebarRoutesCode = `export const sidebarRoutes = [
    {
        title: 'Introduccion',
        customStyle: 'ml-5',
        // activeSection: false,
        subMenu: [
            {
                path: '/welcome', // the url
                name: 'Bienvenida', // name that appear in Sidebar
                activeOption: false,
            },
            {
                path: '/about', // the url
                name: 'Acerca De', // name that appear in Sidebar
                activeOption: false,
            }
        ]
    },
    {
        title: 'Frontend',
        customStyle: 'ml-5 mt-3',
        // activeSection: false,
        subMenu: [
            {
                path: '/frontend/librerias', // the url
                name: 'Librerias que siempre utilizo', // name that appear in Sidebar
                activeOption: false,
            },
            {
                path: '/frontend/estructura-proyecto',
                name: 'Estructura de un proyecto',
                activeOption: false,
            },

            /* Resto de Rutas */
        ]
]`

export const ParametrosRutasCode = `/* Ejemplo de Rutas de una App de clientes */

<Route path={'/listado-clientes'} element={<ListadoClientes />} exact={true}  />
<Route path={'/cliente/:idCliente'} element={<ClientePage />} exact={true} />
`

export const ComponenteParametroCode = `import { useParams } from "react-router-dom";

export const ClientePage = () => {

    const { idCliente } = useParams();

    return (
        <>
            {idCliente}
        </>
    )
}
`