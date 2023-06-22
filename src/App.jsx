import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { AppRoutesList } from "./routes/AppRoutesList"
import { Error404 } from "./pages/Error404"
import { Sidebar } from "./components/Sidebar/Sidebar"
// import { ContentSidebar } from "./components/Sidebar/ContentSidebar"

export const App = () => {
    return (
        <section className="bg-slate-900 text-white min-h-screen">

            <BrowserRouter>

                <Navbar />

                <div className="flex">

                    <div className="z-55 fixed">
                        <Sidebar />
                    </div>

                    <section className="w-full ml-5 md:ml-5 lg:ml-96 mb-10 mt-5"> {/* w-3/4 lg:ml-96 mb-10 */}
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

                    {/* <div className="w-96 border-l-2 border-gray-800">
                        <ContentSidebar />
                    </div> */}

                </div>

            </BrowserRouter>

        </section>
    )
}
