import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/DixitWeb.png";
import { IoIosLogIn } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true); // When scrolled more than 50px
            } else {
                setIsScrolled(false); // When near the top
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`nav flex justify-between items-center px-4 py-3 md:px-7 md:py-5 border-b-2 transition-all duration-300 ${isScrolled ? "fixed top-0 w-full bg-white shadow-lg z-50" : "relative bg-transparent"
                }`}
        >
            {/* Logo */}
            <div className="logo">
                <img src={logo} alt="Logo" className="w-[150px] md:w-[200px]" />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex font-semibold">
                <ul className="navLink flex gap-5">
                    <li className="relative group">
                        <NavLink
                            to="/"
                            className="text-black transition-all duration-300 hover:text-blue-600"
                        >
                            Home
                        </NavLink>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li className="relative group">
                        <NavLink
                            to="/about"
                            className="text-black transition-all duration-300 hover:text-blue-600"
                        >
                            About Us
                        </NavLink>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li className="relative group">
                        <NavLink
                            to="/projects"
                            className="text-black transition-all duration-300 hover:text-blue-600"
                        >
                            Projects
                        </NavLink>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li className="relative group">
                        <NavLink
                            to="/skills"
                            className="text-black transition-all duration-300 hover:text-blue-600"
                        >
                            Skills
                        </NavLink>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li className="relative group">
                        <a
                           href="/Dixit_Resume.pdf"  // Replace with your actual PDF path
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black transition-all duration-300 hover:text-blue-600"
                        >
                            Resume
                        </a>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </li>

                    <li className="relative group">
                        <NavLink
                            to="/story"
                            className="text-black transition-all duration-300 hover:text-blue-600"
                        >
                            Story
                        </NavLink>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li className="relative group">
                        <NavLink
                            to="/contact"
                            className="text-black transition-all duration-300 hover:text-blue-600"
                        >
                            Contact Me
                        </NavLink>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </li>
                </ul>
            </div>

            {/* Signup/Login Links */}
            <div className="hidden md:flex">
                <ul className="navLinkSignup flex gap-5">
                    <li>
                        <NavLink
                            to="/contact"
                            activeClassName="text-blue-500"
                            className="text-black transition-all duration-500 ease-in-out transform hover:text-blue-600 hover:scale-105 relative"
                        >
                            <button className="transition-all duration-300 ease-in-out bg-gradient-to-r from-[#2A3386] to-[#00659A] text-white font-semibold border-2 border-transparent w-[120px] h-[40px] flex justify-center items-center rounded-[20px] hover:shadow-[0px_0px_10px_2px_#718096] hover:scale-105">
                               Let's Talk
                                <span className="pl-[10px]"><FaArrowRight /></span>
                            </button>
                        </NavLink>
                    </li>

                   
                </ul>

            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-[70px] left-0 right-0 bg-white shadow-md md:hidden">
                    <ul className="flex flex-col gap-5 py-5 px-7">
                        <li>
                            <NavLink to="/" activeClassName="text-blue-500" className="text-black transition-all duration-300 hover:text-blue-600">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="text-blue-500" className="text-black transition-all duration-300 hover:text-blue-600">
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" activeClassName="text-blue-500" className="text-black transition-all duration-300 hover:text-blue-600">
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/skills" activeClassName="text-blue-500" className="text-black transition-all duration-300 hover:text-blue-600">
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume" activeClassName="text-blue-500" className="text-black transition-all duration-300 hover:text-blue-600">
                                Resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" activeClassName="text-blue-500" className="text-black transition-all duration-300 hover:text-blue-600">
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="text-blue-500" className="text-black transition-all duration-300 hover:text-blue-600">
                                Contact Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" activeClassName="text-blue-500" className="text-black transition-all duration-300 hover:text-blue-600">
                                <button className="border-2 border-black">
                                    Login
                                </button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup" activeClassName="text-blue-500" className="text-black transition-all duration-300 hover:text-blue-600">
                                Signup
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
