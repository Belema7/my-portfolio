import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Light mode: warm sandy grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-50 block dark:hidden bg-grid-light"
      />
      {/* Dark mode: deep charcoal-olive grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-50 hidden dark:block bg-grid-dark"
      />
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
