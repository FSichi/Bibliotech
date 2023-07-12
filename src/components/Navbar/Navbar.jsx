import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { HiColorSwatch, HiOutlineTranslate } from 'react-icons/hi'
import { NavbarLogo } from './NavbarComponents/NavbarLogo'
import { HamburguerButton, NavbarCloseHamburguerSection } from './NavbarComponents/NavbarButtons'
import { GroupOptionsLanguageContainer, GroupOptionsMovileContainer, GroupOptionsThemeContainer } from './NavbarComponents/GroupOptions'

import './Navbar.css';
import { SidebarMovile } from './NavbarComponents/SidebarMovile'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
    return (
        <Popover className="border-b-2 border-gray-800 sticky top-0 z-50 items-center justify-between bg-white py-2 shadow-slate-900/5 transition duration-500 shadow-none bg-slate-900/95 backdrop-blur [@supports(backdrop-filter:blur(0))]:bg-slate-900/75">
            <NavbarDesktop />
            <NavbarMovile />
        </Popover>
    )
}

const NavbarDesktop = () => {
    return (
        <div className="max-w-full mx-auto px-4 sm:px-6">

            <div className="flex justify-between items-center py-3 sm:py-1 md:justify-start md:space-x-10">

                <NavbarLogo />

                <div className="hidden md:flex items-center justify-end md:flex-1 ">
                    <GroupOptionsThemeContainer classNames={classNames} icon={<HiColorSwatch className="sm:h-6 sm:w-6 lg:h-5 w-5"/>} />
                    <GroupOptionsLanguageContainer classNames={classNames} icon={<HiOutlineTranslate className="sm:h-6 sm:w-6 lg:h-5 w-5"/>} />
                </div>

                <div className='flex'>

                    <div className='mr-5 md:-mr-5 lg:mr-0 mt-2'>
                        <HamburguerButton />
                    </div>

                    <SidebarMovile />
                </div>

            </div>

        </div>
    )
}

const NavbarMovile = () => {
    return (
        <Transition
            as={Fragment}
            enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
        >
            <Popover.Panel focus className="absolute top-16 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20">
                {/* eslint-disable-next-line no-unused-vars */}
                {({ close }) => (
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-800 divide-y-2 divide-gray-700">

                        <NavbarCloseHamburguerSection />

                        <GroupOptionsMovileContainer title={'Lenguaje:'} type={1} />
                        <GroupOptionsMovileContainer title={'Tema:'} type={2} />

                    </div>
                )}
            </Popover.Panel>

        </Transition>
    )
}
