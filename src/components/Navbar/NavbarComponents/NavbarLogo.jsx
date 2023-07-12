import { Link } from 'react-router-dom'

export const NavbarLogo = () => {
    return (
        <div className="flex justify-start lg:w-0 lg:flex-1">

            <Link to="/welcome">
                <span className="sr-only">UTN - M&M</span>
                <img
                    className="h-8 w-auto sm:h-12"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    // src={require('../../assets/logo2.jpg')}
                    alt=""
                />
            </Link>

            <h1 className='text-white text-xl md:text-3xl ml-6 mt-1 sm:mt-2 italic'>BiblioTech</h1>

        </div>
    )
}
