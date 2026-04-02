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
          backgroundColor: "#ffffff",
          backgroundImage: `
            linear-gradient(to right, #f1f5f9 1px, transparent 1px),
            linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
        }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-50 pointer-events-none hidden dark:block bg-center bg-repeat bg-[url('/gridbg.png')] bg-size-[clamp(900px,110vw,1400px)]"
      />
      {/* Dark Mode Overlay */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-40 pointer-events-none hidden dark:block bg-black/70"
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








