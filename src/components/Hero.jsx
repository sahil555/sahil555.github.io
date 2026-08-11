export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <p className="eyebrow">SOFTWARE ENGINEER · DISTRIBUTED SYSTEMS · AI</p>

                <h1>
                    I build systems that
                    <span> scale, survive, and evolve.</span>
                </h1>

                <p className="hero-description">
                    I'm Sahil Kureel, a software engineer with 5+ years of experience
                    building distributed backend platforms, financial infrastructure,
                    cloud-native systems and AI engineering workflows.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="button primary">
                        Explore my work
                    </a>

                    <a href="/assets/Resume.pdf" className="button secondary">
                        View Resume
                    </a>
                </div>

                <div className="hero-stack">
                    <span>Java</span>
                    <span>Python</span>
                    <span>Spring Boot</span>
                    <span>FastAPI</span>
                    <span>AWS</span>
                    <span>DynamoDB</span>
                    <span>Kafka</span>
                    <span>RabbitMQ</span>
                    <span>RAG</span>
                </div>
            </div>
        </section>
    );
}