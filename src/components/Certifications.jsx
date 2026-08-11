const certifications = [
    {
        title: "AWS Certified Solutions Architect – Associate",
        description:
            "Certification demonstrating knowledge of designing and deploying secure and resilient AWS applications."
    },
    {
        title: "ACM-ICPC Regionals – Technical Assistant",
        description:
            "Technical assistant / management team experience at the ACM-ICPC regional event hosted at IIIT Gwalior."
    },
    {
        title: "SnackDown – CodeChef",
        description:
            "Qualifier Round 3 participant in CodeChef's competitive programming competition."
    }
];

export default function Certifications() {
    return (
        <section className="section">
            <div className="section-container">
                <div className="section-heading">
                    <p className="eyebrow">CERTIFICATIONS</p>
                    <h2>Continuous learning.</h2>
                </div>

                <div className="certifications-grid">
                    {certifications.map((item) => (
                        <article className="cert-card" key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}