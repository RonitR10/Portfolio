import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Folder, ChevronDown, ChevronRight } from "lucide-react";

export default function Projects() {
    const [openFolders, setOpenFolders] = useState({});

    const projectGroups = [
        {
            folder: "Web Dev",
            projects: [
                {
                    id: 1,
                    title: "Society Management System",
                    description: "MERN-based system for housing societies.",
                    techStack: ["MERN", "Tailwind"],
                    image: null,
                    link: "https://github.com/yourproject",
                },
                {
                    id: 2,
                    title: "World Wise",
                    description: "World Tour kiye ho to worldWise karna jaruri he",
                    techStack: ["MERN", "Tailwind", "API", "fake-map"],
                    image: "",
                    link: "https://github.com/yourproject",
                },
                {
                    id: 3,
                    title: "React-Quiz",
                    description: "MERN-based system for housing societies.",
                    techStack: ["MERN", "JavaScript", "CSS"],
                    image: "",
                    link: "https://github.com/yourproject",
                },
                {
                    id: 4,
                    title: "FashioVision - A Modern Fashion Shopping Soultion",
                    description: "MERN-based system for housing societies.",
                    techStack: ["MERN", "Tailwind"],
                    image: "",
                    link: "https://github.com/yourproject",
                },
                {
                    id: 5,
                    title: "Stray Animal Welfare",
                    description: "MERN-based system for housing societies.",
                    techStack: ["MERN", "Tailwind"],
                    image: "",
                    link: "https://github.com/yourproject",
                },
            ],
        },
        {
            folder: "AI/ML",
            projects: [
                {
                    id: 1,
                    title: "Virtual Try-On",
                    description: "GAN-based virtual try-on system.",
                    techStack: ["GAN", "React", "Node.js", "Python"],
                    image: "",
                    link: "https://github.com/yourproject",
                },
            ],
        },
    ];

    function toggleFolder(folderName) {
        setOpenFolders((prev) => ({
            ...prev,
            [folderName]: !prev[folderName],
        }));
    };

    return (
        <div className=" min-h-screen px-6 py-10 backdrop-blur-md text-white"
            style={{
                backgroundImage: `url("/images/bg6.png")`,
                backgroundSize: "cover",
            }}
        >
            <h1 className="text-3xl font-bold mb-6 text-center">📁 My Projects</h1>

            <div className="space-y-6 max-w-6xl mx-auto">
                {projectGroups.map((group) => (
                    <div
                        key={group.folder}
                        className="bg-gray-900 rounded-xl shadow-lg overflow-hidden"
                    >
                        <button
                            onClick={() => toggleFolder(group.folder)}
                            className="flex items-center justify-between w-full px-5 py-4 text-left hover:bg-gray-800 transition"
                        >
                            <div className="flex items-center gap-2 text-white">
                                <Folder className="text-yellow-400" />
                                <span className="font-semibold text-lg">{group.folder}</span>
                            </div>
                            {openFolders[group.folder] ? (
                                <ChevronDown className="text-white" />
                            ) : (
                                <ChevronRight className="text-white" />
                            )}
                        </button>

                        {openFolders[group.folder] && (
                            <div className="grid py-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-6">
                                {group.projects.map((project, index) => (
                                    <ProjectCard key={index} project={project} />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
