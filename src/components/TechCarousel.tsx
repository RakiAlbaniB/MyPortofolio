const techStack = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Figma", "Laravel", "PHP", "MySQL"
];

export default function TechCarousel() {
  return (
    <div className="w-full overflow-hidden flex mt-8 relative">
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="flex animate-scroll w-max hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-3 pr-3">
            {techStack.map((tech) => (
              <div 
                key={tech}
                className="flex items-center justify-center px-5 py-2 bg-background text-muted-foreground hover:text-foreground font-medium rounded-full text-sm border border-border shrink-0 transition-colors cursor-default shadow-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
