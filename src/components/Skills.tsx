"use client";

import { useEffect, useRef, useState } from "react";

import {
  FaPython,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
  FaAws,
} from "react-icons/fa";

import {
  SiDjango,
  SiNextdotjs,
  SiTailwindcss,
  SiFastapi,
  SiNumpy,
  SiPandas,
  SiMysql,
} from "react-icons/si";

export default function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`skills-section ${visible ? "skills-visible" : ""}`}
    >
      <div className="skills-container">
        {/* ================= HEADER ================= */}

        <div className="skills-heading">
          <div className="skills-label">
            <span></span>
            SKILLS
            <span></span>
          </div>

          <h2>
            Technologies I <strong>Work With</strong>
          </h2>

          <p>
            A combination of software development, backend engineering, and
            AI/ML technologies that I use to build modern solutions.
          </p>
        </div>

        {/* ================= SKILL GROUPS ================= */}

        <div className="skills-groups">
          {/* Programming */}

          <SkillGroup
            title="Programming"
            subtitle="Core languages"
            skills={[
              {
                name: "Python",
                icon: <FaPython />,
                type: "python",
              },
              {
                name: "JavaScript",
                icon: <FaJs />,
                type: "javascript",
              },
              {
                name: "SQL",
                icon: <SiMysql />,
                type: "sql",
              },
            ]}
          />

          {/* Frontend */}

          <SkillGroup
            title="Frontend"
            subtitle="Modern interfaces"
            skills={[
              {
                name: "React",
                icon: <FaReact />,
                type: "react",
              },
              {
                name: "Next.js",
                icon: <SiNextdotjs />,
                type: "next",
              },
              {
                name: "HTML5",
                icon: <FaHtml5 />,
                type: "html",
              },
              {
                name: "CSS3",
                icon: <FaCss3Alt />,
                type: "css",
              },
              {
                name: "Tailwind CSS",
                icon: <SiTailwindcss />,
                type: "tailwind",
              },
            ]}
          />

          {/* Backend */}

          <SkillGroup
            title="Backend"
            subtitle="APIs & server development"
            skills={[
              {
                name: "Django",
                icon: <SiDjango />,
                type: "django",
              },
              {
                name: "Django REST",
                icon: <SiFastapi />,
                type: "drf",
              },
              {
                name: "FastAPI",
                icon: <SiFastapi />,
                type: "fastapi",
              },
            ]}
          />

          {/* AI / ML */}

          <SkillGroup
            title="AI / Machine Learning"
            subtitle="Data & intelligent systems"
            skills={[
              {
                name: "NumPy",
                icon: <SiNumpy />,
                type: "numpy",
              },
              {
                name: "Pandas",
                icon: <SiPandas />,
                type: "pandas",
              },
              {
                name: "Scikit-learn",
                icon: <SiNumpy />,
                type: "sklearn",
              },
            ]}
          />

          {/* Tools */}

          <SkillGroup
            title="Tools & DevOps"
            subtitle="Development workflow"
            skills={[
              {
                name: "Git",
                icon: <FaGitAlt />,
                type: "git",
              },
              {
                name: "GitHub",
                icon: <FaGithub />,
                type: "github",
              },
              {
                name: "Docker",
                icon: <FaDocker />,
                type: "docker",
              },
              {
                name: "Linux",
                icon: <FaLinux />,
                type: "linux",
              },
              {
                name: "AWS",
                icon: <FaAws />,
                type: "aws",
              },
            ]}
          />
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <div className="skills-bottom">
          <span className="skills-dot"></span>

          <p>Always learning. Always building.</p>

          <span className="skills-dot"></span>
        </div>
      </div>
    </section>
  );
}

/* ================================================= */
/* SKILL GROUP */
/* ================================================= */

function SkillGroup({
  title,
  subtitle,
  skills,
}: {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    icon: React.ReactNode;
    type: string;
  }[];
}) {
  return (
    <div className="skill-group">
      <div className="skill-group-heading">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>

        <span className="skill-count">
          {skills.length.toString().padStart(2, "0")}
        </span>
      </div>

      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`skill-card skill-${skill.type}`}
            style={
              {
                "--skill-delay": `${index * 0.08}s`,
              } as React.CSSProperties
            }
          >
            <div className="skill-icon">{skill.icon}</div>

            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
