import { PrivadaCode, PrivateRoutesCode, ProtectedRouteCode, PublicRoutesCode, contenedorGeneralCode } from "../../assets/code/RutasPyP"
import { Separator } from "../../components/PageComponents/Separator"
import { ShowCodeJavaScript } from "../../components/PageComponents/ShowCode"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { PageContainer } from "../PageContainer"

export const RutasPublicasPrivadas = () => {
    return (
        <PageContainer titlePage={'LibreriasFrontend'} pageContent={<Content />} sidebarContent={<SidebarContent />} />
    )
}



const Content = () => {
    return (
        <article className="md:text-justify">

            <TitlePage sectionTitle={'Frontend'} pageTitle={'Rutas Publicas y Privadas'} />

            <div className="mt-4 mr-10" id="about">
                <h1 className="text-3xl text-white">Sobre este articulo</h1>
                <h2 className="text-slate-400 mt-4">
                    En una aplicación React, es común encontrarnos con la necesidad de tener rutas públicas y privadas. Las rutas públicas son aquellas que están disponibles para cualquier usuario, mientras que las rutas privadas requieren autenticación o permisos
                    especiales para acceder a ellas.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    La distinción entre rutas públicas y privadas es fundamental para garantizar la seguridad y la protección de la información sensible en nuestras aplicaciones. Al tener rutas privadas, podemos restringir el acceso a ciertas partes de la aplicación
                    solo a usuarios autenticados o con los permisos adecuados.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    En este artículo, exploraremos cómo integrar tanto las rutas públicas como las privadas en una aplicación React. Veremos cómo configurar un sistema de enrutamiento que permita definir qué rutas son públicas y cuáles son privadas, y cómo controlar
                    el acceso a las rutas privadas utilizando técnicas como la autenticación y la autorización. Aprenderemos a utilizar las capacidades de React Router, una popular biblioteca de enrutamiento para React, para implementar estas funcionalidades.
                    Exploraremos diferentes estrategias para proteger nuestras rutas privadas y garantizar que solo los usuarios autorizados puedan acceder a ellas.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    Al final de este artículo, tendrás los conocimientos necesarios para implementar rutas públicas y privadas en tus propias aplicaciones React, brindando una experiencia segura y personalizada a tus usuarios.
                </h2>
            </div>

            <Separator />

            <div className="mt-4 mr-10" id="introduccion">
                <h1 className="text-3xl text-white">Introduccion</h1>
                <h2 className="text-slate-400 mt-4">
                    Como mencione previamente, comunmente en una aplicacion web existe una separacion entre rutas publicas y rutas protegidas o privadas. Es necesario establecer un mecanismo idoneo para asegurar la privacidad de la informacion, y evitar
                    que usuarios no autorizados accedan a rutas no correspondidas. Para lograr esto necesitamos crear un sistema de ruteo general que maneje rutas en comun o principales en las que todos los usuarios, independientemente de quien sea, tienen acceso.
                    Dentro de dicho sistema de rutas, vamos a redireccionar a 2 archivos encargados de administrar la logica de cada tipo por separado, optimizando asi la legibilidad del codigo, rendimiento, reutilizacion y refactorizacion.
                </h2>
            </div>

            <Separator />

            <div className="mt-4 mr-10" id="contenedor">
                <h1 className="text-3xl text-white">Contenedor General de Rutas de la App</h1>
                <h2 className="text-slate-400 mt-4 mb-4">
                    En primer lugar vamos a ver el mecanismo para albergar ambos tipos de rutas en nuestra App React. A continuacion podran observar un pequeño fragmento de codigo que pertenece al Contenedor general de rutas.
                </h2>

                <div className="codeImg">
                    <ShowCodeJavaScript code={contenedorGeneralCode} />
                </div>

                <h2 className="text-slate-400 mt-4">
                    Como pueden apreciar el contenedor general de rutas funciona como un distribuidor y organizador de todas las rutas de nuestra aplicacion. En primer lugar declaramos el comportamiento de nuestra ruta madre {'`/`'} y luego declaramos la redireccion
                    a las rutas publicas y privadas. Como mencione previamente, la logica del manejo de dichas rutas esta separada en componentes para optimizar el codigo. Por ultimo declaramos el comportamiento de nuestra App ante rutas desconocidas, las ultimas 2
                    declaraciones de Rutas corresponden a la redireccion a la pagina 404 y en caso de cualquier url no contemplada, tambien redistribuimos a 404.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    Por ultimo, antes de avanzar hacia las rutas publicas y privadas como tal, en este ejemplo vemos que separe la logica de mis rutas de Autenticacion a las de mi aplicacion. Esto no quiere decir que dentro de mi app no tendre rutas publicas, simplemente
                    en este ejemplo esta contemplado que las rutas publicas corresponden a las de Autenticacion.
                </h2>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="publicas">
                <h1 className="text-3xl text-white">Rutas Publicas</h1>
                <h2 className="text-slate-400 mt-4">
                    Las rutas publicas tienen la particularidad de no necesitar de un mecanismo de verificacion de autenticacion o permisos para su acceso, por lo que su complejidad es nula a la hora de establecerlas, simplemente trabajamos de la misma manera
                    a como veniamos haciendo en RRD.
                </h2>
                <h2 className="text-slate-400 mt-4 mb-5">
                    A continuacion adjuntare el fragmento correspondiente a las rutas publicas del ejemplo mostrado.
                </h2>

                <div className="codeImg">
                    <ShowCodeJavaScript code={PublicRoutesCode} />
                </div>

                <h2 className="text-slate-400 mt-4 mb-5">
                    Como pueden ver, no hay ningun tipo de complejidad en la declaracion de rutas publicas!. Simplemente es especificarlas en el arbol de rutas de RRD y listo. En este caso, es necesario recordar que la logica del contenedor principal fue separada en
                    {' /auth/*'} para las rutas publicas y {' /app/*'} para las rutas privadas. Es una buena practica especificar la redireccion de urls desconocidas nuevamente dentro del componente. Es por ello que se declara
                    nuevamente la redireccion 404.
                </h2>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="privadas">
                <h1 className="text-3xl text-white">Rutas Privadas</h1>
                <h2 className="text-slate-400 mt-4">
                    Ahora vamos a lo importante, las rutas privadas. Primero comencemos mostrando el fragmento de codigo correspondiente y, puede que te lleves una sorpresa.
                </h2>
                <h2 className="text-slate-400 mt-4 mb-5">
                    A continuacion adjuntare un fragmento de codigo para mostrar la manera en que esta biblioteca maneja el estado de las rutas
                </h2>

                <div className="codeImg">
                    <ShowCodeJavaScript code={PrivateRoutesCode} />
                </div>

                <h2 className="text-slate-400 mt-4 mb-5">
                    Notas algo diferente al fragmento de codigo anterior, ademas del nombre del archivo para recorrer las rutas ?. No? Eso es por que no hay ninguna diferencia. Ahora bien, te preguntaras, como funciona la verificacion de las rutas privadas?
                </h2>
                <h2 className="text-slate-400 mt-4 mb-5">
                    La magia de la proteccion de las rutas ocurre dentro del archivo que utilizamos para declarar dichas rutas. {'`AppRoutesList`'}. Para ello empleamos un componente intermedio entre la ruta y la pagina.
                </h2>

                <div className="codeImg">
                    <ShowCodeJavaScript code={PrivadaCode} />
                </div>

                <h2 className="text-slate-400 mt-4 mb-5">
                    El componente {'`ProtectedRoute`'} funciona como verificacion para asegurarnos de que, en caso de no tener los permisos para acceder, se nos redirija a una ruta valida predeterminada.
                </h2>

                <div className="codeImg">
                    <ShowCodeJavaScript code={ProtectedRouteCode} />
                </div>

                <h2 className="text-slate-400 mt-4 mb-5">
                    Como pueden apreciar, aqui desarrolle un ejemplo donde verifico la logica de Autencicaion almacenada en el estado global de la App con Redux. Pero la idea general se entiende, dentro de este Componente es donde tendremos que colocar
                    la logica que necesitemos y que se adecue a nuestra idea y App.
                </h2>

                <h2 className="text-slate-400 mt-4 mb-5">
                    Y no hay mas!. Asi de sencillo es como configuramos y establecemos rutas publicas y privadas.
                </h2>

            </div>

        </article>
    )
}

const SidebarContent = () => {
    return (
        <div className="text-white p-2 fixed content-sidebar-scroll content-sidebar-container">

            <div className='mb-8 content-sidebar-container-children'>

                <h1 className="text-sky-400 text-center">Contenido de la Pagina</h1>

                <ul>
                    <li className="mt-8 ml-4 text-slate-400"><a href="#about">Sobre este Articulo</a></li>

                    <li className="mt-4 ml-4 text-slate-400"><a href="#introduccion">Introduccion</a></li>

                    <li className="mt-4 ml-4 text-slate-400"><a href="#contenedor">Contenedor General de Rutas de la App</a></li>

                    <li className="mt-4 ml-4 text-slate-400"><a href="#publicas">Rutas Publicas</a></li>

                    <li className="mt-4 ml-4 text-slate-400"><a href="#privadas">Rutas Privadas</a></li>

                </ul>
            </div>
        </div>
    )
}
