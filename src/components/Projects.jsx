import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="section-container">
                <div className="section-heading">
                    <p className="eyebrow">ENGINEERING WORK</p>

                    <h2>
                        Systems I've designed,
                        <span> built and optimized.</span>
                    </h2>

                    <p>
                        A selection of projects focused on distributed systems, financial
                        infrastructure, cloud architecture, machine learning and AI
                        engineering.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}