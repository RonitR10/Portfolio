// import { useState, useEffect } from "react";
import react from "/images/react.png";
import html from "/images/html.png";
import js from "/images/js.png";
import MySql from "/images/MySql.png";
import mongoDb from "/images/mongoDb.png"
import redux from "/images/redux.png"
import css from "/images/css.svg"
import tailwind from "/images/tailwindcss.png"
import restapi from "/images/restapi.png"
import reactRouterDom from "/images/reactRouterDom.png"
import jwt from "/images/jwt.png"
import axios from "/images/axios.png"
import cloudinary from "/images/cloudinary.png"
import github from "/images/github.png"


export default function Resume() {
    // Handle screen resizing for responsiveness
    // useEffect(() => {
    //     // const handleResize = () => setWidth(window.innerWidth);
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);


    const resumeUrl = "/Ronit_Resume.pdf"; // make sure it's placed in `public/`

    return (
        <section className="bg-black text-white min-h-screen py-12 bg-opacity-80 px-4 md:px-20 flex flex-col items-center" style={{
            backgroundImage: `url("/images/bg1.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: 'center', // Adjust as needed
            backgroundRepeat: 'no-repeat', // Prevent image repetition
            // height: '100vh', // Example: full viewport height
            // width: '100vw', // Example: full viewport width
        }}>
            <h1 className="text-4xl font-bold  text-yellow-400 mb-6">📄 My Resume</h1>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8 flex-wrap justify-center">
                <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-300 transition"
                >
                    View in New Tab
                </a>
                <a
                    href={resumeUrl}
                    download
                    className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded font-semibold hover:bg-yellow-400 hover:text-black transition"
                >
                    Download Resume
                </a>
            </div>

            {/* Technologies Known */}
            <div className="backdrop-blur-sm rounded-lg p-4 flex flex-col items-center shadow-md overflow-auto ">
                <h1 className="font-extrabold text-5xl">Technologies and Tools</h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 mt-18">
                    <img src={html} alt="html" width={"150px"} height={"150px"} />
                    <img src={css} alt="css" width={"150px"} height={"150px"} />
                    <img src={tailwind} className="bg-white" alt="tailwind" width={"150px"} height={"150px"} />
                    <img src={js} alt="js" width={"150px"} height={"150px"} />
                    <img src={react} alt="react" width={"150px"} height={"150px"} />
                    <img src={redux} alt="redux" width={"150px"} height={"150px"} />
                    <img src={mongoDb} alt="mongoDb" width={"150px"} height={"150px"} className="bg-white" />
                    <img src={MySql} className="bg-white h-37" alt="MySql" width={"150px"} height={"150px"} />
                    <img src={restapi} className="bg-white h-37" alt="restapi" width={"150px"} height={"150px"} />
                    <img src={reactRouterDom} className="bg-white h-37" alt="restapi" width={"150px"} height={"150px"} />
                    <img src={jwt} className="bg-white h-37" alt="restapi" width={"150px"} height={"150px"} />
                    <img src={axios} className="bg-white h-37" alt="restapi" width={"150px"} height={"150px"} />
                    <img src={cloudinary} className="bg-white h-37" alt="restapi" width={"150px"} height={"150px"} />
                    <img src={github} className="bg-white h-37" alt="restapi" width={"150px"} height={"150px"} />
                </div>
            </div>
        </section>
    );
}
