import { generarJWT, httpRequest, middlewareRoles, middlewareToken, rolesDB, rutaProtegida, rutaToken } from "../../assets/code/RolesyToken"
import { MarkedText } from "../../components/PageComponents/Articles/MarkedText"
import { ParagrafComponent } from "../../components/PageComponents/Articles/Paragraf"
import { SubTitle } from "../../components/PageComponents/Articles/SubTitle"
import { ThirdTitle } from "../../components/PageComponents/Articles/ThirdTitle"
import { Title } from "../../components/PageComponents/Articles/Title"
import { Separator } from "../../components/PageComponents/Separator"
import { ShowCodeJavaScript } from "../../components/PageComponents/ShowCode"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { ContentSidebarContainer, ContentSidebarItemSubTitle, ContentSidebarItemTitle } from "../../components/Sidebar/ContentSidebar"
import { PageContainer } from "../PageContainer"

export const RolesyTokens = () => {
    return (
        <PageContainer titlePage={'Roles-Token'} pageContent={<Content />} sidebarContent={<SidebarContent />} />
    )
}


export const Content = () => {
    return (
        <article className="md:text-justify">

            <TitlePage sectionTitle={'Backend'} pageTitle={'Definicion de Roles y Tokens'} />

            <div className="mt-4 mr-10" id="about">

                <Title title={'Sobre este articulo'} />

                <ParagrafComponent>
                    En el desarrollo de aplicaciones modernas, la seguridad es una de las principales preocupaciones. Asegurar que los usuarios tengan acceso adecuado a ciertas funcionalidades y recursos es esencial para
                    mantener la integridad y privacidad de los datos. Es aquí donde la definición de roles y el manejo de tokens juegan un papel fundamental en la protección del backend de nuestra aplicación.
                </ParagrafComponent>

                <ParagrafComponent>
                    En este artículo, exploraremos en detalle cómo definir roles para los usuarios en una aplicación y cómo utilizar tokens para asegurar las API y recursos sensibles. Desde la implementación de diferentes
                    roles de usuario hasta la generación y validación de tokens, abordaremos los conceptos clave que te permitirán mejorar la seguridad y la gestión de permisos en tu backend.
                </ParagrafComponent>

                <ParagrafComponent>
                    Si deseas fortalecer la seguridad de tu aplicación y aprender cómo implementar un sistema de roles y tokens efectivo, sigue leyendo para descubrir los aspectos fundamentales de esta práctica en el desarrollo
                    de aplicaciones web.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="roles">

                <Title title={'Definición de Roles y Gestión de Permisos en el Backend'} />

                <ParagrafComponent>
                    En el desarrollo de aplicaciones web, la gestión de permisos y roles es crucial para garantizar la seguridad y privacidad de los datos. Definir roles y asignar permisos adecuados a los usuarios es una práctica común
                    para controlar el acceso a diferentes recursos y funcionalidades dentro de la aplicación. En esta sección, aprenderemos cómo definir roles de usuario y cómo gestionar los permisos en el backend.
                </ParagrafComponent>

                <SubTitle text={'Definición de Roles de Usuario'} customClass="mt-10" id="definicion-roles"/>

                <ParagrafComponent>
                    Antes de comenzar a gestionar los permisos, es esencial establecer una estructura clara de roles de usuario en el backend. Los roles son categorías o niveles de acceso que se asignan a los usuarios y determinan qué acciones
                    pueden realizar dentro de la aplicación. Algunos ejemplos comunes de roles podrían ser {`"Administrador"`}, {`"Usuario"`} y {`"Invitado"`}. Cada rol tendría diferentes niveles de autorización y acceso a las funciones de la aplicación.
                </ParagrafComponent>

                <ParagrafComponent>
                    En muchos casos, los roles se definen como una colección de permisos. Por ejemplo, un rol de {`"Administrador"`} puede tener acceso a todas las funcionalidades, mientras que un {`"Usuario"`} solo puede realizar acciones específicas y un
                    {`"Invitado"`} puede tener un acceso limitado.
                </ParagrafComponent>

                <ThirdTitle text={'Ejemplo de Definición de Roles'} />

                <ShowCodeJavaScript code={rolesDB} />

                <ParagrafComponent>
                    En este ejemplo, definimos roles como una enumeración de objetos. Cada rol se representa con una clave única que contiene el nombre del rol como una cadena.
                </ParagrafComponent>

                <SubTitle text={'Asignación de Roles a Usuarios'} customClass="mt-10" id="asignacion-roles"/>

                <ParagrafComponent>
                    Una vez que hemos definido los roles, necesitamos asignarlos a los usuarios en el backend. La asignación de roles generalmente se realiza durante el proceso de registro o cuando se otorgan permisos adicionales a un usuario existente.
                    La información de los roles asignados a cada usuario se puede almacenar en la base de datos o en un sistema de gestión de identidad y acceso.
                </ParagrafComponent>

                <SubTitle text={'Gestión de Permisos y Middleware'} customClass="mt-10" id="permisos"/>

                <ParagrafComponent>
                    Una vez que los roles están definidos y asignados a los usuarios, debemos asegurarnos de que los usuarios tengan acceso solo a las funcionalidades y recursos permitidos para su rol específico. Aquí es donde entran en juego los middlewares.
                    Un middleware es una función que se ejecuta antes de que la ruta maneje una solicitud, y nos permite verificar si el usuario tiene los permisos adecuados para acceder a la ruta.
                </ParagrafComponent>

                <ThirdTitle text={'Ejemplo de Middleware para Comprobar Roles'} />

                <ShowCodeJavaScript code={middlewareRoles} />

                <ParagrafComponent>
                    En este ejemplo, creamos una función de middleware llamada <MarkedText text={'checkRole'} />, que toma un parámetro <MarkedText text={'role'} />. Esta función compara el rol del usuario almacenado en <MarkedText text={'req.user.role'} />
                    con el rol proporcionado como argumento. Si los roles coinciden, el middleware llama a <MarkedText text={'next()'} /> para permitir que la solicitud continúe; de lo contrario, se envía una respuesta de acceso denegado.
                </ParagrafComponent>

                <SubTitle text={'Implementación de la Ruta Utilizando el Middleware'} customClass="mt-10" id="roles-middle"/>

                <ParagrafComponent>
                    Una vez que hemos definido el middleware para comprobar los roles, podemos utilizarlo en nuestras rutas para proteger las funcionalidades que requieren permisos específicos.
                </ParagrafComponent>

                <ThirdTitle text={'Ejemplo de Ruta Protegida por el Middleware'} />

                <ShowCodeJavaScript code={rutaProtegida} />

                <ParagrafComponent>
                    En este ejemplo, hemos definido una ruta <MarkedText text={'/clientes'} /> que requiere el rol de {`"Administrador"`} para acceder a ella. Utilizamos el middleware <MarkedText text={'checkRole'} /> que hemos creado previamente
                    y le pasamos el rol {`"ADMIN"`} como argumento. Ahora, cualquier solicitud a esta ruta será verificada por el middleware antes de que el controlador maneje la solicitud.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="token">
                <Title title={'Trabajando con Tokens de Usuarios'} />

                <ParagrafComponent>
                    Para gestionar la autenticación y autorización de usuarios, las aplicaciones web a menudo utilizan tokens de usuarios. Los tokens son cadenas de texto generadas después de que un usuario inicia sesión correctamente
                    en la aplicación. Estos tokens se envían en cada solicitud posterior para verificar la identidad y los permisos del usuario.
                </ParagrafComponent>

                <ThirdTitle text={'Ejemplo de Generación de Token JWT'} />

                <ShowCodeJavaScript code={generarJWT} />

                <ParagrafComponent>
                    En este ejemplo, utilizamos la biblioteca <MarkedText text={'jsonwebtoken'} /> para generar un token JWT (JSON Web Token). El token contiene la información del usuario, como el ID y el rol, y se firma con una clave
                    secreta para garantizar su autenticidad. El token tiene una fecha de vencimiento de una hora (1 hora) para mejorar la seguridad.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="http">
                <Title title={'Utilizando Tokens JWT en la solicitud HTTP'} />

                <ParagrafComponent>
                    Una vez que hemos generado un token JWT, necesitamos implementar su uso en nuestra aplicación. Los tokens JWT se incluyen en las cabeceras de las solicitudes HTTP utilizando el encabezado <MarkedText text={'Authorization'} />.
                    Es común utilizar el prefijo {`"Bearer"`} seguido del token en el encabezado.
                </ParagrafComponent>

                <ThirdTitle text={'Ejemplo de Uso de Token en una Solicitud HTTP (Axios)'} />

                <ShowCodeJavaScript code={httpRequest} />

                <ParagrafComponent>
                    En este ejemplo, estamos utilizando la biblioteca <MarkedText text={'axios'} /> para realizar una solicitud GET a una ruta protegida en la API. Para ello, incluimos el token JWT en el encabezado
                    <MarkedText text={'Authorization'} /> de la solicitud.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="token-middle">
                <Title title={'Comprobando Tokens en Rutas como Middlewares'} />

                <ParagrafComponent>
                    Cuando trabajamos con tokens JWT, es necesario comprobar su validez y autenticidad antes de permitir que un usuario acceda a rutas protegidas. Esto se realiza mediante el uso de middlewares en Express.
                </ParagrafComponent>

                <ThirdTitle text={'Ejemplo de Middleware de Comprobación de Token'} />

                <ShowCodeJavaScript code={middlewareToken} />

                <ParagrafComponent>
                    En este ejemplo, hemos creado un middleware llamado <MarkedText text={'verifyToken'} />. Este middleware se encarga de comprobar la validez del token incluido en el encabezado <MarkedText text={'Authorization'} />.
                    Si el token es válido, decodificamos la información del usuario almacenada en él y la agregamos al objeto <MarkedText text={'req.user'} /> para que esté disponible en las rutas posteriores.
                </ParagrafComponent>

                <SubTitle text={'Implementando el Middleware en las Rutas'} customClass="mt-10" id="rutaToken-middle"/>

                <ThirdTitle text={'Ejemplo de Ruta Protegida por Middleware de Token'} />

                <ShowCodeJavaScript code={rutaToken} />

                <ParagrafComponent>
                    En este ejemplo, hemos protegido la ruta <MarkedText text={'/clientes'} /> utilizando el middleware <MarkedText text={'verifyToken'} /> que hemos creado previamente. Ahora, cualquier solicitud a esta ruta debe
                    incluir un token JWT válido en el encabezado Authorization para acceder a la información de los clientes.
                </ParagrafComponent>

            </div>

        </article>
    )
}

export const SidebarContent = () => {
    return (
        <ContentSidebarContainer>
            <ul>
                <ContentSidebarItemTitle title={'Sobre este Articulo'} id={'about'} customClassname="mt-8" />

                <ContentSidebarItemTitle title={'Roles y Gestion de Permisos'} id={'roles'} />

                <ContentSidebarItemSubTitle title={'Definición de Roles de Usuario'} id={'definicion-roles'} />
                <ContentSidebarItemSubTitle title={'Asignación de Roles a Usuarios'} id={'asignacion-roles'} />
                <ContentSidebarItemSubTitle title={'Gestión de Permisos y Middleware'} id={'permisos'} />
                <ContentSidebarItemSubTitle title={'Ruta + Middleware'} id={'roles-middle'} />

                <ContentSidebarItemTitle title={'Token de Usuarios'} id={'token'} />
                <ContentSidebarItemTitle title={'JWT en peticion HTTP'} id={'http'} />

                <ContentSidebarItemTitle title={'Comprobacion de Token + Middleware'} id={'token-middle'} />
                <ContentSidebarItemSubTitle title={'Middleware Token + Ruta'} id={'rutaToken-middle'} />

            </ul>
        </ContentSidebarContainer>
    )
}
