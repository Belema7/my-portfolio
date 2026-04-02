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
        className="fixed inset-0 -z-50 pointer-events-none block dark:hidden"
        style={{
          backgroundColor: "#f8fafc",
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-50 pointer-events-none hidden dark:block bg-center bg-repeat bg-[url('/gridbg.png')] bg-size-[clamp(900px,110vw,1400px)]"
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


