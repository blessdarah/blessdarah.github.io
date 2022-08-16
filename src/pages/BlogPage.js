import React from "react";
import { Link } from "react-router-dom";
import { AppShell } from "../components"
import { ROUTES } from "../routes";

const BlogPage = () => {
    return (
        <AppShell>
            <section className="w-full py-8 bg-white sm:py-12 md:py-16">
                <div className="px-10 mx-auto max-w-7xl">
                    <div className="flex items-center justify-between w-full pb-5 mb-8 border-b border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-800">Learning Resources</h2>
                        <Link to={ROUTES.BLOG} className="flex items-center text-base font-semibold text-blue-400 hover:text-blue-500 group">
                            <span>View More Posts</span>
                            <svg className="w-4 h-4 mt-0.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-12 gap-6">
                        <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                            <Link to={ROUTES.BLOG} className="relative block w-full h-64 overflow-hidden rounded">
                                <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-01.jpg" />
                            </Link>
                            <p className="text-xs font-bold text-gray-400 uppercase">Resources</p>
                            <a href="#_" className="block text-2xl font-medium leading-tight text-gray-700 hover:text-gray-900">4 Simple Tips for Leveraging the Power of Social Media</a>
                        </div>

                        <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                            <a href="#_" className="relative block w-full h-64 overflow-hidden rounded">
                                <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-02.png" />
                            </a>
                            <p className="text-xs font-bold text-gray-400 uppercase">Resources</p>
                            <a href="#_" className="block text-2xl font-medium leading-tight text-gray-700 hover:text-gray-900">The Best Tips for Creating Engaging and Compelling Photos</a>
                        </div>

                        <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                            <a href="#_" className="relative block w-full h-64 overflow-hidden rounded">
                                <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-03.jpg" />
                            </a>
                            <p className="text-xs font-bold text-gray-400 uppercase">Resources</p>
                            <a href="#_" className="block text-2xl font-medium leading-tight text-gray-700 hover:text-gray-900">How to Get the Most Engagement from your Online Resources</a>
                        </div>
                    </div>


                    <div className="flex items-center justify-between w-full pb-5 mt-16 mb-8 border-b border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-800">Inspiration</h2>
                        <a href="#_" className="flex items-center text-base font-semibold text-blue-400 hover:text-blue-500 group">
                            <span>View More Posts</span>
                            <svg className="w-4 h-4 mt-0.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </a>
                    </div>

                    <div className="grid grid-cols-12 gap-6">
                        <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                            <a href="#_" className="relative block w-full h-64 overflow-hidden rounded">
                                <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-04.jpg" />
                            </a>
                            <p className="text-xs font-bold text-gray-400 uppercase">Inspiration</p>
                            <a href="#_" className="block text-2xl font-medium leading-tight text-gray-700 hover:text-gray-900">Learn How the Creator of Techstreet Crushed the Competition</a>
                        </div>

                        <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                            <a href="#_" className="relative block w-full h-64 overflow-hidden rounded">
                                <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-05.jpg"/>
                            </a>
                            <p className="text-xs font-bold text-gray-400 uppercase">Resources</p>
                            <a href="#_" className="block text-2xl font-medium leading-tight text-gray-700 hover:text-gray-900">Learn how Reading Can Accellerate your Earning Potential</a>
                        </div>

                        <div className="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                            <a href="#_" className="relative block w-full h-64 overflow-hidden rounded">
                                <img className="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-image-06.jpg"/>
                            </a>
                            <p className="text-xs font-bold text-gray-400 uppercase">Resources</p>
                            <a href="#_" className="block text-2xl font-medium leading-tight text-gray-700 hover:text-gray-900">Best Entrepreneurs you should be Following this Year</a>
                        </div>
                    </div>
                </div>
            </section>

        </AppShell>

    )
}

export default BlogPage;
