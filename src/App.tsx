import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { StudySection } from './components/StudySection';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <StudySection />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
