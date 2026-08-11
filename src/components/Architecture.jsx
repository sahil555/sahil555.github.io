export default function Architecture() {
    return (
        <section id="architecture" className="section section-dark">
            <div className="section-container">
                <div className="section-heading">
                    <p className="eyebrow">SYSTEM DESIGN</p>

                    <h2>
                        I design around
                        <span> failure, scale and change.</span>
                    </h2>

                    <p>
                        My approach to distributed systems is to keep critical paths
                        simple, move expensive work asynchronously, isolate failures and
                        make every component independently observable and scalable.
                    </p>
                </div>

                <div className="principles-grid">
                    <article>
                        <span>01</span>
                        <h3>Understand the workload</h3>
                        <p>
                            Start with throughput, latency, consistency, concurrency and
                            failure requirements before selecting infrastructure.
                        </p>
                    </article>

                    <article>
                        <span>02</span>
                        <h3>Separate critical paths</h3>
                        <p>
                            Keep latency-sensitive operations synchronous while moving
                            expensive or failure-prone work to asynchronous workers.
                        </p>
                    </article>

                    <article>
                        <span>03</span>
                        <h3>Design for failure</h3>
                        <p>
                            Retries, idempotency, timeouts, observability and graceful
                            degradation are part of the design.
                        </p>
                    </article>

                    <article>
                        <span>04</span>
                        <h3>Scale independently</h3>
                        <p>
                            Services, workers and data-access paths should scale according
                            to their own workload characteristics.
                        </p>
                    </article>

                    <article>
                        <span>05</span>
                        <h3>Optimize the bottleneck</h3>
                        <p>
                            Measure first. Optimize the actual bottleneck rather than
                            prematurely scaling infrastructure.
                        </p>
                    </article>

                    <article>
                        <span>06</span>
                        <h3>Automate validation</h3>
                        <p>
                            Testing, CI/CD, quality gates and reproducible environments
                            reduce deployment and operational risk.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}