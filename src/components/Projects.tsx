import ProjectCard, { ProjectCardProps } from "./ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "Library Management System",
    tech: ["PHP", "Laravel", "MySQL"],
    problem: "Managing book data and transactions manually is inefficient.",
    solution: "Built a full-stack web system with CRUD operations and structured database.",
    impact: "Delivered a complete working system independently (solo project).",
  },
  {
    title: "KAO LOFI MUSIC (Android App)",
    tech: ["Kotlin", "Android Studio"],
    problem: "Need a simple and comfortable music player for long listening sessions.",
    solution: "Designed a minimalist UI and built a functional music player with playlist features.",
    impact: "Positive user feedback and complete solo development lifecycle.",
  },
  {
    title: "Venue Vibe Indonesia",
    tech: ["Figma", "Responsive Design"],
    problem: "Lack of structured UI for venue discovery.",
    solution: "Designed responsive UI system and component library.",
    impact: "Improved developer handoff and design consistency.",
  },
  {
    title: "Zhovir Gaming Gear",
    tech: ["Figma", "UX Research"],
    problem: "Inefficient user flow in e-commerce experience.",
    solution: "Redesigned information architecture and user flow.",
    impact: "Reduced task steps by ~30% and achieved final approval without revision.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
      <h2 className="font-caveat text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
