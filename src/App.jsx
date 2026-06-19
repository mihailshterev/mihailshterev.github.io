import { useRef } from "react";
import { WelcomeSection } from "./components/WelcomeSection";
import { Header } from "./components/Header";
import { AboutMeSection } from "./components/AboutMeSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SpotifySection } from "./components/SpotifySection";
import { ContactSection } from "./components/ContactSection";
import { ConnectorThread } from "./components/ConnectorThread";
import { Footer } from "./components/Footer";

function App() {
  const pageRef = useRef(null);
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const spotifyRef = useRef(null);
  const contactsRef = useRef(null);

  const handleClick = (elementRef) => {
    window.scrollTo({ top: elementRef.current.offsetTop, behavior: "smooth" });
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
