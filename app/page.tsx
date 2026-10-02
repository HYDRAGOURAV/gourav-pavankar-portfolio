import Navbar from "@/src/components/navbar";

import Background from "@/src/components/Background";
import Heroo from "@/src/components/Hero";

import About from "@/src/components/About";
import Skill from "@/src/components/Skills";
import Project from "@/src/components/Project";
import EXE from "@/src/components/Experience";
import Certifications from "@/src/components/Certifications";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";



export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <Background />

      {/* Website Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Heroo />

        {/* About */}
        <About />

        <Skill/>

        <Project/>

        <EXE/>

        <Certifications />

        <Contact />

        <Footer/>
      </div>
    </main>
  );
}
