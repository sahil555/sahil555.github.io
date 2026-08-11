export default function About() {
    return (
        <section id="about" className="section">
            <div className="section-container about-grid">
                <div>
                    <p className="eyebrow">ABOUT ME</p>
                    <h2>
                        Backend engineering with a
                        <span> systems mindset.</span>
                    </h2>
                </div>
                
                <div className="profile-image-container">
                    <img src="/assets/picture_profile.jpg" alt="Profile - Sahil" />
                </div>

                <div className="about-copy">
                    <p>
                        I'm a Software Engineer with 5+ years of experience designing and
                        building scalable backend systems, distributed platforms and
                        cloud-native infrastructure.
                    </p>

                    <p>
                        My experience spans payment processing, financial reconciliation,
                        banking platforms, microservices, event-driven architectures and
                        AI engineering.
                    </p>

                    <p>
                        At Head Digital Works, I worked on platform infrastructure and
                        payment systems integrating providers such as Juspay and Razorpay,
                        supporting approximately 100M+ transactions per day.
                    </p>

                    <p>
                        I currently work on AI coding-agent evaluation and RAG-based
                        engineering workflows through Project Dynamo / Terminal-Bench 2.
                    </p>

                    <p>
                        I enjoy solving problems around scale, concurrency, consistency,
                        fault tolerance, performance and system design.
                    </p>
                </div>

                
            </div>
        </section>
    );
}