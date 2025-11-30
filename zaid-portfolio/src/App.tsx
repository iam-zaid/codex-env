import Hero from './sections/Hero';
import Journey from './sections/Journey';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import ChatAssistant from './sections/ChatAssistant';
import Footer from './sections/Footer';
import './styles/layout.css';

function App() {
  return (
    <div className="min-h-screen bg-midnight text-white font-display">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-x-0 top-0 h-[520px] bg-hero-gradient blur-3xl" />
          <div className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-sfBlue/40 blur-[120px] animate-float-slow" />
          <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-tealGlow/30 blur-[130px] animate-spin-slow" />
        </div>
        <Hero />
      </div>
      <Journey />
      <Skills />
      <Projects />
      <Certifications />
      <ChatAssistant />
      <Footer />
    </div>
  );
}

export default App;
