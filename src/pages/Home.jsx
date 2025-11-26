export default function Home() {
  return (
    <main style={{ padding: "20px", lineHeight: "1.6" }}>
      {/* Hero Section */}
      <section style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          Hi, I'm <span style={{ color: "#2563eb" }}>Tanush Yadav</span>
        </h1>
        <h2 style={{ fontSize: "20px", color: "#4b5563" }}>
          Frontend Developer | React Enthusiast
        </h2>
        <p style={{ marginTop: "15px", maxWidth: "600px" }}>
          I am a passionate web developer with a strong interest in building fast,
          responsive, and user-friendly websites. Currently learning React and
          working on multiple hands-on projects to improve my skills.
        </p>
      </section>

      <hr style={{ margin: "30px 0" }} />

      {/* Skills Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>My Skills</h2>
        <ul style={{ fontSize: "16px", marginLeft: "20px" }}>
          <li>HTML5, CSS3, JavaScript</li>
          <li>React.js & React Router</li>
          <li>Responsive Web Design</li>
          <li>Vite & Create-React-App</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <hr style={{ margin: "30px 0" }} />

      {/* CTA / Personal Message */}
      <section>
        <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>What I'm Working On</h2>
        <p style={{ maxWidth: "600px" }}>
          I am currently focusing on mastering React and building real-world
          projects, including:
        </p>

        <ul style={{ fontSize: "16px", marginLeft: "20px" }}>
          <li>Portfolio website with routing</li>
          <li>Dashboard with nested routes</li>
          <li>React API-based applications</li>
        </ul>

        <p style={{ marginTop: "20px", fontStyle: "italic" }}>
          I believe in learning by building — the more I code, the better I get.
        </p>
      </section>
    </main>
  );
}
