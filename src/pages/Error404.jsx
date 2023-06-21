import { Link, useLocation } from "react-router-dom"

export const Error404 = () => {

    let location = useLocation();

    return (
        <section className="h-screen w-full flex flex-col justify-center items-center dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-900 dark:text-gray-100">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Lo Siento! Esta pagina no existe</p>
                    <p className="mt-4 mb-8 dark:text-gray-400">Si consideras que esto es un error contacta un administrador</p>
                    <Link
                        to={(location.pathname.includes('/app')) ? '/app/dashboard' : '/auth'}
                        className="px-8 py-3 font-semibold rounded bg-violet-400 dark:bg-violet-400 dark:text-gray-900"
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}
