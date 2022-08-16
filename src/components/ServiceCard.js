import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes"
import {useUtils} from "../hooks/UtilsHook"

const ServiceCard = ({ title, content }) => {
    const {slugify} = useUtils();
    const url = `${ROUTES.BLOG}/${slugify(title)}`;

    return (
        <div className="relative">
            <Link to={url} className="block overflow-hidden group rounded-xl">
                <img
                    src="https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;h=1700&amp;q=80"
                    className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt=""
                />
            </Link>
            <div className="relative mt-5">
                <Link to={url} className="block mb-3 hover:underline">
                    <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">{title}</h2>
                </Link>
                <p className="mb-4 text-gray-700">{content}</p>
                <Link to={url} className="font-medium underline">Read More</Link>
            </div>
        </div>
    )
}
export default ServiceCard;
