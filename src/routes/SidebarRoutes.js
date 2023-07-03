
export const sidebarRoutes = [
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
            {
                path: '/frontend/hooks',
                name: 'Hooks',
                activeOption: false,
            },
            {
                path: '/frontend/estructura-rrd',
                name: 'Estructura de ReactRouterDom',
                activeOption: false,
            },
            {
                path: '/frontend/rutas',
                name: 'Rutas publicas y privadas',
                activeOption: false,
            },
            {
                path: '/frontend/optimizacion',
                name: 'Consejos de Optimizacion',
                activeOption: false,
            },
            {
                path: '/frontend/tailwind',
                name: 'Tailwind',
                activeOption: false,
            },
            {
                path: '/frontend/i18n',
                name: 'Internacionalizacion (i18n)',
                activeOption: false,
            },
            {
                path: '/frontend/componentes',
                name: 'Componentes',
                activeOption: false,
            },
        ]
    },
    {
        title: 'Backend',
        customStyle: 'ml-5 mt-3',
        // activeSection: false,
        subMenu: [
            {
                path: '/backend/librerias', // the url
                name: 'Librerias que siempre utilizo', // name that appear in Sidebar
                activeOption: false,
            },
            {
                path: '/backend/estructura-proyecto',
                name: 'Estructura de un proyecto Node Js',
                activeOption: false,
            },
            {
                path: '/backend/implementacion-api',
                name: 'Implementacio API (ejemplo)',
                activeOption: false,
            },
            {
                path: '/backend/modelos',
                name: 'Definicion de modelos MongoDB - Sequelize',
                activeOption: false,
            },
            {
                path: '/backend/crud',
                name: 'Operaciones CRUD en Mongo y Sequelize',
                activeOption: false,
            },
            {
                path: '/backend/middlewares',
                name: 'Comprobaciones de Middlewares',
                activeOption: false,
            },
            {
                path: '/backend/roles-token',
                name: 'Definicion de Roles y Token',
                activeOption: false,
            },
            {
                path: '/backend/queryparams',
                name: 'Generalizar APIs con QueryParams',
                activeOption: false,
            },
            {
                path: '/backend/consultas-avanzadas',
                name: 'Consultas Avanzadas MongoDB',
                activeOption: false,
            }
        ]
    },
    {
        title: 'General',
        customStyle: 'ml-5 mt-3 mb-5',
        // activeSection: false,
        subMenu: [
            {
                path: '/general/herramientas', // the url
                name: 'Herramientas de Desarrollo', // name that appear in Sidebar
                activeOption: false,
            },
            {
                path: '/general/postman', // the url
                name: 'Postman', // name that appear in Sidebar
                activeOption: false,
            },
            {
                path: '/general/netlify',
                name: 'Subir Frontend en Netlify',
                active: false,
            },
            {
                path: '/general/railway',
                name: 'Subir Backend en Railway',
                active: false,
            },
            {
                path: '/general/git',
                name: 'Organizacion Git',
                active: false,
            },
            {
                path: '/general/upload-code-sites',
                name: 'Bitbucket o Github',
                active: false,
            },
        ]
    },
]


