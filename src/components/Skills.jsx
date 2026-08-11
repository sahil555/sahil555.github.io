import { skillGroups } from "../data/skills";

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="section-container">
                <div className="section-heading">
                    <p className="eyebrow">TECHNICAL STACK</p>

                    <h2>
                        Tools I use to
                        <span> build production systems.</span>
                    </h2>
                </div>

                <div className="skills-grid">
                    {skillGroups.map((group) => (
                        <article className="skill-group" key={group.title}>
                            <h3>{group.title}</h3>

                            <div className="tags">
                                {group.items.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}