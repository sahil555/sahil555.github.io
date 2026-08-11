export default function AISection() {
    return (
        <section id="ai" className="section ai-section">
            <div className="section-container ai-grid">
                <div>
                    <p className="eyebrow">AI ENGINEERING</p>

                    <h2>
                        Building systems
                        <span> around AI, not just using AI.</span>
                    </h2>

                    <p>
                        My current work focuses on AI coding-agent evaluation, repository
                        level engineering tasks and RAG-based applications.
                    </p>
                </div>

                <div className="ai-content">
                    <div className="ai-card">
                        <span>01</span>
                        <h3>AI Coding Agents</h3>
                        <p>
                            Designing realistic repository-level engineering tasks where
                            agents must understand codebases, modify multiple files, run
                            tests and produce validated implementations.
                        </p>
                    </div>

                    <div className="ai-card">
                        <span>02</span>
                        <h3>RAG Applications</h3>
                        <p>
                            Building workflows where LLM systems retrieve project context
                            and use it as part of multi-step engineering tasks.
                        </p>
                    </div>

                    <div className="ai-card">
                        <span>03</span>
                        <h3>AI-Assisted Development</h3>
                        <p>
                            Using tools such as GitHub Copilot, GPT-based systems, Claude and
                            Ollama for implementation, debugging, test generation and code
                            analysis while retaining engineering validation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}