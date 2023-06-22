import { Componentes } from "../pages/Frontend/Componentes";
import { EstructuraProyecto } from "../pages/Frontend/EstructuraProyecto";
import { EstructuraRRD } from "../pages/Frontend/EstructuraRRD";
import { Hooks } from "../pages/Frontend/Hooks";
import { Internacionalizacion } from "../pages/Frontend/Internacionalizacion";
import { LibreriasFrontend } from "../pages/Frontend/Librerias";
import { LibreriasBackend } from "../pages/Backend/Librerias";
import { Optimizacion } from "../pages/Frontend/Optimizacion";
import { RutasPublicasPrivadas } from "../pages/Frontend/RutasPublicasPrivadas";
import { Tailwind } from "../pages/Frontend/Tailwind";
import { Welcome } from "../pages/Welcome";
import { EstructuraBackend } from "../pages/Backend/Estructura";
import { ImplementacionAPI } from "../pages/Backend/ImplementacionAPI";
import { ModelosMongoDB } from "../pages/Backend/ModelosMongoDB";
import { ModelosSequelize } from "../pages/Backend/ModelosSequelize";
import { Crud } from "../pages/Backend/Crud";
import { Middlewares } from "../pages/Backend/Middlewares";
import { RolesyTokens } from "../pages/Backend/RolesyTokens";
import { Herramientas } from "../pages/General/Herramientas";
import { Netlify } from "../pages/General/Netlify";
import { Railway } from "../pages/General/Railway";
import { Git } from "../pages/General/Git";
import { BitbucketGithub } from "../pages/General/BitbucketGithub";
import { About } from "../pages/About";

export const AppRoutesList = [
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
    {
        path: '/frontend/estructura-proyecto',
        exact: true,
        component: <EstructuraProyecto />,
    },
    {
        path: '/frontend/hooks',
        exact: true,
        component: <Hooks />,
    },
    {
        path: '/frontend/estructura-rrd',
        exact: true,
        component: <EstructuraRRD />,
    },
    {
        path: '/frontend/rutas',
        exact: true,
        component: <RutasPublicasPrivadas />,
    },
    {
        path: '/frontend/optimizacion',
        exact: true,
        component: <Optimizacion />,
    },
    {
        path: '/frontend/tailwind',
        exact: true,
        component: <Tailwind />,
    },
    {
        path: '/frontend/i18n',
        exact: true,
        component: <Internacionalizacion />,
    },
    {
        path: '/frontend/i18n',
        exact: true,
        component: <Internacionalizacion />,
    },
    {
        path: '/frontend/componentes',
        exact: true,
        component: <Componentes />,
    },
    {
        path: '/backend/librerias',
        exact: true,
        component: <LibreriasBackend />,
    },
    {
        path: '/backend/estructura-proyecto',
        exact: true,
        component: <EstructuraBackend />,
    },
    {
        path: '/backend/implementacion-api',
        exact: true,
        component: <ImplementacionAPI />,
    },
    {
        path: '/backend/modelo-mongodb',
        exact: true,
        component: <ModelosMongoDB />,
    },
    {
        path: '/backend/modelo-sequelize',
        exact: true,
        component: <ModelosSequelize />,
    },
    {
        path: '/backend/crud',
        exact: true,
        component: <Crud />,
    },
    {
        path: '/backend/middlewares',
        exact: true,
        component: <Middlewares />,
    },
    {
        path: '/backend/roles-token',
        exact: true,
        component: <RolesyTokens />,
    },
    {
        path: '/general/herramientas',
        exact: true,
        component: <Herramientas />,
    },
    {
        path: '/general/netlify',
        exact: true,
        component: <Netlify />,
    },
    {
        path: '/general/railway',
        exact: true,
        component: <Railway />,
    },
    {
        path: '/general/git',
        exact: true,
        component: <Git />,
    },
    {
        path: '/general/upload-code-sites',
        exact: true,
        component: <BitbucketGithub />,
    },
]