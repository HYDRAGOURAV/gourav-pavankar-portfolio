"use client";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  Mail,
  MapPin,
  //   Github,
  //   Linkedin,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { personalInfo } from ".//data/personal";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Heading */}
        <div className="contact-heading">
          <div className="contact-label">
            <span></span>
            CONTACT
            <span></span>
          </div>

          <h2>
            Let&apos;s Build Something <strong>Together</strong>
          </h2>

          <p>
            Have a project idea, job opportunity, or just want to connect? Feel
            free to reach out. I&apos;d love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Side */}
          <div className="contact-info">
            <div className="contact-intro">
              <span className="contact-small-title">GET IN TOUCH</span>

              <h3>
                Let&apos;s turn your <span>ideas</span> into reality.
              </h3>

              <p>
                I&apos;m currently open to opportunities, freelance projects,
                collaborations, and interesting conversations around Full Stack
                Development and AI/ML.
              </p>
            </div>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-info-card"
            >
              <div className="contact-info-icon">
                <Mail size={21} />
              </div>

              <div>
                <span>Email</span>
                <strong>{personalInfo.email}</strong>
              </div>

              <ArrowUpRight size={19} className="contact-card-arrow" />
            </a>

            {/* Location */}
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MapPin size={21} />
              </div>

              <div>
                <span>Location</span>
                <strong>{personalInfo.location}</strong>
              </div>
            </div>

            {/* Social */}
            <div className="contact-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                 <FaLinkedinIn size={19} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                 <FaGithub size={19} />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form-top">
              <span>01</span>
              <span>CONTACT FORM</span>
            </div>
            {status && <p className="contact-status">{status}</p>}
            <form
              className="contact-form"
              onSubmit={async (e) => {
                e.preventDefault();

                setSending(true);
                setStatus("");

                try {
                  const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      name,
                      email,
                      message,
                    }),
                  });

                  const data = await response.json();

                  if (!response.ok) {
                    throw new Error(data.error || "Something went wrong.");
                  }

                  setStatus("Message sent successfully! 🚀");

                  setName("");
                  setEmail("");
                  setMessage("");
                } catch (error) {
                  setStatus(
                    error instanceof Error
                      ? error.message
                      : "Something went wrong. Please try again.",
                  );
                } finally {
                  setSending(false);
                }
              }}
            >
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={sending}
              >
                <Send size={18} />
                Send Message
                <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="contact-bottom">
          <span></span>
          <p>
            Open to opportunities <strong>•</strong> collaborations{" "}
            <strong>•</strong> interesting ideas
          </p>
          <span></span>
        </div>
      </div>
    </section>
  );
}
