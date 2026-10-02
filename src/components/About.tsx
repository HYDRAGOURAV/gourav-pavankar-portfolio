"use client";
import Pic from "@/public/Pic.png";
import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Heading */}
        <div className="about-heading about-reveal">
          <div className="about-label">
            <span></span>
            ABOUT ME
            <span></span>
          </div>

          <h2>
            Building with <strong>Code & Intelligence</strong>
          </h2>

          <p>
            A developer focused on building modern web applications and
            exploring Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* Main About Content */}
        <div className="about-content">
          {/* Profile */}
          <div className="about-image about-reveal-left">
            <div className="image-glow"></div>

            <div className="profile-box">
              <Image
                src="/Pic.png"
                alt="GouravPavankar"
                width={400}
                height={400}
              />

              <div className="profile-placeholder">GP</div>
            </div>

            <div className="about-status">
              <span></span>
              <div>
                <small>Currently</small>
                <b>AI / ML Learning</b>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text about-reveal-right">
            <h3>
              Hi, I'm <span>Gourav Pavankar</span>
            </h3>

            <p>
              I'm a Full Stack Developer transitioning toward AI and Machine
              Learning Engineering.
            </p>

            <p>
              I enjoy building scalable web applications, backend APIs and
              intelligent solutions using modern technologies. My current focus
              is combining software engineering with Artificial Intelligence and
              Machine Learning.
            </p>

            {/* Information */}
            <div className="about-info-grid">
              <div className="about-info">
                <small>EDUCATION</small>
                <b>Computer Science & Engineering</b>
              </div>

              <div className="about-info">
                <small>DEVELOPMENT</small>
                <b>Python • Django • React</b>
              </div>

              <div className="about-info">
                <small>AI / ML</small>
                <b>Python • NumPy • Pandas • ML</b>
              </div>

              <div className="about-info">
                <small>LOCATION</small>
                <b>Bhopal, Madhya Pradesh</b>
              </div>
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="what-i-do about-reveal">
          <div className="about-label">
            <span></span>
            WHAT I DO
            <span></span>
          </div>

          <h3>
            Turning Ideas Into <strong>Solutions</strong>
          </h3>

          <div className="service-grid">
            <div className="service-card">
              <div className="service-number">01</div>

              <h4>Full Stack Development</h4>

              <p>
                Building responsive and scalable web applications using modern
                frontend and backend technologies.
              </p>

              <small>Python • Django • React</small>
            </div>

            <div className="service-card">
              <div className="service-number">02</div>

              <h4>AI / Machine Learning</h4>

              <p>
                Working with data, machine learning models and intelligent
                systems to solve real-world problems.
              </p>

              <small>Python • NumPy • Pandas • ML</small>
            </div>

            <div className="service-card">
              <div className="service-number">03</div>

              <h4>Backend & APIs</h4>

              <p>
                Designing reliable backend systems and clean APIs for modern
                applications.
              </p>

              <small>Django • DRF • FastAPI</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
