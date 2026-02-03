/**
 * Main App component
 * Assembles all sections into the complete portfolio
 */

import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1">
                <Hero />
                <Skills />
                <Projects />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
