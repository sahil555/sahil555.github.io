import { experience } from "../data/experience";

export default function Experience() {
    return (
        <section id="experience" className="section section-dark">
            <div className="section-container">
                <div className="section-heading">
                    <p className="eyebrow">EXPERIENCE</p>
                    <h2>Where I've built systems.</h2>
                </div>

                <div className="timeline">
                    {experience.map((job) => (
                        <article className="experience-item" key={job.company}>
                            <div className="experience-meta">
                                <span>{job.period}</span>
                                <span>{job.location}</span>
                            </div>

                            <div className="experience-content">
                                <p className="company">{job.company}</p>
                                <h3>{job.role}</h3>

                                <p className="experience-description">
                                    {job.description}
                                </p>

                                <ul>
                                    {job.highlights.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>

                                <div className="tags">
                                    {job.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}