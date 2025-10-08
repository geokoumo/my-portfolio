import "./Projects.css";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
