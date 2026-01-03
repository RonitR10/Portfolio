import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import PropTypes from "prop-types"
export default function ProjectCard({ project, pop }) {
    const { title, description, techStack, link, image } = project;

    return (
        <motion.div
            whileHover={pop ? { scale: 1.12, zIndex: 10 } : {}}
            whileTap={{ scale: 0.98 }}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] max-w-[90vw] bg-zinc-500 dark:bg-zinc-800 border border-white/10 dark:border-zinc-700 rounded-2xl p-4 transition-all shadow-lg hover:shadow-[0_0_20px_#00f2ff80] relative"
        >
            <div className="h-40 w-full rounded-xl overflow-hidden bg-zinc-800 mb-3">
                <img
                    src={
                        image
                            ? image
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7dbRmn-VQRxJmfwWXa09Pn70eOpeN0dRPEolTqSbaQji-Amr2DOafes&s"
                    }
                    alt={title}
                    className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />
            </div>

            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-300 mt-1 line-clamp-3">{description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
                {techStack.map((tech, idx) => (
                    <span
                        key={idx}
                        className="px-2 py-1 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-cyan-300 hover:text-white text-sm font-medium transition"
            >
                View Project <ExternalLink size={16} />
            </a>
        </motion.div>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
        link: PropTypes.string.isRequired,
        image: PropTypes.string,
    }).isRequired,
    pop: PropTypes.bool
};