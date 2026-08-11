export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <strong>Sahil Kureel</strong>
                <span> · Software Engineer</span>
            </div>

            <p>
                Distributed Systems · Platform Engineering · AI
            </p>

            <span>© {new Date().getFullYear()} Sahil Kureel</span>
        </footer>
    );
}