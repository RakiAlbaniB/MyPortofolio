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
                className="flex items-center justify-center px-4 py-1.5 bg-zinc-900/5 dark:bg-white/5 text-zinc-500 font-bold uppercase tracking-wider text-[10px] rounded-full border border-zinc-900/10 dark:border-white/10 shrink-0 transition-colors cursor-default shadow-sm hover:bg-zinc-900/10 dark:hover:bg-white/10"
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
