export interface ProjectCardProps {
  title: string;
  tech: string[];
  problem: string;
  solution: string;
  impact: string;
}

export default function ProjectCard({ title, tech, problem, solution, impact }: ProjectCardProps) {
  return (
    <div className="group flex flex-col p-6 rounded-2xl border border-zinc-900/10 dark:border-white/10 bg-zinc-900/5 dark:bg-white/5 transition-all duration-300 hover:bg-zinc-900/10 dark:hover:bg-white/10 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
      <div className="space-y-6 z-10 relative">
        <div className="space-y-3">
          <h3 className="font-bold text-2xl tracking-tight text-zinc-900 dark:text-white transition-colors">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span 
                key={t} 
                className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-zinc-900/5 dark:bg-white/5 text-zinc-500 border border-zinc-900/10 dark:border-white/10 rounded-full group-hover:bg-zinc-900/10 dark:group-hover:bg-white/10 transition-colors duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4 text-sm mt-4">
          <div className="space-y-1">
            <h4 className="font-bold text-zinc-400 uppercase tracking-widest text-[10px]">Problem</h4>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{problem}</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-zinc-400 uppercase tracking-widest text-[10px]">Solution</h4>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{solution}</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-zinc-400 uppercase tracking-widest text-[10px]">Impact</h4>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{impact}</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
