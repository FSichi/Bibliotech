import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { NavbarProfileButton } from './NavbarButtons';

import es from '../img/spain.png';
import en from '../img/united-kingdom.png';
import de from '../img/Deutschland.png';

import light from '../img/lightMode.png';
import dark from '../img/darkMode.png';

export const GroupOptionsThemeContainer = ({ classNames, icon }) => {
    return (
        <Popover className="relative ml-5">
            {({ open }) => (
                <>
                    <NavbarProfileButton open={open} classNames={classNames} icon={icon} />

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-50" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 -left-3 transform -translate-x-20 mt-7 w-40">

                            <div className="py-5 bg-slate-800 rounded-lg flex justify-center">
                                <OptionButton img={light} buttonStyle={'-m-3 p-2 flex items-start rounded-lg hover:bg-sky-500 mr-0 ml-0'} imgType={1} buttonFunction={() => { }} />
                                <OptionButton img={dark} buttonStyle={'-m-3 p-2 flex items-start rounded-lg hover:bg-sky-500 mr-0 ml-0'} imgType={1} buttonFunction={() => { }} />
                            </div>

                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

export const GroupOptionsLanguageContainer = ({ classNames, icon }) => {
    return (
        <Popover className="relative ml-5">
            {({ open }) => (
                <>
                    <NavbarProfileButton open={open} classNames={classNames} icon={icon} />

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-50" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 -left-3 transform -translate-x-40 mt-7 w-56">

                            <div className="px-5 py-5 bg-slate-800 rounded-lg flex justify-between">
                                <OptionButton img={es} buttonStyle={'-m-3 p-2 flex items-start rounded-lg hover:bg-sky-500'} imgType={1} buttonFunction={() => { }} />
                                <OptionButton img={en} buttonStyle={'-m-3 p-2 flex items-start rounded-lg hover:bg-sky-500'} imgType={1} buttonFunction={() => { }} />
                                <OptionButton img={de} buttonStyle={'-m-3 p-2 flex items-start rounded-lg hover:bg-sky-500'} imgType={1} buttonFunction={() => { }} />
                            </div>

                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

export const GroupOptionsMovileContainer = ({ title, type = 0 }) => {
    return (
        <div className='p-5'>
            <h1 className='text-lg bg-slate-900 text-center py-2 rounded-lg mb-6'>{title}</h1>
            {
                type === 1
                    ?
                    (
                        <div className='flex justify-center'>
                            <OptionButton img={es} buttonStyle={'-m-3 p-2 flex items-start rounded-lg hover:bg-sky-500'} imgType={2} buttonFunction={() => { }} />
                            <OptionButton img={en} buttonStyle={'-m-3 p-2 flex items-start rounded-lg hover:bg-sky-500 ml-8 mr-8'} imgType={2} buttonFunction={() => { }} />
                            <OptionButton img={de} buttonStyle={'-m-3 p-2 flex items-start rounded-lg hover:bg-sky-500'} imgType={2} buttonFunction={() => { }} />
                        </div>
                    )
                    :
                    (
                        <div className='flex justify-center'>
                            <OptionButton img={light} buttonStyle={'-m-3 p-2 flex items-start rounded-lg hover:bg-sky-500'} imgType={2} buttonFunction={() => { }} />
                            <OptionButton img={dark} buttonStyle={'-m-3 p-2 flex items-start rounded-lg hover:bg-sky-500 ml-8'} imgType={2} buttonFunction={() => { }} />
                        </div>
                    )
            }
        </div>
    )
}

const OptionButton = ({ img, buttonStyle, imgType = 0, buttonFunction }) => {
    return (
        <button className={buttonStyle} onClick={buttonFunction}>  {/* onClick={() => { idioma.establecerLenguaje('es-MX'); window.location.reload(); }} */}
            {
                imgType === 1
                    ? <img src={img} alt="" style={{ width: '40px', height: '40px' }} className='ml-2 mr-2' />
                    : <img src={img} alt="" style={{ width: '60px', height: '60px' }} className='ml-2 mr-2' />
            }
        </button>
    )
}