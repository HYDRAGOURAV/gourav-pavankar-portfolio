"use client";

import {
  ExternalLink,
  ArrowUpRight,
  Code2,
  Brain,
  Server,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Gym Management System",
    category: "Full Stack Development",
    description:
      "A complete gym management platform with member management, BMI calculation, workout and diet assistance, and an AI-powered assistant for personalized fitness guidance.",
    tech: ["Django", "Python", "Bootstrap", "SQLite", "AI"],
    icon: Brain,
    github: "https://github.com/",
    demo: "#",
    featured: true,
  },
  {
    number: "02",
    title: "Mini Loan Application",
    category: "Backend Development",
    description:
      "A loan management application with user registration, loan requests, admin approval workflow, repayment tracking, dashboard, and online payment integration.",
    tech: ["Django", "Python", "DRF", "Razorpay", "AWS"],
    icon: Server,
    github: "https://github.com/",
    demo: "#",
    featured: false,
  },
  {
    number: "03",
    title: "Hospital Management System",
    category: "Backend & REST API",
    description:
      "A hospital administration system designed to manage patients and hospital workflows with structured Django models and REST APIs.",
    tech: ["Django", "Python", "DRF", "REST API", "SQL"],
    icon: Code2,
    github: "https://github.com/",
    demo: "#",
    featured: false,
  },
  {
    number: "04",
    title: "AI / Machine Learning Project",
    category: "AI & Machine Learning",
    description:
      "An intelligent machine learning project focused on data preprocessing, exploratory data analysis, model training, evaluation, and prediction.",
    tech: ["Python", "NumPy", "Pandas", "Scikit-learn"],
    icon: Brain,
    github: "https://github.com/",
    demo: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        {/* Heading */}
        <div className="projects-heading">
          <div className="projects-label">
            <span></span>
            PROJECTS
            <span></span>
          </div>

          <h2>
            Things I&apos;ve <strong>Built</strong>
          </h2>

          <p>
            A collection of projects where I combine full-stack development,
            backend engineering, and AI/ML to build practical solutions.
          </p>
        </div>

        {/* Projects */}
        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className={`project-card ${
                  project.featured ? "project-featured" : ""
                }`}
                style={
                  {
                    "--project-delay": `${index * 0.12}s`,
                  } as React.CSSProperties
                }
              >
                {/* Top */}
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <div className="project-icon">
                    <Icon size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="project-content">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                {/* Tech */}
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                   
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="project-link project-demo"
                  >
                  </a>

                  <ArrowUpRight className="project-arrow" size={22} />
                </div>

                {/* Glow */}
                <div className="project-glow"></div>
              </article>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="projects-bottom">
          <span className="projects-line"></span>

          <p>
            More projects coming soon<span>.</span>
          </p>

          <span className="projects-line"></span>
        </div>

      </div>
    </section>
  );
}