"use client";

import {
  Award,
  CalendarDays,
  ExternalLink,
  FileBadge,
} from "lucide-react";

const certifications = [
  {
    number: "01",
    title: "The Ultimate Job Ready Data Science Course",
    issuer: "CodeWithHarry",
    category: "Data Science",
    date: "2026",
    description:
      "Course focused on data science fundamentals, Python, data analysis, visualization, and machine learning concepts.",
    skills: ["Python", "Data Science", "Pandas", "NumPy", "Machine Learning"],
    certificate: "#",
  },
  {
    number: "02",
    title: "AI Internship Certificate",
    issuer: "Codec Technologies India",
    category: "Artificial Intelligence",
    date: "2025",
    description:
      "Internship experience covering Python-based data handling, visualization, exploratory analysis, and introductory machine learning.",
    skills: ["Python", "Data Analysis", "Visualization", "Machine Learning"],
    certificate: "/Codec.pdf",
  },
  {
    number: "03",
    title: "Full Stack Developer Internship",
    issuer: "Cybrom Technology Pvt. Ltd.",
    category: "Full Stack Development",
    date: "2024",
    description:
      "Internship focused on full-stack web development, backend development, APIs, databases, and modern web application workflows.",
    skills: ["Python", "Django", "REST API", "JavaScript", "SQL"],
    certificate: "#",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">

        {/* Heading */}
        <div className="certifications-heading">
          <div className="certifications-label">
            <span></span>
            CERTIFICATIONS
            <span></span>
          </div>

          <h2>
            Learning & <strong>Achievements</strong>
          </h2>

          <p>
            Certifications and learning experiences that support my journey
            across full-stack development, data science, and AI/ML.
          </p>
        </div>

        {/* Cards */}
        <div className="certifications-grid">
          {certifications.map((certificate, index) => (
            <article
              key={certificate.number}
              className="certificate-card"
              style={
                {
                  "--certificate-delay": `${index * 0.12}s`,
                } as React.CSSProperties
              }
            >
              {/* Top */}
              <div className="certificate-top">
                <span className="certificate-number">
                  {certificate.number}
                </span>

                <div className="certificate-icon">
                  <Award size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="certificate-content">
                <span className="certificate-category">
                  {certificate.category}
                </span>

                <h3>{certificate.title}</h3>

                <h4>{certificate.issuer}</h4>

                <div className="certificate-date">
                  <CalendarDays size={15} />
                  <span>{certificate.date}</span>
                </div>

                <p>{certificate.description}</p>
              </div>

              {/* Skills */}
              <div className="certificate-skills">
                {certificate.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              {/* Button */}
              <a
                href={certificate.certificate}
                className="certificate-link"
                target="_blank"
              >
                <FileBadge size={17} />
                View Certificate
                <ExternalLink size={16} />
              </a>

              <div className="certificate-glow"></div>
            </article>
          ))}
        </div>

        {/* Bottom */}
        <div className="certifications-bottom">
          <span></span>
          <p>Continuous learning. Continuous growth.</p>
          <span></span>
        </div>

      </div>
    </section>
  );
}