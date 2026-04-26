export interface ProjectCardProps {
  title: string;
  tech: string[];
  problem: string;
  solution: string;
  impact: string;
}

export default function ProjectCard({ title, tech, problem, solution, impact }: ProjectCardProps) {
  return (
    <div className="group flex flex-col p-6 rounded-2xl border border-border bg-card transition-all duration-500 hover:bg-foreground hover:text-background hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
      <div className="space-y-6 z-10 relative">
        <div className="space-y-3">
          <h3 className="font-bold text-2xl tracking-tight group-hover:text-background transition-colors">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span 
                key={t} 
                className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full group-hover:bg-background/20 group-hover:text-background transition-colors duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4 text-sm mt-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-foreground group-hover:text-background/90 transition-colors uppercase tracking-wider text-xs">Problem</h4>
            <p className="text-muted-foreground group-hover:text-muted/80 leading-relaxed transition-colors">{problem}</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-foreground group-hover:text-background/90 transition-colors uppercase tracking-wider text-xs">Solution</h4>
            <p className="text-muted-foreground group-hover:text-muted/80 leading-relaxed transition-colors">{solution}</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-foreground group-hover:text-background/90 transition-colors uppercase tracking-wider text-xs">Impact</h4>
            <p className="text-muted-foreground group-hover:text-muted/80 leading-relaxed transition-colors">{impact}</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}
