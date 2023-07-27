import { customValidationCode, erroresCode, especificosCode, middlewarePerCode, obligatoriosCode } from "../../assets/code/Middlewares"
import { MarkedText } from "../../components/PageComponents/Articles/MarkedText"
import { ParagrafComponent } from "../../components/PageComponents/Articles/Paragraf"
import { SubTitle } from "../../components/PageComponents/Articles/SubTitle"
import { Title } from "../../components/PageComponents/Articles/Title"
import { Separator } from "../../components/PageComponents/Separator"
import { ShowCode, ShowCodeJavaScript } from "../../components/PageComponents/ShowCode"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { ContentSidebarContainer, ContentSidebarItemSubTitle, ContentSidebarItemTitle } from "../../components/Sidebar/ContentSidebar"
import { PageContainer } from "../PageContainer"

export const Middlewares = () => {
    return (
        <PageContainer titlePage={'Middlewares'} pageContent={<Content />} sidebarContent={<SidebarContent />} />
    )
}

const Content = () => {
    return (
        <article className="md:text-justify">

            <TitlePage sectionTitle={'Backend'} pageTitle={'Comprobaciones Middlewares'} />

            <div className="mt-4 mr-10" id="about">

                <Title title={'Sobre este articulo'} />

                <ParagrafComponent>
                    En el desarrollo de aplicaciones web con Express.js, la validación de datos es una tarea crítica para garantizar la integridad y seguridad de la información que ingresa en nuestra aplicación.
                    Una forma efectiva de realizar estas validaciones es utilizando el paquete express-validator, que nos brinda un conjunto de herramientas para comprobar y validar datos en las rutas de nuestra
                    aplicación.
                </ParagrafComponent>

                <ParagrafComponent>
                    En este artículo, exploraremos cómo utilizar express-validator para realizar comprobaciones de datos en las rutas de Express, asegurándonos de que los datos enviados por los usuarios cumplan con
                    los criterios requeridos. Además, aprenderemos a crear nuestros propios middlewares personalizados para reutilizar lógica de validación en diferentes partes de nuestra aplicación.
                </ParagrafComponent>

                <SubTitle text={'¿Qué es express-validator y por qué es importante?'} customClass="mt-6" id="express"/>

                <ParagrafComponent>
                    <MarkedText text={'express-validator'} /> es una biblioteca de middleware que proporciona una forma sencilla y poderosa de validar y sanitizar datos en las solicitudes HTTP entrantes en una aplicación Express. Esta biblioteca
                    nos permite definir reglas de validación para los datos, como asegurarnos de que un campo sea obligatorio, tenga un formato específico (como una dirección de correo electrónico) o cumpla con ciertos
                    criterios.
                </ParagrafComponent>

                <ParagrafComponent>
                    La validación de datos es fundamental para proteger nuestra aplicación contra datos incorrectos o maliciosos que podrían afectar su funcionamiento o comprometer su seguridad. Al utilizar express-validator, podemos realizar
                    estas comprobaciones de forma sencilla y concisa, garantizando que nuestros endpoints solo reciban datos válidos y confiables.
                </ParagrafComponent>

                <ParagrafComponent>
                    En este artículo, cubriremos los siguientes temas:
                </ParagrafComponent>

                <ParagrafComponent classNameCustom="ml-5">
                    1. Instalación y configuración de express-validator en una aplicación Express.
                </ParagrafComponent>

                <ParagrafComponent classNameCustom="ml-5">
                    2. Uso de express-validator para realizar comprobaciones de datos en rutas y manejar errores de validación.
                </ParagrafComponent>

                <ParagrafComponent classNameCustom="ml-5">
                    3. Creación de middlewares personalizados para reutilizar lógica de validación en diferentes rutas y controladores.
                </ParagrafComponent>

                <ParagrafComponent classNameCustom="ml-5">
                    4. Implementación de diferentes tipos de validaciones, como comprobaciones de campos obligatorios, formatos de datos y valores mínimos o máximos.
                </ParagrafComponent>

                <ParagrafComponent>
                    Estos conceptos nos permitirán desarrollar aplicaciones más robustas y seguras, garantizando que los datos ingresados por los usuarios sean válidos y adecuados para su procesamiento.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="instalacion">

                <Title title={'Instalación y Configuración de express-validator'} />

                <ParagrafComponent classNameCustom="mb-4">
                    Para comenzar a utilizar express-validator, primero debemos instalarlo en nuestra aplicación. Para ello, abrimos una terminal y ejecutamos el siguiente comando:
                </ParagrafComponent>

                <ShowCode code={'npm install express-validator'} />

                <ParagrafComponent classNameCustom="mb-4">
                    Luego, importamos express-validator en nuestro archivo principal de la aplicación (generalmente app.js o index.js):
                </ParagrafComponent>

                <ShowCodeJavaScript code={`const { body, validationResult } = require('express-validator');`} />

                <ParagrafComponent>
                    El objeto body nos permitirá definir reglas de validación para los campos de una solicitud HTTP, mientras que validationResult nos ayudará a verificar si hay errores de validación
                    después de realizar las comprobaciones.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="comprobaciones">

                <Title title={'Comprobaciones de Datos en las Rutas'} />

                <SubTitle text={'Comprobación de Campos Obligatorios'} customClass="mt-10" id="obligatorios"/>

                <ParagrafComponent classNameCustom="mb-4">
                    Una de las comprobaciones más comunes es verificar si ciertos campos son obligatorios y no están vacíos. Para ello, utilizamos el método <MarkedText text={'body'} /> de express-validator y
                    definimos las reglas de validación para cada campo:
                </ParagrafComponent>

                <ShowCodeJavaScript code={obligatoriosCode} />

                <ParagrafComponent>
                    En el ejemplo anterior, estamos definiendo las reglas de validación para los campos nombre, email y contrasena. Utilizamos el método <MarkedText text={'notEmpty()'} /> para asegurarnos de que no estén vacíos, y en el
                    caso del campo email, utilizamos <MarkedText text={'isEmail()'} /> para comprobar si tiene un formato de dirección de correo electrónico válido. Si alguna de las comprobaciones falla, se agregará un mensaje de error
                    al objeto <MarkedText text={'validationResult'} />.
                </ParagrafComponent>

                <SubTitle text={'Comprobación de Formatos Específicos'} customClass="mt-10" id="especifico"/>

                <ParagrafComponent classNameCustom="mb-4">
                    Otra comprobación útil es verificar si ciertos campos tienen formatos específicos, como un número de teléfono o una fecha. Para ello, utilizamos los métodos de validación proporcionados por express-validator.
                    Por ejemplo, para verificar si un campo es un número de teléfono válido, podemos utilizar el método <MarkedText text={'isMobilePhone():'} />
                </ParagrafComponent>

                <ShowCodeJavaScript code={especificosCode} />

                <ParagrafComponent classNameCustom="mb-4">
                    En este caso, el método <MarkedText text={'isMobilePhone():'} /> se asegurará de que el campo telefono tenga un formato de número de teléfono válido. Si la comprobación falla, se agregará un mensaje de error al objeto
                    <MarkedText text={'validationResult'} />.
                </ParagrafComponent>

                <SubTitle text={'Comprobaciones Personalizadas'} customClass="mt-10" id="personalizados"/>

                <ParagrafComponent classNameCustom="mb-4">
                    Además de las comprobaciones incorporadas proporcionadas por express-validator, también podemos definir nuestras propias comprobaciones personalizadas. Para ello, utilizamos el método <MarkedText text={'custom() '} /> y
                    proporcionamos una función de validación personalizada:
                </ParagrafComponent>

                <ShowCodeJavaScript code={customValidationCode} />

                <ParagrafComponent>
                    En este ejemplo, estamos definiendo una comprobación personalizada para el campo <MarkedText text={'contenido'} />. La función de validación verifica si el contenido del comentario contiene la palabra {`"spam"`}.
                    Si no contiene la palabra {`"spam"`}, la validación es exitosa. Si contiene la palabra {`"spam"`}, se lanzará un error con el mensaje proporcionado.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="errores">
                <Title title={'Manejo de Errores de Validación'} customClass="mt-10" />

                <ParagrafComponent classNameCustom="mb-4">
                    Después de realizar las comprobaciones de datos con express-validator, debemos manejar los errores de validación que puedan ocurrir. Podemos hacerlo utilizando el objeto validationResult y verificando si contiene errores:
                </ParagrafComponent>

                <ShowCodeJavaScript code={erroresCode} />

                <ParagrafComponent>
                    En este ejemplo, estamos verificando si el objeto <MarkedText text={'validationResult'} /> contiene errores después de realizar las comprobaciones. Si contiene errores, respondemos con un código de estado 400 y enviamos un objeto
                    JSON que contiene los mensajes de error.
                </ParagrafComponent>
            </div>

            <Separator />

            <div className="mt-4 mr-10" id="middle-per">
                <Title title={'Creación de Middlewares Personalizados'} customClass="mt-10" />

                <ParagrafComponent classNameCustom="mb-4">
                    Además de las comprobaciones incorporadas en express-validator, podemos crear nuestros propios middlewares personalizados para reutilizar lógica de validación en diferentes rutas y controladores. Para ello, creamos una
                    función middleware y la utilizamos en nuestras rutas:
                </ParagrafComponent>

                <ShowCodeJavaScript code={middlewarePerCode} />

                <ParagrafComponent>
                    En este ejemplo, creamos el middleware <MarkedText text={'validarUsuario'} />, que contiene la lógica de validación del usuario. Luego, lo utilizamos como parte de las comprobaciones
                    en la ruta <MarkedText text={'/registro'} />, junto con las comprobaciones incorporadas de <MarkedText text={'express-validator.'} />
                </ParagrafComponent>
            </div>

            <Separator />

            <div className="mt-4 mr-10" id="conclusion">

                <Title title={'Conclusiones'} customClass="mt-10" />

                <ParagrafComponent>
                    En este artículo, hemos explorado cómo utilizar <MarkedText text={'express-validator.'} /> para realizar comprobaciones de datos en las rutas de Express, asegurándonos de que los datos enviados por los usuarios cumplan con los
                    criterios requeridos. También hemos aprendido a crear nuestros propios middlewares personalizados para reutilizar lógica de validación en diferentes partes de nuestra aplicación.
                </ParagrafComponent>

                <ParagrafComponent>
                    Utilizar <MarkedText text={'express-validator.'} /> nos permite desarrollar aplicaciones más robustas y seguras, garantizando que los datos ingresados por los usuarios sean válidos y adecuados para su procesamiento. Recuerda siempre realizar
                    comprobaciones de datos en tus aplicaciones para protegerlas contra datos incorrectos o maliciosos.
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
                <ContentSidebarItemSubTitle title={'Qué es express-validator'} id={'express'} />

                <ContentSidebarItemTitle title={'Instalación de express-validator'} id={'instalacion'} />

                <ContentSidebarItemTitle title={'Comprobaciones de Datos en las Rutas'} id={'comprobaciones'} />
                <ContentSidebarItemSubTitle title={'Campos Obligatorios'} id={'obligatorios'} />
                <ContentSidebarItemSubTitle title={'Formatos Especificos'} id={'especifico'} />
                <ContentSidebarItemSubTitle title={'Campos Personalizados'} id={'personalizados'} />

                <ContentSidebarItemTitle title={'Manejo de Errores'} id={'errores'} />
                <ContentSidebarItemTitle title={'Middlewares Personalizados'} id={'middle-per'} />
                <ContentSidebarItemTitle title={'Conclusiones'} id={'conclusion'} />
            </ul>
        </ContentSidebarContainer>
    )
}
