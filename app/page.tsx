import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div
        aria-hidden="true"
	        className="fixed inset-0 -z-50 pointer-events-none bg-center bg-repeat bg-[url('/whitebg.jpg')] bg-size-[clamp(560px,70vw,980px)] dark:bg-[url('/gridbg.png')] dark:bg-size-[clamp(900px,110vw,1400px)]"
	      />
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-40 pointer-events-none bg-white/40 dark:bg-black/70"
      />

      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
