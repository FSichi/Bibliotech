import { configDatabase, controllerCRUD, modelCRUD, routesCRUD, serviceCRUD } from "../../assets/code/APIExample"
import { MarkedText } from "../../components/PageComponents/Articles/MarkedText"
import { ParagrafComponent } from "../../components/PageComponents/Articles/Paragraf"
import { SubTitle } from "../../components/PageComponents/Articles/SubTitle"
import { Title } from "../../components/PageComponents/Articles/Title"
import { Separator } from "../../components/PageComponents/Separator"
import { ShowCode, ShowCodeJavaScript } from "../../components/PageComponents/ShowCode"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { ContentSidebarContainer, ContentSidebarItemSubTitle, ContentSidebarItemTitle } from "../../components/Sidebar/ContentSidebar"
import { PageContainer } from "../PageContainer"

export const Crud = () => {
    return (
        <PageContainer titlePage={'CRUD'} pageContent={<Content />} sidebarContent={<SidebarContent />} />
    )
}


const Content = () => {
    return (
        <article className="md:text-justify">

            <TitlePage sectionTitle={'Backend'} pageTitle={'Operaciones CRUD'} />

            <div className="mt-4 mr-10" id="about">

                <Title title={'Sobre este articulo'} />

                <ParagrafComponent>
                    En el mundo del desarrollo de aplicaciones, la gestión de bases de datos es una de las tareas fundamentales para cualquier desarrollador. Cuando se trata de bases de datos NoSQL,
                    MongoDB destaca como una de las opciones más populares y versátiles. Entre las operaciones más comunes y esenciales al interactuar con una base de datos, se encuentran las operaciones
                    CRUD: Crear (Create), Leer (Read), Actualizar (Update) y Eliminar (Delete).
                </ParagrafComponent>

                <ParagrafComponent>
                    En este artículo, exploraremos cómo construir una API que implemente estas operaciones CRUD utilizando MongoDB como base de datos. Nos centraremos en ejemplos prácticos y sencillos
                    para que puedas comprender fácilmente cómo realizar cada operación y cómo aprovechar al máximo las capacidades de MongoDB en tu aplicación.
                </ParagrafComponent>

                <ParagrafComponent>
                    A lo largo de esta guía, aprenderás cómo:
                </ParagrafComponent>

                <ParagrafComponent>
                    1. <MarkedText text={'Obtener todos'} /> los registros de una colección en MongoDB.
                </ParagrafComponent>

                <ParagrafComponent>
                    2. <MarkedText text={'Obtener un solo'} /> registro específico mediante un identificador único.
                </ParagrafComponent>

                <ParagrafComponent>
                    3. <MarkedText text={'Crear nuevos'} /> registros y almacenarlos en la base de datos.
                </ParagrafComponent>

                <ParagrafComponent>
                    4. <MarkedText text={'Actualizar'} /> la información de un registro existente.
                </ParagrafComponent>

                <ParagrafComponent>
                    5. <MarkedText text={'Eliminar'} /> un registro de la base de datos.
                </ParagrafComponent>

                <ParagrafComponent>
                    Además, exploraremos buenas prácticas y consideraciones importantes al diseñar una API eficiente y segura. Conocerás cómo estructurar tus rutas, utilizar controladores y servicios,
                    y gestionar errores para crear una API robusta y escalable.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="requisitos">

                <Title title={'Requisitos Previos'} />

                <ParagrafComponent>
                    En este artículo, te guiaremos paso a paso en la construcción de una API que implemente operaciones CRUD utilizando MongoDB como base de datos. Aprovecharemos la arquitectura Ruta -
                    Controlador - Servicio para mantener nuestro código modular y fácil de mantener.
                </ParagrafComponent>

                <ParagrafComponent>
                    Antes de empezar, asegúrate de tener instalado Node.js y MongoDB en tu sistema. También es útil tener nociones básicas de Node.js y cómo trabajar con Express.js, una librería que nos
                    ayudará a crear nuestra API.
                </ParagrafComponent>

                <SubTitle text={'Configurar un Proyecto de Node.js'} customClass="mt-6" id="configurar" />

                <ParagrafComponent classNameCustom="mb-4">
                    Para trabajar con Mongoose y Node.js, necesitamos crear un proyecto de Node.js y configurar las dependencias necesarias. Si aún no tienes un proyecto de Node.js,
                    puedes ir hacia el articulo <MarkedText text={'Implementacion API'} /> donde explico todos los pasos detallados para crer un servidor NodeJs.
                    En cualquier caso puedes seguir estos rapidos pasos para configurar un servidor:
                </ParagrafComponent>

                <ParagrafComponent classNameCustom="mb-4">
                    <MarkedText text={'Paso 1:'} /> Crea una carpeta para tu proyecto y navega a ella desde la línea de comandos.
                </ParagrafComponent>

                <ParagrafComponent classNameCustom="mb-4">
                    <MarkedText text={'Paso 2:'} /> Inicializa un proyecto de Node.js ejecutando el siguiente comando:
                </ParagrafComponent>

                <ShowCode code={'npm init -y'} />

                <ParagrafComponent classNameCustom="mb-4">
                    Este comando creará un archivo package.json con la configuración predeterminada.
                </ParagrafComponent>

                <ParagrafComponent classNameCustom="mb-4">
                    <MarkedText text={'Paso 3:'} /> Instala las dependencias necesarias para nuestro proyecto. Ejecuta el siguiente comando:
                </ParagrafComponent>

                <ShowCode code={'npm install mongoose express'} />

                <SubTitle text={'Crear el Archivo de Conexión a MongoDB'} customClass="mt-6" id="conexion" />

                <ParagrafComponent classNameCustom="mb-4">
                    Antes de comenzar a definir modelos de datos, necesitamos establecer una conexión con nuestra base de datos MongoDB. Crearemos un archivo llamado
                    config.js dentro del directorio database en la carpeta raiz del proyecto para gestionar la conexión.
                </ParagrafComponent>

                <ShowCodeJavaScript code={configDatabase} />

                <SubTitle text={'Definir el Modelo de Datos'} customClass="mt-6" id="modelo" />

                <ParagrafComponent classNameCustom="mb-4">
                    Antes de crear nuestras rutas y controladores, definamos el modelo de datos que utilizaremos en nuestra base de datos. Por ejemplo, si estamos
                    construyendo una API para administrar una lista de usuarios, nuestro modelo de datos podría verse así:
                </ParagrafComponent>

                <ShowCodeJavaScript code={modelCRUD} />

                <ParagrafComponent classNameCustom="mb-4">
                    En este modelo, estamos definiendo un esquema para nuestros usuarios con propiedades como name, email y age. También hemos especificado que name y email
                    son campos obligatorios (required: true) y que el campo email debe ser único (unique: true).
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="rutas">

                <Title title={'Crear nuestras Rutas'} />

                <ParagrafComponent classNameCustom="mb-4">
                    Ahora que tenemos nuestra base de datos y nuestro modelo de datos listos, creemos nuestras rutas para las operaciones CRUD. Crearemos un archivo <MarkedText text={'routes/users.js'} /> para definir estas rutas:
                </ParagrafComponent>

                <ShowCodeJavaScript code={routesCRUD} />

                <ParagrafComponent>
                    Aquí, hemos definido cinco rutas diferentes para cada operación CRUD: obtener todos los usuarios, obtener un usuario por su ID, crear un nuevo usuario, actualizar un usuario por su ID y eliminar
                    un usuario por su ID. Cada una de estas rutas se relaciona con un controlador que implementaremos en el siguiente paso.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="controlador">

                <Title title={'Crear nuestro Controlador'} />

                <ParagrafComponent classNameCustom="mb-4">
                    En el archivo <MarkedText text={'controllers/UserController.js'} />, implementemos la lógica para cada una de nuestras rutas:
                </ParagrafComponent>

                <ShowCodeJavaScript code={controllerCRUD} />

                <ParagrafComponent>
                    Como pueden apreciar, este controlador es un ejemplo basico de como realizar la comunicacion entre las Rutas y nuestro servicio, encargado de la comunicacion con nuestra
                    base de datos. En caso de requerir cualquier tipo de logica adicional, deberan colocarla dentro del controlador.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="servicio">

                <Title title={'Crear nuestro Servicio'} />

                <ParagrafComponent classNameCustom="mb-4">
                    En el archivo <MarkedText text={'service/UserService.js'} />, implementemos los metodos de acceso a nuestra base de datos MongoDB.
                </ParagrafComponent>

                <ShowCodeJavaScript code={serviceCRUD} />

                <ParagrafComponent>
                    Aqui definimos las operaciones necesarias para realizar actualizaciones de los registros de nuestra base de datos. La ventaja de trabajar de manera modular con un servicio es que
                    si en un futuro desean cambiar o actualizar la tecnologia de base de datos de su aplicacion, simplemente deben cambiar el archivo de service, ya que toda la logica de negocios esta
                    dentro del controlador, y eso es inmutable en el tiempo si lo definimos correctamente.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="conclusion">

                <Title title={'Conclusion'} />

                <ParagrafComponent>
                    Y eso es todo!. Como pueden apreciar en este articulo defini operaciones CRUD basicas a modo de ejemplo, pero lo que es importante es la estructura y comunicacion en esta arquitectura por capas.
                    A partir de este ejemplo pueden comenzar a agregarle mas dificultad como verificacion de datos en las rutas, comprobaciones de error y manejo de respuestas personalizadas para agregar aun mas valor
                    a su proyecto y codigo. Espero que este tutorial les haya sido de utilidad.
                </ParagrafComponent>

            </div>

        </article>
    )
}

const SidebarContent = () => {
    return (
        <ContentSidebarContainer>
            <ul>
                <ContentSidebarItemTitle title={'Sobre este Articulo'} id={'about'} customClassname="mt-8" />

                <ContentSidebarItemTitle title={'Requisitos Previos'} id={'requisitos'} />
                <ContentSidebarItemSubTitle title={'Configurar un Proyecto de Node.js'} id={'configurar'} />
                <ContentSidebarItemSubTitle title={'Crear el Archivo de Conexión a MongoDB'} id={'conexion'} />
                <ContentSidebarItemSubTitle title={'Definir el Modelo de Datos'} id={'modelo'} />

                <ContentSidebarItemTitle title={'Crear nuestras Rutas'} id={'rutas'} />
                <ContentSidebarItemTitle title={'Crear nuestro Controlador'} id={'controlador'} />
                <ContentSidebarItemTitle title={'Crear nuestro Servicio'} id={'servicio'} />
                <ContentSidebarItemTitle title={'Conclusion'} id={'conclusion'} />

            </ul>
        </ContentSidebarContainer>
    )
}
