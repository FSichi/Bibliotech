
export const ContentSidebarContainer = ({ children }) => {
    return (
        <div className="text-white p-2 fixed content-sidebar-scroll content-sidebar-container">

            <div className='mb-8 content-sidebar-container-children'>

                <h1 className="text-sky-400 ">Contenido de la Pagina</h1> {/* text-center */}

                {children}
            </div>
        </div>
    )
}


export const ContentSidebarItemTitle = ({ title, id, customClassname = 'mt-4' }) => {
    return (
        <li className={`ml-4 text-slate-400 ${customClassname}`}>
            <a href={`#${id}`}>{title}</a>
        </li>
    )
}

export const ContentSidebarItemSubTitle = ({ title, id, customClassname = 'mt-2' }) => {
    return (
        <li className={`ml-10 text-slate-400 ${customClassname}`}>
            <a href={`#${id}`}>{title}</a>
        </li>
    )
}
