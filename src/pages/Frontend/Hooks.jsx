import { ParagrafComponent } from "../../components/PageComponents/Articles/Paragraf"
import { SubTitle } from "../../components/PageComponents/Articles/SubTitle"
import { ThirdTitle } from "../../components/PageComponents/Articles/ThirdTitle"
import { Title } from "../../components/PageComponents/Articles/Title"
import { LinksToPages } from "../../components/PageComponents/LinksToPages"
import { Separator } from "../../components/PageComponents/Separator"
import { ShowCodeJavaScript } from "../../components/PageComponents/ShowCode"
import { TitlePage } from "../../components/PageComponents/TitlePage"
import { ContentSidebarContainer, ContentSidebarItemSubTitle, ContentSidebarItemTitle } from "../../components/Sidebar/ContentSidebar"
import { PageContainer } from "../PageContainer"

export const Hooks = () => {
    return (
        <PageContainer titlePage={'LibreriasFrontend'} pageContent={<HooksContent />} sidebarContent={<HooksSidebar />} />
    )
}

const HooksContent = () => {

    const useStateExample = `import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
    setCount(count + 1);
    };

    const decrement = () => {
    setCount(count - 1);
    };
    
    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    );
}`

    const useEffectExample = `import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
    console.log('El valor del contador ha cambiado:', count);
    }, [count]);

    return (
        <div>
            <h2>Contador: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Incrementar
            </button>
        </div>
    );
}`

    const useRefExample = `import React, { useRef } from 'react';

function Formulario() {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Valor del input:', inputRef.current.value);
        inputRef.current.value = ''; // Limpiar el campo de entrada
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" ref={inputRef} />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}`

    const useMemoExample = `import React, { useState, useMemo } from 'react';

function Calculadora() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const resultado = useMemo(() => {
        console.log('Calculando suma...');
        return num1 + num2;
    }, [num1, num2]);

    return (
        <div>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
            />
            <input
                type="number" value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
            />
            <p>Resultado: {resultado}</p>
        </div>
    );
}`

    const useItemGetter = `import { useEffect, useState, useCallback } from "react";

export const useItemGetterHook = (idParam, functionGetter, dataFromDB) => {

    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getItem = useCallback(async () => {
        try {
            const item = await functionGetter(idParam, dataFromDB);
            setItem(item);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, [idParam, functionGetter, dataFromDB]);

    useEffect(() => {
        getItem();
    }, [getItem]);

    return { item, isLoading, error };
};`

    const useFormHook = `import { useState } from 'react';

export const useFormHook = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];
}`


    return (
        <article className="md:text-justify">

            <TitlePage sectionTitle={'Frontend'} pageTitle={'Hooks'} />

            <div className="mt-4 mr-10" id="about">

                <Title title={'Sobre este articulo'} />

                <ParagrafComponent>
                    En este artículo, exploraremos el fascinante mundo de los Hooks de React. Los Hooks son una característica clave introducida en React 16.8 que revolucionaron la forma
                    en que escribimos componentes funcionales en React. En lugar de depender de las clases y los ciclos de vida, los Hooks nos permiten agregar estado y otras características
                    a nuestros componentes funcionales sin necesidad de cambiar a componentes de clase.
                </ParagrafComponent>

                <ParagrafComponent>
                    En la primera sección del artículo, proporcionaremos una sólida definición de qué es exactamente un Hook en React. Explicaremos cómo los Hooks nos permiten reutilizar la
                    lógica del estado y los efectos en nuestros componentes funcionales, lo que nos ayuda a escribir un código más limpio y conciso.
                </ParagrafComponent>

                <ParagrafComponent>
                    A Continuacion te explicare los hooks mas comunes en React y un ejemplo practico de como utilizarlos. Puedes copiar y pegar el codigo en tu editor de codigo y testear por
                    ti mismo el mecanismo de funcionamiento para que lo entiendas a la perfeccion.
                </ParagrafComponent>

                <ParagrafComponent>
                    En la ultima parte del Articulo, te proporcionare mis propios hooks personalizados que utilizo con frecuencia para que los implementes en tu propio proyecto en caso de que
                    estos te sean de utilidad.
                </ParagrafComponent>

            </div>

            <Separator />

            <div className="mt-4 mr-10" id="definicion">

                <Title title={'Definicion de Hooks'} />

                <ParagrafComponent>
                    Un Hook en React es una función especial que te permite utilizar características de React en componentes funcionales, sin necesidad de convertirlos en componentes de clase.
                    Como mencione previamente, los Hooks fueron introducidos en la versión 16.8 de React y revolucionaron la forma en que se trabaja con el estado y los efectos en los componentes.
                </ParagrafComponent>

                <ParagrafComponent>
                    Un Hook se utiliza dentro de un componente funcional y proporciona una forma sencilla de agregar y manipular el estado, realizar efectos secundarios, acceder al contexto y más.
                    Antes de los Hooks, para utilizar estas características en los componentes funcionales, se requería convertirlos en componentes de clase, lo que añadía complejidad y dificultaba la reutilización del código.
                </ParagrafComponent>

                <ParagrafComponent>
                    La principal ventaja de los Hooks es que permiten escribir componentes más legibles, reutilizables y fáciles de mantener. Al utilizar Hooks, puedes separar la lógica del componente en funciones más pequeñas y
                    específicas, lo que mejora la modularidad y la organización del código. Además, los Hooks promueven la reutilización de la lógica entre componentes, ya que puedes encapsularla en Hooks personalizados y utilizarlos en diferentes partes de tu aplicación.
                </ParagrafComponent>

                <ParagrafComponent>
                    Existen varios Hooks integrados en React, como useState, useEffect y useContext, que proporcionan funcionalidades clave para trabajar con el estado, los efectos y el contexto. Sin embargo, también puedes crear tus propios Hooks personalizados para abstraer
                    lógica común y hacerla fácilmente reutilizable en diferentes componentes.
                </ParagrafComponent>

            </div>

            <Title title={'Hooks mas comunes'} id="comun" customClass="mt-10" />

            <div className="mt-8 mr-10" id="useState">

                <SubTitle text={'useState'} />

                <ParagrafComponent>
                    El Hook useState es uno de los Hooks más utilizados en React y se utiliza para agregar y manipular el estado en componentes funcionales. Con useState, puedes declarar variables de estado en tus componentes y React se encargará de mantener su valor actualizado y
                    volver a renderizar el componente cuando sea necesario.
                </ParagrafComponent>

                <ParagrafComponent>
                    Para utilizar useState, necesitas importarlo desde el paquete {`'react'`}. Luego, puedes llamar a useState y pasarle el valor inicial de la variable de estado que deseas crear. useState devuelve un array con dos elementos: el valor actual de la variable de estado y
                    una función para actualizar ese valor.
                </ParagrafComponent>

                <ThirdTitle text={'Ejemplo de useState'} />

                <ParagrafComponent>
                    Aquí tienes un ejemplo que demuestra cómo utilizar useState para crear un contador simple:
                </ParagrafComponent>

                <ShowCodeJavaScript code={useStateExample} />

                <ParagrafComponent>
                    En este ejemplo, hemos declarado una variable de estado llamada {`'count'`} y la función {`'setCount'`} que nos permite actualizar su valor. El valor inicial de {`'count'`} se establece en 0 mediante useState(0). Dentro del componente, hemos definido dos funciones:
                    {`'increment'`} y {`'decrement'`}. Estas funciones utilizan la función {`'setCount'`} para actualizar el valor de {`'count'`} al incrementarlo o decrementarlo respectivamente.
                </ParagrafComponent>

                <ParagrafComponent>
                    Cuando haces clic en alguno de los botones, el estado {`'count'`} se actualiza utilizando la función {`'setCount'`}, y React se encarga de volver a renderizar el componente para reflejar el nuevo valor en la interfaz de usuario.
                </ParagrafComponent>

            </div>

            <div className="mt-8 mr-10" id="useEffect">

                <SubTitle text={'useEffect'} />

                <ParagrafComponent>
                    El Hook useEffect es uno de los Hooks más poderosos en React y se utiliza para manejar efectos secundarios en los componentes funcionales. Los efectos secundarios pueden incluir la suscripción a eventos, solicitudes de red, manipulación del DOM y más. useEffect
                    te permite ejecutar código adicional en momentos específicos durante el ciclo de vida de un componente. Para utilizar useEffect, necesitas importarlo desde el paquete {`'react'`}. Luego, puedes llamar a useEffect y pasarle dos argumentos: una función de efecto y una
                    lista de dependencias opcionales.
                </ParagrafComponent>

                <ParagrafComponent>
                    La función de efecto se ejecuta cada vez que el componente se renderiza o se actualiza. Puedes realizar cualquier tarea dentro de esta función, como suscribirte a eventos, realizar solicitudes de red o modificar el DOM. Si necesitas realizar alguna limpieza o cancelar
                    suscripciones, puedes devolver una función desde la función de efecto.
                </ParagrafComponent>

                <ParagrafComponent>
                    La lista de dependencias es opcional y se utiliza para especificar las variables que el efecto debe observar. Si alguna de estas variables cambia, el efecto se volverá a ejecutar. Si omites la lista de dependencias, el efecto se ejecutará en cada renderizado del componente.
                </ParagrafComponent>

                <ThirdTitle text={'Ejemplo de useEffect'} />

                <ParagrafComponent>
                    Vamos a Reutilizar el ejemplo anterior del contador, un poco mas simplificado, pero agregandole el hook useEffect para comprender los cambios y observaciones.
                </ParagrafComponent>

                <ShowCodeJavaScript code={useEffectExample} />

                <ParagrafComponent>
                    En este ejemplo, hemos definido un componente Counter que utiliza useState para mantener el estado del contador. Cada vez que se hace clic en el botón {`'Incrementar'`}, se actualiza el estado del contador usando setCount.
                </ParagrafComponent>

                <ParagrafComponent>
                    Luego, utilizamos useEffect para observar cambios en el valor del contador (la variable count). En la lista de dependencias de useEffect, pasamos [count], lo que significa que el efecto se ejecutará cada vez que el valor de count cambie. Dentro del cuerpo del useEffect,
                    mostramos un console.log que indica que el valor del contador ha cambiado, junto con el valor actual del contador.
                </ParagrafComponent>

                <ParagrafComponent>
                    De esta manera, cada vez que se incremente el contador, se ejecutará el useEffect y se mostrará un mensaje en la consola con el nuevo valor del contador.
                </ParagrafComponent>

                <ParagrafComponent>
                    Recuerda que useEffect se ejecuta después de que se actualice el DOM, por lo que el console.log reflejará el nuevo valor del contador después de que se haya actualizado.
                    Este es solo un ejemplo simple para ilustrar cómo usar useEffect con useState. Puedes adaptar este patrón para realizar diferentes acciones o ejecutar diferentes efectos secundarios en respuesta a cambios en el estado de tus componentes.
                </ParagrafComponent>

            </div>

            <div className="mt-4 mr-10" id="useRef">

                <SubTitle text={'useRef'} />

                <ParagrafComponent>
                    El hook useRef en React proporciona una forma de crear una referencia mutable que persiste a lo largo del ciclo de vida del componente. A diferencia de las variables de estado (useState), useRef no causa una re-renderización cuando su valor cambia.
                    Se utiliza principalmente para acceder directamente a elementos del DOM o para almacenar cualquier valor mutable que necesite persistir entre re-renderizaciones sin afectar al flujo normal del renderizado.
                </ParagrafComponent>

                <ThirdTitle text={'Ejemplo de useRef'} />

                <ParagrafComponent>
                    Vamos a Crear un componente de formulario para poder integrar el hook useRef y ver su funcionamiento:
                </ParagrafComponent>

                <ShowCodeJavaScript code={useRefExample} />

                <ParagrafComponent>
                    En este ejemplo, creamos una referencia utilizando useRef llamada inputRef y la inicializamos con el valor null. Luego, asignamos esta referencia al atributo ref del campo de entrada del formulario.
                </ParagrafComponent>

                <ParagrafComponent>
                    Cuando se envía el formulario, el evento handleSubmit se activa. Dentro de esta función, podemos acceder al valor del campo de entrada utilizando inputRef.current.value. En este caso, simplemente lo mostramos en la consola, pero puedes realizar cualquier acción con ese valor.
                    También podríamos utilizar la referencia para manipular directamente el campo de entrada, como se muestra en la línea inputRef.current.value = {`''`}. Esto nos permite, por ejemplo, borrar el campo de entrada después de enviar el formulario.
                </ParagrafComponent>

            </div>

            <div className="mt-4 mr-10" id="useMemo">

                <SubTitle text={'useMemo'} />

                <ParagrafComponent>
                    El hook useMemo en React se utiliza para memorizar (cachear) el resultado de una función costosa de cálculo, evitando que se recalcule en cada renderizado del componente. useMemo recibe una función y un arreglo de dependencias, y devuelve el resultado memoizado de esa función.
                    Si las dependencias no cambian entre renderizaciones, useMemo devuelve el valor memoizado anterior en lugar de ejecutar nuevamente la función.
                </ParagrafComponent>

                <ThirdTitle text={'Ejemplo de useMemo'} />

                <ParagrafComponent>
                    Supongamos que tenemos un componente que muestra el resultado de una operación de suma entre dos números, pero solo queremos calcular el resultado cuando los números cambien, no en cada renderizado:
                </ParagrafComponent>

                <ShowCodeJavaScript code={useMemoExample} />

                <ParagrafComponent>
                    En este ejemplo, utilizamos el hook useState para mantener dos variables de estado: num1 y num2, que representan los números que queremos sumar. Luego, utilizamos useMemo para calcular el resultado de la suma solo cuando num1 o num2 cambien.
                </ParagrafComponent>

                <ParagrafComponent>
                    Dentro de useMemo, definimos una función que realiza la suma de num1 y num2. También hemos incluido un console.log para mostrar cuándo se está realizando el cálculo de la suma.
                </ParagrafComponent>

                <ParagrafComponent>
                    Al especificar [num1, num2] como dependencias en el arreglo de dependencias de useMemo, le estamos diciendo a React que solo recalcule el resultado cuando num1 o num2 cambien. Si ninguno de los dos cambia, React utilizará el resultado memoizado anterior en lugar de ejecutar nuevamente
                    la función. De esta manera, evitamos cálculos innecesarios y mejoramos el rendimiento de nuestro componente, ya que la función de suma solo se ejecutará cuando sea necesario.
                </ParagrafComponent>

            </div>

            <div className="mt-4 mr-10" id="more">
                <Title title={'Mas Hooks'} />

                <ParagrafComponent>
                    En caso de querer conocer mas a profundidad acerca de los hooks en React. Te recomiendo chequear la documentacion correspondiente en este Link.
                </ParagrafComponent>

                {/* <LinksToPages link={'https://legacy.reactjs.org/docs/hooks-intro.html'} /> */}
                <LinksToPages link={'react.dev/reference/react'} />
            </div>

            <Separator />

            <div className="mt-4 mr-10" id="personalizados">
                <Title title={'Hooks Personalizados'} />
                <ParagrafComponent>
                    Como mencione al inicio de este articulo, ahora te presento un listado de algunos hooks que siempre implemento en mis proyectos de desarrollo.
                </ParagrafComponent>
            </div>

            <div className="mt-4 mr-10" id="obtenerElemento">

                <SubTitle text={'useItemGetter'} />

                <ParagrafComponent>
                    Este hook lo diseñé con la finalidad de poder obtener un elemento dentro de un set de Datos de por ejemplo una coleccion desde la DB. Con este hook,
                    simpliquifé la logica de filtro para no estar repitiendo codigo en cada componente que necesite un registro especifico.
                </ParagrafComponent>

                <ParagrafComponent>
                    Su funcionamiento es muy sencillo. Recibe 3 elementos como parametro. [idParam - functionGetter - dataFromDB]. El primer parametro hace referencia a el id del registro a filtrar.
                    El segundo parametro corresponde a la funcion especifica que necesitas para filtrar la coleccion. Lo diseñé de esta manera ya que optimiza mucho el rendimiento y la reutilizacion de Codigo.
                    Por ultimo el tercer parametro consiste en la coleccion, array o conjunto de datos de donde vamos a obtener el registro especifico.
                </ParagrafComponent>

                <ThirdTitle text={'Código de useItemGetter'} />

                <ParagrafComponent>
                    A continuacion te presento el codigo de hook. Como puedes ver maneja el estado de fetch como normalmente se haria (isLoading - error). Ademas hago uso de 3 hooks de react.
                    (useEffect, useState, useCallback). Con useCallback me aseguro de optimizar el rendimiento al maximo para solo renderizar la funcion cuando algun elemento cambie.
                </ParagrafComponent>

                <ShowCodeJavaScript code={useItemGetter} />

            </div>

            <div className="mt-8 mr-10" id="input">

                <SubTitle text={'useFormHook'} />

                <ParagrafComponent>
                    Este hook lo diseñé con la finalidad de manejar el estado de un input en un formulario para aquellos casos en los que necesitemos que el input se renderice con cada cambio por
                    valor. Por ejemplo, este hook puede ser utilizado para funciones de filtro en tiempo real de registros.
                </ParagrafComponent>

                <ParagrafComponent>
                    Su funcionamiento es muy sencillo, simplemente lo importas en el componente a utilizar y le pasas la referencia del input que quieres controlar.
                </ParagrafComponent>

                <ThirdTitle text={'Código de useItemGetter'} />
                <ShowCodeJavaScript code={useFormHook} />

            </div>

        </article>
    )
}

const HooksSidebar = () => {
    return (
        <ContentSidebarContainer>
            <ul>
                <ContentSidebarItemTitle title={'Sobre este Articulo'} id={'about'} customClassname="mt-8" />
                <ContentSidebarItemTitle title={'Definicion de Hooks'} id={'definicion'} />
                <ContentSidebarItemTitle title={'Hooks mas comunes'} id={'comun'} />

                <ContentSidebarItemSubTitle title={'useState'} id={'useState'} />
                <ContentSidebarItemSubTitle title={'useEffect'} id={'useEffect'} />
                <ContentSidebarItemSubTitle title={'useRef'} id={'useRef'} />
                <ContentSidebarItemSubTitle title={'useMemo'} id={'useMemo'} />
                <ContentSidebarItemSubTitle title={'Mas Hooks'} id={'more'} />

                <ContentSidebarItemTitle title={'Hooks Personalizados'} id={'personalizados'} />

                <ContentSidebarItemSubTitle title={'useItemGetter'} id={'obtenerElemento'} />
                <ContentSidebarItemSubTitle title={'useFormHook'} id={'input'} />
                {/* <ContentSidebarItemSubTitle title={'Hook de Paginacion'} id={'paginacion'} /> */}
            </ul>
        </ContentSidebarContainer>
    )
}
