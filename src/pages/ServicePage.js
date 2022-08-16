import React from "react";
import { AppShell, ServiceCard } from "../components"

const ServicePage = () => {
    return (
        <AppShell>
            <section className="h-auto bg-white">
                <div className="px-10 py-24 mx-auto max-w-7xl">
                    <div className="w-full mx-auto text-left md:text-center">
                        <h1 className="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight"> The <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">Number One Source</span> for<br className="lg:block hidden" /> all your design needs. </h1>
                        <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24"> Say hello to the number one source for all your design needs. Drag and drop designs, edit designs, and modify the components to help tell your story. </p>
                    </div>
                </div>
            </section>


            <section className="bg-white">
                <div className="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
                    <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                        <ServiceCard title="UI/UX Design" content="Best of UI design for your projects" />
                        <div className="relative">
                            <a href="#_" className="block overflow-hidden group rounded-xl">
                                <img src="https://images.unsplash.com/photo-1577095972574-2fbdcf60c8ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;h=1700&amp;q=80" className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
                            </a>
                            <div className="relative mt-5">
                                <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">July 20th 2021</p>
                                <a href="#" className="block mb-3 hover:underline">
                                    <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Explore the deep</h2>
                                </a>
                                <p className="mb-4 text-gray-700">The massive deep blue is worth exploring at least one time in your life. It is full of excitement and mystery. Go out and explore the deep.</p>
                                <a href="#_" className="font-medium underline">Read More</a>
                            </div>
                        </div>
                        <div className="relative">
                            <a href="#_" className="block overflow-hidden group rounded-xl">
                                <img src="https://images.unsplash.com/photo-1462651567147-aa679fd1cfaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;h=1700&amp;q=80" className="object-cover w-full h-64 transition-all duration-300 ease-out group-hover:scale-110" alt="" />
                            </a>
                            <div className="relative mt-5">
                                <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">July 20th 2021</p>
                                <a href="#" className="block mb-3 hover:underline">
                                    <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Find Your Roots</h2>
                                </a>
                                <p className="mb-4 text-gray-700">Make sure to stay-grounded to your roots, but it's also important to understand that you are worth the success you have achieved.</p>
                                <a href="#_" className="font-medium underline">Read More</a>
                            </div>
                        </div>
                        <div className="relative">
                            <a href="#_" className="block overflow-hidden group rounded-xl">
                                <img src="https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" className="object-cover w-full h-64 transition-all duration-300 ease-out group-hover:scale-110" alt="" />
                            </a>
                            <div className="relative mt-5">
                                <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">July 20th 2021</p>
                                <a href="#" className="block mb-3 hover:underline">
                                    <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Inspire Greatness</h2>
                                </a>
                                <p className="mb-4 text-gray-700">Find others who seek out greatness and surround yourself with positive and successful people. This is key to inspiring greatness for others.</p>
                                <a href="#_" className="font-medium underline">Read More</a>
                            </div>
                        </div>
                        <div className="relative">
                            <a href="#_" className="block overflow-hidden group rounded-xl">
                                <img src="https://images.unsplash.com/photo-1530262929451-caf6b99b5136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" className="object-cover w-full h-64 transition-all duration-300 ease-out group-hover:scale-110" alt="" />
                            </a>
                            <div className="relative mt-5">
                                <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">July 20th 2021</p>
                                <a href="#" className="block mb-3 hover:underline">
                                    <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Royalty in the Sky</h2>
                                </a>
                                <p className="mb-4 text-gray-700">Reach for the stars and find greatness in yourself. Royalty is not in the eyes of others, rather it is in the eye of the be-holder.</p>
                                <a href="#_" className="font-medium underline">Read More</a>
                            </div>
                        </div>
                        <div className="relative">
                            <a href="#_" className="block overflow-hidden group rounded-xl">
                                <img src="https://images.unsplash.com/photo-1559080463-5c7eb3a52de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
                            </a>
                            <div className="relative mt-5">
                                <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">July 20th 2021</p>
                                <a href="#" className="block mb-3 hover:underline">
                                    <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Enjoy Your Life</h2>
                                </a>
                                <p className="mb-4 text-gray-700">Be sure to enjoy the life that you have worked so hard to create. There's no point in reaching greatness if you do not celebrate.</p>
                                <a href="#_" className="font-medium underline">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
                <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
                    <div className="flex flex-col w-full md:flex-row">

                        <div className="flex justify-between">
                            <h1 className="relative flex flex-col text-6xl font-extrabold text-left text-black">
                                Crafting
                                <span>Powerful</span>
                                <span>Experiences</span>
                            </h1>
                        </div>
                        <div className="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
                            <img src="https://cdn.devdojo.com/images/december2020/designs3d.png" className="object-cover mt-3 mr-5 h-80 lg:h-96" />
                        </div>
                    </div>

                    <div className="my-16 border-b border-gray-300 lg:my-24"></div>

                    <h2 className="text-left text-gray-500 xl:text-xl">
                        Building beautiful designs for your next project. We've unlocked the secret to converting visitors into customers. Download our re-usable and extandable components today.
                    </h2>
                </div>
            </section>

        </AppShell>

    )
}

export default ServicePage;
