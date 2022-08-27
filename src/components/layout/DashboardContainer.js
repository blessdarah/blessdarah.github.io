import React from "react";
import { Link } from "react-router-dom";
import { Menu } from '@headlessui/react';
import Footer from "../Footer"

const DashboardContainer = ({ children }) => {
    return (
        <>
            <section className="relative w-full bg-white">
                <header className="flex align-center justify-between max-w-7xl mx-auto">
                    <h3>Dashboard</h3>
                    <nav>
                        <ul className="inline-flex space-x-4 text-sm">
                            <li className="p-2 font-semibold text-gray-700 hover:text-gray-800 cursor-pointer">
                                <Link to="#">notifications</Link>
                            </li>
                            <li className="p-2 font-semibold text-gray-700 hover:text-gray-800 cursor-pointer">
                                <Menu>
                                    <Menu.Button>More</Menu.Button>
                                    <Menu.Items className='absolute right-2 md:right-16 z-1 bg-white shadow-lg max-w-2xl rounded flex flex-col'>
                                        <Menu.Item className='p-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'>
                                            <span className="mb-0">profile</span>
                                        </Menu.Item>
                                        <Menu.Item className='p-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'>
                                            {({ active }) => (
                                                <a
                                                    className={`${active && 'bg-blue-500'}`}
                                                    href="/account-settings"
                                                >
                                                    Documentation
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item className='p-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'>
                                            <span className="opacity-75">Invite a friend (coming soon!)</span>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                            </li>
                        </ul>
                    </nav>
                </header>
            </section>
            {children}
            <Footer />
        </>
    )
}

export default DashboardContainer;
