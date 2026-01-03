
import Carousel from "../components/Carousal";
import FV_MERN from "/images/FashioVision_MERN.png";
import trailTracker from "/images/trailTracker.png";
import reactQuiz from "/images/reactQuiz.png";
import react from "/images/react.png";
import python from "/images/python.svg"
export default function Projects() {

    const projectGroups = [
        {
            folder: "Web Dev",
            projects: [
                {
                    title: "Society Management System",
                    description: "MERN-based system for housing societies.",
                    techStack: ["MERN", "Tailwind"],
                    image: react,
                    link: "https://github.com/yourproject",
                },
                {
                    title: "Trail Tracker",
                    description: "World Tour kiye ho to worldWise karna jaruri he",
                    techStack: ["ReactJs", "Tailwind", "API", "Dynamic Map"],
                    image: trailTracker,
                    link: "https://github.com/RonitR10/Trail-Tracker",
                },
                {
                    title: "React-Quiz",
                    description: "For Last minute preparation, Dive into ocean of relatable questions",
                    techStack: ["ReactJs", "JavaScript", "Tailwind CSS"],
                    image: reactQuiz,
                    link: "https://github.com/RonitR10/React-Quiz",
                },
                {
                    title: "FashioVision - A Modern Fashion Shopping Soultion",
                    description: "For fashion designers, fashion enthsiast trend setters and for all.",
                    techStack: ["MERN", "Tailwind CSS", "React RouterDom", "API", "Fashion"],
                    image: FV_MERN,
                    link: "https://github.com/RonitR10/FashioVision",
                },
                {
                    title: "Stray Animal Welfare",
                    description: "React based animal welfare that assist NGO's to assist the needy",
                    techStack: ["ReactJs", "NodeJs", "ExpressJs", "MySQL", "Tailwind"],
                    image: react,
                    link: "https://github.com/yourproject",
                },
            ],
        },
        {
            folder: "AI/ML",
            projects: [
                {
                    title: "Virtual Try-On",
                    description: "GAN-based virtual try-on system.",
                    techStack: ["GAN", "Python", "U2NET", "DL", "YOLO"],
                    image: python,
                    link: "https://github.com/RonitR10/Fashio",
                },
            ],
        },
    ];

    // function toggleFolder(folderName) {
    //     setOpenFolders((prev) => ({
    //         ...prev,
    //         [folderName]: !prev[folderName],
    //     }));
    // };

    return (
        <div className=" min-h-screen px-6 py-10 rounded-4xl backdrop-blur-md bg-black text-white"
            style={{
                backgroundImage: `url("/images/bg12.jpg")`,
                backgroundSize: "contain",
                backgroundRepeat: "round",
            }}
        >
            <h1 className="text-3xl font-bold mb-6 text-center">📁 My Projects</h1>
            <div className="space-y-6 max-w-6xl mx-auto text-center  rounded-lg scrollbar-hide ">
                <h2 className="text-5xl text-cyan-950">WEB PROJECTS</h2>
                <Carousel projects={projectGroups[0].projects} />
                <h2 className="text-5xl text-cyan-950">ML/DL Projects </h2>
                <Carousel projects={projectGroups[1].projects} />

            </div>
            {/* ))} */}
        </div>
        // </div >
    );
}
