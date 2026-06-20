import { useRef } from "react";
import type { RefObject } from "react";
import { WelcomeSection } from "./components/WelcomeSection";
import { Header } from "./components/Header";
import { AboutMeSection } from "./components/AboutMeSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SpotifySection } from "./components/SpotifySection";
import { ContactSection } from "./components/ContactSection";
import { ConnectorThread } from "./components/ConnectorThread";
import { Footer } from "./components/Footer";

function App() {
  const pageRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const spotifyRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const handleClick = (elementRef: RefObject<HTMLElement | null>) => {
    window.scrollTo({ top: elementRef.current?.offsetTop, behavior: "smooth" });
  };

  return (
    <>
      <Header
        scroll={handleClick}
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        projectsRef={projectsRef}
        spotifyRef={spotifyRef}
        contactsRef={contactsRef}
      />
      <div className="page" ref={pageRef}>
        <WelcomeSection elRef={homeRef} />
        <AboutMeSection elRef={aboutMeRef} />
        <ProjectsSection elRef={projectsRef} />
        <SpotifySection elRef={spotifyRef} />
        <ContactSection elRef={contactsRef} />
        <Footer />
        <ConnectorThread wrapperRef={pageRef} sectionRefs={[homeRef, aboutMeRef, projectsRef, spotifyRef, contactsRef]} musicIndex={3} />
      </div>
    </>
  );
}

export default App;
