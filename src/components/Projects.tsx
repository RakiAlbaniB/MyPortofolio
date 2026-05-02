"use client";

import { useRef, useEffect } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        // Only intercept if vertical scroll is dominant
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY * 2.5,
            behavior: "auto"
          });
        }
      };
      
      el.addEventListener("wheel", onWheel, { passive: false });
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="flex flex-col gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
      <div className="flex items-end justify-between">
        <h2 className="font-caveat text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
        
        <div className="flex gap-3">
          <button 
            onClick={() => scroll('left')}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-900/10 dark:border-white/10 bg-zinc-900/5 dark:bg-white/5 text-zinc-500 hover:bg-zinc-900/10 dark:hover:bg-white/10 transition-all shadow-sm"
            aria-label="Previous project"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-900/10 dark:border-white/10 bg-zinc-900/5 dark:bg-white/5 text-zinc-500 hover:bg-zinc-900/10 dark:hover:bg-white/10 transition-all shadow-sm"
            aria-label="Next project"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-proximity gap-6 pb-8 -mx-4 px-4 no-scrollbar scroll-smooth"
      >
        {projects.map((project, idx) => (
          <div key={idx} className="min-w-[85vw] md:min-w-[400px] snap-center">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
