import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";

const NavLinks = ({showMenu}) => {
    return (
        <nav className={`absolute top-0 left-0 z-50 flex-col items-center justify-between ${showMenu ? 'px-8 space-y-2' : 'hidden'} w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 shadow-xl md:shadow-none md:flex md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:relative`}>
            <Link to={ROUTES.HOME} className="block ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">Home</Link>
            <Link to={ROUTES.SERVICES} className="block mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">Services</Link>
            <Link to={ROUTES.BLOG} className="block mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">Blog</Link>
            <Link to={ROUTES.BOOTCAMP} className="block mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600 relative">
                <span className="absolute -top-4 -right-4 bg-green-400 rounded-full font-medium text-xs text-green-100 text-center px-2 py-1">new</span>
                Bootcamp
            </Link>
            <Link to={ROUTES.ABOUT} className="block mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">About</Link>
            <Link to={ROUTES.CONTACT} className="block mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">Contact</Link>
            <div className="flex flex-col block w-full font-medium border-t border-gray-200 md:hidden">
                <Link to={ROUTES.LOGIN} className="w-full py-2 font-bold text-center text-indigo-600">Login</Link>
                <Link to={ROUTES.SIGN_UP} className="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-indigo-600 fold-bold">Get Started</Link>
            </div>
        </nav>
    )
}

export default NavLinks;
