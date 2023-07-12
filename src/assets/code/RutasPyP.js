export const contenedorGeneralCode = `import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Error404 } from "./pages/Error404"
import { AppRoutes } from "./routes/AppRoutes"
import { AuthRoutes } from "./routes/AuthRoutes"

export const App = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route path={'/'} element={<Navigate to="/auth/login" replace />} exact/>

                <Route path={'/auth/*'} element={<AuthRoutes />} exact />
                <Route path={'/app/*'} element={<AppRoutes />} exact />

                <Route path={'/404'} element={<Error404 />} exact />
                <Route path="*" element={<Navigate to="/404" replace />} />

            </Routes>
        </BrowserRouter>
    )
}
`

export const PublicRoutesCode = `import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutesList } from "./AuthRoutesList"
import { Error404 } from "../pages/Error404"

export const AuthRoutes = () => {
    return (
        <Routes>

            {AuthRoutesList.map((route, i) => (
                <Route path={route.path} element={route.component} exact={route.exact} key={i} />
            ))}

            {/* RUTAS PERSONALIZADAS */}

            <Route path={'/'} element={<Navigate to="/auth/login" replace />} exact />
            <Route path={'/404'} element={<Error404 />} exact />
            <Route path="*" element={<Navigate to="/auth/404" replace />} />

        </Routes>
    )
}
`

export const PrivateRoutesCode = `import { Navigate, Route, Routes } from "react-router-dom"
import { AppRoutesList } from "./AppRoutesList"
import { Error404 } from "../pages/Error404"

export const AppRoutes = () => {

    return (
        <section className="bg-orange-400 text-white min-h-screen">

            <div className="mx-5 mt-3">

                <Routes>

                    {/* LISTADO DE RUTAS DE LA APP */}

                    {AppRoutesList.map((route, i) => (
                        <Route path={route.path} element={route.component} exact={route.exact} key={i} />
                    ))}

                    {/* RUTAS PERSONALIZADAS */}

                    <Route path={'/'} element={<Navigate to="/app/dashboard" replace />} exact />
                    <Route path={'/404'} element={<Error404 />} exact />
                    <Route path="*" element={<Navigate to="/app/404" replace />} />
                </Routes>

            </div>

        </section>
    )
}
`

export const PrivadaCode = `export const AppRoutesList = [
    {
        path: '/dashboard',
        exact: true,
        component: <ProtectedRoute children={<Dashboard />}></ProtectedRoute>,
    },
    {
        path: '/perfil', 
        exact: true,
        component: <ProtectedRoute children={<Perfil />}></ProtectedRoute>,
    },

    /* Resto de Rutas de la App */

]`

export const ProtectedRouteCode = `import React from 'react'
import { useSelector } from 'react-redux';
import { backtoLogin } from '../helpers/redirectTo';

export const ProtectedRoute = ({ children }) => {

    const { authenticated } = useSelector(state => state.auth);
    if (authenticated !== true) return backtoLogin('/');

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}
`