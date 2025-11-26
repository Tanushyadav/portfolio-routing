export default function Projects() {
  const projects = [
    {
      title: "React To-Do App",
      description:
        "A simple and clean to-do list application built using React hooks. Allows users to add, delete, and mark tasks as completed.",
      technologies: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Weather App",
      description:
        "A weather forecasting app that fetches real-time data using the OpenWeather API. Displays temperature, humidity, and weather conditions.",
      technologies: ["React", "API", "Bootstrap"],
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing skills, projects, and contact information. Built with React Router and component-based UI.",
      technologies: ["React", "React Router", "CSS Modules"],
    },
    {
      title: "E-Commerce Mini Store",
      description:
        "A fully functional miniature e-commerce store with product listing, cart management, and item filtering.",
      technologies: ["React", "Context API", "JavaScript"],
    },
    {
      title: "Expense Tracker",
      description:
        "A finance tracking app where users can record their expenses and income with charts and monthly summaries.",
      technologies: ["React", "LocalStorage", "Chart.js"],
    },
  ];

  return (
    <main style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>My Projects</h1>

      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            background: "#fafafa",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>{project.title}</h2>
          <p style={{ marginBottom: "10px", fontSize: "15px" }}>
            {project.description}
          </p>
          <strong>Tech Used:</strong>
          <ul>
            {project.technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
