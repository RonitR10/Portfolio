import { Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-cyan-950 text-white py-10 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Left - Logo & Info */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-wide">RRB</h1>
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Ronit Raj Bairwa
                    </p>
                </div>

                {/* Center - Navigation */}
                <div className="flex justify-center">
                    <ul className="space-y-2 md:space-y-0 md:flex md:space-x-6 text-sm">
                        <li>
                            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-yellow-400 transition">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Right - Socials */}
                <div className="flex justify-center md:justify-end gap-4">
                    <a
                        href="mailto:ronit@example.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-yellow-400"
                    >
                        <Mail />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-yellow-400"
                    >
                        <Linkedin />
                    </a>
                    <a
                        href="https://github.com/ronitprofile"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-yellow-400"
                    >
                        <Github />
                    </a>
                </div>
            </div>
        </footer>
    );
}
