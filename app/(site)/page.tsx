import Hero from '@/components/sections/Hero/Hero';
import About from '@/components/sections/About/About';
import Expertise from '@/components/sections/Expertise/Expertise';
import Projects from '@/components/sections/Projects/Projects';
import Contact from '@/components/sections/Contact/Contact';

export default function HomePage(): React.ReactElement {
  return (
    <main>
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Contact />
    </main>
  );
}
