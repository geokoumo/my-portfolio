import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section fade-in">
      <h2>Contact Me</h2>
      <p>I'd love to hear from you! Reach out via email or connect on LinkedIn or GitHub.</p>

      <div className="contact-cards">
        <a href="mailto:gkoum11@gmail.com" className="contact-card">
          <FaEnvelope className="contact-icon" />
          <span>Email</span>
          <p>gkoum11@gmail.com</p>
        </a>

        <a
          href="https://linkedin.com/in/georgios-koumoundouros-207437293"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
          <p>Connect with me</p>
        </a>

        <a
          href="https://github.com/geokoumo"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />
          <span>GitHub</span>
          <p>Check my projects</p>
        </a>
      </div>
    </section>
  );
}
