import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section fade-in">
      <div className="about-container">
        {/* Left: Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I'm <strong>Georgios Koumoundouros</strong>, a passionate Frontend Developer 
            specializing in <strong>React</strong> and <strong>Vue.js</strong>. I enjoy building 
            interactive web applications that solve real-world problems and provide smooth user experiences.
          </p>
          <p>
            I love learning new technologies, experimenting with UI design, and writing clean, maintainable code.
          </p>

          {/* Tech stack */}
          <div className="tech-stack">
            <span>💻 React</span>
            <span>⚡ Vue.js</span>
            <span>🟨 JavaScript</span>
            <span>🐍 Python</span>
            <span>📦 Git</span>
          </div>
        </div>

        {/* Right: Avatar */}
        <div className="about-avatar">
          <img
            src={`${process.env.PUBLIC_URL}/avatar.png`}
            alt="Georgios"
          />
        </div>
      </div>
    </section>
  );
}
