import { useState } from "react";

const links = [
    ["About", "about"],
    ["Experience", "experience"],
    ["Projects", "projects"],
    ["Architecture", "architecture"],
    ["AI", "ai"],
    ["Skills", "skills"],
    ["Contact", "contact"]
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="navbar">
            <a href="#home" className="logo">
                SK<span>.</span>
            </a>

            <button
                className="mobile-menu"
                onClick={() => setOpen(!open)}
                aria-label="Toggle navigation"
            >
                ☰
            </button>

            <nav className={open ? "nav-links open" : "nav-links"}>
                {links.map(([label, id]) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={() => setOpen(false)}
                    >
                        {label}
                    </a>
                ))}

                <a
                    className="nav-resume"
                    href="/assets/Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    Resume
                </a>
            </nav>
        </header>
    );
}