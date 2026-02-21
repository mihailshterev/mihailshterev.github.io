import { useRef } from 'react'
import { WelcomeSection } from './components/WelcomeSection'
import { Header } from './components/Header'
import { AboutMeSection } from './components/AboutMeSection'
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const handleClick = (elementRef) =>{
    window.scrollTo({top: elementRef.current.offsetTop, behavior: 'smooth'});
  }

  return (
    <>
      <Header scroll={handleClick} homeRef={homeRef} aboutMeRef={aboutMeRef} projectsRef={projectsRef} contactsRef={contactsRef}/>
      <WelcomeSection elRef={homeRef}/>
      <AboutMeSection elRef={aboutMeRef}/>
      <ProjectsSection elRef={projectsRef}/>
      <ContactSection elRef={contactsRef}/>
      <Footer/>
    </>
  )
}

export default App
