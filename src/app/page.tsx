import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 md:gap-32 max-w-3xl mx-auto w-full">
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
