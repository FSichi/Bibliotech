import { Separator } from "../../components/PageComponents/Separator"
import { ShowCode } from "../../components/PageComponents/ShowCode"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { PageContainer } from "../PageContainer"

export const LibreriasFrontend = () => {
    return (
        <PageContainer titlePage={'LibreriasFrontend'} pageContent={<LibreriasContent />} sidebarContent={<LibreriasSidebar />} />
    )
}

const LibreriasContent = () => {

    const viteCode = `npx create-vite my-app\ncd my-app\nnpm install`;
    const rrdCode = `npm i react-router-dom`;
    const reactIconsCode = `npm i react-icons`;
    const reactHelmetCode = `npm i react-helmet`;
    const axiosCode = `npm i axios`;
    const reactchartCode = `npm i chart.js\nnpm i react-chartjs-2`;
    const reacthookFormCode = `npm i react-hook-form`;
    const reactReduxCode = `npm i redux\nnpm i react-redux\nnpm i redux-thunk`;
    const reactSelectCode = `npm i react-select`;
    const reactSpinnerCode = `npm i react-spinner-animated`;
    const sweetAlert2Code = `npm i sweetalert2`;

    return (
        <article className="md:text-justify">

            <TitlePage sectionTitle={'Frontend'} pageTitle={'Librerias que siempre utilizo'} />

            <div className="mt-4 mr-10" id="about">
                <h1 className="text-2xl text-white">Sobre este articulo</h1>
                <h2 className="text-slate-400 mt-4">
                    En esta página, me complace compartir contigo las bibliotecas y paquetes que siempre incorporo en mis proyectos de desarrollo Frontend con React.
                    Estas herramientas se han convertido en mis opciones preferidas debido a su confiabilidad, mantenimiento activo y popularidad en la comunidad de desarrollo.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    Es importante tener en cuenta que, si bien estas bibliotecas cumplen con sus objetivos y son altamente funcionales, no afirmo que sean las mejores en su categoría.
                    Sin embargo, al elegir estas bibliotecas, puedo aprovechar sus beneficios adicionales. Al ser populares, es más probable encontrar una amplia gama de recursos en línea,
                    como documentación, tutoriales, ejemplos y soluciones a problemas comunes. Esto facilita la resolución de problemas y el aprendizaje a medida que avanzo en mis proyectos.
                    Al agregar estas bibliotecas desde el inicio al archivo de configuración del proyecto, como el package.json, tengo la ventaja de contar con un conjunto sólido de herramientas
                    desde el principio. Esto agiliza mi flujo de trabajo y me permite concentrarme en la lógica y los componentes específicos de mi aplicación, en lugar de invertir tiempo en
                    desarrollar funcionalidades básicas desde cero.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    A continuación, encontrarás una descripción detallada de cada una de las bibliotecas que suelo utilizar en mis proyectos:
                </h2>
            </div>

            <div className="mt-4 mr-10" id="listado">
                <h1 className="text-xl text-white">Listado de Librerias</h1>
                <ul className="text-slate-400 mt-4">
                    <li><span className="mr-3 rounded-full text-sky-300">#</span>Vite (*)</li>
                    <li><span className="mr-3 rounded-full text-sky-300">#</span>React-Router-Dom</li>
                    <li><span className="mr-3 rounded-full text-sky-300">#</span>React Icons</li>
                    <li><span className="mr-3 rounded-full text-sky-300">#</span>React Helmet</li>
                    <li><span className="mr-3 rounded-full text-sky-300">#</span>Axios</li>
                    <li><span className="mr-3 rounded-full text-sky-300">#</span>React ChartJs 2</li>
                    <li><span className="mr-3 rounded-full text-sky-300">#</span>React Hook Form</li>
                    <li><span className="mr-3 rounded-full text-sky-300">#</span>React Redux (*)</li>
                    <li><span className="mr-3 rounded-full text-sky-300">#</span>React Select</li>
                    <li><span className="mr-3 rounded-full text-sky-300">#</span>React Spinner Animated</li>
                    <li><span className="mr-3 rounded-full text-sky-300">#</span>SweetAlert 2</li>
                </ul>

                <h2 className="text-slate-400 mt-4">
                    Espero que estas descripciones te sean útiles y te inspiren a explorar estas herramientas en tus propios proyectos. Recuerda que siempre es importante evaluar y seleccionar las bibliotecas
                    que mejor se adapten a tus necesidades y objetivos específicos. ¡Feliz desarrollo!
                </h2>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="vite">
                <h1 className="text-2xl text-white">Vite</h1>

                <h2 className="text-slate-400 mt-4">
                    Vite es un compilador y empaquetador extremadamente rápido para aplicaciones web modernas en JavaScript. Se caracteriza por su enfoque de construcción
                    {` "bajo demanda"`} (on-demand), lo que significa que solo compila y empaqueta los módulos que se necesitan durante el tiempo de ejecución. Esto resulta en tiempos de
                    inicio rápidos y una experiencia de desarrollo ágil. Vite también es compatible con la carga en caliente (hot module replacement), lo que permite la actualización
                    instantánea de los cambios realizados en el código durante el desarrollo. Es especialmente conocido por su capacidad para iniciar rápidamente proyectos de React y Vue,
                    y su rendimiento general durante el desarrollo y la construcción de aplicaciones.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    En comparacion con otros compiladores para inicializar proyectos React como {` 'create-react-app' `} (Que por cierto esta descontinuado), es mucho mas versatil, ligero y rapido.
                    Por lo que a dia de hoy me parece que es la mejor opcion considerando su popularidad.
                </h2>

                <h1 className="text-xl text-white mt-4 italic">Instalacion</h1>

                <div className="codeImg">
                    <ShowCode code={viteCode} />
                </div>

                <p className="text-sky-400 mt-3 hover:text-indigo-400">
                    <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">https://vitejs.dev/</a>
                </p>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="rrd">
                <h1 className="text-2xl text-white">React-Router-Dom</h1>
                <h2 className="text-slate-400 mt-4">
                    React-Router-Dom es una biblioteca de enrutamiento para aplicaciones React. Proporciona componentes y utilidades que te permiten manejar el enrutamiento de forma declarativa en tu aplicación.
                    Puedes definir diferentes rutas y asociarlas con componentes específicos que se deben renderizar cuando se accede a esas rutas. React-Router-Dom ofrece características avanzadas como enrutamiento
                    anidado, enrutamiento basado en parámetros y capacidades de redirección, lo que facilita la creación de aplicaciones de una sola página (SPA) con múltiples vistas.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    Dentro de la Comunidad dev de React, RRD es sin lugar a dudas el rey indiscutido cuando se trata de manejar rutas en nuestras Apps.
                </h2>

                <h1 className="text-xl text-white mt-4 italic">Instalacion</h1>

                <div className="codeImg">
                    <ShowCode code={rrdCode} />
                </div>

                <p className="text-sky-400 mt-3 hover:text-indigo-400">
                    <a href="https://reactrouter.com/en/main" target="_blank" rel="noreferrer">https://reactrouter.com/en/main</a>
                </p>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="ri">
                <h1 className="text-2xl text-white">React Icons</h1>
                <h2 className="text-slate-400 mt-4">
                    React Icons es una biblioteca que ofrece una amplia variedad de iconos listos para usar en tus aplicaciones React. Proporciona componentes que representan diferentes iconos, lo que facilita su integración
                    y personalización. Los iconos están diseñados de forma vectorial, lo que significa que se pueden escalar y ajustar sin perder calidad. React Icons admite una variedad de conjuntos de iconos populares, como
                    Font Awesome, Material Design Icons y muchos más. Puedes usar estos iconos para mejorar la usabilidad y la apariencia visual de tu aplicación.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    Al incluir React Icons en nuestro proyecto, ya contamos con una base gigante de iconos a nuestra disposicion, lo que elimina la necesidad de instalar o incluir cientos de dependencias o librerias a un conjunto
                    o paquete en especifico.
                </h2>

                <h1 className="text-xl text-white mt-4 italic">Instalacion</h1>

                <div className="codeImg">
                    <ShowCode code={reactIconsCode} />
                </div>

                <p className="text-sky-400 mt-3 hover:text-indigo-400">
                    <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noreferrer">https://react-icons.github.io/react-icons/</a>
                </p>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="rh">
                <h1 className="text-2xl text-white">React Helmet</h1>
                <h2 className="text-slate-400 mt-4">
                    React Helmet es una biblioteca que te permite manipular las etiquetas del encabezado (head) de tu página en aplicaciones React. A través de componentes y utilidades, React Helmet te permite actualizar dinámicamente
                    elementos como el título de la página, las metaetiquetas y otros elementos del encabezado según el estado de tu aplicación. Esto es especialmente útil para mejorar el SEO (optimización para motores de búsqueda) de tu
                    aplicación y proporcionar metadatos personalizados para diferentes rutas y vistas.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    Si eres observador veras que cada pagina de esta biblioteca tiene su correspondiente nombre en la pestana de tu navegador. Eso es posible gracias a Helmet ;)
                </h2>

                <h1 className="text-xl text-white mt-4 italic">Instalacion</h1>

                <div className="codeImg">
                    <ShowCode code={reactHelmetCode} />
                </div>

                <p className="text-sky-400 mt-3 hover:text-indigo-400">
                    <a href="https://github.com/nfl/react-helmet" target="_blank" rel="noreferrer">https://github.com/nfl/react-helmet</a>
                </p>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="axios">
                <h1 className="text-2xl text-white">Axios</h1>
                <h2 className="text-slate-400 mt-4">
                    Axios es una biblioteca de cliente HTTP basada en promesas que se utiliza comúnmente para realizar solicitudes HTTP en aplicaciones JavaScript. Proporciona una interfaz sencilla y fácil de usar para
                    enviar solicitudes y manejar respuestas desde y hacia servidores. Con Axios, puedes realizar solicitudes GET, POST, PUT, DELETE y otras operaciones HTTP. También ofrece características avanzadas como
                    el manejo de interceptores, la cancelación de solicitudes y la serialización/deserialización automática de datos en formato JSON. Axios es ampliamente utilizado en el desarrollo de aplicaciones web y
                    es compatible tanto con navegadores como con entornos de servidor.
                </h2>

                <h1 className="text-xl text-white mt-4 italic">Instalacion</h1>

                <div className="codeImg">
                    <ShowCode code={axiosCode} />
                </div>

                <p className="text-sky-400 mt-3 hover:text-indigo-400">
                    <a href="https://axios-http.com/docs/intro" target="_blank" rel="noreferrer">https://axios-http.com/docs/intro</a>
                </p>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="rc">
                <h1 className="text-2xl text-white">React ChartJs 2</h1>
                <h2 className="text-slate-400 mt-4">
                    React ChartJs 2 es una biblioteca que permite crear visualizaciones de datos interactivas en aplicaciones React utilizando la biblioteca Chart.js. Chart.js es una biblioteca JavaScript popular y potente para crear
                    gráficos y visualizaciones de datos en la web. React ChartJs 2 proporciona componentes React que envuelven las capacidades de Chart.js y te permiten crear gráficos personalizados y atractivos. Puedes crear gráficos
                    de barras, gráficos de líneas, gráficos circulares y otros tipos de visualizaciones de datos utilizando una API simple y declarativa.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    Luego de probar y utilizar muchas librerias destinadas a crear graficos con informacion, creo que React ChartJs2 es la mejor por amplia diferencia.
                </h2>

                <h1 className="text-xl text-white mt-4 italic">Instalacion</h1>

                <div className="codeImg">
                    <ShowCode code={reactchartCode} />
                </div>

                <p className="text-sky-400 mt-3 hover:text-indigo-400">
                    <a href="https://react-chartjs-2.js.org/" target="_blank" rel="noreferrer">https://react-chartjs-2.js.org/</a>
                </p>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="rhf">
                <h1 className="text-2xl text-white">React Hook Form</h1>
                <h2 className="text-slate-400 mt-4">
                    React Hook Form es una biblioteca para el manejo de formularios en React. Permite crear formularios flexibles y reutilizables utilizando hooks de React.
                    React Hook Form ofrece una API sencilla y concisa para validar y enviar datos de formularios. Puedes realizar validaciones de campos, controlar la presentación de errores,
                    manejar envíos asincrónicos y muchas otras tareas relacionadas con los formularios. La biblioteca se enfoca en el rendimiento y se esfuerza por minimizar la cantidad de renderizados
                    y actualizaciones innecesarios, lo que la hace adecuada para formularios complejos y grandes.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    Al momento de trabajar con formularios e inputs controlados dentro de nuestra aplicacion, podemos optar por una solucion nativa que si bien nos permite tener una personalizacion y control
                    total, tambien lastra el rendimiento con la cantidad de renderizaciones de los componentes. Aqui es donde React-Hook-Forms es el rey, no solo debido a su increible capacidad de prevencion de
                    renderizaciones innecesarias, sino tambien por que no perdemos la posibilidad de componentizar nuestra aplicacion y personalizar nuestros componentes de la manera que mas nos guste.
                </h2>

                <h1 className="text-xl text-white mt-4 italic">Instalacion</h1>

                <div className="codeImg">
                    <ShowCode code={reacthookFormCode} />
                </div>

                <p className="text-sky-400 mt-3 hover:text-indigo-400">
                    <a href="https://www.react-hook-form.com/" target="_blank" rel="noreferrer">https://www.react-hook-form.com/</a>
                </p>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="rr">
                <h1 className="text-2xl text-white">React Redux</h1>
                <h2 className="text-slate-400 mt-4">
                    React Redux es una biblioteca que integra la administración del estado basada en Redux en aplicaciones React. Redux es un contenedor de estado predecible para aplicaciones JavaScript, y React Redux
                    proporciona componentes y utilidades que te permiten conectar tus componentes React al estado global almacenado en el store de Redux. Esto facilita la gestión del estado en aplicaciones grandes y complejas,
                    ya que los datos se almacenan de manera centralizada y se pueden acceder y actualizar de manera eficiente en toda la aplicación. React Redux también ofrece herramientas para la depuración y el control del
                    flujo de datos en tu aplicación.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    De esta libreria no hay mucho que decir, simplemente si tienes comunicacion con backend y manejo de estado, redux es el mas popular. Es necesario destacar que en la comunidad dev, surgieron nuevas alternativas
                    a redux, pero creo que aun estan un poco verdes en comparacion con este.
                </h2>

                <h1 className="text-xl text-white mt-4 italic">Instalacion</h1>

                <div className="codeImg">
                    <ShowCode code={reactReduxCode} />
                </div>

                <p className="text-sky-400 mt-3 hover:text-indigo-400">
                    <a href="https://react-redux.js.org/" target="_blank" rel="noreferrer">https://react-redux.js.org/</a>
                </p>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="rs">
                <h1 className="text-2xl text-white">React Select</h1>
                <h2 className="text-slate-400 mt-4">
                    React Select es una biblioteca que ofrece componentes de selección personalizables y accesibles para aplicaciones React. Proporciona una amplia gama de características, como opciones de búsqueda, autocompletado y
                    selección múltiple, lo que facilita la implementación de selectores avanzados en tus formularios. React Select también admite la personalización de estilos y la capacidad de integrar iconos y elementos personalizados
                    en las opciones de selección. Esta biblioteca es muy útil cuando necesitas manejar selecciones de datos complejas o grandes en tu aplicación.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    Al momento de trabajar con un input de tipo select, esta libreria nos ofrece todas las herramientas que necesitamos para no perder tiempo programando funcionalidades especificas como multiSelect, select por categorias
                    y demas. React Select ya incluye todo un set de funcionalidades testeadas y super eficientes. Punto extra por la capacidad de personalizacion.
                </h2>

                <h1 className="text-xl text-white mt-4 italic">Instalacion</h1>

                <div className="codeImg">
                    <ShowCode code={reactSelectCode} />
                </div>

                <p className="text-sky-400 mt-3 hover:text-indigo-400">
                    <a href="https://react-select.com/home" target="_blank" rel="noreferrer">https://react-select.com/home</a>
                </p>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="rsa">
                <h1 className="text-2xl text-white">React Spinner Animated</h1>
                <h2 className="text-slate-400 mt-4">
                    React Spinner Animated es una biblioteca que proporciona componentes animados de carga o espera en tus aplicaciones React. Estos componentes permiten mostrar indicadores visuales de carga mientras se realizan tareas
                    asincrónicas o se cargan datos. React Spinner Animated ofrece una variedad de estilos y animaciones predefinidos que puedes personalizar y adaptar según las necesidades de tu aplicación. Estos componentes son fáciles
                    de usar y pueden mejorar la experiencia del usuario al proporcionar una retroalimentación visual clara durante las operaciones que requieren tiempo.
                </h2>

                <h1 className="text-xl text-white mt-4 italic">Instalacion</h1>

                <div className="codeImg">
                    <ShowCode code={reactSpinnerCode} />
                </div>

                <p className="text-sky-400 mt-3 hover:text-indigo-400">
                    <a href="https://github.com/venushadilshan/react-spinner-animated" target="_blank" rel="noreferrer">https://github.com/venushadilshan/react-spinner-animated</a>
                </p>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="swt2">
                <h1 className="text-2xl text-white">SweetAlert 2</h1>
                <h2 className="text-slate-400 mt-4">
                    SweetAlert 2 es una biblioteca para mostrar mensajes de alerta y diálogos modales personalizados en aplicaciones web. Proporciona una interfaz elegante y fácil de usar para mostrar mensajes de confirmación, alertas y
                    otros tipos de notificaciones interactivas en tus aplicaciones. SweetAlert 2 te permite personalizar el contenido y el estilo de los mensajes de alerta, así como agregar botones y otras interacciones. También puedes
                    utilizar animaciones y efectos visuales para mejorar la presentación de los mensajes. Esta biblioteca es útil para mejorar la usabilidad y la experiencia del usuario al proporcionar notificaciones atractivas y amigables.
                </h2>
                <h2 className="text-slate-400 mt-4">
                    Me atrevo a adivinar que SweetAlert2 fue el primer paquete externo que instalamos del 99% de las personas cuando iniciamos en el mundo dev.
                </h2>

                <h1 className="text-xl text-white mt-4 italic">Instalacion</h1>

                <div className="codeImg">
                    <ShowCode code={sweetAlert2Code} />
                </div>

                <p className="text-sky-400 mt-3 hover:text-indigo-400">
                    <a href="https://sweetalert2.github.io/" target="_blank" rel="noreferrer">https://sweetalert2.github.io/</a>
                </p>

            </div>

        </article>
    )
}

const LibreriasSidebar = () => {
    return (
        <div className="text-white p-2 fixed content-sidebar-scroll content-sidebar-container">

            <div className='mb-8 content-sidebar-container-children'>

                <h1 className="text-sky-400 text-center">Contenido de la Pagina</h1>

                <ul>
                    <li className="mt-8 ml-4 text-slate-400"><a href="#about">Sobre este Articulo</a></li>
                    <li className="ml-10 mt-2 text-slate-400"><a href="#listado">Listado de librerias</a></li>

                    <li className="mt-3 ml-4 text-slate-400"><a href="#vite">Vite</a></li>
                    <li className="mt-3 ml-4 text-slate-400"><a href="#rrd">React Router Dom</a></li>
                    <li className="mt-3 ml-4 text-slate-400"><a href="#ri">React Icons</a></li>
                    <li className="mt-3 ml-4 text-slate-400"><a href="#rh">React Helmet</a></li>
                    <li className="mt-3 ml-4 text-slate-400"><a href="#axios">Axios</a></li>
                    <li className="mt-3 ml-4 text-slate-400"><a href="#rc">React ChartJs 2</a></li>
                    <li className="mt-3 ml-4 text-slate-400"><a href="#rhf">React Hook Form</a></li>
                    <li className="mt-3 ml-4 text-slate-400"><a href="#rr">React Redux</a></li>
                    <li className="mt-3 ml-4 text-slate-400"><a href="#rs">React Select</a></li>
                    <li className="mt-3 ml-4 text-slate-400"><a href="#rsa">React Spinner Animated</a></li>
                    <li className="mt-3 ml-4 text-slate-400"><a href="#swt2">SweetAlert 2</a></li>

                </ul>

            </div>

        </div>
    )
}