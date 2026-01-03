import ScrollReveal from "../components/ComponentWithTransition";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";


export default function Home() {
    return (
        <div className="text-center text-white gap-y-1 py-10">

            {/* // style={{
            //     backgroundImage: `url("../../public/images/bg1.jpg")`
            // }} > */}
            <ScrollReveal>
                <h1 className="text-4xl text-cyan-950 font-bold" > Welcome to My Portfolio </h1>
                <p className="mt-2 text-zinc-900">
                    Explore my projects, resume, and get to know more about me!
                </p>
            </ScrollReveal>

            <ScrollReveal>
                <About />
            </ScrollReveal>
            <ScrollReveal>
                <Projects />
            </ScrollReveal>
            <ScrollReveal>
                <Resume />
            </ScrollReveal>
            <ScrollReveal>
                <Contact />
            </ScrollReveal>



            {/* <ProjectCard title={"naam"} description={"MAAL haii"} techStack={tempProject} link="Kahani.com" /> */}
        </ div >
    );
}
