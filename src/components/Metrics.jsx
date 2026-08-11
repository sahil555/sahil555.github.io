import { metrics } from "../data/metrics";

export default function Metrics() {
    return (
        <section className="metrics-section">
            <div className="section-container">
                <div className="section-heading">
                    <p className="eyebrow">BY THE NUMBERS</p>
                    <h2>Engineering at production scale.</h2>
                </div>

                <div className="metrics-grid">
                    {metrics.map((metric) => (
                        <article className="metric" key={metric.label}>
                            <strong>{metric.value}</strong>
                            <h3>{metric.label}</h3>
                            <p>{metric.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}