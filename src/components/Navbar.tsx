import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="font-caveat w-full md:w-64 md:flex-shrink-0 p-6 md:p-8 flex md:flex-col items-center md:items-start justify-between md:justify-center gap-4 md:gap-8 sticky top-0 bg-background z-10 md:h-screen">
      <div className="font-playwrite text-2xl md:text-3xl font-bold md:mb-12 flex flex-col">
        <span>welcome to</span>
        <span className="ml-6 md:ml-12">my portofolio</span>
      </div>
      <ul className="flex md:flex-col gap-4 md:gap-6 text-xl md:text-3xl">
        <li>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
