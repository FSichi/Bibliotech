import { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { getClassNameForLink, getRoutesForActiveLink } from '../../helpers/sidebarMethods';
import { sidebarRoutes } from '../../routes/SidebarRoutes';

import './styles.css';

export const Sidebar = () => {

    let location = useLocation();
    const [routesValue, setRoutesValue] = useState(sidebarRoutes);

    useEffect(() => {
        let routes = getRoutesForActiveLink({ routes: routesValue, location: location.pathname });

        console.log('Rutas Actualizadas: ', routes);

        setRoutesValue(routes);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    return (
        <section className="text-white w-80 border-r-2 border-gray-800 overflow-y-auto sidebar-height sidebar-container p-1 hidden lg:block" style={{ backgroundColor: '#0F172A' }}>

            <div className='mt-5 mb-5 border-b-2 border-gray-800'>

                {
                    routesValue.map((route, i) => (
                        <div className={route.customStyle} key={i}>

                            <h1 className='text-xl mb-3'>{route.title}</h1>

                            <ul className='border-l-2 border-gray-700'>
                                {route.subMenu.map((linkRoute, i) => (
                                    <LinkRouteSidebar route={linkRoute} key={i} />
                                ))}
                            </ul>

                        </div>
                    ))
                }

            </div>

            <div className='mt-5 mb-5 flex justify-center'>
                <button className='bg-gray-800 w-40 p-3 rounded-lg text-center hover:bg-sky-600'>
                    Compartir Web
                </button>
            </div>

        </section>
    )
}

const LinkRouteSidebar = ({ route }) => {

    let classNameForLink = getClassNameForLink(route);

    return (
        <li key={route.name} className='relative p-2'>
            <Link to={`${route.path}`} >
                <p className={classNameForLink}> {route.name} </p>
            </Link>
        </li>
    )
}