import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
    const { title, description, techStack, link, image } = project;

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
            <img src={image !== null ? image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7dbRmn-VQRxJmfwWXa09Pn70eOpeN0dRPEolTqSbaQji-Amr2DOafes&s"} style={{ height: 150, width: 300 }} />
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>

            {/* Description */}
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {description}
            </p>

            {/* Tech Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                    <span
                        key={index}
                        className="bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white px-2 py-1 rounded text-xs font-medium"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* View Project */}
            <Link
                to={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
                View Project <ExternalLink size={16} />
            </Link>
        </div>
    );
}

// ✅ PropTypes definition
ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
        link: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};