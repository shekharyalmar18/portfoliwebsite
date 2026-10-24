import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import SmoothScroll from "./components/ui/SmoothScroll";
import CustomCursor from "./components/ui/CustomCursor";
import GrainOverlay from "./components/ui/GrainOverlay";
import ScrollProgress from "./components/ui/ScrollProgress";

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative">
        <ScrollProgress />
        <CustomCursor />
        <GrainOverlay />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <Work />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}