"use client";
import { personalInfo } from "./data/personal";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
//   Github,
//   Linkedin,
  Mail,
  ArrowUp,
  Heart,
} from "lucide-react";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Top */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              GP
            </div>

            <div>
              <h3>{personalInfo.name}</h3>

              <p>
                Full Stack Developer{" "}
                <span>→</span>{" "}
                AI/ML Engineer
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-nav">
            <span className="footer-title">
              QUICK LINKS
            </span>

            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Social */}
          <div className="footer-connect">
            <span className="footer-title">
              CONNECT
            </span>

            <div className="footer-socials">

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
              <FaGithub size={19} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={19} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
              >
                <Mail size={19} />
              </a>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <p className="footer-made">
            Built with
            <Heart size={14} />
            using Next.js
          </p>

          <a
            href="#home"
            className="footer-top-button"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>

        </div>

      </div>
    </footer>
  );
}