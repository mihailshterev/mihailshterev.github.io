import linkedinIcon from '../assets/linkedinIcon.png'
import githubIcon from '../assets/githubIcon.png'
import spotifyIcon from '../assets/spotifyIcon.png'
import instagramIcon from '../assets/instagramIcon.webp'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect } from 'react'
import { ContactForm } from './ContactForm'

export const ContactSection = ({elRef}) => {
  const isInView = useInView(elRef, {once: true});
  const animationControls = useAnimation();

  useEffect(() =>{
    if(isInView){
      animationControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={elRef} className='contact-section'>
        <ContactForm animationControls={animationControls}/>
        <motion.h3
        variants={{
          hidden: {opacity: 0},
          visible: {opacity: 1}
        }}
        initial="hidden"
        animate={animationControls}
        transition={{duration: 1}}>My Links: 
          <div className="links-container">
            <a href="https://www.linkedin.com/in/mihail-shterev-92b149254/" target='_blank'>
              <img  src={linkedinIcon} alt="" />
            </a>
            <a href="https://github.com/mihailshterev" target='_blank'>
              <img src={githubIcon} alt="" />
            </a>
            <a href="https://open.spotify.com/artist/5x0JssU826Vd1fIz7scsPu?si=D9hg61oVS-WuVgWIxm5MTQ" target='_blank'>
              <img src={spotifyIcon} alt="" />
            </a>
            <a href="https://www.instagram.com/mihailxshterev/" target='_blank'>
              <img src={instagramIcon} alt="" />
            </a>
          </div>
        </motion.h3>
    </div>
  )
}
