import { Link} from "react-router-dom"

export const Error404 = () => {

    return (
        <section className="w-full flex flex-col justify-center items-center mt-24"> {/* h-screen */}
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-slate-400">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl text-slate-200">Lo Siento! Esta pagina no existe</p>
                    <p className="mt-4 mb-8 text-lg text-slate-500">Si consideras que esto es un error contacta un administrador</p>
                    <Link
                        to={'/welcome'}
                        className="px-8 py-3 font-semibold rounded bg-sky-500 text-white hover:bg-sky-700"
                    >
                        Regresar al Inicio
                    </Link>
                </div>
            </div>
        </section>
    )
}
