import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content fade-in">
        {/* Avatar */}
        <img
          src={`${process.env.PUBLIC_URL}/avatar.png`}
          alt="Georgios"
          className="hero-avatar"
        />

        {/* Name */}
        <h1 className="hero-name">Hi, I'm Georgios 👋</h1>

        {/* Typing tagline */}
        <p className="hero-tagline">
          <Typewriter
            words={[
              "Frontend Developer",
              "React & Vue Enthusiast",
              "Problem Solver",
            ]}
            loop={0}            // 0 = infinite
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a
            href={`${process.env.PUBLIC_URL}/Georgios-Koumoundouros-Resume.pdf`}
            download
            className="btn"
          >
            Download CV
          </a>
          <a href="#projects" className="btn btn-outline">
            View Projects
          </a>
        </div>
      </div>

      {/* Floating background shapes */}
      <div className="hero-bg-shapes">
        <span className="shape shape1"></span>
        <span className="shape shape2"></span>
        <span className="shape shape3"></span>
      </div>
    </section>
  );
}
