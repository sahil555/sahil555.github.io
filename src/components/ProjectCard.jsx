export default function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <div className="project-top">
                <p className="project-category">{project.category}</p>

                {project.featured && (
                    <span className="featured-badge">Featured</span>
                )}
            </div>

            <h3>{project.title}</h3>

            <p className="project-summary">{project.summary}</p>

            {project.scale && (
                <div className="project-scale">
                    {project.scale.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
            )}

            <div className="project-story">
                <h4>The problem</h4>
                <p>{project.story}</p>
            </div>

            <div className="architecture-list">
                <h4>Architecture</h4>

                <div className="tags">
                    {project.architecture.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
            </div>

            <div className="project-decisions">
                <h4>Key engineering decisions</h4>

                {project.decisions.map((decision) => (
                    <div className="decision" key={decision.title}>
                        <strong>{decision.title}</strong>
                        <p>{decision.description}</p>
                    </div>
                ))}
            </div>

            <div className="tags">
                {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                ))}
            </div>
        </article>
    );
}