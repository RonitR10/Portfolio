import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-cyan-950 text-white  px-6 md:px-20 py-4 shadow-md">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <Link to="/" className="text-3xl font-bold font-mono hover:text-yellow-400">
                    RRB
                </Link>

                {/* Hamburger Button */}
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-lg">
                    <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
                    <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
                    <li><Link to="/projects" className="hover:text-yellow-400">Projects</Link></li>
                    <li><Link to="/resume" className="hover:text-yellow-400">Resume</Link></li>
                    <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden mt-4 space-y-4 text-center text-lg">
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
                    <li><Link to="/resume" onClick={toggleMenu}>Resume</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                </ul>
            )}
        </nav>
    );
}
