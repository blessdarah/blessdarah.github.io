import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const Header = () => {
    return (
        <div>
            <section className="relative w-full bg-white">
                <Navbar />
                {/* Hero */}
                <Hero />
            </section >
        </div >

    )
}
export default Header;
