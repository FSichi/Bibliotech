export const reactMemoCode = `import React from 'react';

const MyComponent = React.memo(({ value }) => {
  // Renderiza el componente solo si el valor es impar
  return <div>{value % 2 === 1 ? 'Valor impar' : 'Valor par'}</div>;
});`

export const reactMemoContextCode = `import React, { createContext } from 'react';

const MyContext = createContext();

const MemoizedComponent = React.memo(({ value }) => {
  return <div>{value}</div>;
});

const App = () => {
  return (
    <MyContext.Provider value="Valor del contexto">
      <MemoizedComponent />
    </MyContext.Provider>
  );
};`

export const useCallBackCode = `import React, { useCallback } from 'react';

const MyComponent = ({ onClick }) => {
  const handleClick = useCallback(() => {
    onClick('Hiciste click');
  }, [onClick]);

  return <button onClick={handleClick}>Clic aquí</button>;
};`

export const reactLazyCode = `import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};`

export const reactLazyImgCode = `import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Título de la página</h1>
      <img src="imagen.jpg" alt="Imagen" loading="lazy" />
    </div>
  );
};`

export const dividirLogicaCode = `import React from 'react';

const Header = () => {
  return <header>Encabezado</header>;
};

const Sidebar = () => {
  return <aside>Barra lateral</aside>;
};

const Content = () => {
  return <main>Contenido principal</main>;
};

const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};`

export const OperadoresLogicosCode = `/* Evaluacion Deficiente */

if(number > 5){
    if(flag === true){
        return 'Number 5 Correct'
    }
}

/* Evaluacion Optimizada */

if(number > 5 && flag){
    return 'Number 5 Correct'
}`

export const estructurasCode = `// Búsqueda ineficiente en un array
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];

const getUserById = (id) => {
  return users.find((user) => user.id === id);
};

// Optimización utilizando un objeto para búsqueda por clave
const usersById = {
  1: { id: 1, name: 'John' },
  2: { id: 2, name: 'Jane' },
  3: { id: 3, name: 'Bob' },
};

const getUserById = (id) => {
  return usersById[id];
};`

export const logicaUECode = `export const MyComponent = () => {

    const [profile, setProfile] = useState({});
    const [historyData, setHistoryData] = useState({});

    /* EJECUTAR TODA LA LOGICA EN 1 SOLO useEffect */

    useEffect(() => {
        setProfile(getProfile());
        setHistoryData(getHistory());
    }, [])

    /* ----- DIVIDIR LOGICA EN MAS DE 1 UseEffect */

    useEffect(() => {
        setProfile(getProfile());
    }, [])

    useEffect(() => {
        setHistoryData(getHistory());
    }, [])


    return (
        <>
            MyComponent
        </>
    )
}`