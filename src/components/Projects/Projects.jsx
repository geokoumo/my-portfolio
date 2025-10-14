import "./Projects.css";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects-section fade-in">
      <h2>My Projects</h2>
      <p className="projects-intro">
        Here are some of the projects I’ve worked on — exploring modern web technologies, 
        clean UI design, and problem-solving through code.
      </p>

      <div className="project-grid">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            {/* Optional project image */}
            {proj.image && <img src={proj.image} alt={proj.title} className="project-image" />}

            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              {/* Tech tags */}
              {proj.tech && (
                <div className="project-tags">
                  {proj.tech.map((t, j) => (
                    <span key={j}>{t}</span>
                  ))}
                </div>
              )}

              <a href={proj.link} target="_blank" rel="noreferrer" className="project-link">
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
