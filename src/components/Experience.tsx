"use client";

import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const experiences = [
  {
    number: "01",
    company: "Cybrom Technology Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    duration: "Jan 2024 – May 2024",
    location: "Bhopal, Madhya Pradesh",
    type: "Internship",
    description:
      "Worked on full-stack web development using Python and Django. Built and worked with backend APIs, database-driven applications, frontend interfaces, and complete web application workflows.",
    technologies: ["Python", "Django", "REST API", "JavaScript", "SQL"],
  },
  {
    number: "02",
    company: "Codec Technologies India",
    role: "AI Intern",
    duration: "Jun 2025 – Aug 2025",
    location: "Remote",
    type: "Internship",
    description:
      "Worked with Python-based data handling, data visualization, exploratory data analysis, and introductory machine learning concepts while exploring practical AI workflows.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Machine Learning"],
  },
  {
    number: "03",
    company: "Millennium Institute of Technology and Science (MITS), Bhopal Affiliated to Rajiv Gandhi Proudyogiki Vishwavidyalaya Bhopal",
    role: "B.Tech — Computer Science & Engineering",
    duration: "June 2019 – November 2023",
    location: "Bhopal (M.P)",
    type: "Education",
    description:
      "Studied core concepts of computer science, software development, web technologies, database management, and programming, with hands-on experience in developing web-based applications and exploring AI/ML technologies.",
    technologies: ["Software Development", "Web Technologies", "Project Management ", "Machine Learning"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        {/* Heading */}
        <div className="experience-heading">
          <div className="experience-label">
            <span></span>
            EXPERIENCE
            <span></span>
          </div>

          <h2>
            My Professional <strong>Journey</strong>
          </h2>

          <p>
            My experience across full-stack development and AI/ML, with a
            focus on building practical and scalable technology solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">

          {experiences.map((experience, index) => (
            <div
              key={experience.number}
              className="experience-item"
              style={
                {
                  "--experience-delay": `${index * 0.15}s`,
                } as React.CSSProperties
              }
            >
              {/* Timeline */}
              <div className="experience-marker">
                <span>{experience.number}</span>
              </div>

              {/* Card */}
              <article className="experience-card">

                <div className="experience-card-top">
                  <div>
                    <span className="experience-type">
                      {experience.type}
                    </span>

                    <h3>{experience.role}</h3>

                    <h4>{experience.company}</h4>
                  </div>

                  <div className="experience-icon">
                    <BriefcaseBusiness size={22} />
                  </div>
                </div>

                <div className="experience-meta">
                  <span>
                    <CalendarDays size={15} />
                    {experience.duration}
                  </span>

                  <span>
                    <MapPin size={15} />
                    {experience.location}
                  </span>
                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-tech">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="experience-card-bottom">
                  <span>Professional Experience</span>

                  <ArrowUpRight size={19} />
                </div>

                <div className="experience-glow"></div>
              </article>
            </div>
          ))}

        </div>

        {/* Bottom */}
        <div className="experience-bottom">
          <span></span>
          <p>Learning → Building → Growing</p>
          <span></span>
        </div>

      </div>
    </section>
  );
}