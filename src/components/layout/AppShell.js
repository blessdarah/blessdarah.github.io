import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"
import { Toaster } from "react-hot-toast";

const AppShell = ({ children }) => {
    return (
        <>
            <section className="relative w-full bg-white">
                <Navbar />
            </section>

            {children}
            <Footer />
            <Toaster />
        </>
    )
}

export default AppShell;
