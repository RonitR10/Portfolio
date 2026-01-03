import { Link } from "react-router-dom";
import profilePic from "/images/profile2.png";
import { useState } from "react";
function About() {
    const [hovered, setHovered] = useState(false);
    return (
        <div className="min-h-screen px-6 md:px-30 rounded-4xl text-zinc-900 flex flex-col md:flex-row justify-evenly items-center text-center md:text-left"
            style={{
                backgroundImage: `url("/images/jolly_1.png")`,
                backgroundSize: "cover",
            }}
        >
            <div className="max-w-xl space-y-4">
                <h1 className="text-2xl decoration-sky-300">Code, creativity, and a constant urge to improve things.</h1>
                <p className="text-lg">
                    {/* I’m a passionate developer who loves crafting clean UI and building full-stack applications with modern web technologies. */}
                    I’m <Link className="duration-300 cursor:pointer transition-all hover:text-3xl hover:text-cyan-800 font-extrabold" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>Ronit Raj Bairwa</Link >, an MCA graduate from <span className="font-extrabold">NIT Trichy</span>, focused on building clean, scalable web applications, with a growing interest in AI/ML and thoughtful system design.
                </p>
                <Link to="/resume" className="mt-4 px-6 py-2 text-zinc-900 rounded-lg hover:bg-amber-300 border-1 transition-all duration-300">
                    View Portfolio
                </Link>
            </div>
            <div className="flex p-10 hover:ring-5 rounded-lg transition-all duration-200 hover:opacity-100 hover:ring-rose-300 hover:ring-offset-4">
                <img
                    className={`${hovered ? "scale-120" : "scale-100"}  rounded-lg border-1 border-white shadow-2xl hover:shadow-white opacity-100 hover:scale-120 transition-all duration-300 w-60 md:w-[400px] h-60 md:h-[500px]`}
                    src={profilePic}
                    alt="BigCo Inc. logo"
                />
            </div>
        </div>
    );
}

export default About;
