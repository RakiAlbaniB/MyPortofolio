import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="font-caveat w-full md:w-64 md:fixed md:left-0 md:top-0 p-6 md:p-8 flex flex-col items-center md:items-start justify-center bg-background z-50 h-auto md:h-screen">
      {/* Centered Content Block */}
      <div className="flex flex-col gap-8 md:gap-12">
        {/* Top Section: Logo */}
        <div className="font-playwrite text-2xl md:text-3xl font-bold flex flex-col">
          <span>welcome to</span>
          <span className="ml-6 md:ml-12">my portofolio</span>
        </div>

        {/* Middle Section: Links */}
        <ul className="flex md:flex-col gap-4 md:gap-6 text-xl md:text-3xl">
          <li>
            <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
          </li>
          <li>
            <Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Bottom Section: Secret Admin */}
      <div className="absolute bottom-8 left-8 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <Link 
          href="/blog?admin=true" 
          className="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-zinc-900 dark:hover:text-white font-sans font-bold"
        >
          Manage Blog
        </Link>
      </div>
    </nav>
  );
}
