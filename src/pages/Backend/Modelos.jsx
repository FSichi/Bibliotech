import { ArrayType, BooleanType, BufferType, DateType, MixedType, NumberType, ObjectIdType, ObjectType, StringType, configDatabase, controllerUserExample, exampleModelFinal, modelUserExample } from "../../assets/code/APIExample"
import { MarkedText } from "../../components/PageComponents/Articles/MarkedText"
import { ParagrafComponent } from "../../components/PageComponents/Articles/Paragraf"
import { SubTitle } from "../../components/PageComponents/Articles/SubTitle"
import { Title } from "../../components/PageComponents/Articles/Title"
import { Separator } from "../../components/PageComponents/Separator"
import { ShowCode, ShowCodeJavaScript } from "../../components/PageComponents/ShowCode"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { ContentSidebarContainer, ContentSidebarItemSubTitle, ContentSidebarItemTitle } from "../../components/Sidebar/ContentSidebar"
import { PageContainer } from "../PageContainer"

export const Modelos = () => {
    return (
        <PageContainer titlePage={'ModelosDB'} pageContent={<Content />} sidebarContent={<SidebarContent />} />
    )
}

const Content = () => {
    return (
        <article className="md:text-justify">
            <TitlePage sectionTitle={'Backend'} pageTitle={'Definicion de Modelos en MongoDB'} />

            <div className="mt-4 mr-10" id="about">

                <Title title={'Sobre este articulo'} />

                <ParagrafComponent>
                    MongoDB es una base de datos NoSQL ampliamente utilizada en aplicaciones web modernas debido a su flexibilidad y escalabilidad. Una de las ventajas principales de MongoDB
                    es su capacidad para almacenar datos sin una estructura fija, lo que brinda una gran libertad a los desarrolladores. Sin embargo, para garantizar la integridad y consistencia
                    de los datos, es esencial establecer una estructura coherente al interactuar con la base de datos.
                </ParagrafComponent>

                <ParagrafComponent>
                    En este artículo, exploraremos en detalle cómo definir modelos de datos en MongoDB utilizando el módulo Mongoose. Mongoose es una biblioteca de modelado de objetos MongoDB para
                    Node.js que proporciona una capa de abstracción sobre la base de datos, permitiendo definir esquemas, validaciones y relaciones entre documentos.
                </ParagrafComponent>

                <ParagrafComponent>
                    Abordaremos cada aspecto fundamental de la definición de modelos de datos en MongoDB, desde la declaración de tipos de datos y campos requeridos, hasta la implementación de
                    enumeraciones y mensajes personalizados para validar los datos ingresados. Aprenderemos a crear esquemas de MongoDB que sirvan como plantillas para nuestros documentos y
                    nos permitan mantener la consistencia y estructura en toda la aplicación.
                </ParagrafComponent>

                <ParagrafComponent>
                    Al finalizar este artículo, estarás equipado con los conocimientos necesarios para definir modelos de datos sólidos y bien estructurados en MongoDB. Esta práctica te ayudará a
                    desarrollar aplicaciones robustas y fiables, al tiempo que optimizas el flujo de trabajo de desarrollo y mantenimiento.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="requisitos">

                <Title title={'Requisitos Previos'} />

                <ParagrafComponent>
                    Antes de sumergirnos en la definición de modelos de datos en MongoDB, asegurémonos de tener todo configurado correctamente. A continuación, se detallan los requisitos previos
                    para seguir este tutorial:
                </ParagrafComponent>

            </div>

            <div className="mt-4 mr-10">

                <SubTitle text={'Instalar MongoDB y Configurar la Base de Datos'} customClass="mt-6" id="instalar" />

                <ParagrafComponent classNameCustom="mb-4">
                    Primero, debes asegurarte de que MongoDB esté instalado en tu sistema. Puedes descargar e instalar la versión adecuada para tu sistema operativo desde el sitio web oficial
                    de MongoDB. Una vez que tengas MongoDB instalado, asegúrate de que el servicio esté en funcionamiento. Puedes iniciar el servicio de MongoDB con el siguiente comando:
                </ParagrafComponent>

                <ShowCode code={'mongod'} />

                <ParagrafComponent classNameCustom="mb-4">
                    Además, es recomendable configurar una base de datos para este tutorial. Puedes crear una base de datos utilizando el shell de MongoDB con el siguiente comando:
                    (Sustituye {`"mi_basededatos"`} por el nombre que desees para tu base de datos.)
                </ParagrafComponent>

                <ShowCode code={'use mi_basededatos'} />

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

                <SubTitle text={'Crear el Modelo de Datos'} customClass="mt-6" id="crear-modelo" />

                <ParagrafComponent classNameCustom="mb-4">
                    Ahora que tenemos la conexión a la base de datos configurada, podemos proceder a definir el modelo de datos para una entidad específica.
                    Supongamos que deseamos crear un modelo para almacenar información de usuarios.
                </ParagrafComponent>

                <ShowCodeJavaScript code={modelUserExample} />

                <ParagrafComponent>
                    En este ejemplo, hemos definido un modelo de usuario con cuatro campos:
                    <MarkedText text={'nombre'} />,
                    <MarkedText text={'edad'} />,
                    <MarkedText text={'email'} /> y
                    <MarkedText text={'rol'} />
                    Cada campo tiene un tipo de datos y opciones de validación asociadas. Por ejemplo, el campo nombre es de tipo
                    <MarkedText text={'String'} /> y es requerido, mientras que el campo <MarkedText text={'email'} /> también es requerido y debe ser único en la
                    base de datos.
                </ParagrafComponent>

                <SubTitle text={'Utilizar el Modelo de Datos'} customClass="mt-6" id="utilizar-modelo" />

                <ParagrafComponent classNameCustom="mb-4">
                    Una vez que hemos definido el modelo de datos, podemos utilizarlo en otras partes de nuestra aplicación. Por ejemplo, en un controlador que maneje las
                    operaciones relacionadas con los usuarios:
                </ParagrafComponent>

                <ShowCodeJavaScript code={controllerUserExample} />

                <ParagrafComponent>
                    En este ejemplo, hemos importado el modelo de usuario y lo hemos utilizado para crear un nuevo usuario en la base de datos. El controlador recibe los datos
                    del usuario a través del cuerpo de la solicitud (req.body) y crea un nuevo documento de usuario utilizando el modelo.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="types">

                <Title title={'Tipos de types para atributos de DB'} />

                <ParagrafComponent classNameCustom="mb-4">
                    <MarkedText text={'1. String:'} /> Se utiliza para campos que contienen texto o cadenas de caracteres.
                </ParagrafComponent>

                <ShowCodeJavaScript code={StringType} />

                <ParagrafComponent classNameCustom="mb-4">
                    <MarkedText text={'2. Number:'} /> Se utiliza para campos numéricos.
                </ParagrafComponent>

                <ShowCodeJavaScript code={NumberType} />

                <ParagrafComponent classNameCustom="mb-4">
                    <MarkedText text={'3. Date:'} /> Se utiliza para campos que almacenan fechas y horas.
                </ParagrafComponent>

                <ShowCodeJavaScript code={DateType} />

                <ParagrafComponent classNameCustom="mb-4">
                    <MarkedText text={'4. Boolean:'} /> Se utiliza para campos que almacenan valores de verdadero o falso.
                </ParagrafComponent>

                <ShowCodeJavaScript code={BooleanType} />

                <ParagrafComponent classNameCustom="mb-4">
                    <MarkedText text={'5. Object:'} /> Se utiliza para campos que almacenan objetos JavaScript.
                </ParagrafComponent>

                <ShowCodeJavaScript code={ObjectType} />

                <ParagrafComponent classNameCustom="mb-4">
                    <MarkedText text={'6. Array:'} /> Se utiliza para campos que almacenan arreglos de valores.
                </ParagrafComponent>

                <ShowCodeJavaScript code={ArrayType} />

                <ParagrafComponent classNameCustom="mb-4">
                    <MarkedText text={'7. Mixed:'} /> Se utiliza para campos que pueden contener cualquier tipo de datos.
                </ParagrafComponent>

                <ShowCodeJavaScript code={MixedType} />

                <ParagrafComponent classNameCustom="mb-4">
                    <MarkedText text={'8. ObjectId:'} /> Se utiliza para establecer relaciones entre diferentes colecciones en
                    MongoDB. Normalmente se usa cuando se referencia el ID de un documento en otra colección.
                </ParagrafComponent>

                <ShowCodeJavaScript code={ObjectIdType} />

                <ParagrafComponent classNameCustom="mb-4">
                    <MarkedText text={'9. Buffer:'} /> Se utiliza para campos que almacenan datos binarios o de tipo {`"buffer"`}.
                </ParagrafComponent>

                <ShowCodeJavaScript code={BufferType} />

                <ParagrafComponent>
                    Estos son algunos de los tipos de datos más utilizados en Mongoose para definir campos en nuestros esquemas. Es importante elegir el tipo de dato adecuado según la
                    naturaleza de los datos que se almacenarán en MongoDB y las necesidades específicas de la aplicación.
                </ParagrafComponent>

                <SubTitle text={'Ejemplo de Modelo de DB'} customClass="mt-6" id="ejemplo" />

                <ParagrafComponent>
                    Supongamos que queremos definir un modelo de una tienda en línea que representa un producto. El producto tendría los siguientes campos:
                </ParagrafComponent>

                <ParagrafComponent>
                    <MarkedText text={'# `name:`'} /> Nombre del producto (String).
                </ParagrafComponent>

                <ParagrafComponent>
                    <MarkedText text={'# `price:`'} /> Precio del producto (Number).
                </ParagrafComponent>

                <ParagrafComponent>
                    <MarkedText text={'# `description:`'} /> Descripción del producto (String).
                </ParagrafComponent>

                <ParagrafComponent>
                    <MarkedText text={'# `availableColors:`'} /> Colores disponibles del producto (Array).
                </ParagrafComponent>

                <ParagrafComponent>
                    <MarkedText text={'# `releaseDate:`'} /> Fecha de lanzamiento del producto (Date).
                </ParagrafComponent>

                <ParagrafComponent>
                    <MarkedText text={'# `isFeatured:`'} /> Indicador de si el producto es destacado (Boolean).
                </ParagrafComponent>

                <ParagrafComponent>
                    <MarkedText text={'# `productDetails:`'} /> Detalles adicionales del producto en formato de objeto (Object).
                </ParagrafComponent>

                <ParagrafComponent>
                    <MarkedText text={'# `images:`'} /> Imágenes del producto en formato binario (Array de Buffer).
                </ParagrafComponent>

                <ParagrafComponent classNameCustom="mb-4">
                    A continuación se muestra cómo se podría definir el modelo con todos los types mencionados:
                </ParagrafComponent>

                <ShowCodeJavaScript code={exampleModelFinal} />

                <ParagrafComponent>
                    Una vez definido el modelo, podemos utilizarlo para crear, leer, actualizar o eliminar documentos en la colección {`"products" `}
                    de nuestra base de datos MongoDB.
                </ParagrafComponent>

                <ParagrafComponent>
                    Este es solo un ejemplo para mostrar cómo se pueden utilizar los diferentes tipos de datos en Mongoose para definir un modelo de datos
                    en una aplicación de Node.js con MongoDB. La elección de los tipos de datos dependerá de los requisitos y la estructura de datos específicos de tu aplicación.
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
                <ContentSidebarItemSubTitle title={'Instalar MongoDB y Configurar la DB'} id={'instalar'} />
                <ContentSidebarItemSubTitle title={'Configurar un Proyecto de Node.js'} id={'configurar'} />
                <ContentSidebarItemSubTitle title={'Crear el Archivo de Conexión a MongoDB'} id={'conexion'} />
                <ContentSidebarItemSubTitle title={'Crear el Modelo de Datos'} id={'crear-modelo'} />
                <ContentSidebarItemSubTitle title={'Utilizar el Modelo de Datos'} id={'utilizar-modelo'} />

                <ContentSidebarItemTitle title={'Tipos de types para atributos de DB'} id={'types'} />
                <ContentSidebarItemSubTitle title={'Ejemplo de Modelo de DB'} id={'ejemplo'} />

            </ul>
        </ContentSidebarContainer>
    )
}
