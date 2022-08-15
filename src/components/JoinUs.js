import React from 'react';

const Skills = () => {
    return (
        <>
            <section className="w-full flex bg-gray-50">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center space-y-5">
                        <h2 className="text-base font-semibold text-pink-400 tracking-wide uppercase">Get started today</h2>
                        <div className="inline-flex items-end justify-center w-full text-center mx-auto">
                            <img src="https://cdn.devdojo.com/tails/avatars/067.jpg" className="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white" />
                            <img src="https://cdn.devdojo.com/tails/avatars/019.jpg" className="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white" />
                            <img src="https://cdn.devdojo.com/tails/avatars/036.jpg" className="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white" />
                            <img src="https://cdn.devdojo.com/tails/avatars/008.jpg" className="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white" />
                            <img src="https://cdn.devdojo.com/tails/avatars/003.jpg" className="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative" />
                        </div>
                        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Join <span className="px-2 py-1 relative inline-block"><svg className="stroke-current bottom-0 absolute text-pink-400 -translate-x-2" viewBox="0 0 410 18" xmlns="http://www.w3.org/2000/svg"><path d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602" stroke-width="11.2" fill="none" fill-rule="evenodd" stroke-linecap="round"></path></svg><span className="relative">20,433</span></span> Happy Customers</p>
                        <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">We've designed the ultimate tools to help you craft the ultimate user experience. Don't just show your product to your users, instead, tell them your story.</p>
                        <a href="#_" className="text-white px-8 py-4 inline-block mt-5 font-medium text-lg bg-gray-900 focus:ring-4 focus:ring-gray-900 focus:ring-offset-2 rounded-xl">Join Us Today</a>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Skills;
