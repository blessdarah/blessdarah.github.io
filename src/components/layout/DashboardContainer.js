import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from '@headlessui/react';
import Footer from "../Footer"
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms";
import { Toaster } from "react-hot-toast";

const DashboardContainer = ({ children }) => {
    const user = useRecoilValue(userState);
    const navigate = useNavigate();

    if (user === null) {
        navigate(ROUTES.LOGIN);
    }

    useEffect(() => {
        console.log('user: ', user);
        if (user === null || user.aud !== "authenticated") {
            navigate(ROUTES.LOGIN);
        }
    }, []);

    return (
        <div className="px-8 md:px-0">
            <section className="relative w-full bg-white">
                <header className="flex align-center justify-between max-w-7xl mx-auto py-2 uppercase font-semibold border-b border-gray-100">
                    <h3>Dashboard</h3>
                    <nav className="hidden">
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
            <Toaster />
        </div>
    )
}

export default DashboardContainer;
