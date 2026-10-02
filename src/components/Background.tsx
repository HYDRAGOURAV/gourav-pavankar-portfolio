"use client";

export default function Background() {
  const particles = [
    { left: "8%", top: "15%", delay: "0s", size: "6px" },
    { left: "18%", top: "70%", delay: "0.5s", size: "5px" },
    { left: "30%", top: "30%", delay: "1s", size: "6px" },
    { left: "42%", top: "80%", delay: "1.5s", size: "5px" },
    { left: "55%", top: "20%", delay: "0.8s", size: "6px" },
    { left: "67%", top: "60%", delay: "1.8s", size: "5px" },
    { left: "78%", top: "25%", delay: "0.3s", size: "6px" },
    { left: "88%", top: "75%", delay: "1.2s", size: "5px" },
    { left: "93%", top: "40%", delay: "2s", size: "6px" },
    { left: "12%", top: "45%", delay: "2.5s", size: "5px" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

      {/* Moving Glow */}
      <div
        className="animated-glow"
        style={{
          left: "-150px",
          top: "10%",
        }}
      />

      <div
        className="animated-glow"
        style={{
          right: "-180px",
          bottom: "-100px",
          background: "rgba(6, 182, 212, 0.12)",
          animationDelay: "2s",
        }}
      />

      {/* Moving Grid */}
      <div className="animated-grid" />

      {/* Blinking Particles */}
      {particles.map((particle, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}