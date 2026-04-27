import TechCarousel from "./TechCarousel";

export default function About() {
  return (
    <section id="about" className="flex flex-col gap-6 animate-fade-in-up">
      <div className="space-y-5">
        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-border bg-muted">
          <img 
            src="/profile.jpeg" 
            alt="Raki Albani Badrawi"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="font-caveat text-2xl md:text-4xl font-extrabold tracking-tight">Raki Albani Badrawi</h1>
            <svg className="w-6 h-6 text-[#81a6c6] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.996 2.001c-1.127 0-2.181.651-2.695 1.68L8.683 4.908l-1.359.183c-1.258.17-2.222 1.258-2.247 2.531l-.013 1.353-1.042.868c-.961.8-1.144 2.196-.407 3.19l.805 1.084-.805 1.085c-.737.993-.554 2.389.407 3.189l1.042.868.013 1.354c.025 1.272.989 2.36 2.247 2.53l1.359.184.618 1.227c.514 1.029 1.568 1.68 2.695 1.68s2.181-.651 2.695-1.68l.618-1.227 1.359-.184c1.258-.17 2.222-1.258 2.247-2.53l.013-1.354 1.042-.868c.961-.8 1.144-2.196.407-3.189L17.52 12l.805-1.085c.737-.994.554-2.39-.407-3.19l-1.042-.868-.013-1.353c-.025-1.273-.989-2.361-2.247-2.531l-1.359-.183-.618-1.227c-.514-1.029-1.568-1.68-2.695-1.68zm3.284 8.783L11.08 14.98a.75.75 0 0 1-1.06 0l-2.08-2.08a.75.75 0 0 1 1.06-1.06l1.55 1.55 3.67-3.67a.75.75 0 1 1 1.06 1.06z" />
            </svg>
          </div>
          <p className="text-base text-muted-foreground font-medium">
            Front-End Developer &middot; UI/UX-Informed
          </p>
        </div>
      </div>

      <div className="space-y-4 max-w-2xl mt-2 text-base md:text-lg leading-relaxed text-muted-foreground">
        <p>
          I’m a Front-End Developer with a strong foundation in HTML, CSS, and JavaScript, combined with hands-on experience in UI/UX design. I’ve worked on multiple real-world projects, from designing user flows in Figma to building full web applications using Laravel and MySQL.
        </p>
        <p>
          Being self-driven, I enjoy turning ideas into real, user-centered digital experiences and am fully capable of building full projects independently.
        </p>
      </div>

      <div className="mt-4">
        <a 
          href="#contact" 
          className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Let&apos;s Work Together
        </a>
      </div>

      <TechCarousel />
    </section>
  );
}
