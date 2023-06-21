import { Pagina1 } from "../pages/Pagina1";
import { Pagina2 } from "../pages/Pagina2";
import { Welcome } from "../pages/Welcome";

export const AppRoutesList = [
    {
        path: '/welcome',
        exact: true,
        // eslint-disable-next-line react/no-children-prop
        component: <Welcome />,
    },
    {
        path: '/pagina1',
        exact: true,
        // eslint-disable-next-line react/no-children-prop
        component: <Pagina1 />,
    },
    {
        path: '/pagina2', 
        exact: true,
        // eslint-disable-next-line react/no-children-prop
        component: <Pagina2 />,
    },
]