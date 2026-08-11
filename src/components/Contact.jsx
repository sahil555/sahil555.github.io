export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="section-container contact-content">
                <p className="eyebrow">LET'S CONNECT</p>

                <h2>
                    Building something
                    <span> interesting?</span>
                </h2>

                <p>
                    I'm interested in backend engineering, distributed systems,
                    platform engineering and AI infrastructure opportunities.
                </p>

                <div className="contact-actions">
                    <a
                        href="mailto:sahil555kureel@gmail.com"
                        className="button primary"
                    >
                        Email me
                    </a>

                    <a
                        href="https://github.com/sahil555"
                        target="_blank"
                        rel="noreferrer"
                        className="button secondary"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="button secondary"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}