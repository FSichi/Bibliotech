import { Popover } from '@headlessui/react'
import { AdjustmentsIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/outline'

export const HamburguerButton = () => {
    return (
        <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-slate-700 text-gray-100 dark:text-gray-900 rounded-md p-2 "> {/* hover:bg-sky-300 dark:hover:bg-sky-300 */}
                <span className="sr-only">Open menu</span>
                <AdjustmentsIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
        </div>
    )
}

export const NavbarProfileButton = ({ classNames, open, icon }) => {
    return (
        <Popover.Button className='group rounded-md inline-flex items-center text-base font-medium focus:outline-none mt-1'>
            <span
                className={classNames(
                    open ? ' bg-sky-400' : 'bg-gray-900 dark:bg-gray-700',
                    'nav-link p-2 text-lg rounded-md text-white hover:bg-sky-400'
                )}
            >
                {icon}
            </span>
        </Popover.Button>
    )
}


export const NavbarCloseHamburguerSection = () => {
    return (
        <div className="flex items-center justify-between pt-3 pb-3 px-5">
            <p className='text-gray-100 mt-2 text-xl'>Opciones</p>
            <div className="-mr-2">
                <Popover.Button className="bg-slate-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
            </div>
        </div>
    )
}
