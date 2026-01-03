/* eslint react/prop-types: 0 */
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Carousel({ projects }) {
    const duplicatedProjects = [...projects, ...projects];
    const x = useMotionValue(0);
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    const [isPaused, setIsPaused] = useState(false);
    const [lastManualTime, setLastManualTime] = useState(null);

    // Start infinite auto-scroll
    const startScroll = () => {
        const fullWidth = containerRef.current.scrollWidth / 2;
        const duration = 20;

        animationRef.current = animate(x, -fullWidth, {
            type: "tween",
            duration,
            ease: "linear",
            onComplete: () => {
                x.set(0);
                startScroll(); // loop
            },
        });
    };

    // Pause auto-scroll
    const stopScroll = () => {
        animationRef.current?.stop();
    };

    // Start scroll on mount
    useEffect(() => {
        startScroll();
        return () => stopScroll();
    }, []);

    // Pause on hover or manual
    useEffect(() => {
        if (isPaused) {
            stopScroll();
        } else {
            // Restart only if not within manual cooldown (2s)
            const timeout = setTimeout(() => {
                if (!isPaused) startScroll();
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [isPaused, startScroll]);

    // Resume scroll after manual movement
    useEffect(() => {
        if (lastManualTime) {
            const timeout = setTimeout(() => {
                setIsPaused(false);
                startScroll();
            }, 5000); // 5s pause after manual scroll
            return () => clearTimeout(timeout);
        }
    }, [lastManualTime, startScroll]);

    // Manual button scroll
    const handleScroll = (dir) => {
        stopScroll();
        setIsPaused(true);
        setLastManualTime(Date.now());

        const currentX = x.get();
        const distance = dir * 300;
        animate(x, currentX + distance, { duration: 0.5, ease: "easeOut" });
    };

    return (
        <div
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <motion.div
                ref={containerRef}
                className="flex space-x-6 w-max"
                style={{ x }}
            >
                {duplicatedProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </motion.div>

            {/* Left Button */}
            <button
                onClick={() => handleScroll(1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-cyan-500 text-white p-2 rounded-full backdrop-blur-md transition"
            >
                <ChevronLeft size={20} />
            </button>

            {/* Right Button */}
            <button
                onClick={() => handleScroll(-1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-cyan-500 text-white p-2 rounded-full backdrop-blur-md transition"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
}

export default Carousel;
