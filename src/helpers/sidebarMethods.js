
export const getClassNameForLink = (route) => {

    let classNameForLink = 'w-full pl-4 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full';

    (route.activeOption)
        ? classNameForLink = `${classNameForLink} text-sky-600 dark:text-sky-400 before:bg-sky-600 dark:before:bg-sky-400 hover:cursor-pointer`
        : classNameForLink = `${classNameForLink} text-slate-600 dark:text-slate-500 before:hidden before:bg-slate-300 hover:text-orange-500 dark:hover:text-slate-300 hover:before:block hover:cursor-pointer`


    return classNameForLink;
}

export const getRoutesForActiveLink = ({ routes, location }) => {

    return routes.map((section) => {

        const subMenu = section.subMenu.map((item) => {
            const isActive = item.path === location;
            return { ...item, activeOption: isActive };
        });

        return { ...section, subMenu };

    });
};