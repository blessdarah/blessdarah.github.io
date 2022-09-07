import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"

const AppShell = ({ children }) => {
    return (
        <>
            <section className="relative w-full bg-white">
                <Navbar />
            </section>
            
            {children}
            <Footer />
        </>
    )
}

export default AppShell;
