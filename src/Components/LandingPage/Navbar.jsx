import React, { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import LOGO from "../../assets/images/LandingPage/LOGO/Kautilya.png";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <img src={LOGO} alt="Kautilya Logo" className="h-10 sm:h-12 mr-2" />
                        <h1 className="text-base sm:text-xl md:text-2xl font-bold text-blue-900 leading-tight">
                            Kautilya Law Institute
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        <a href="#home" className="text-sm xl:text-base text-gray-700 hover:text-blue-600 transition">Home</a>
                        <a href="#about" className="text-sm xl:text-base text-gray-700 hover:text-blue-600 transition">About</a>
                        <a href="#features" className="text-sm xl:text-base text-gray-700 hover:text-blue-600 transition">Features</a>
                        <a href="#courses" className="text-sm xl:text-base text-gray-700 hover:text-blue-600 transition">Courses</a>
                        <a href="#contact" className="text-sm xl:text-base text-gray-700 hover:text-blue-600 transition">Contact</a>
                        <a href="tel:+919996732928" className="bg-blue-600 text-white px-4 xl:px-6 py-2 rounded-full hover:bg-blue-700 transition text-sm xl:text-base whitespace-nowrap">
                            Call Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
                        {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t shadow-lg">
                    <div className="px-4 py-4 space-y-3">
                        {["home", "about", "features", "courses", "contact"].map((link) => (
                            <a key={link} href={`#${link}`} onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-blue-600 py-2 capitalize">
                                {link}
                            </a>
                        ))}
                        <a href="tel:+919996732928" className="block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition text-center">
                            Call Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
