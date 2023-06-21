import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { AppRoutesList } from "./routes/AppRoutesList"
import { Error404 } from "./pages/Error404"

export const App = () => {
    return (
        <section className="bg-slate-900 text-white min-h-screen">
            {/* <span className="text-orange-400">-</span> */}

            <BrowserRouter>

                <Navbar />

                <Routes>

                    {AppRoutesList.map((route, i) => (
                        <Route path={route.path} element={route.component} exact={route.exact} key={i} />
                    ))}

                    {/* RUTAS PERSONALIZADAS */}

                    <Route path={'/'} element={<Navigate to="/welcome" replace />} exact />
                    <Route path={'/404'} element={<Error404 />} exact />
                    <Route path="*" element={<Navigate to="/404" replace />} />

                </Routes>

            </BrowserRouter>
            
        </section>
    )
}
