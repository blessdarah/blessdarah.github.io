import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import NavLinks from "./NavLinks"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="relative z-50 w-full h-24">
            <div className="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
                <a href="/" className="relative flex items-center inline-block h-5 h-full font-black leading-none">
                    <span className="ml-3 text-xl text-gray-800">
                        <span className='text-indigo-600'>Darah-B </span>
                        <span className='text-pink-600'>Studios</span>
                        <span className="text-indigo-600">.</span></span>
                </a>

                <NavLinks showMenu={showMenu} />

                <div className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
                    <Link to={ROUTES.LOGIN} className="relative z-40 px-3 py-2 mr-0 text-sm font-bold text-indigo-600 md:px-5 sm:mr-3 md:mt-0">Login</Link>
                    <Link to={ROUTES.SIGN_UP} className="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all transition duration-100 duration-300 bg-indigo-600 rounded shadow-md fold-bold sm:w-full lg:shadow-none hover:shadow-xl">Get Started</Link>
                </div>

                <div onClick={() => setShowMenu(!showMenu)} className="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10">
                    <span className="block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1"></span>
                    <span className="block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full"></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
