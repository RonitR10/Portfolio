import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function AppLayout() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen text-gray-900" style={{
                // backgroundImage: `url("/images/2.jpg")`,
                backgroundSize: "cover",
            }}>
                {/* Navbar */}
                <header>
                    <Navbar />
                </header>

                {/* Main content */}
                <main className="flex-grow w-full px-4 sm:px-6 md:px-10 py-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                {/* Footer */}
                <footer>
                    <Footer />
                </footer>
            </div>
        </Router>
    );
}
