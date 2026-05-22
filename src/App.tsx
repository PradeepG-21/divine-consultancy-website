import { useScroll, useSpring, motion } from 'framer-motion';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <div className="App">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-gold-500 origin-left z-[60]"
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyUs />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
